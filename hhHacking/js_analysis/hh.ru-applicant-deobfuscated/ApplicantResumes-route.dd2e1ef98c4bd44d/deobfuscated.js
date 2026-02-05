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
      e._sentryDebugIds[t] = "d8c2bf7f-824c-4bdd-8fbc-e31b32870026";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-d8c2bf7f-824c-4bdd-8fbc-e31b32870026";
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
  ["8811"],
  {
    173544: function (e, t, s) {
      s.d(t, {
        P: () => o,
      });
      var n = s(566183);
      var a = s(922366);
      var i = s(791996);
      var r = s(853827);
      var l = s(343856);
      const o = ({ children: e, sidebar: t, isResumeList: s }) =>
        (0, l.jsxs)(n.M, {
          children: [
            (0, l.jsx)(a.X, {
              default: 24,
              gteS: 40,
            }),
            (0, l.jsxs)(i.J, {
              children: [
                (0, l.jsx)(r.C, {
                  xs: 4,
                  s: 8,
                  m: 8,
                  l: 8,
                  xl: 8,
                  xxl: 8,
                  children: e,
                }),
                (0, l.jsx)(r.C, {
                  xs: 0,
                  s: 0,
                  m: 1,
                  l: 1,
                  xl: 1,
                  xxl: 1,
                }),
                (0, l.jsx)(r.C, {
                  xs: 4,
                  s: 8,
                  m: 3,
                  l: 3,
                  xl: 3,
                  xxl: 3,
                  children: (0, l.jsx)(t, {
                    isMagritte: true,
                    isResumeList: s,
                  }),
                }),
              ],
            }),
          ],
        });
      o.displayName =
        "layouts/BlokoLayouts/MagritteSideBarLayout/MagritteSideBarLayout";
    },
    350364: function (e, t, s) {
      s.d(t, {
        Z: () => o,
      });
      var n = s(60340);
      var a = s(594948);
      var i = s(343856);
      const r = "obtainEpguCertBanner";
      const l = () =>
        (0, a.v)(({ microFrontends: e }) => !!e[r])
          ? (0, i.jsx)(n.X, {
              place: r,
              preloadContent: null,
            })
          : null;
      l.displayName =
        "components/ApplicantObtainEpguCert/index/ApplicantObtainEpguCertBanner";
      const o = l;
    },
    139954: function (e, t, s) {
      s.d(t, {
        U: () => m,
      });
      var n = s(859716);
      var a = s(599998);
      var i = s(594948);
      var r = s(343856);
      const l = {
        UNKNOWN: "phoneVerificationPage.error.unknown",
        BAD_LOGIN: "phoneVerificationPage.error.BAD_PHONE",
        NULL_PHONE: "phoneVerificationPage.error.NULL_PHONE",
        EMPTY: "phoneVerificationPage.error.NULL_PHONE",
        NEED_PHONE: "phoneVerificationPage.needPhone",
        COUNTRY_BLACKLISTED: "phoneVerificationPage.error.restrictedCountry",
        CODE_SEND_BLOCKED:
          "rb.edit.contacts.phone.verify.send.error.CODE_SEND_BLOCKED",
        CODE_NOT_FOUND: "phoneVerificationPage.error.CODE_NOT_FOUND",
        CONFIRM_CODE_BLOCKED:
          "account.connect.merge_by_code.email.error.CONFIRM_CODE_BLOCKED.phone",
        WRONG_CODE: "phoneVerificationPage.error.WRONG_CODE",
        CODE_EXPIRED: "phoneVerificationPage.error.CODE_EXPIRED",
      };
      const o = "applicant.resumes.phoneVerification.countries";
      const c = "applicant.resumes.phoneVerification.countries.and";
      const d = {
        RU: "applicant.resumes.phoneVerification.countries.RU",
        UA: "applicant.resumes.phoneVerification.countries.UA",
        BY: "applicant.resumes.phoneVerification.countries.BY",
        UZ: "applicant.resumes.phoneVerification.countries.UZ",
        AZ: "applicant.resumes.phoneVerification.countries.AZ",
        KZ: "applicant.resumes.phoneVerification.countries.KZ",
        GE: "applicant.resumes.phoneVerification.countries.GE",
        KG: "applicant.resumes.phoneVerification.countries.KG",
      };
      const u = ({ error: e, extra: t, trls: s }) => {
        const a = (0, i.v)((e) => e.allowedSMSCountries);
        if (e) {
          return (0, r.jsx)("div", {
            "data-qa": "resumes-page-verification__error-message",
            children: ((e) => {
              let i = s[l[e] || l.UNKNOWN];
              if (e === "COUNTRY_BLACKLISTED" && a) {
                var r;
                const e =
                  (r = Object.values(a)) === null || r === undefined
                    ? undefined
                    : r.map((e) => s[d[e]]);
                i = s[o].replace("{0}", (0, n.l8)(e, s[c]));
              }
              i = i.replace("{0}", t || "");
              return i;
            })(e),
          });
        } else {
          return null;
        }
      };
      u.displayName =
        "PhoneVerification/components/PhoneVerificationError/PhoneVerificationError";
      const m = (0, a.x)(u);
    },
    827080: function (e, t, s) {
      s.d(t, {
        Z: () => Ie,
      });
      var n = s(394280);
      var a = s(491606);
      var i = s(506123);
      var r = s(365128);
      var l = s(166122);
      var o = s(594948);
      var c = s(255717);
      var d = s(997543);
      var u = s(674070);
      var m = s(599998);
      var p = s(343856);
      const h = "resumes.phoneVerification.notification.success";
      const x = ({ trls: e, ...t }) =>
        (0, p.jsx)(d.A, {
          addon: (0, p.jsx)(u.lot, {
            initialColor: "positive",
          }),
          ...t,
          children: e[h],
        });
      x.displayName =
        "PhoneVerification/components/SuccessNotification/SuccessNotification";
      const v = (0, m.x)(x);
      var y = s(859716);
      var f = s(36074);
      var b = s(372331);
      var j = s(118450);
      var g = s(842953);
      var S = s(136361);
      var k = s(922366);
      var C = s(105160);
      var _ = s(750128);
      var w = s(935192);
      var N = s(139954);
      var R = s(940389);
      var A = s(78234);
      var E = s.n(A);
      var L = s(508742);
      var P = s.n(L);
      var I = s(55873);
      const M = (0, I.makeSetStoreField)("otp");
      const T = ({
        phone: e,
        onError: t,
        onChangePhone: s,
        onNext: a,
        isOnResumeListPage: o,
      }) => {
        const d = o ? "resume_list" : "phone_verification";
        const u = (0, R.useDispatch)();
        const m = (() => {
          const e = (0, i.my)();
          return async (t) => {
            const s = new FormData();
            s.append("login", t);
            s.append("otpType", "phone");
            s.append("operationType", "RESUME_PHONE_VERIFICATION");
            e.addCaptchaParams(s);
            return c._i.postFormData("/shards/otp_generate", s);
          };
        })();
        const [p, h] = (0, n.useState)(false);
        const x = (0, i.my)();
        const { addNotification: v } = (0, l.lm)();
        return {
          otpGenerate: async () => {
            var n;
            var i;
            var l;
            if (!e) {
              t("EMPTY");
              return;
            }
            let o;
            h(true);
            try {
              o = (await m(e)).data;
            } catch (e) {
              var c;
              const s =
                e == null ||
                (c = e.response) === null ||
                c === undefined ||
                (c = c.data) === null ||
                c === undefined
                  ? undefined
                  : c.key;
              if (s) {
                t(s);
              } else {
                (0, r.eG)(e, v);
              }
              P()({
                hhtmSource: d,
                errors: JSON.stringify(e),
              });
              h(false);
              return;
            }
            h(false);
            x.updateCaptcha(o);
            if (
              ((n = o.recaptcha) === null || n === undefined || !n.isBot) &&
              ((i = o.hhcaptcha) === null || i === undefined || !i.isBot)
            ) {
              if (
                (l = o.otp.phoneFormatted) !== null &&
                l !== undefined &&
                l.formatted
              ) {
                if (s != null) {
                  s(o.otp.phoneFormatted?.formatted);
                }
              }
              u(M(o.otp));
              if (o.success) {
                P()({
                  hhtmSource: d,
                  errors: null,
                });
                if (a != null) {
                  a(o.otp, o.codeLength);
                }
              } else {
                P()({
                  hhtmSource: d,
                  errors: o.key,
                });
                t(o.key);
              }
            }
          },
          otpGenerateInProgress: p,
        };
      };
      const B = (0, I.makeSetStoreField)("recaptcha");
      const F = ({
        code: e,
        isOnResumeListPage: t,
        phone: s,
        onNext: a,
        onError: o,
      }) => {
        const d = t ? "resume_list" : "phone_verification";
        const u = (0, R.useDispatch)();
        const m = (() => {
          const e = (0, i.my)();
          return async (t, s, n) => {
            const a = new FormData();
            a.append("code", t);
            a.append("phone", s);
            a.append(
              "verificationSource",
              n ? "applicant_resumes" : "verification_page",
            );
            e.addCaptchaParams(a);
            return c._i.postFormData("/shards/phone/set_verified_phone", a);
          };
        })();
        const p = (0, i.my)();
        const [h, x] = (0, n.useState)(false);
        const { addNotification: v } = (0, l.lm)();
        return {
          setVerifiedPhone: async () => {
            var n;
            let i;
            x(true);
            try {
              i = await m(e, s, t);
            } catch (e) {
              x(false);
              (0, r.eG)(e, v);
              E()({
                hhtmSource: d,
                errors: JSON.stringify(e),
              });
              return;
            }
            const l = i.data;
            var c;
            var h;
            if (
              !(p.updateCaptcha(l),
              x(false),
              l.recaptcha && (u(B(l.recaptcha)), l.recaptcha.isBot))
            ) {
              if (
                (n = i) !== null &&
                n !== undefined &&
                (n = n.data) !== null &&
                n !== undefined &&
                (n = n.verification) !== null &&
                n !== undefined &&
                n.success
              ) {
                E()({
                  hhtmSource: d,
                  errors: null,
                });
                a();
              } else {
                E()({
                  hhtmSource: d,
                  errors:
                    l == null ||
                    (c = l.verification) === null ||
                    c === undefined
                      ? undefined
                      : c.key,
                });
                o(
                  (h = i) === null || h === undefined
                    ? undefined
                    : h.data.verification,
                );
              }
            }
          },
          verifiedPhoneInProgress: h,
        };
      };
      const D = (e) => (Date.now() + e * 1000) / 1000;
      var H = s(992778);
      var q = s(81211);
      var U = s(959369);
      var V = s(105365);
      var O = s(928635);
      const z = "input-wrapper--m1q0boRM1wEqo4Mz";
      const Z = "phone-wrapper--Se71Buksd0yUPsl4";
      const $ = "banner-content--NKB9M9LERc3jHlN3";
      const G = "banner__close--UAiZtDggQ6g2p2a2";
      const X = "resumes.phoneVerification.step2.prev";
      const Y = "resumes.phoneVerification.step2.header";
      const W = "resumes.phoneVerification.step2.header.whatsApp";
      const J = "resumes.phoneVerification.step2.subheader";
      const K = "resumes.phoneVerification.step2.code.placeholder";
      const Q = "resumes.phoneVerification.step2.code.placeholder.whatsApp";
      const ee = "resumes.phoneVerification.step2.submit";
      const te = "resumes.phoneVerification.step2.again";
      const se = "resumes.phoneVerification.step2.again.with-time";
      const ne = "resumes.phoneVerification.step2.again.whatsApp";
      const ae = "resumes.phoneVerification.step2.again.with-time.whatsApp";
      const ie = ({
        onPrev: e,
        phone: t,
        initialSecondsUntilNextSendCode: s,
        trls: a,
        isOnResumeListPage: i,
        onNext: r,
        initialCodeLength: l,
      }) => {
        const { isMobile: c } = (0, f.G)();
        const [d, m] = (0, n.useState)("");
        const [h, x] = (0, n.useState)(l);
        const [v, R] = (0, n.useState)("");
        const [A, E] = (0, n.useState)(0);
        const [L, P] = (0, n.useState)(D(s));
        const I = Math.round((0, V.p)(A));
        const M = Math.round((0, V.p)(L));
        const B = (0, o.v)(({ otp: e }) => e.authType === "WHATS_APP");
        const $ = (0, U.F)({
          trls: a,
          till: I,
        });
        const { setVerifiedPhone: G, verifiedPhoneInProgress: ie } = F({
          code: d,
          phone: t,
          onError: (e) => {
            R(e.key);
            if (e.key === "CONFIRM_CODE_BLOCKED") {
              E(e.nextConfirmTime["@timestamp"]);
            }
          },
          onNext: r,
          isOnResumeListPage: i,
        });
        const { otpGenerate: re, otpGenerateInProgress: le } = T({
          phone: t,
          onError: R,
          onNext: (e, t) => {
            x(t);
            P(D((e == null ? undefined : e.secondsUntilNextSend) ?? 0));
          },
          isOnResumeListPage: i,
        });
        const oe = {
          CONFIRM_CODE_BLOCKED: $,
        };
        const ce = (0, p.jsx)(b.I, {
          "data-qa": "otp-code-input",
          placeholder: B ? a[Q] : a[K],
          invalid: !!v && (!!oe[v] || oe[v] === undefined),
          errorMessage: (0, p.jsx)(N.U, {
            error: v,
            extra: oe[v] || null,
          }),
          value: d,
          onChange: (e) => {
            R("");
            m(e);
          },
        });
        const de = M
          ? a[B ? ae : se].replace(
              "{0}",
              `${`0${Math.floor(M / 60)}`.slice(-2)}:${("0" + (M % 60)).slice(-2)}`,
            )
          : a[B ? ne : te];
        const ue = c
          ? (0, p.jsx)(j.z, {
              "data-qa": "oauth-merge-by-code__code-resend",
              disabled: ie || !!M,
              loading: le,
              stretched: true,
              mode: "secondary",
              style: "accent",
              onClick: re,
              children: de,
            })
          : (0, p.jsx)(g.r, {
              "data-qa": "oauth-merge-by-code__code-resend",
              typography: "label-2-regular",
              disabled: ie || !!M,
              onClick: re,
              children: de,
            });
        const me = (0, p.jsx)("div", {
          children: (0, p.jsx)(j.z, {
            "data-qa": "otp-code-submit",
            disabled: d.length < h || le,
            loading: ie,
            stretched: c,
            mode: "primary",
            style: "accent",
            onClick: G,
            children: a[ee],
          }),
        });
        return (0, p.jsx)(H.Z, {
          "data-qa": "otp-code-form",
          children: (0, p.jsxs)(S.Z, {
            padding: 24,
            borderRadius: 24,
            borderWidth: "default",
            stretched: true,
            children: [
              (0, p.jsx)(g.r, {
                iconLeft: (0, p.jsx)(u.ee, {}),
                onClick: e,
                "data-qa": "otp-code-cancel",
                children: a[X],
              }),
              (0, p.jsx)(k.X, {
                default: 16,
              }),
              (0, p.jsx)(C.x, {
                typography: "title-4-semibold",
                children: (0, y.WU)(B ? a[W] : a[Y], {
                  "{0}": (0, p.jsx)("span", {
                    className: Z,
                    children: t,
                  }),
                }),
              }),
              (0, p.jsx)(k.X, {
                default: 8,
              }),
              (0, p.jsx)(C.x, {
                style: "secondary",
                children: a[J],
              }),
              (0, p.jsx)(k.X, {
                default: 16,
                gteS: 24,
              }),
              c &&
                (0, p.jsxs)(_.z, {
                  default: 0,
                  children: [
                    ce,
                    (0, p.jsx)(k.X, {
                      default: 24,
                    }),
                    me,
                    (0, p.jsx)(k.X, {
                      default: 12,
                    }),
                    ue,
                  ],
                }),
              !c &&
                (0, p.jsxs)(w.q, {
                  default: 12,
                  children: [
                    (0, p.jsxs)("div", {
                      className: z,
                      children: [
                        ce,
                        (0, p.jsx)(O.Z, {
                          className: "resume-recaptcha",
                        }),
                        (0, p.jsx)(q.Z, {}),
                        (0, p.jsx)(k.X, {
                          default: 24,
                        }),
                        ue,
                      ],
                    }),
                    me,
                  ],
                }),
            ],
          }),
        });
      };
      ie.displayName = "components/steps/CodeConfirmStep/CodeConfirmStep";
      const re = (0, m.x)(ie);
      var le = s(791256);
      var oe = s(403475);
      var ce = s.n(oe);
      var de = s(895370);
      var ue = s.n(de);
      var me = s(861044);
      var pe = s.n(me);
      var he = s(650911);
      var xe = s(846192);
      const ve = "resumes.phoneVerification.step3.header";
      const ye = "resumes.phoneVerification.step3.subheader";
      const fe = "resumes.phoneVerification.step3.button";
      const be = ({ phone: e, onClose: t, trls: s }) => {
        const n = (0, a.usePush)();
        const i = (0, xe.rw)();
        return (0, p.jsx)(le.ElementShownAnchor, {
          fn: ue(),
          bannerName: "auth_type_phone_banner",
          hhtmSource: "resume_list",
          children: (0, p.jsx)(S.Z, {
            padding: 24,
            borderRadius: 24,
            borderWidth: "default",
            stretched: true,
            children: (0, p.jsxs)("div", {
              className: $,
              children: [
                (0, p.jsx)(C.x, {
                  "data-qa": "verify-phone-tile",
                  typography: "title-5-semibold",
                  children: s[ve].replace("{0}", i),
                }),
                (0, p.jsx)(k.X, {
                  default: 6,
                }),
                (0, p.jsx)(C.x, {
                  typography: "paragraph-2-regular",
                  children: (0, y.WU)(s[ye], {
                    "{0}": (0, p.jsx)("span", {
                      className: Z,
                      children: e,
                    }),
                  }),
                }),
                (0, p.jsx)(k.X, {
                  default: 24,
                }),
                (0, p.jsx)(j.z, {
                  "data-qa": "set-verify-phone-auth-method",
                  stretched: true,
                  mode: "primary",
                  style: "accent",
                  onClick: () => {
                    pe()({
                      bannerName: "auth_type_phone_banner",
                      hhtmSource: "resume_list",
                      buttonText: s[fe],
                    });
                    n("/applicant/settings#phone");
                  },
                  children: s[fe],
                }),
                (0, p.jsx)("div", {
                  className: G,
                  children: (0, p.jsx)(he.a, {
                    "aria-label": "banner close",
                    icon: u.Cs7,
                    mode: "secondary",
                    onClick: () => {
                      ce()({
                        bannerName: "auth_type_phone_banner",
                        hhtmSource: "resume_list",
                      });
                      t();
                    },
                    style: "neutral",
                    "data-qa": "banner-close",
                  }),
                }),
              ],
            }),
          }),
        });
      };
      be.displayName = "components/steps/InfoStep/InfoStep";
      const je = (0, m.x)(be);
      var ge = s(972302);
      var Se = s(226453);
      const ke = "resumes.phoneVerification.step1.header";
      const Ce = "resumes.phoneVerification.step1.subheader";
      const _e = "resumes.phoneVerification.step1.button";
      const we = ({
        trls: e,
        onNext: t,
        initialPhone: s,
        isOnResumeListPage: a,
      }) => {
        const [i, r] = (0, n.useState)(s);
        const { pathname: l } = (0, o.v)(({ router: e }) => e.location);
        const { isMobile: c } = (0, f.G)();
        const [d, u] = (0, n.useState)("");
        const m = [Se.Z.applicantResumes, Se.Z.applicantPhoneVerification].some(
          (e) =>
            (0, ge.matchPath)(l, {
              path: e,
              exact: true,
              strict: true,
            }),
        )
          ? {
              autoComplete: "off",
            }
          : {};
        const { otpGenerate: h, otpGenerateInProgress: x } = T({
          phone: i,
          onNext: t,
          onError: u,
          onChangePhone: r,
          isOnResumeListPage: a,
        });
        const v = (0, p.jsx)(b.I, {
          "data-qa": "phone-verify-input",
          invalid: !!d,
          errorMessage: (0, p.jsx)(N.U, {
            error: d,
          }),
          value: i,
          onChange: (e) => {
            u("");
            r(e);
          },
          ...m,
        });
        const y = (0, p.jsx)("div", {
          children: (0, p.jsx)(j.z, {
            "data-qa": "phone-verify-submit",
            loading: x,
            stretched: c,
            mode: "primary",
            style: "accent",
            onClick: h,
            children: e[_e],
          }),
        });
        return (0, p.jsx)(H.Z, {
          "data-qa": "resume-phone-verification",
          children: (0, p.jsxs)(S.Z, {
            padding: 24,
            borderRadius: 24,
            borderWidth: "default",
            stretched: true,
            children: [
              (0, p.jsx)(C.x, {
                typography: "title-4-semibold",
                children: e[ke],
              }),
              (0, p.jsx)(k.X, {
                default: 8,
              }),
              (0, p.jsx)(C.x, {
                style: "secondary",
                children: e[Ce],
              }),
              (0, p.jsx)(k.X, {
                default: 16,
                gteS: 24,
              }),
              c &&
                (0, p.jsxs)(_.z, {
                  default: 24,
                  children: [
                    v,
                    (0, p.jsx)(O.Z, {
                      className: "resume-recaptcha",
                    }),
                    (0, p.jsx)(q.Z, {}),
                    y,
                  ],
                }),
              !c &&
                (0, p.jsxs)(w.q, {
                  default: 12,
                  children: [
                    (0, p.jsxs)("div", {
                      className: z,
                      children: [
                        v,
                        (0, p.jsx)(O.Z, {
                          className: "resume-recaptcha",
                        }),
                        (0, p.jsx)(q.Z, {}),
                      ],
                    }),
                    y,
                  ],
                }),
            ],
          }),
        });
      };
      we.displayName = "components/steps/VerificationStep/VerificationStep";
      const Ne = (0, m.x)(we);
      const Re = "VERIFICATION";
      const Ae = "CODE_CONFIRM";
      const Ee = "INFO";
      const Le = "DONE";
      const Pe = ({ isOnResumeListPage: e, resumes: t, initialPhone: s }) => {
        const m = (0, a.usePush)();
        const h = (0, i.my)();
        const x = (0, o.v)(({ authPhone: e }) =>
          e == null ? undefined : e.raw,
        );
        const y = (0, o.v)(({ authPhone: e }) =>
          e == null ? undefined : e.formatted,
        );
        const f =
          t.filter((e) => {
            return e.phone[0]?.raw === x;
          }).length > 0;
        const [b, j] = (0, n.useState)(Re);
        const g = !x;
        const S = (s == null ? undefined : s.raw) ?? "";
        const k = (s == null ? undefined : s.formatted) ?? "";
        const [C, _] = (0, n.useState)(S);
        const [w, N] = (0, n.useState)(k);
        const [R, A] = (0, n.useState)(0);
        const [E, L] = (0, n.useState)(0);
        const { addNotification: P } = (0, l.lm)();
        const I = async (s) => {
          try {
            const n = e ? "resume_list" : "resume_phone_verification";
            await (({
              resumes: e,
              newPhone: t,
              initialPhone: s,
              source: n,
            }) => {
              const a = JSON.stringify(
                e
                  .filter((e) => {
                    return e.phone[0]?.raw === s;
                  })
                  .map((e) => ({
                    hash: e._attributes.hash,
                    phones: e.phone.map((e) => ({
                      formatted: e.type === "cell" ? t : e.formatted,
                      type: e.type,
                      comment: e.comment,
                    })),
                  })),
              );
              return c._i.postFormData(
                "/shards/phone/set_verified_phone_to_resumes",
                {
                  allResumePhones: a,
                  source: n,
                },
              );
            })({
              resumes: t,
              source: n,
              initialPhone: S,
              newPhone: s ?? w,
            });
          } catch (e) {
            (0, r.eG)(e, P);
            return;
          }
          P(v);
          if (g || !f) {
            j(Ee);
          } else {
            j(Le);
            if (!e) {
              m("/applicant/resumes");
            }
          }
        };
        const M = (
          { phone: e, phoneFormatted: t, secondsUntilNextSend: s },
          n,
        ) => {
          h.resetCaptcha();
          _((t == null ? undefined : t.raw) ?? e ?? "");
          N((t == null ? undefined : t.formatted) || e || "");
          L(s ?? 0);
          A(n);
          if (
            t != null &&
            t.formatted &&
            (t == null ? undefined : t.formatted) === y
          ) {
            I(t == null ? undefined : t.formatted);
            j(Ee);
          } else {
            j(Ae);
          }
        };
        if (b === Re) {
          return (0, p.jsx)(Ne, {
            onNext: M,
            initialPhone: w,
            isOnResumeListPage: e,
          });
        } else if (b === Ae) {
          return (0, p.jsx)(re, {
            onPrev: () => j(Re),
            phone: w || C,
            isOnResumeListPage: e,
            onNext: I,
            initialSecondsUntilNextSendCode: E,
            initialCodeLength: R,
          });
        } else if (b === Ee) {
          return (0, p.jsx)(je, {
            phone: w || C,
            isOnResumeListPage: e,
            onClose: () => {
              if (e) {
                j(Le);
              } else {
                m("/applicant/resumes");
              }
            },
          });
        } else {
          return null;
        }
      };
      Pe.displayName =
        "ApplicantResumes/PhoneVerification/index/PhoneVerification";
      const Ie = Pe;
    },
    331913: function (e, t, s) {
      s.d(t, {
        N: () => g,
      });
      var n = s(882177);
      var a = s.n(n);
      var i = s(791256);
      var r = s(971408);
      var l = s.n(r);
      var o = s(988553);
      var c = s.n(o);
      var d = s(413134);
      var u = s(491606);
      var m = s(136361);
      var p = s(626462);
      var h = s(15791);
      var x = s(922366);
      var v = s(842953);
      var y = s(997769);
      var f = s(594948);
      const b = "card-content--ssAGsIQtIld8Lxu_";
      var j = s(343856);
      const g = ({
        title: e,
        text: t,
        icon: s,
        link: n,
        linkText: r,
        dataAnalytics: o,
        withoutRadius: g,
      }) => {
        const S = (0, f.v)(({ userType: e }) => e);
        const k = (0, f.v)(({ analyticsParams: e }) => e.hhtmSource);
        const C = (0, i.useElementShown)(c(), {
          elementName: o,
        });
        const _ = () => {
          const e = (0, d.j)(n);
          e.params = {
            ...e.params,
            from: k,
            hhtmFromLabel: "cards_applicant_services_slider",
          };
          return e.href;
        };
        return (0, j.jsx)(m.Z, {
          Element: u.SPALink,
          to: _(),
          padding: 24,
          borderRadius: g ? 0 : 24,
          onClick: () => {
            l()({
              buttonName: o,
            });
            (0, y.sendAnalyticsResumesSlider)(o, S);
          },
          borderWidth: g ? "none" : "default",
          stretched: true,
          ref: C,
          verticalStretched: !g,
          children: (0, j.jsxs)("div", {
            className: a()({
              [b]: !g,
            }),
            children: [
              (0, j.jsxs)(p.b, {
                children: [
                  (0, j.jsx)(h.j, {
                    type: "title",
                    children: e,
                  }),
                  (0, j.jsx)(h.j, {
                    type: "subtitle",
                    children: t,
                  }),
                ],
              }),
              (0, j.jsxs)("div", {
                children: [
                  (0, j.jsx)(x.X, {
                    default: 16,
                  }),
                  (0, j.jsx)(p.b, {
                    right: s,
                    left: (0, j.jsx)(v.r, {
                      typography: "label-3-regular",
                      Element: u.SPALink,
                      to: _(),
                      style: "accent",
                      children: r,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      g.displayName =
        "components/ApplicantServiceSlider/ApplicantServiceCard/ApplicantServiceCard";
    },
    815853: function (e, t, s) {
      s.d(t, {
        I: () => m,
      });
      var n = s(394280);
      var a = s(674070);
      var i = s(951240);
      var r = s(594948);
      var l = s(730364);
      var o = s(145106);
      var c = s(65110);
      const d = {
        title: "applicantServicesSlider.cards.marketplace.title",
        text: "applicantServicesSlider.cards.marketplace.text",
        link: "applicantServicesSlider.cards.marketplace.link.text",
      };
      const u = {
        title: "applicantServicesSlider.cards.resumeAudit.title",
        text: "applicantServicesSlider.cards.resumeAudit.text",
        link: "applicantServicesSlider.cards.resumeAudit.link.text",
      };
      const m = ({ trls: e }) => {
        const t = (0, i.r)();
        const s = (0, r.v)(({ applicantPaymentServices: e }) => e);
        const m = (0, c.a)(e);
        return (0, n.useMemo)(() => {
          const i = [];
          if (t) {
            i.push(
              m,
              {
                id: "marketplace",
                title: e[d.title],
                text: e[d.text],
                icon: (0, n.createElement)(a.uIk, {
                  initialColor: "accent",
                }),
                link: o.ye,
                linkText: e[d.link],
                dataAnalytics: "marketplace",
                enabled: s.includes(l.dw.Marketplace),
              },
              {
                id: "resume_audit",
                title: e[u.title],
                text: e[u.text],
                icon: (0, n.createElement)(a.MTS, {
                  initialColor: "positive",
                }),
                link: "/applicant-services/payment/RESUME_AUDIT",
                linkText: e[u.link],
                dataAnalytics: "resume_audit",
                enabled: s.includes(l.dw.ResumeAudit),
              },
            );
          }
          return i.filter((e) => e.enabled);
        }, [t, m, e, s]);
      };
    },
    65110: function (e, t, s) {
      s.d(t, {
        a: () => v,
      });
      var n = s(394280);
      var a = s(413134);
      var i = s(730989);
      var r = s(859716);
      var l = s(845942);
      var o = s(555498);
      var c = s(927633);
      var d = s(594948);
      var u = s(145106);
      const m = {
        title: "applicantServicesSlider.cards.hhPro.title",
        text: "applicantServicesSlider.cards.hhPro.text",
        link: "applicantServicesSlider.cards.hhPro.link.text",
      };
      const p = {
        title: "applicantServicesSlider.cards.hasHhPro.title",
        text: "applicantServicesSlider.cards.hasHhPro.text",
        link: "applicantServicesSlider.cards.hasHhPro.link.text",
        textSuspended:
          "applicantServicesSlider.cards.hasHhPro.statusSuspended.text",
      };
      const h = "applicantServicesSlider.cards.frozenHhPro.title";
      const x = "applicantServicesSlider.cards.hhPro.textNetologyExp";
      const v = (e) => {
        const t = (0, d.v)((e) => e.hhProActiveSubscription);
        const s = (0, d.v)(({ stateHhPro: e }) => e);
        const v = (0, i.ZP)("hhpro_courses_c", s === c.Jd.Available);
        const y = (0, n.useMemo)(() => {
          if (t) {
            const s =
              t.status === c.NB.Suspended ? e[p.textSuspended] : e[p.text];
            return (0, r.WU)(s, {
              "{date}": (0, l.p6)(t.expiredAt, "dd.MM.yy"),
            });
          }
          if (v) {
            return e[x];
          } else {
            return e[m.text];
          }
        }, [t, v, e]);
        const f = (0, n.useMemo)(
          () =>
            t
              ? u.F6
              : v
                ? `${u.Pp}?${a.j.stringify({
                    tariffSet: "netology",
                  })}`
                : u.Pp,
          [t, v],
        );
        const b = (0, n.useMemo)(
          () =>
            s === c.Jd.Active
              ? e[p.title]
              : s === c.Jd.Frozen
                ? e[h]
                : e[m.title],
          [s, e],
        );
        return (0, n.useMemo)(
          () => ({
            id: "hh_pro",
            title: b,
            text: y,
            icon: (0, n.createElement)(o.Y8$),
            link: f,
            linkText: t ? e[p.link] : e[m.link],
            dataAnalytics: "hhpro",
            enabled: s !== c.Jd.UnAvailable,
          }),
          [t, e, y, b, f, s],
        );
      };
    },
    32470: function (e, t, s) {
      s.d(t, {
        m: () => j,
      });
      var n = s(730989);
      var a = s(36074);
      var i = s(136361);
      var r = s(848484);
      var l = s(922366);
      var o = s(428909);
      var c = s.n(o);
      var d = s(350364);
      var u = s(331913);
      var m = s(815853);
      var p = s(963750);
      var h = s(799073);
      var x = s(599998);
      var v = s(594948);
      var y = s(468444);
      var f = s(343856);
      const b = ({ isMagritte: e, isResumeList: t, trls: s }) => {
        const o = (0, v.v)(({ banners: e }) => e["right-column"]);
        const x = (0, v.v)((e) => e.userType === y.FW.Applicant);
        const { isMobile: b } = (0, a.G)();
        const j = (0, m.I)({
          trls: s,
        });
        const g = t && !b;
        const S = (0, n.ZP)("hh_pro_cjm_resume_list_slider_c", g, g);
        if (e) {
          return (0, f.jsxs)(f.Fragment, {
            children: [
              S &&
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)(i.Z, {
                      padding: 0,
                      borderRadius: 24,
                      borderWidth: "default",
                      stretched: true,
                      children: j.map((e, t) =>
                        (0, f.jsxs)(f.Fragment, {
                          children: [
                            t !== 0 && (0, f.jsx)(r.i, {}),
                            (0, f.jsx)(u.N, {
                              title: e.title,
                              text: e.text,
                              icon: e.icon,
                              link: e.link,
                              linkText: e.linkText,
                              dataAnalytics: e.dataAnalytics,
                              withoutRadius: true,
                            }),
                          ],
                        }),
                      ),
                    }),
                    (0, f.jsx)(l.X, {
                      default: 24,
                    }),
                  ],
                }),
              (0, f.jsxs)("div", {
                className: "applicant-sidebar-banners-list",
                children: [
                  o &&
                    o.map((e) =>
                      (0, f.jsx)(
                        p.F,
                        {
                          ...e,
                        },
                        e.id,
                      ),
                    ),
                  !b && x && (0, f.jsx)(d.Z, {}),
                  (0, f.jsx)(h.a, {
                    className: "applicant-sidebar-banners-wrapper",
                  }),
                ],
              }),
            ],
          });
        } else {
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(c(), {
                xs: "4",
                s: "4",
                m: "4",
                l: "5",
                children:
                  o &&
                  o.map((e) =>
                    (0, f.jsx)(
                      p.F,
                      {
                        ...e,
                      },
                      e.id,
                    ),
                  ),
              }),
              (0, f.jsx)(h.a, {
                isBloko: true,
                className: "applicant-sidebar-clickme-banners-wrapper",
              }),
            ],
          });
        }
      };
      b.displayName =
        "components/ApplicantSideBar/index/ApplicantSideBarComponent";
      const j = (0, x.x)(b);
    },
    113367: function (e, t, s) {
      s.d(t, {
        q: () => p,
      });
      var n = s(394280);
      var a = s(580356);
      var i = s(118450);
      var r = s(674070);
      var l = s(599998);
      var o = s(343856);
      const c = "applicantSkillsVerificationMethods.error.text";
      const d = "applicantSkillsVerificationMethods.ok";
      const u = "applicantSkillsVerificationMethods.magriteTitle";
      const m = ({ trls: e, onClick: t }) => {
        const [s, l] = (0, n.useState)(true);
        const m = () => {
          l(false);
          t();
        };
        return (0, o.jsx)(a.bZ, {
          title: e[u],
          description: e[c],
          iconStyle: "negative",
          layout: "vertical",
          icon: (0, o.jsx)(r.uvJ, {}),
          buttons: (0, o.jsx)(i.z, {
            mode: "primary",
            style: "accent",
            stretched: true,
            onClick: m,
            children: e[d],
          }),
          visible: s,
          onClose: m,
        });
      };
      m.displayName =
        "components/ApplicantSkillsVerificationError/index/ApplicantSkillsVerificationErrorComponent";
      const p = (0, l.x)(m);
    },
    963750: function (e, t, s) {
      s.d(t, {
        F: () => f,
      });
      var n = s(394280);
      var a = s(764709);
      var i = s(963252);
      var r = s(940389);
      var l = s(343856);
      let o;
      o = s(965073).default;
      class c extends n.Component {
        element = null;
        destroy = null;
        wrapperRef = (0, n.createRef)();
        abortController = null;
        static defaultProps = {
          templateName: "HHC-Banners-Place-Template",
        };
        componentDidMount() {
          this.element = this.wrapperRef.current;
          if (this.element) {
            this.element.addEventListener(
              "HH-Banners-Init",
              this.setContainerSizes,
              {
                once: true,
              },
            );
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
          var t;
          var s;
          if (
            (e = this.abortController) !== null &&
            e !== undefined &&
            (t = e.abort) !== null &&
            t !== undefined
          ) {
            t.call(e);
          }
          if (this.element) {
            this.element.removeEventListener(
              "HH-Banners-Init",
              this.setContainerSizes,
            );
          }
          if ((s = this.destroy) !== null && s !== undefined) {
            s.call(this);
          }
          this.element = null;
          this.wrapperRef.current = null;
          if (this.props.fwdRef) {
            this.props.fwdRef.current = null;
          }
        }
        shouldComponentUpdate(e) {
          return (
            !e.cancelFetchBanners &&
            (e.search !== this.props.search ||
              e.pathname !== this.props.pathname)
          );
        }
        initBanners() {
          var e;
          const {
            id: t,
            templateName: s,
            adfoxParams: n,
            userTargeting: a,
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
          if (n) {
            i = {
              ...n,
              type: "adfox",
              bannerId: t,
              place: t,
              bannerCommonTargeting: a,
              bannerAdTargeting: n.bannerAdTargeting || {},
            };
          }
          const r = {
            id: t,
            templateName: s,
            adfoxParams: i,
          };
          if (o) {
            this.destroy = o(this.element, r, this.abortController);
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
            return (0, l.jsx)("div", {
              ref: (e) => {
                if (this.wrapperRef) {
                  this.wrapperRef.current = e;
                }
                if (this.props.fwdRef && e) {
                  this.props.fwdRef.current = e;
                }
              },
            });
          }
        }
      }
      c.displayName = "components/Banner/index/BannerRaw";
      const d = (e, t) =>
        (0, l.jsx)(c, {
          ...e,
          fwdRef: t,
        });
      d.displayName = "components/Banner/index/Banner";
      const u = (0, r.connect)(
        (e) => ({
          pathname: e.router.location.pathname,
          search: e.router.location.search,
          cancelFetchBanners: e.cancelFetchBanners,
          userTargeting: e.userTargeting,
        }),
        null,
        null,
        {
          forwardRef: true,
        },
      )((0, n.forwardRef)(d));
      var m = s(594948);
      var p = s(642053);
      const h = "yandex_adfox_stub_enabled";
      const x = ({ renderRef: e, wrapperRef: t, ...s }) => {
        (0, n.useEffect)(
          () => () => {
            if (e) {
              e.current = null;
            }
            if (t) {
              t.current = null;
            }
          },
          [e, t],
        );
        return (0, l.jsx)("div", {
          ref: (s) => {
            if (e) {
              e.current = s;
            }
            if (t) {
              t.current = s;
            }
          },
          ...s,
        });
      };
      x.displayName =
        "components/Banner/AdsExternalBanner/AdsExternalBannerWrapper";
      const v = (0, n.memo)(x);
      const y = ({ id: e, cId: t, pp: s, p2: n, ...o }, c) => {
        const d = (0, i.n)(h);
        const x = (0, a.z)();
        const y = s && n;
        const f = (() => {
          const e = (0, m.v)((e) => {
            var s;
            return (
              ((s = e.searchClusters) === null ||
              s === undefined ||
              (s = s[p.Kz.Area]) === null ||
              s === undefined ||
              (s = s.selectedValues) === null ||
              s === undefined
                ? undefined
                : s.map(String)) ?? null
            );
          }, r.shallowEqual);
          const t = (0, m.v)(
            (e) => [
              ...new Set(
                e.vacancySearchResult.vacancies.flatMap((e) =>
                  e.professionalRoleIds.flatMap((e) => e.professionalRoleId),
                ),
              ),
            ],
            r.shallowEqual,
          );
          return {
            ...(e && {
              contextRegions: e.length ? e : null,
            }),
            ...(t.length && {
              contextProfessionalRoles: t,
            }),
          };
        })();
        if (y) {
          return (0, l.jsx)(
            u,
            {
              id: e,
              templateName: "",
              adfoxParams: {
                pp: s,
                p2: n,
                cId: t,
                useAdfoxMock: d,
                fastTargeting: f,
                ...o,
              },
              render: (s) =>
                (0, l.jsx)(
                  v,
                  {
                    renderRef: s,
                    wrapperRef: c,
                    id: t,
                    className: `HHC-Banner-${e} HH-Banner-Adfox banner-place banner-place_${e}`,
                    "data-banner-id": e,
                    "data-direct-banner-class": `banner-adfox-any_${e}`,
                    "data-image-banner-class": `banner-adfox-direct_${e}`,
                    "data-old-banner-class": `banner-adfox-old_${e}`,
                    "data-empty-class": "banner-place_hide",
                    "data-loaded-class": "banner-place_show",
                  },
                  t,
                ),
            },
            t,
          );
        } else {
          console.error(
            `no Adfox params for banner place ${e} on countryId ${x}`,
          );
          return null;
        }
      };
      y.displayName =
        "components/Banner/AdsExternalBanner/AdsExternalBannerComponent";
      const f = (0, n.forwardRef)(y);
    },
    799073: function (e, t, s) {
      s.d(t, {
        a: () => p,
      });
      var n = s(940389);
      var a = s(853827);
      var i = s(428909);
      var r = s.n(i);
      var l = s(840933);
      var o = s(882177);
      var c = s.n(o);
      var d = s(343856);
      const u = ({ children: e, className: t }) =>
        (0, d.jsx)("div", {
          className: c()("HHC-Banner-Wrapper clickme", t),
          "data-loaded-class": "clickme_loaded",
          children: e,
        });
      u.displayName = "components/Clickme/Wrapper/Wrapper";
      const m = ({
        banners: e,
        clickmeReferralLink: t,
        wrapperClassName: s,
        className: n,
        isBloko: i = false,
      }) =>
        e && e.length !== 0
          ? i
            ? (0, d.jsxs)(u, {
                className: n,
                children: [
                  t,
                  (0, d.jsx)(l.Z, {
                    groupClassNames: s,
                    banners: e,
                    children: (e, t) =>
                      (0, d.jsx)(
                        r(),
                        {
                          xs: 4,
                          s: 4,
                          m: 4,
                          l: 5,
                          children: e,
                        },
                        t,
                      ),
                  }),
                ],
              })
            : (0, d.jsxs)(u, {
                className: n,
                children: [
                  t,
                  (0, d.jsx)(l.Z, {
                    groupClassNames: s,
                    banners: e,
                    children: (e, t) =>
                      (0, d.jsx)(
                        a.C,
                        {
                          xs: 4,
                          s: 8,
                          m: 3,
                          l: 3,
                          children: e,
                        },
                        t,
                      ),
                  }),
                ],
              })
          : null;
      m.displayName = "components/Clickme/List/ListComponent";
      const p = (0, n.connect)(
        (e) => ({
          banners: e.banners,
        }),
        undefined,
        (e, t, s) => ({
          banners: e.banners["right-column-clickme"],
          ...s,
          ...t,
        }),
      )(m);
    },
    975886: function (e, t, s) {
      s.d(t, {
        s: () => c,
      });
      var n = s(491606);
      var a = s(452528);
      var i = s.n(a);
      var r = s(599998);
      var l = s(343856);
      const o = ({ trls: e }) =>
        (0, l.jsx)("div", {
          className: "clickme__link-wrapper",
          children: (0, l.jsx)(n.SPALink, {
            to: "https://clickme.hh.ru/new/dashboard?utm_source=block_referral",
            rel: "noopener noreferrer",
            className: "clickme__link",
            target: "_blank",
            children: (0, l.jsx)(i(), {
              size: a.TextSize.Small,
              children: e[o.trls.link],
            }),
          }),
        });
      o.displayName = "components/Clickme/ReferralLink/ReferralLinkComponent";
      const c = (0, r.x)(o);
      o.trls = {
        link: "clickme.adv.here",
      };
    },
    840933: function (e, t, s) {
      s.d(t, {
        Z: () => u,
      });
      var n = s(394280);
      var a = s(882177);
      var i = s.n(a);
      var r = s(963750);
      var l = s(343856);
      const o = ({
        groupClassNames: e,
        banners: t,
        children: s = (e, t) =>
          (0, l.jsx)(
            n.Fragment,
            {
              children: e,
            },
            t,
          ),
      }) =>
        (0, l.jsx)("div", {
          className: i()("banner-group-default", e),
          children: t.map((e, t) =>
            s(
              (0, l.jsx)(
                r.F,
                {
                  ...e,
                },
                e.cId,
              ),
              e.cId,
              t,
            ),
          ),
        });
      o.displayName = "components/Banner/BannersGroup/BannersGroup";
      var c = s(975886);
      const d = ({
        banners: e,
        showReferralLink: t = false,
        children: s,
        groupClassNames: a = "",
      }) =>
        (0, l.jsxs)(n.Fragment, {
          children: [
            t && (0, l.jsx)(c.s, {}),
            (0, l.jsx)(o, {
              banners: e,
              groupClassNames: a,
              children: s,
            }),
          ],
        });
      d.displayName = "components/Clickme/index/Clickme";
      const u = d;
    },
    959369: function (e, t, s) {
      s.d(t, {
        F: () => c,
      });
      var n = s(394280);
      var a = s(52013);
      var i = s(21084);
      var r = s(325423);
      var l = s(105365);
      const o = {
        hours: {
          one: "components.TimeoutCounterLeftText.hours.objective.one",
          some: "components.TimeoutCounterLeftText.hours.objective.some",
          many: "components.TimeoutCounterLeftText.hours.objective.many",
        },
        minutes: {
          one: "components.TimeoutCounterLeftText.minutes.objective.one",
          some: "components.TimeoutCounterLeftText.minutes.objective.some",
          many: "components.TimeoutCounterLeftText.minutes.objective.many",
        },
        seconds: {
          one: "components.TimeoutCounterLeftText.seconds.objective.one",
          some: "components.TimeoutCounterLeftText.seconds.objective.some",
          many: "components.TimeoutCounterLeftText.seconds.objective.many",
        },
      };
      const c = ({ trls: e, till: t, onTimeoutReached: s }) => {
        const c = (0, l.p)(t);
        (0, n.useEffect)(() => {
          if (c < 1 && s) {
            s();
          }
        }, [c, s]);
        if (c < 1) {
          return null;
        }
        const d = (0, a.Z)({
          start: 0,
          end: c * 1000,
        });
        let u = "";
        Object.keys(d).forEach((t) => {
          if (d[t]) {
            u =
              u +
              r.T4 +
              (0, i._)(d[t], {
                one: e[o[t].one],
                some: e[o[t].some],
                many: e[o[t].many],
              });
          }
        });
        return u;
      };
    },
    105365: function (e, t, s) {
      s.d(t, {
        p: () => i,
      });
      var n = s(394280);
      const a = (e) => {
        const t = Math.floor(Date.now() / 1000);
        if (e <= t) {
          return 0;
        } else {
          return e - t;
        }
      };
      const i = (e) => {
        const [t, s] = (0, n.useState)(() => a(e));
        (0, n.useEffect)(() => {
          let t;
          const n = () => {
            const i = a(e);
            s(i);
            if (i > 0) {
              t = setTimeout(n, 1000);
            }
          };
          n();
          return () => clearTimeout(t);
        }, [e]);
        return t;
      };
    },
    928635: function (e, t, s) {
      s.d(t, {
        Z: () => v,
      });
      var n = s(394280);
      var a = s(326744);
      var i = s(468013);
      var r = s(257549);
      var l = s.n(r);
      var o = s(49924);
      var c = s(599998);
      var d = s(594948);
      var u = s(343856);
      let m = false;
      const p = ({
        isBot: e,
        siteKey: t,
        error: s,
        className: r,
        trls: c,
        WrapperField: d,
      }) => {
        const h = (0, n.useRef)(null);
        const x = (0, n.useRef)(null);
        const v = (0, n.useRef)(null);
        const y = (0, n.useContext)(a.f);
        (0, n.useEffect)(() => {
          if (!e) {
            return;
          }
          let s;
          ((e) => {
            if (m) {
              return;
            }
            const t = document.createElement("script");
            t.src = `https://recaptcha.net/recaptcha/api.js?render=explicit&hl=${e}&_=${Date.now()}`;
            document.body.appendChild(t);
            m = true;
          })(y);
          const n = () => {
            var e;
            clearTimeout(s);
            if (
              (e = window.grecaptcha) !== null &&
              e !== undefined &&
              e.render
            ) {
              ((e, t, s, n) => {
                requestAnimationFrame(() => {
                  try {
                    if (n.current !== null) {
                      window.grecaptcha.reset(n.current);
                      return;
                    }
                    n.current = window.grecaptcha.render(e, {
                      sitekey: s,
                    });
                    t.classList.remove("g-hidden");
                  } catch (e) {
                    o.default.log("error out", e, {
                      isRecaptcha: true,
                    });
                  }
                });
              })(x.current, h.current, t, v);
            } else {
              s = setTimeout(n, 300);
            }
          };
          n();
          return () => {
            clearTimeout(s);
          };
        }, [e, y, s, t]);
        const f = (0, u.jsx)("div", {
          ref: x,
          className: r,
        });
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsxs)("div", {
              ref: h,
              className: e ? "" : "g-hidden",
              children: [
                (0, u.jsx)("input", {
                  type: "hidden",
                  name: "isBot",
                  value: e,
                }),
                d
                  ? (0, u.jsx)(d, {
                      children: f,
                    })
                  : (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsx)(l(), {
                          base: 2,
                        }),
                        f,
                      ],
                    }),
              ],
            }),
            s && (0, u.jsx)(i.FormSeparator, {}),
            (0, u.jsx)(i.FormError, {
              show: s,
              children: c[p.trls.error],
            }),
          ],
        });
      };
      p.displayName = "components/Recaptcha/index/Recaptcha";
      p.trls = {
        error: "error.signup.captcha.invalid",
      };
      const h = (0, c.x)(p);
      const x = (e) => {
        const t = (0, d.v)(({ recaptcha: e }) => e);
        const s = (0, n.useRef)(false);
        const [a, i] = (0, n.useState)(false);
        (0, n.useEffect)(() => {
          i((t == null ? undefined : t.isBot) && s.current);
          s.current = t != null && !!t.isBot;
        }, [t]);
        return (0, u.jsx)(h, {
          error: a,
          ...t,
          ...e,
        });
      };
      x.displayName = "components/Recaptcha/index/RecaptchaWrapper";
      const v = x;
    },
    965073: function (e, t, s) {
      s.r(t);
      s.d(t, {
        default: () => i,
      });
      var n = s(503190);
      var a = s(4476);
      const i = (e, t, s) =>
        a.default.init({
          element: e,
          onVisible() {
            window.requestIdleCallback(() => {
              n.default
                .waitingForBatchUrlReady()
                .then(() => {
                  var a;
                  if (
                    s != null &&
                    (a = s.abortSignal) !== null &&
                    a !== undefined &&
                    a.aborted
                  ) {
                    return;
                  }
                  const { ids: i, id: r, templateName: l, adfoxParams: o } = t;
                  let c = [r];
                  if (i) {
                    c = i;
                  }
                  n.default.create(e, c, l, o);
                })
                .catch();
            });
          },
        });
    },
    114543: function (e, t, s) {
      s.r(t);
      s.d(t, {
        default: () => u,
      });
      var n = s(791256);
      var a = s.n(n);
      var i = s(412303);
      var r = s(413134);
      var l = s(741095);
      const o = (e) => e;
      const c = {
        domainAreaId: o,
        contextRegions: o,
        profileRegions: (e) => e[0].split(","),
        regions: o,
        rId: String,
      };
      const d = (e, t, s = false) => {
        var n;
        const l = new Date();
        const o = (0, r.j)(window.globalVars.bannersBatchUrl);
        const u =
          ((n = o.params) !== null &&
            n !== undefined &&
            n.regions &&
            o.params.regions[0].split(",").join(":")) ||
          "";
        const m = t.bannerCommonTargeting.puid1
          ? `${u}:${t.bannerCommonTargeting.puid1}`
          : u;
        const p = () => (e.style.display = "none");
        const h = Boolean(t.headerBidding);
        var x;
        var v;
        var y;
        if ((v = (x = window).Ya) === null || v === undefined) {
          x.Ya = {};
        }
        window.Ya._adListeners ||= {
          hbCallbacks: {
            data: [],
            done: (0, i.D)(() => {
              var e;
              if (
                (e = window.Ya) !== null &&
                e !== undefined &&
                (e = e.adfoxCode) !== null &&
                e !== undefined &&
                (e = e.hbCallbacks) !== null &&
                e !== undefined
              ) {
                e.push(() => {
                  var e;
                  if (
                    (e = window.Ya) === null ||
                    e === undefined ||
                    (e = e.headerBidding) === null ||
                    e === undefined
                  ) {
                    return undefined;
                  } else {
                    return e.pushAdUnits(
                      window.Ya._adListeners.hbCallbacks.data.flatMap((e) =>
                        e(),
                      ),
                    );
                  }
                });
              }
              window.Ya._adListeners.hbCallbacks.data.length = 0;
            }, 400),
            push: (e) => {
              window.Ya._adListeners.hbCallbacks.data.push(e);
              window.Ya._adListeners.hbCallbacks.done();
            },
          },
          yaContextCb: {
            data: [],
            done: (0, i.D)(() => {
              window.Ya._adListeners.yaContextCb.data.forEach((e) =>
                window.yaContextCb.push(e),
              );
              window.Ya._adListeners.yaContextCb.data.length = 0;
            }, 400),
            push: (e) => {
              window.Ya._adListeners.yaContextCb.data.push(e);
              window.Ya._adListeners.yaContextCb.done();
            },
          },
        };
        if (h) {
          window.YaHeaderBiddingSettings = {
            biddersMap: t.headerBidding.biddersMap,
            timeout: 8000,
          };
          if (
            (y = window.Ya) !== null &&
            y !== undefined &&
            (y = y._adListeners) !== null &&
            y !== undefined &&
            (y = y.hbCallbacks) !== null &&
            y !== undefined
          ) {
            y.push(() => {
              const e = Object.entries(c).reduce(
                (e, [t, s]) =>
                  t in e
                    ? e
                    : Object.assign(e, {
                        [t]: s(o.params[t]),
                      }),
                t.fastTargeting,
              );
              return [
                {
                  code: t.cId,
                  sizes: [t.headerBidding.sizes],
                  bids: Object.keys(t.headerBidding.biddersMap).map((s) => ({
                    bidder: s,
                    params: {
                      placementId: t.place,
                      codeType: "code",
                      additional: {
                        additional: e,
                      },
                    },
                  })),
                },
              ];
            });
          }
        }
        window.Ya._adListeners.yaContextCb.push(() => {
          window.Ya.adfoxCode.create({
            ownerId: t.ownerId,
            sequentialLoading: true,
            containerId: t.cId,
            params: {
              ps: t.ps,
              pp: t.pp,
              p2: t.p2,
              puid4: l.getDay(),
              puid5: l.getHours(),
              puid6: window.globalVars.userType,
              puid7: window.location.host,
              puid9: window.globalVars.ads_sandbox,
              puid18: t.place,
              puid20: t.positionInfo,
              ...t.bannerCommonTargeting,
              ...t.bannerAdTargeting,
              puid1: m,
            },
            lazyLoad: {
              fetchMargin: 200,
              mobileScaling: 2,
            },
            onLoad: (s) => {
              if (s) {
                e.dataset.adfoxRequested = "true";
                t.callbacks.onLoad({
                  bundleName: s.bundleName,
                });
              }
            },
            onRender: (e) => {
              if (e) {
                t.callbacks.onRender();
              }
            },
            onStub: () => {
              t.callbacks.error();
              e.dataset.adfoxRequested = "true";
              p();
            },
            onError: (n) => {
              t.callbacks.error();
              e.dataset.adfoxRequested = "true";
              a().sendHHEvent("adfox_on_error", {
                bannerId: t.bannerId,
                pathname: window.location.pathname,
                isRetry: s,
                error: JSON.stringify(n),
              });
              if (s) {
                p();
              } else {
                d(e, t, true);
              }
            },
          });
        });
      };
      const u = l.default.build({
        create(e, t) {
          window.yaContextCb = window.yaContextCb || [];
          d(e, t);
        },
        componentName: "legacy/HH/YandexAdfoxBanner",
      });
    },
    503190: function (e, t, s) {
      s.r(t);
      s.d(t, {
        EVENT_NAME_ERROR: () => p,
        EVENT_NAME_INIT: () => d,
        EVENT_NAME_LOAD: () => u,
        EVENT_NAME_PREPARE: () => m,
        default: () => j,
      });
      var n = s(607200);
      var a = s(145161);
      var i = s.n(a);
      var r = s(114543);
      var l = s(380726);
      var o = s(741095);
      var c = s(49924);
      const d = "HH-Banners-Init";
      const u = "HH-Banners-Load";
      const m = "HH-Banners-Prepare";
      const p = "HH-Banners-Error";
      const h = () => {
        let e;
        let t;
        return {
          promise: new Promise((s, n) => {
            e = s;
            t = n;
          }),
          resolve: e,
          reject: t,
        };
      };
      const x = function (e, t) {
        const s = e.closest(".HHC-Banner-Wrapper");
        e.classList.add(e.dataset[t]);
        if (s) {
          s.classList.add(s.dataset[t]);
        }
      };
      const v = {
        adfox(e, t, s) {
          if (typeof navigator?.sendBeacon == "function") {
            navigator.sendBeacon = navigator.sendBeacon.bind(navigator);
          }
          o.default.make(r.default, t, {
            ...e,
            callbacks: s,
          });
        },
      };
      const y = {
        requestedBanners: [],
        batchUrlRetriesCount: 10,
        requestedSystems: {
          adfox: null,
          adfoxMock: null,
        },
        init() {
          b([...document.querySelectorAll(".HHC-Banners-Place")]);
        },
        put({ banners: e }, t, s) {
          if (Array.isArray(e)) {
            e.forEach((e) => {
              t.forEach((t) => {
                if (
                  t.classList.contains(`HHC-Banner-${e.place}`) !== false &&
                  t.dataset.loaded !== "true"
                ) {
                  if (e.empty) {
                    x(t, "emptyClass");
                  } else if (typeof v[e.type] != "function") {
                    c.default.log("error out", "Unsupported banner type", e);
                    x(t, "emptyClass");
                  } else {
                    var n;
                    if (e.viewUrl) {
                      (0, l.w8)({
                        element: t,
                        viewUrl: e.viewUrl,
                      });
                    }
                    x(t, "loadedClass");
                    e.additionalClass = t.dataset.bannerAdditionalClass || "";
                    e.advMarkTrls =
                      t == null || (n = t.dataset) === null || n === undefined
                        ? undefined
                        : n.bannerAdvMarkTrl;
                    const a = {
                      detail: {
                        startTime: s,
                        bannerPlace: e.place,
                        bannerId: e.id,
                        bannerType: e.type,
                      },
                    };
                    v[e.type](e, t, {
                      onRender: () => y._dispatchEvent(t, d, a),
                      error: () => y._dispatchEvent(t, p, a),
                      onLoad: (s) => {
                        const n = s == null ? undefined : s.bundleName;
                        if (n) {
                          const e = `${n.split(".")[1]}BannerClass`;
                          if (e) {
                            x(t, e);
                          }
                        }
                        y._dispatchEvent(t, u, {
                          detail: {
                            bundleName: n,
                            placeSettings: e.place_settings,
                          },
                        });
                      },
                    });
                    t.dataset.loaded = "true";
                    y._dispatchEvent(t, m);
                  }
                }
              });
            });
          }
        },
        create(e, t, s, n = {}) {
          if (s) {
            const a = i().fromElement(document.querySelector(`.${s}`));
            const r = e.querySelectorAll(".HHC-Group-Banners-Place");
            const l = "HHC-Banners-Place";
            let o = [];
            if (r.length > 0) {
              r.forEach((e) => {
                e.insertAdjacentHTML(
                  "beforeend",
                  a.replace(/%id%/g, e.dataset.bannerId).trim(),
                );
                o.push(e.querySelector(`.${l}`));
              });
            } else {
              e.insertAdjacentHTML(
                "beforeend",
                t.map((e) => a.replace(/%id%/g, e).trim()).join(""),
              );
              o = [...e.childNodes].filter((e) => e.classList.contains(l));
            }
            b(o, n);
          } else {
            b([e], n);
          }
        },
        waitingForBatchUrlReady() {
          var e;
          const { promise: t, resolve: s, reject: n } = h();
          if (
            (e = window.globalVars) !== null &&
            e !== undefined &&
            e.bannersBatchUrl
          ) {
            s();
          } else {
            let e = 0;
            const t = setInterval(() => {
              var a;
              e += 1;
              if (
                (a = window.globalVars) !== null &&
                a !== undefined &&
                a.bannersBatchUrl
              ) {
                clearInterval(t);
                s();
              }
              if (e >= y.batchUrlRetriesCount) {
                clearInterval(t);
                n();
              }
            }, 1000);
          }
          return t;
        },
        _dispatchEvent(e, t, s) {
          e.dispatchEvent(
            new CustomEvent(t, {
              bubbles: true,
              ...s,
            }),
          );
        },
      };
      function f(e) {
        const { promise: t, resolve: s } = h();
        const n = document.createElement("script");
        n.setAttribute("src", e);
        n.setAttribute("async", "async");
        document.body.appendChild(n);
        n.addEventListener("load", s);
        return t;
      }
      function b(e, t = {}) {
        if (!window.globalVars.bannersBatchUrl || !e.length) {
          return;
        }
        (e = e.filter(
          (e) => e.dataset.requested !== "true" && Boolean(e.dataset.bannerId),
        )).forEach((e) => (e.dataset.requested = "true"));
        if (e.map((e) => e.dataset.bannerId).length === 0) {
          return;
        }
        const s = performance.now();
        if (Object.keys(t).length > 0) {
          var a;
          if (t.useAdfoxMock) {
            (0, n.d)();
            y.put(
              {
                banners: [t],
              },
              e,
              s,
            );
            return;
          }
          if (
            ((a = window.Ya) === null || a === undefined || !a.adfoxCode) &&
            !y.requestedSystems.adfox
          ) {
            y.requestedSystems.adfox = f(
              "https://yandex.ru/ads/system/context.js",
            );
          }
          if (
            !!t.headerBidding &&
            !window.YaHeaderBiddingSettings &&
            !y.requestedSystems.adfoxMock
          ) {
            y.requestedSystems.adfoxMock = f(
              "https://yandex.ru/ads/system/header-bidding.js",
            );
          }
          Promise.all(Object.values(y.requestedSystems))
            .then(() =>
              y.put(
                {
                  banners: [t],
                },
                e,
                s,
              ),
            )
            .catch(() => {});
        }
      }
      const j = y;
    },
    4476: function (e, t, s) {
      s.r(t);
      s.d(t, {
        default: () => n,
      });
      const n = {
        init(e) {
          let t = false;
          const s = e.element;
          const n = () => {
            if (!t) {
              if (
                s.offsetWidth ||
                s.offsetHeight ||
                s.getClientRects().length
              ) {
                t = true;
                e.onVisible();
                window.removeEventListener("resize", n);
                window.removeEventListener("element-displayed", n);
                s.dataset.listenersSetted = "false";
              } else {
                t = false;
              }
            }
          };
          if (e.element.dataset.listenersSetted !== "true") {
            window.addEventListener("resize", n);
            window.addEventListener("element-displayed", n);
            e.element.dataset.listenersSetted = "true";
          }
          n();
          return () => {
            window.removeEventListener("resize", n);
            window.removeEventListener("element-displayed", n);
          };
        },
      };
    },
    11901: function (e, t, s) {
      s.d(t, {
        R: () => n,
      });
      const n = (e, t, s) => {
        if (e.length > t) {
          const n = e.slice(0, t);
          const a = e.slice(t).length;
          return `${n.map((e) => e.text).join(", ")} ${s} ${a}`;
        }
        return e.map((e) => e.text).join(", ");
      };
    },
    844439: function (e, t, s) {
      s.r(t);
      s.d(t, {
        default: () => Di,
      });
      var n = s(394280);
      var a = s(940389);
      var i = s(791256);
      var r = s.n(i);
      var l = s(962423);
      var o = s.n(l);
      var c = s(491606);
      var d = s(730989);
      var u = s(791996);
      var m = s(853827);
      var p = s(36074);
      var h = s(750128);
      var x = s(922366);
      var v = s(173544);
      var y = s(182302);
      var f = s(350364);
      var b = s(827080);
      var j = s(32470);
      var g = s(113367);
      var S = s(60340);
      var k = s(34555);
      var C = s(599998);
      var _ = s(951240);
      var w = s(594948);
      var N = s(268155);
      let R = false;
      var A = s(178358);
      var E = s(597517);
      var L = s(85434);
      var P = s(874333);
      var I = s(118450);
      var M = s(997769);
      var T = s(730364);
      var B = s(145106);
      var F = s(343856);
      const D = "resumeList.tools.findJobFaster";
      const H = ({ trls: e, isMobile: t }) => {
        const s = (0, _.r)();
        const n = (0, w.v)(T.gQ);
        if (t && n && s) {
          return (0, F.jsx)(I.z, {
            stretched: true,
            to: B.Pp,
            mode: "tertiary",
            size: "small",
            Element: c.SPALink,
            "data-qa": "resumeservice-button__renewresume",
            onMouseUp: M.sendAnalyticsFindJobFaster,
            children: e[D],
          });
        } else {
          return null;
        }
      };
      H.displayName =
        "components/ApplicantNavigation/FindJobFasterButton/FindJobFasterButton";
      const q = (0, C.x)(H);
      var U = s(5808);
      var V = s.n(U);
      var O = s(880407);
      var z = s.n(O);
      var Z = s(914357);
      var $ = s(136361);
      var G = s(605420);
      var X = s(710625);
      var Y = s(916769);
      var W = s(910824);
      var J = s(470251);
      var K = s.n(J);
      var Q = s(630549);
      var ee = s(878724);
      var te = s(569454);
      var se = s(888974);
      const ne = ({ children: e }) => {
        const [t, s] = (0, n.useState)("");
        const [a, i] = (0, n.useState)(0);
        const [r, l] = (0, n.useState)();
        const [o, c] = (0, n.useState)(false);
        const d = (0, w.v)(se.Ym);
        const u = (0, w.v)(se.GM);
        const m = (0, n.useCallback)(() => {
          s("");
          i(0);
          c(false);
        }, []);
        const p = (0, n.useCallback)(
          (e, t) => {
            if (!u) {
              return;
            }
            const n = (0, W.ho)(e);
            const a = (0, W.hE)(e);
            s(n);
            i(a);
            l(t);
            c(true);
            Q.Y.setItem(te.M2, Date.now().toString());
            K()({
              resumeId: a,
            });
          },
          [u],
        );
        const h = (0, n.useMemo)(
          () => ({
            resumeId: a,
            resumeHash: t,
            chatBotHref: d,
            modalVisible: o,
            onOpenModal: p,
            onCloseModal: m,
            successUpdate: true,
            canUpdateResumeByBot: u,
            recommendationDetails: r,
          }),
          [t, a, p, d, o, m, u, r],
        );
        return (0, F.jsx)(ee.G.Provider, {
          value: h,
          children: e,
        });
      };
      ne.displayName =
        "updateByBot/providers/UpdateCompactResumeByBotProvider/UpdateCompactResumeByBotProvider";
      var ae = s(842953);
      var ie = s(674070);
      var re = s(720278);
      var le = s(389371);
      var oe = s(539329);
      var ce = s(888927);
      const de = {
        amount: null,
        currency: "RUR",
      };
      var ue = s(160013);
      var me = s(834103);
      const pe = ["approved", "auto_approved", "modified", "new"];
      var he = s(901475);
      var xe = s.n(he);
      var ve = s(846192);
      var ye = s(439624);
      var fe = s(454959);
      var be = s(106428);
      var je = s(362854);
      var ge = s(101199);
      var Se = s(369961);
      var ke = s(225098);
      var Ce = s(769314);
      var _e = s.n(Ce);
      var we = s(848484);
      var Ne = s(626462);
      var Re = s(105160);
      var Ae = s(15791);
      var Ee = s(935192);
      var Le = s(170953);
      var Pe = s(871824);
      var Ie = s(435265);
      const Me = "applicant.resumeList.compact.audit.finished.description";
      const Te = "applicant.resumeList.compact.audit.error.description";
      const Be = "applicant.resumeList.compact.audit.progress.description";
      const Fe = ({ trls: e, audit: t, resumeId: s }) => {
        const a = (0, w.v)((e) => e.applicantResumesAiAudit).find(
          (e) => e.resumeId === s,
        );
        const i = a == null ? undefined : a.status;
        const r = (0, n.useRef)(null);
        const { fetchAICheckStatus: l } = (0, Pe.y)({
          resumeId: s,
        });
        let o = e[Me];
        switch (t.AIStatus) {
          case Ie.DN.Error:
            o = e[Te];
            break;
          case Ie.DN.New:
            o = e[Be];
        }
        (0, n.useEffect)(() => {
          if (i !== Ie.DN.New) {
            if ((0, Le.isNumber)(r.current)) {
              clearInterval(r.current);
            }
            r.current = null;
            return;
          }
          r.current = setInterval(l, 30000);
        }, [i]);
        return (0, F.jsx)(Ae.j, {
          typography: "label-3-regular",
          right:
            t.AIStatus && t.AIStatus !== Ie.DN.Success
              ? undefined
              : (0, F.jsx)(ie.$dx, {
                  initialColor: "positive",
                }),
          "data-qa": "resume-recommendation-title-audit",
          children: o,
        });
      };
      Fe.displayName = "CompactResumeCard/Links/Audit/AuditLink";
      const De = (0, C.x)(Fe);
      var He = s(75593);
      var qe = s.n(He);
      var Ue = s(640569);
      var Ve = s(580356);
      var Oe = s(295243);
      const ze = "applicant.resumeList.compact.audit.finished.link";
      const Ze = "applicant.resumeList.compact.audit.retry.link";
      const $e = "resumeList.resumeAiRecommendation.alertModal.title";
      const Ge = "resumeList.resumeAiRecommendation.alertModal.subTitle";
      const Xe = "resumeList.resumeAiRecommendation.alertModal.textOk";
      const Ye = "resumeList.resumeAiRecommendation.alertModal.textCancel";
      const We = ({
        trls: e,
        audit: t,
        resumeId: s,
        resumeHash: a,
        initialSource: i,
      }) => {
        const r = (0, w.v)((e) => e.applicantResumesAiAudit);
        const l = r.find((e) => e.resumeId === s);
        const o = l == null ? undefined : l.status;
        const d = (0, w.v)((e) => e.hasAIHhPro);
        const [u, m] = (0, n.useState)(false);
        const { microfrontState: p, openModal: h } = (0, Oe.d)();
        const { fetchAIGenerate: x, loadingGenerate: v } = (0, Pe.y)({
          resumeId: s,
        });
        const y = p === "fetching" || v;
        const f = (0, c.usePush)();
        const b = (0, n.useMemo)(
          () => r.filter((e) => e.status !== Ie.DN.Error),
          [r],
        );
        if (!t || t.AIStatus === Ie.DN.New) {
          return;
        }
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(ae.r, {
              Element: "button",
              typography: "label-3-regular",
              "data-qa": "resume-recommendation-button-audit",
              onClick: () => {
                if (t.AIStatus && t.AIStatus !== Ie.DN.Success) {
                  if (o === undefined || o !== Ie.DN.New) {
                    if (b.length && !d) {
                      h(i, a);
                      return;
                    }
                    if (o === Ie.DN.Success) {
                      m(true);
                      return;
                    }
                    x();
                  }
                } else {
                  f(t.url);
                }
              },
              disabled: y,
              children: t.AIStatus === Ie.DN.Error ? e[Ze] : e[ze],
            }),
            (0, F.jsx)(Ve.bZ, {
              title: e[$e],
              description: e[Ge],
              layout: "vertical",
              icon: (0, F.jsx)(ie.uvJ, {}),
              buttons: (0, F.jsxs)(F.Fragment, {
                children: [
                  (0, F.jsx)(I.z, {
                    mode: "primary",
                    style: "accent",
                    stretched: true,
                    onClick: () => {
                      x();
                      qe()({
                        type: "generate",
                      });
                      m(false);
                    },
                    children: e[Xe],
                  }),
                  (0, F.jsx)(I.z, {
                    mode: "secondary",
                    style: "accent",
                    stretched: true,
                    onClick: () => {
                      qe()({
                        type: "cancel",
                      });
                      m(false);
                    },
                    children: e[Ye],
                  }),
                ],
              }),
              visible: u,
              onClose: () => m(false),
            }),
          ],
        });
      };
      We.displayName =
        "CompactResumeCard/Links/AuditGenerate/AuditGenerateLink";
      const Je = (0, Ue.Z)(We);
      var Ke = s(442986);
      var Qe = s.n(Ke);
      const et = {
        root: "root--ZRzbGcAgVlQa8kgi",
        count: "count--bSTOldE2YssvKKbH",
      };
      const tt = {
        views: "resumeList.statistics.views.label",
        invitations: "resumeList.statistics.invitations.label",
      };
      const st = {
        views: "count-new-views",
        invitations: "new-invitations",
      };
      const nt = ({
        type: e,
        disabled: t,
        link: s,
        count: n = 0,
        countNew: a = 0,
        trls: i,
        onClick: r,
      }) =>
        (0, F.jsx)($.Z, {
          Element: t ? "div" : c.SPALink,
          to: s,
          disabled: t,
          onClick: r,
          "data-qa": st[e],
          className: et.itemWrapper,
          children: (0, F.jsxs)(h.z, {
            default: 6,
            children: [
              (0, F.jsx)(Re.x, {
                typography: "label-3-regular",
                children: i[tt[e]],
              }),
              (0, F.jsxs)("div", {
                className: et.count,
                children: [
                  (0, F.jsx)(Re.x, {
                    style: "accent",
                    typography: "label-2-regular",
                    children: n || "–",
                  }),
                  !!a &&
                    (0, F.jsxs)(Re.x, {
                      style: "positive",
                      typography: "label-2-regular",
                      children: ["\xA0+\xA0", a],
                    }),
                ],
              }),
            ],
          }),
        });
      nt.displayName =
        "CompactResumeCard/ResumeStatistecs/ResumeStatisticsItem/ResumeStatisticsItem";
      const at = (0, C.x)(nt);
      const it = ({
        disabled: e,
        padding: t = false,
        resumeHash: s,
        resumeId: a,
        statistics: i,
        hhtmSource: r,
      }) => {
        const l = (0, n.useCallback)(() => {
          Qe()({
            hhtmSource: r,
            buttonName: "resume_view_history",
            resumeId: parseInt(a, 10),
          });
        }, [a, r]);
        const o = (0, n.useCallback)(() => {
          Qe()({
            hhtmSource: r,
            buttonName: "resume_invitations",
            resumeId: parseInt(a, 10),
          });
        }, [a, r]);
        return (0, F.jsxs)("div", {
          children: [
            t &&
              (0, F.jsx)(x.X, {
                default: 24,
              }),
            (0, F.jsxs)("div", {
              className: et.root,
              children: [
                (0, F.jsx)(at, {
                  type: "views",
                  link: `/applicant/resumeview/history?resumeHash=${s}`,
                  onClick: l,
                  disabled: e,
                  ...i.views,
                }),
                (0, F.jsx)(at, {
                  type: "invitations",
                  link: "/applicant/negotiations?state=INVITATION",
                  onClick: o,
                  disabled: e,
                  ...i.invitations,
                }),
              ],
            }),
          ],
        });
      };
      it.displayName =
        "CompactResumeCard/ResumeStatistecs/index/ResumeStatistics";
      var rt = s(941545);
      const lt = {
        one: "resumeList.statistics.views.one",
        some: "resumeList.statistics.views.some",
        many: "resumeList.statistics.views.many",
      };
      const ot = {
        one: "resumeList.statistics.invitations.one",
        some: "resumeList.statistics.invitations.some",
        many: "resumeList.statistics.invitations.many",
      };
      const ct = ({
        trls: e,
        resumeHash: t,
        resumeId: s,
        statistics: a,
        hhtmSource: i,
      }) => {
        const r = (0, n.useCallback)(() => {
          Qe()({
            hhtmSource: i,
            buttonName: "resume_view_history",
            resumeId: parseInt(s, 10),
          });
        }, [s, i]);
        const l = (0, n.useCallback)(() => {
          Qe()({
            hhtmSource: i,
            buttonName: "resume_invitations",
            resumeId: parseInt(s, 10),
          });
        }, [s, i]);
        if (a.type === "invitations") {
          return (0, F.jsxs)(ae.r, {
            inline: true,
            to: "/applicant/negotiations?state=INVITATION",
            Element: c.SPALink,
            "data-qa": "new-invitations",
            typography: "label-3-regular",
            onClick: l,
            children: [
              "+",
              (0, F.jsx)(rt.q, {
                value: a.value,
                one: e[ot.one],
                some: e[ot.some],
                many: e[ot.many],
              }),
            ],
          });
        } else {
          return (0, F.jsxs)(ae.r, {
            inline: true,
            to: `/applicant/resumeview/history?resumeHash=${t}`,
            Element: c.SPALink,
            "data-qa": "count-new-views",
            typography: "label-3-regular",
            onClick: r,
            children: [
              "+",
              (0, F.jsx)(rt.q, {
                value: a.value,
                one: e[lt.one],
                some: e[lt.some],
                many: e[lt.many],
              }),
            ],
          });
        }
      };
      ct.displayName =
        "CompactResumeCard/ResumeStatistecs/StatisticLink/StatisticsLink";
      const dt = (0, C.x)(ct);
      var ut = s(557558);
      const mt = "root--UUILoGHAoMzXDiLe";
      const pt = "root-mobile--ezk1iqCkqoJX93Cq";
      const ht = "footer-mobile--jt9xCcmRIYqhV44l";
      const xt = ({
        url: e,
        icon: t,
        audit: s,
        title: a,
        header: r,
        subtitle: l,
        resumeId: o,
        position: d,
        disabled: u,
        hhtmSource: m,
        resumeHash: h,
        statistics: v = me.In,
        resumeStatus: y,
        primaryActions: f,
        secondaryActions: b,
      }) => {
        const j = (0, ut.n)(y);
        const { isGtXS: g, isMobile: S } = (0, p.G)();
        const k = (0, n.useCallback)(() => {
          _e()({
            hhtmSource: m,
            position: d,
            resumeId: o,
            status: j,
          });
        }, [m, o, d, j]);
        if (S) {
          const n = ((e) => {
            const n = e.views?.countNew > 0;
            if (e.invitations?.countNew > 0) {
              return {
                type: "invitations",
                value: e.invitations?.countNew,
              };
            } else if (n) {
              return {
                type: "views",
                value: e.views?.countNew,
              };
            } else {
              return null;
            }
          })(v);
          return (0, F.jsxs)(
            i.ElementShownAnchor,
            {
              fn: V(),
              status: j,
              position: d,
              resumeId: o,
              hhtmSource: "resume_list",
              children: [
                d !== 0 && (0, F.jsx)(we.i, {}),
                (0, F.jsx)($.Z, {
                  Element: e ? c.SPALink : undefined,
                  to: e || "",
                  stretched: true,
                  "data-qa": `resume-card-link-${h}`,
                  onClick: k,
                  borderRadius: 24,
                  children: (0, F.jsx)("div", {
                    className: pt,
                    children: (0, F.jsxs)(Ne.b, {
                      right: e ? (0, F.jsx)(ie.a2Q, {}) : undefined,
                      align: "top",
                      children: [
                        r &&
                          (0, F.jsxs)(F.Fragment, {
                            children: [
                              (0, F.jsx)(Re.x, {
                                style: "secondary",
                                typography: "label-3-regular",
                                "data-qa": "title-header",
                                children: r,
                              }),
                              (0, F.jsx)(x.X, {
                                default: 4,
                              }),
                            ],
                          }),
                        (0, F.jsx)(Ae.j, {
                          style: u ? "secondary" : "primary",
                          "data-qa": "resume-title",
                          typography: "subtitle-1-semibold",
                          children: a,
                        }),
                        s
                          ? (0, F.jsx)(De, {
                              audit: s,
                              resumeId: parseInt(o, 10),
                            })
                          : (0, F.jsx)(Ae.j, {
                              typography: "label-3-regular",
                              right: t,
                              "data-qa": "title-description",
                              children: l,
                            }),
                      ],
                    }),
                  }),
                }),
                (0, F.jsx)("div", {
                  className: ht,
                  children:
                    (f || b) &&
                    (0, F.jsxs)(F.Fragment, {
                      children: [
                        (0, F.jsx)(x.X, {
                          default: 8,
                        }),
                        (0, F.jsxs)(Ee.q, {
                          default: 12,
                          children: [
                            u &&
                              (0, F.jsxs)(F.Fragment, {
                                children: [f, b],
                              }),
                            !u &&
                              (0, F.jsxs)(F.Fragment, {
                                children: [
                                  n &&
                                    (0, F.jsx)(dt, {
                                      resumeId: o,
                                      resumeHash: h,
                                      hhtmSource: m,
                                      statistics: n,
                                    }),
                                  (0, F.jsx)(Je, {
                                    audit: s,
                                    resumeId: parseInt(o, 10),
                                    resumeHash: h,
                                    initialSource: Ie.ZM.ApplicantResumeList,
                                    hhtmSource: m,
                                  }),
                                  g
                                    ? (0, F.jsxs)(F.Fragment, {
                                        children: [f, b],
                                      })
                                    : (0, F.jsxs)(F.Fragment, {
                                        children: [
                                          (!n || !s) && f,
                                          !n && !s && b,
                                        ],
                                      }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                }),
              ],
            },
            o,
          );
        }
        return (0, F.jsxs)(
          i.ElementShownAnchor,
          {
            fn: V(),
            status: j,
            position: d,
            resumeId: o,
            hhtmSource: "resume_list",
            children: [
              d !== 0 && (0, F.jsx)(we.i, {}),
              (0, F.jsxs)("div", {
                className: mt,
                children: [
                  (0, F.jsxs)(Ee.q, {
                    default: 16,
                    children: [
                      u
                        ? (0, F.jsxs)($.Z, {
                            "data-qa": `resume-card-link-${h}`,
                            stretched: true,
                            children: [
                              r &&
                                (0, F.jsxs)(F.Fragment, {
                                  children: [
                                    (0, F.jsx)(Re.x, {
                                      style: "secondary",
                                      typography: "label-3-regular",
                                      "data-qa": "title-header",
                                      children: r,
                                    }),
                                    (0, F.jsx)(x.X, {
                                      default: 4,
                                    }),
                                  ],
                                }),
                              (0, F.jsx)(Ae.j, {
                                style: "secondary",
                                typography: "subtitle-1-semibold",
                                "data-qa": "resume-title",
                                children: a,
                              }),
                              (0, F.jsx)(Ae.j, {
                                typography: "label-3-regular",
                                right: t,
                                "data-qa": "title-description",
                                children: l,
                              }),
                            ],
                          })
                        : (0, F.jsxs)($.Z, {
                            Element: e ? c.SPALink : undefined,
                            to: e || "",
                            "data-qa": `resume-card-link-${h}`,
                            onClick: k,
                            stretched: true,
                            children: [
                              r &&
                                (0, F.jsxs)(F.Fragment, {
                                  children: [
                                    (0, F.jsx)(Re.x, {
                                      style: "secondary",
                                      typography: "label-3-regular",
                                      "data-qa": "title-header",
                                      children: r,
                                    }),
                                    (0, F.jsx)(x.X, {
                                      default: 4,
                                    }),
                                  ],
                                }),
                              (0, F.jsx)(Ae.j, {
                                typography: "subtitle-1-semibold",
                                "data-qa": "resume-title",
                                children: a,
                              }),
                              s
                                ? (0, F.jsx)(De, {
                                    audit: s,
                                    resumeId: parseInt(o, 10),
                                  })
                                : (0, F.jsx)(Ae.j, {
                                    typography: "label-3-regular",
                                    right: t,
                                    "data-qa": "title-description",
                                    children: l,
                                  }),
                            ],
                          }),
                      (0, F.jsx)(it, {
                        padding: !!r,
                        disabled: u,
                        resumeId: o,
                        hhtmSource: m,
                        resumeHash: h,
                        statistics: v,
                      }),
                    ],
                  }),
                  (f || b) &&
                    (0, F.jsxs)(F.Fragment, {
                      children: [
                        (0, F.jsx)(x.X, {
                          default: 8,
                        }),
                        (0, F.jsxs)(Ee.q, {
                          default: 12,
                          children: [
                            (0, F.jsx)(Je, {
                              audit: s,
                              resumeId: parseInt(o, 10),
                              resumeHash: h,
                              initialSource: Ie.ZM.ApplicantResumeList,
                              hhtmSource: m,
                            }),
                            f,
                            b,
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          },
          o,
        );
      };
      xt.displayName = "CompactResumeCard/CardTemplate/index/CardTemplate";
      var vt = s(11901);
      const yt = {
        FULL: "resume.editor.employmentForms.full",
        PART_TIME: "resume.editor.employmentForms.part_time",
        INTERNSHIP: "resume.editor.employmentForms.internship",
        VOLUNTEER: "resume.editor.employmentForms.volunteer",
      };
      const ft = "resume.editor.additional.more";
      const bt = ({ trls: e, employmentForms: t }) => {
        const s = (0, n.useMemo)(
          () =>
            t.map((t, s) => ({
              id: t.string,
              text: s ? e[yt[t.string]].toLowerCase() : e[yt[t.string]],
            })),
          [t, e],
        );
        if (s.length === 0) {
          return null;
        } else {
          return (0, F.jsx)(F.Fragment, {
            children: (0, vt.R)(s, 2, e[ft]),
          });
        }
      };
      bt.displayName =
        "CompactResumes/CompactResumeCard/EmploymentFormsText/EmploymentFormsText";
      const jt = (0, C.x)(bt);
      var gt = s(652834);
      var St = s.n(gt);
      var kt = s(847461);
      const Ct = "max-one-line-link--jGfxXvUunbUJJkOG";
      const _t = {
        delete: "applicant.resumeList.compact.links.delete",
      };
      const wt = ({ trls: e, resume: t }) => {
        const s = (0, kt.U)();
        return (0, F.jsx)("div", {
          className: Ct,
          children: (0, F.jsx)(ae.r, {
            "data-qa": "resume-delete",
            typography: "label-3-regular",
            onClick: () => {
              s.openModal({
                resume: t,
                from: "resume-list",
              });
              St()({
                buttonName: "resume_delete",
                resumeId: parseInt((0, W.DY)(t), 10),
              });
            },
            children: e[_t.delete],
          }),
        });
      };
      wt.displayName = "CompactResumeCard/Links/Delete/DeleteLink";
      const Nt = (0, C.x)(wt);
      var Rt = s(242615);
      var At = s.n(Rt);
      var Et = s(744785);
      var Lt = s.n(Et);
      var Pt = s(859716);
      var It = s(845942);
      const Mt = {
        up: "applicant.resumeList.compact.links.up",
      };
      const Tt = {
        manual: "applicant.resumeList.compact.renewal.manual",
        auto: "applicant.resumeList.compact.renewal.auto",
      };
      const Bt = ({
        trls: e,
        isManualUpdateable: t,
        isRenewal: s,
        manualUpdateDateMs: n,
        onUpdate: a,
        recommendationDetails: r,
        resumeId: l,
      }) => {
        const o = () => {
          a();
          At()({
            type: "resumeRenewal",
            resumeId: parseInt(l, 10),
            hhtmSource: "resume_list",
            surveyProfession:
              (r == null ? undefined : r.surveyProfession) || "",
          });
        };
        if (s) {
          return (0, F.jsx)(Ae.j, {
            maxLines: 1,
            type: "description",
            right: (0, F.jsx)(ie.ARe, {
              initialColor: "tertiary",
            }),
            "data-qa": "resume-update-button",
            children: e[Tt.auto],
          });
        } else if (t) {
          return (0, F.jsx)(i.ElementShownAnchor, {
            Element: "span",
            className: Ct,
            fn: Lt(),
            type: "resumeRenewal",
            resumeId: parseInt(l, 10),
            hhtmSource: "resume_list",
            surveyProfession:
              (r == null ? undefined : r.surveyProfession) || "",
            children: (0, F.jsx)(ae.r, {
              inline: true,
              onClick: o,
              "data-qa": "resume-update-button",
              typography: "label-3-regular",
              children: e[Mt.up],
            }),
          });
        } else if (n) {
          return (0, F.jsx)(Re.x, {
            maxLines: 1,
            style: "tertiary",
            typography: "label-3-regular",
            "data-qa": "resume-renewal-manual-text",
            children: (0, Pt.WU)(e[Tt.manual], {
              "{0}": (0, It.p6)(n, "HH:mm"),
            }),
          });
        } else {
          return null;
        }
      };
      Bt.displayName = "CompactResumeCard/Links/Renewal/RenewalLink";
      const Ft = (0, C.x)(Bt);
      const Dt = {
        ON_SITE: "resume.editor.workFormats.on_site",
        REMOTE: "resume.editor.workFormats.remote",
        HYBRID: "resume.editor.workFormats.hybrid",
        FIELD_WORK: "resume.editor.workFormats.field_work",
        FLY_IN_FLY_OUT: "resume.editor.workFormats.fly_in_fly_out",
      };
      const Ht = "resume.editor.additional.more";
      const qt = ({ trls: e, workFormats: t }) => {
        const s = (0, n.useMemo)(
          () =>
            t.map((t, s) => ({
              id: s ? t.string.toLocaleLowerCase() : t.string,
              text: e[Dt[t.string]],
            })),
          [t, e],
        );
        if (s.length === 0) {
          return null;
        } else {
          return (0, F.jsx)(F.Fragment, {
            children: (0, vt.R)(s, 2, e[Ht]),
          });
        }
      };
      qt.displayName =
        "CompactResumes/CompactResumeCard/WorkFormatsText/WorkFormatsText";
      const Ut = (0, C.x)(qt);
      const Vt = "max-one-line-link--jKyNRSkM5OkQZOlb";
      const Ot = "nowrap--jAAxmK8mdA_wFrUe";
      const zt = "resume.title.empty";
      const Zt = "applicant.resume.salary.notexists";
      const $t = {
        notFinished: "applicant.resumeList.notFinished.subtitle",
        onModeration: "applicant.resumeList.onModeration.subtitle",
        correctResume: "applicant.resumeList.correctResume.subtitle",
        changeVisibility: "applicant.resumeList.changeVisibility.subtitle",
        preparingByExpert: "applicant.resumeList.preparingByExpert.subtitle",
        needVerifiedPhone: "resumeList.recommendations.title.needVerifiedPhone",
      };
      const Gt = {
        edit: "applicant.resumeList.compact.links.edit",
        correct: "applicant.resumeList.compact.links.correct",
        visibility: "applicant.resumeList.compact.links.visibility",
        submitPhone: "applicant.resumeList.compact.links.submitPhone",
      };
      const Xt = ({ trls: e, resume: t, position: s }) => {
        const { isMobile: l } = (0, p.G)();
        const o = (() => {
          const e = (0, a.useDispatch)();
          const { onOpenModal: t } = (0, ee.h)();
          const s = (0, ve.Xl)();
          const n = (0, w.v)(je.so);
          const i = (0, w.v)(fe.Nx);
          const l = (0, w.v)(fe._b);
          const o = (0, w.v)(se.sm);
          return (a, c) => {
            const d = (0, W.ho)(a);
            const u = ((e) =>
              (e == null ? undefined : e.professionalRole) || [])(a);
            ye.r
              .touch(d)
              .then(() => {
                const t = new Date().valueOf();
                e(
                  (0, be.nw)({
                    hash: d,
                    field: {
                      _attributes: {
                        ...a._attributes,
                        updated: t,
                      },
                    },
                  }),
                );
                xe()();
                if (s) {
                  r().addEventPixels("B2C_RESUME_UPDATE");
                }
                return (0, ge.T9)(n, i, u);
              })
              .then((s) => {
                if (s && (0, fe.vO)(l, "web_setka_after_resume_update_v2", e)) {
                  (0, ge.gE)(i);
                  e((0, Se.l_)(d));
                } else if ((0, te.SG)(o)) {
                  t(a, c);
                }
              })
              .catch(() => {
                console.error("Ошибка при попытки поднять резюме");
              });
          };
        })();
        const { hhtmSource: d } = (0, ce.t)();
        const u = (0, W.DY)(t);
        const m = (0, W.ho)(t);
        const h = (0, W.LY)(t);
        const x = ((e) => {
          var s;
          return (
            (e == null || (s = e.salary) === null || s === undefined
              ? undefined
              : s[0]) ?? de
          );
        })(t);
        const v = ((e) => (e == null ? undefined : e.workFormats) || [])(t);
        const y = ((e) => (e == null ? undefined : e.employmentForms) || [])(t);
        const f = (0, oe.K)(m, u);
        const b =
          ((e) => {
            var t;
            return (
              (e == null ||
              (t = e.title) === null ||
              t === undefined ||
              (t = t[0]) === null ||
              t === undefined
                ? undefined
                : t.string) || ""
            );
          })(t) || e[zt];
        const j = (0, W.No)(t);
        const {
          recommendationDetails: g,
          recommendation: S,
          statistics: k,
        } = (0, w.v)((0, me.F5)(u)) ?? {};
        const C = (0, ue.N)(t);
        const {
          isRenewal: _,
          isManualUpdateable: N,
          manualUpdateDateMs: R,
        } = ((e) =>
          (0, n.useMemo)(() => {
            const t = (0, W.nM)(e);
            const s = (0, W.U2)(e);
            const n = (0, W.Cj)(e);
            const a = (0, W.LY)(e);
            const i = (0, W.WS)(e);
            const r = ((e) => {
              var t;
              return (
                (e == null ||
                (t = e.accessType) === null ||
                t === undefined ||
                (t = t[0]) === null ||
                t === undefined
                  ? undefined
                  : t.string) || "no_one"
              );
            })(e);
            const l = new Date(s + n).getTime();
            const o = l - new Date().getTime();
            if (i || r === "no_one" || !pe.includes(a)) {
              return {
                isRenewal: false,
                manualUpdateDateMs: 0,
                isManualUpdateable: false,
              };
            } else {
              return {
                isRenewal: t,
                manualUpdateDateMs: l,
                isManualUpdateable: o <= 0,
              };
            }
          }, [e]))(t);
        const { recommendationRef: A, sendRecommendationClickAnalytics: E } =
          (0, le.L)(u, S, g);
        const L = j ? `/profile/resume?resume=${m}` : `/resume/${m}`;
        const P = () => {
          o(t, g);
        };
        if (C) {
          return (0, F.jsx)(xt, {
            disabled: true,
            title: b,
            header: (0, F.jsx)(jt, {
              employmentForms: y,
            }),
            subtitle: e[$t.preparingByExpert],
            resumeId: u,
            position: s,
            statistics: k,
            hhtmSource: d,
            resumeHash: m,
            resumeStatus: h,
          });
        } else if (j) {
          return (0, F.jsx)(xt, {
            disabled: true,
            url: `/profile/resume?resume=${m}`,
            title: b,
            icon: (0, F.jsx)(ie.xpN, {
              initialColor: "warning",
            }),
            subtitle: e[$t.notFinished],
            primaryActions: l
              ? (0, F.jsx)(Nt, {
                  resume: t,
                })
              : (0, F.jsx)("div", {
                  className: Ot,
                  children: (0, F.jsx)(ae.r, {
                    Element: c.SPALink,
                    ref: A,
                    to: `/profile/resume?resume=${m}`,
                    "data-qa": "resume-button-edit-resume",
                    onClick: E,
                    typography: "label-3-regular",
                    children: e[Gt.edit],
                  }),
                }),
            secondaryActions: l
              ? (0, F.jsx)("div", {
                  className: Vt,
                  children: (0, F.jsx)(ae.r, {
                    Element: c.SPALink,
                    ref: A,
                    to: `/profile/resume?resume=${m}`,
                    "data-qa": "resume-button-edit-resume",
                    onClick: E,
                    typography: "label-3-regular",
                    children: e[Gt.edit],
                  }),
                })
              : (0, F.jsx)(Nt, {
                  resume: t,
                }),
            resumeId: u,
            position: s,
            statistics: k,
            hhtmSource: d,
            resumeHash: m,
            resumeStatus: h,
          });
        } else if (S === ke.VQ.CorrectResume) {
          return (0, F.jsx)(xt, {
            disabled: true,
            url: `/profile/resume?resume=${m}`,
            title: b,
            subtitle: e[$t.correctResume],
            icon: (0, F.jsx)(ie.O32, {
              initialColor: "negative",
            }),
            primaryActions: l
              ? (0, F.jsx)(Nt, {
                  resume: t,
                })
              : (0, F.jsx)("div", {
                  className: Ot,
                  children: (0, F.jsx)(ae.r, {
                    Element: c.SPALink,
                    ref: A,
                    to: `/profile/resume?resume=${m}`,
                    "data-qa": "resume-status-blocked",
                    onClick: E,
                    typography: "label-3-regular",
                    children: e[Gt.correct],
                  }),
                }),
            secondaryActions: l
              ? (0, F.jsx)("div", {
                  className: Vt,
                  children: (0, F.jsx)(ae.r, {
                    Element: c.SPALink,
                    ref: A,
                    to: `/profile/resume?resume=${m}`,
                    "data-qa": "resume-status-blocked",
                    onClick: E,
                    typography: "label-3-regular",
                    children: e[Gt.correct],
                  }),
                })
              : (0, F.jsx)(Nt, {
                  resume: t,
                }),
            resumeId: u,
            position: s,
            statistics: k,
            hhtmSource: d,
            resumeHash: m,
            resumeStatus: h,
          });
        } else if (S === ke.VQ.OnModeration) {
          return (0, F.jsx)(xt, {
            url: L,
            title: b,
            icon: (0, F.jsx)(ie.n$7, {
              initialColor: "secondary",
            }),
            header: (0, F.jsx)(jt, {
              employmentForms: y,
            }),
            subtitle: e[$t.onModeration],
            primaryActions: (0, F.jsx)("div", {
              className: Ot,
              children: (0, F.jsx)(ae.r, {
                Element: c.SPALink,
                ref: A,
                to: `/profile/resume?resume=${m}`,
                "data-qa": "resume-button-edit-resume",
                onClick: E,
                typography: "label-3-regular",
                children: e[Gt.edit],
              }),
            }),
            secondaryActions: (0, F.jsx)(Ft, {
              resumeId: u,
              onUpdate: P,
              isRenewal: _,
              isManualUpdateable: N,
              manualUpdateDateMs: R,
              recommendationDetails: g,
            }),
            resumeId: u,
            position: s,
            statistics: k,
            hhtmSource: d,
            resumeHash: m,
            resumeStatus: h,
          });
        } else {
          if (S === ke.VQ.EditResume) {
            ae.r;
            c.SPALink;
            e[Gt.edit];
            F.Fragment;
            if (x != null && x.amount) {
              re.Z;
              x.currency;
              x.amount;
            } else {
              e[Zt];
            }
          }
          if (S === ke.VQ.ChangeVisibility) {
            return (0, F.jsx)(xt, {
              url: L,
              audit: f,
              title: b,
              header: (0, F.jsx)(jt, {
                employmentForms: y,
              }),
              subtitle: e[$t.changeVisibility],
              icon: (0, F.jsx)(ie.FJj, {
                initialColor: "secondary",
              }),
              primaryActions: (0, F.jsx)("div", {
                className: Ot,
                children: (0, F.jsx)(ae.r, {
                  Element: c.SPALink,
                  ref: A,
                  "data-qa": `resume-recommendations__button_${S}`,
                  to: `/resume/edit/${m}/visibility`,
                  onClick: E,
                  typography: "label-3-regular",
                  children: e[Gt.visibility],
                }),
              }),
              secondaryActions: (0, F.jsx)(Ft, {
                resumeId: u,
                onUpdate: P,
                isRenewal: _,
                isManualUpdateable: N,
                manualUpdateDateMs: R,
                recommendationDetails: g,
              }),
              resumeId: u,
              position: s,
              statistics: k,
              hhtmSource: d,
              resumeHash: m,
              resumeStatus: h,
            });
          } else if (S === ke.VQ.NeedVerifiedPhone) {
            return (0, F.jsx)(xt, {
              url: L,
              audit: f,
              title: b,
              header: (0, F.jsx)(jt, {
                employmentForms: y,
              }),
              subtitle: e[$t.needVerifiedPhone],
              primaryActions: (0, F.jsx)("div", {
                className: Ot,
                children: (0, F.jsx)(ae.r, {
                  Element: c.SPALink,
                  ref: A,
                  to: `/applicant/phone_verification?resume=${m}`,
                  "data-qa": "resume-phone-not-verified",
                  typography: "label-3-regular",
                  onClick: E,
                  children: e[Gt.submitPhone],
                }),
              }),
              secondaryActions: (0, F.jsx)(Ft, {
                resumeId: u,
                onUpdate: P,
                isRenewal: _,
                isManualUpdateable: N,
                manualUpdateDateMs: R,
                recommendationDetails: g,
              }),
              icon: (0, F.jsx)(ie.Vjy, {
                initialColor: "secondary",
              }),
              position: s,
              resumeId: u,
              statistics: k,
              hhtmSource: d,
              resumeHash: m,
              resumeStatus: h,
            });
          } else {
            return (0, F.jsx)(xt, {
              url: L,
              audit: f,
              title: b,
              header: (0, F.jsx)(jt, {
                employmentForms: y,
              }),
              primaryActions: (0, F.jsx)(Ft, {
                resumeId: u,
                onUpdate: P,
                isRenewal: _,
                isManualUpdateable: N,
                manualUpdateDateMs: R,
                recommendationDetails: g,
              }),
              subtitle: (0, F.jsxs)(F.Fragment, {
                children: [
                  x != null && x.amount
                    ? (0, F.jsx)(re.Z, {
                        currency: x.currency,
                        children: x.amount,
                      })
                    : e[Zt],
                  " · ",
                  (0, F.jsx)(Ut, {
                    workFormats: v,
                  }),
                ],
              }),
              resumeId: u,
              position: s,
              statistics: k,
              hhtmSource: d,
              resumeHash: m,
              resumeStatus: h,
            });
          }
        }
      };
      Xt.displayName =
        "CompactResumes/CompactResumeCard/index/CompactResumeCard";
      const Yt = (0, C.x)(Xt);
      var Wt = s(28537);
      var Jt = s(454386);
      var Kt = s(648695);
      var Qt = s(594766);
      var es = s(154595);
      var ts = s(907433);
      var ss = s(122060);
      var ns = s(559123);
      const as = s.p + "static/images/bs__min_417593a97e0ae401.webp";
      const is = s.p + "static/images/modal__min_77eb7300cb2cdb59.webp";
      const rs = "whats_new_compact_resumes_showed";
      const ls = "applicant.resumeList.compact.whatsNew.header";
      const os = "applicant.resumeList.compact.whatsNew.title";
      const cs = "applicant.resumeList.compact.whatsNew.button";
      const ds = "applicant.resumeList.compact.whatsNew.description";
      const us = ({ trls: e }) => {
        const { isMobile: t } = (0, p.G)();
        const [s, a] = (0, n.useState)(false);
        const i = (0, Wt.l)(as);
        const r = (0, Wt.l)(is);
        (0, n.useEffect)(() => {
          if (!Q.Y.getItem(rs)) {
            a(true);
          }
        }, []);
        const l = () => {
          Q.Y.setItem(rs, "true");
          a(false);
        };
        if (t) {
          return (0, F.jsxs)(Jt.R, {
            visible: s,
            header: (0, F.jsx)(Kt.N, {
              children: (0, F.jsx)(Qt.h, {
                children: (0, F.jsx)(es.e, {
                  centered: true,
                  left: (0, F.jsx)(F.Fragment, {}),
                  right: (0, F.jsx)(ie.Cs7, {
                    padding: 8,
                    initialColor: "primary",
                    backgroundStyle: "overlay-action",
                    borderRadius: "halfHeight",
                    onClick: l,
                  }),
                  children: (0, F.jsx)(ts.c, {
                    centered: true,
                    title: (0, F.jsx)(Re.x, {
                      typography: "subtitle-1-semibold",
                      ellipsis: true,
                      children: e[ls],
                    }),
                  }),
                }),
              }),
            }),
            footer: (0, F.jsx)(ss.o, {
              primaryActions: (0, F.jsx)(I.z, {
                stretched: true,
                mode: "primary",
                style: "accent",
                onClick: l,
                children: e[cs],
              }),
            }),
            onClose: l,
            children: [
              (0, F.jsx)($.Z, {
                stretched: true,
                borderRadius: 24,
                children: (0, F.jsx)("img", {
                  height: "340px",
                  width: "100%",
                  alt: "whats_new",
                  src: i,
                }),
              }),
              (0, F.jsx)(x.X, {
                default: 20,
              }),
              (0, F.jsx)(Z.D, {
                Element: "h3",
                alignment: "center",
                size: "medium",
                description: e[ds],
                children: e[os],
              }),
              (0, F.jsx)(x.X, {
                default: 8,
              }),
            ],
          });
        } else {
          return (0, F.jsx)(ns.u, {
            size: "medium",
            visible: s,
            actions: (0, F.jsx)(ie.Cs7, {
              initialColor: "constant",
              onClick: l,
            }),
            onClose: l,
            height: "content",
            headerImageUrl: r,
            headerHeight: 242,
            footer: (0, F.jsx)(ss.o, {
              additionalContent: (0, F.jsx)(I.z, {
                stretched: true,
                mode: "primary",
                style: "accent",
                onClick: l,
                children: e[cs],
              }),
            }),
            children: (0, F.jsx)(Z.D, {
              Element: "h3",
              size: "small",
              description: e[ds],
              children: e[os],
            }),
          });
        }
      };
      us.displayName = "CompactResumes/WhatsNewModal/index/WhatsNewModal";
      const ms = (0, Ue.Z)(us);
      const ps = "more-button--nNpGHieZTXQLsEFM";
      const hs = "resumeList.title";
      const xs = "applicant.resumeList.compact.showMore";
      const vs = ({ trls: e, resumes: t }) =>
        (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(Z.D, {
              size: "medium",
              Element: "h4",
              children: e[hs],
            }),
            (0, F.jsx)(x.X, {
              default: 12,
            }),
            (0, F.jsx)($.Z, {
              stretched: true,
              borderRadius: 24,
              borderWidth: "default",
              children: (0, F.jsx)(Y.$, {
                children: (0, F.jsxs)(ne, {
                  children: [
                    (0, F.jsx)(x.X, {
                      default: 8,
                    }),
                    t.map((e, t) => {
                      const s = (0, W.DY)(e);
                      return (0, F.jsx)(
                        Yt,
                        {
                          resume: e,
                          position: t,
                        },
                        s,
                      );
                    }),
                    (0, F.jsx)("div", {
                      className: ps,
                      children: (0, F.jsx)(I.z, {
                        Element: c.SPALink,
                        onClick: () => {
                          z()({
                            hhtmSource: "resume_list",
                          });
                        },
                        to: "/applicant/my_resumes",
                        stretched: true,
                        style: "accent",
                        mode: "secondary",
                        children: e[xs],
                      }),
                    }),
                    (0, F.jsx)(x.X, {
                      default: 12,
                    }),
                    (0, F.jsx)(X.F, {}),
                    (0, F.jsx)(G.o, {}),
                  ],
                }),
              }),
            }),
            (0, F.jsx)(ms, {}),
          ],
        });
      vs.displayName = "ApplicantResumes/CompactResumes/index/CompactResumes";
      const ys = (0, C.x)(vs);
      var fs = s(609918);
      var bs = s(927633);
      var js = s(248339);
      var gs = s(205838);
      const Ss = [gs.uH, gs.Eo, gs.hl];
      const ks = 172800000;
      const Cs = Date.now();
      function _s() {
        const e = (0, w.v)(({ applicantPaymentServices: e }) =>
          e.includes(bs.lU.ResumeRenewal),
        );
        const t = (0, w.v)(({ applicantResumes: e }) => e).filter(
          ({ _attributes: e }) => e.isSearchable,
        );
        return (
          (0, _.r)() &&
          e &&
          (function (e) {
            return !!e
              .filter(({ _attributes: e }) => !e.renewal)
              .filter(({ accessType: e }) => {
                var t;
                return (
                  e != null &&
                  (t = e[0]) !== null &&
                  t !== undefined &&
                  !!t.string &&
                  Ss.includes(e[0].string)
                );
              })
              .find(
                ({ _attributes: e }) =>
                  Cs - new Date(e.moderated).getTime() < ks,
              );
          })(t)
        );
      }
      var ws = s(961238);
      var Ns = s.n(ws);
      var Rs = s(365545);
      var As = s.n(Rs);
      var Es = s(872218);
      var Ls = s(643782);
      var Ps = s(468444);
      const Is = "root--JpTcgyfffTQRKxjJ";
      const Ms = "applicant-navigation-redesign--G7uCJU1umtc7dljq";
      const Ts = "resumeList.title";
      const Bs = "resumeList.newResumeCreate";
      const Fs = "resumeList.tools.complete_resume";
      const Ds = "resumeList.maxResumes.title";
      const Hs = "resumeList.maxResumes.hint";
      const qs = "resumeList.maxResumes.button";
      const Us = {
        createResume: "resumeList.mobile.resumeCreate",
        completeResume: "resumeList.mobile.completeResume",
      };
      const Vs = ({ trls: e, isMobile: t }) => {
        const s = (0, c.usePush)();
        const a = (0, ve.$w)();
        const i = (0, _.r)();
        const r = (0, n.useRef)(null);
        const l = (0, w.v)(Ps.W$);
        const o = (0, w.v)(Ls.LW);
        const d = (0, w.v)(Ls.Ss);
        const u = (0, w.v)(T.vW);
        const [m, p] = (0, n.useState)(false);
        const [h, x] = (0, n.useState)(false);
        const [v, y] = (0, n.useState)(false);
        (0, n.useEffect)(() => {
          if (v) {
            As()({
              hhtmSource: "resume_creation_limit_count_alert",
            });
          }
        }, [v]);
        const f = () => {
          if (d === 0) {
            y(true);
          } else {
            Ns()({
              hhtmSourceLabel: "resume_list",
            });
            s("/applicant/resumes/new");
          }
        };
        const b = () => {
          if (d === 0) {
            y(true);
          } else {
            p(true);
          }
        };
        const j = () => y(false);
        return (0, F.jsxs)("div", {
          className: Is,
          children: [
            (0, F.jsx)(Z.D, {
              size: "medium",
              Element: "h4",
              children: e[Ts],
            }),
            (0, F.jsx)("div", {
              className: Ms,
              children: t
                ? (0, F.jsx)(ae.r, {
                    iconLeft: (0, F.jsx)(ie.xAJ, {}),
                    onClick: () => x(true),
                    children: e[Bs],
                  })
                : (0, F.jsxs)(F.Fragment, {
                    children: [
                      u && i
                        ? (0, F.jsx)(I.z, {
                            to: "/article/expert_resume?from=myresume",
                            mode: t ? "tertiary" : "secondary",
                            size: "small",
                            "data-qa": "resumeservice-button__completeResume",
                            Element: c.SPALink,
                            onClick: () =>
                              (0, M.sendAnalyticsCompleteResume)(l),
                            stretched: t,
                            children: e[Fs],
                          })
                        : null,
                      a
                        ? (0, F.jsx)(I.z, {
                            ref: r,
                            size: "small",
                            mode: "secondary",
                            style: "neutral",
                            "data-qa": "resumeservice-button__createResumeZP",
                            onClick: b,
                            stretched: t,
                            children: e[Bs],
                          })
                        : (0, F.jsx)(I.z, {
                            "data-qa": "resumeservice-button__createResumeHH",
                            size: "small",
                            ref: r,
                            mode: "secondary",
                            style: "neutral",
                            onClick: f,
                            stretched: t,
                            children: e[Bs],
                          }),
                    ],
                  }),
            }),
            (0, F.jsxs)(Jt.R, {
              height: "content",
              visible: h,
              onClose: () => x(false),
              children: [
                (0, F.jsx)(I.z, {
                  ref: r,
                  stretched: true,
                  size: "large",
                  mode: "tertiary",
                  style: "neutral",
                  "data-qa": a
                    ? "resumeservice-button__createResumeZP"
                    : "resumeservice-button__createResumeHH",
                  icon: (0, F.jsx)(ie.GhD, {}),
                  onClick: a ? b : f,
                  children: e[Us.createResume],
                }),
                u &&
                  i &&
                  (0, F.jsx)(I.z, {
                    stretched: true,
                    to: "/article/expert_resume?from=myresume",
                    size: "large",
                    style: "neutral",
                    mode: "tertiary",
                    "data-qa": "resumeservice-button__completeResume",
                    Element: c.SPALink,
                    onClick: () => (0, M.sendAnalyticsCompleteResume)(l),
                    icon: (0, F.jsx)(ie.D8h, {}),
                    children: e[Us.completeResume],
                  }),
              ],
            }),
            (0, F.jsx)(Ve.bZ, {
              icon: (0, F.jsx)(ie.uvJ, {}),
              layout: "horizontal",
              title: (0, Pt.WU)(e[Ds], {
                "{0}": o,
              }),
              visible: v,
              onClose: j,
              iconStyle: "neutral",
              description: e[Hs],
              buttons: (0, F.jsx)(I.z, {
                stretched: true,
                size: "medium",
                style: "accent",
                mode: "primary",
                onClick: j,
                children: e[qs],
              }),
            }),
            (0, F.jsx)(Es.Z, {
              url: "/applicant/resumes/new",
              visible: m,
              onClose: () => p(false),
              activatorRef: r,
            }),
          ],
        });
      };
      Vs.displayName =
        "components/ApplicantNavigation/index/ApplicantNavigation";
      const Os = (0, C.x)(Vs);
      var zs = s(895370);
      var Zs = s.n(zs);
      var $s = s(861044);
      var Gs = s.n($s);
      const Xs = "content--ypTMX9LkuPstO4jd";
      const Ys = "banner-image-container--j4xw7xr77EcMahsr";
      const Ws = "banner-image--_WixxUmIVMvF15Bo";
      const Js = "FindJobPromo.hhPro.title";
      const Ks = "FindJobPromo.hhPro.description";
      const Qs = "FindJobPromo.hhPro.more";
      const en = ({ trls: e }) => {
        const { isXS: t } = (0, p.G)();
        return (0, F.jsx)(i.ElementShownAnchor, {
          fn: Zs(),
          bannerName: "hhpro_subscription_banner",
          hhtmSource: "resume_list",
          children: (0, F.jsx)($.Z, {
            padding: 0,
            borderRadius: 24,
            stretched: true,
            children: (0, F.jsxs)("div", {
              className: Ys,
              children: [
                (0, F.jsx)($.Z, {
                  padding: 24,
                  borderRadius: 24,
                  style: "secondary",
                  stretched: true,
                  children: (0, F.jsxs)("div", {
                    className: Xs,
                    children: [
                      (0, F.jsx)(Z.D, {
                        Element: "h3",
                        size: "small",
                        children: e[Js],
                      }),
                      (0, F.jsx)(x.X, {
                        default: 6,
                      }),
                      (0, F.jsx)(Re.x, {
                        typography: "paragraph-2-regular",
                        children: e[Ks],
                      }),
                      (0, F.jsx)(x.X, {
                        default: 20,
                      }),
                      (0, F.jsx)(I.z, {
                        mode: "primary",
                        size: "small",
                        Element: c.SPALink,
                        to: B.Pp,
                        stretched: t,
                        onClick: () =>
                          Gs()({
                            bannerName: "hhpro_subscription_banner",
                            buttonText: e[Qs],
                          }),
                        children: e[Qs],
                      }),
                    ],
                  }),
                }),
                (0, F.jsx)("div", {
                  className: Ws,
                }),
              ],
            }),
          }),
        });
      };
      en.displayName = "components/FindJobHhPro/index/FindJobHhPro";
      const tn = (0, C.x)(en);
      const sn = ({ hash: e, isRedesign: t = false }) => {
        const s = (0, w.v)((e) => e.latestResumeHash);
        const n = `careerPlatformBannerByResumeHash-${s}`;
        if (!(0, w.v)((e) => !!e.microFrontends[n]) || (e && s !== e)) {
          return null;
        } else {
          return (0, F.jsxs)(F.Fragment, {
            children: [
              (0, F.jsx)(x.X, {
                default: t ? 24 : 16,
                gteS: t ? 24 : 16,
              }),
              (0, F.jsx)(S.X, {
                place: n,
              }),
            ],
          });
        }
      };
      sn.displayName =
        "components/CareerPlatformBanner/index/ProxyCareerPlatformBanner";
      const nn = "wrapper--abxCih7uZfAS7yDr";
      const an = "content--Cq_k3ncAAII164jG";
      const rn = ({
        title: e,
        description: t,
        button: s,
        href: n,
        onClick: a,
        style: i = "secondary",
        ...r
      }) => {
        const { isMobile: l } = (0, p.G)();
        return (0, F.jsx)($.Z, {
          stretched: true,
          borderRadius: 24,
          style: i,
          ...r,
          children: (0, F.jsxs)("div", {
            className: nn,
            children: [
              (0, F.jsxs)("div", {
                className: an,
                children: [
                  (0, F.jsx)(Re.x, {
                    typography: "title-5-semibold",
                    children: e,
                  }),
                  (0, F.jsx)(x.X, {
                    default: 6,
                  }),
                  (0, F.jsx)(Re.x, {
                    typography: "paragraph-2-regular",
                    children: t,
                  }),
                ],
              }),
              n
                ? (0, F.jsx)(I.z, {
                    to: n,
                    Element: c.SPALink,
                    size: l ? "small" : "medium",
                    mode: "primary",
                    style: "accent",
                    stretched: l,
                    onClick: a,
                    children: s,
                  })
                : (0, F.jsx)(I.z, {
                    size: l ? "small" : "medium",
                    mode: "primary",
                    style: "accent",
                    stretched: l,
                    onClick: a,
                    children: s,
                  }),
            ],
          }),
        });
      };
      rn.displayName = "components/Banner/index/Banner";
      const ln = "FindJobPromo.title";
      const on = "FindJobPromo.activate";
      const cn = "FindJobPromo.description";
      const dn = ({ trls: e }) =>
        (0, F.jsx)(i.ElementShownAnchor, {
          fn: Zs(),
          bannerName: "resume_renewal_banner",
          hhtmSource: "resume_list",
          children: (0, F.jsx)(rn, {
            href: B.Pp,
            title: e[ln],
            button: e[on],
            description: e[cn],
            onClick: () =>
              Gs()({
                bannerName: "resume_renewal_banner",
                hhtmSource: "resume_list",
                buttonText: e[on],
              }),
          }),
        });
      dn.displayName = "components/FindJobPromo/index/FindJobPromo";
      const un = (0, C.x)(dn);
      const mn = {
        hhtmSource: "resume_list",
      };
      const pn = () => {
        const { isMobile: e } = (0, p.G)();
        const t = (0, d.ZP)("compact_resumes_b");
        const s = _s();
        const a = (0, w.v)(A.F);
        const r = (0, w.v)(({ stateHhPro: e }) => e === bs.Jd.Available);
        const l = (0, n.useMemo)(() => (0, A.j)(a), [a]);
        const o = l.length === 1;
        if (t && !o) {
          return (0, F.jsx)(js.P, {
            children: (0, F.jsxs)(ce.e.Provider, {
              value: mn,
              children: [
                (0, F.jsx)(ys, {
                  resumes: l,
                }),
                s &&
                  (0, F.jsxs)(F.Fragment, {
                    children: [
                      (0, F.jsx)(x.X, {
                        default: 24,
                        gteS: 24,
                      }),
                      r ? (0, F.jsx)(tn, {}) : (0, F.jsx)(un, {}),
                    ],
                  }),
                (0, F.jsx)(sn, {
                  isRedesign: t,
                }),
              ],
            }),
          });
        } else {
          return (0, F.jsx)(js.P, {
            children: (0, F.jsxs)(ce.e.Provider, {
              value: mn,
              children: [
                (0, F.jsx)(x.X, {
                  default: e ? 8 : 24,
                }),
                (0, F.jsx)(Os, {
                  isMobile: e,
                }),
                (0, F.jsx)(x.X, {
                  default: 16,
                }),
                (0, F.jsx)(h.z, {
                  default: 16,
                  gteS: 16,
                  children: l.map((e, t) => {
                    const n = (0, W.ho)(e);
                    const a = (0, W.DY)(e);
                    const l = (0, W.LY)(e);
                    const o = (0, ut.n)(l);
                    return (0, F.jsxs)(
                      i.ElementShownAnchor,
                      {
                        fn: V(),
                        status: o,
                        position: t,
                        resumeId: a,
                        hhtmSource: "resume_list",
                        children: [
                          (0, F.jsx)(fs.N, {
                            resume: e,
                            position: t,
                          }),
                          s &&
                            t === 0 &&
                            (0, F.jsxs)(F.Fragment, {
                              children: [
                                (0, F.jsx)(x.X, {
                                  default: 16,
                                  gteS: 16,
                                }),
                                r ? (0, F.jsx)(tn, {}) : (0, F.jsx)(un, {}),
                              ],
                            }),
                          (0, F.jsx)(sn, {
                            hash: n,
                          }),
                        ],
                      },
                      a,
                    );
                  }),
                }),
              ],
            }),
          });
        }
      };
      pn.displayName = "components/ApplicantResumes/index/ApplicantResumes";
      const hn = pn;
      var xn = s(882177);
      var vn = s.n(xn);
      var yn = s(881791);
      var fn = s(339449);
      var bn = s(65110);
      var jn = s(764709);
      var gn = s(971408);
      var Sn = s.n(gn);
      var kn = s(988553);
      var Cn = s.n(kn);
      var _n = s(413134);
      const wn = "card-wrapper--ltg7kiipy_M1cBU_";
      const Nn = "icon--gHXbwWiSVU9kyf2e";
      const Rn = "resume-extra-banner-icon--GjvwA0t7IcEfzkAh";
      const An = "card-content--t74PChAqhxEtjdBt";
      const En = "resume-extra-banner";
      const Ln = ({
        title: e,
        text: t,
        icon: s,
        link: n,
        dataAnalytics: a,
      }) => {
        const r = (0, w.v)(({ userType: e }) => e);
        const l = (0, w.v)(({ analyticsParams: e }) => e.hhtmSource);
        const o = (0, _n.j)(n);
        o.params = {
          ...o.params,
          from: l,
          hhtmFromLabel: "cards_applicant_services_slider",
        };
        const d = () => {
          Sn()({
            buttonName: a,
          });
          (0, M.sendAnalyticsResumesSlider)(a, r);
          if (a === En) {
            Gs()({
              bannerName: "new_year_banner",
              buttonText: t,
            });
          }
        };
        const u = () =>
          (0, F.jsx)($.Z, {
            Element: c.SPALink,
            to: o.href,
            padding: 24,
            borderRadius: 24,
            onClick: d,
            borderWidth: "default",
            stretched: true,
            verticalStretched: true,
            children: (0, F.jsxs)("div", {
              className: An,
              children: [
                (0, F.jsx)(Ne.b, {
                  right: (0, F.jsx)(ie.eTh, {}),
                  left: s,
                }),
                (0, F.jsx)(x.X, {
                  default: 16,
                }),
                (0, F.jsxs)(Ne.b, {
                  children: [
                    (0, F.jsx)(Ae.j, {
                      type: "title",
                      children: e,
                    }),
                    (0, F.jsx)(Ae.j, {
                      type: "subtitle",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        if (a === En) {
          return (0, F.jsx)(i.ElementShownAnchor, {
            fn: (e) =>
              Zs()(e, {
                bannerName: "new_year_banner",
              }),
            children: u(),
          });
        } else {
          return (0, F.jsx)(i.ElementShownAnchor, {
            fn: (e) =>
              Cn()(e, {
                elementName: a,
              }),
            children: u(),
          });
        }
      };
      Ln.displayName =
        "components/ApplicantServicesSlider/ApplicantServicesCard/ApplicantServicesCard";
      const Pn = "applicantServicesSlider.cards.completeResume.title.v2";
      const In = "applicantServicesSlider.cards.completeResume.text.v2";
      const Mn = "applicantServicesSlider.cards.interview.title";
      const Tn = "applicantServicesSlider.cards.interview.text";
      const Bn = "applicantServicesSlider.cards.consultation.title";
      const Fn = "applicantServicesSlider.cards.consultation.text.v2";
      const Dn = "applicantServicesSlider.cards.extraBanner.title";
      const Hn = "applicantServicesSlider.cards.extraBanner.text";
      const qn = ({ trls: e }) => {
        const { isMobile: t } = (0, p.G)();
        const s = (0, _.r)();
        const a = (0, w.v)(({ applicantPaymentServices: e }) => e);
        const i = (0, w.v)((e) => e.resumeExtraBannerLink);
        const r = (0, jn.kQ)();
        const l = (0, ve.Xl)();
        const o = !!i && r && l;
        const c = (0, bn.a)(e);
        const d = (0, n.useMemo)(() => {
          const t = [];
          if (s) {
            t.push(
              {
                id: "extra_banner",
                title: e[Dn],
                text: e[Hn],
                icon: (0, F.jsx)("div", {
                  className: vn()(Nn, Rn),
                }),
                link: i,
                dataAnalytics: "resume-extra-banner",
                enabled: o,
              },
              c,
              {
                id: "complete_resume",
                title: e[Pn],
                text: e[In],
                icon: (0, F.jsx)(ie.txp, {
                  initialColor: "accent",
                }),
                link: "/article/expert_resume",
                dataAnalytics: "complete_resume",
                enabled: a.includes(T.dw.CompleteResume),
              },
              {
                id: "interview_practice",
                title: e[Mn],
                text: e[Tn],
                icon: (0, F.jsx)(ie.gql, {
                  initialColor: "warning-secondary",
                }),
                link: "/interview_practice",
                dataAnalytics: "interview_practice",
                enabled: a.includes(T.dw.CompleteResumeInterviewPractice),
              },
              {
                id: "career_consult",
                title: e[Bn],
                text: e[Fn],
                icon: (0, F.jsx)(ie.HMo, {
                  initialColor: "positive",
                }),
                link: "/career_consult",
                dataAnalytics: "career_consult",
                enabled: a.includes(T.dw.CompleteResumeConsultOnly),
              },
            );
          }
          return t.filter((e) => e.enabled);
        }, [s, e, i, o, c, a]);
        if (t) {
          return null;
        } else if (d.length) {
          return (0, F.jsx)(yn.xR, {
            correction: 0,
            children: (0, F.jsx)(Ee.q, {
              default: 12,
              children: d.map((e) =>
                (0, F.jsx)(
                  fn.r,
                  {
                    children: (0, F.jsx)("div", {
                      className: wn,
                      children: (0, F.jsx)(Ln, {
                        title: e.title,
                        text: e.text,
                        icon: e.icon,
                        link: e.link,
                        dataAnalytics: e.dataAnalytics,
                      }),
                    }),
                  },
                  e.id,
                ),
              ),
            }),
          });
        } else {
          return null;
        }
      };
      qn.displayName =
        "components/ApplicantServicesSlider/index/ApplicantServicesSlider";
      const Un = (0, C.x)(qn);
      var Vn = s(331913);
      var On = s(815853);
      const zn = "card-wrapper--BvMPGgj_JEIYUUgd";
      const Zn = ({ trls: e }) => {
        const t = (0, On.I)({
          trls: e,
        });
        if (t.length) {
          return (0, F.jsx)(yn.xR, {
            correction: 0,
            disableButtons: true,
            children: (0, F.jsx)(Ee.q, {
              default: 12,
              children: t.map((e) =>
                (0, F.jsx)(
                  fn.r,
                  {
                    children: (0, F.jsx)("div", {
                      className: zn,
                      children: (0, F.jsx)(Vn.N, {
                        title: e.title,
                        text: e.text,
                        icon: e.icon,
                        link: e.link,
                        linkText: e.linkText,
                        dataAnalytics: e.dataAnalytics,
                      }),
                    }),
                  },
                  e.id,
                ),
              ),
            }),
          });
        } else {
          return null;
        }
      };
      Zn.displayName =
        "components/ApplicantServicesSliderRedesign/index/ApplicantServicesSliderRedesign";
      const $n = (0, C.x)(Zn);
      var Gn = s(885309);
      var Xn = s.n(Gn);
      var Yn = s(784927);
      var Wn = s.n(Yn);
      var Jn = s(589903);
      var Kn = s.n(Jn);
      var Qn = s(526917);
      var ea = s.n(Qn);
      var ta = s(290660);
      var sa = s.n(ta);
      var na = s(412303);
      var aa = s(301023);
      var ia = s(441226);
      var ra = s(650911);
      const la = ({ isBig: e, iconSource: t, alt: s }) =>
        (0, F.jsx)("img", {
          loading: "lazy",
          src: t,
          alt: s,
          className: `resume-key-skills-verification-row-${e ? "big" : "small"}-icon`,
        });
      la.displayName =
        "components/ApplicantSkillsVerificationIcon/index/ApplicantSkillsVerificationIcon";
      const oa = la;
      var ca = s(963252);
      var da = s(26149);
      var ua = s.n(da);
      var ma = s(997543);
      var pa = s(977326);
      var ha = s.n(pa);
      var xa = s(388926);
      var va = s(49924);
      var ya = s(255717);
      const fa = "addSkillToResume.added.title";
      const ba = "addSkillToResume.added.delete";
      const ja = "addSkillToResume.deleted";
      const ga = ({ trls: e, skillName: t, skillId: s, level: a }) => {
        const {
          isCancelled: r,
          isAdded: l,
          isAbleToAddInResume: o,
          resumeTitle: c,
          handleDeleteSkill: d,
          autoAddAnalyticsObj: u,
        } = ((e, t, s, a) => {
          const [i, r] = (0, n.useState)(false);
          const [l, o] = (0, n.useState)(false);
          const c = (0, n.useRef)();
          const d = (0, w.Y)((e) => e.addSkillToResume);
          const u =
            !!e &&
            d != null &&
            !!d.keySkills &&
            !!(d.keySkills.length < 30) &&
            !d.keySkills.find((t) => t.string === e);
          const m = (0, n.useMemo)(
            () => ({
              skillId: t,
              level: s,
              resumeHash: d.hash,
            }),
            [d == null ? undefined : d.hash, s, t],
          );
          const p = (0, n.useCallback)(() => {
            const t = "/shards/add_skill_to_resume";
            if (!d) {
              throw new Error(
                "auto-add skill to resume: not enough data to add skill to resume",
              );
            }
            const s = new FormData();
            s.append(
              "key_skills",
              JSON.stringify([
                ...d.keySkills,
                {
                  string: e,
                },
              ]),
            );
            s.append("_xsrf", xa.L.get("_xsrf") || "");
            if (navigator.sendBeacon) {
              const e = `${t}?${_n.j.stringify({
                resume: d.hash,
              })}`;
              if (navigator.sendBeacon(e, s)) {
                return o(true);
              }
              throw new Error("auto-add skill to resume: sendBeacon failed");
            }
            va.default.log(
              "out",
              "auto-add skill to resume: sendBeacon is not available",
            );
            return ya._i
              .post(t, s, {
                params: {
                  resume: d.hash,
                },
              })
              .then(() => o(true));
          }, [d, e]);
          (0, n.useEffect)(() => {
            if (c.current && i) {
              clearTimeout(c.current);
            }
          }, [i]);
          (0, n.useEffect)(() => {
            if (c.current) {
              clearTimeout(c.current);
            }
            c.current = setTimeout(() => {
              if (!l && u) {
                p();
              }
            }, a);
          }, [a, l, u, p]);
          (0, n.useEffect)(() => {
            const e = () => {
              if (document.visibilityState === "hidden" && !l && !!u && !i) {
                p();
              }
            };
            window.addEventListener("visibilitychange", e);
            return () => {
              window.removeEventListener("visibilitychange", e);
            };
          }, [l, u, i, p]);
          return {
            isCancelled: i,
            isAdded: l,
            isAbleToAddInResume: u,
            handleDeleteSkill: () => {
              ha()(m);
              r(true);
            },
            autoAddAnalyticsObj: m,
            resumeTitle: (d == null ? undefined : d.resumeTitle) || "",
          };
        })(t, s, a, 12000);
        return (0, F.jsxs)(F.Fragment, {
          children: [
            r &&
              (0, F.jsx)(ma.A, {
                addon: (0, F.jsx)(ie.lot, {
                  initialColor: "positive",
                }),
                children: e[ja],
              }),
            !l &&
              o &&
              !r &&
              (0, F.jsx)(ma.A, {
                showTimer: true,
                autohideTime: 12000,
                onAction: d,
                actionLabel: e[ba],
                children: (0, F.jsx)(i.ElementShownAnchor, {
                  fn: ua(),
                  ...u,
                  children: (0, Pt.WU)(e[fa], {
                    "{title}": c,
                  }),
                }),
              }),
          ],
        });
      };
      ga.displayName = "components/AutoAddSkill/index/AutoAddSkill";
      const Sa = (0, C.x)(ga);
      const ka = "rank--CVzT6itGHf4Dvbau";
      const Ca = "background--mJZmYHdBg8LNLJLC";
      const _a = "success--GaBnq3PzcMr4YENS";
      const wa = "black--VgYZzlYKrYy0H__Z";
      const Na = {
        3: "tests.card.level.advanced",
        2: "tests.card.level.middle",
        1: "tests.card.level.beginner",
      };
      const Ra = ({
        trls: e,
        rank: t,
        background: s = false,
        success: n = false,
        name: a = "",
        black: i,
      }) =>
        t
          ? (0, F.jsx)(F.Fragment, {
              children: (0, F.jsx)("div", {
                className: vn()(ka, {
                  [Ca]: s,
                  [_a]: n,
                  [wa]: i,
                }),
                "data-qa": "verification-method-level",
                children: n
                  ? (0, F.jsx)(Re.x, {
                      typography: "label-3-regular",
                      style: "positive",
                      children: a || e[Na[t]],
                    })
                  : (0, F.jsx)(Re.x, {
                      typography: "label-3-regular",
                      style: "secondary",
                      children: a || e[Na[t]],
                    }),
              }),
            })
          : (0, F.jsx)(F.Fragment, {});
      Ra.displayName = "components/TestRank/index/Index";
      const Aa = (0, C.x)(Ra);
      const Ea = "modal--Px4v_JDHukMzv0Mb";
      const La = "mobile--YCOc_eJxqy4JhOrC";
      const Pa = "position--i2BRM9d_4hn0m0Uh";
      const Ia = "reverse--WIO0GOUydEsXXkA2";
      const Ma = "container--lJosQwAqxXcypWHx";
      const Ta = "result--FWOplpTpyQQ1Hhm6";
      const Ba = (0, na.D)(() => {
        (0, N.BH)("skillVerificationTheory");
      }, 300);
      const Fa = (0, na.D)(() => {
        (0, N.BH)("skillVerificationPractice");
      }, 300);
      const Da = "test.answers";
      const Ha = "test.button.education";
      const qa = "test.button.practice";
      const Ua = "test.button.fraudInfo";
      const Va = "test.answer.many";
      const Oa = "test.skill.success";
      const za = "test.skill.failure";
      const Za = "test.practice.success";
      const $a = "test.practice.failure";
      const Ga = "test.theory.success";
      const Xa = "test.theory.failure";
      const Ya = "test.language.success";
      const Wa = "test.language.failure";
      const Ja = "test.success.career";
      const Ka = "test.failure.career";
      const Qa = "test.failure.text";
      const ei = "test.fraud.text";
      const ti = "test.success.text";
      const si = "test.reportButton";
      const ni = {
        0: "",
        3: "test.level.advanced",
        2: "test.level.middle",
        1: "test.level.beginner",
      };
      const ai = "applicant_verification_report";
      const ii = (e) => ["AVAILABLE"].includes(e);
      const ri = (e) => e === P.Kb.FraudDetected;
      const li = (e, t) =>
        (0, F.jsxs)("div", {
          className: Ea,
          children: [
            (0, F.jsx)($.Z, {
              style: "warning-secondary",
              padding: 12,
              borderRadius: 16,
              stretched: true,
              children: (0, F.jsx)(Re.x, {
                style: "warning",
                "data-qa": "test-result-text",
                children: t,
              }),
            }),
            e &&
              (0, F.jsx)(Re.x, {
                style: "secondary",
                "data-qa": "test-result-text",
                typography: "label-2-regular",
                children: e,
              }),
          ],
        });
      const oi = ({ trls: e, results: t, report: s }) => {
        var i;
        var r;
        var l;
        var o;
        var d;
        var u;
        var m;
        var h;
        var x;
        var v;
        var y;
        var f;
        var b;
        var j;
        const g =
          (t == null ||
          (i = t.items) === null ||
          i === undefined ||
          (i = i[0]) === null ||
          i === undefined
            ? undefined
            : i.name) || "";
        const S =
          (t == null ||
          (r = t.items) === null ||
          r === undefined ||
          (r = r[0]) === null ||
          r === undefined ||
          (r = r.level) === null ||
          r === undefined
            ? undefined
            : r.rank) || 2;
        const k =
          (t == null ||
          (l = t.items) === null ||
          l === undefined ||
          (l = l[0]) === null ||
          l === undefined
            ? undefined
            : l.result.status) === "SUCCESS" || false;
        const C = Boolean(
          (t == null ||
          (o = t.items) === null ||
          o === undefined ||
          (o = o[0]) === null ||
          o === undefined
            ? undefined
            : o[P.l9.CourseUrl]) &&
          t.method[P.l9.BrandingSettings][P.l9.CtaButtonEnabled],
        );
        const _ =
          t == null ||
          (d = t.items) === null ||
          d === undefined ||
          (d = d[0]) === null ||
          d === undefined
            ? undefined
            : d[P.l9.CourseUrl];
        const N =
          t == null ||
          (u = t.items) === null ||
          u === undefined ||
          (u = u[0]) === null ||
          u === undefined ||
          (u = u.result) === null ||
          u === undefined ||
          (u = u.score) === null ||
          u === undefined
            ? undefined
            : u.actual;
        const R =
          t == null ||
          (m = t.items) === null ||
          m === undefined ||
          (m = m[0]) === null ||
          m === undefined ||
          (m = m.result) === null ||
          m === undefined ||
          (m = m.score) === null ||
          m === undefined
            ? undefined
            : m.max;
        const A =
          (t == null ||
          (h = t.items) === null ||
          h === undefined ||
          (h = h[0]) === null ||
          h === undefined
            ? undefined
            : h.category) === "SKILL";
        const E = (0, ca.n)(ai);
        const { isMobile: L } = (0, p.G)();
        const M = (0, c.usePush)();
        const T = (0, a.useDispatch)();
        const B =
          (x = t.items) === null ||
          x === undefined ||
          (x = x[0]) === null ||
          x === undefined
            ? undefined
            : x.name;
        const D =
          (v = t.items) === null ||
          v === undefined ||
          (v = v[0]) === null ||
          v === undefined
            ? undefined
            : v.id;
        const H =
          (y = t.items) === null ||
          y === undefined ||
          (y = y[0]) === null ||
          y === undefined
            ? undefined
            : y[P.l9.PracticeStatus];
        const q =
          ((f = t.items) === null ||
          f === undefined ||
          (f = f[0]) === null ||
          f === undefined ||
          (f = f.result) === null ||
          f === undefined
            ? undefined
            : f[P.l9.AntifraudVerdict]) || P.Kb.Unknown;
        const U = (0, w.v)((e) => e.careerLink);
        const V = Boolean(!C && U);
        const O = (0, w.v)((e) => {
          return e.applicantSkillsVerificationResult?.shortSkillIds;
        });
        const z = (0, n.useMemo)(() => {
          return {
            hhtmSource: "verification_key_skill_result",
            verificationTestName: g,
            resultType: k ? 1 : 0,
            isBrand: t.method[P.l9.BrandingSettings].enabled,
            isPaidClick: t.method[P.l9.BrandingSettings][P.l9.CtaButtonEnabled],
            nameBrand: t.method.source?.name ?? "",
            verificationMethodId: t.method.id,
            verificationSourceId: t.method.source?.id,
            levelId: S || 2,
          };
        }, [g, S, t.method, k]);
        (0, n.useEffect)(() => {
          if (S) {
            Kn()(z);
          }
        }, [S, z]);
        (0, n.useEffect)(() => {
          const e = t.method.platform !== "CODE_TASK";
          const s = t.method.platform === "CODE_TASK";
          const n = ii(H);
          if ((!e || !n) && O != null && !!O.includes(t.items[0].id)) {
            if (s) {
              Fa();
            } else if (e) {
              Ba();
            }
          }
        }, []);
        if (!S) {
          return (0, F.jsx)(F.Fragment, {});
        }
        const Z = (0, Pt.WU)(e[Da], {
          "{0}": N,
          "{1}": e[Va],
          "{2}": R,
        });
        const $ = () => {
          T((0, P.Bs)(null));
          sa()(z);
          Wn()({
            type: "close",
            ...z,
          });
          M("applicant/resumes");
        };
        const G = () => {
          Xn()(z);
          Wn()({
            type: "learn",
            ...z,
          });
        };
        const X = () => {
          if (U) {
            Wn()({
              type: k ? "learn_new" : "look_at_courses",
              ...z,
            });
            window.open(U.buttonUrl, "_blank");
          }
        };
        const Y = () => {
          const e = A ? "skills" : "langs";
          const s = t.items[0].id;
          Wn()({
            type: "practice",
            ...z,
          });
          M(`applicant/${e}/${s}/verification_methods?kind=practice&rank=${S}`);
        };
        const W = () => {
          if (s) {
            ea()({
              ...z,
              isDetail:
                !!s.theory.successfulTopics.length ||
                !!s.theory.topicsToImprove.length,
            });
            window.open(
              `/applicant/skills/${s.id}/${s.level.id}/report?category=${s.category}`,
              "_blank",
            );
          }
        };
        const J = S <= 3 ? e[ni[S]] : "";
        const K = (s) => {
          let n = e[Oa];
          let a = e[za];
          let i;
          if (
            (ii(s) || ["SUCCESS", "FAILURE"].includes(s)) &&
            t.method.platform === "KAK_DELA_QUIZ"
          ) {
            n = e[Ga];
            a = e[Xa];
          }
          if (t.method.platform !== "KAK_DELA_QUIZ") {
            n = e[Za];
            a = e[$a];
          }
          i = k
            ? (0, Pt.WU)(n, {
                "{0}": A ? J.toLowerCase() : "",
              })
            : (0, Pt.WU)(a, {
                "{0}": A ? J : "",
              });
          if (!A) {
            i = k ? e[Ya] : e[Wa];
          }
          return i;
        };
        const Q = () => {
          var s;
          var n;
          if (k) {
            if (C) {
              return (0, F.jsx)(Re.x, {
                style: "secondary",
                "data-qa": "test-result-text",
                children:
                  (s = t.items) === null ||
                  s === undefined ||
                  (s = s[0]) === null ||
                  s === undefined
                    ? undefined
                    : s.content,
              });
            } else if (V) {
              if (L) {
                return (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsxs)(Re.x, {
                      style: "secondary",
                      "data-qa": "test-result-text",
                      children: [e[ti], "."],
                    }),
                    (0, F.jsx)(Re.x, {
                      style: "secondary",
                      "data-qa": "test-result-text",
                      children: e[Ja],
                    }),
                  ],
                });
              } else {
                return (0, F.jsx)(Re.x, {
                  style: "secondary",
                  "data-qa": "test-result-text",
                  children: `${e[ti]}. ${e[Ja]}`,
                });
              }
            } else {
              return (0, F.jsx)(Re.x, {
                style: "secondary",
                "data-qa": "test-result-text",
                children: e[ti],
              });
            }
          } else if (ri(q)) {
            return li(e[Ka], e[ei]);
          } else {
            return li(
              C
                ? (n = t.items) === null ||
                  n === undefined ||
                  (n = n[0]) === null ||
                  n === undefined
                  ? undefined
                  : n.content
                : V
                  ? e[Ka]
                  : "",
              e[Qa],
            );
          }
        };
        const ee = () =>
          !k &&
          (0, F.jsxs)("div", {
            className: Ta,
            children: [
              (0, F.jsx)(ie.ARe, {}),
              (0, F.jsx)(Re.x, {
                style: "primary",
                typography: "label-3-regular",
                "data-qa": "correct-answers",
                children: Z,
              }),
            ],
          });
        const te = (e, t, n, a, i, r, l) => {
          const o = ii(r) ? "secondary" : "primary";
          const d = [];
          if (ri(q)) {
            d.push(
              (0, F.jsx)(I.z, {
                Element: c.SPALink,
                to: "https://career.hh.ru/assessment?scroll=questions",
                "data-qa": "go-to-questions",
                mode: "secondary",
                style: "accent",
                stretched: l,
                children: e[Ua],
              }),
            );
          }
          if (C) {
            d.push(
              (0, F.jsx)(I.z, {
                Element: c.SPALink,
                to: _,
                "data-qa": "go-to-education",
                mode: o,
                style: "accent",
                stretched: l,
                onClick: t,
                children: e[Ha],
              }),
            );
          }
          if (!C && V && U) {
            d.push(
              (0, F.jsx)(I.z, {
                "data-qa": "go-to-career",
                mode: o,
                style: "accent",
                stretched: l,
                onClick: n,
                children: U.buttonText,
              }),
            );
          }
          if (ii(r) && !ri(q)) {
            d.push(
              (0, F.jsx)(I.z, {
                "data-qa": "go-to-practice",
                mode: "primary",
                style: "accent",
                stretched: l,
                onClick: a,
                children: e[qa],
              }),
            );
          }
          if (E && s) {
            let t;
            switch (d.length) {
              case 0:
                t = "primary";
                break;
              case 1:
                t = "secondary";
                break;
              default:
                t = "tertiary";
            }
            d.unshift(
              (0, F.jsx)(I.z, {
                mode: t,
                style: "accent",
                onClick: i,
                "data-qa": "skill-verification-result-go-to-report",
                children: e[si],
              }),
            );
          }
          if ((E && s) || C || V || ii(r)) {
            return (0, F.jsx)("div", {
              className: vn()(Pa, {
                [Ia]: l,
              }),
              children: d,
            });
          } else {
            return undefined;
          }
        };
        return (0, F.jsxs)(F.Fragment, {
          children: [
            A &&
              k &&
              D &&
              B &&
              S &&
              (0, F.jsx)(Sa, {
                skillId: D,
                skillName: B,
                level: S,
              }),
            L
              ? (0, F.jsx)(Jt.R, {
                  visible: L,
                  onClose: $,
                  footer: (0, F.jsx)(ia.W, {
                    children: te(e, G, X, Y, W, H, L),
                  }),
                  children: (0, F.jsxs)("div", {
                    className: La,
                    children: [
                      (() => {
                        let e;
                        e = C
                          ? (0, F.jsx)(oa, {
                              iconSource: t.method.icon.defaults.original,
                              alt: "brand",
                              isBig: true,
                            })
                          : k
                            ? (0, F.jsx)(aa.q, {
                                shapeCircle: true,
                                icon: (0, F.jsx)(ie.iqm, {
                                  initialColor: "positive",
                                }),
                                mode: "icon",
                                size: 48,
                                style: "positive-secondary",
                                "aria-label": "success",
                              })
                            : (0, F.jsx)(aa.q, {
                                shapeCircle: true,
                                icon: (0, F.jsx)(ie.XGK, {
                                  initialColor: "negative",
                                }),
                                mode: "icon",
                                size: 48,
                                style: "negative-secondary",
                                "aria-label": "fail",
                              });
                        return e;
                      })(),
                      (0, F.jsx)(Re.x, {
                        typography: "title-4-semibold",
                        children: K(H),
                      }),
                      (0, F.jsx)(Aa, {
                        rank: S,
                        background: true,
                        success: k,
                        name:
                          ((b = t.items) === null ||
                          b === undefined ||
                          (b = b[0]) === null ||
                          b === undefined
                            ? undefined
                            : b.category) === "LANG"
                            ? t.method.name
                            : g,
                      }),
                      (0, F.jsx)("div", {
                        className: Ma,
                        children: ee(),
                      }),
                      Q(),
                    ],
                  }),
                })
              : (0, F.jsx)(ns.u, {
                  size: "large",
                  visible: !L,
                  onClose: $,
                  title: K(H),
                  actions: (0, F.jsx)(ra.a, {
                    mode: "secondary",
                    style: "neutral",
                    "data-qa": "close",
                    icon: ie.Cs7,
                    onClick: $,
                  }),
                  options: (0, F.jsxs)("div", {
                    className: Ea,
                    children: [
                      (0, F.jsxs)("div", {
                        className: Ma,
                        children: [
                          (0, F.jsx)(Aa, {
                            rank: S,
                            background: true,
                            success: k,
                            name:
                              ((j = t.items) === null ||
                              j === undefined ||
                              (j = j[0]) === null ||
                              j === undefined
                                ? undefined
                                : j.category) === "LANG"
                                ? t.method.name
                                : g,
                          }),
                          ee(),
                        ],
                      }),
                      Q(),
                    ],
                  }),
                  footer: (0, F.jsx)(ss.o, {
                    primaryActions: te(e, G, X, Y, W, H, L),
                  }),
                }),
          ],
        });
      };
      oi.displayName = "components/TestFinishModal/index/Index";
      const ci = (0, C.x)(oi);
      var di = s(21084);
      var ui = s(820408);
      var mi = s(867541);
      var pi = s(226453);
      const hi = "icon-empty--pkcpV5XD2MOngVd9";
      const xi = "icon-part--sR7vX9NkWQhGWZCy";
      const vi = "icon-full--lOV2skSE4sqDSubL";
      const yi = "container--EjVm5ArPKGcWyUwo";
      const fi = "main-content--ozzMJ5eicIx_P5Kk";
      const bi = "link-container--BHQQhPT8mLc1gIuR";
      const ji = {
        title: {
          one: "applicant.resumes.vacancy.responses.counter.part.title",
          some: "applicant.resumes.vacancy.responses.counter.part.title.some",
        },
        hint: "applicant.resumes.vacancy.responses.counter.part.hint",
      };
      const gi = {
        title: {
          one: "applicant.resumes.vacancy.responses.counter.full.title",
          some: "applicant.resumes.vacancy.responses.counter.full.title.some",
        },
        hint: "applicant.resumes.vacancy.responses.counter.full.hint",
      };
      const Si = "applicant.resumes.vacancy.responses.counter.button";
      const ki = ({ relatedVacanciesHash: e, trls: t }) => {
        const { isMobile: s } = (0, p.G)();
        const a = (0, w.v)(({ applicantResumesStatistics: e }) => {
          return e.recommendationsForAllResumes?.responsesRequired;
        });
        const i = (0, w.v)(({ applicantResumesStatistics: e }) => {
          return e.recommendationsForAllResumes?.responsesCount ?? 0;
        });
        if (!a) {
          return null;
        }
        const l = (0, F.jsx)("div", {
          className: vn()({
            [hi]: i === 0,
            [xi]: i < a && i > 0,
            [vi]: i >= a,
          }),
        });
        const o = a - i;
        const d = `${pi.Z.vacancySearch}?resume=${e}&from=resumelist`;
        const u = () =>
          r().sendHHEventButtonClick("vacancy-response-counter-suitable");
        const m = (0, n.useMemo)(
          () =>
            (0, di.v)(i, {
              one: t[gi.title.one],
              some: t[gi.title.some],
              many: t[gi.title.one],
            }).replace("{0}", String(i)),
          [t, i],
        );
        const v = (0, n.useMemo)(
          () =>
            (0, di.v)(o, {
              one: t[ji.title.one],
              some: t[ji.title.some],
              many: t[ji.title.one],
            }).replace("{0}", String(o)),
          [t, o],
        );
        return (0, F.jsxs)($.Z, {
          stretched: true,
          padding: s ? 12 : 24,
          borderWidth: "default",
          borderRadius: 24,
          children: [
            (0, F.jsxs)("div", {
              className: yi,
              children: [
                s
                  ? undefined
                  : (0, F.jsxs)(F.Fragment, {
                      children: [
                        l,
                        (0, F.jsx)(ui.V, {
                          default: 12,
                        }),
                      ],
                    }),
                (0, F.jsx)("div", {
                  className: fi,
                  children: (0, F.jsxs)(h.z, {
                    default: 4,
                    children: [
                      (0, F.jsx)(Re.x, {
                        typography: "subtitle-1-semibold",
                        children: o > 0 ? v : m,
                      }),
                      (0, F.jsx)(Re.x, {
                        typography: "label-4-regular",
                        style: "secondary",
                        children:
                          o > 0
                            ? t[ji.hint].replace("{0}", String(a))
                            : t[gi.hint],
                      }),
                    ],
                  }),
                }),
                (0, F.jsx)(ui.V, {
                  default: 12,
                }),
                s
                  ? (0, F.jsx)(F.Fragment, {
                      children: l,
                    })
                  : (0, F.jsx)("div", {
                      className: bi,
                      children: (0, F.jsx)(ae.r, {
                        Element: c.SPALink,
                        typography: "label-3-regular",
                        onClick: u,
                        to: d,
                        children: t[Si],
                      }),
                    }),
              ],
            }),
            (0, F.jsx)(x.X, {
              default: 16,
            }),
            (0, F.jsx)(mi.k, {
              progress: Math.min((i / a) * 100, 100),
            }),
            s &&
              (0, F.jsxs)(F.Fragment, {
                children: [
                  (0, F.jsx)(x.X, {
                    default: 24,
                  }),
                  (0, F.jsx)(I.z, {
                    Element: c.SPALink,
                    to: d,
                    mode: "secondary",
                    size: "small",
                    stretched: true,
                    onClick: () => {
                      u();
                    },
                    children: t[Si],
                  }),
                ],
              }),
          ],
        });
      };
      ki.displayName =
        "components/VacancyResponseCounter/index/VacancyResponseCounter";
      const Ci = (0, C.x)(ki);
      var _i = s(336692);
      const wi = "resume.error";
      const Ni = "applicant.universityMapping.saveSuccess";
      const Ri = ({ trls: e }) =>
        (0, F.jsx)(F.Fragment, {
          children: e[wi],
        });
      Ri.displayName =
        "components/Notifications/ApplicantResumes/ResumeSaveError";
      const Ai = {
        Element: (0, C.x)(Ri),
        kind: _i.NotificationKind.Error,
      };
      const Ei = ({ trls: e }) =>
        (0, F.jsx)(F.Fragment, {
          children: e[Ni],
        });
      Ei.displayName =
        "components/Notifications/ApplicantResumes/ResumeSaveSuccess";
      const Li = {
        Element: (0, C.x)(Ei),
        kind: _i.NotificationKind.Ok,
      };
      var Pi = s(166122);
      const Ii = "resumeList.title";
      const Mi = ({ children: e }) =>
        (0, F.jsx)(u.J, {
          children: (0, F.jsx)(m.C, {
            xs: 4,
            s: 8,
            m: 8,
            l: 8,
            xl: 8,
            xxl: 8,
            children: e,
          }),
        });
      Mi.displayName =
        "ApplicantResumes/components/ApplicantResumesPage/FullRowBlock";
      const Ti = ({ trls: e }) => {
        const t = (0, c.usePush)();
        const s = (0, a.useDispatch)();
        const { isMobile: r } = (0, p.G)();
        const l = (0, w.v)((e) => {
          var t;
          return (
            (e == null || (t = e.applicantProfile) === null || t === undefined
              ? undefined
              : t.status) === "BLOCKED"
          );
        });
        const u = (0, _.r)();
        const m = (0, w.v)(A.F);
        const C = (0, w.v)(E.DJ);
        const I = (0, w.v)((e) => !!e.microFrontends.skillsVerificationCard);
        const M = (0, w.v)(P.PR);
        const T = (0, w.v)(P.Fn);
        const B = (0, w.v)(L.If);
        const D = m.sort((e, t) => e.updatedHuman - t.updatedHuman)[0];
        const H = C == null ? undefined : C.needVerifiedPhone;
        const U = C == null ? undefined : C.needResponseStreak;
        const V = (0, d.ZP)("hh_pro_cjm_resume_list_slider_b");
        const O = (0, d.ZP)("hh_pro_cjm_resume_list_slider_c");
        (0, n.useEffect)(() => {
          if (!R) {
            (0, N.BH)("exp_myresume_42520");
            R = true;
          }
        }, []);
        (() => {
          const e = (0, w.v)(({ router: e }) => e.location.search);
          const { addNotification: t, removeNotification: s } = (0, Pi.lm)();
          (0, n.useEffect)(() => {
            const { error: n, result: a } = (0, _n.j)(e).params;
            if (n && n != null && n.length && n[0] !== undefined) {
              t(Ai);
            }
            if (
              a &&
              a != null &&
              a.length &&
              a[0] === "university_mapping_saved"
            ) {
              t(Li);
            }
            return () => {
              s(Ai);
              s(Li);
            };
          }, [t, s, e]);
        })();
        return (0, F.jsx)(n.StrictMode, {
          children: (0, F.jsx)(y.Xg, {
            title: e[Ii],
            layout: v.P,
            sidebar: j.m,
            isResumeList: true,
            children: (0, F.jsxs)(h.z, {
              default: 16,
              gteS: 16,
              children: [
                (0, F.jsx)(Mi, {
                  children: (0, F.jsx)(S.X, {
                    place: "profileActivator",
                  }),
                }),
                H &&
                  !l &&
                  (0, F.jsx)(Mi, {
                    children: (0, F.jsx)(i.ElementShownAnchor, {
                      fn: o(),
                      children: (0, F.jsx)(b.Z, {
                        resumes: m,
                        isOnResumeListPage: true,
                        initialPhone: C.phone,
                      }),
                    }),
                  }),
                D &&
                  U &&
                  (0, F.jsx)(Mi, {
                    children: (0, F.jsx)(Ci, {
                      relatedVacanciesHash: D._attributes.hash,
                    }),
                  }),
                (0, F.jsxs)(Mi, {
                  children: [
                    !V && !O && (0, F.jsx)(Un, {}),
                    (V || (O && r)) && (0, F.jsx)($n, {}),
                  ],
                }),
                (0, F.jsx)(Mi, {
                  children: (0, F.jsx)(hn, {}),
                }),
                u &&
                  I &&
                  (0, F.jsx)(Mi, {
                    children: (0, F.jsx)(S.X, {
                      place: "skillsVerificationCard",
                    }),
                  }),
                r && (0, F.jsx)(f.Z, {}),
                (0, F.jsx)(q, {
                  isMobile: r,
                }),
                (0, F.jsx)(x.X, {
                  default: 16,
                  gteS: 0,
                }),
                T &&
                  (0, F.jsx)(ci, {
                    report: M,
                    results: T,
                  }),
                B &&
                  (0, F.jsx)(g.q, {
                    onClick: () => {
                      s((0, L.l2)(null));
                      t("applicant/resumes");
                    },
                  }),
                (0, F.jsx)(k.Y, {
                  hhtmFrom: "resume_list",
                }),
              ],
            }),
          }),
        });
      };
      Ti.displayName =
        "ApplicantResumes/components/ApplicantResumesPage/ApplicantResumesPage";
      const Bi = (0, C.x)(Ti);
      const Fi = () => (0, F.jsx)(Bi, {});
      Fi.displayName =
        "pages/ApplicantResumes/ApplicantResumes.route/ApplicantResumesRoute";
      const Di = Fi;
    },
  },
]); //# sourceMappingURL=ApplicantResumes-route.dd2e1ef98c4bd44d.js.map
//# debugId=d8c2bf7f-824c-4bdd-8fbc-e31b32870026
