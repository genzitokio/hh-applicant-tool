"use strict";

(globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__resume_profile_front_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["8490"],
  {
    86802: function (e, r, t) {
      t.r(r);
      t.d(r, {
        init: () => dt,
      });
      var n = t(21440);
      var o = t(70077);
      var i = t(55901);
      var s = t(48867);
      var a = t(69675);
      var l = t(9325);
      var d = t(89156);
      var c = t(82128);
      var u = t(48274);
      const h = (e) => e.snackbar;
      var p = t(83668);
      var m = t(9862);
      const f = {
        saved: "profile.resume.snackbar.saved",
        notSaved: "profile.resume.snackbar.not.saved",
        defaultError: "profile.resume.snackbar.defaultError",
        UNKNOWN: "profile.resume.api.errors.unknown",
        RESUME_NOT_FOUND: "profile.resume.api.errors.resume-not-found",
        ESIA_AUTH_RESULT: "profile.resume.api.errors.esiaAuthResult",
      };
      const v = ({ trls: e }) => {
        const r = (0, l.useDispatch)();
        const t = (0, s.v)(h);
        if (!t.opened) {
          return null;
        }
        const { snackbar: n } = t;
        return (0, m.jsx)(u.K, {
          onClose: () => r((0, p.IA)()),
          "aria-label": n.kind,
          autohideTime: 3000,
          role: n.kind,
          addon:
            n.kind === "alert"
              ? (0, m.jsx)(c.L1_, {
                  initialColor: "negative",
                })
              : (0, m.jsx)(c.lot, {
                  initialColor: "positive",
                }),
          children: "customText" in n ? n.customText : e[f[n.text]],
        });
      };
      v.displayName = "components/Snackbar/index/SnackbarManager";
      const g = (0, d.Z)(v);
      const y = ({ children: e }) => {
        const r = (0, s.v)((e) => e.langs[0] || "RU");
        return (0, m.jsxs)(a.f.Provider, {
          value: r,
          children: [e, (0, m.jsx)(g, {})],
        });
      };
      y.displayName = "components/MainProvider/index/MainProvider";
      var x = t(38682);
      const b = () =>
        (0, m.jsx)(x.N, {
          isBackofficeProxy: true,
        });
      b.displayName =
        "proxyComponents/BackofficeProfile/index/BackofficeProfile";
      var S = t(45144);
      var j = t(18566);
      var E = t(80647);
      var C = t(67772);
      var k = t(34322);
      var _ = t(29025);
      var N = t(34991);
      var A = t(65284);
      var M = t(33338);
      var R = t(63144);
      const L = "resume.creds.editor.question";
      const P = "resume.creds.editor.cancel";
      const w = "resume.creds.editor.approve";
      const I = ({ trls: e, onCancel: r }) => {
        const t = (0, l.useDispatch)();
        const n = (0, s.v)(C.Lw);
        return (0, m.jsx)(M.bZ, {
          visible: n,
          title: e[L],
          onClose: () => t((0, k.jL)(false)),
          layout: "vertical",
          iconStyle: "neutral",
          icon: (0, m.jsx)(c.yM4, {}),
          buttons: (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(R.z, {
                stretched: true,
                mode: "primary",
                style: "accent",
                onClick: () => {
                  t((0, k.jL)(false));
                  t((0, _.L)());
                },
                children: e[w],
              }),
              (0, m.jsx)(R.z, {
                stretched: true,
                mode: "secondary",
                style: "accent",
                onClick: () => {
                  r();
                  t((0, k.jL)(false));
                  t((0, k.ZU)(false));
                },
                children: e[P],
              }),
            ],
          }),
        });
      };
      I.displayName =
        "builder/CredsEditor/CredsEditorCloseConfirm/CredsEditorCloseConfirm";
      const T = (0, d.Z)(I);
      var O = t(61384);
      var V = t(47997);
      var D = t(31537);
      var B = t(31065);
      var U = t(33458);
      var Z = t(79756);
      var q = t(85489);
      const F = "resume.creds.editor.save";
      const H = ({
        trls: e,
        children: r,
        title: t,
        saving: n,
        visible: o,
        onClose: i,
        onSave: s,
      }) => {
        const { isMobile: a } = (0, O.G)();
        if (a) {
          return (0, m.jsx)(V.R, {
            header: (0, m.jsx)(D.v, {
              title: t,
              right: (0, m.jsx)(c.Cs7, {
                onClick: i,
              }),
              size: "large",
              showDivider: "always",
            }),
            visible: o,
            onClose: i,
            showDivider: "with-scroll",
            footer: (0, m.jsx)(B.W, {
              children: (0, m.jsx)(R.z, {
                mode: "primary",
                style: "accent",
                size: "medium",
                onClick: s,
                stretched: true,
                "data-qa": "resume-modal-button-save",
                loading: n,
                children: e[F],
              }),
            }),
            children: r,
          });
        } else {
          return (0, m.jsx)(U.u, {
            size: "medium",
            title: t,
            visible: o,
            onClose: i,
            titleSize: "large",
            closeByClickOutside: false,
            actions: (0, m.jsx)(Z.a, {
              style: "neutral",
              mode: "secondary",
              icon: c.Cs7,
              onClick: i,
            }),
            footer: (0, m.jsx)(q.o, {
              primaryActions: (0, m.jsx)(R.z, {
                mode: "primary",
                style: "accent",
                size: "medium",
                stretched: false,
                onClick: s,
                loading: n,
                children: e[F],
              }),
            }),
            children: r,
          });
        }
      };
      H.displayName = "builder/CredsEditor/CredsEditorModal/CredsEditorModal";
      const z = (0, d.Z)(H);
      const $ = "rpf-creds-edit-open";
      const G = "resume.creds.editor.title";
      const W = ({ trls: e }) => {
        const r = (0, l.useDispatch)();
        const [t, n] = (0, S.useState)({});
        const o = (0, s.v)(C.sA);
        const i = (0, s.v)(C.zM);
        const a = (0, s.v)(C.Zu);
        const d = (0, s.v)(C.HN);
        (0, S.useEffect)(() => {
          if (a && (0, A.xb)(t)) {
            n(i);
          }
          if (!a && !(0, A.xb)(t)) {
            n({});
          }
        }, [a, t, i]);
        (0, S.useEffect)(() => {
          const e = () => {
            r((0, k.ZU)(true));
          };
          window.addEventListener($, e);
          return () => {
            window.removeEventListener($, e);
          };
        }, [r]);
        if (o) {
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(z, {
                title: e[G],
                visible: a,
                saving: d,
                onClose: () => {
                  if ((0, N.V)(t, i)) {
                    r((0, k.ZU)(false));
                  } else {
                    r((0, k.jL)(true));
                  }
                },
                onSave: () => {
                  r((0, _.L)());
                },
                children: (0, m.jsx)(j.z, {
                  default: 24,
                  children: Object.keys(o.questions).map((e) =>
                    (0, m.jsx)(
                      E.g,
                      {
                        questionId: e,
                      },
                      e,
                    ),
                  ),
                }),
              }),
              (0, m.jsx)(T, {
                onCancel: () => {
                  r((0, k.hv)(t));
                },
              }),
            ],
          });
        } else {
          return null;
        }
      };
      W.displayName = "builder/CredsEditor/index/CredsEditor";
      const K = (0, d.Z)(W);
      const X = () => (0, m.jsx)(K, {});
      X.displayName = "proxyComponents/CredsEditor/index/CredsEditorProxy";
      var J = t(20957);
      var Y = t(59706);
      var Q = t(69502);
      var ee = t(71243);
      var re = t(48799);
      const te = ({ value: e, onChange: r, error: t, maxLength: n }) => {
        const o = (0, re.X3)();
        (0, S.useEffect)(() => {
          o({
            error: t,
          });
        }, [o, t]);
        const i = () => {
          o({
            error: undefined,
          });
        };
        return (0, m.jsx)(Y.l0, {
          onSubmit: () => {},
          validateOnBlur: true,
          initialValues: {
            phone: e ?? ee.S,
          },
          render: (e) => {
            var t;
            return (0, m.jsx)(Q.H, {
              phone:
                e == null || (t = e.values) === null || t === undefined
                  ? undefined
                  : t.phone,
              onChange: (e) => {
                r({
                  ...ee.S,
                  formatted: e,
                });
              },
              onSuccessVerified: i,
              maxLength: n,
            });
          },
        });
      };
      te.displayName =
        "proxyComponents/PhoneVerificationInput/PhoneField/PhoneField";
      const ne = (0, d.Z)(te);
      const oe = new (class {
        status = "close";
        isReady() {
          return this.status === "ready";
        }
        send(e) {
          if (this.isReady() && typeof window != "undefined") {
            window.dispatchEvent(
              new CustomEvent("rpf-phone-verification-events", {
                detail: e,
              }),
            );
          }
        }
        subscribe(e) {
          const r = ({ detail: r }) => {
            e(r);
          };
          if (typeof window != "undefined") {
            window.addEventListener("xhh-phone-verification-events", r);
          }
          this.status = "ready";
          this.send({
            type: "ready",
          });
          return r;
        }
        unsubscribe(e) {
          this.send({
            type: "destroy",
          });
          this.status = "close";
          if (typeof window != "undefined") {
            window.removeEventListener("xhh-phone-verification-events", e);
          }
        }
      })();
      const ie = {
        REQUIRED: "profile.resume.field.phone.error.required",
        BLACKLISTED: "profile.resume.field.phone.error.blacklisted",
        NOT_VERIFIED: "profile.resume.field.phone.error.phone_verification",
        SIZE_LESS_THAN_MINIMUM: "profile.resume.field.phone.error.required",
        NEED_COUNTRY_CITY_NUMBER_OR_FORMATTED:
          "profile.resume.field.phone.error.required",
      };
      const se = () => {
        const {
          error: e,
          phone: r,
          change: t,
        } = (() => {
          const [e, r] = (0, S.useState)(undefined);
          const [t, n] = (0, S.useState)(undefined);
          const o = (0, S.useCallback)(
            (e) => {
              n(e);
              r(undefined);
              oe.send({
                type: "changed",
                payload: e,
              });
            },
            [n, r],
          );
          (0, S.useEffect)(() => {
            const e = oe.subscribe((e) => {
              if (e.type === "init") {
                n(e.payload);
              }
              if (e.type === "error") {
                r(e.payload);
              }
            });
            return () => {
              oe.unsubscribe(e);
            };
          }, [n, r]);
          return (0, S.useMemo)(
            () => ({
              error: e,
              phone: t,
              change: o,
            }),
            [e, t, o],
          );
        })();
        return (0, m.jsx)(ne, {
          value: r,
          onChange: t,
          error: e
            ? () =>
                (0, m.jsx)(J.cp, {
                  error: e,
                  customTrls: ie,
                })
            : undefined,
        });
      };
      se.displayName =
        "proxyComponents/PhoneVerificationInput/index/PhoneVerificationInput";
      var ae = t(24488);
      var le = t(38697);
      var de = t.n(le);
      var ce = t(36047);
      var ue = t(2840);
      var he = t(50109);
      var pe = t(65007);
      var me = t(30577);
      var fe = t(55709);
      var ve = t(49314);
      var ge = t(66802);
      var ye = t(68966);
      var xe = t(95672);
      const be = "profile.resume.activator.status.label";
      const Se = {
        [xe.Lx.Unknown]: "profile.activator.jobSearchStatus.current.unknown",
        [xe.Lx.ActiveSearch]: "profile.jobSearchStatus.current.active_search",
        [xe.Lx.LookingForOffers]:
          "profile.jobSearchStatus.current.looking_for_offers",
        [xe.Lx.HasJobOffer]: "profile.jobSearchStatus.current.has_job_offer",
        [xe.Lx.AcceptedJobOffer]:
          "profile.jobSearchStatus.current.accepted_job_offer",
        [xe.Lx.NotLookingForJob]:
          "profile.jobSearchStatus.current.not_looking_for_job",
      };
      const je = (e) =>
        e === xe.Lx.Unknown
          ? "secondary"
          : e === xe.Lx.NotLookingForJob
            ? "warning"
            : "positive";
      const Ee = ({ trls: e }) => {
        const { isMobile: r } = (0, O.G)();
        const t = (0, s.v)(ye.fn);
        return (0, m.jsxs)(ge.x, {
          Element: "span",
          typography: "label-3-regular",
          style: je(t),
          children: [
            !r &&
              (0, m.jsx)(ge.x, {
                Element: "span",
                typography: "label-3-regular",
                style: "secondary",
                children: `${e[be]} `,
              }),
            e[Se[t]],
          ],
        });
      };
      Ee.displayName =
        "JobSearchStatus/StatusBadge/ActivatorStatusBadge/ActivatorStatusBadge";
      const Ce = (0, d.Z)(Ee);
      var ke = t(32984);
      var _e = t(61263);
      var Ne = t(30329);
      const Ae = (0, Ne.autoGeneratedReducer)({
        phone: {
          ...ee.S,
          needVerification: false,
        },
        gender: "unknown",
        lastName: "",
        photoUrls: {},
        firstName: "",
        middleName: "",
      });
      const Me = ({ profileActivator: e }) => {
        var r;
        var t;
        const o =
          (e == null || (r = e.phone) === null || r === undefined
            ? undefined
            : r.formatted) || "";
        const i =
          (e == null || (t = e.phone) === null || t === undefined
            ? undefined
            : t.needVerification) || false;
        return {
          image: e.photoUrls?.big,
          phone: {
            value: o,
            needVerification: o !== "" && i,
          },
          gender: e.gender,
          lastName: e.lastName,
          firstName: e.firstName,
          middleName: e.middleName,
        };
      };
      var Re = t(49837);
      var Le = t(30527);
      var Pe = t(75790);
      const we = (0, Ne.autoGeneratedReducer)({
        moderationUrl: "",
      });
      const Ie = ({ profileModeration: e }) => e.moderationUrl || "";
      const Te = "profile.resume.blocked.card.title";
      const Oe = "profile.resume.blocked.card.button";
      const Ve = "profile.resume.blocked.card.description";
      const De = ({ trls: e, isMobile: r = false }) => {
        const t = (0, ce.usePush)();
        const n = (0, s.v)(Ie);
        const o = r ? 16 : 12;
        const i = () => t(n);
        if (r) {
          return (0, m.jsxs)(he.Z, {
            stretched: true,
            paddingRight: 12,
            paddingLeft: 12,
            paddingBottom: 12,
            borderRadius: 24,
            children: [
              (0, m.jsx)(Pe.X, {
                default: 8,
              }),
              (0, m.jsx)(he.Z, {
                style: "negative-secondary",
                stretched: true,
                borderRadius: o,
                children: (0, m.jsxs)(pe.b, {
                  align: "top",
                  right: (0, m.jsx)(c.i8i, {}),
                  vertPadding: true,
                  horPadding: true,
                  borderRadius: 12,
                  children: [
                    (0, m.jsx)(me.j, {
                      type: "title",
                      children: e[Te],
                    }),
                    (0, m.jsx)(me.j, {
                      type: "subtitle",
                      children: e[Ve],
                    }),
                  ],
                }),
              }),
              (0, m.jsx)(Pe.X, {
                default: 24,
              }),
              (0, m.jsx)(R.z, {
                stretched: true,
                mode: "primary",
                style: "accent",
                size: "small",
                onClick: i,
                children: e[Oe],
              }),
            ],
          });
        } else {
          return (0, m.jsxs)(he.Z, {
            stretched: true,
            paddingRight: 12,
            paddingLeft: 12,
            paddingBottom: 12,
            borderRadius: 24,
            children: [
              (0, m.jsx)(Pe.X, {
                default: 8,
              }),
              (0, m.jsx)(he.Z, {
                padding: 16,
                style: "negative-secondary",
                stretched: true,
                borderRadius: o,
                children: (0, m.jsxs)(pe.b, {
                  left: (0, m.jsx)(c.i8i, {}),
                  right: (0, m.jsx)(R.z, {
                    mode: "primary",
                    style: "accent",
                    size: "small",
                    onClick: i,
                    children: e[Oe],
                  }),
                  borderRadius: 12,
                  children: [
                    (0, m.jsx)(me.j, {
                      type: "title",
                      children: e[Te],
                    }),
                    (0, m.jsx)(me.j, {
                      type: "subtitle",
                      children: e[Ve],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      };
      De.displayName =
        "profile/ProfileActivator/ProfileBlockedCard/ProfileBlockedCard";
      const Be = (0, d.Z)(De);
      const Ue = "phone--Omrlvl4MVNXjM7QN";
      const Ze = "divider--JuQMebW8R_QXhbl2";
      const qe = "name-with-icon--lGhlE7gPPgwSitBk";
      const Fe = "esia-icon--RBDK9BQNraMHfr9C";
      const He = "profile.resume.activator.phone.empty";
      const ze = ({ trls: e }) => {
        const r = (0, ce.usePush)();
        const t = (0, Le.R)();
        const { isMobile: n } = (0, O.G)();
        const {
          lastName: o,
          firstName: i,
          gender: a,
          image: l,
          phone: d,
        } = (0, s.v)(Me);
        const u = (0, s.v)(_e.Z8);
        return (0, m.jsxs)(he.Z, {
          borderWidth: "default",
          stretched: true,
          borderRadius: 24,
          children: [
            (0, m.jsx)(he.Z, {
              stretched: true,
              paddingRight: 8,
              paddingLeft: 8,
              paddingTop: 8,
              borderRadius: 24,
              children: (0, m.jsxs)(pe.b, {
                slot: (0, m.jsx)(ve.S, {
                  size: 48,
                  image: l,
                  gender: a,
                  letters: (0, ve.k)(o, i),
                }),
                right: (0, m.jsx)(c.a2Q, {}),
                "data-qa": "profile-activator",
                onClick: () => {
                  (0, Re.e)({
                    hhtmSource: "resume_list",
                    buttonName: "profile_entry_point",
                  });
                  r("/profile/me");
                },
                disabled: t,
                vertPadding: true,
                horPadding: true,
                borderRadius: 12,
                children: [
                  (0, m.jsxs)("div", {
                    className: qe,
                    children: [
                      (0, m.jsx)(me.j, {
                        type: "title",
                        maxLines: 1,
                        "data-qa": "profile-activator-fullname",
                        children: `${i} ${o}`,
                      }),
                      u &&
                        (0, m.jsx)("div", {
                          className: Fe,
                          children: (0, m.jsx)(fe.U__, {}),
                        }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: Ue,
                    children: [
                      (0, m.jsx)(me.j, {
                        typography: "label-3-regular",
                        style: "secondary",
                        children: d.value === "" ? e[He] : d.value,
                      }),
                      d.needVerification &&
                        (0, m.jsx)(ae.ElementShownAnchor, {
                          fn: de(),
                          hhtmSource: "resume_list",
                          children: (0, m.jsx)(c.zmx, {
                            initialColor: "warning",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            t
              ? (0, m.jsx)(Be, {
                  isMobile: n,
                })
              : (0, m.jsxs)(he.Z, {
                  stretched: true,
                  paddingRight: 8,
                  paddingLeft: 8,
                  paddingBottom: 8,
                  borderRadius: 24,
                  children: [
                    (0, m.jsx)("div", {
                      className: Ze,
                      children: (0, m.jsx)(ue.i, {}),
                    }),
                    (0, m.jsx)(ke.l, {
                      renderTrigger: (e) =>
                        (0, m.jsx)(pe.b, {
                          right: (0, m.jsx)(c.ql, {}),
                          onClick: e,
                          vertPadding: true,
                          horPadding: true,
                          borderRadius: 12,
                          children: (0, m.jsx)(Ce, {}),
                        }),
                    }),
                  ],
                }),
          ],
        });
      };
      ze.displayName = "profile/ProfileActivator/index/ProfileActivator";
      const $e = (0, d.Z)(ze);
      const Ge = () => (0, m.jsx)($e, {});
      Ge.displayName =
        "proxyComponents/ProfileActivator/index/ProfileActivatorProxy";
      let We = (function (e) {
        e.Resume = "resume";
        e.Generic = "generic";
        return e;
      })({});
      const Ke = {
        [We.Generic]: "profile.resume.proxy.error.generic",
        [We.Resume]: "profile.resume.proxy.error.resume",
      };
      const Xe = ({ trls: e }) => {
        const r = (0, s.v)(({ proxyComponentErrorType: e }) => e);
        return (0, m.jsx)(m.Fragment, {
          children: e[Ke[r || We.Generic]],
        });
      };
      Xe.displayName =
        "proxyComponents/ProxyComponentError/index/ProxyComponentError";
      const Je = (0, d.Z)(Xe);
      var Ye = t(56351);
      const Qe = {
        update: (e) =>
          n.Z.post("/profile/shards/skills_levels/update", e).then(() => true),
      };
      const er = (e) => {
        return e.scheme?.skillsWithLevels ?? [];
      };
      const rr = (e) => {
        var r;
        if (
          (r = e.scheme) === null ||
          r === undefined ||
          (r = r.resume) === null ||
          r === undefined
        ) {
          return undefined;
        } else {
          return r.keySkills.map((e) => e.string);
        }
      };
      const tr = "actions--TiyfUlsrBGcMJpAZ";
      const nr = "profile.resume.keysSkillsEditor.save";
      const or = "profile.resume.keysSkillsEditor.back";
      const ir = "profile.resume.keysSkillsEditor.saveChangedNotification";
      const sr = ({ trls: e }) => {
        const r = (0, S.useRef)(null);
        const t = (0, s.v)(er);
        const n = (0, s.v)(rr);
        const o = (0, l.useDispatch)();
        const i = () => {
          const e = new URL(window.location.href);
          const r = e.searchParams.get("resume");
          window.location.href = r
            ? `${e.origin}/resume/${r}`
            : `${e.origin}/applicant/resumes`;
        };
        const a = (0, S.useCallback)(
          async (r) => {
            if (r.length !== 0) {
              await Qe.update({
                userSkillLevels: r,
              });
              o(
                (0, p.OV)({
                  kind: "status",
                  customText: e[ir],
                }),
              );
              i();
            } else {
              i();
            }
          },
          [o, e],
        );
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(Ye.j, {
              ref: r,
              skillWithLevels: t,
              resumeSkillsNames: n,
              onUpdateSkillsLevels: a,
            }),
            (0, m.jsxs)("div", {
              className: tr,
              children: [
                (0, m.jsx)(R.z, {
                  mode: "secondary",
                  onClick: () => {
                    history.back();
                  },
                  children: e[or],
                }),
                (0, m.jsx)(R.z, {
                  mode: "primary",
                  onClick: () => {
                    var e;
                    if ((e = r.current) !== null && e !== undefined) {
                      e.requestUpdateSkillsLevels();
                    }
                  },
                  children: e[nr],
                }),
              ],
            }),
          ],
        });
      };
      sr.displayName =
        "proxyComponents/SkillsLevelsEditor/index/SkillsLevelsEditorProxy";
      const ar = (0, d.Z)(sr);
      var lr = t(70406);
      const dr = () => (0, m.jsx)(lr.e, {});
      dr.displayName =
        "proxyComponents/SkillsVerificationCard/index/SkillsVerificationCard";
      var cr = (function (e) {
        e.CredsEditor = "CredsEditor";
        e.BackofficeProfile = "BackofficeProfile";
        e.ProfileActivator = "ProfileActivator";
        e.SkillsLevelsEditor = "SkillsLevelsEditor";
        e.ProxyComponentError = "ProxyComponentError";
        e.PhoneVerificationInput = "PhoneVerificationInput";
        e.SkillsVerificationCard = "SkillsVerificationCard";
        return e;
      })(cr || {});
      const ur = {
        [cr.CredsEditor]: X,
        [cr.BackofficeProfile]: b,
        [cr.ProfileActivator]: Ge,
        [cr.SkillsLevelsEditor]: ar,
        [cr.ProxyComponentError]: Je,
        [cr.SkillsVerificationCard]: dr,
        [cr.PhoneVerificationInput]: se,
      };
      const hr = () => {
        const e = (0, s.v)(({ request: e }) => e.pageName);
        if (((e) => e in ur)(e)) {
          const r = ur[e];
          return (0, m.jsx)(y, {
            children: (0, m.jsx)(r, {}),
          });
        }
        return null;
      };
      hr.displayName = "src/proxyComponents/index/ProxyComponents";
      var pr = t(70138);
      var mr = t(12748);
      var fr = t(75515);
      var vr = t(30226);
      var gr = t(5874);
      var yr = t(20611);
      var xr = t(45945);
      var br = t(2636);
      var Sr = t(13939);
      var jr = t(83155);
      var Er = t(60107);
      var Cr = t(426);
      var kr = t(21614);
      var _r = t(29209);
      var Nr = t(79488);
      var Ar = t(91347);
      var Mr = t(72015);
      var Rr = t(58080);
      var Lr = t(82846);
      var Pr = t(54441);
      var wr = t(66582);
      var Ir = t(99021);
      var Tr = t(55907);
      var Or = t(59812);
      var Vr = t(96334);
      var Dr = t(53215);
      var Br = t(16074);
      var Ur = t(88773);
      var Zr = t(44608);
      var qr = t(61500);
      var Fr = t(74082);
      var Hr = t(36801);
      const zr = [
        {
          path: "/profile/me/",
          component: pr.E,
        },
        {
          path: ["/profile/edit/creds"],
          component: vr.z,
        },
        {
          path: ["/profile/edit/common"],
          component: fr.q,
        },
        {
          path: ["/profile/edit/vehicle"],
          component: br.V,
        },
        {
          path: ["/profile/edit/address"],
          component: mr.i,
        },
        {
          path: ["/profile/edit/preferredWorkAreas"],
          component: yr.D,
        },
        {
          path: [
            "/profile/edit/primaryEducation",
            "/profile/edit/primaryEducation/:index",
          ],
          component: xr.P,
        },
        {
          path: [
            "/profile/edit/elementaryEducation",
            "/profile/edit/elementaryEducation/:index",
          ],
          component: gr.x,
        },
        {
          path: ["/profile/block/search_preferences"],
          component: Er.s,
        },
        {
          path: ["/profile/block/languages"],
          component: jr.u,
        },
        {
          path: ["/profile/block/educations"],
          component: Sr.m,
        },
        {
          path: [
            "/profile/resume/professional_role",
            "/profile/onboarding/professional_role",
          ],
          component: Zr.e,
        },
        {
          path: [
            "/profile/resume/edit_title",
            "/profile/onboarding/edit_title",
          ],
          component: Lr.Y,
        },
        {
          path: ["/profile/resume/title", "/profile/onboarding/title"],
          component: Hr.a,
        },
        {
          path: ["/profile/resume/common", "/profile/onboarding/common"],
          component: _r._,
        },
        {
          path: [
            "/profile/resume/common_short",
            "/profile/onboarding/common_short",
          ],
          component: Nr.$,
        },
        {
          path: [
            "/profile/resume/education_level",
            "/profile/onboarding/education_level",
          ],
          component: wr.s,
        },
        {
          path: ["/profile/resume/education", "/profile/onboarding/education"],
          component: Pr.S,
        },
        {
          path: [
            "/profile/resume/educations",
            "/profile/onboarding/educations",
          ],
          component: Ir.H,
        },
        {
          path: [
            "/profile/resume/attestation_education",
            "/profile/onboarding/attestation_education",
          ],
          component: kr.v,
        },
        {
          path: [
            "/profile/resume/additional_education",
            "/profile/onboarding/additional_education",
          ],
          component: Cr.R,
        },
        {
          path: [
            "/profile/resume/elementary_education",
            "/profile/onboarding/elementary_education",
          ],
          component: Tr.J,
        },
        {
          path: [
            "/profile/resume/experience",
            "/profile/onboarding/experience",
          ],
          component: Or.W,
        },
        {
          path: ["/profile/resume/keyskills", "/profile/onboarding/keyskills"],
          component: Dr.E,
        },
        {
          path: [
            "/profile/resume/correction_skills",
            "/profile/onboarding/correction_skills",
          ],
          component: Ar.l,
        },
        {
          path: ["/profile/resume/skills", "/profile/onboarding/skills"],
          component: Fr.U,
        },
        {
          path: [
            "/profile/resume/recommendation",
            "/profile/onboarding/recommendation",
          ],
          component: qr.E,
        },
        {
          path: [
            "/profile/resume/preferred_work_areas",
            "/profile/onboarding/preferred_work_areas",
          ],
          component: Ur.T,
        },
        {
          path: [
            "/profile/resume/dynamic_screen",
            "/profile/onboarding/dynamic_screen",
          ],
          component: Rr.k,
        },
        {
          path: [
            "/profile/onboarding/experience_in_professional_role",
            "/profile/resume/experience_in_professional_role",
          ],
          component: Vr.Y,
        },
        {
          path: [
            "/profile/onboarding/driving_information",
            "/profile/resume/driving_information",
          ],
          component: Mr.v,
        },
        {
          path: [
            "/profile/resume/photo_upload",
            "/profile/onboarding/photo_upload",
          ],
          component: Br.w,
        },
      ];
      var $r = t(44008);
      var Gr = t(1046);
      var Wr = t(35527);
      var Kr = t(69931);
      var Xr = t(83064);
      var Jr = t(26945);
      var Yr = t(82371);
      var Qr = t(90893);
      var et = t(56585);
      var rt = t(1574);
      const tt = (0, Ne.autoGeneratedReducer)(null);
      var nt = t(78209);
      var ot = t(85501);
      var it = t(33089);
      var st = t(9223);
      var at = t(68390);
      const lt = {
        phoneStore: re.HT,
        scheme: ot.fo,
        builder: k.QC,
        fromErrors: Xr.FU,
        experiments: Gr._1,
        dictionaries: Kr.m9,
        userId: (0, Ne.autoGeneratedReducer)(""),
        userType: (0, Ne.autoGeneratedReducer)(at.b.ANONYMOUS),
        isWebView: (0, Ne.autoGeneratedReducer)(false),
        isModalView: (0, Ne.autoGeneratedReducer)(false),
        layout: (0, Ne.autoGeneratedReducer)("resume"),
        entryPoint: (0, Ne.autoGeneratedReducer)(null),
        analyticsEntryPoint: (0, Ne.autoGeneratedReducer)("other"),
        vacancy: (0, Ne.autoGeneratedReducer)(null),
        fetchingData: (0, Ne.autoGeneratedReducer)(false),
        popularPositions: (0, Ne.autoGeneratedReducer)([]),
        topLevelSite: st.B,
        resumeInfo: tt,
        proxyComponentErrorType: (0, Ne.autoGeneratedReducer)(null),
        hhcaptcha: (0, Ne.autoGeneratedReducer)({
          isBot: false,
          captchaState: null,
          captchaError: false,
          captchaKey: null,
        }),
        recaptcha: (0, Ne.autoGeneratedReducer)({
          isBot: false,
          siteKey: null,
          captchaState: null,
          captchaError: false,
        }),
        otp: (0, Ne.autoGeneratedReducer)({}),
        captchaText: (0, Ne.autoGeneratedReducer)(""),
        counters: et.M,
        infoTip: (0, Ne.autoGeneratedReducer)({}),
        backurl: (0, Ne.autoGeneratedReducer)(null),
        snackbar: p.Uy,
        skills: it.J,
        djBackRedirect: (0, Ne.autoGeneratedReducer)(null),
        profile: Qr.Cn,
        profileEditor: Yr.p_,
        profileActivator: Ae,
        profileModeration: we,
        profileResumes: (0, Ne.autoGeneratedReducer)([]),
        jobSearchStatus: Jr.NI,
        account: Wr.vC,
        resumeFromHash: (0, Ne.autoGeneratedReducer)(null),
        resumeArtifacts: rt.rZ,
        resumeUpload: nt.r3,
        isResumeParsingExp: (0, Ne.autoGeneratedReducer)(false),
      };
      n.Z.interceptors.request.use(o.t);
      const dt = () =>
        (0, i.ZP)({
          serviceName: $r.R,
          proxyComponents: hr,
          reducer: lt,
          routes: zr,
          pageWrapper: y,
          rtkDefaultMiddlewaresOptions: {
            immutableCheck: {
              ignoredPaths: ["dictionaries"],
            },
          },
        });
    },
    20874: function (e, r, t) {
      t.r(r);
      t.d(r, {
        default: () => s,
      });
      var n = t(36676);
      var o = t(44008);
      (0, n.Z)(o.R);
      const { init: i } = t(86802);
      const s = i;
    },
    44008: function (e, r, t) {
      t.d(r, {
        R: () => n,
      });
      const n = "resume-profile-front";
    },
    27976: function (e, r, t) {
      t.d(r, {
        F: () => i,
      });
      const n = "content--gz4Y_wfRUVQvlsUq";
      var o = t(9862);
      const i = ({ children: e }) =>
        (0, o.jsx)("div", {
          className: n,
          children: e,
        });
      i.displayName = "components/CenteredContainer/index/CenteredContainer";
    },
    22661: function (e, r, t) {
      t.d(r, {
        U: () => g,
      });
      var n = t(89156);
      var o = t(61384);
      var i = t(47997);
      var s = t(31065);
      var a = t(63144);
      var l = t(33458);
      var d = t(85489);
      var c = t(82128);
      var u = t(58260);
      var h = t(9862);
      const p = "profile.resume.editor.save";
      const m = "profile.resume.editor.cancel";
      const f = "profile.resume.editor.delete";
      const v = ({
        children: e,
        trls: r,
        title: t,
        titleDescription: n,
        visible: v,
        onClose: g,
        onCancel: y,
        onSave: x,
        onDelete: b,
        loading: S,
        disableSave: j = false,
        hasCancelBtn: E = false,
        bottomSheetHeight: C,
        modalSize: k = "medium",
        saveText: _,
        cancelText: N,
        onHeaderDelete: A,
        keyboardOverlaysFooter: M = false,
        interceptTouchHandlers: R = true,
        stretchedModalButton: L = false,
        "data-qa": P,
      }) => {
        const { isMobile: w } = (0, o.G)();
        const I = Boolean(x || b);
        const T = [
          (0, h.jsx)(
            c.Cs7,
            {
              initialColor: "secondary",
              onClick: g,
              padding: 8,
            },
            "close",
          ),
        ];
        if (A) {
          T.unshift(
            (0, h.jsx)(
              c.q6q,
              {
                initialColor: "negative",
                onClick: A,
                padding: 8,
              },
              "delete",
            ),
          );
        }
        if (w) {
          return (0, h.jsx)(i.R, {
            interceptTouchHandlers: R,
            allowScrollWhileFocused: true,
            keyboardOverlaysFooter: M,
            header: (0, h.jsx)(u.z, {
              right: T,
              title: t,
              description: n,
            }),
            visible: v,
            onClose: g,
            showDivider: "with-scroll",
            height: C,
            interceptClickHandlers: false,
            "data-qa": P,
            footer: I
              ? (0, h.jsxs)(s.W, {
                  children: [
                    (0, h.jsx)(a.z, {
                      disabled: j,
                      mode: "primary",
                      style: "accent",
                      size: "large",
                      onClick: x,
                      loading: S,
                      stretched: true,
                      "data-qa": "profile-modal-button-save",
                      children: _ ?? r[p],
                    }),
                    b
                      ? (0, h.jsx)(a.z, {
                          mode: "secondary",
                          style: "negative",
                          size: "large",
                          onClick: b,
                          stretched: false,
                          disabled: S,
                          "data-qa": "profile-modal-button-delete",
                          children: r[f],
                        })
                      : undefined,
                  ],
                })
              : undefined,
            children: e,
          });
        } else {
          return (0, h.jsx)(l.u, {
            size: k,
            title: t,
            titleDescription: n,
            titleDescriptionStyle: "secondary",
            visible: v,
            onClose: g,
            titleSize: "large",
            titleMaxLines: 1,
            actions: T,
            "data-qa": P,
            footer: I
              ? (0, h.jsx)(d.o, {
                  type: L ? "vertical" : "auto",
                  primaryActions: (0, h.jsx)(h.Fragment, {
                    children:
                      x &&
                      (0, h.jsx)(a.z, {
                        mode: "primary",
                        style: "accent",
                        stretched: L,
                        onClick: x,
                        loading: S,
                        disabled: j,
                        children: _ ?? r[p],
                      }),
                  }),
                  secondaryActions: (0, h.jsxs)(h.Fragment, {
                    children: [
                      E &&
                        (0, h.jsx)(a.z, {
                          mode: "tertiary",
                          style: "accent",
                          onClick: y ?? g,
                          stretched: false,
                          disabled: S,
                          children: N ?? r[m],
                        }),
                      b &&
                        (0, h.jsx)(a.z, {
                          mode: "secondary",
                          style: "negative",
                          onClick: b,
                          stretched: false,
                          disabled: S,
                          children: r[f],
                        }),
                    ],
                  }),
                })
              : undefined,
            children: e,
          });
        }
      };
      v.displayName = "components/ComboModal/index/ComboModal";
      const g = (0, n.Z)(v);
    },
    58260: function (e, r, t) {
      t.d(r, {
        z: () => u,
      });
      var n = t(97584);
      var o = t(4366);
      var i = t(98359);
      var s = t(30955);
      var a = t(49429);
      var l = t(66802);
      var d = t(75790);
      var c = t(9862);
      const u = ({
        left: e,
        right: r,
        title: t,
        size: u = "standard",
        padding: h = true,
        showDivider: p,
        description: m,
        "data-qa": f,
      }) =>
        u === "large"
          ? (0, c.jsxs)(n.N, {
              showDivider: p,
              "data-qa": f,
              children: [
                (0, c.jsxs)(o.h, {
                  children: [
                    (0, c.jsx)(i.w9, {
                      children: (0, c.jsx)(s.e, {
                        left: e || (0, c.jsx)(c.Fragment, {}),
                        right: r || (0, c.jsx)(c.Fragment, {}),
                        centered: true,
                      }),
                    }),
                    (0, c.jsx)(i.w9, {
                      children: (0, c.jsx)(s.e, {
                        left: e || (0, c.jsx)(c.Fragment, {}),
                        right: r || (0, c.jsx)(c.Fragment, {}),
                        centered: true,
                        children:
                          (t || m) &&
                          (0, c.jsx)(a.c, {
                            centered: true,
                            title: (0, c.jsx)(l.x, {
                              typography: "title-5-semibold",
                              children: t,
                            }),
                            subtitle:
                              m &&
                              (0, c.jsx)(l.x, {
                                typography: "label-4-regular",
                                style: "secondary",
                                children: m,
                              }),
                          }),
                      }),
                    }),
                  ],
                }),
                (0, c.jsx)(o.h, {
                  foldable: true,
                  children:
                    (t || m) &&
                    (0, c.jsx)(a.c, {
                      title: (0, c.jsx)(l.x, {
                        typography: "title-4-semibold",
                        children: t,
                      }),
                      subtitle:
                        m &&
                        (0, c.jsx)(l.x, {
                          typography: "label-4-regular",
                          style: "secondary",
                          children: m,
                        }),
                    }),
                }),
              ],
            })
          : (0, c.jsx)(n.N, {
              showDivider: p,
              "data-qa": f,
              children: (0, c.jsxs)(o.h, {
                children: [
                  (0, c.jsx)(s.e, {
                    left: e || (0, c.jsx)(c.Fragment, {}),
                    right: r || (0, c.jsx)(c.Fragment, {}),
                    centered: true,
                    children:
                      t || m
                        ? (0, c.jsx)(a.c, {
                            centered: true,
                            title: (0, c.jsx)(l.x, {
                              typography: "title-5-semibold",
                              children: t,
                            }),
                            subtitle:
                              m &&
                              (0, c.jsx)(l.x, {
                                typography: "label-4-regular",
                                style: "secondary",
                                children: m,
                              }),
                          })
                        : null,
                  }),
                  h &&
                    (0, c.jsx)(d.X, {
                      default: 8,
                    }),
                ],
              }),
            });
      u.displayName = "components/ProfileNavBar/index/ProfileNavBar";
    },
    80647: function (e, r, t) {
      t.d(r, {
        g: () => D,
      });
      var n = t(45144);
      var o = t(7389);
      var i = t(20957);
      var s = t(9325);
      var a = t(48867);
      var l = t(34322);
      let d = (function (e) {
        e.SingleChoice = "single_choice";
        e.MultiSelect = "multi_select";
        return e;
      })({});
      const c = [];
      var u = t(79987);
      var h = t(4233);
      var p = t(66802);
      var m = t(27976);
      var f = t(9862);
      const v = ({
        text: e,
        checked: r,
        dataQa: t,
        onChange: n,
        maxLines: o,
      }) =>
        (0, f.jsx)(h.g, {
          flexible: true,
          borderRadius: 12,
          padding: 16,
          "data-qa": t,
          checked: r,
          onChange: n,
          type: "checkbox",
          children: (0, f.jsx)(m.F, {
            children: (0, f.jsx)(p.x, {
              typography: "label-2-regular",
              maxLines: o,
              children: e,
            }),
          }),
        });
      v.displayName = "DynamicCredInput/AnswerCard/index/AnswerCard";
      var g = t(18566);
      const y = ({ descriptions: e }) =>
        (0, f.jsx)(g.z, {
          default: 8,
          children: e.map((e, r) =>
            (0, f.jsx)(
              p.x,
              {
                typography: "paragraph-2-regular",
                children: e,
              },
              r,
            ),
          ),
        });
      y.displayName =
        "DynamicCredInput/AnswerDescriptions/index/AnswerDescriptions";
      var x = t(89156);
      var b = t(61384);
      var S = t(65007);
      var j = t(79756);
      var E = t(30577);
      var C = t(53581);
      var k = t(47997);
      var _ = t(31065);
      var N = t(63144);
      var A = t(82128);
      const M = "label-head--fU0DRawPJ8IeJB3K";
      const R = "profile.resume.field.creds.hint.close.v2";
      const L = ({
        trls: e,
        label: r,
        description: t,
        dataQaLabel: o,
        hint: i,
        children: s,
      }) => {
        const [a, l] = (0, n.useState)(false);
        const d = (0, n.useRef)(null);
        const { isMobile: c } = (0, b.G)();
        const u = () => {
          l((e) => !e);
        };
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsxs)(g.z, {
              default: 12,
              children: [
                (0, f.jsx)("div", {
                  className: M,
                  children: (0, f.jsxs)(S.b, {
                    right: i
                      ? (0, f.jsx)(j.a, {
                          mode: "secondary",
                          style: "neutral",
                          disablePadding: true,
                          ref: d,
                          icon: A.JCw,
                          onClick: u,
                        })
                      : undefined,
                    children: [
                      (0, f.jsx)(E.j, {
                        type: "title",
                        "data-qa": o,
                        children: r,
                      }),
                      t &&
                        (0, f.jsx)(E.j, {
                          type: "subtitle",
                          children: t,
                        }),
                    ],
                  }),
                }),
                s,
              ],
            }),
            !!i &&
              (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(C.u, {
                    placement: "bottom-center",
                    "aria-label-close": "close",
                    activatorRef: d,
                    visible: a && !c,
                    onClose: u,
                    maxWidth: 600,
                    showClose: true,
                    children: i,
                  }),
                  (0, f.jsx)(k.R, {
                    visible: c && a,
                    onClose: u,
                    footer: (0, f.jsx)(_.W, {
                      children: (0, f.jsx)(N.z, {
                        mode: "secondary",
                        style: "neutral",
                        onClick: u,
                        children: e[R],
                      }),
                    }),
                    children: i,
                  }),
                ],
              }),
          ],
        });
      };
      L.displayName = "DynamicCredInput/CredInputLabel/index/CredInputLabel";
      const P = (0, x.Z)(L);
      const w = "content-wrapper--AcHDUXuJ25Aite18";
      const I = "card--qjnXgxpO0crID7Fw";
      const T = "card-stretched--ej0Ha31gYFAxVUq5";
      const O = "card-stretched-half--LEC4Bp72zIVdRfeH";
      const V = {
        IMPOSSIBLE_ANSWER_FOR_QUESTION:
          "profile.resume.field.creds.error.impossible-answer-for-question",
        ONLY_SINGLE_ANSWER_ALLOWED:
          "profile.resume.field.creds.error.only-single-answer-allowed",
        DIFFERENT_TYPE_OF_ANSWER:
          "profile.resume.field.creds.error.different-type-of-answer",
        ROLE_NOT_SUPPORTED:
          "profile.resume.field.creds.error.role-not-supported",
        ANSWER_NOT_IN_DICTIONARY:
          "profile.resume.field.creds.error.answer-not-in-dictionary",
        QUESTION_NOT_IN_DICTIONARY:
          "profile.resume.field.creds.error.question-not-in-dictionary",
        REQUIRED: "profile.resume.field.creds.error.required",
      };
      const D = ({ questionId: e, maxLines: r }) => {
        const {
          question: t,
          possibleAnswers: h,
          change: p,
          value: m,
        } = ((e) => {
          const r = (0, s.useDispatch)();
          const t = (0, a.v)((r) => r.scheme.creds.questions[e]);
          const o = (0, a.v)((e) => e.scheme.creds.answers);
          const i = (0, n.useMemo)(
            () => t.possibleAnswers.map((e) => o[e]),
            [t, o],
          );
          const u = (0, a.v)((r) =>
            Object.values(r.builder.creds.activatedQuestions).some((r) =>
              r.includes(e),
            ),
          );
          const h = (0, a.v)((r) =>
            Object.values(r.builder.creds.deactivatedQuestions).some((r) =>
              r.includes(e),
            ),
          );
          const p = (0, a.v)((r) => {
            var n;
            if (r.builder.creds.questionToAnswerMap[e]) {
              return r.builder.creds.questionToAnswerMap[e];
            } else {
              return (
                ((n = r.scheme) === null ||
                n === undefined ||
                (n = n.creds) === null ||
                n === undefined ||
                (n = n.questionToAnswerMap) === null ||
                n === undefined
                  ? undefined
                  : n[e]) ?? c
              );
            }
          });
          const m = (0, n.useMemo)(
            () => !!u || (!h && t.isActive),
            [u, h, t.isActive],
          );
          (0, n.useEffect)(() => {
            if (!m && p.length > 0) {
              r(
                (0, l.hv)({
                  [e]: [],
                }),
              );
            }
          }, [r, m, e, p.length]);
          (0, n.useEffect)(() => {
            const t = Object.values([...p]).reduce(
              (e, r) => [...e, ...o[r].askQuestionsAfter],
              [],
            );
            const n = i
              .filter((e) => !p.includes(e.answerId))
              .reduce((e, r) => [...e, ...o[r.answerId].askQuestionsAfter], []);
            r(
              (0, l.pc)({
                questionId: e,
                questions: t,
              }),
            );
            r(
              (0, l.P6)({
                questionId: e,
                questions: n,
              }),
            );
          }, [o, r, i, e, p]);
          (0, n.useEffect)(() => {
            r(
              (0, l.hv)({
                [e]: [...p],
              }),
            );
          }, []);
          const f = (0, n.useCallback)(
            (e) => {
              const r = p.includes(e);
              let n = new Set([]);
              const i = t.questionType;
              const s = o[e].answerGroup;
              if (i === d.SingleChoice) {
                return new Set(r ? [] : [e]);
              } else {
                n = new Set(p);
                if (r) {
                  n.delete(e);
                  return n;
                } else if (s === "negative" || s === "neutral") {
                  return new Set([e]);
                } else {
                  p.forEach((e) => {
                    const r = o[e].answerGroup;
                    if (r === "negative" || r === "neutral") {
                      n.delete(e);
                    }
                  });
                  n.add(e);
                  return n;
                }
              }
            },
            [o, t.questionType, p],
          );
          const v = (0, n.useCallback)(
            (t) => {
              const n = f(t);
              r(
                (0, l.hv)({
                  [e]: [...n],
                }),
              );
            },
            [r, f, e],
          );
          return {
            question: {
              ...t,
              isActive: m,
            },
            possibleAnswers: i,
            value: p,
            change: v,
          };
        })(e);
        const g = (0, u.kF)(e);
        b = h;
        const x = (0, n.useMemo)(
          () => b.map((e) => e.description).filter((e) => !!e),
          [b],
        );
        var b;
        const S = (0, n.useMemo)(
          () => (h.length === 4 ? O : h.length <= 3 ? T : I),
          [h.length],
        );
        if (t.isActive) {
          return (0, f.jsx)(P, {
            label: t.questionTitle,
            description: t.description || undefined,
            dataQaLabel: `resume-profile-creds-question resume-profile-creds-question_${e}`,
            hint: x.length
              ? (0, f.jsx)(y, {
                  descriptions: x,
                })
              : undefined,
            children: (0, f.jsx)(o.z, {
              invalid: !!g,
              errorMessage: (0, f.jsx)(i.cp, {
                error: g,
                customTrls: V,
              }),
              children: (0, f.jsx)("div", {
                className: w,
                children: h.map((e) =>
                  (0, f.jsx)(
                    "div",
                    {
                      className: S,
                      children: (0, f.jsx)(v, {
                        maxLines: r,
                        dataQa: `resume-profile-creds-answer resume-profile-creds-answer_${e.answerId}`,
                        text: e.title,
                        checked: m.includes(e.answerId),
                        onChange: () => p(e.answerId),
                        type:
                          t.questionType === d.SingleChoice
                            ? "radio"
                            : "checkbox",
                      }),
                    },
                    e.answerId,
                  ),
                ),
              }),
            }),
          });
        } else {
          return null;
        }
      };
      D.displayName =
        "components/DynamicCredInput/index/MagritteDynamicCredInput";
    },
    20957: function (e, r, t) {
      t.d(r, {
        gN: () => p,
        cp: () => u,
        i2: () => h,
      });
      var n = t(45144);
      var o = t(89156);
      var i = t(18566);
      var s = t(28729);
      var a = t(66802);
      var l = t(9862);
      const d = {
        UNKNOWN: "profile.resume.field.error.unknown",
        REQUIRED: "profile.resume.field.error.required",
        DUPLICATE: "profile.resume.position.error.not-in",
        NOT_MATCH_REGEXP: "profile.resume.field.error.regexp",
        EARLY_THAN_MINIMUM: "profile.resume.field.error.min-date",
        LATER_THAN_MAXIMUM: "profile.resume.field.error.max-date",
        SIZE_LESS_THAN_MINIMUM: "profile.resume.field.error.min-count",
        VALUE_LESS_THAN_MINIMUM: "profile.resume.field.error.less-than-min",
        SIZE_GREATER_THAN_MAXIMUM: "profile.resume.field.error.max-count",
        VALUE_GREATER_THAN_MAXIMUM:
          "profile.resume.field.error.greater-than-max",
        END_DATE_BEFORE_START_DATE:
          "profile.resume.field.experience.error.end-before-start",
        LENGTH_GREATER_THAN_MAXIMUM: "profile.resume.field.error.max-length",
        REQUIRED_WITH_NOT_EMPTY_EXPERIENCE:
          "profile.resume.field.error.required",
      };
      const c = ({ customTrls: e, error: r, trls: t }) => {
        const o = ((e, r) => {
          if (!r) {
            return null;
          }
          const t = e[r == null ? undefined : r.code];
          return t || e.UNKNOWN;
        })(
          (0, n.useMemo)(
            () => ({
              ...d,
              ...e,
            }),
            [e],
          ),
          r,
        );
        const i = r !== undefined;
        const s = r
          ? `field-error${r.fieldNamePath ? r.fieldNamePath.replaceAll("/", "-") : `-${r.field}`}`
          : undefined;
        return (0, l.jsx)("div", {
          "data-error": true,
          "data-qa": i ? s : undefined,
          children: !!o && t[o],
        });
      };
      c.displayName = "components/Field/index/FieldError";
      const u = (0, o.Z)(c);
      u.displayName = "FieldError";
      const h = ({
        localError: e,
        serverError: r,
        customTrls: t,
        fieldName: o,
      }) => {
        const i = (0, n.useMemo)(
          () =>
            r ||
            (e
              ? {
                  code: e,
                  field: o ?? "",
                }
              : undefined),
          [o, e, r],
        );
        return (0, l.jsx)(u, {
          error: i,
          customTrls: t,
        });
      };
      h.displayName = "components/Field/index/CombinedError";
      const p = ({ dataQaLabel: e, children: r, label: t, description: n }) =>
        (0, l.jsxs)(i.z, {
          default: 12,
          children: [
            !!t &&
              (0, l.jsx)(s.l, {
                "data-qa": e,
                children: t,
              }),
            r,
            !!n &&
              (0, l.jsx)(a.x, {
                typography: "label-3-regular",
                style: "secondary",
                children: n,
              }),
          ],
        });
      p.displayName = "components/Field/index/Field";
    },
    56351: function (e, r, t) {
      t.d(r, {
        j: () => H,
      });
      var n = t(45144);
      var o = t(89156);
      var i = t(33338);
      var s = t(63144);
      var a = t(82128);
      var l = t(9862);
      const d =
        "profile.skillLevels.changeVerifiedSkillWarningModal.title.magritte";
      const c =
        "profile.skillLevels.changeVerifiedSkillWarningModal.info.magritte";
      const u =
        "profile.skillLevels.changeVerifiedSkillWarningModal.close.magritte";
      const h =
        "profile.skillLevels.changeVerifiedSkillWarningModal.apply.magritte";
      const p = ({ trls: e, visible: r, onClose: t, onOk: n }) =>
        (0, l.jsx)(i.bZ, {
          visible: r,
          layout: "vertical",
          onClose: t,
          title: e[d],
          icon: (0, l.jsx)(a.uvJ, {}),
          iconStyle: "neutral",
          description: e[c],
          buttons: (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(s.z, {
                mode: "primary",
                style: "accent",
                onClick: n,
                children: e[h],
              }),
              (0, l.jsx)(s.z, {
                mode: "secondary",
                onClick: t,
                children: e[u],
              }),
            ],
          }),
        });
      p.displayName =
        "builder/SkillsLevelsEditor/ChangeVerifiedSkillWarningModal/ChangeVerifiedSkillWarningModal";
      const m = (0, o.Z)(p);
      var f = t(24488);
      var v = t(61384);
      var g = t(50109);
      var y = t(65007);
      var x = t(66802);
      var b = t(75790);
      var S = t(4233);
      var j = t(18566);
      var E = t(4305);
      var C = t(33458);
      var k = t(85489);
      var _ = t(47997);
      var N = t(31537);
      const A = "list-view-container--BoiPZk5PEto2OE2u";
      const M = "modal-list--N62NmLXwpEhgCS1r";
      const R = "levels-cards-row--Alc2V7pIhJMLMDY4";
      const L = "levels-card-text-container--PRkbLwJHFkUSN_xM";
      const P = {
        title: "profile.skillLevels.modal.title.magritte",
        levels: {
          0: {
            rank: 1,
            title: "profile.skillLevels.modal.basic.magritte",
            items: {
              0: "profile.skillLevels.modal.basic.0.magritte",
              1: "profile.skillLevels.modal.basic.1.magritte",
            },
          },
          1: {
            rank: 2,
            title: "profile.skillLevels.modal.medium.magritte",
            items: {
              0: "profile.skillLevels.modal.medium.0.magritte",
              1: "profile.skillLevels.modal.medium.1.magritte",
            },
          },
          2: {
            rank: 3,
            title: "profile.skillLevels.modal.advanced.magritte",
            items: {
              0: "profile.skillLevels.modal.advanced.0.magritte",
              1: "profile.skillLevels.modal.advanced.1.magritte",
              2: "profile.skillLevels.modal.advanced.2.magritte",
            },
          },
        },
        close: "profile.skillLevels.modal.close.magritte",
      };
      const w = ({ trls: e, visible: r, onClose: t }) => {
        const n = Object.keys(P.levels);
        const o = (0, l.jsx)(j.z, {
          default: 16,
          children: n.map((r) => {
            const t = P.levels[r];
            const n = Object.values(t.items);
            return (0, l.jsxs)(
              g.Z,
              {
                borderWidth: "default",
                padding: 24,
                borderRadius: 24,
                children: [
                  (0, l.jsx)(E.D, {
                    Element: "h5",
                    style: "primary",
                    size: "small",
                    children: e[t.title],
                  }),
                  (0, l.jsx)("ul", {
                    className: M,
                    children: n.map((r) =>
                      (0, l.jsx)(
                        "li",
                        {
                          children: (0, l.jsx)(x.x, {
                            style: "primary",
                            Element: "span",
                            children: e[r],
                          }),
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              },
              t.rank,
            );
          }),
        });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(C.u, {
              visible: r,
              onClose: t,
              title: e[P.title],
              footer: (0, l.jsx)(k.o, {
                type: "auto",
                primaryActions: (0, l.jsx)(s.z, {
                  mode: "secondary",
                  onClick: t,
                  children: e[P.close],
                }),
              }),
              children: o,
            }),
            (0, l.jsx)(_.R, {
              visible: r,
              onClose: t,
              height: "full-screen",
              header: (0, l.jsx)(N.v, {
                size: "large",
                title: e[P.title],
                right: (0, l.jsx)(a.Cs7, {
                  onClick: t,
                }),
              }),
              children: o,
            }),
          ],
        });
      };
      w.displayName =
        "builder/SkillsLevelsEditor/SkillLevelModal/SkillLevelModal";
      const I = (0, o.Z)(w);
      const T = {
        advanced: "profile.skillLevels.level.advanced.magritte",
        medium: "profile.skillLevels.level.medium.magritte",
        basic: "profile.skillLevels.level.basic.magritte",
      };
      const O = "profile.skillLevels.info.magritte";
      const V = ({ trls: e, skills: r, onChangeSkills: t }) => {
        const { isMobile: o } = (0, v.G)();
        const [i, s] = (0, n.useState)(false);
        const d = (0, n.useCallback)(
          (e, n) => {
            t(
              r.map((r) =>
                r.id === e
                  ? {
                      ...r,
                      rank: n,
                    }
                  : r,
              ),
            );
          },
          [r, t],
        );
        const c = [
          {
            name: e[T.basic],
            rank: 1,
          },
          {
            name: e[T.medium],
            rank: 2,
          },
          {
            name: e[T.advanced],
            rank: 3,
          },
        ];
        return (0, l.jsxs)("div", {
          className: A,
          "data-qa": "skills-levels",
          children: [
            (0, l.jsx)(g.Z, {
              padding: 12,
              borderRadius: 16,
              stretched: true,
              borderWidth: "default",
              onClick: () => {
                f.default.sendHHEventButtonClick(
                  "skill_level_editor.open_skill_level_info",
                );
                s(true);
              },
              children: (0, l.jsx)(y.b, {
                left: (0, l.jsx)(a.JCw, {
                  initialColor: "secondary",
                }),
                right: o
                  ? undefined
                  : (0, l.jsx)(a.a2Q, {
                      initialColor: "secondary",
                    }),
                children: (0, l.jsx)(x.x, {
                  typography: "label-2-regular",
                  children: e[O],
                }),
              }),
            }),
            (0, l.jsx)(b.X, {
              default: 8,
            }),
            r.map((e) =>
              (0, l.jsxs)(
                g.Z,
                {
                  stretched: true,
                  "data-qa": "skill",
                  children: [
                    (0, l.jsx)(b.X, {
                      default: 24,
                    }),
                    (0, l.jsx)(x.x, {
                      typography: "label-2-regular",
                      style: "secondary",
                      "data-qa": "skillName",
                      children: e.name,
                    }),
                    (0, l.jsx)(b.X, {
                      default: 12,
                    }),
                    (0, l.jsx)("div", {
                      className: R,
                      children: c.map((r) => {
                        return (0, l.jsx)(
                          S.g,
                          {
                            checked: r.rank === e.rank,
                            padding: 12,
                            borderRadius: 16,
                            flexible: true,
                            type: "radio",
                            name: e.name + r.name,
                            onChange: () => d(e.id, r.rank),
                            children: (0, l.jsx)(y.b, {
                              align: "center",
                              children: (0, l.jsx)(x.x, {
                                typography: "label-4-regular",
                                style: "primary",
                                children: (0, l.jsx)("div", {
                                  className: L,
                                  "data-qa": `skill-level-${r.rank ?? ""}`,
                                  children: r.name,
                                }),
                              }),
                            }),
                          },
                          e.name + r.name,
                        );
                      }),
                    }),
                  ],
                },
                e.name,
              ),
            ),
            (0, l.jsx)(I, {
              visible: i,
              onClose: () => {
                s(false);
              },
            }),
          ],
        });
      };
      V.displayName =
        "builder/SkillsLevelsEditor/SkillsLevelsListView/SkillsLevelsListView";
      const D = (0, o.Z)(V);
      const B = (e) => {
        const r = e.verifications.sort(
          (e, r) => Date.parse(e.attempted_at) - Date.parse(r.attempted_at),
        )[0];
        const t = r && ["EFFECTIVE", "GRACE"].includes(r.validity.state);
        return 0 + (e.category === "LANG" ? 1 : 0) + (t ? 10 : 0);
      };
      const U = [
        {
          id: 1,
          name: "A1 — Начальный",
          rank: 1,
          internal_id: "a1",
          category: "LANG",
        },
        {
          id: 2,
          name: "A2 — Элементарный",
          rank: 2,
          internal_id: "a2",
          category: "LANG",
        },
        {
          id: 3,
          name: "B1 — Средний",
          rank: 3,
          internal_id: "b1",
          category: "LANG",
        },
        {
          id: 4,
          name: "B2 — Средне-продвинутый",
          rank: 4,
          internal_id: "b2",
          category: "LANG",
        },
        {
          id: 5,
          name: "C1 — Продвинутый",
          rank: 5,
          internal_id: "c1",
          category: "LANG",
        },
        {
          id: 6,
          name: "C2 — В совершенстве",
          rank: 6,
          internal_id: "c2",
          category: "LANG",
        },
        {
          id: 7,
          name: "L1 - Родной",
          rank: 7,
          internal_id: "l1",
          category: "LANG",
        },
        {
          id: 8,
          name: "Базовый",
          rank: 1,
          internal_id: "base",
          category: "SKILL",
        },
        {
          id: 9,
          name: "Средний",
          rank: 2,
          internal_id: "middle",
          category: "SKILL",
        },
        {
          id: 10,
          name: "Продвинутый",
          rank: 3,
          internal_id: "advanced",
          category: "SKILL",
        },
      ];
      const Z = (e, r) =>
        e.actualVerifications.some((e) => {
          return e.level?.rank === r;
        });
      const q = (e, r, t) => {
        if (e.level?.rank !== undefined) {
          return Math.min(e.level.rank, 3);
        } else if (r && (t == null ? undefined : t.level) !== null) {
          return Math.min(t.level.rank, 3);
        } else {
          return null;
        }
      };
      const F = (e, r) => {
        const {
          skillWithLevels: t,
          resumeSkillsNames: o,
          onUpdateSkillsLevels: i,
        } = e;
        const s = ((e, r) =>
          (0, n.useMemo)(() => {
            const t =
              e == null
                ? undefined
                : e.filter((e) => e.category === "SKILL" && r.includes(e.name));
            const n = t == null ? undefined : t.sort((e, r) => B(e) - B(r));
            return n ?? [];
          }, [e, r]))(t, o);
        const [a, d] = (0, n.useState)(() =>
          s.map((e) => {
            const r = ["EFFECTIVE", "GRACE"];
            const t = e.verifications.filter((e) =>
              r.includes(e.validity.state),
            );
            const n = e.verifications.sort(
              (e, r) => Date.parse(e.attempted_at) - Date.parse(r.attempted_at),
            )[0];
            const o = n && r.includes(n.validity.state);
            return {
              id: e.id,
              name: e.name,
              category: e.category,
              actualVerifications: t,
              rank: q(e, o, n),
              initialRank: q(e, o, n),
            };
          }),
        );
        const [c, u] = (0, n.useState)(false);
        const h = a.filter((e) => {
          var r;
          const t = s.find((r) => r.id === e.id);
          return (
            e.rank !== null &&
            e.rank !==
              (t == null || (r = t.level) === null || r === undefined
                ? undefined
                : r.rank)
          );
        });
        const p = h.filter((e) => {
          const r = Z(e, e.initialRank);
          const t = Z(e, e.rank);
          return r && !t;
        });
        const f = (0, n.useCallback)(() => {
          const e = h.map((e) => {
            return {
              category: e.category,
              level_id:
                ((r = e),
                U.find((e) => e.rank === r.rank && e.category === r.category)
                  ?.id ?? 0),
              skill_id: e.id,
            };
            var r;
          });
          i(e);
        }, [h, i]);
        (0, n.useImperativeHandle)(
          r,
          () => ({
            requestUpdateSkillsLevels: () => {
              if (p.length > 0) {
                u(true);
              } else {
                f();
              }
            },
          }),
          [p, f],
        );
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)(D, {
              skills: a,
              onChangeSkills: d,
            }),
            (0, l.jsx)(m, {
              onClose: () => u(false),
              onOk: () => {
                u(false);
                f();
              },
              visible: c,
            }),
          ],
        });
      };
      F.displayName =
        "builder/SkillsLevelsEditor/index/SkillsLevelsEditorComponent";
      const H = (0, n.forwardRef)(F);
    },
    71705: function (e, r, t) {
      t.d(r, {
        b: () => m,
      });
      var n = t(45144);
      var o = t(21440);
      var i = t(89156);
      var s = t(77967);
      var a = t(9862);
      const l = "hhсaptcha.error";
      const d = "hhсaptcha.placeholder";
      const c = "hhсaptcha.info";
      const u = "hhсaptcha.renew.text";
      const h = {
        RU: "hhсaptcha.lang.RU",
        EN: "hhсaptcha.lang.EN",
      };
      const p = ({ trls: e, size: r }) => {
        const t = (0, n.useMemo)(
          () => ({
            error: e[l],
            renewText: e[u],
            description: e[c],
            placeholder: e[d],
            lang: {
              RU: e[h.RU],
              EN: e[h.EN],
            },
          }),
          [e],
        );
        return (0, a.jsx)(s.R0, {
          trls: t,
          fetcher: o.Z,
          isMagritte: true,
          size: r,
        });
      };
      p.displayName = "components/Hhcaptcha/index/Hhcaptcha";
      const m = (0, i.Z)(p);
    },
    69502: function (e, r, t) {
      t.d(r, {
        H: () => Me,
      });
      var n = t(45144);
      var o = t(59706);
      var i = t(89156);
      var s = t(75790);
      var a = t(48799);
      var l = t(94457);
      let d = false;
      let c = false;
      var u = t(9862);
      const h = {
        "phone.formatted.mincount": "rb.edit.phone.minCount",
        "phone.formatted.not_a_number": "profile.resume.field.error.unknown",
        "phone.formatted.too_short": "profile.resume.field.error.unknown",
        "phone.formatted.too_long": "profile.resume.field.error.unknown",
        "phone.formatted.too_short_nsn": "profile.resume.field.error.unknown",
        "phone.formatted.invalid_country_code":
          "profile.resume.field.error.unknown",
        "phone.formatted.invalid_length": "profile.resume.field.error.unknown",
        "phone.formatted.is_possible_local_only":
          "profile.resume.field.error.unknown",
        "phone.formatted.parse_error": "profile.resume.field.error.unknown",
        "phone.formatted.need_verification":
          "rb.message.phone.need_verification",
        "phone.verification.empty": "rb.message.phone.verification.empty",
        "phone.verification.length": "rb.message.phone.verification.length",
        "phone.verification.CODE_NOT_FOUND":
          "rb.message.phone.verification.CODE_NOT_FOUND",
        "phone.verification.CONFIRM_CODE_BLOCKED":
          "rb.message.phone.verification.CONFIRM_CODE_BLOCKED",
        "phone.verification.WRONG_CODE":
          "rb.message.phone.verification.WRONG_CODE",
        "phone.verification.CODE_EXPIRED":
          "rb.message.phone.verification.CODE_EXPIRED",
        "phone.verification.VALUE_MISSING":
          "rb.message.phone.verification.VALUE_MISSING",
        "phone.verification.EMPTY_CODE":
          "rb.message.phone.verification.EMPTY_CODE",
      };
      const p = ({
        refreshError: e,
        shouldErrorBeVisible: r,
        meta: t,
        trlPrefix: o,
        trls: i,
        dataQa: s,
      }) => {
        const [a, l] = (0, n.useState)(false);
        const [d, c] = (0, n.useState)("");
        const p = (0, n.useCallback)(
          (e) => {
            console.error(
              "out error",
              new Error("ResumeFormError translation key is undefined"),
              {
                error: e,
                trlPrefix: o,
              },
            );
          },
          [o],
        );
        const m = (0, n.useCallback)(() => {
          const { error: e } = t;
          const r = h[`${o}.${e ?? ""}`] || h[e];
          if (!r) {
            p(e);
          }
          return i[r];
        }, [p, t, o, i]);
        (0, n.useEffect)(() => {
          var n;
          const o = (n = r(t)) !== null && n !== undefined && n;
          if (o !== a || e) {
            l(o);
            c(o ? m() : "");
          }
        }, [m, t, e, r, a]);
        if (a) {
          return (0, u.jsx)("div", {
            "data-qa": s,
            children: d,
          });
        } else {
          return null;
        }
      };
      p.displayName = "PhoneField/components/InnerError/InnerError";
      const m = (0, i.Z)(p);
      var f = t(6848);
      var v = t(84243);
      var g = t.n(v);
      const y = {};
      const x = "profile.resume.field.phone.v2.mark-valid";
      const b = ({
        trls: e,
        size: r = "large",
        onBlur: t,
        onFocus: o,
        maxLength: i,
        showMarkValid: s,
        setAsyncError: a = () => true,
        ...d
      }) => {
        const { value: c, onChange: h } = d;
        const p = (({ onChange: e, setAsyncError: r }) => {
          const t = (0, n.useRef)();
          return {
            onParseBegin: (0, n.useCallback)(
              ({ value: e }) => {
                r(
                  e,
                  new Promise((e) => {
                    t.current = e;
                  }),
                );
              },
              [r, t],
            ),
            onParseEnd: (0, n.useCallback)(
              ({ error: r, value: n }) => {
                var o;
                var i;
                if (r) {
                  if ((o = t.current) !== null && o !== undefined) {
                    o.call(t, r);
                  }
                } else {
                  if (n) {
                    e(n);
                  }
                  if ((i = t.current) !== null && i !== undefined) {
                    i.call(t, "");
                  }
                }
              },
              [e, t],
            ),
          };
        })({
          onChange: h,
          setAsyncError: a,
        });
        const { startParse: m, stopParse: v } = (({
          onParseBegin: e,
          onParseEnd: r,
        }) => {
          const t = (0, n.useRef)(r);
          const o = (0, n.useRef)(e);
          const i = (0, n.useRef)(() => {});
          const s = (0, n.useCallback)(() => i.current(), []);
          const a = (0, n.useCallback)(
            async (e) => {
              s();
              const r = new AbortController();
              i.current = () => r.abort();
              o.current({
                value: e,
              });
              if (!e) {
                t.current({
                  value: e,
                  parts: y,
                });
                return;
              }
              const n = e;
              try {
                const o = await l.e.parse(e, r.signal);
                if (o.hasOwnProperty("error")) {
                  t.current({
                    value: n,
                    error: o.error,
                    parts: y,
                  });
                } else {
                  const { value: e = "", ...r } = o;
                  t.current({
                    base: n,
                    value: e,
                    parts: r,
                  });
                }
              } catch (e) {
                var a;
                if (g().isCancel(e)) {
                  t.current({
                    value: n,
                    parts: y,
                  });
                } else {
                  t.current({
                    value: n,
                    error:
                      (e == null ||
                      (a = e.response) === null ||
                      a === undefined ||
                      (a = a.data) === null ||
                      a === undefined
                        ? undefined
                        : a.error) || "parse_error",
                    parts: y,
                  });
                }
              }
            },
            [s],
          );
          (0, n.useEffect)(() => {
            o.current = e;
            t.current = r;
          }, [e, r]);
          return {
            startParse: a,
            stopParse: s,
          };
        })({
          ...p,
        });
        const b = (({
          value: e,
          onBlur: r,
          onFocus: t,
          startParse: o,
          stopParse: i,
        }) => ({
          onFocus: (0, n.useCallback)(() => {
            i();
            t();
          }, [t, i]),
          onBlur: (0, n.useCallback)(async () => {
            await o(e);
            r();
          }, [e, r, o]),
        }))({
          value: c,
          onBlur: t,
          onFocus: o,
          startParse: m,
          stopParse: v,
        });
        const S = {
          hint: s ? e[x] : "",
          inputMode: "tel",
          maxLength: i,
          size: r,
          elevatePlaceholder: true,
        };
        return (0, u.jsx)(f.I, {
          ...b,
          ...d,
          ...S,
        });
      };
      b.displayName = "PhoneField/components/PhoneInput/PhoneInput";
      const S = (0, i.Z)(b);
      var j = t(9325);
      var E = t(24488);
      var C = t(48812);
      var k = t.n(C);
      var _ = t(29368);
      var N = t.n(_);
      var A = t(30329);
      var M = t(48867);
      var R = t(64452);
      var L = t(77967);
      var P = t(61384);
      var w = t(66802);
      var I = t(50109);
      var T = t(63144);
      var O = t(71705);
      var V = t(81292);
      var D = t(65284);
      const B = (e) => {
        const r = new Date(0, 0, 0, 0, 0, e);
        const t = r.getHours() > 0 ? "HH:mm:ss" : "mm:ss";
        return (0, D.p6)(r, t);
      };
      const U = () => {
        e = Date.now();
        return Math.floor(e / 1000);
        var e;
      };
      const Z = (e = 0) => {
        const [r, t] = (0, n.useState)(Math.max(e, 0));
        const o = (0, n.useRef)(0);
        (0, n.useEffect)(() => {
          const e = U();
          o.current = setTimeout(() => {
            const n = U() - e;
            const i = r - n;
            if (i < 0 || Number.isNaN(i)) {
              t(0);
              clearTimeout(o.current);
            } else {
              t(i);
            }
          }, 1000);
          return () => clearTimeout(o.current);
        }, [r]);
        return [r, t];
      };
      const q = (e, r) =>
        e.length > 1
          ? `${e.slice(0, -1).join(", ")} ${r} ${e.slice(-1)}`
          : e.join(", ");
      var F = t(70904);
      var H = t(28995);
      const z = (e, r) => {
        const t = (0, n.useRef)(e);
        const o = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          t.current = e;
        }, [e]);
        const i = function (...e) {
          if (o.current) {
            clearTimeout(o.current);
          }
          o.current = setTimeout(() => {
            var r;
            if ((r = t.current) !== null && r !== undefined) {
              r.apply(this, e);
            }
          }, r);
        };
        i.cancel = () => {
          if (o.current) {
            clearTimeout(o.current);
            o.current = null;
          }
        };
        return i;
      };
      const $ = "recaptcha-short-resume-phone--f9cugicqM06zHSsp";
      const G = "validation-error--CA6i06Y8s8gPOe2Z";
      const W = "resume-form-phone-verification--h0zahCsogFkQvrHi";
      const K = "resume-form-phone-verification-card-content--hB3qpn5kj3otggvp";
      const X = "verification-title-wrapper--Yks_5dNnLwUBj6d6";
      const J = {
        UNKNOWN: "phoneVerificationPage.error.unknown",
        BAD_LOGIN: "phoneVerificationPage.error.BAD_PHONE",
        NULL_PHONE: "phoneVerificationPage.error.NULL_PHONE",
        EMPTY: "phoneVerificationPage.error.NULL_PHONE",
        NEED_PHONE: "phoneVerificationPage.needPhone",
        COUNTRY_BLACKLISTED: "phoneVerificationPage.error.restrictedCountry",
        CODE_SEND_BLOCKED:
          "rb.edit.contacts.phone.verify.send.error.CODE_SEND_BLOCKED",
        countries: "applicant.resumes.phoneVerification.countries",
        and: "applicant.resumes.phoneVerification.countries.and",
        country: {
          RU: "applicant.resumes.phoneVerification.countries.RU",
          UA: "applicant.resumes.phoneVerification.countries.UA",
          BY: "applicant.resumes.phoneVerification.countries.BY",
          UZ: "applicant.resumes.phoneVerification.countries.UZ",
          AZ: "applicant.resumes.phoneVerification.countries.AZ",
          KZ: "applicant.resumes.phoneVerification.countries.KZ",
          GE: "applicant.resumes.phoneVerification.countries.GE",
          KG: "applicant.resumes.phoneVerification.countries.KG",
        },
      };
      const Y = ({ trls: e, error: r }) => {
        const { allowedSMSCountries: t } = (0, a.nu)();
        if (!r) {
          return null;
        }
        const n = ((r) => {
          let n = e[J[r] || J.UNKNOWN];
          if (r === "COUNTRY_BLACKLISTED" && t) {
            const r = t.map((r) => e[J.country[r]]);
            n = (0, R.WU)(e[J.countries], {
              "{0}": q(r, e[J.and]),
            });
          }
          return n;
        })(r);
        return (0, u.jsx)("span", {
          className: G,
          "data-qa": "resumes-page-verification__error-message",
          children: n,
        });
      };
      Y.displayName =
        "components/PhoneVerification/PhoneVerificationError/PhoneVerificationError";
      const Q = (0, i.Z)(Y);
      const ee = "need_verification";
      let re = (function (e) {
        e.SEND = "send";
        e.VERIFICATION = "verification";
        return e;
      })({});
      const te = (0, A.makeSetStoreField)("otp");
      const ne = "profile.resume.field.phone.v2.verify.description";
      const oe = "rb.edit.contacts.phone.verify.confirm";
      const ie = "rb.edit.contacts.phone.verify.restricted";
      const se = "account.connect.merge_by_code.wait";
      const ae = "abstract.and";
      const le = {
        RU: "applicant.resumes.phoneVerification.countries.RU",
        UA: "applicant.resumes.phoneVerification.countries.UA",
        BY: "applicant.resumes.phoneVerification.countries.BY",
        UZ: "applicant.resumes.phoneVerification.countries.UZ",
        AZ: "applicant.resumes.phoneVerification.countries.AZ",
        KZ: "applicant.resumes.phoneVerification.countries.KZ",
        GE: "applicant.resumes.phoneVerification.countries.GE",
        KG: "applicant.resumes.phoneVerification.countries.KG",
      };
      const de = "resume_common";
      const ce = ({
        setDisabled: e,
        addVerifiedPhones: r,
        setStep: t,
        addNonVerifiablePhones: i,
        setNonVerifiableConfirm: s,
        recaptchaClassName: d,
        trls: c,
      }) => {
        const { isMobile: h } = (0, P.G)();
        const p = (0, L.my)();
        const [m, f] = (0, n.useState)(null);
        const { allowedSMSCountries: v } = (0, a.nu)();
        const g = (0, o.U$)("phone.formatted");
        const y = g.input.value;
        const [x, b] = Z(0);
        const [S, C] = (0, n.useState)(null);
        const [_, A] = (0, n.useState)(false);
        const [D, U] = (0, n.useState)(null);
        const $ = (0, j.useDispatch)();
        const G = (0, n.useRef)();
        const X = (0, n.useRef)(null);
        const J = (0, M.v)(H.N3);
        (0, n.useEffect)(() => {
          if (y) {
            U(false);
          }
        }, [y]);
        const Y = async (n) => {
          if (!(y.length < 8)) {
            s(false);
            try {
              var o;
              const s = await l.e.getPhoneInformation(y);
              const a = s.information;
              if (!a || s.error) {
                return;
              }
              if (a.isPhoneInRestrictedCountry && n) {
                U(true);
                i([y, a.phoneDto.formatted]);
              } else if (
                (o = a.phoneDto) !== null &&
                o !== undefined &&
                o.verified
              ) {
                U(false);
                r([y, a.phoneDto.formatted]);
              } else if (n) {
                U(false);
                await (async () => {
                  var r;
                  var n;
                  var o;
                  A(true);
                  C(null);
                  const i =
                    X == null || (r = X.current) === null || r === undefined
                      ? undefined
                      : r.querySelector(".g-recaptcha-response");
                  const s = {
                    login: y,
                    otpType: "phone",
                  };
                  let a;
                  p.addCaptchaParams(s);
                  if (i != null && i.value && m !== i.value) {
                    s["g-recaptcha-response"] = i.value;
                    f(i.value);
                  }
                  try {
                    a = await F.Q.generate(s);
                  } catch (e) {
                    var l;
                    const r =
                      e == null ||
                      (l = e.response) === null ||
                      l === undefined ||
                      (l = l.data) === null ||
                      l === undefined
                        ? undefined
                        : l.key;
                    if (r) {
                      C(r);
                    } else {
                      console.error(e);
                    }
                    A(false);
                    return;
                  }
                  A(false);
                  p.updateCaptcha(a);
                  if (a.otp) {
                    $(te(a.otp));
                    b(a.otp.secondsUntilNextSend ?? 0);
                  }
                  if (
                    ((n = a.recaptcha) === null ||
                      n === undefined ||
                      !n.isBot) &&
                    ((o = a.hhcaptcha) === null || o === undefined || !o.isBot)
                  ) {
                    e(true);
                    C(null);
                    t(re.VERIFICATION);
                  }
                })();
              }
            } catch (e) {
              U(false);
              if (e.response.status !== 400) {
                console.error(e);
              }
              return;
            }
            g.input.onBlur();
          }
        };
        G.current = z(() => Y(), 300);
        (0, n.useEffect)(() => {
          var e;
          if (G != null && (e = G.current) !== null && e !== undefined) {
            e.call(G);
          }
        }, [y]);
        if (D && v != null && v.length) {
          const e = v.map((e) => c[le[e]]);
          const r = (0, R.WU)(c[ie], {
            "{0}": q(e, c[ae]),
          });
          return (0, u.jsx)("div", {
            "data-qa": "phone-confirm-restricted",
            children: (0, u.jsx)(w.x, {
              typography: "label-3-regular",
              style: "secondary",
              children: r,
            }),
          });
        }
        const ce = g.meta.error !== ee || !g.meta.submitFailed;
        return (0, u.jsx)(E.ElementShownAnchor, {
          fn: (e) =>
            k()(e, {
              resumeHash: J,
              hhtmSource: de,
            }),
          children: (0, u.jsxs)("div", {
            className: W,
            ref: X,
            children: [
              (0, u.jsxs)(I.Z, {
                stretched: true,
                style: "warning-secondary",
                padding: 24,
                borderRadius: 24,
                children: [
                  (0, u.jsx)(V.c, {
                    className: d,
                  }),
                  (0, u.jsx)(O.b, {}),
                  (0, u.jsxs)("div", {
                    className: K,
                    children: [
                      ce &&
                        (0, u.jsx)(w.x, {
                          children: c[ne],
                        }),
                      x > 0
                        ? (0, u.jsx)(w.x, {
                            children: (0, R.WU)(c[se], {
                              "{0}": B(x),
                            }),
                          })
                        : (0, u.jsx)("div", {
                            children: (0, u.jsx)(T.z, {
                              stretched: h,
                              loading: _,
                              size: "medium",
                              style: "accent",
                              mode: "primary",
                              "data-qa": "phone-confirm-button",
                              onClick: () => {
                                N()({
                                  resumeHash: J,
                                  hhtmSource: de,
                                });
                                return Y(true);
                              },
                              children: c[oe],
                            }),
                          }),
                    ],
                  }),
                ],
              }),
              (0, u.jsx)(Q, {
                error: S,
              }),
            ],
          }),
        });
      };
      ce.displayName = "components/PhoneVerification/SendStep/SendStep";
      const ue = (0, i.Z)(ce);
      var he = t(18566);
      var pe = t(31818);
      var me = t(82128);
      var fe = t(94492);
      var ve = t(44180);
      const ge = "profile.resume.field.phone.v2.verify.send-new-code.send";
      const ye = "profile.resume.field.phone.v2.verify.send-new-code.wait";
      const xe = ({
        login: e,
        trls: r,
        isSignupPage: t,
        otpType: o,
        operationType: i,
        recaptchaClassName: a = "",
      }) => {
        const { isMobile: l } = (0, P.G)();
        const [d, c] = (0, n.useState)(null);
        const h = (0, M.v)(({ otp: e }) => e);
        const p = (0, M.v)(({ recaptcha: e }) => e);
        const m = (0, M.v)(({ hhcaptcha: e }) => e);
        const [f, v] = Z((h == null ? undefined : h.secondsUntilNextSend) || 0);
        const g = (0, n.useRef)(null);
        const y = (0, L.my)();
        const x = (0, n.useRef)(null);
        const b = (0, n.useCallback)(async () => {
          var r;
          var n;
          const s =
            (r = g.current) === null || r === undefined
              ? undefined
              : r.querySelector(".g-recaptcha-response");
          const a = {
            login: e,
            otpType: o,
            operationType: i,
          };
          let l;
          if (
            x != null &&
            (n = x.current) !== null &&
            n !== undefined &&
            n.value
          ) {
            a.captchaText = x.current.value;
          }
          y.addCaptchaParams(a);
          if (s != null && s.value && d !== s.value) {
            a["g-recaptcha-response"] = s.value;
            if (s == null ? undefined : s.value) {
              c(s.value);
            }
          }
          E.default.sendHHEventButtonClick(
            "resend_code",
            {
              isSignupPage: t,
            },
            {
              login: e,
            },
          );
          try {
            l = await F.Q.generate(a);
          } catch (e) {
            var u;
            var h;
            if (
              e == null ||
              (u = e.response) === null ||
              u === undefined ||
              (u = u.data) === null ||
              u === undefined ||
              !u.recaptcha ||
              e == null ||
              (h = e.response) === null ||
              h === undefined ||
              (h = h.data) === null ||
              h === undefined ||
              !h.hhcaptcha
            ) {
              return null;
            }
          }
          var p;
          if (l) {
            y.updateCaptcha(l);
            v(
              ((p = l) === null ||
              p === undefined ||
              (p = p.otp) === null ||
              p === undefined
                ? undefined
                : p.secondsUntilNextSend) || 0,
            );
          }
          return null;
        }, [e, o, i, y, d, t, v]);
        const S = (0, R.WU)(r[ye], {
          "{0}": B(f),
        });
        return (0, u.jsxs)("div", {
          ref: g,
          children: [
            (0, u.jsx)(V.c, {
              verticalSpacing: 0,
              className: a,
            }),
            (0, u.jsx)(O.b, {}),
            ((p == null ? undefined : p.isBot) ||
              (m == null ? undefined : m.isBot)) &&
              (0, u.jsx)(s.X, {
                default: 16,
              }),
            f > 0
              ? (0, u.jsx)(u.Fragment, {
                  children: l
                    ? (0, u.jsx)(T.z, {
                        mode: "secondary",
                        stretched: true,
                        style: "accent",
                        disabled: true,
                        children: S,
                      })
                    : (0, u.jsx)(w.x, {
                        typography: "label-3-regular",
                        style: "secondary",
                        children: S,
                      }),
                })
              : (0, u.jsx)(u.Fragment, {
                  children: l
                    ? (0, u.jsx)(T.z, {
                        mode: "secondary",
                        stretched: true,
                        style: "accent",
                        onClick: b,
                        "data-qa": "oauth-merge-by-code__code-resend",
                        children: r[ge],
                      })
                    : (0, u.jsx)(ve.r, {
                        typography: "label-3-regular",
                        onClick: b,
                        "data-qa": "oauth-merge-by-code__code-resend",
                        children: r[ge],
                      }),
                }),
          ],
        });
      };
      xe.displayName = "components/OTP/CodeSender/CodeSender";
      const be = (0, i.Z)(xe);
      const Se = "rb.edit.contacts.phone.verify.confirm";
      const je = "rb.edit.contacts.phone.verify.sms";
      const Ee = "rb.edit.contacts.phone.verify.codeFromSms";
      const Ce = ({
        setDisabled: e,
        setStep: r,
        addVerifiedPhones: t,
        recaptchaClassName: i,
        trls: a,
        onSuccessVerified: d,
      }) => {
        const { isMobile: c } = (0, P.G)();
        const h = (0, o.U$)("phone.formatted").input.value;
        const p = (0, o.U$)("phone.verification_code");
        const [v, g] = (0, n.useState)(false);
        const [y, x] = (0, n.useState)(null);
        const b = (0, n.useRef)(false);
        const S = async () => {
          const n = p.input.value;
          b.current = true;
          if (n.length < 4 || v) {
            x("length");
            p.input.onFocus();
            return;
          }
          g(true);
          try {
            var o;
            var i;
            const s = await l.e.setVerifiedPhone(h, n, "resume-profile-front");
            if (
              s != null &&
              (o = s.verification) !== null &&
              o !== undefined &&
              o.success
            ) {
              e(false);
              x(null);
              t([h, ...s.phoneList]);
              r(re.SEND);
              p.input.onChange("");
              if (d != null) {
                d();
              }
              return;
            }
            if (
              s != null &&
              (i = s.verification) !== null &&
              i !== undefined &&
              i.key
            ) {
              x(s.verification.key);
              p.input.onFocus();
            }
          } catch (e) {
            g(false);
            return;
          }
          g(false);
        };
        const j = (e) => !!e.error && !!e.touched && !!b.current && !v;
        return (0, u.jsxs)(I.Z, {
          stretched: true,
          borderWidth: "default",
          padding: 24,
          borderRadius: 24,
          children: [
            (0, u.jsxs)("div", {
              className: X,
              children: [
                (0, u.jsx)(w.x, {
                  typography: "paragraph-2-regular",
                  children: a[je],
                }),
                (0, u.jsx)(fe.I, {
                  children: (0, u.jsx)("button", {
                    type: "button",
                    style: {
                      width: "100%",
                    },
                    "data-qa": "resume-remove-item",
                    onClick: () => {
                      e(false);
                      r(re.SEND);
                    },
                    children: (0, u.jsx)(me.mTT, {
                      initialColor: "secondary",
                      highlightedColor: "primary",
                    }),
                  }),
                }),
              ],
            }),
            (0, u.jsx)(s.X, {
              default: 16,
            }),
            (0, u.jsx)(
              o.gN,
              {
                name: "phone.verification_code",
                validate: (e) => (e ? (e.length < 4 ? "length" : y) : "empty"),
                render: ({ input: e, meta: r }) => {
                  const t = (0, u.jsx)(f.I, {
                    ...e,
                    size: "medium",
                    errorMessage: (0, u.jsx)(m, {
                      dataQa: "phone-verification-error",
                      meta: r,
                      trlPrefix: "phone.verification",
                      shouldErrorBeVisible: j,
                      refreshError: true,
                    }),
                    maxLength: 4,
                    autoFocus: true,
                    placeholder: a[Ee],
                    invalid: j(r),
                    onKeyPress: (e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        e.stopPropagation();
                        S();
                      }
                    },
                  });
                  const n = (0, u.jsx)("div", {
                    children: (0, u.jsx)(T.z, {
                      stretched: c,
                      mode: "primary",
                      size: "medium",
                      onClick: S,
                      style: "accent",
                      children: a[Se],
                    }),
                  });
                  const o = (0, u.jsx)(be, {
                    login: h,
                    otpType: "phone",
                    recaptchaClassName: i,
                  });
                  if (c) {
                    return (0, u.jsxs)(he.z, {
                      default: 16,
                      children: [
                        t,
                        (0, u.jsxs)(he.z, {
                          default: 12,
                          children: [n, o],
                        }),
                      ],
                    });
                  } else {
                    return (0, u.jsxs)(he.z, {
                      default: 16,
                      children: [
                        (0, u.jsxs)(pe.q, {
                          default: 12,
                          children: [t, n],
                        }),
                        o,
                      ],
                    });
                  }
                },
              },
              y ? "bad" : "good",
            ),
          ],
        });
      };
      Ce.displayName =
        "components/PhoneVerification/VerificationStep/VerificationStep";
      const ke = (0, i.Z)(Ce);
      const _e = ({
        setDisabled: e,
        onSuccessVerified: r,
        addVerifiedPhones: t,
        addNonVerifiablePhones: o,
        setNonVerifiableConfirm: i,
      }) => {
        const [s, a] = (0, n.useState)(re.SEND);
        const l = $;
        const d = (e) =>
          (0, u.jsx)(u.Fragment, {
            children: e,
          });
        if (s === re.SEND) {
          return d(
            (0, u.jsx)(ue, {
              setStep: a,
              setDisabled: e,
              addVerifiedPhones: t,
              addNonVerifiablePhones: o,
              setNonVerifiableConfirm: i,
              recaptchaClassName: l,
            }),
          );
        } else if (s === re.VERIFICATION) {
          return d(
            (0, u.jsx)(ke, {
              setStep: a,
              setDisabled: e,
              addVerifiedPhones: t,
              onSuccessVerified: r,
              recaptchaClassName: l,
            }),
          );
        } else {
          return null;
        }
      };
      _e.displayName = "components/PhoneVerification/index/PhoneVerification";
      const Ne = "profile.resume.field.phone.label";
      const Ae = ({
        phone: e,
        maxLength: r,
        trls: t,
        onChange: i,
        onSuccessVerified: h,
      }) => {
        (() => {
          const e = (0, a.X3)();
          (0, n.useEffect)(() => {
            if (!d) {
              d = true;
              l.e.getPhoneCode().then((r) => {
                e({
                  code: r.phoneCode,
                });
              });
            }
          }, [e]);
        })();
        (() => {
          const e = (0, a.X3)();
          (0, n.useEffect)(() => {
            if (!c) {
              c = true;
              l.e.getAllowedSmsCountries().then((r) => {
                e({
                  allowedSMSCountries: r.codes,
                });
              });
            }
          }, [e]);
        })();
        const { error: p, size: f } = (0, a.nu)();
        const [v, g] = (0, n.useState)({});
        const [y, x] = (0, n.useState)({});
        const [b, j] = (0, n.useState)(false);
        const [E, C] = (0, n.useState)(false);
        const [k, _] = (0, n.useState)({});
        const [N, A] = (0, n.useState)({});
        const M = (e, r) =>
          (e === (r == null ? undefined : r.initial) &&
            ((r == null ? undefined : r.verified) ||
              r == null ||
              !r.needVerification)) ||
          v.hasOwnProperty(e) ||
          y.hasOwnProperty(e);
        const R = (e, r) => {
          _((t) => ({
            ...t,
            [e]: r,
          }));
        };
        const L = (e, r, t) =>
          (t.error === ee && !!t.submitFailed) ||
          (e in y && !b) ||
          (t.visited && !M(e, r));
        const P = (e, r) => M(e, r);
        const w = (e) => {
          g((r) =>
            Object.keys(r)
              .concat(e)
              .reduce((e, r) => {
                e[r] = true;
                return e;
              }, {}),
          );
        };
        const I = (e) => {
          x((r) =>
            Object.keys(r)
              .concat(e)
              .reduce((e, r) => {
                e[r] = true;
                return e;
              }, {}),
          );
        };
        const T = (e) => {
          if (e.error === ee) {
            return e.submitFailed;
          }
          const { error: r, active: t, touched: n, submitFailed: o } = e;
          return (
            !!r &&
            (r === "tooLong" ||
              (["empty", "mincount"].includes(r) ? !t && n && o : !t && n))
          );
        };
        const O = p !== undefined;
        return (0, u.jsx)(o.gN, {
          name: "phone.formatted",
          validate: (...r) =>
            ((e, r, t, ...n) => {
              if (N[t]) {
                return N[t];
              } else if (k[t] !== undefined) {
                if ((o = k[t]) !== null && o !== undefined) {
                  o.then((e) => {
                    A((r) => ({
                      ...r,
                      [t]: e,
                    }));
                    _((e) => ({
                      ...e,
                      [t]: undefined,
                    }));
                  }).catch(() => {});
                }
                return k[t];
              } else if (t) {
                if (M(t, r)) {
                  return undefined;
                } else {
                  return ee;
                }
              } else {
                return "empty";
              }
              var o;
            })("cell", e, ...r),
          render: ({ input: n, meta: o }) =>
            (0, u.jsxs)("div", {
              children: [
                (0, u.jsx)(S, {
                  ...n,
                  onChange: (e) => {
                    if (i != null) {
                      i(e);
                    }
                    n.onChange(e);
                  },
                  size: f,
                  "data-qa": "resume-phone-cell_phone",
                  invalid: O || T(o),
                  disabled: E,
                  meta: {
                    ...o,
                    isAsyncValidate: !!k[n.value],
                  },
                  placeholder: t[Ne],
                  setAsyncError: R,
                  showMarkValid: P(n.value, e),
                  maxLength: r,
                  errorMessage: (0, u.jsxs)(u.Fragment, {
                    children: [
                      O &&
                        (0, u.jsx)(p, {
                          isMagritte: true,
                        }),
                      !O &&
                        (0, u.jsx)(m, {
                          dataQa: "phone-error",
                          meta: o,
                          trlPrefix: "phone.formatted",
                          refreshError: true,
                          shouldErrorBeVisible: T,
                        }),
                    ],
                  }),
                }),
                L(n.value, e, o) &&
                  (0, u.jsxs)(u.Fragment, {
                    children: [
                      (0, u.jsx)(s.X, {
                        default: 12,
                      }),
                      (0, u.jsx)(_e, {
                        setDisabled: (e) => C(e),
                        onSuccessVerified: h,
                        addVerifiedPhones: w,
                        addNonVerifiablePhones: I,
                        setNonVerifiableConfirm: (e) => j(e),
                      }),
                    ],
                  }),
              ],
            }),
        });
      };
      Ae.displayName =
        "PhoneField/components/PhoneCombinedField/PhoneCombinedField";
      const Me = (0, i.Z)(Ae);
    },
    81292: function (e, r, t) {
      t.d(r, {
        c: () => f,
      });
      var n = t(45144);
      var o = t(69675);
      var i = t(89156);
      var s = t(48867);
      var a = t(75790);
      var l = t(66802);
      const d = "g-hidden--KHrPTXtvYTQlRCmN";
      var c = t(9862);
      const u = "error.signup.captcha.invalid";
      let h = false;
      const p = ({
        isBot: e,
        siteKey: r,
        error: t,
        className: i,
        trls: s,
        verticalSpacing: p = 2,
      }) => {
        const m = (0, n.useRef)(null);
        const f = (0, n.useRef)(null);
        const v = (0, n.useRef)(null);
        const g = (0, n.useContext)(o.f);
        (0, n.useEffect)(() => {
          if (!e) {
            return;
          }
          ((e) => {
            if (h) {
              return;
            }
            const r = document.createElement("script");
            r.src = `https://recaptcha.net/recaptcha/api.js?render=explicit&hl=${e}&_=${Date.now()}`;
            document.body.appendChild(r);
            h = true;
          })(g);
          let t = setTimeout(() => {}, 0);
          const n = () => {
            var e;
            clearTimeout(t);
            if (
              (e = window.grecaptcha) !== null &&
              e !== undefined &&
              e.render
            ) {
              ((e, r, t, n) => {
                requestAnimationFrame(() => {
                  try {
                    if (n.current !== null) {
                      window.grecaptcha.reset(n.current);
                      return;
                    }
                    n.current = window.grecaptcha.render(e, {
                      sitekey: t,
                    });
                    r.classList.remove("g-hidden");
                  } catch (e) {}
                });
              })(f.current, m.current, r, v);
            } else {
              t = setTimeout(n, 300);
            }
          };
          n();
          return () => {
            clearTimeout(t);
          };
        }, [e, g, t, r]);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)("div", {
              ref: m,
              className: e ? "" : d,
              children: [
                (0, c.jsx)("input", {
                  type: "hidden",
                  name: "isBot",
                  value: e,
                }),
                (0, c.jsx)(a.X, {
                  default: p,
                }),
                (0, c.jsx)("div", {
                  ref: f,
                  className: i,
                }),
              ],
            }),
            t &&
              (0, c.jsx)(a.X, {
                default: p,
              }),
            t &&
              (0, c.jsx)(l.x, {
                style: "warning",
                children: s[u],
              }),
          ],
        });
      };
      p.displayName = "components/Recaptcha/index/Recaptcha";
      const m = (0, i.Z)(p);
      const f = (e) => {
        const r = (0, s.v)(({ recaptcha: e }) => e);
        const t = (0, n.useRef)(false);
        const o = (0, n.useRef)(false);
        (0, n.useEffect)(() => {
          var e;
          o.current =
            (e = (r == null ? undefined : r.isBot) && t.current) !== null &&
            e !== undefined &&
            e;
          t.current = (r == null ? undefined : r.isBot) || false;
        }, [r]);
        return (0, c.jsx)(m, {
          error: o.current,
          ...r,
          ...e,
        });
      };
      f.displayName = "components/Recaptcha/index/RecaptchaWrapper";
    },
    71243: function (e, r, t) {
      t.d(r, {
        S: () => n,
      });
      const n = {
        raw: "",
        city: "",
        type: "cell",
        number: "",
        comment: "",
        country: "",
        verified: false,
        formatted: "",
        needVerification: true,
      };
    },
    48799: function (e, r, t) {
      t.d(r, {
        HT: () => l,
        X3: () => c,
        nu: () => d,
      });
      var n = t(45144);
      var o = t(9325);
      var i = t(48867);
      const s = (0, t(61020).o)({
        initialState: {
          code: "",
          size: "large",
          allowedSMSCountries: [],
        },
        reducers: {
          phoneStoreChange: (e, { payload: r }) => ({
            ...e,
            ...r,
          }),
        },
      });
      const { phoneStoreChange: a } = s.actions;
      const l = s.reducer;
      const d = () => (0, i.v)((e) => e.phoneStore);
      const c = () => {
        const e = (0, o.useDispatch)();
        return (0, n.useCallback)((r) => e(a(r)), [e]);
      };
    },
    49314: function (e, r, t) {
      t.d(r, {
        S: () => d,
        k: () => a,
      });
      var n = t(48867);
      var o = t(97554);
      var i = t(7206);
      var s = t(9862);
      const a = (e, r) => `${e[0]}${r[0]}`;
      const l = "profile-avatar";
      const d = ({ size: e = 40, image: r, gender: t, letters: a }) => {
        const d = (0, n.v)((e) => e.config.imageResizingCdnHost);
        if (r) {
          return (0, s.jsx)(o.q, {
            containerDataQa: `${l}-image`,
            size: e,
            image: `${d}${r}`,
            mode: "image",
            style: "color-2",
            letters: a,
            "aria-label": "profile-avatar",
          });
        }
        if ((0, i.WI)(t)) {
          const r = t === "male" ? "male" : "female";
          return (0, s.jsx)(o.q, {
            containerDataQa: `${l}-gender-${r}`,
            size: e,
            mode: "placeholder",
            "aria-label": "profile-avatar",
            placeholder: r,
          });
        }
        return (0, s.jsx)(o.q, {
          containerDataQa: `${l}-base`,
          size: e,
          style: "color-2",
          letters: a,
          "aria-label": "profile-avatar",
          mode: "letters",
        });
      };
      d.displayName = "profile/Avatar/index/ProfileAvatar";
    },
    51207: function (e, r, t) {
      t.d(r, {
        k: () => g,
      });
      var n = t(9325);
      var o = t(48867);
      var i = t(89156);
      var s = t(82128);
      var a = t(91315);
      var l = t(90622);
      var d = t(43472);
      var c = t(18445);
      var u = t(82371);
      var h = t(9862);
      const p = "profile.resume.editor.question";
      const m = "profile.resume.editor.question.cancel";
      const f = "profile.resume.editor.question.approve";
      const v = ({ trls: e }) => {
        const r = (0, n.useDispatch)();
        const { open: t } = (0, o.v)(c.RS);
        const i = (0, l.s)();
        return (0, h.jsx)(a.n, {
          hhtmSource: "unsaved_changes_alert",
          title: e[p],
          icon: (0, h.jsx)(s.uvJ, {}),
          layout: "vertical",
          "data-qa": "profile-editor-close-confirm-alert",
          buttons: [
            {
              mode: "primary",
              style: "accent",
              stretched: true,
              onClick: () => {
                r(
                  (0, u.TM)({
                    open: false,
                  }),
                );
                r(
                  (0, d.xU)({
                    onSuccess: i,
                    hideSuccessSnackbar: true,
                  }),
                );
              },
              analyticType: "primary",
              children: e[f],
            },
            {
              mode: "secondary",
              style: "accent",
              stretched: true,
              onClick: () => {
                r(
                  (0, u.TM)({
                    open: false,
                  }),
                );
                r((0, u.e)(false));
                if (i) {
                  i();
                }
              },
              analyticType: "secondary",
              children: e[m],
            },
          ],
          visible: t,
          onClose: () =>
            r(
              (0, u.TM)({
                open: false,
              }),
            ),
        });
      };
      v.displayName = "profile/Profile/EditorCloseConfirm/EditorCloseConfirm";
      const g = (0, i.Z)(v);
    },
    9533: function (e, r, t) {
      t.d(r, {
        v: () => d,
      });
      var n = t(48867);
      var o = t(89156);
      var i = t(30577);
      var s = t(9862);
      const a = "profile.resume.field.education.level";
      const l = ({ trls: e }) => {
        const t = (0, n.v)((e) => {
          return e.dictionaries.educationLevels ?? [];
        });
        const o = (0, n.v)((e) => e.profile.fields.educationLevel);
        const l = t.find((e) => {
          var r;
          return (
            e.value ===
            (o == null || (r = o[0]) === null || r === undefined
              ? undefined
              : r.string)
          );
        })?.text;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i.j, {
              type: "subtitle",
              style: "secondary",
              children: e[a],
            }),
            (0, s.jsx)(i.j, {
              type: "title",
              children: l,
            }),
          ],
        });
      };
      l.displayName =
        "Education/Card/DefaultEducationCell/DefaultEducationCell";
      const d = (0, o.Z)(l);
    },
    24379: function (e, r, t) {
      t.d(r, {
        C: () => a,
      });
      var n = t(48867);
      var o = t(30577);
      var i = t(59031);
      var s = t(9862);
      const a = ({ education: e, extended: r = false }) => {
        const t = (0, n.v)((e) => {
          var r;
          if (
            (r = e.dictionaries.educationLevels) === null ||
            r === undefined ||
            (r = r.find((e) => e.value === i.R)) === null ||
            r === undefined
          ) {
            return undefined;
          } else {
            return r.text;
          }
        });
        if ("universityId" in e) {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o.j, {
                type: "title",
                children: e.name,
              }),
              r &&
                (0, s.jsx)(o.j, {
                  type: "subtitle",
                  style: "secondary",
                  children: e.result || e.organization,
                }),
              (0, s.jsx)(o.j, {
                type: "subtitle",
                style: "tertiary",
                children: `${e.year} · ${e.educationLevel.text}`,
              }),
            ],
          });
        } else {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o.j, {
                type: "title",
                children: e.name,
              }),
              (0, s.jsx)(o.j, {
                type: "subtitle",
                style: "tertiary",
                children: t,
              }),
            ],
          });
        }
      };
      a.displayName = "Education/Card/EducationText/EducationText";
    },
    61916: function (e, r, t) {
      t.d(r, {
        B: () => a,
      });
      var n = t(45144);
      var o = t(9325);
      var i = t(18445);
      var s = t(58694);
      const a = () => {
        const e = (0, o.useSelector)(i.t6);
        const r = (0, o.useSelector)((0, i.mC)("primaryEducation"));
        const t = (0, o.useSelector)((0, i.mC)("elementaryEducation"));
        const a = (0, o.useSelector)(s.Pr);
        const l = (0, o.useSelector)(s.Tj);
        const d = (0, n.useMemo)(
          () =>
            e === "primary"
              ? Boolean(
                  (r == null ? undefined : r.maxcount) &&
                  l.length >= r.maxcount,
                )
              : Boolean(
                  (t == null ? undefined : t.maxcount) &&
                  a.length >= t.maxcount,
                ),
          [e, r, t, l, a],
        );
        const c = (0, n.useMemo)(() => {
          const e = [];
          l.forEach((r, t) => {
            e.push({
              type: "primary",
              index: t,
              education: r,
            });
          });
          a.forEach((r, t) => {
            e.push({
              type: "elementary",
              index: t,
              education: r,
            });
          });
          return e;
        }, [l, a]);
        const u = (0, n.useMemo)(() => c.slice(0, 4), [c]);
        const h = (0, n.useMemo)(() => c.length > 4, [c]);
        return {
          allEducation: c,
          visibleEducation: u,
          moreThanMax: h,
          totalCount: c.length,
          isLimitExceeded: d,
        };
      };
    },
    32984: function (e, r, t) {
      t.d(r, {
        l: () => Se,
      });
      var n = t(45144);
      var o = t(9325);
      var i = t(24488);
      var s = t(47236);
      var a = t.n(s);
      var l = t(48867);
      var d = t(89156);
      var c = t(87343);
      var u = t(61384);
      var h = t(31537);
      var p = t(1800);
      var m = t(82128);
      var f = t(63144);
      var v = t(33458);
      var g = t(85489);
      var y = t(79756);
      var x = t(47997);
      var b = t(31065);
      var S = t(46192);
      var j = t(83668);
      var E = t(25142);
      var C = t.n(E);
      var k = t(51851);
      var _ = t.n(k);
      var N = t(4928);
      var A = t.n(N);
      var M = t(39263);
      var R = t.n(M);
      var L = t(54232);
      var P = t.n(L);
      var w = t(56468);
      var I = t.n(w);
      var T = t(34873);
      var O = t.n(T);
      var V = t(95672);
      const D = {
        [V.QZ.MyResumesDesktop]: "RESUME_LIST_LARGE",
        [V.QZ.MyResumesXsModal]: "RESUME_LIST_XS",
      };
      const B = (e) => (((e) => e in D)(e) ? D[e] : "RESUME_LIST_LARGE");
      const U = () => {
        P()();
      };
      const Z = (e, r, t = []) => {
        const n = t.map((e) => e.employerId).join(",");
        const o = t
          .filter((e) => Boolean(e.vacancyId))
          .map((e) => e.vacancyId)
          .join(",");
        A()(e, {
          type: r,
          employerIdList: n,
          vacancyIdList: o,
        });
      };
      var q = t(21440);
      const F = async (e) =>
        (
          await q.Z.get("/profile/shards/negotiations/possible_job_offers", {
            params: {},
            signal: e,
          })
        ).data;
      const H = {
        updateJobSearchStatus: async (e) => {
          await q.Z.post(
            "/profile/shards/user_statuses/job_search_status",
            undefined,
            {
              params: e,
            },
          );
          return true;
        },
      };
      var z = t(26945);
      const $ = (e, r, t) => async (n) => {
        ((e, r) => {
          C()({
            jobSearchStatus: r.toUpperCase(),
            formSource: B(e),
          });
        })(e, r);
        try {
          await H.updateJobSearchStatus({
            status: r,
          });
          n((0, z.HG)(r));
          if (r === V.Lx.AcceptedJobOffer) {
            n((0, z.Rk)(true));
          }
          if (r === V.Lx.HasJobOffer) {
            n((0, z.Rk)(true));
          }
        } catch (e) {
          if (t != null) {
            t();
          }
          n(
            (0, j.OV)({
              kind: "alert",
              text: "defaultError",
            }),
          );
        }
      };
      var G = t(68966);
      var W = t(18566);
      var K = t(81858);
      var X = t(58473);
      var J = t(4233);
      var Y = t(65007);
      var Q = t(97554);
      var ee = t(30577);
      var re = t(9862);
      const te = [V.nJ.VacancyPage, V.nJ.Medium];
      const ne = ({ jobSearchStatus: e, selectedOffers: r, addOffer: t }) => {
        const o = (0, n.useRef)(null);
        const i = (0, l.v)(G.hG);
        const s = (0, n.useMemo)(() => r.map(({ vacancyId: e }) => e), [r]);
        const { isMobile: a } = (0, u.G)();
        const d = e === V.Lx.AcceptedJobOffer ? "radio" : "checkbox";
        (0, n.useEffect)(() => {
          if (o.current) {
            U();
            Z(o.current, "full", i);
          }
        }, [i]);
        if (i.length === 0) {
          return null;
        } else {
          return (0, re.jsx)("div", {
            ref: o,
            children: (0, re.jsx)(W.z, {
              default: 12,
              children: i.map((e) => {
                const n = ((e) => {
                  if (!e) {
                    return null;
                  }
                  const r = e.find((e) => te.includes(e["@type"]));
                  return (r == null ? undefined : r["@url"]) || null;
                })(e.logos?.logo);
                const o = s.includes(e.vacancyId);
                const i =
                  d === "radio"
                    ? (0, re.jsx)(K.Y, {
                        checked: o,
                        readOnly: true,
                      })
                    : (0, re.jsx)(X.X, {
                        checked: o,
                        readOnly: true,
                      });
                return (0, re.jsx)(
                  J.g,
                  {
                    padding: 16,
                    borderRadius: 12,
                    type: d,
                    checked: o,
                    onChange: () => {
                      t(e.employerId, e.vacancyId || 0, e.resumeId || 0);
                    },
                    children: (0, re.jsxs)(Y.b, {
                      right: a ? i : undefined,
                      left: a ? undefined : i,
                      slot: (0, re.jsx)(Q.q, {
                        mode: n ? "image" : "placeholder",
                        image: n || "",
                        size: 48,
                        placeholder: "city",
                        shapeCircle: true,
                        "aria-label": e.name,
                      }),
                      children: [
                        (0, re.jsx)(ee.j, {
                          children: e.name,
                        }),
                        (0, re.jsx)(ee.j, {
                          type: "subtitle",
                          children: e.vacancyNames.join(", "),
                        }),
                      ],
                    }),
                  },
                  e.vacancyId,
                );
              }),
            }),
          });
        }
      };
      ne.displayName = "PostChangeModal/steps/ChooseOfferStep/ChooseOfferStep";
      const oe = {
        [V.v1.WithoutResponse]:
          "jobSearchStatus.postChangeModal.notOnHH.reason.withoutResponse",
        [V.v1.ContactedByMyself]:
          "jobSearchStatus.postChangeModal.notOnHH.reason.contactedByMyself",
        [V.v1.Other]: "jobSearchStatus.postChangeModal.notOnHH.reason.other",
      };
      const ie = [V.v1.WithoutResponse, V.v1.ContactedByMyself, V.v1.Other];
      const se = ({ trls: e, checkedValue: r, onChange: t }) => {
        const o = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          if (o.current) {
            U();
            Z(o.current, "nothing");
          }
        }, []);
        const { isMobile: i } = (0, u.G)();
        return (0, re.jsx)("div", {
          ref: o,
          children: (0, re.jsx)(W.z, {
            default: 12,
            children: ie.map((n) =>
              (0, re.jsx)(
                J.g,
                {
                  padding: 16,
                  borderRadius: 12,
                  checked: r === n,
                  type: "radio",
                  "data-qa": `search-status-choose-reason-${n}`,
                  value: n,
                  flexible: true,
                  onChange: (e) => t(e.target.value),
                  children: (0, re.jsx)(Y.b, {
                    right: i
                      ? (0, re.jsx)(K.Y, {
                          checked: r === n,
                          readOnly: true,
                        })
                      : undefined,
                    left: i
                      ? undefined
                      : (0, re.jsx)(K.Y, {
                          checked: r === n,
                          readOnly: true,
                        }),
                    children: (0, re.jsx)(ee.j, {
                      children: e[oe[n]],
                    }),
                  }),
                },
                n,
              ),
            ),
          }),
        });
      };
      se.displayName =
        "PostChangeModal/steps/ChooseReasonStep/ChooseReasonStep";
      const ae = (0, d.Z)(se);
      const le = {
        [V.fo.FoundOnHH]: "jobSearchStatus.postChangeModal.foundOnHH.yes",
        [V.fo.NotFoundOnHH]: "jobSearchStatus.postChangeModal.foundOnHH.no",
      };
      const de = [V.fo.FoundOnHH, V.fo.NotFoundOnHH];
      const ce = ({ trls: e, checkedValue: r, onChange: t }) => {
        const { isMobile: n } = (0, u.G)();
        return (0, re.jsx)(W.z, {
          default: 12,
          children: de.map((o) =>
            (0, re.jsx)(
              J.g,
              {
                padding: 16,
                borderRadius: 12,
                type: "radio",
                value: o,
                checked: r === o,
                labelDataQa: `search-status-found-on-hh-${o}`,
                flexible: true,
                onChange: (e) => t(e.target.value),
                children: (0, re.jsx)(Y.b, {
                  right: n
                    ? (0, re.jsx)(K.Y, {
                        checked: r === o,
                        readOnly: true,
                      })
                    : undefined,
                  left: n
                    ? undefined
                    : (0, re.jsx)(K.Y, {
                        checked: r === o,
                        readOnly: true,
                      }),
                  children: (0, re.jsx)(ee.j, {
                    children: e[le[o]],
                  }),
                }),
              },
              o,
            ),
          ),
        });
      };
      ce.displayName = "PostChangeModal/steps/FoundOnHHStep/FoundOnHHStep";
      const ue = (0, d.Z)(ce);
      const he = (e, r, t, n, o) => {
        const i = ((e) =>
          e === V.Lx.HasJobOffer ? V.Lx.HasJobOffer : "others")(t);
        if (e === V.L7.FoundOnHHStep) {
          return n[o.title[V.L7.FoundOnHHStep][i]].replace("{0}", r);
        } else {
          return n[o.title[e][i]];
        }
      };
      const pe = {
        title: {
          [V.L7.FoundOnHHStep]: {
            [V.Lx.HasJobOffer]:
              "jobSearchStatus.postChangeModal.step.foundOnHH.has_job_offer",
            others: "jobSearchStatus.postChangeModal.step.foundOnHH",
          },
          [V.L7.ChooseOfferStep]: {
            [V.Lx.HasJobOffer]:
              "jobSearchStatus.postChangeModal.step.ChooseOfferStep.has_job_offer",
            others:
              "jobSearchStatus.postChangeModal.step.ChooseOfferStep.others",
          },
          [V.L7.ChooseReasonStep]: {
            [V.Lx.HasJobOffer]:
              "jobSearchStatus.postChangeModal.step.ChooseOfferStep.has_job_offer",
            others:
              "jobSearchStatus.postChangeModal.step.ChooseOfferStep.others",
          },
        },
        description: {
          [V.L7.ChooseReasonStep]:
            "jobSearchStatus.postChangeModal.notOnHH.description",
        },
        buttons: {
          save: "jobSearchStatus.postChangeModal.footer.save",
          anotherCompany:
            "jobSearchStatus.postChangeModal.footer.anotherCompany",
        },
        replyThanksText: "jobSearchStatus.postChangeModal.replyThanks.text",
      };
      const me = ({ trls: e }) => {
        const [r, t] = (0, n.useState)(null);
        const [i, s] = (0, n.useState)(null);
        const [a, d] = (0, n.useState)([]);
        const c = (0, o.useDispatch)();
        const p = (0, l.v)(G.vO);
        const E = (0, l.v)(G.h9);
        const C = (0, l.v)(G.fn);
        const k = (0, l.v)(G.mQ);
        const N = (0, S.rw)();
        const { isMobile: A } = (0, u.G)();
        const M = () => {
          c((0, z.Rk)(false));
        };
        const L = () => {
          M();
          c(
            (0, j.OV)({
              kind: "status",
              customText: e[pe.replyThanksText],
            }),
          );
        };
        const P = (e) => {
          if (e) {
            ((e) => {
              I()({
                offerFromHH: e === V.fo.FoundOnHH,
              });
            })(e);
            if (e === V.fo.NotFoundOnHH) {
              L();
            } else {
              c(async (e) => {
                e((0, z.sM)(true));
                try {
                  const r = await F();
                  if (r.possibleJobOffers && r.possibleJobOffers.length !== 0) {
                    e((0, z.U$)(V.L7.ChooseOfferStep));
                    e((0, z.Qr)(r.possibleJobOffers));
                  } else {
                    e((0, z.U$)(V.L7.ChooseReasonStep));
                  }
                } catch (e) {
                  console.log(e);
                } finally {
                  e((0, z.sM)(false));
                }
              });
            }
          }
        };
        const w = (e) => {
          if (e) {
            ((e) => {
              R()({
                type: e,
              });
            })(e);
            L();
          }
        };
        const T = (e) => {
          e.forEach(({ employerId: e, vacancyId: r, resumeId: t }) => {
            (({
              employerId: e,
              vacancyId: r,
              resumeId: t,
              jobSearchStatus: n,
              type: o,
            }) => {
              _()({
                type: o,
                employerId: String(e),
                vacancyId: String(r),
                resumeId: String(t),
                jobSearchStatus: n.toUpperCase(),
              });
            })({
              employerId: e,
              vacancyId: r,
              resumeId: t,
              jobSearchStatus: C,
              type: "full",
            });
          });
          L();
        };
        (0, n.useEffect)(() => {
          if (E) {
            O()();
          } else {
            t(null);
            s(null);
            d([]);
            c((0, z.U$)(V.L7.FoundOnHHStep));
          }
        }, [c, E]);
        const D = {
          [V.L7.FoundOnHHStep]: {
            content: (0, re.jsx)(ue, {
              checkedValue: r,
              onChange: (e) => t(e),
            }),
            primaryActions: (0, re.jsx)(f.z, {
              mode: "primary",
              style: "accent",
              loading: k,
              "data-qa": "search-status-found-on-hh-save",
              onClick: () => {
                P(r);
              },
              children: e[pe.buttons.save],
            }),
          },
          [V.L7.ChooseReasonStep]: {
            content: (0, re.jsx)(ae, {
              checkedValue: i,
              onChange: (e) => s(e),
            }),
            primaryActions: (0, re.jsx)(f.z, {
              mode: "primary",
              style: "accent",
              "data-qa": "search-status-choose-reason-save",
              onClick: () => w(i),
              children: e[pe.buttons.save],
            }),
          },
          [V.L7.ChooseOfferStep]: {
            content: (0, re.jsx)(ne, {
              jobSearchStatus: C,
              selectedOffers: a,
              addOffer: (e, r, t) => {
                if (C === V.Lx.AcceptedJobOffer) {
                  d([
                    {
                      employerId: e,
                      vacancyId: r,
                      resumeId: t,
                    },
                  ]);
                  return;
                }
                let n;
                n = a.map((e) => e.vacancyId).includes(r)
                  ? a.filter((e) => e.vacancyId !== r)
                  : [
                      ...a,
                      {
                        employerId: e,
                        vacancyId: r,
                        resumeId: t,
                      },
                    ];
                d(n);
              },
            }),
            primaryActions: (0, re.jsx)(f.z, {
              mode: "primary",
              style: "accent",
              disabled: !a.length,
              onClick: () => {
                T(a);
              },
              children: e[pe.buttons.save],
            }),
            secondaryActions: (0, re.jsx)(f.z, {
              mode: "tertiary",
              style: "accent",
              onClick: L,
              children: e[pe.buttons.anotherCompany],
            }),
          },
        };
        const B = D[p].content;
        const U = D[p].primaryActions;
        const Z = D[p].secondaryActions;
        const q = he(p, N, C, e, pe);
        const H = ((e, r, t, n) =>
          e === V.L7.ChooseReasonStep
            ? t[n.description[e]].replace("{0}", r)
            : null)(p, N, e, pe);
        return (0, re.jsxs)(re.Fragment, {
          children: [
            (0, re.jsx)(v.u, {
              visible: E && !A,
              title: (0, re.jsx)("span", {
                "data-qa": "search-status-modal-title",
                children: q,
              }),
              titleDescription: H,
              footer: (0, re.jsx)(g.o, {
                primaryActions: U,
                secondaryActions: Z,
              }),
              titleDescriptionStyle: "secondary",
              onClose: M,
              actions: (0, re.jsx)(y.a, {
                "data-qa": "search-status-modal-close",
                mode: "secondary",
                onClick: M,
                icon: m.Cs7,
              }),
              "data-qa": "profile-job-search-status-post-change-modal",
              children: B,
            }),
            (0, re.jsx)(x.R, {
              visible: E && A,
              onClose: M,
              "data-qa": "profile-job-search-status-post-change-bottom-sheet",
              header: (0, re.jsx)(h.v, {
                title: q,
                subtitle: H,
                right: (0, re.jsx)(m.Cs7, {
                  "data-qa": "search-status-modal-close",
                  onClick: M,
                }),
                size: "large",
              }),
              footer: (0, re.jsxs)(b.W, {
                children: [U, Z],
              }),
              children: B,
            }),
          ],
        });
      };
      me.displayName = "JobSearchStatus/PostChangeModal/index/PostChangeModal";
      const fe = (0, d.Z)(me);
      const ve = [
        V.Lx.Unknown,
        V.Lx.ActiveSearch,
        V.Lx.LookingForOffers,
        V.Lx.HasJobOffer,
        V.Lx.AcceptedJobOffer,
        V.Lx.NotLookingForJob,
      ];
      const ge = "profile.jobSearchStatus.current.label";
      const ye = "profile.jobSearchStatus.current.subtitle";
      const xe = {
        [V.Lx.Unknown]: "profile.jobSearchStatus.current.unknown",
        [V.Lx.ActiveSearch]: "profile.jobSearchStatus.current.active_search",
        [V.Lx.LookingForOffers]:
          "profile.jobSearchStatus.current.looking_for_offers",
        [V.Lx.HasJobOffer]: "profile.jobSearchStatus.current.has_job_offer",
        [V.Lx.AcceptedJobOffer]:
          "profile.jobSearchStatus.current.accepted_job_offer",
        [V.Lx.NotLookingForJob]:
          "profile.jobSearchStatus.current.not_looking_for_job",
      };
      const be = ({ trls: e, renderTrigger: r }) => {
        const t = (0, o.useDispatch)();
        const s = (0, l.v)(G.fn);
        const [d, f] = (0, n.useState)(s);
        const v = (0, n.useMemo)(
          () =>
            ve.map((r) => ({
              text: e[xe[r]],
              value: r,
            })),
          [e],
        );
        const g = (0, c.oQ)(v.filter((e) => e.value !== V.Lx.Unknown));
        const { isXS: y } = (0, u.G)();
        const x = y ? V.QZ.MyResumesXsModal : V.QZ.MyResumesDesktop;
        const b = (0, S.rw)();
        const j = e[ge].replace("{0}", b);
        return (0, re.jsxs)(re.Fragment, {
          children: [
            (0, re.jsx)(p.P, {
              type: "radio",
              name: "job_search_status",
              triggerProps: {
                size: "medium",
                stretched: true,
              },
              value: (0, c.j_)(d, v),
              onChange: (e) => {
                const r = e.value;
                f(r);
              },
              onSelectOption: (e) => {
                const r = e[0].value;
                t($(x, r, () => f(s)));
              },
              dataProvider: g,
              "data-qa": "profile-job-search-status-select",
              renderTrigger: ({ ref: e, onChange: t }) =>
                (0, re.jsx)("div", {
                  ref: e,
                  children: (0, re.jsx)(i.ElementShownAnchor, {
                    fn: a(),
                    children: r(() => {
                      t(false);
                    }),
                  }),
                }),
              renderHeader: ({ onCloseBottomSheet: r }) =>
                (0, re.jsx)(h.v, {
                  size: "large",
                  title: j,
                  subtitle: e[ye],
                  right: (0, re.jsx)(m.Cs7, {
                    onClick: r,
                  }),
                  "data-qa": "profile-job-search-status-nav-bar",
                }),
            }),
            (0, re.jsx)(fe, {}),
          ],
        });
      };
      be.displayName = "JobSearchStatus/StatusSelect/index/StatusSelect";
      const Se = (0, d.Z)(be);
    },
    86953: function (e, r, t) {
      t.d(r, {
        L: () => $,
      });
      var n = t(45144);
      var o = t(9325);
      var i = t(48867);
      var s = t(89156);
      var a = t(22661);
      var l = t(91315);
      var d = t(43094);
      var c = t(69931);
      var u = t(51520);
      var h = t(43472);
      var p = t(51987);
      var m = t(21820);
      var f = t(18445);
      var v = t(58694);
      var g = t(87343);
      var y = t(61384);
      var x = t(18566);
      var b = t(31818);
      var S = t(66802);
      var j = t(75790);
      var E = t(58927);
      var C = t(83059);
      var k = t(49837);
      var _ = t(46337);
      var N = t(33081);
      var A = t(30591);
      const M = "stretched--Oxdu0GQLWu85Ry6I";
      var R = t(9862);
      const L = {
        degree: "profile.resume.editor.languages.degree.placeholder",
        languages: "profile.resume.editor.languages.placeholder",
      };
      const P = "profile.resume.editor.languages.hint";
      const w = {
        REQUIRED: "profile.editor.field.error.required",
      };
      const I = ({ trls: e, onSelect: r, isNative: t, visible: o }) => {
        (0, k.w)("profile_language_foreign_add", o && !t);
        const { isMobile: s } = (0, y.G)();
        const a = (0, i.v)(f.av);
        const l = (0, i.v)(m.k);
        const d = (0, _.wB)(w, e);
        const c = (0, _.L4)("language", d);
        const [u, h] = (0, n.useState)({
          degree: "",
          degreeText: "",
          title: "",
        });
        const p = (0, i.v)(C.bz);
        const v = (0, i.v)(C.o9);
        const { languagesItems: I, degreeItems: T } = (0, A.n)(u, l);
        const O = s ? x.z : b.q;
        const V =
          typeof u.id != "number"
            ? c
            : {
                errorMessage: "",
                invalid: false,
              };
        const D =
          u.degree === ""
            ? c
            : {
                errorMessage: "",
                invalid: false,
              };
        return (0, R.jsxs)("div", {
          "data-qa": "profile-language-add-form",
          children: [
            !t &&
              (0, R.jsx)(S.x, {
                style: "secondary",
                typography: "paragraph-1-regular",
                children: e[P],
              }),
            (0, R.jsx)(j.X, {
              default: 20,
            }),
            (0, R.jsxs)(O, {
              default: s ? 16 : 12,
              children: [
                (0, R.jsx)("div", {
                  className: M,
                  "data-qa": "profile-language-add-form-language",
                  children: (0, R.jsx)(E.o, {
                    type: "radio",
                    hhtmSource: t
                      ? "profile_language_native_select"
                      : "profile_language_foreign_select",
                    name: "language",
                    triggerProps: {
                      size: "large",
                      disabled: a,
                      label: e[L.languages],
                      elevateLabel: true,
                      stretched: true,
                      errorMessage: V.errorMessage,
                      invalid: V.invalid,
                    },
                    items: I,
                    value: (0, g.j_)(String(u.id), I),
                    searchable: true,
                    bottomSheetHeight: "content",
                    onChange: (e) => {
                      const i = e.value;
                      const s = {
                        ...u,
                        id: Number(i),
                        title: p.find((e) => String(e.id) === i)?.title ?? "",
                      };
                      if (t) {
                        s.degree = N.A;
                      }
                      r(s);
                      h(s);
                    },
                  }),
                }),
                !t &&
                  (0, R.jsx)("div", {
                    className: M,
                    "data-qa": "profile-language-add-form-degree",
                    children: (0, R.jsx)(E.o, {
                      type: "radio",
                      hhtmSource: "profile_language_foreign_level_select",
                      name: "degree",
                      triggerProps: {
                        size: "large",
                        disabled: a,
                        label: e[L.degree],
                        elevateLabel: true,
                        stretched: true,
                        errorMessage: D.errorMessage,
                        invalid: D.invalid,
                      },
                      items: T,
                      value: (0, g.j_)(String(u.degree), T),
                      searchable: true,
                      bottomSheetHeight: "content",
                      onChange: (e) => {
                        const o = e.value;
                        const i = {
                          ...u,
                          degree: o,
                          degreeText: v.find((e) => e.degree === o)?.text ?? "",
                        };
                        r(i);
                        h(i);
                      },
                    }),
                  }),
              ],
            }),
          ],
        });
      };
      I.displayName = "Languages/Editor/AddLanguage/AddLanguage";
      const T = (0, s.Z)(I);
      const O = {
        degree: "profile.resume.editor.languages.degree.placeholder",
        languages: "profile.resume.editor.languages.placeholder",
      };
      const V = ({ trls: e, native: r, onChange: t, visible: o }) => {
        (0, k.w)("profile_language_foreign_edit", o && !r);
        const s = (0, i.v)(f.S$);
        const { isMobile: a } = (0, y.G)();
        const l = (0, i.v)(f.av);
        const d = (0, i.v)(m.k);
        const c = (0, i.v)(C.bz);
        const u = (0, i.v)(C.o9);
        const [h, p] = (0, n.useState)(d[s ?? 0]);
        const { languagesItems: v, degreeItems: S } = (0, A.n)(h, d);
        const j = a ? x.z : b.q;
        return (0, R.jsx)("div", {
          "data-qa": "profile-language-edit-form",
          children: (0, R.jsxs)(j, {
            default: a ? 16 : 12,
            children: [
              (0, R.jsx)("div", {
                className: M,
                "data-qa": "profile-language-edit-form-language",
                children: (0, R.jsx)(E.o, {
                  type: "radio",
                  hhtmSource: r
                    ? "profile_language_native_select"
                    : "profile_language_foreign_select",
                  name: "languages",
                  triggerProps: {
                    size: "large",
                    disabled: l,
                    label: e[O.languages],
                    elevateLabel: true,
                    stretched: true,
                  },
                  value: (0, g.j_)(String(h.id), v),
                  searchable: true,
                  items: v,
                  bottomSheetHeight: "content",
                  onChange: (e) => {
                    const o = e.value;
                    const i = {
                      ...h,
                      id: parseInt(o, 10),
                      title: c.find((e) => String(e.id) === o)?.title ?? "",
                    };
                    t(i);
                    p(i);
                  },
                }),
              }),
              !r &&
                (0, R.jsx)("div", {
                  className: M,
                  "data-qa": "profile-language-edit-form-degree",
                  children: (0, R.jsx)(E.o, {
                    type: "radio",
                    hhtmSource: "profile_language_foreign_level_select",
                    name: "degree",
                    triggerProps: {
                      size: "large",
                      label: e[O.degree],
                      elevateLabel: true,
                      disabled: l,
                      stretched: true,
                    },
                    items: S,
                    value: (0, g.j_)(String(h.degree), S),
                    bottomSheetHeight: "content",
                    searchable: true,
                    onChange: (e) => {
                      const o = e.value;
                      const i = {
                        ...h,
                        degree: o,
                        degreeText: u.find((e) => e.degree === o)?.text ?? "",
                      };
                      t(i);
                      p(i);
                    },
                  }),
                }),
            ],
          }),
        });
      };
      V.displayName = "Languages/Editor/EditLanguage/EditLanguage";
      const D = (0, s.Z)(V);
      var B = t(77916);
      const U = "profile.resume.card.languages.question";
      const Z = "profile.resume.editor.languages.placeholder";
      const q = "profile.resume.editor.languages.question.cancel";
      const F = "profile.resume.editor.languages.question.approve";
      const H = "profile.resume.editor.languages.native.title";
      const z = ({ trls: e }) => {
        const r = (0, o.useDispatch)();
        const t = (0, i.v)(f.S$);
        const [s, g] = (0, n.useState)(false);
        const { value: y, onChange: x } = (0, p.H)("language");
        const b = (0, i.v)(f.av);
        const S = (0, i.v)(f.ZT);
        const j = (0, i.v)(m.k);
        const E = (0, i.v)(v.cG);
        const C = t != null ? j[t] : null;
        const k = (0, n.useMemo)(() => (0, B.tY)(C, j), [S, C]);
        const _ = (0, n.useMemo)(() => (0, B.k7)(C, j), [C, j]);
        const N = () => {
          d.s.getVerifiedSkills().then((e) => {
            r((0, c.wz)(e.items));
          });
        };
        const A = () => {
          g(false);
        };
        return (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsx)(a.U, {
              modalSize: k ? "medium" : "large",
              title: k ? e[H] : e[Z],
              loading: b,
              visible: S,
              onSave: () =>
                r(
                  (0, h.xU)({
                    hideSuccessSnackbar: true,
                    onSuccess: N,
                  }),
                ),
              onClose: () => r((0, h.K7)()),
              hasCancelBtn: true,
              onHeaderDelete: _
                ? () => {
                    if (C) {
                      (0, u.DR)(C.title, C.degreeText);
                      g(true);
                    }
                  }
                : undefined,
              "data-qa": "profile-languages-editor-modal",
              children:
                t == null
                  ? (0, R.jsx)(T, {
                      onSelect: (e) => {
                        x([
                          ...E,
                          {
                            ...e,
                            id: Number(e.id),
                          },
                        ]);
                      },
                      isNative: k,
                      visible: S,
                    })
                  : (0, R.jsx)(D, {
                      native: k,
                      onChange: (e) => {
                        if (C) {
                          x(y.map((r, n) => (n === t ? e : r)));
                        }
                      },
                      visible: S,
                    }),
            }),
            (0, R.jsx)(l.n, {
              title: e[U],
              layout: "horizontal",
              hhtmSource: "profile_language_foreign_delete_alert",
              "data-qa": "profile-languages-delete-alert",
              buttons: [
                {
                  mode: "tertiary",
                  style: "neutral",
                  stretched: true,
                  onClick: A,
                  children: e[q],
                  analyticType: "secondary",
                },
                {
                  mode: "tertiary",
                  style: "negative",
                  stretched: true,
                  onClick: () => {
                    if (C) {
                      g(false);
                      x(y.filter((e) => e.id !== C.id));
                      r(
                        (0, h.xU)({
                          hideSuccessSnackbar: true,
                          onSuccess: N,
                        }),
                      );
                    }
                  },
                  analyticType: "primary",
                  children: e[F],
                },
              ],
              visible: s,
              onClose: A,
            }),
          ],
        });
      };
      z.displayName = "Languages/Editor/index/LanguagesEditor";
      const $ = (0, s.Z)(z);
    },
    77916: function (e, r, t) {
      t.d(r, {
        k7: () => a,
        t8: () => i,
        tY: () => s,
      });
      var n = t(33081);
      var o = t(65284);
      const i = (e) => e.some(({ degree: e }) => e === n.A);
      const s = (e, r) =>
        (e == null && !!(0, o.xb)(r)) ||
        (e != null && e.degree === n.A) ||
        (e == null && !i(r));
      const a = (e, r) => {
        const t = r.length === 1;
        const o = i(r);
        return e != null && (!t || !!o) && (e == null || e.degree !== n.A);
      };
    },
    38682: function (e, r, t) {
      t.d(r, {
        N: () => Vo,
      });
      var n = t(75790);
      var o = t(45144);
      var i = t(9325);
      var s = t(48867);
      var a = t(83059);
      var l = t(43472);
      var d = t(54850);
      var c = t(30527);
      var u = t(36047);
      var h = t(89156);
      var p = t(61384);
      var m = t(50109);
      var f = t(31818);
      var v = t(4305);
      var g = t(66802);
      var y = t(44180);
      var x = t(63144);
      var b = t(82128);
      var S = t(55709);
      var j = t(49314);
      var E = t(5001);
      var C = t(88233);
      var k = t(58694);
      var _ = t(65284);
      var N = t(9862);
      const A = {
        male: "profile.resume.field.gender.male",
        female: "profile.resume.field.gender.female",
        unknown: "resumeConverter.born.unknown",
        year: {
          one: "age.years.0",
          some: "age.years.1",
          many: "age.years.2",
        },
        born: {
          male: "resumeConverter.born.male",
          female: "resumeConverter.born.female",
          unknown: "resumeConverter.born.unknown",
        },
      };
      const M = (e, r) => {
        if (!e) {
          return "";
        }
        const t = (0, E.Z)(new Date(), new Date(e));
        return `${t} ${(0, C.v)((0, E.Z)(new Date(), t), {
          one: r[A.year.one],
          some: r[A.year.some],
          many: r[A.year.many],
        })}`;
      };
      const R = (e, r, t) =>
        r ? `${t[A.born[e]]} ${(0, _.p6)(new Date(r), "dd MMMM y")}` : "";
      const L = ({ trls: e }) => {
        const r = (0, s.v)(k.Ib);
        const t = (0, s.v)(k.b8);
        const o = (0, s.v)(k.C9);
        const i = (0, s.v)(k.DZ);
        const a = (0, s.v)(k.$p);
        const l = (0, s.v)(k.KM);
        const d = (0, s.v)(k.bv);
        const c = r ? `, ${r.text}` : "";
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(v.D, {
              Element: "h1",
              size: "large",
              description: [e[A[t]], M(o, e), R(t, o, e)]
                .filter(Boolean)
                .join(", "),
              descriptionMaxLines: 1,
              dataQaDescription: "profile-common-card-city",
              dataQaTitle: "profile-common-card-lastname",
              children: `${a} ${l} ${d}`,
            }),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsx)(g.x, {
              style: "secondary",
              typography: "paragraph-1-regular",
              children: `${i}${c}`,
            }),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
          ],
        });
      };
      L.displayName =
        "Profile/backoffice/BackofficeCommonInfo/BackofficeCommonInfo";
      const P = (0, h.Z)(L);
      var w = t(61263);
      var I = t(18445);
      var T = t(69330);
      const O = "card-content--qLuWpFKiTzohBMzQ";
      const V = "name-with-icon--oJ48h5Vk5Mu2GI3L";
      const D = "esia-icon--d5jXmsUXuKkjgmvE";
      const B = "profile.resume.card.edit.button";
      const U = ({ trls: e, isBackofficeProxy: r = false }) => {
        const t = (0, u.usePush)();
        const { isMobile: o } = (0, p.G)();
        const i = (0, s.v)(k.b8);
        const a = (0, s.v)(k.C9);
        const l = (0, s.v)(k.$p);
        const d = (0, s.v)(k.KM);
        const c = (0, s.v)(k.fz);
        const h = (0, s.v)(w.Z8);
        const E = (0, s.v)(I.zP);
        const C = a ? (0, T.p6)(new Date(a), "dd.MM.yyyy") : "";
        const _ = () => {
          t("/profile/edit/common" + (E ? `?resumeFrom=${E}` : ""));
        };
        return (0, N.jsx)(N.Fragment, {
          children: (0, N.jsxs)(m.Z, {
            stretched: true,
            borderWidth: o ? "none" : "default",
            padding: o ? 0 : 24,
            borderRadius: o ? 0 : 24,
            "data-qa": "profile-common-card",
            children: [
              (0, N.jsxs)(f.q, {
                default: o ? 12 : 24,
                children: [
                  (0, N.jsxs)("div", {
                    className: O,
                    children: [
                      (0, N.jsx)("div", {
                        children: r
                          ? (0, N.jsx)(P, {})
                          : (0, N.jsxs)(N.Fragment, {
                              children: [
                                (0, N.jsx)(v.D, {
                                  Element: "h1",
                                  size: "large",
                                  maxLines: 1,
                                  dataQaTitle: "profile-common-card-firstname",
                                  children: d,
                                }),
                                (0, N.jsxs)("div", {
                                  className: V,
                                  children: [
                                    (0, N.jsx)(v.D, {
                                      Element: "h1",
                                      size: "large",
                                      maxLines: 1,
                                      dataQaTitle:
                                        "profile-common-card-lastname",
                                      children: l,
                                    }),
                                    h &&
                                      (0, N.jsx)("div", {
                                        className: D,
                                        children: (0, N.jsx)(S.U__, {}),
                                      }),
                                  ],
                                }),
                                (0, N.jsxs)(N.Fragment, {
                                  children: [
                                    (0, N.jsx)(n.X, {
                                      default: 8,
                                    }),
                                    (0, N.jsx)(g.x, {
                                      style: "secondary",
                                      "data-qa": "profile-common-card-city",
                                      typography: o
                                        ? "paragraph-2-regular"
                                        : "paragraph-1-regular",
                                      children: C,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      }),
                      !o &&
                        (0, N.jsx)("div", {
                          children: (0, N.jsx)(y.r, {
                            typography: "label-2-regular",
                            onClick: _,
                            iconLeft: (0, N.jsx)(b.vvx, {}),
                            "data-qa": "profile-common-card-edit",
                            children: e[B],
                          }),
                        }),
                    ],
                  }),
                  (0, N.jsx)(j.S, {
                    image: c.big,
                    size: o ? 96 : 208,
                    gender: i,
                    letters: (0, j.k)(d, l),
                  }),
                ],
              }),
              o &&
                (0, N.jsxs)(N.Fragment, {
                  children: [
                    (0, N.jsx)(n.X, {
                      default: 16,
                    }),
                    (0, N.jsx)(x.z, {
                      mode: "secondary",
                      style: "neutral",
                      onClick: _,
                      stretched: true,
                      "data-qa": "profile-common-card-edit",
                      children: e[B],
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      U.displayName = "CommonInfo/Card/index/CommonInfoCard";
      const Z = (0, h.Z)(U);
      var q = t(44644);
      var F = t.n(q);
      var H = t(69448);
      var z = t(35583);
      var $ = t(98649);
      var G = t.n($);
      var W = t(83959);
      var K = t.n(W);
      var X = t(15576);
      var J = t(85322);
      var Y = t(8282);
      var Q = t(2892);
      var ee = t(62105);
      var re = t(52872);
      const te = ({ children: e }) =>
        (0, N.jsx)(v.D, {
          Element: "h4",
          size: "small",
          children: e,
        });
      te.displayName = "components/BlockLabel/index/BlockLabel";
      var ne = t(12502);
      var oe = t.n(ne);
      var ie = t(26765);
      var se = t.n(ie);
      var ae = t(18566);
      var le = t(6848);
      var de = t(22661);
      var ce = t(51987);
      var ue = t(46337);
      const he =
        "profile.resume.field.communicationMethods.error.not-in-dictionary";
      const pe = ({ trls: e }) => {
        const r = (0, i.useDispatch)();
        const t = (0, s.v)(I.av);
        const d = (0, s.v)(I.Mb);
        const c = (0, s.v)(I.HM);
        (0, o.useEffect)(() => {
          if (d) {
            se()({
              messenger: c,
            });
          }
        }, [d, c]);
        const u = (0, s.v)(a.FU);
        const h = u == null ? undefined : u.find((e) => e.type === c);
        const p = (0, s.v)(k.zA);
        const { value: m, onChange: f } = (0, ce.H)("communicationMethods");
        const { invalid: v, errorMessage: g } = (0, ue.A9)(
          "communicationMethods",
          0,
          c,
          {
            NOT_MATCH_REGEXP: (h == null ? undefined : h.errorMessage) || "",
            NOT_IN_DICTIONARY: e[he],
          },
        );
        const y = (m == null ? undefined : m[c]) || "";
        const x = p == null ? undefined : p[c];
        return (0, N.jsxs)(de.U, {
          title: (h == null ? undefined : h.title) || c,
          titleDescription: h == null ? undefined : h.description,
          loading: t,
          visible: d,
          onSave: () =>
            r(
              (0, l.xU)({
                hideSuccessSnackbar: true,
              }),
            ),
          onClose: () => r((0, l.K7)()),
          onHeaderDelete: x
            ? () => {
                const e = {
                  ...m,
                };
                e[c] = null;
                r(
                  (0, l.xU)({
                    hideSuccessSnackbar: true,
                    fields: {
                      communicationMethods: e,
                    },
                  }),
                );
              }
            : undefined,
          "data-qa": "profile-contacts-communication-methods-editor-modal",
          children: [
            (0, N.jsx)(n.X, {
              default: 4,
            }),
            (0, N.jsx)(ae.z, {
              default: 12,
              children: (0, N.jsx)(le.I, {
                onFocus: () =>
                  oe()({
                    fieldName: c,
                  }),
                name: `communicationMethod-${c}`,
                elevatePlaceholder: true,
                placeholder: h == null ? undefined : h.placeholder,
                value: y,
                onChange: (e) => {
                  const r = {
                    ...m,
                  };
                  r[c] = e;
                  f(r);
                },
                invalid: v,
                errorMessage: g,
                clearable: true,
                "data-qa": "profile-contacts-communication-methods-input",
              }),
            }),
            (0, N.jsx)(n.X, {
              default: 24,
              gteS: 32,
            }),
          ],
        });
      };
      pe.displayName =
        "Profile/Contacts/CommunicationMethodsEditor/CommunicationMethodsEditor";
      const me = (0, h.Z)(pe);
      var fe = t(67532);
      var ve = t(43512);
      var ge = t(71705);
      var ye = t(81292);
      var xe = t(64452);
      var be = t(77967);
      var Se = t(35527);
      var je = t(57385);
      var Ee = t.n(je);
      var Ce = t(13213);
      var ke = t.n(Ce);
      var _e = t(21440);
      var Ne = t(70904);
      const Ae = {
        otpGenerate: async (e) =>
          Ne.Q.generate({
            ...e,
            otpType: "email",
            operationType: "applicant_change_email",
          }),
        setEmailByOtpConfirm: async (e, r) =>
          (
            await _e.Z.post("/profile/shards/email/set_email_by_otp_confirm", {
              email: e,
              otpCode: r,
            })
          ).data,
      };
      const Me = (e) => {
        const i = e;
        const s = ((e) => {
          if (typeof e == "number") {
            if (e < 1000000000000) {
              return e * 1000;
            } else {
              return e;
            }
          }
          if (typeof e == "string") {
            const r = Date.parse(e);
            if (Number.isNaN(r)) {
              return null;
            } else {
              return r;
            }
          }
          return null;
        })(i.nextSendTime?.["@timestamp"] ?? i.nextSendTime?.$);
        if (s) {
          return s;
        }
        const a = Number(i.otp?.secondsUntilNextSend);
        if (!Number.isNaN(a) && a > 0) {
          return Date.now() + a * 1000;
        } else {
          return null;
        }
      };
      const Re = (e) => {
        if (!e) {
          return 0;
        }
        const r = e - Date.now();
        if (r > 0) {
          return Math.ceil(r / 1000);
        } else {
          return 0;
        }
      };
      const Le = (e) =>
        `${Math.floor(e / 60)
          .toString()
          .padStart(2, "0")}:${(e % 60).toString().padStart(2, "0")}`;
      const Pe = (e, r, t, n, o) => {
        var i;
        r.addCaptchaParams(e);
        const s =
          (i = t.current) === null || i === undefined
            ? undefined
            : i.querySelector(".g-recaptcha-response");
        if (s != null && s.value && n !== s.value) {
          e["g-recaptcha-response"] = s.value;
          o(s.value);
        }
      };
      const we = (e, r, t) => {
        if (!e) {
          return "";
        }
        switch (e) {
          case "WRONG_CODE":
            return r[t.errorWrongCode];
          case "CODE_NOT_FOUND":
            return r[t.errorCodeNotFound];
          case "CODE_EXPIRED":
            return r[t.errorCodeExpired];
          case "CONFIRM_CODE_BLOCKED":
            return r[t.errorConfirmBlocked];
          case "EMPTY_CODE":
            return r[t.errorEmptyCode];
          default:
            return r[t.errorUnknown];
        }
      };
      var Ie = t(35753);
      const Te = (e) => (r) => {
        r((0, Se.JM)(e));
      };
      const Oe =
        ({ value: e, emailValidityRef: r }) =>
        (t) => {
          const n = e.length === 0 || Ie.C.test(e);
          r.current = n;
          t(Te(true));
          t((0, Se.c)(null));
          t(
            ((e) => (r) => {
              r((0, Se.cK)(e));
            })(e),
          );
        };
      const Ve =
        ({
          login: e,
          captchaApi: r,
          captchaContainerRef: t,
          hhtmSource: n,
          fromEmpty: o,
        }) =>
        async (i, s) => {
          i((0, Se.zg)(true));
          i((0, Se.c)(null));
          i((0, Se.eP)(null));
          const {
            account: {
              emailEditor: { recaptchaValue: a },
            },
          } = s();
          const l = {
            login: e,
          };
          Pe(l, r, t, a, (e) => {
            const r = typeof e == "function" ? e(a ?? null) : e;
            i((0, Se.Xw)(r));
          });
          try {
            var d;
            var c;
            const e = await Ae.otpGenerate(l);
            r.updateCaptcha(e);
            if (
              (e != null &&
                (d = e.recaptcha) !== null &&
                d !== undefined &&
                d.isBot) ||
              (e != null &&
                (c = e.hhcaptcha) !== null &&
                c !== undefined &&
                c.isBot)
            ) {
              return false;
            }
            const t = Me(e);
            i((0, Se.fV)(t));
            i((0, Se.Tv)(Re(t)));
            if (e && e.success === false) {
              const r = e.key || "BAD_EMAIL";
              i((0, Se.c)(r));
              Ee()({
                contactType: "email",
                fromEmpty: o == null || o,
                hhtmSource: n,
                errors: JSON.stringify({
                  email: r,
                }),
              });
              return false;
            }
            if (e.codeLength) {
              i((0, Se.DF)(e.codeLength));
            }
            i((0, Se.bg)(""));
            i((0, Se.xl)("code"));
            i((0, Se.c)(null));
            Ee()({
              contactType: "email",
              fromEmpty: o == null || o,
              hhtmSource: n,
            });
            return true;
          } catch (e) {
            console.error("Ошибка при запросе OTP для email:", e);
            i((0, Se.c)("UNKNOWN"));
            Ee()({
              contactType: "email",
              fromEmpty: o == null || o,
              hhtmSource: n,
              errors: JSON.stringify({
                email: "UNKNOWN",
              }),
            });
            return false;
          } finally {
            i((0, Se.zg)(false));
          }
        };
      const De =
        ({ codeParam: e, onSuccess: r, onClose: t, hhtmSource: n }) =>
        async (o, i) => {
          const {
            account: { emailEditor: s },
          } = i();
          const a = (e ?? s.codeValue).trim();
          if (!a || a.length < s.codeLength || s.isSaving) {
            return;
          }
          const l = await o(
            (
              ({ code: e, hhtmSource: r }) =>
              async (t, n) => {
                const o = e.trim();
                const {
                  account: {
                    emailEditor: {
                      codeErrorKey: i,
                      emailValue: s,
                      isSaving: a,
                      codeLength: l,
                    },
                  },
                } = n();
                const d = s.trim();
                if (!d || !o || o.length < l || a) {
                  return {
                    success: false,
                  };
                }
                t((0, Se.zg)(true));
                if (i) {
                  t((0, Se.eP)(null));
                }
                try {
                  const e = await Ae.setEmailByOtpConfirm(d, o);
                  if (e != null && e.success) {
                    ke()({
                      hhtmSource: r,
                    });
                    t((0, Se.P8)(d));
                    return {
                      success: true,
                      email: d,
                    };
                  }
                  const n =
                    (e == null ? undefined : e.errorKey) ||
                    (e == null ? undefined : e.error) ||
                    "unknown";
                  t((0, Se.eP)(n));
                  ke()({
                    hhtmSource: r,
                    errors: JSON.stringify({
                      code: n,
                    }),
                  });
                  return {
                    success: false,
                  };
                } catch (e) {
                  console.error("Ошибка при подтверждении email:", e);
                  t((0, Se.eP)("unknown"));
                  ke()({
                    hhtmSource: r,
                    errors: JSON.stringify({
                      code: "unknown",
                    }),
                  });
                  return {
                    success: false,
                  };
                } finally {
                  t((0, Se.zg)(false));
                }
              }
            )({
              code: a,
              hhtmSource: n,
            }),
          );
          if (l != null && l.success) {
            const e = l.email || s.emailValue.trim();
            if (r != null) {
              r(e);
            }
            if (t != null) {
              t();
            }
          }
        };
      var Be = t(39815);
      const Ue = {
        step: "email",
        emailValue: "",
        codeValue: "",
        codeErrorKey: null,
        emailErrorKey: null,
        isEmailValid: true,
        isSaving: false,
        resendCountdown: 0,
        nextSendTimestamp: null,
        recaptchaValue: null,
        codeLength: Ie.a,
      };
      const Ze = ({ account: e }) => {
        return (e == null ? undefined : e.emailEditor) ?? Ue;
      };
      const qe = (0, Be.createSelector)(Ze, (e) => e.resendCountdown);
      const Fe = ({
        visible: e,
        initialEmail: r,
        onClose: t,
        onSuccess: n,
        hhtmSource: s,
        trls: a,
        trlKeys: l,
      }) => {
        const d = (0, i.useDispatch)();
        const c = (0, be.my)();
        const u = (0, o.useRef)(null);
        const h = (0, o.useRef)(true);
        const p = (0, i.useSelector)(Ze);
        const m = (0, i.useSelector)(qe);
        const f = (0, o.useMemo)(() => p.emailValue.trim(), [p.emailValue]);
        const v = (0, o.useMemo)(
          () => Boolean(r == null ? undefined : r.trim()),
          [r],
        );
        const g = (0, o.useMemo)(() => {
          return (r == null ? undefined : r.trim().toLowerCase()) ?? "";
        }, [r]);
        const y = (0, o.useMemo)(() => f.toLowerCase() !== g, [f, g]);
        (0, o.useEffect)(() => {
          if (!e) {
            d(
              ((e) => (r) => {
                r((0, Se.qA)(e));
              })(r),
            );
          }
        }, [d, r, e]);
        (0, o.useEffect)(() => {
          if (!p.nextSendTimestamp) {
            d((0, Se.Tv)(0));
            return;
          }
          const e = () => d((0, Se.Tv)(Re(p.nextSendTimestamp)));
          e();
          const r = window.setInterval(e, 1000);
          return () => window.clearInterval(r);
        }, [d, p.nextSendTimestamp]);
        const x = (0, o.useCallback)(
          (e) => {
            const r = e.length === 0 || Ie.C.test(e);
            h.current = r;
            d(
              Oe({
                value: e,
                emailValidityRef: h,
              }),
            );
          },
          [d],
        );
        const b = (0, o.useCallback)(() => {
          d(
            (
              ({ emailValidityRef: e }) =>
              (r) => {
                r(Te(e.current));
              }
            )({
              emailValidityRef: h,
            }),
          );
        }, [d]);
        const S = (0, o.useCallback)(async () => {
          await d(
            (
              ({
                captchaApi: e,
                captchaContainerRef: r,
                emailValidityRef: t,
                hhtmSource: n,
                initialEmail: o,
              }) =>
              async (i, s) => {
                const {
                  account: {
                    emailEditor: { emailValue: a },
                  },
                } = s();
                const l = a.trim();
                if (l) {
                  if (t.current) {
                    await i(
                      Ve({
                        login: l,
                        captchaApi: e,
                        captchaContainerRef: r,
                        hhtmSource: n,
                        fromEmpty: !o,
                      }),
                    );
                  } else {
                    i(Te(false));
                  }
                } else {
                  i((0, Se.c)("NULL_EMAIL"));
                }
              }
            )({
              captchaApi: c,
              captchaContainerRef: u,
              emailValidityRef: h,
              hhtmSource: s,
              initialEmail: r,
            }),
          );
        }, [c, d, s, r]);
        const j = (0, o.useCallback)(async () => {
          await d(
            (
              ({ captchaApi: e, captchaContainerRef: r }) =>
              async (t, n) => {
                const {
                  account: {
                    emailEditor: {
                      resendCountdown: o,
                      isSaving: i,
                      emailValue: s,
                    },
                  },
                } = n();
                if (!(o > 0) && !i) {
                  await t(
                    Ve({
                      login: s.trim(),
                      captchaApi: e,
                      captchaContainerRef: r,
                    }),
                  );
                }
              }
            )({
              captchaApi: c,
              captchaContainerRef: u,
            }),
          );
        }, [c, d]);
        const E = (0, o.useCallback)(
          (e) => {
            d(
              (
                ({
                  value: e,
                  codeParam: r,
                  onSuccess: t,
                  onClose: n,
                  hhtmSource: o,
                }) =>
                async (i, s) => {
                  i((0, Se.bg)(e));
                  const {
                    account: {
                      emailEditor: { codeErrorKey: a, codeLength: l },
                    },
                  } = s();
                  if (a) {
                    i((0, Se.eP)(null));
                  }
                  if (e.trim().length >= l) {
                    await i(
                      De({
                        codeParam: r ?? e,
                        onSuccess: t,
                        onClose: n,
                        hhtmSource: o,
                      }),
                    );
                  }
                }
              )({
                value: e,
                onClose: t,
                onSuccess: n,
                hhtmSource: s,
              }),
            );
          },
          [d, t, n, s],
        );
        const C = (0, o.useMemo)(
          () => we(p.codeErrorKey, a, l),
          [p.codeErrorKey, a, l],
        );
        const k = (0, o.useMemo)(
          () =>
            ((e, r, t) => {
              if (!e) {
                return "";
              }
              switch (e) {
                case "BAD_EMAIL":
                case "INVALID_EMAIL":
                  return r[t.emailErrorBadEmail];
                case "NULL_EMAIL":
                case "EMPTY":
                  return r[t.emailErrorNull];
                case "CODE_SEND_BLOCKED":
                  return r[t.emailErrorBlocked];
                default:
                  return r[t.emailErrorUnknown];
              }
            })(p.emailErrorKey, a, l),
          [p.emailErrorKey, a, l],
        );
        const _ = (0, o.useMemo)(
          () =>
            p.emailErrorKey
              ? k
              : p.isEmailValid
                ? undefined
                : k || a[l.emailErrorBadEmail],
          [p.isEmailValid, p.emailErrorKey, k, a, l],
        );
        const N = (0, o.useMemo)(
          () =>
            p.step === "email"
              ? v
                ? a[l.confirmEmailButton]
                : a[l.addEmailButton]
              : m > 0
                ? (0, xe.WU)(a[l.resendButtonWait], {
                    "{0}": Le(m),
                  })
                : a[l.resendButtonSend],
          [
            v,
            m,
            l.addEmailButton,
            l.confirmEmailButton,
            l.resendButtonSend,
            l.resendButtonWait,
            a,
            p.step,
          ],
        );
        const A = p.step === "code" ? a[l.codeStepTitle] : a[l.title];
        const M = f || p.emailValue;
        const R = (0, o.useCallback)(() => {
          d((e) => {
            e((0, Se.xl)("email"));
            e((0, Se.bg)(""));
            e((0, Se.eP)(null));
          });
        }, [d]);
        const L = (0, o.useMemo)(
          () => !f || !p.isEmailValid || (!!v && !y),
          [f, p.isEmailValid, v, y],
        );
        return {
          step: p.step,
          modalTitle: A,
          saveButtonText: N,
          onSave: p.step === "email" ? S : j,
          disableSave: p.step === "email" ? L : m > 0 || p.isSaving,
          loading: p.isSaving,
          onCancel: p.step === "code" ? R : t,
          captchaContainerRef: u,
          emailStepProps: {
            emailValue: p.emailValue,
            isEmailValid: p.isEmailValid,
            errorMessage: _,
            onChange: x,
            onBlur: b,
          },
          codeStepProps: {
            codeTargetEmail: M,
            codeErrorKey: p.codeErrorKey,
            codeErrorText: C,
            digitsCount: p.codeLength,
            onCodeChange: E,
          },
        };
      };
      var He = t(91915);
      const ze = "profile.contacts.email.code.sent";
      const $e = ({
        codeTargetEmail: e,
        codeErrorKey: r,
        codeErrorText: t,
        digitsCount: n,
        onCodeChange: o,
        trls: i,
      }) =>
        (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(g.x, {
              style: "secondary",
              typography: "paragraph-1-regular",
              children: (0, xe.WU)(i[ze], {
                "{0}": e,
              }),
            }),
            (0, N.jsx)(He.i, {
              name: "profile-email-code",
              digitsCount: n,
              onChange: o,
              invalid: Boolean(r),
              errorMessage: r ? t : undefined,
            }),
          ],
        });
      $e.displayName = "EmailEditorModal/components/CodeStep/CodeStep";
      const Ge = (0, h.Z)($e);
      const We = "profile.contacts.email.placeholder";
      const Ke = ({
        emailValue: e,
        isEmailValid: r,
        errorMessage: t,
        onChange: n,
        onBlur: o,
        trls: i,
      }) =>
        (0, N.jsx)(le.I, {
          type: "email",
          value: e,
          placeholder: i[We],
          onChange: n,
          onBlur: o,
          invalid: !r || Boolean(t),
          errorMessage: t,
          size: "medium",
        });
      Ke.displayName = "EmailEditorModal/components/EmailStep/EmailStep";
      const Xe = (0, h.Z)(Ke);
      const Je = {
        title: "profile.contacts.email",
        emailPlaceholder: "profile.contacts.email.placeholder",
        errorUnknown: "profile.resume.field.error.unknown",
        errorWrongCode: "rb.message.phone.verification.WRONG_CODE",
        errorCodeNotFound: "rb.message.phone.verification.CODE_NOT_FOUND",
        errorCodeExpired: "rb.message.phone.verification.CODE_EXPIRED",
        errorConfirmBlocked:
          "rb.message.phone.verification.CONFIRM_CODE_BLOCKED",
        errorEmptyCode: "rb.message.phone.verification.EMPTY_CODE",
        emailErrorUnknown: "profile.contacts.email.error.unknown",
        emailErrorBadEmail: "profile.contacts.email.error.bad",
        emailErrorNull: "profile.contacts.email.error.empty",
        emailErrorBlocked: "profile.contacts.email.error.blocked",
        resendButtonSend: "profile.contacts.email.resend.send",
        resendButtonWait: "profile.contacts.email.resend.wait",
        addEmailButton: "profile.contacts.email.add",
        confirmEmailButton: "profile.contacts.email.confirm",
        codeStepTitle: "profile.contacts.email.code.title",
        backButton: "profile.contacts.email.back",
      };
      const Ye = (e) => {
        const {
          step: r,
          modalTitle: t,
          saveButtonText: i,
          onSave: s,
          onCancel: a,
          disableSave: l,
          loading: d,
          emailStepProps: c,
          codeStepProps: u,
          captchaContainerRef: h,
        } = Fe({
          ...e,
          trlKeys: Je,
        });
        (0, o.useEffect)(() => {
          if (e.visible && r === "email") {
            (0, fe.contactInputElementShownRaw)({
              contactType: "email",
              fromEmpty: !e.initialEmail,
              hhtmSource: "profile",
            });
          }
        }, [e.visible, r, e.initialEmail]);
        (0, o.useEffect)(() => {
          if (e.visible && r === "code") {
            (0, ve.emailVerificationEnterCodeElementShownRaw)({
              hhtmSource: "profile",
            });
          }
        }, [e.visible, r]);
        return (0, N.jsxs)(de.U, {
          title: t,
          modalSize: "medium",
          visible: e.visible,
          onClose: e.onClose,
          onCancel: a,
          cancelText: r === "code" ? e.trls[Je.backButton] : undefined,
          onSave: s,
          disableSave: l,
          loading: d,
          hasCancelBtn: true,
          saveText: i,
          "data-qa": "profile-contacts-email-editor-modal",
          children: [
            (0, N.jsx)(ae.z, {
              default: 12,
              children:
                r === "email"
                  ? (0, N.jsx)(Xe, {
                      ...c,
                    })
                  : (0, N.jsx)(Ge, {
                      ...u,
                    }),
            }),
            (0, N.jsx)(n.X, {
              default: 4,
            }),
            (0, N.jsxs)("div", {
              ref: h,
              children: [(0, N.jsx)(ye.c, {}), (0, N.jsx)(ge.b, {})],
            }),
            (0, N.jsx)(n.X, {
              default: 24,
              gteS: 32,
            }),
          ],
        });
      };
      Ye.displayName = "Contacts/EmailEditorModal/index/EmailEditorModal";
      const Qe = (0, h.Z)(Ye);
      var er = t(6425);
      var rr = t(20408);
      var tr = t.n(rr);
      var nr = t(94457);
      const or = (e, r) => async (t) => {
        try {
          const n = await (async (e, r) => {
            const n = (e == null ? undefined : e.trim()) ?? "";
            if (!n) {
              return {
                formatted: "",
                normalized: "",
                raw: "",
              };
            }
            try {
              const e = await nr.e.parse(n, r ?? new AbortController().signal);
              return {
                formatted: (e == null ? undefined : e.formatted) ?? n,
                normalized: (e == null ? undefined : e.value) ?? n,
                raw: (e == null ? undefined : e.raw) ?? n,
                verified: e == null ? undefined : e.verified,
              };
            } catch (e) {
              if ((e == null ? undefined : e.name) === "AbortError") {
                throw e;
              }
              return {
                formatted: n,
                normalized: n,
                raw: n,
              };
            }
          })(e, r);
          t((0, Se.EW)(n));
          return n;
        } catch (e) {
          if ((e == null ? undefined : e.name) !== "AbortError") {
            console.error("Ошибка при парсинге номера телефона:", e);
          }
          return null;
        }
      };
      const ir =
        ({
          login: e,
          captchaApi: r,
          captchaContainerRef: t,
          hhtmSource: n,
          fromEmpty: o,
        }) =>
        async (i, s) => {
          i((0, Se.BL)(true));
          i((0, Se.wb)(null));
          i((0, Se.TX)(null));
          const {
            account: {
              phoneEditor: { recaptchaValue: a },
            },
          } = s();
          const l = {
            login: e,
            otpType: "phone",
            operationType: "PHONE_OTP_AUTH",
          };
          Pe(l, r, t, a, (e) => {
            const r = typeof e == "function" ? e(a ?? null) : e;
            i((0, Se.BX)(r));
          });
          try {
            var d;
            var c;
            const t = await Ne.Q.generate(l);
            r.updateCaptcha(t);
            if (
              (t != null &&
                (d = t.recaptcha) !== null &&
                d !== undefined &&
                d.isBot) ||
              (t != null &&
                (c = t.hhcaptcha) !== null &&
                c !== undefined &&
                c.isBot)
            ) {
              return false;
            }
            const s = Me(t);
            i((0, Se.E4)(s));
            i((0, Se.gM)(Re(s)));
            if (t && t.success === false) {
              var u;
              const e =
                t == null ||
                (u = t.otp) === null ||
                u === undefined ||
                (u = u.phoneFormatted) === null ||
                u === undefined
                  ? undefined
                  : u.error;
              const r = t.key || e || "BAD_LOGIN";
              i((0, Se.wb)(r));
              Ee()({
                contactType: "phone",
                fromEmpty: o == null || o,
                hhtmSource: n,
                errors: JSON.stringify({
                  phone: r,
                }),
              });
              return false;
            }
            if (t.codeLength) {
              i((0, Se.Yb)(t.codeLength));
            }
            await i(or(e));
            i((0, Se.Cv)(""));
            i((0, Se.nj)("code"));
            i((0, Se.wb)(null));
            Ee()({
              contactType: "phone",
              fromEmpty: o == null || o,
              hhtmSource: n,
            });
            return true;
          } catch (e) {
            console.error("Ошибка при запросе OTP для телефона:", e);
            i((0, Se.wb)("UNKNOWN"));
            Ee()({
              contactType: "phone",
              fromEmpty: o == null || o,
              hhtmSource: n,
              errors: JSON.stringify({
                phone: "UNKNOWN",
              }),
            });
            return false;
          } finally {
            i((0, Se.BL)(false));
          }
        };
      const sr = (e) => (r) => {
        r((0, Se.a6)(e));
      };
      const ar =
        ({ params: e, parseControllerRef: r, phoneValidityRef: t }) =>
        async (n) => {
          var i;
          var a;
          t.current = e.isValid || e.nationalNumber.length === 0;
          n(sr(true));
          n((0, Se.wb)(null));
          n(
            ((a = e.phone ?? ""),
            (e) => {
              e((0, Se.vq)(a));
            }),
          );
          if ((i = r.current) !== null && i !== undefined) {
            i.abort();
          }
          const l = new AbortController();
          r.current = l;
          await n(or(e.phone ?? "", l.signal)).finally(() => {
            if (r.current === l) {
              r.current = null;
            }
          });
        };
      const lr =
        ({ codeParam: e, onSuccess: r, onClose: t, hhtmSource: n }) =>
        async (o, i) => {
          const {
            account: { phoneEditor: s },
          } = i();
          const a = (e ?? s.codeValue).trim();
          if (!a || a.length < s.codeLength || s.isSaving) {
            return;
          }
          const l = await o(
            (
              ({ code: e, hhtmSource: r }) =>
              async (t, n) => {
                const o = e.trim();
                const {
                  account: {
                    phoneEditor: {
                      codeErrorKey: i,
                      parsedPhone: s,
                      phoneValue: a,
                      isSaving: l,
                      codeLength: d,
                    },
                  },
                } = n();
                const c =
                  (s == null ? undefined : s.raw) ||
                  (s == null ? undefined : s.normalized) ||
                  a.trim();
                if (!c || !o || o.length < d || l) {
                  return {
                    success: false,
                  };
                }
                t((0, Se.BL)(true));
                if (i) {
                  t((0, Se.TX)(null));
                }
                try {
                  var u;
                  const e = await nr.e.otpConfirmAuthPhone({
                    login: c,
                    code: o,
                  });
                  if (e != null && e.success) {
                    tr()({
                      hhtmSource: r,
                    });
                    const e =
                      (s == null ? undefined : s.formatted) ||
                      (s == null ? undefined : s.normalized) ||
                      c;
                    const n = (s == null ? undefined : s.normalized) || c;
                    const o = {
                      raw: (s == null ? undefined : s.raw) || n,
                      formatted: e,
                      value: e,
                      city: "",
                      number: "",
                      comment: "",
                      country: "",
                      type: "cell",
                      verified: true,
                      needVerification: false,
                    };
                    t((0, Se.kM)(o));
                    return {
                      success: true,
                      phone: o,
                      displayPhone: e,
                    };
                  }
                  const n =
                    (e == null ||
                    (u = e.verification) === null ||
                    u === undefined
                      ? undefined
                      : u.key) ||
                    (e == null ? undefined : e.errorKey) ||
                    "unknown";
                  t((0, Se.TX)(n));
                  tr()({
                    hhtmSource: r,
                    errors: JSON.stringify({
                      code: n,
                    }),
                  });
                  return {
                    success: false,
                  };
                } catch (e) {
                  console.error("Ошибка при подтверждении телефона:", e);
                  tr()({
                    hhtmSource: r,
                    errors: JSON.stringify({
                      code: "unknown",
                    }),
                  });
                  return {
                    success: false,
                  };
                } finally {
                  t((0, Se.BL)(false));
                }
              }
            )({
              code: a,
              hhtmSource: n,
            }),
          );
          if (l != null && l.success) {
            const e = l.displayPhone || s.phoneValue.trim();
            if (r != null) {
              r(e);
            }
            if (t != null) {
              t();
            }
          }
        };
      const dr = {
        step: "phone",
        phoneValue: "",
        parsedPhone: null,
        codeValue: "",
        codeErrorKey: null,
        phoneErrorKey: null,
        isPhoneValid: true,
        isSaving: false,
        resendCountdown: 0,
        nextSendTimestamp: null,
        recaptchaValue: null,
        availableCountries: [],
        allowedCountriesLoading: false,
        codeLength: t(42730).Z,
      };
      const cr = ({ account: e }) => {
        return (e == null ? undefined : e.phoneEditor) ?? dr;
      };
      const ur = (0, Be.createSelector)(cr, (e) =>
        e.availableCountries.reduce((e, r) => {
          e[r] = r;
          return e;
        }, {}),
      );
      const hr = (0, Be.createSelector)(cr, (e) => e.resendCountdown);
      const pr = ({
        visible: e,
        initialPhone: r,
        onClose: t,
        onSuccess: n,
        hhtmSource: s,
        trls: a,
        trlKeys: l,
      }) => {
        const u = (0, i.useDispatch)();
        const h = (0, be.my)();
        const p = (0, o.useRef)(null);
        const m = (0, o.useRef)(null);
        const f = (0, o.useRef)(true);
        const v = (0, i.useSelector)(cr);
        const g = (0, i.useSelector)(ur);
        const y = (0, i.useSelector)(hr);
        const x = (0, o.useMemo)(() => v.phoneValue.trim(), [v.phoneValue]);
        const b = (0, o.useMemo)(
          () => Boolean(r == null ? undefined : r.trim()),
          [r],
        );
        const S = (0, o.useMemo)(() => {
          return (r == null ? undefined : r.trim()) ?? "";
        }, [r]);
        const j = (0, o.useMemo)(() => {
          return (v.parsedPhone?.normalized || x) !== S;
        }, [v.parsedPhone?.normalized, x, S]);
        (0, o.useEffect)(() => {
          if (!e) {
            u(
              ((e) => (r) => {
                r((0, Se.zx)(e));
              })(r),
            );
          }
        }, [u, r, e]);
        (0, o.useEffect)(() => {
          if (!e) {
            return;
          }
          const r = new AbortController();
          var t;
          u(
            ((t = r.signal),
            async (e, r) => {
              const {
                account: {
                  phoneEditor: { availableCountries: n },
                },
              } = r();
              if (!n.length) {
                e((0, Se.My)(true));
                try {
                  const r = await nr.e.getAllowedSmsCountries(t);
                  e((0, Se.Gf)((r == null ? undefined : r.codes) ?? []));
                } catch (e) {
                  console.error(
                    "Ошибка при получении списка стран для SMS:",
                    e,
                  );
                } finally {
                  e((0, Se.My)(false));
                }
              }
            }),
          );
          return () => r.abort();
        }, [u, e]);
        (0, o.useEffect)(() => {
          if (!v.nextSendTimestamp) {
            u((0, Se.gM)(0));
            return;
          }
          const e = () => u((0, Se.gM)(Re(v.nextSendTimestamp)));
          e();
          const r = window.setInterval(e, 1000);
          return () => window.clearInterval(r);
        }, [u, v.nextSendTimestamp]);
        (0, o.useEffect)(() => {
          const e = m.current;
          return () => {
            if (e != null) {
              e.abort();
            }
          };
        }, []);
        const E = (0, o.useCallback)(
          (e) => {
            u(
              ar({
                params: e,
                parseControllerRef: m,
                phoneValidityRef: f,
              }),
            );
          },
          [u],
        );
        const C = (0, o.useCallback)(() => {
          u(
            (
              ({ phoneValidityRef: e }) =>
              (r) => {
                r(sr(e.current));
              }
            )({
              phoneValidityRef: f,
            }),
          );
        }, [u]);
        const k = (0, o.useCallback)(async () => {
          await u(
            (
              ({
                captchaApi: e,
                captchaContainerRef: r,
                phoneValidityRef: t,
                hhtmSource: n,
                initialPhone: o,
              }) =>
              async (i, s) => {
                const {
                  account: {
                    phoneEditor: { phoneValue: a },
                  },
                } = s();
                const l = a.trim();
                if (l) {
                  if (t.current) {
                    await i(
                      ir({
                        login: l,
                        captchaApi: e,
                        captchaContainerRef: r,
                        hhtmSource: n,
                        fromEmpty: !o,
                      }),
                    );
                  } else {
                    i(sr(false));
                  }
                } else {
                  i((0, Se.wb)("NULL_PHONE"));
                }
              }
            )({
              captchaApi: h,
              captchaContainerRef: p,
              phoneValidityRef: f,
              hhtmSource: s,
              initialPhone: r,
            }),
          );
        }, [h, u, s, r]);
        const _ = (0, o.useCallback)(async () => {
          await u(
            (
              ({ captchaApi: e, captchaContainerRef: r }) =>
              async (t, n) => {
                const {
                  account: {
                    phoneEditor: {
                      resendCountdown: o,
                      isSaving: i,
                      phoneValue: s,
                    },
                  },
                } = n();
                if (!(o > 0) && !i) {
                  await t(
                    ir({
                      login: s.trim(),
                      captchaApi: e,
                      captchaContainerRef: r,
                    }),
                  );
                }
              }
            )({
              captchaApi: h,
              captchaContainerRef: p,
            }),
          );
        }, [h, u]);
        const N = (0, o.useCallback)(
          (e) => {
            u(
              (
                ({
                  value: e,
                  codeParam: r,
                  onSuccess: t,
                  onClose: n,
                  hhtmSource: o,
                }) =>
                async (i, s) => {
                  i((0, Se.Cv)(e));
                  const {
                    account: {
                      phoneEditor: { codeErrorKey: a, codeLength: l },
                    },
                  } = s();
                  if (a) {
                    i((0, Se.TX)(null));
                  }
                  if (e.trim().length >= l) {
                    await i(
                      lr({
                        codeParam: r ?? e,
                        onSuccess: t,
                        onClose: n,
                        hhtmSource: o,
                      }),
                    );
                  }
                }
              )({
                value: e,
                onClose: t,
                onSuccess: n,
                hhtmSource: s,
              }),
            );
          },
          [u, t, n, s],
        );
        const A = (0, o.useMemo)(
          () => we(v.codeErrorKey, a, l),
          [v.codeErrorKey, a, l],
        );
        const M = (0, o.useMemo)(
          () =>
            ((e, r, t) => {
              if (!e) {
                return "";
              }
              switch (e) {
                case "BAD_LOGIN":
                case "too_short":
                case "too_long":
                  return r[t.phoneErrorBadLogin];
                case "NULL_PHONE":
                case "EMPTY":
                case "NEED_PHONE":
                  return r[t.phoneErrorNeed];
                case "COUNTRY_BLACKLISTED":
                case "CODE_SEND_BLOCKED":
                  if (e === "COUNTRY_BLACKLISTED") {
                    return r[t.phoneErrorCountry];
                  } else {
                    return r[t.phoneErrorBlocked];
                  }
                default:
                  return r[t.phoneErrorUnknown];
              }
            })(v.phoneErrorKey, a, l),
          [v.phoneErrorKey, a, l],
        );
        const R = (0, o.useMemo)(
          () =>
            v.phoneErrorKey
              ? M
              : v.isPhoneValid
                ? undefined
                : M || a[l.phoneErrorBadLogin],
          [v.isPhoneValid, v.phoneErrorKey, M, a, l],
        );
        const L = (0, o.useMemo)(
          () =>
            v.step === "phone"
              ? b
                ? a[l.confirmPhoneButton]
                : a[l.addPhoneButton]
              : y > 0
                ? (0, xe.WU)(a[l.resendButtonWait], {
                    "{0}": Le(y),
                  })
                : a[l.resendButtonSend],
          [
            b,
            y,
            l.addPhoneButton,
            l.confirmPhoneButton,
            l.resendButtonSend,
            l.resendButtonWait,
            a,
            v.step,
          ],
        );
        const P = v.step === "code" ? a[l.codeStepTitle] : a[l.title];
        const w = v.parsedPhone?.formatted || x || v.phoneValue;
        const I = (0, o.useCallback)(() => {
          u((e) => {
            e((0, Se.nj)("phone"));
            e((0, Se.Cv)(""));
            e((0, Se.TX)(null));
          });
        }, [u]);
        const T = (0, o.useMemo)(
          () => !x || !v.isPhoneValid || (!!b && !j),
          [x, v.isPhoneValid, b, j],
        );
        return {
          step: v.step,
          modalTitle: P,
          saveButtonText: L,
          onSave: v.step === "phone" ? k : _,
          disableSave: v.step === "phone" ? T : y > 0 || v.isSaving,
          loading: v.isSaving,
          onCancel: v.step === "code" ? I : t,
          captchaContainerRef: p,
          phoneStepProps: {
            defaultCountry: "RU",
            availableCountries: v.availableCountries,
            countryNamesDict: g,
            phoneValue: v.phoneValue,
            isPhoneValid: v.isPhoneValid,
            errorMessage: R,
            onChange: E,
            onBlur: C,
          },
          codeStepProps: {
            codeTargetPhone: w,
            codeErrorKey: v.codeErrorKey,
            codeErrorText: A,
            digitsCount: v.codeLength,
            onCodeChange: N,
          },
        };
      };
      const mr = "profile.contacts.phone.code.sent";
      const fr = "profile.contacts.phone.code.hint";
      const vr = ({
        codeTargetPhone: e,
        codeErrorKey: r,
        codeErrorText: t,
        digitsCount: n,
        onCodeChange: o,
        trls: i,
      }) =>
        (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(g.x, {
              style: "secondary",
              typography: "paragraph-1-regular",
              children: (0, xe.WU)(i[mr], {
                "{0}": e,
              }),
            }),
            (0, N.jsx)(g.x, {
              style: "secondary",
              typography: "paragraph-1-regular",
              children: i[fr],
            }),
            (0, N.jsx)(He.i, {
              name: "profile-phone-code",
              digitsCount: n,
              onChange: o,
              invalid: Boolean(r),
              errorMessage: r ? t : undefined,
            }),
          ],
        });
      vr.displayName = "PhoneEditorModal/components/CodeStep/CodeStep";
      const gr = (0, h.Z)(vr);
      var yr = t(2411);
      const xr = ({
        defaultCountry: e,
        availableCountries: r,
        countryNamesDict: t,
        phoneValue: n,
        isPhoneValid: o,
        errorMessage: i,
        onChange: s,
        onBlur: a,
      }) =>
        (0, N.jsx)(yr.s, {
          defaultCountry: e,
          availableCountries: r,
          countryNames: t,
          defaultNationalNumber: n,
          onChange: s,
          onBlur: a,
          invalid: !o || Boolean(i),
          errorMessage: i,
        });
      xr.displayName = "PhoneEditorModal/components/PhoneStep/PhoneStep";
      const br = {
        title: "profile.contacts.phone",
        phonePlaceholder: "profile.contacts.phone",
        errorUnknown: "profile.resume.field.error.unknown",
        errorWrongCode: "rb.message.phone.verification.WRONG_CODE",
        errorCodeNotFound: "rb.message.phone.verification.CODE_NOT_FOUND",
        errorCodeExpired: "rb.message.phone.verification.CODE_EXPIRED",
        errorConfirmBlocked:
          "rb.message.phone.verification.CONFIRM_CODE_BLOCKED",
        errorEmptyCode: "rb.message.phone.verification.EMPTY_CODE",
        phoneErrorUnknown: "phoneVerificationPage.error.unknown",
        phoneErrorBadLogin: "phoneVerificationPage.error.BAD_PHONE",
        phoneErrorNull: "phoneVerificationPage.error.NULL_PHONE",
        phoneErrorNeed: "phoneVerificationPage.needPhone",
        phoneErrorCountry: "phoneVerificationPage.error.restrictedCountry",
        phoneErrorBlocked:
          "rb.edit.contacts.phone.verify.send.error.CODE_SEND_BLOCKED",
        resendButtonSend: "profile.contacts.phone.resend.send",
        resendButtonWait: "profile.contacts.phone.resend.wait",
        addPhoneButton: "profile.contacts.phone.add",
        confirmPhoneButton: "profile.contacts.phone.confirm",
        codeStepTitle: "profile.contacts.phone.code.title",
        backButton: "profile.contacts.phone.back",
      };
      const Sr = (e) => {
        const {
          step: r,
          modalTitle: t,
          saveButtonText: i,
          onSave: s,
          onCancel: a,
          disableSave: l,
          loading: d,
          phoneStepProps: c,
          codeStepProps: u,
          captchaContainerRef: h,
        } = pr({
          ...e,
          trlKeys: br,
        });
        (0, o.useEffect)(() => {
          if (e.visible && r === "phone") {
            (0, fe.contactInputElementShownRaw)({
              contactType: "phone",
              fromEmpty: !e.initialPhone,
              hhtmSource: "profile",
            });
          }
        }, [e.visible, r, e.initialPhone]);
        (0, o.useEffect)(() => {
          if (e.visible && r === "code") {
            (0, er.phoneVerificationEnterCodeElementShownRaw)({
              hhtmSource: "profile",
            });
          }
        }, [e.visible, r]);
        return (0, N.jsxs)(de.U, {
          title: t,
          modalSize: "medium",
          visible: e.visible,
          onClose: e.onClose,
          onCancel: a,
          cancelText: r === "code" ? e.trls[br.backButton] : undefined,
          onSave: s,
          disableSave: l,
          loading: d,
          hasCancelBtn: true,
          saveText: i,
          "data-qa": "profile-contacts-phone-editor-modal",
          children: [
            (0, N.jsx)(ae.z, {
              default: 12,
              children:
                r === "phone"
                  ? (0, N.jsx)(xr, {
                      ...c,
                    })
                  : (0, N.jsx)(gr, {
                      ...u,
                    }),
            }),
            (0, N.jsx)(n.X, {
              default: 4,
            }),
            (0, N.jsxs)("div", {
              ref: h,
              children: [(0, N.jsx)(ye.c, {}), (0, N.jsx)(ge.b, {})],
            }),
            (0, N.jsx)(n.X, {
              default: 24,
              gteS: 32,
            }),
          ],
        });
      };
      Sr.displayName = "Contacts/PhoneEditorModal/index/PhoneEditorModal";
      const jr = (0, h.Z)(Sr);
      var Er = t(33338);
      const Cr = {
        phone: {
          title: "profile.contacts.auth.warning.phone.title",
          description: "profile.contacts.auth.warning.phone.description",
        },
        email: {
          title: "profile.contacts.auth.warning.email.title",
          description: "profile.contacts.auth.warning.email.description",
        },
        continueButton: "profile.contacts.auth.warning.continue",
      };
      const kr = ({
        type: e,
        visible: r,
        onContinue: t,
        onClose: n,
        trls: o,
      }) => {
        const i = Cr[e];
        return (0, N.jsx)(Er.bZ, {
          icon: (0, N.jsx)(b.uvJ, {}),
          iconStyle: "neutral",
          visible: r,
          title: o[i.title],
          description: o[i.description],
          layout: "vertical",
          onClose: n,
          buttons: (0, N.jsx)(x.z, {
            mode: "primary",
            style: "accent",
            onClick: t,
            "data-qa": `profile-contacts-${e}-auth-warning-continue`,
            children: o[Cr.continueButton],
          }),
        });
      };
      kr.displayName =
        "Contacts/components/AuthMethodWarningAlert/AuthMethodWarningAlert";
      const _r = (0, h.Z)(kr);
      const Nr = {
        telegram: (0, N.jsx)(S.Aoq, {}),
        whatsapp: (0, N.jsx)(S.QWB, {}),
        setka: (0, N.jsx)(S.ka2, {}),
        viber: (0, N.jsx)(S.S28, {}),
        max: (0, N.jsx)(S.Wnj, {}),
      };
      const Ar = ({ type: e }) => Nr[e] || (0, N.jsx)(b.yE9, {});
      Ar.displayName =
        "Contacts/components/CommunicationIcons/CommunicationIcon";
      var Mr = t(24488);
      var Rr = t(12971);
      var Lr = t.n(Rr);
      var Pr = t(65007);
      var wr = t(30577);
      const Ir = "contact-item--Omt8PhEqoIcplLDQ";
      const Tr = "empty-card-icon-container--ySFJHIgo8lcvYVAv";
      const Or = ({
        icon: e,
        title: r,
        value: t,
        linkTo: n,
        onClick: o,
        type: i,
      }) => {
        const { isMobile: s } = (0, p.G)();
        const a = {
          "data-qa": "profile-contact-item",
          ...(n || o
            ? {
                onClick: () => {
                  if (o != null) {
                    o();
                  }
                  if (n) {
                    window.location.href = n;
                  }
                },
              }
            : {}),
        };
        return (0, N.jsx)(Mr.ElementShownAnchor, {
          fn: Lr(),
          messenger: i,
          children: (0, N.jsx)(N.Fragment, {
            children: t
              ? (0, N.jsx)("div", {
                  className: Ir,
                  children: (0, N.jsx)(m.Z, {
                    stretched: true,
                    style: "secondary",
                    borderWidth: "none",
                    padding: 16,
                    borderRadius: 16,
                    ...a,
                    children: (0, N.jsxs)(Pr.b, {
                      slot: e,
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "title",
                          children: r,
                        }),
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          maxLines: 1,
                          children: t,
                        }),
                      ],
                    }),
                  }),
                })
              : (0, N.jsx)(m.Z, {
                  stretched: !s,
                  padding: 28,
                  borderRadius: 16,
                  borderWidth: "default",
                  ...a,
                  children: (0, N.jsx)("div", {
                    className: Tr,
                    children: e,
                  }),
                }),
          }),
        });
      };
      Or.displayName = "components/ContactItem/index/ContactItem";
      const Vr = {
        phone: {
          alertTitle: "profile.contacts.phone.sync.title",
          previousValue: "profile.contacts.phone.sync.previous",
          newValue: "profile.contacts.phone.sync.next",
          acceptButton: "profile.contacts.phone.sync.update",
          cancelButton: "profile.contacts.phone.sync.keep",
        },
        email: {
          alertTitle: "profile.contacts.email.sync.title",
          previousValue: "profile.contacts.email.sync.previous",
          newValue: "profile.contacts.email.sync.next",
          acceptButton: "profile.contacts.email.sync.update",
          cancelButton: "profile.contacts.email.sync.keep",
        },
      };
      const Dr = (e) => (e != null && e.trim() ? e : "—");
      const Br = ({
        type: e,
        visible: r,
        previousValue: t,
        newValue: n,
        inProgress: i = false,
        onAccept: s,
        onCancel: a,
        trls: l,
      }) => {
        const d = Vr[e];
        const c = (0, o.useMemo)(() => Dr(t), [t]);
        const u = (0, o.useMemo)(() => Dr(n), [n]);
        return (0, N.jsx)(Er.bZ, {
          icon: (0, N.jsx)(b.l5_, {}),
          iconStyle: "warning",
          visible: r,
          title: l[d.alertTitle],
          description: (0, N.jsxs)(ae.z, {
            default: 8,
            children: [
              (0, N.jsx)(g.x, {
                style: "secondary",
                typography: "paragraph-2-regular",
                children: (0, xe.WU)(l[d.previousValue], {
                  "{0}": c,
                }),
              }),
              (0, N.jsx)(g.x, {
                style: "secondary",
                typography: "paragraph-2-regular",
                children: (0, xe.WU)(l[d.newValue], {
                  "{0}": u,
                }),
              }),
            ],
          }),
          layout: "vertical",
          onClose: a,
          buttons: (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(x.z, {
                mode: "primary",
                style: "accent",
                onClick: s,
                loading: i,
                "data-qa": `profile-contacts-${e}-sync-alert-accept`,
                children: l[d.acceptButton],
              }),
              (0, N.jsx)(x.z, {
                mode: "secondary",
                style: "neutral",
                onClick: a,
                disabled: i,
                "data-qa": `profile-contacts-${e}-sync-alert-cancel`,
                children: l[d.cancelButton],
              }),
            ],
          }),
        });
      };
      Br.displayName = "Contacts/components/ContactSyncAlert/ContactSyncAlert";
      const Ur = (0, h.Z)(Br);
      var Zr = t(91315);
      const qr = "profile.contacts.sync.title";
      const Fr = "profile.contacts.sync.description.all";
      const Hr = "profile.contacts.sync.alert.yes";
      const zr = "profile.contacts.sync.alert.no";
      const $r = ({ trls: e, visible: r, onSync: t, onClose: n }) =>
        (0, N.jsx)(Zr.n, {
          hhtmSource: "update_contacts_alert",
          icon: (0, N.jsx)(b.l5_, {}),
          iconStyle: "warning",
          visible: r,
          title: e[qr],
          description: e[Fr],
          layout: "vertical",
          onClose: n,
          "data-qa": "profile-contacts-sync-alert",
          buttons: [
            {
              mode: "primary",
              style: "accent",
              onClick: t,
              children: e[Hr],
              analyticType: "primary",
            },
            {
              mode: "secondary",
              style: "accent",
              onClick: n,
              children: e[zr],
              analyticType: "secondary",
            },
          ],
        });
      $r.displayName = "Contacts/components/ContactsAlert/ContactsAlert";
      const Gr = (0, h.Z)($r);
      var Wr = t(90021);
      const Kr = "profile.contacts.sync.title";
      const Xr = "profile.contacts.sync.button";
      const Jr = "profile.contacts.sync.description.all";
      const Yr = ({ trls: e, onSync: r }) => {
        const { isMobile: t } = (0, p.G)();
        return (0, N.jsx)(Wr.Z, {
          stretched: t,
          showClose: false,
          style: "warning-secondary",
          bannerName: "update_contacts_banner",
          "data-qa": "profile-contacts-sync-banner",
          title: (0, N.jsx)(v.D, {
            Element: "h5",
            size: "small",
            children: e[Kr],
          }),
          content: (0, N.jsx)(g.x, {
            typography: "paragraph-2-regular",
            children: e[Jr],
          }),
          buttonBase: {
            mode: "primary",
            style: "neutral",
            onClick: r,
            size: "small",
            children: e[Xr],
          },
          buttonsOrientation: "auto",
        });
      };
      Yr.displayName = "Contacts/components/ContactsBanner/ContactsBanner";
      const Qr = (0, h.Z)(Yr);
      const et = "profile_alert_contacts_sync_last_time";
      const rt = "profile_phone_sync_alert";
      const tt = "profile_email_sync_alert";
      const nt = (e) =>
        [
          ...new Set(
            e
              .flatMap((e) => {
                return e.fields.phone ?? [];
              })
              .filter((e) => e.type === "cell")
              .map((e) => e.formatted)
              .filter(Boolean),
          ),
        ].join(", ");
      const ot = (e) =>
        [
          ...new Set(
            e
              .flatMap((e) => {
                return e.fields.email ?? [];
              })
              .map((e) => e.string)
              .filter(Boolean),
          ),
        ].join(", ");
      const it = (e, r) => `${e ? "phone," : ""}${r ? "email" : ""}`;
      const st = (e, r, t) =>
        e != null && e.length && (r || t)
          ? e.filter((e) => {
              let n = false;
              if (
                e.status === null ||
                e.status === "not_finished" ||
                e.status === "blocked"
              ) {
                return false;
              }
              if (r) {
                var i;
                var s;
                const t =
                  ((i = e.fields.phone) === null || i === undefined
                    ? undefined
                    : i.filter((e) => e.type === "cell")) ?? [];
                const a =
                  t == null || (s = t[0]) === null || s === undefined
                    ? undefined
                    : s.formatted;
                if (t.length === 0 || (a && a !== r)) {
                  n = true;
                }
              }
              if (t) {
                var l;
                const r = e.fields.email ?? [];
                const o =
                  r == null || (l = r[0]) === null || l === undefined
                    ? undefined
                    : l.string;
                if (r.length === 0 || (o && o !== t)) {
                  n = true;
                }
              }
              return n;
            })
          : [];
      const at = "mobile-overflow-container--hAMw8tlo19UwooDQ";
      const lt = "mobile-contacts-spacing--iLaI4FX9uO4h9IuR";
      const dt = "mobile-contacts--EdEDJ0NM0QgmNbS4";
      const ct = "desktop-contacts--lrVOUr6PTGITUlQG";
      const ut = "grid-cols-2--Ul97Wxt3WLAFyXZl";
      const ht = "grid-cols-3--knoxrSg2IULNuBG_";
      const pt = "grid-cols-4--cRPBpTRS7sMBHjPU";
      const mt = {
        contactsTitle: "profile.contacts.title",
        phone: "profile.contacts.phone",
        email: "profile.contacts.email",
        syncContactsSnackbar: "profile.contacts.sync.snackbar",
        phoneAddedSynced: "profile.contacts.phone.added.synced",
        phoneAddedKept: "profile.contacts.phone.added.kept",
        emailAddedSynced: "profile.contacts.email.added.synced",
        emailAddedKept: "profile.contacts.email.added.kept",
      };
      const ft = ({ trls: e }) => {
        const r = (0, i.useDispatch)();
        const { isMobile: t, isGtL: d } = (0, p.G)();
        const c = (0, s.v)(w.LU);
        const u = (0, s.v)(w.n2);
        const h = (0, s.v)(w.al);
        const m = (0, s.v)((e) => e.profileResumes);
        const v = (0, s.v)(k.zA);
        const g = (0, s.v)(a.FU);
        const y = (0, Y.ZP)("profile_edit_base_contacts");
        const [x, S] = (0, o.useState)(false);
        const [j, E] = (0, o.useState)(false);
        const [C, _] = (0, o.useState)(false);
        const [A, M] = (0, o.useState)(false);
        const [R, L] = (0, o.useState)(false);
        const [P, I] = (0, o.useState)("");
        const [T, O] = (0, o.useState)("");
        const [V, D] = (0, o.useState)(null);
        const [B, U] = (0, o.useState)(false);
        const [Z, q] = (0, o.useState)(null);
        const [$, W] = (0, o.useState)(null);
        const { resumesWithDifferences: ne, submittedContacts: oe } = ((
          e,
          r,
          t,
        ) =>
          (0, o.useMemo)(() => {
            const n = st(e, r, t);
            if (!n.length) {
              return {
                resumesWithDifferences: [],
                submittedContacts: "",
              };
            }
            const o =
              !!r &&
              n.some((e) => {
                var n;
                var o;
                const i =
                  ((n = e.fields.phone) === null || n === undefined
                    ? undefined
                    : n.filter((e) => e.type === "cell")) ?? [];
                const s =
                  i == null || (o = i[0]) === null || o === undefined
                    ? undefined
                    : o.formatted;
                return i.length === 0 || (s && s !== r);
              });
            const i =
              !!t &&
              n.some((e) => {
                var n;
                const o = e.fields.email ?? [];
                const i =
                  o == null || (n = o[0]) === null || n === undefined
                    ? undefined
                    : n.string;
                return o.length === 0 || (i && i !== t);
              });
            return {
              resumesWithDifferences: n,
              submittedContacts: it(o, i),
            };
          }, [e, r, t]))(m, c, u);
        const ie = ne.length > 0;
        const se = h === "PHONE";
        const ae = h === "HH";
        const le = (0, o.useCallback)(() => {
          I(c ?? "");
          M(true);
        }, [c]);
        const de = (0, o.useCallback)(() => {
          M(false);
        }, []);
        const ce = (0, o.useCallback)(() => {
          O(u ?? "");
          L(true);
        }, [u]);
        const ue = (0, o.useCallback)(() => {
          L(false);
        }, []);
        const he = () => ({
          key: "phone",
          element: (0, N.jsx)(
            Or,
            {
              type: "phone",
              icon: (0, N.jsx)(b.Bo0, {}),
              title: e[mt.phone],
              value: c ?? "",
              onClick: () => {
                G()({
                  contactType: "phone",
                });
                if (y) {
                  if (se) {
                    W("phone");
                  } else {
                    le();
                  }
                }
              },
              linkTo: y ? undefined : "/applicant/settings#phone",
            },
            "phone",
          ),
        });
        const pe = () => ({
          key: "email",
          element: (0, N.jsx)(
            Or,
            {
              type: "email",
              icon: (0, N.jsx)(b.MZ$, {}),
              title: e[mt.email],
              value: u ?? "",
              onClick: () => {
                G()({
                  contactType: "email",
                });
                if (y) {
                  if (ae) {
                    W("email");
                  } else {
                    ce();
                  }
                }
              },
              linkTo: y ? undefined : "/applicant/settings#email",
            },
            "email",
          ),
        });
        const fe = () =>
          v
            ? Object.entries(v).map(([e, t]) => {
                const n = g == null ? undefined : g.find((r) => r.type === e);
                return {
                  key: e,
                  element: (0, N.jsx)(
                    Or,
                    {
                      type: e,
                      icon: (0, N.jsx)(Ar, {
                        type: e,
                      }),
                      title: (n == null ? undefined : n.title) || e,
                      value: t || "",
                      onClick: () => {
                        G()({
                          contactType: e,
                        });
                        r(
                          (0, l.zS)({
                            type: "communicationMethods",
                            meta: e,
                          }),
                        );
                      },
                    },
                    e,
                  ),
                };
              })
            : [];
        const ve = (e) =>
          [...e].sort((e, r) => {
            if (e.key === "phone") {
              return -1;
            }
            if (r.key === "phone") {
              return 1;
            }
            if (e.key === "email") {
              return -1;
            }
            if (r.key === "email") {
              return 1;
            }
            const t = g == null ? undefined : g.find((r) => r.type === e.key);
            const n = g == null ? undefined : g.find((e) => e.type === r.key);
            if (t && n) {
              return t.position - n.position;
            } else {
              return 0;
            }
          });
        const ge = (0, o.useCallback)(() => {
          const e = Date.now().toString();
          J.Y.setItem(et, e);
        }, []);
        (0, o.useEffect)(() => {
          if (typeof window == "undefined" || !ne.length || x) {
            return;
          }
          const e = J.Y.getItem(et);
          const r = Date.now();
          if (!e || r - Number(e) > 2592000000) {
            _(true);
            (0, z.mergeProfileContactsAlertElementShownRaw)({
              submittedContacts: oe,
            });
          }
        }, [ne.length, x, oe]);
        const ye = (0, o.useCallback)(() => {
          if (typeof window == "undefined" || V || !ie || !!x) {
            return;
          }
          const e = J.Y.getItem(rt);
          const r = J.Y.getItem(tt);
          if (e) {
            D({
              type: "phone",
              previous: nt(ne),
              next: c ?? "",
              fromEmpty: false,
            });
            J.Y.removeItem(rt);
          } else if (r) {
            D({
              type: "email",
              previous: ot(ne),
              next: u ?? "",
              fromEmpty: false,
            });
            J.Y.removeItem(tt);
          }
        }, [ie, x, c, u, V, ne]);
        (0, o.useEffect)(() => {
          ye();
        }, [ye]);
        const xe = (0, o.useCallback)(
          async (e = true) => {
            ge();
            if (!ne.length) {
              return;
            }
            _(false);
            const r = {
              resumes: ne,
              source: "profile",
            };
            if (c) {
              r.newPhone = c;
            }
            if (u) {
              r.newEmail = u;
            }
            try {
              await (({
                resumes: e,
                newPhone: r = "",
                newEmail: t = "",
                source: n,
              }) => {
                const o = e.map((e) => {
                  var n;
                  const o = {
                    hash: e.resumeHash,
                    phones:
                      (n = e.fields.phone) === null || n === undefined
                        ? undefined
                        : n.map((e) => ({
                            formatted: e.type === "cell" && r ? r : e.formatted,
                            type: e.type,
                            comment: e.comment,
                          })),
                    email: e.fields.email,
                  };
                  if (t) {
                    o.email = [
                      {
                        string: t,
                      },
                    ];
                  }
                  return o;
                });
                return _e.Z.post("/profile/shards/sync_contacts", {
                  resumes: o,
                  source: n,
                });
              })(r);
              S(true);
              if (e) {
                E(true);
              }
            } catch (e) {
              console.error("Ошибка при синхронизации контактов:", e);
            }
          },
          [ne, c, u, ge],
        );
        const be = (0, o.useCallback)(() => {
          ge();
          _(false);
        }, [ge]);
        const Se = (0, o.useCallback)(
          (e, r, t, n) => {
            const o = r == null ? undefined : r.trim();
            if (!o || o === t) {
              return;
            }
            const i = st(m, e === "phone" ? o : c, e === "email" ? o : u);
            if (!i.length) {
              return;
            }
            const s = e === "phone" ? rt : tt;
            if (n) {
              J.Y.setItem(s, "true");
              F()({
                contactType: e,
                hhtmSource: "profile",
              });
              window.location.reload();
              return;
            }
            const a = e === "phone" ? nt(i) : ot(i);
            D({
              type: e,
              previous: a,
              next: o,
              fromEmpty: !t,
            });
          },
          [m, u, c],
        );
        const je = (0, o.useCallback)(
          (e) => {
            M(false);
            Se("phone", e, P || c || "", se);
          },
          [Se, se, c, P],
        );
        const Ee = (0, o.useCallback)(
          (e) => {
            L(false);
            Se("email", e, T || u || "", ae);
          },
          [Se, ae, u, T],
        );
        const Ce = (0, o.useCallback)(async () => {
          if (V) {
            K()({
              contactType: V.type,
              update: true,
              hhtmSource: "profile",
            });
            U(true);
            try {
              await xe(false);
              q(V.type === "phone" ? "phoneAddedSynced" : "emailAddedSynced");
              (0, H.contactUpdatedElementShownRaw)({
                contactType: V.type,
                fromEmpty: V.fromEmpty,
                resumeUpdated: true,
                hhtmSource: "profile",
              });
            } finally {
              U(false);
              D(null);
            }
          }
        }, [xe, V]);
        const ke = (0, o.useCallback)(() => {
          if (V) {
            K()({
              contactType: V.type,
              update: false,
              hhtmSource: "profile",
            });
            (0, H.contactUpdatedElementShownRaw)({
              contactType: V.type,
              fromEmpty: V.fromEmpty,
              resumeUpdated: false,
              hhtmSource: "profile",
            });
            D(null);
            q(V.type === "phone" ? "phoneAddedKept" : "emailAddedKept");
          }
        }, [V]);
        const Ne = (0, o.useCallback)(() => {
          q(null);
        }, []);
        const Ae = (0, o.useCallback)(() => {
          if ($ === "phone") {
            le();
          } else if ($ === "email") {
            ce();
          }
          W(null);
        }, [$, le, ce]);
        const Me = (0, o.useCallback)(() => {
          W(null);
        }, []);
        const Re = ie && !x;
        const Le = Boolean(V) && Re;
        (0, o.useEffect)(() => {
          if (Le && V) {
            (0, X.updateContactsOfferElementShownRaw)({
              contactType: V.type,
              hhtmSource: "profile",
            });
          }
        }, [Le, V]);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(te, {
              children: e[mt.contactsTitle],
            }),
            (0, N.jsx)(n.X, {
              default: t ? 16 : 12,
            }),
            t
              ? (0, N.jsx)("div", {
                  className: at,
                  children: (0, N.jsx)(ee.xR, {
                    children: (0, N.jsxs)(f.q, {
                      default: 0,
                      children: [
                        (0, N.jsx)(Q.r, {
                          children: (0, N.jsx)("div", {
                            className: lt,
                          }),
                        }),
                        (0, N.jsx)("div", {
                          className: dt,
                          children: (() => {
                            const e = [he(), pe(), ...fe()];
                            const r = ve(e);
                            return (0, N.jsx)(N.Fragment, {
                              children: r.map((e) =>
                                (0, N.jsx)(
                                  Q.r,
                                  {
                                    children: e.element,
                                  },
                                  e.key,
                                ),
                              ),
                            });
                          })(),
                        }),
                        (0, N.jsx)(Q.r, {
                          children: (0, N.jsx)("div", {
                            className: lt,
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : (() => {
                  const e = !!v && Object.values(v).some((e) => Boolean(e));
                  const r = ve([he(), pe(), ...fe()]);
                  const t = r
                    .filter((e) => e.key === "phone" || e.key === "email")
                    .map((e) => e.element);
                  const o = r
                    .filter((e) => e.key !== "phone" && e.key !== "email")
                    .map((e) => e.element);
                  if (d && e) {
                    return (0, N.jsx)("div", {
                      className: `${ct} ${ht}`,
                      children: [...t, ...o],
                    });
                  } else if (d) {
                    return (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)("div", {
                          className: `${ct} ${ut}`,
                          children: t,
                        }),
                        o.length > 0 &&
                          (0, N.jsxs)(N.Fragment, {
                            children: [
                              (0, N.jsx)(n.X, {
                                default: 12,
                              }),
                              (0, N.jsx)("div", {
                                className: `${ct} ${pt}`,
                                children: o,
                              }),
                            ],
                          }),
                      ],
                    });
                  } else if (e) {
                    return (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)("div", {
                          className: `${ct} ${ut}`,
                          children: t,
                        }),
                        o.length > 0 &&
                          (0, N.jsxs)(N.Fragment, {
                            children: [
                              (0, N.jsx)(n.X, {
                                default: 12,
                              }),
                              (0, N.jsx)("div", {
                                className: `${ct} ${ut}`,
                                children: o,
                              }),
                            ],
                          }),
                      ],
                    });
                  } else {
                    return (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)("div", {
                          className: `${ct} ${ut}`,
                          children: t,
                        }),
                        o.length > 0 &&
                          (0, N.jsxs)(N.Fragment, {
                            children: [
                              (0, N.jsx)(n.X, {
                                default: 12,
                              }),
                              (0, N.jsx)("div", {
                                className: `${ct} ${pt}`,
                                children: o,
                              }),
                            ],
                          }),
                      ],
                    });
                  }
                })(),
            Re &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 16,
                  }),
                  (0, N.jsx)(Qr, {
                    onSync: xe,
                  }),
                ],
              }),
            (0, N.jsx)(Gr, {
              visible: C,
              onSync: xe,
              onClose: be,
            }),
            V &&
              (0, N.jsx)(Ur, {
                type: V.type,
                visible: Le,
                previousValue: V.previous,
                newValue: V.next,
                inProgress: B,
                onAccept: Ce,
                onCancel: ke,
              }),
            $ &&
              (0, N.jsx)(_r, {
                type: $,
                visible: Boolean($),
                onContinue: Ae,
                onClose: Me,
              }),
            Z &&
              (0, N.jsx)(re.A, {
                addon: (0, N.jsx)(b.lot, {
                  initialColor: "positive",
                }),
                showClose: true,
                onClose: Ne,
                autohideTime: 3000,
                children: e[mt[Z]],
              }),
            j &&
              (0, N.jsx)(re.A, {
                addon: (0, N.jsx)(b.lot, {
                  initialColor: "positive",
                }),
                showClose: true,
                onClose: () => {
                  E(false);
                },
                autohideTime: 3000,
                children: e[mt.syncContactsSnackbar],
              }),
            (0, N.jsx)(jr, {
              visible: A,
              initialPhone: c,
              onClose: de,
              onSuccess: je,
              hhtmSource: "profile",
            }),
            (0, N.jsx)(Qe, {
              visible: R,
              initialEmail: u,
              onClose: ue,
              onSuccess: Ee,
              hhtmSource: "profile",
            }),
            (0, N.jsx)(me, {}),
          ],
        });
      };
      ft.displayName = "Profile/Contacts/Card/ContactsCard";
      const vt = (0, h.Z)(ft);
      var gt = t(51207);
      var yt = t(3255);
      var xt = t(9533);
      var bt = t(24379);
      var St = t(61916);
      const jt = "header--WXIudr1CAsHexT_n";
      const Et = "profile.resume.card.education.title";
      const Ct = "profile.resume.card.education.button.add";
      const kt = "profile.resume.card.education.button.expand";
      const _t = "profile.resume.card.education.button.collapse";
      const Nt = ({ trls: e, onAdd: r, onEdit: t }) => {
        const [i, s] = (0, o.useState)(false);
        const {
          allEducation: a,
          visibleEducation: l,
          moreThanMax: d,
          isLimitExceeded: c,
        } = (0, St.B)();
        const u = (0, o.useMemo)(() => (i ? a : l), [a, l, i]);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)("div", {
              className: jt,
              children: [
                (0, N.jsx)(te, {
                  children: e[Et],
                }),
                (0, N.jsx)(y.r, {
                  Element: "button",
                  onClick: r,
                  iconLeft: (0, N.jsx)(b.CmA, {}),
                  "data-qa": "profile-education-add",
                  disabled: c,
                  children: e[Ct],
                }),
              ],
            }),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsx)(m.Z, {
              "data-qa": "profile-education-card",
              stretched: true,
              borderWidth: "default",
              borderRadius: 24,
              children: (0, N.jsx)(m.Z, {
                stretched: true,
                padding: 8,
                borderRadius: 16,
                children:
                  u.length > 0
                    ? u.map(({ type: e, index: r, education: n }, o) =>
                        (0, N.jsx)(
                          Pr.b,
                          {
                            "data-qa": `profile-education-card-row-${o}`,
                            vertPadding: true,
                            horPadding: true,
                            borderRadius: 16,
                            align: e === "primary" ? "top" : "center",
                            right: (0, N.jsx)(b.vvx, {}),
                            onClick: () => t(e, r, n.id),
                            children: (0, N.jsx)(bt.C, {
                              education: n,
                              extended: true,
                            }),
                          },
                          `${e}-${r}`,
                        ),
                      )
                    : (0, N.jsx)(Pr.b, {
                        "data-qa": "profile-education-card-row-default",
                        vertPadding: true,
                        horPadding: true,
                        borderRadius: 16,
                        align: "center",
                        right: (0, N.jsx)(b.a2Q, {}),
                        onClick: r,
                        children: (0, N.jsx)(xt.v, {}),
                      }),
              }),
            }),
            d &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 12,
                  }),
                  i
                    ? (0, N.jsx)(y.r, {
                        Element: "button",
                        onClick: () => s(false),
                        iconRight: (0, N.jsx)(b.O0F, {}),
                        "data-qa": "profile-education-collapse-button",
                        children: e[_t],
                      })
                    : (0, N.jsx)(y.r, {
                        Element: "button",
                        onClick: () => s(true),
                        iconRight: (0, N.jsx)(b.Xnh, {}),
                        "data-qa": "profile-education-expand-button",
                        children: e[kt],
                      }),
                ],
              }),
          ],
        });
      };
      Nt.displayName = "Card/Desktop/index/EducationDesktopCard";
      const At = (0, h.Z)(Nt);
      const Mt = "content--QQW_ZU_R7aA4YdxS";
      const Rt = ({ children: e }) =>
        (0, N.jsx)("div", {
          className: Mt,
          children: e,
        });
      Rt.displayName = "components/MobileCardContent/index/MobileCardContent";
      var Lt = t(47997);
      var Pt = t(58260);
      const wt = "profile.resume.card.education.title";
      const It = "profile.resume.card.education.button.add";
      const Tt = ({ trls: e, visible: r, onClose: t, onAdd: o, onEdit: i }) => {
        const { allEducation: s, isLimitExceeded: a } = (0, St.B)();
        return (0, N.jsx)(Lt.R, {
          visible: r,
          onClose: t,
          header: (0, N.jsx)(Pt.z, {
            title: e[wt],
            right: (0, N.jsx)(b.Cs7, {
              onClick: t,
              padding: 8,
              initialColor: "secondary",
            }),
            showDivider: "always",
          }),
          height: "full-screen",
          showDivider: "with-scroll",
          children: (0, N.jsxs)(ae.z, {
            default: 12,
            children: [
              s.map(({ type: e, index: r, education: t }, n) =>
                (0, N.jsx)(
                  m.Z,
                  {
                    stretched: true,
                    borderWidth: "default",
                    borderRadius: 16,
                    "data-qa": `profile-education-bottom-sheet-content-${n}`,
                    children: (0, N.jsx)(Pr.b, {
                      horPadding: true,
                      vertPadding: true,
                      borderRadius: 12,
                      align: e === "primary" ? "top" : "center",
                      right: (0, N.jsx)(b.a2Q, {}),
                      onClick: () => i(e, r, t.id),
                      children: (0, N.jsx)(bt.C, {
                        education: t,
                        extended: true,
                      }),
                    }),
                  },
                  `${e}-${r}`,
                ),
              ),
              (0, N.jsx)(x.z, {
                disabled: a,
                stretched: true,
                size: "large",
                mode: "secondary",
                style: "accent",
                onClick: o,
                icon: (0, N.jsx)(b.CmA, {}),
                "data-qa": "profile-education-add",
                children: e[It],
              }),
              (0, N.jsx)(n.X, {
                default: 12,
              }),
            ],
          }),
        });
      };
      Tt.displayName = "Card/Mobile/EducationList/EducationList";
      const Ot = (0, h.Z)(Tt);
      const Vt = "profile.resume.card.education.title";
      const Dt = "profile.resume.card.mobile.edit";
      const Bt = ({ trls: e, onAdd: r, onEdit: t }) => {
        const i = (0, u.usePush)();
        const a = (0, s.v)(I.zP);
        const { visibleEducation: l } = (0, St.B)();
        const [d, c] = (0, o.useState)(false);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(te, {
              children: e[Vt],
            }),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsxs)(m.Z, {
              stretched: true,
              borderWidth: "default",
              padding: 12,
              borderRadius: 24,
              "data-qa": "profile-education-card",
              children: [
                (0, N.jsx)(Rt, {
                  children: (0, N.jsx)(ae.z, {
                    default: 16,
                    children:
                      l.length > 0
                        ? l.map(({ type: e, index: r, education: t }, n) =>
                            (0, N.jsx)(
                              Pr.b,
                              {
                                "data-qa": `profile-education-card-row-${n}`,
                                children: (0, N.jsx)(bt.C, {
                                  education: t,
                                  extended: false,
                                }),
                              },
                              `${e}-${r}`,
                            ),
                          )
                        : (0, N.jsx)(Pr.b, {
                            "data-qa": "profile-education-card-row-default",
                            children: (0, N.jsx)(xt.v, {}),
                          }),
                  }),
                }),
                (0, N.jsx)(x.z, {
                  stretched: true,
                  mode: "secondary",
                  style: "neutral",
                  onClick: () => {
                    i(
                      "profile/block/educations" +
                        (a ? `?resumeFrom=${a}` : ""),
                    );
                  },
                  "data-qa": "profile-education-viewAll",
                  children: e[Dt],
                }),
              ],
            }),
            (0, N.jsx)(Ot, {
              visible: d,
              onClose: () => c(false),
              onAdd: r,
              onEdit: t,
            }),
          ],
        });
      };
      Bt.displayName = "Card/Mobile/index/EducationMobileCard";
      const Ut = (0, h.Z)(Bt);
      const Zt = "profile";
      const qt = () => {
        const e = (0, u.usePush)();
        const { isMobile: r } = (0, p.G)();
        const t = (0, i.useSelector)(k.Tj);
        const n = (0, i.useSelector)(k.Pr);
        const o = (0, i.useSelector)(I.zP);
        const s = o ? `?resumeFrom=${o}` : "";
        const a = () => {
          (0, yt.oI)(Zt, "add");
          e(`/profile/edit/primaryEducation${s}`);
        };
        const l = (r, o, i) => {
          (0, yt.oI)(Zt, "edit", i);
          const a =
            r === "primary"
              ? t.findIndex((e) => e.id === i)
              : n.findIndex((e) => e.id === i);
          e(
            `/profile/edit/${r === "primary" ? "primaryEducation" : "elementaryEducation"}/${a}${s}`,
          );
        };
        return (0, N.jsx)(N.Fragment, {
          children: r
            ? (0, N.jsx)(Ut, {
                onAdd: a,
                onEdit: l,
              })
            : (0, N.jsx)(At, {
                onAdd: a,
                onEdit: l,
              }),
        });
      };
      qt.displayName = "Education/Card/index/EducationCard";
      const Ft = (0, h.Z)(qt);
      var Ht = t(86953);
      var zt = t(51520);
      const $t = "collapsible--mtIGsixvfqQ9ddS7";
      const Gt = ({
        children: e,
        expanded: r = false,
        minHeight: t = 0,
        borderRadius: n = 0,
      }) => {
        const i = (0, o.useRef)(null);
        const [s, a] = (0, o.useState)(r ? "auto" : `${t}px`);
        (0, o.useLayoutEffect)(() => {
          if (i.current) {
            const e = `${i.current.scrollHeight}px`;
            a(r ? e : `${t}px`);
          }
        }, [r, e, t]);
        return (0, N.jsx)("div", {
          ref: i,
          "data-qa": "collapsible",
          style: {
            maxHeight: s,
            borderRadius: `${n}px`,
          },
          className: $t,
          children: e,
        });
      };
      Gt.displayName = "components/Collapsible/index/Collapsible";
      const Wt = (e, r = []) =>
        r.some((r) => {
          var t;
          return (
            r.verified &&
            r.id === e.id &&
            ((r == null || (t = r.level) === null || t === undefined
              ? undefined
              : t.internal_id) === e.degree ||
              r.verifications.some((r) => {
                return (
                  r.level?.internal_id === e.degree &&
                  (r.validity?.state === "EFFECTIVE" ||
                    r.validity?.state === "GRACE")
                );
              }))
          );
        });
      var Kt = t(70406);
      var Xt = t(30591);
      const Jt = "header--NT7s13PLakIJX2uo";
      const Yt = "degree--KpPHulkMXQCoexA6";
      const Qt = "profile.resume.card.languages.title";
      const en = "profile.resume.card.languages.button.add";
      const rn = "profile.resume.card.languages.button.expand";
      const tn = "profile.resume.card.languages.button.collapse";
      const nn = {
        native: {
          title: "profile.resume.card.languages.empty.native.title",
          degreeText: "profile.resume.card.languages.empty.native.degreeText",
        },
      };
      const on = ({ trls: e, onEdit: r, onAdd: t }) => {
        const [i, l] = (0, o.useState)(false);
        const d = (0, s.v)(k.cG);
        const c = (0, s.v)(a.uS);
        const { hasNative: u } = (0, Xt.x)(d);
        const h = (0, o.useMemo)(
          () => Math.min(4, Math.max(d.length + (u ? 0 : 1), 1)) * 80 + 16,
          [d, u],
        );
        const p = (0, o.useMemo)(() => d.length + (u ? 0 : 1) > 4, [d, u]);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)("div", {
              className: Jt,
              children: [
                (0, N.jsx)(te, {
                  children: e[Qt],
                }),
                (0, N.jsx)(y.r, {
                  Element: "button",
                  onClick: t,
                  iconLeft: (0, N.jsx)(b.CmA, {}),
                  "data-qa": "profile-language-add",
                  children: e[en],
                }),
              ],
            }),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsx)(Kt.e, {}),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsx)(m.Z, {
              stretched: true,
              "data-qa": "profile-language-card",
              borderWidth: "default",
              borderRadius: 24,
              children: (0, N.jsx)(Gt, {
                expanded: i,
                minHeight: h,
                borderRadius: 16,
                children: (0, N.jsxs)(m.Z, {
                  stretched: true,
                  padding: 8,
                  borderRadius: 16,
                  children: [
                    !u &&
                      (0, N.jsxs)(Pr.b, {
                        "data-qa": "profile-language-card-empty",
                        vertPadding: true,
                        horPadding: true,
                        borderRadius: 16,
                        right: (0, N.jsx)(b.vvx, {}),
                        onClick: t,
                        children: [
                          (0, N.jsx)(wr.j, {
                            type: "title",
                            maxLines: 1,
                            children: e[nn.native.degreeText],
                          }),
                          (0, N.jsx)(wr.j, {
                            type: "subtitle",
                            maxLines: 1,
                            children: (0, N.jsx)("div", {
                              className: Yt,
                              children: (0, N.jsx)("span", {
                                children: e[nn.native.title],
                              }),
                            }),
                          }),
                        ],
                      }),
                    d.map((e, t) =>
                      (0, N.jsxs)(
                        Pr.b,
                        {
                          "data-qa": `profile-language-card-row-${t}`,
                          vertPadding: true,
                          horPadding: true,
                          borderRadius: 16,
                          right: (0, N.jsx)(b.vvx, {}),
                          onClick: i || t < 4 ? () => r(t) : undefined,
                          children: [
                            (0, N.jsx)(wr.j, {
                              type: "title",
                              maxLines: 1,
                              children: e.title,
                            }),
                            (0, N.jsx)(wr.j, {
                              type: "subtitle",
                              maxLines: 1,
                              children: (0, N.jsxs)("div", {
                                className: Yt,
                                children: [
                                  Wt(e, c) &&
                                    (0, N.jsx)(b.Cu5, {
                                      initialColor: "positive",
                                    }),
                                  (0, N.jsx)("span", {
                                    children: e.degreeText,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  ],
                }),
              }),
            }),
            p &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 12,
                  }),
                  i
                    ? (0, N.jsx)(y.r, {
                        Element: "button",
                        onClick: () => l(false),
                        iconRight: (0, N.jsx)(b.O0F, {}),
                        "data-qa": "profile-language-collapse-button",
                        children: e[tn],
                      })
                    : (0, N.jsx)(y.r, {
                        Element: "button",
                        onClick: () => l(true),
                        iconRight: (0, N.jsx)(b.Xnh, {}),
                        "data-qa": "profile-language-expand-button",
                        children: e[rn],
                      }),
                ],
              }),
          ],
        });
      };
      on.displayName = "Card/DesktopCard/index/DesktopCard";
      const sn = (0, h.Z)(on);
      var an = t(9686);
      const ln = "tag--s_pcqPVZUPwVgYPE";
      const dn = "profile.resume.card.mobile.edit";
      const cn = "profile.resume.card.languages.title";
      const un = {
        native: {
          title: "profile.resume.card.languages.empty.native.title",
          degreeText: "profile.resume.card.languages.empty.native.degreeText",
        },
        foreign: {
          title: "profile.resume.card.languages.empty.foreign.title",
          degreeText: "profile.resume.card.languages.empty.foreign.degreeText",
        },
      };
      const hn = ({ trls: e }) => {
        const r = (0, u.usePush)();
        const t = (0, s.v)(k.cG);
        const i = (0, s.v)(a.uS);
        const l = (0, s.v)(I.zP);
        const { hasForeign: d, hasNative: c } = (0, Xt.x)(t);
        const h = (0, o.useMemo)(() => t.length > 4, [t]);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(te, {
              children: e[cn],
            }),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsx)(Kt.e, {}),
            (0, N.jsx)(n.X, {
              default: 12,
            }),
            (0, N.jsxs)(m.Z, {
              stretched: true,
              borderWidth: "default",
              padding: 12,
              borderRadius: 24,
              "data-qa": "profile-language-card",
              children: [
                (0, N.jsx)(Rt, {
                  children: (0, N.jsxs)(ae.z, {
                    default: 8,
                    children: [
                      !c &&
                        (0, N.jsx)("div", {
                          children: (0, N.jsx)(an.V, {
                            style: "neutral",
                            children: `${e[un.native.title]} — ${e[un.native.degreeText].toLowerCase()}`,
                          }),
                        }),
                      t.slice(0, 4).map((e, r) =>
                        (0, N.jsxs)(
                          "div",
                          {
                            className: ln,
                            children: [
                              (0, N.jsx)(an.V, {
                                "data-qa": `profile-language-tag-${r}`,
                                style: Wt(e, i) ? "positive" : "neutral",
                                children: `${e.title}, ${e.degreeText}`,
                              }),
                              h &&
                                r === 3 &&
                                (0, N.jsx)(an.V, {
                                  style: "neutral",
                                  children: "...",
                                }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                      !d &&
                        (0, N.jsx)("div", {
                          children: (0, N.jsx)(an.V, {
                            style: "neutral",
                            children: `${e[un.foreign.title]} — ${e[un.foreign.degreeText].toLowerCase()}`,
                          }),
                        }),
                    ],
                  }),
                }),
                (0, N.jsx)(x.z, {
                  stretched: true,
                  mode: "secondary",
                  style: "neutral",
                  onClick: () => {
                    r(
                      "/profile/block/languages" +
                        (l ? `?resumeFrom=${l}` : ""),
                    );
                  },
                  "data-qa": "profile-language-viewAll",
                  children: e[dn],
                }),
              ],
            }),
          ],
        });
      };
      hn.displayName = "Card/MobileCard/index/MobileCard";
      const pn = (0, h.Z)(hn);
      const mn = () => {
        const e = (0, i.useDispatch)();
        const { isMobile: r } = (0, p.G)();
        return (0, N.jsxs)("div", {
          children: [
            r
              ? (0, N.jsx)(pn, {})
              : (0, N.jsx)(sn, {
                  onAdd: () => {
                    (0, zt.AC)();
                    e(
                      (0, l.zS)({
                        type: "language",
                        openedRowIndex: null,
                      }),
                    );
                  },
                  onEdit: (r) => {
                    e(
                      (0, l.zS)({
                        type: "language",
                        openedRowIndex: r,
                      }),
                    );
                  },
                }),
            (0, N.jsx)(Ht.L, {}),
          ],
        });
      };
      mn.displayName = "Languages/Card/index/LanguagesCard";
      var fn = t(27976);
      var vn = t(41869);
      const gn = "profile.resume.editor.otherCommunicationMethods.title";
      const yn = "profile.resume.editor.otherCommunicationMethods.icons.title";
      const xn =
        "profile.resume.card.otherCommunicationMethods.value.placeholder";
      const bn =
        "profile.resume.card.otherCommunicationMethods.description.placeholder";
      const Sn =
        "profile.resume.card.otherCommunicationMethods.description.example";
      const jn = {
        UNKNOWN: "profile.editor.field.error.unknown",
        REQUIRED: "profile.editor.field.error.required",
        NOT_MATCH_REGEXP: "profile.editor.field.error.regexp",
        LENGTH_GREATER_THAN_MAXIMUM: {
          one: "profile.editor.field.error.max-length.one",
          some: "profile.editor.field.error.max-length.some",
          many: "profile.editor.field.error.max-length.many",
        },
      };
      const En = ({ trls: e }) => {
        var r;
        var t;
        const o = (0, i.useDispatch)();
        const a = (0, s.v)(I.av);
        const d = (0, s.v)(I.EU);
        const c = (0, s.v)(I.S$);
        const u = (0, s.v)(k.lX);
        const h = (0, s.v)(vn.X);
        const { onChange: p } = (0, ce.H)("otherCommunicationMethods");
        const m = c === null;
        const v = !m;
        const y = v ? h[c] : null;
        const x = h[h.length - 1];
        const b = x && !x.value && !x.description;
        const j = m && b ? x : null;
        const E = m ? j : y;
        const C = c != null && (u == null ? undefined : u.length) === h.length;
        const _ = c ?? h.length;
        const A = (0, ue.wB)(jn, e);
        const { invalid: M, errorMessage: R } = (0, ue.A9)(
          "otherCommunicationMethods",
          _,
          "value",
          A,
          {
            LENGTH_GREATER_THAN_MAXIMUM:
              (E == null || (r = E.value) === null || r === undefined
                ? undefined
                : r.length) || 0,
          },
        );
        const { invalid: L, errorMessage: P } = (0, ue.A9)(
          "otherCommunicationMethods",
          _,
          "description",
          A,
          {
            LENGTH_GREATER_THAN_MAXIMUM:
              (E == null || (t = E.description) === null || t === undefined
                ? undefined
                : t.length) || 0,
          },
        );
        const w = (e, r) => {
          const t = [...h];
          let n = t;
          if (m) {
            const i = t.length - 1;
            if (j !== null) {
              n[i] = {
                ...t[i],
                [e]: r,
              };
            } else {
              const o = {
                value: e === "value" ? r : "",
                description: e === "description" ? r : "",
              };
              n = [...t, o];
            }
            o(
              (0, l.zS)({
                type: "otherCommunicationMethods",
                openedRowIndex: h.length,
              }),
            );
          } else if (v) {
            const o = c;
            const i = {
              ...t[o],
              [e]: r,
            };
            n = t.map((e, r) => (r === o ? i : e));
          }
          p(n);
        };
        return (0, N.jsxs)(de.U, {
          title: e[gn],
          loading: a,
          visible: d,
          onSave: () => {
            o(
              (0, l.xU)({
                hideSuccessSnackbar: true,
              }),
            );
          },
          onClose: () => o((0, l.K7)()),
          onHeaderDelete: C
            ? () => {
                if (v && c !== null) {
                  const e = h.filter((e, r) => r !== c);
                  o(
                    (0, l.xU)({
                      hideSuccessSnackbar: true,
                      fields: {
                        otherCommunicationMethods: e,
                      },
                    }),
                  );
                }
              }
            : undefined,
          "data-qa": "profile-other-communication-methods-editor-modal",
          children: [
            (0, N.jsx)(n.X, {
              default: 4,
            }),
            (0, N.jsxs)(ae.z, {
              default: 12,
              children: [
                (0, N.jsx)(fn.F, {
                  children: (0, N.jsxs)(f.q, {
                    default: 16,
                    children: [
                      (0, N.jsx)(S.jDe, {}),
                      (0, N.jsx)(S.a64, {}),
                      (0, N.jsx)(S.ka2, {}),
                      (0, N.jsx)(S.ud9, {}),
                      (0, N.jsx)(S.GLn, {}),
                    ],
                  }),
                }),
                (0, N.jsx)(fn.F, {
                  children: (0, N.jsx)(g.x, {
                    typography: "label-3-regular",
                    style: "secondary",
                    children: e[yn],
                  }),
                }),
                (0, N.jsx)(le.I, {
                  name: "otherCommunicationMethod-value",
                  elevatePlaceholder: true,
                  placeholder: e[xn],
                  value: (E == null ? undefined : E.value) || "",
                  onChange: (e) => w("value", e),
                  invalid: M,
                  errorMessage: R,
                  clearable: true,
                  "data-qa": "profile-other-communication-methods-value-input",
                }),
                (0, N.jsx)(le.I, {
                  name: "otherCommunicationMethod-description",
                  elevatePlaceholder: true,
                  placeholder: e[bn],
                  value: (E == null ? undefined : E.description) || "",
                  onChange: (e) => w("description", e),
                  invalid: L,
                  errorMessage: P,
                  clearable: true,
                  description: e[Sn],
                  "data-qa":
                    "profile-other-communication-methods-description-input",
                }),
              ],
            }),
            (0, N.jsx)(n.X, {
              default: 24,
              gteS: 32,
            }),
          ],
        });
      };
      En.displayName =
        "OtherCommunicationMethods/Editor/index/OtherCommunicationMethodsEditor";
      const Cn = (0, h.Z)(En);
      var kn = t(53479);
      var _n = t.n(kn);
      const Nn = "header--BH20Dkz8QtaaCQDd";
      const An = "description--xsVBo5EfNLwSWIuO";
      const Mn = "profile.resume.card.otherCommunicationMethods.title";
      const Rn = "profile.resume.card.otherCommunicationMethods.button.expand";
      const Ln =
        "profile.resume.card.otherCommunicationMethods.button.collapse";
      const Pn = "profile.resume.card.otherCommunicationMethods.button.add";
      const wn = ({ trls: e }) => {
        const r = (0, i.useDispatch)();
        const [t, a] = (0, o.useState)(false);
        const d = (0, s.v)(k.lX);
        const c = (0, o.useMemo)(
          () => Math.min(4, Math.max(d.length, 1)) * 80 + 16,
          [d],
        );
        const u = (0, o.useMemo)(() => d.length > 4, [d]);
        return (0, N.jsxs)(Mr.ElementShownAnchor, {
          fn: Lr(),
          messenger: "other",
          children: [
            (0, N.jsxs)("div", {
              className: Nn,
              children: [
                (0, N.jsx)(te, {
                  children: e[Mn],
                }),
                (0, N.jsx)(y.r, {
                  Element: "button",
                  onClick: () => {
                    _n()();
                    r(
                      (0, l.zS)({
                        type: "otherCommunicationMethods",
                        openedRowIndex: null,
                      }),
                    );
                  },
                  iconLeft: (0, N.jsx)(b.CmA, {}),
                  "data-qa": "profile-other-communication-methods-add",
                  children: e[Pn],
                }),
              ],
            }),
            !!d.length &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 12,
                  }),
                  (0, N.jsx)(m.Z, {
                    stretched: true,
                    borderWidth: "default",
                    borderRadius: 24,
                    "data-qa": "profile-other-communication-methods-card",
                    children: (0, N.jsx)(Gt, {
                      expanded: t,
                      minHeight: c,
                      borderRadius: 24,
                      children: (0, N.jsx)(m.Z, {
                        stretched: true,
                        padding: 8,
                        borderRadius: 24,
                        children: d.map((e, n) =>
                          (0, N.jsxs)(
                            Pr.b,
                            {
                              "data-qa": `profile-other-communication-methods-card-row-${n}`,
                              vertPadding: true,
                              horPadding: true,
                              borderRadius: 16,
                              right: (0, N.jsx)(b.vvx, {}),
                              onClick:
                                t || n < 4
                                  ? () =>
                                      ((e) => {
                                        r(
                                          (0, l.zS)({
                                            type: "otherCommunicationMethods",
                                            openedRowIndex: e,
                                          }),
                                        );
                                      })(n)
                                  : undefined,
                              children: [
                                (0, N.jsx)(wr.j, {
                                  type: "title",
                                  maxLines: 1,
                                  children: e.value,
                                }),
                                (0, N.jsx)(wr.j, {
                                  type: "subtitle",
                                  maxLines: 1,
                                  children: (0, N.jsx)("div", {
                                    className: An,
                                    children: (0, N.jsx)("span", {
                                      children: e.description,
                                    }),
                                  }),
                                }),
                              ],
                            },
                            `${e.value}-${n}`,
                          ),
                        ),
                      }),
                    }),
                  }),
                ],
              }),
            u &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 12,
                  }),
                  t
                    ? (0, N.jsx)(y.r, {
                        Element: "button",
                        onClick: () => a(false),
                        iconRight: (0, N.jsx)(b.O0F, {}),
                        "data-qa":
                          "profile-other-communication-methods-collapse-button",
                        children: e[Ln],
                      })
                    : (0, N.jsx)(y.r, {
                        Element: "button",
                        onClick: () => a(true),
                        iconRight: (0, N.jsx)(b.Xnh, {}),
                        "data-qa":
                          "profile-other-communication-methods-expand-button",
                        children: e[Rn],
                      }),
                ],
              }),
          ],
        });
      };
      wn.displayName = "Card/DesktopCard/index/DesktopCard";
      const In = (0, h.Z)(wn);
      const Tn = "profile.resume.card.otherCommunicationMethods.title";
      const On = "profile.resume.card.otherCommunicationMethods.button.add";
      const Vn = ({
        trls: e,
        onClose: r,
        visible: t,
        methods: n,
        onAdd: o,
        onClick: i,
      }) =>
        (0, N.jsx)(Lt.R, {
          header: (0, N.jsx)(Pt.z, {
            title: e[Tn],
            right: (0, N.jsx)(b.Cs7, {
              initialColor: "secondary",
              onClick: r,
              padding: 8,
            }),
            showDivider: "always",
          }),
          visible: t,
          onClose: r,
          height: "full-screen",
          showDivider: "with-scroll",
          children: (0, N.jsxs)(ae.z, {
            default: 12,
            children: [
              n.map((e, r) =>
                (0, N.jsx)(
                  m.Z,
                  {
                    stretched: true,
                    borderWidth: "default",
                    borderRadius: 16,
                    "data-qa": `profile-other-communication-method-bottom-sheet-content-${r}`,
                    children: (0, N.jsxs)(Pr.b, {
                      horPadding: true,
                      vertPadding: true,
                      borderRadius: 12,
                      right: (0, N.jsx)(b.a2Q, {}),
                      onClick: () => (i == null ? undefined : i(r)),
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "title",
                          maxLines: 1,
                          children: e.description,
                        }),
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          maxLines: 1,
                          children: e.value,
                        }),
                      ],
                    }),
                  },
                  `${e.value}-${r}`,
                ),
              ),
              (0, N.jsx)(x.z, {
                stretched: true,
                size: "large",
                mode: "secondary",
                style: "accent",
                onClick: o,
                icon: (0, N.jsx)(b.CmA, {}),
                "data-qa": "profile-other-communication-methods-add",
                children: e[On],
              }),
            ],
          }),
        });
      Vn.displayName =
        "Card/MobileCard/OtherCommunicationMethodsList/OtherCommunicationMethodsList";
      const Dn = (0, h.Z)(Vn);
      const Bn = "profile.resume.card.otherCommunicationMethods.title";
      const Un = "profile.resume.card.otherCommunicationMethods.subtitle.v2";
      const Zn = ({ trls: e }) => {
        const r = (0, i.useDispatch)();
        const [t, n] = (0, o.useState)(false);
        const a = (0, s.v)(k.lX);
        return (0, N.jsxs)(Mr.ElementShownAnchor, {
          fn: Lr(),
          messenger: "other",
          children: [
            (0, N.jsx)(m.Z, {
              stretched: true,
              borderWidth: "default",
              padding: 8,
              borderRadius: 24,
              "data-qa": "profile-other-communication-methods-card",
              children: (0, N.jsxs)(Pr.b, {
                horPadding: true,
                vertPadding: true,
                borderRadius: 12,
                "data-qa": "profile-other-communication-methods-cell",
                onClick: () => n(true),
                right: (0, N.jsx)(b.a2Q, {}),
                children: [
                  (0, N.jsx)(wr.j, {
                    type: "title",
                    maxLines: 1,
                    children: e[Bn],
                  }),
                  (0, N.jsx)(wr.j, {
                    type: "subtitle",
                    maxLines: 1,
                    children: e[Un],
                  }),
                ],
              }),
            }),
            (0, N.jsx)(Dn, {
              onClose: () => n(false),
              visible: t,
              methods: a,
              onAdd: () => {
                _n()();
                r(
                  (0, l.zS)({
                    type: "otherCommunicationMethods",
                    openedRowIndex: null,
                  }),
                );
              },
              onClick: (e) => {
                r(
                  (0, l.zS)({
                    type: "otherCommunicationMethods",
                    openedRowIndex: e,
                  }),
                );
              },
            }),
          ],
        });
      };
      Zn.displayName = "Card/MobileCard/index/MobileCard";
      const qn = (0, h.Z)(Zn);
      const Fn = () => {
        const { isMobile: e } = (0, p.G)();
        return (0, N.jsxs)("div", {
          children: [
            e ? (0, N.jsx)(qn, {}) : (0, N.jsx)(In, {}),
            (0, N.jsx)(Cn, {}),
          ],
        });
      };
      Fn.displayName =
        "OtherCommunicationMethods/Card/index/OtherCommunicationMethodsCard";
      var Hn = t(77445);
      var zn = t(56696);
      var $n = t.n(zn);
      var Gn = t(68966);
      var Wn = t(95672);
      const Kn = {
        [Wn.Lx.Unknown]: "profile.jobSearchStatus.current.unknown",
        [Wn.Lx.ActiveSearch]: "profile.jobSearchStatus.current.active_search",
        [Wn.Lx.LookingForOffers]:
          "profile.jobSearchStatus.current.looking_for_offers",
        [Wn.Lx.HasJobOffer]: "profile.jobSearchStatus.current.has_job_offer",
        [Wn.Lx.AcceptedJobOffer]:
          "profile.jobSearchStatus.current.accepted_job_offer",
        [Wn.Lx.NotLookingForJob]:
          "profile.jobSearchStatus.current.not_looking_for_job",
      };
      const Xn = (e) =>
        e === Wn.Lx.Unknown
          ? "neutral"
          : e === Wn.Lx.NotLookingForJob
            ? "warning"
            : "positive";
      const Jn = ({ trls: e }) => {
        const r = (0, s.v)(Gn.fn);
        return (0, N.jsx)(an.V, {
          style: Xn(r),
          children: (0, N.jsx)("span", {
            "data-qa": "search-status-tag",
            children: e[Kn[r]],
          }),
        });
      };
      Jn.displayName =
        "JobSearchStatus/StatusBadge/CellStatusBadge/CellStatusBadge";
      const Yn = (0, h.Z)(Jn);
      var Qn = t(32984);
      var eo = t(62980);
      var ro = t(58177);
      var to = t(77942);
      const no = "profile.resume.card.searchPreferences.label";
      const oo = "profile.resume.card.adress.label.v2";
      const io = "profile.resume.card.adress.label.v3";
      const so = "profile.searchPreferences.jobSearchStatus.block.title";
      const ao = ({ trls: e }) => {
        const r = (0, u.usePush)();
        const t = (0, Y.ZP)("web_geo_better_ux");
        const o = (0, s.v)(I.zP);
        return (0, N.jsxs)(ae.z, {
          default: 12,
          children: [
            (0, N.jsx)(te, {
              children: e[no],
            }),
            (0, N.jsxs)(m.Z, {
              stretched: true,
              borderWidth: "default",
              padding: 8,
              borderRadius: 24,
              children: [
                (0, N.jsx)(Qn.l, {
                  renderTrigger: (r) =>
                    (0, N.jsxs)(Pr.b, {
                      vertPadding: true,
                      horPadding: true,
                      borderRadius: 16,
                      right: (0, N.jsx)(b.vvx, {
                        "data-qa": "search-status-select-pen-icon",
                      }),
                      onClick: r,
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          children: e[so],
                        }),
                        (0, N.jsx)(n.X, {
                          default: 12,
                        }),
                        (0, N.jsx)(wr.j, {
                          children: (0, N.jsx)(Yn, {}),
                        }),
                      ],
                    }),
                }),
                (0, N.jsxs)(Pr.b, {
                  vertPadding: true,
                  horPadding: true,
                  borderRadius: 16,
                  right: (0, N.jsx)(b.vvx, {}),
                  onClick: () => {
                    $n()();
                    r("/profile/edit/address" + (o ? `?resumeFrom=${o}` : ""));
                  },
                  children: [
                    (0, N.jsx)(wr.j, {
                      type: "subtitle",
                      children: t ? e[io] : e[oo],
                    }),
                    (0, N.jsx)(wr.j, {
                      children: (0, N.jsx)(ro.x, {}),
                    }),
                  ],
                }),
                (0, N.jsx)(Pr.b, {
                  vertPadding: true,
                  horPadding: true,
                  borderRadius: 16,
                  right: (0, N.jsx)(b.vvx, {}),
                  onClick: () => {
                    (0, to.MY)();
                    r(
                      "/profile/edit/preferredWorkAreas" +
                        (o ? `?resumeFrom=${o}` : ""),
                    );
                  },
                  children: (0, N.jsx)(eo.I, {}),
                }),
              ],
            }),
          ],
        });
      };
      ao.displayName = "Card/Desktop/index/SearchPreferencesCardDesktop";
      const lo = (0, h.Z)(ao);
      const co = "profile.resume.card.searchPreferences.label.v2";
      const uo = "profile.resume.card.adress.label.v2";
      const ho = "profile.searchPreferences.jobSearchStatus.block.title";
      const po = {
        [Wn.Lx.Unknown]: "profile.jobSearchStatus.current.unknown",
        [Wn.Lx.ActiveSearch]: "profile.jobSearchStatus.current.active_search",
        [Wn.Lx.LookingForOffers]:
          "profile.jobSearchStatus.current.looking_for_offers",
        [Wn.Lx.HasJobOffer]: "profile.jobSearchStatus.current.has_job_offer",
        [Wn.Lx.AcceptedJobOffer]:
          "profile.jobSearchStatus.current.accepted_job_offer",
        [Wn.Lx.NotLookingForJob]:
          "profile.jobSearchStatus.current.not_looking_for_job",
      };
      const mo = ({ trls: e, onClose: r, visible: t }) => {
        const o = (0, u.usePush)();
        const s = (0, i.useSelector)(Gn.fn);
        const a = (0, i.useSelector)(I.zP);
        return (0, N.jsx)(Lt.R, {
          header: (0, N.jsx)(Pt.z, {
            title: e[co],
            right: (0, N.jsx)(b.Cs7, {
              initialColor: "secondary",
              onClick: r,
              padding: 8,
            }),
            showDivider: "always",
          }),
          visible: t,
          onClose: r,
          height: "full-screen",
          showDivider: "with-scroll",
          children: (0, N.jsxs)(ae.z, {
            default: 16,
            children: [
              (0, N.jsx)(Qn.l, {
                renderTrigger: (r) =>
                  (0, N.jsx)(m.Z, {
                    stretched: true,
                    borderWidth: "default",
                    borderRadius: 16,
                    children: (0, N.jsxs)(Pr.b, {
                      horPadding: true,
                      vertPadding: true,
                      borderRadius: 12,
                      onClick: r,
                      right: (0, N.jsx)(b.vvx, {}),
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          children: e[ho],
                        }),
                        (0, N.jsx)(n.X, {
                          default: 4,
                        }),
                        (0, N.jsx)(wr.j, {
                          children: e[po[s]],
                        }),
                      ],
                    }),
                  }),
              }),
              (0, N.jsx)(m.Z, {
                stretched: true,
                borderWidth: "default",
                borderRadius: 16,
                children: (0, N.jsxs)(Pr.b, {
                  align: "top",
                  horPadding: true,
                  vertPadding: true,
                  borderRadius: 12,
                  right: (0, N.jsx)(b.a2Q, {}),
                  onClick: () => {
                    $n()();
                    o("/profile/edit/address" + (a ? `?resumeFrom=${a}` : ""));
                  },
                  children: [
                    (0, N.jsx)(wr.j, {
                      type: "subtitle",
                      children: e[uo],
                    }),
                    (0, N.jsx)(wr.j, {
                      children: (0, N.jsx)(ro.x, {}),
                    }),
                  ],
                }),
              }),
              (0, N.jsx)(m.Z, {
                stretched: true,
                borderWidth: "default",
                borderRadius: 16,
                children: (0, N.jsx)(Pr.b, {
                  align: "top",
                  horPadding: true,
                  vertPadding: true,
                  borderRadius: 12,
                  right: (0, N.jsx)(b.a2Q, {}),
                  onClick: () => {
                    (0, to.MY)();
                    o(
                      "/profile/edit/preferredWorkAreas" +
                        (a ? `?resumeFrom=${a}` : ""),
                    );
                  },
                  children: (0, N.jsx)(eo.I, {}),
                }),
              }),
            ],
          }),
        });
      };
      mo.displayName = "Card/Mobile/BottomSheetCards/BottomSheetCards";
      const fo = (0, h.Z)(mo);
      const vo = "profile.resume.card.mobile.edit";
      const go = "profile.resume.card.searchPreferences.label.v2";
      const yo = "profile.resume.card.adress.label.v2";
      const xo = "profile.resume.card.adress.label.v3";
      const bo = "profile.searchPreferences.jobSearchStatus.block.title.v2";
      const So = ({ trls: e }) => {
        const r = (0, u.usePush)();
        const t = (0, Y.ZP)("web_geo_better_ux");
        const i = (0, s.v)(I.zP);
        const [a, l] = (0, o.useState)(false);
        return (0, N.jsxs)(ae.z, {
          default: 12,
          children: [
            (0, N.jsx)(te, {
              children: e[go],
            }),
            (0, N.jsxs)(m.Z, {
              stretched: true,
              borderWidth: "default",
              padding: 12,
              borderRadius: 24,
              children: [
                (0, N.jsxs)(Rt, {
                  children: [
                    (0, N.jsxs)(Pr.b, {
                      align: "top",
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          children: e[bo],
                        }),
                        (0, N.jsx)(n.X, {
                          default: 8,
                        }),
                        (0, N.jsx)(ae.z, {
                          default: 8,
                          children: (0, N.jsx)(wr.j, {
                            children: (0, N.jsx)(Yn, {}),
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsx)(n.X, {
                      default: 16,
                    }),
                    (0, N.jsxs)(Pr.b, {
                      align: "top",
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          children: t ? e[xo] : e[yo],
                        }),
                        (0, N.jsx)(wr.j, {
                          children: (0, N.jsx)(ro.x, {}),
                        }),
                      ],
                    }),
                    (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(n.X, {
                          default: 16,
                        }),
                        (0, N.jsx)(Pr.b, {
                          align: "top",
                          children: (0, N.jsx)(wr.j, {
                            children: (0, N.jsx)(eo.I, {}),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, N.jsx)(x.z, {
                  stretched: true,
                  mode: "secondary",
                  style: "neutral",
                  onClick: () => {
                    r(
                      "/profile/block/search_preferences" +
                        (i ? `?resumeFrom=${i}` : ""),
                    );
                  },
                  "data-qa": "profile-language-viewAll",
                  children: e[vo],
                }),
              ],
            }),
            (0, N.jsx)(fo, {
              visible: a,
              onClose: () => l(false),
            }),
          ],
        });
      };
      So.displayName = "Card/Mobile/index/SearchPreferencesCardMobile";
      const jo = (0, h.Z)(So);
      const Eo = () => {
        const { isMobile: e } = (0, p.G)();
        return (0, N.jsx)(Hn.i, {
          children: e ? (0, N.jsx)(jo, {}) : (0, N.jsx)(lo, {}),
        });
      };
      Eo.displayName =
        "SearchPreferences/Card/index/SearchPreferencesCardWithAddress";
      var Co = t(7206);
      const ko = "profile.resume.card.additional.vehicle.has-vehicle";
      const _o = "profile.resume.card.additional.vehicle.no-vehicle";
      const No = "profile.resume.card.additional.vehicle.driver-license-types";
      const Ao = "profile.resume.card.additional.vehicle.and-more";
      const Mo = "profile.resume.card.additional.vehicle.no-data";
      const Ro = ({ trls: e }) => {
        const r = (0, s.v)(k.Yu);
        const t = (0, s.v)(k.dx);
        const n = (0, o.useMemo)(() => {
          let n = "";
          if (typeof r == "boolean") {
            n += r ? e[ko] : e[_o];
          }
          if (t.length) {
            if (n) {
              n += "; ";
            }
            n += `${e[No]} ${(0, Co.JR)(
              t.map((e) => e.string),
              3,
              e[Ao],
            )}`;
          }
          n ||= e[Mo];
          return n;
        }, [r, t, e]);
        return (0, N.jsx)(wr.j, {
          children: n,
        });
      };
      Ro.displayName = "Vehicle/Card/VehicleText/VehicleText";
      const Lo = (0, h.Z)(Ro);
      const Po = "profile.resume.card.mobile.edit";
      const wo = "profile.resume.card.additional.vehicle.title";
      const Io = ({ trls: e }) => {
        const r = (0, u.usePush)();
        const { isMobile: t } = (0, p.G)();
        const n = (0, s.v)(I.zP);
        const o = () => {
          r("/profile/edit/vehicle" + (n ? `?resumeFrom=${n}` : ""));
        };
        return (0, N.jsx)("div", {
          children: (0, N.jsxs)(ae.z, {
            default: 12,
            children: [
              (0, N.jsx)(te, {
                children: e[wo],
              }),
              (0, N.jsx)(m.Z, {
                stretched: true,
                borderWidth: "default",
                borderRadius: 24,
                padding: t ? 12 : 8,
                "data-qa": "profile-vehicle-card",
                children: t
                  ? (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(Rt, {
                          children: (0, N.jsx)(Lo, {}),
                        }),
                        (0, N.jsx)(x.z, {
                          stretched: true,
                          mode: "secondary",
                          style: "neutral",
                          onClick: o,
                          "data-qa": "profile-vehicle-card-edit-button",
                          children: e[Po],
                        }),
                      ],
                    })
                  : (0, N.jsxs)(Pr.b, {
                      vertPadding: true,
                      horPadding: true,
                      borderRadius: 16,
                      right: (0, N.jsx)(b.vvx, {}),
                      onClick: o,
                      "data-qa": "profile-vehicle-card-cell",
                      children: [
                        (0, N.jsx)(wr.j, {
                          type: "subtitle",
                          children: e[wo],
                        }),
                        (0, N.jsx)(Lo, {}),
                      ],
                    }),
              }),
            ],
          }),
        });
      };
      Io.displayName = "Vehicle/Card/index/VehicleCard";
      const To = (0, h.Z)(Io);
      const Oo = 24;
      const Vo = ({ isBackofficeProxy: e = false }) => {
        (() => {
          const e = (0, i.useDispatch)();
          const r = (0, s.v)((e) => e.router.location.query);
          const t = (0, s.v)(a.FU);
          (0, o.useEffect)(() => {
            const n = r == null ? undefined : r.meta;
            const o = r == null ? undefined : r.edit;
            if (o) {
              if (o === "communicationMethods") {
                const { type: r, meta: i } = ((e, r, t) =>
                  ((e, r) => r.findIndex(({ type: r }) => r === e) === -1)(r, t)
                    ? {
                        type: "otherCommunicationMethods",
                      }
                    : {
                        type: e,
                        meta: r,
                      })(o, n, t);
                e(
                  (0, l.zS)({
                    type: r,
                    meta: i,
                  }),
                );
              } else {
                e(
                  (0, l.zS)({
                    type: o,
                    meta: n,
                  }),
                );
              }
              (0, d.G)();
            }
          }, [e, r, t]);
        })();
        const r = !(0, c.F)() || e;
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(Z, {
              isBackofficeProxy: e,
            }),
            (0, N.jsx)(n.X, {
              default: 24,
              gteS: Oo,
            }),
            !r &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(vt, {}),
                  (0, N.jsx)(n.X, {
                    default: 24,
                    gteS: Oo,
                  }),
                ],
              }),
            !e &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(Fn, {}),
                  (0, N.jsx)(n.X, {
                    default: 24,
                    gteS: Oo,
                  }),
                ],
              }),
            (0, N.jsx)(Eo, {}),
            (0, N.jsx)(n.X, {
              default: 24,
              gteS: Oo,
            }),
            (0, N.jsx)(Ft, {}),
            !e &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 24,
                    gteS: Oo,
                  }),
                  (0, N.jsx)(To, {}),
                ],
              }),
            !e &&
              (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(n.X, {
                    default: 24,
                    gteS: Oo,
                  }),
                  (0, N.jsx)(mn, {}),
                ],
              }),
            (0, N.jsx)(n.X, {
              default: 32,
            }),
            (0, N.jsx)(gt.k, {}),
          ],
        });
      };
      Vo.displayName = "components/profile/Profile/Profile";
    },
    62980: function (e, r, t) {
      t.d(r, {
        I: () => b,
      });
      var n = t(45144);
      var o = t(48867);
      var i = t(8282);
      var s = t(89156);
      var a = t(30577);
      var l = t(22498);
      var d = t(62556);
      var c = t(58694);
      var u = t(7206);
      var h = t(9862);
      const p = "profile.resume.card.additional.preferred-work-areas.all-areas";
      const m =
        "profile.resume.card.additional.preferred-work-areas.all-regions-switch.title";
      const f = "profile.resume.card.additional.preferred-work-areas.empty";
      const v =
        "profile.resume.card.additional.preferred-work-areas.block-title";
      const g =
        "profile.resume.card.additional.preferred-work-areas.block-title.v2";
      const y = "profile.resume.card.additional.preferred-work-areas.and-more";
      const x = ({ trls: e }) => {
        const r = (0, o.v)(c.Y);
        const t = (0, o.v)(c.Tq);
        const s = (0, i.ZP)("web_geo_better_ux");
        const x = (0, l.rG)();
        const b = (0, n.useMemo)(() => {
          if (t) {
            return e[m];
          }
          if (!r.length) {
            return e[f];
          }
          let n = [];
          var o;
          var i;
          if (r.length === 1) {
            return (0, d.W)(
              r[0],
              true,
              (o = r[0].area) !== null &&
                o !== undefined &&
                o.id &&
                (i = x[r[0].area.id]) !== null &&
                i !== undefined &&
                i.isLeaf
                ? e[p]
                : undefined,
            );
          } else {
            n = r
              .map((e) => {
                return e.area?.name ?? "";
              })
              .sort();
            return (0, u.JR)(n, 3, e[y]);
          }
        }, [t, x, e, r]);
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(a.j, {
              type: "subtitle",
              children: s ? e[g] : e[v],
            }),
            (0, h.jsx)(a.j, {
              children: b,
            }),
          ],
        });
      };
      x.displayName =
        "SearchPreferences/Card/PreferredWorkAreasText/PreferredWorkAreasText";
      const b = (0, s.Z)(x);
    },
    58177: function (e, r, t) {
      t.d(r, {
        x: () => h,
      });
      var n = t(8282);
      var o = t(48867);
      var i = t(89156);
      var s = t(58694);
      var a = t(9862);
      const l = "profile.searchPreferences.address.notSpecified";
      const d = "profile.searchPreferences.address.locationSpecified";
      const c = "profile.searchPreferences.address.locationNotSpecified";
      const u = ({ trls: e }) => {
        const r = (0, n.ZP)("web_geo_better_ux");
        const t = (0, o.v)(s.yU);
        const i = (0, o.v)(s.Ib);
        const u = i == null ? undefined : i.text;
        const h = (0, o.v)(s.aG).length > 0;
        if (t != null && t.text) {
          if (h) {
            return (0, a.jsxs)(a.Fragment, {
              children: [t.text, " ", u && r ? `· ${u}` : "", " · ", e[d]],
            });
          } else {
            return (0, a.jsxs)(a.Fragment, {
              children: [t.text, " ", u && r ? `· ${u}` : "", " · ", e[c]],
            });
          }
        } else {
          return (0, a.jsx)(a.Fragment, {
            children: e[l],
          });
        }
      };
      u.displayName = "components/AddressText/index/AddressText";
      const h = (0, i.Z)(u);
    },
    70406: function (e, r, t) {
      t.d(r, {
        e: () => re,
      });
      var n = t(45144);
      var o = t(24488);
      var i = t(51477);
      var s = t.n(i);
      var a = t(59858);
      var l = t.n(a);
      var d = t(48867);
      var c = t(36047);
      var u = t(89156);
      var h = t(61384);
      var p = t(50109);
      var m = t(18566);
      var f = t(66802);
      var v = t(63144);
      var g = t(313);
      var y = t(69119);
      var x = t(28366);
      var b = t(64452);
      var S = t(65007);
      var j = t(79756);
      var E = t(82597);
      var C = t(71495);
      var k = t(82128);
      var _ = t(69330);
      const N = "gray-action-icon--jNZtTa1Ax0xHOjt6";
      var A = t(9862);
      const M =
        "profile.resume.card.skillsVerificationMethods.outdatedSkillsBanner.expired";
      const R =
        "profile.resume.card.skillsVerificationMethods.outdatedSkillsBanner.expiredMulti";
      const L =
        "profile.resume.card.skillsVerificationMethods.outdatedSkillsBanner.expiredOrExpiresMulti";
      const P =
        "profile.resume.card.skillsVerificationMethods.outdatedSkillsBanner.expires";
      const w =
        "profile.resume.card.skillsVerificationMethods.outdatedSkillsBanner.expiresMulti";
      const I =
        "profile.resume.card.skillsVerificationMethods.outdatedSkillsBanner.tooltip";
      const T = ({ trls: e, expirationDates: r, multi: t = false }) => {
        const [o, i] = (0, n.useState)(false);
        const s = (0, n.useRef)(null);
        const { isMobile: a } = (0, h.G)();
        const l = (0, n.useMemo)(
          () =>
            (function (e, r, t) {
              if (!e.length) {
                return null;
              }
              let n = false;
              let o = false;
              for (const r of e) {
                const e = (0, y.Z)(new Date(r));
                if ((0, g.Z)(e, (0, x.Z)())) {
                  n = true;
                } else {
                  o = true;
                }
                if (n && o) {
                  break;
                }
              }
              if (t) {
                if (n && o) {
                  return r[L];
                }
                if (o) {
                  return r[w];
                }
                if (n) {
                  return r[R];
                }
              } else if (n) {
                return r[M];
              }
              return (0, b.WU)(r[P], {
                "{0}": (0, _.p6)(new Date(e[0]), "dd MMMM"),
              });
            })(r, e, t),
          [r, t, e],
        );
        if (r.length) {
          return (0, A.jsxs)(m.z, {
            default: 12,
            children: [
              (0, A.jsx)(p.Z, {
                "data-qa": "skills-methods_outdated-banner",
                stretched: true,
                style: "warning-secondary",
                borderRadius: 12,
                padding: 16,
                children: (0, A.jsx)(S.b, {
                  borderRadius: 12,
                  align: "center",
                  left: (0, A.jsx)(k.zmx, {
                    initialColor: "primary",
                  }),
                  right: (0, A.jsx)("div", {
                    className: N,
                    children: (0, A.jsx)(j.a, {
                      disablePadding: true,
                      "data-qa": "skills-methods_outdated-banner_right-action",
                      ref: s,
                      icon: k.ROF,
                      style: "neutral",
                      onClick: () => a && i(true),
                    }),
                  }),
                  children: (0, A.jsx)(f.x, {
                    typography: "label-3-regular",
                    style: "primary",
                    children: l,
                  }),
                }),
              }),
              o &&
                (0, A.jsx)(E.j, {
                  stretched: true,
                  style: "secondary",
                  content: e[I],
                  onClose: () => i(false),
                  "data-qa": "skills-methods_outdated-banner_mobile-hint",
                }),
              (0, A.jsx)(C.p, {
                activatorRef: s,
                placement: "top-left",
                children: (0, A.jsx)(f.x, {
                  typography: "label-3-regular",
                  style: "secondary",
                  "data-qa": "skills-methods_outdated-banner_tooltip",
                  children: e[I],
                }),
              }),
            ],
          });
        } else {
          return null;
        }
      };
      T.displayName =
        "SkillsVerificationMethods/OutdatedSkillsBanner/index/OutdatedSkillsBanner";
      const O = (0, u.Z)(T);
      var V = t(9686);
      const D = "tags-list-container--MVVzH7iemwUIWCPk";
      const B = (e) => {
        const { tags: r, collapsedSize: t, ...n } = e;
        const o = r.slice(0, t);
        const i = r.length > o.length;
        return (0, A.jsxs)("div", {
          className: D,
          ...n,
          "data-qa": "verification-methods-tag-list",
          children: [
            o.map((e) =>
              (0, A.jsx)(
                "div",
                {
                  "data-qa": `skill-method-tag-${e.id}`,
                  children: (0, A.jsx)(V.V, {
                    children: e.name,
                  }),
                },
                e.id,
              ),
            ),
            i &&
              (0, A.jsx)("div", {
                "data-qa": "skill-method-tag-more",
                children: (0, A.jsx)(V.V, {
                  children: "...",
                }),
              }),
          ],
        });
      };
      B.displayName =
        "SkillsVerificationMethods/VerificationMethodsTagList/index/VerificationMethodsTagList";
      const U = (e) => e.analyticsParams.hhtmSource;
      const Z = (e) => e.skills.availableMethods;
      const q = (e) => e.skills.skillsVerificationCardMethods;
      const F = (e) => e.skills.uiOptions;
      var H = t(33089);
      var z = t(4305);
      const $ = ({ title: e, isMobile: r, accentedHeader: t }) =>
        r || t
          ? (0, A.jsx)(z.D, {
              style: "primary",
              size: "small",
              Element: "h5",
              "data-qa": "skills-methods_title",
              children: e,
            })
          : (0, A.jsx)(f.x, {
              typography: "label-3-regular",
              style: "secondary",
              "data-qa": "skills-methods_title",
              children: e,
            });
      $.displayName = "SkillsVerificationMethods/Card/Header/CardHeader";
      const G = (e) => ({
        id: String(e.id),
        name: e.name,
      });
      const W = "profile.resume.card.skillsVerificationMethods.title.all";
      const K = "profile.resume.card.skillsVerificationMethods.title.skills";
      const X = "profile.resume.card.skillsVerificationMethods.title.languages";
      const J = "profile.resume.card.skillsVerificationMethods.goToTestButton";
      const Y =
        "profile.resume.card.skillsVerificationMethods.motivationBannerText";
      const Q = (e, r) => {
        switch (e) {
          case H.A.SkillsResume:
          case H.A.SkillsResumes:
            return r[K];
          case H.A.Languages:
            return r[X];
          default:
            return r[W];
        }
      };
      const ee = ({ trls: e }) => {
        const { isMobile: r } = (0, h.G)();
        const t = (0, d.v)(U);
        const i = (0, d.v)(Z);
        const { languages: a, skills: u } = (0, d.v)(q);
        const {
          accentedHeader: g,
          accentedButton: y,
          stretchedButton: x,
          mode: b,
        } = (0, d.v)(F);
        const S = (0, n.useMemo)(
          () =>
            (function (e, r, t) {
              if (t === H.A.Languages) {
                return e.filter((e) =>
                  ["EXPIRED", "GRACE"].includes(e.validity.state),
                );
              }
              if (
                t === H.A.SkillsResume ||
                t === H.A.SkillsResumes ||
                t === H.A.Skills
              ) {
                return r.filter((e) =>
                  ["EXPIRED", "GRACE"].includes(e.validity.state),
                );
              }
              return [...e, ...r].filter((e) =>
                ["EXPIRED", "GRACE"].includes(e.validity.state),
              );
            })(a, u, b)
              .map((e) => e.validity.valid_until)
              .filter(Boolean),
          [a, u, b],
        );
        const j = i.map(G);
        const E = S.length > 0;
        const C = !E && i.length;
        if (j.length) {
          return (0, A.jsx)(A.Fragment, {
            children: (0, A.jsx)(o.ElementShownAnchor, {
              fn: s(),
              hhtmSource: t,
              children: (0, A.jsx)(p.Z, {
                stretched: true,
                borderWidth: "default",
                padding: r ? 12 : 24,
                borderRadius: 24,
                "data-qa": "skills-methods",
                children: (0, A.jsxs)(m.z, {
                  default: 24,
                  children: [
                    (0, A.jsx)(p.Z, {
                      style: "primary",
                      padding: r ? 12 : 0,
                      paddingBottom: 0,
                      children: (0, A.jsx)($, {
                        isMobile: r,
                        title: Q(b, e),
                        accentedHeader: g,
                      }),
                    }),
                    C &&
                      (0, A.jsx)(p.Z, {
                        "data-qa": "skills-methods_motivation-banner",
                        stretched: true,
                        style: "secondary",
                        borderRadius: 12,
                        padding: 16,
                        children: (0, A.jsx)(f.x, {
                          typography: "label-3-regular",
                          style: "secondary",
                          children: e[Y],
                        }),
                      }),
                    E &&
                      (0, A.jsx)(O, {
                        expirationDates: S,
                        multi: true,
                      }),
                    (0, A.jsx)(p.Z, {
                      paddingLeft: r ? 12 : 0,
                      paddingRight: r ? 12 : 0,
                      children: (0, A.jsx)(B, {
                        "data-qa": "skills-methods-tags",
                        tags: j,
                        collapsedSize: 6,
                      }),
                    }),
                    (0, A.jsx)("div", {
                      children: (0, A.jsx)(v.z, {
                        "data-qa": "skills-methods_go-to-tests-link",
                        Element: c.SPALink,
                        forceHhtmForInternalLink: true,
                        to: "/applicant/skill_verifications/methods",
                        mode: y ? "primary" : "secondary",
                        style: r && !y ? "neutral" : "accent",
                        stretched: !!r || x,
                        size: r ? "medium" : "small",
                        onClick: () =>
                          l()({
                            hhtmSource: t,
                          }),
                        children: e[J],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        } else {
          return null;
        }
      };
      ee.displayName =
        "SkillsVerificationMethods/Card/index/SkillsVerificationMethodsCard";
      const re = (0, u.Z)(ee);
    },
    91315: function (e, r, t) {
      t.d(r, {
        n: () => p,
      });
      var n = t(45144);
      var o = t(7260);
      var i = t.n(o);
      var s = t(13936);
      var a = t.n(s);
      var l = t(19481);
      var d = t.n(l);
      var c = t(33338);
      var u = t(63144);
      var h = t(9862);
      const p = ({ hhtmSource: e, buttons: r, visible: t, ...o }) => {
        (0, n.useEffect)(() => {
          if (t && e) {
            a()({
              hhtmSource: e,
            });
          }
        }, [t, e]);
        return (0, h.jsx)(c.bZ, {
          ...o,
          visible: t,
          buttons: (0, h.jsx)(h.Fragment, {
            children: r.map(({ analyticType: r, onClick: t, ...o }, s) => {
              return (0, n.createElement)(u.z, {
                ...o,
                key: s,
                Element: o.Element ?? "button",
                onClick: (n) => {
                  if (e) {
                    (({ analyticType: e, hhtmSource: r, buttonText: t }) => {
                      if (e === "primary") {
                        i()({
                          hhtmSource: r,
                          buttonText: t,
                        });
                      } else {
                        d()({
                          hhtmSource: r,
                          buttonText: t,
                        });
                      }
                    })({
                      hhtmSource: e,
                      analyticType: r,
                      buttonText:
                        typeof o.children == "string" ? o.children : "",
                    });
                  }
                  if (t != null) {
                    t(n);
                  }
                },
              });
            }),
          }),
        });
      };
      p.displayName = "smart/SmartAlert/index/SmartAlert";
    },
    90021: function (e, r, t) {
      t.d(r, {
        Z: () => f,
      });
      var n = t(45144);
      var o = t(24488);
      var i = t(12181);
      var s = t.n(i);
      var a = t(16838);
      var l = t.n(a);
      var d = t(81684);
      var c = t.n(d);
      var u = t(82597);
      var h = t(63144);
      var p = t(65284);
      var m = t(9862);
      const f = ({
        content: e,
        title: r,
        onClose: t,
        buttonBase: i,
        buttonAdditional: a,
        showClose: d = false,
        bannerName: f,
        hhtmSource: v,
        ...g
      }) => {
        const b = (0, n.useCallback)(() => {
          if (d) {
            s()({
              hhtmSource: v,
              bannerName: f,
            });
          }
          if (t != null) {
            t();
          }
        }, [t, d, f, v]);
        const S = (0, n.useCallback)(
          (e) => {
            var r;
            c()({
              hhtmSource: v,
              bannerName: f,
              buttonText: (0, p.aH)(i == null ? undefined : i.children),
            });
            if (i != null && (r = i.onClick) !== null && r !== undefined) {
              r.call(i, e);
            }
          },
          [i, f, v],
        );
        const j = (0, n.useCallback)(
          (e) => {
            var r;
            if (a != null && (r = a.onClick) !== null && r !== undefined) {
              r.call(a, e);
            }
          },
          [a],
        );
        return (0, m.jsx)(o.ElementShownAnchor, {
          fn: (e) =>
            l()(e, {
              hhtmSource: v,
              bannerName: f,
            }),
          children: (0, m.jsx)(u.j, {
            ...g,
            onClose: b,
            content: e,
            title: r,
            showClose: d,
            buttonBase: i
              ? (0, m.jsx)(h.z, {
                  ...i,
                  Element: i.Element ?? "button",
                  onClick: S,
                })
              : undefined,
            buttonAdditional: a
              ? (0, m.jsx)(h.z, {
                  ...a,
                  Element: a.Element ?? "button",
                  onClick: j,
                })
              : undefined,
          }),
        });
      };
      f.displayName = "smart/SmartBanner/index/SmartBanner";
    },
    58927: function (e, r, t) {
      t.d(r, {
        o: () => p,
      });
      var n = t(45144);
      var o = t(13900);
      var i = t(91023);
      var s = t.n(i);
      var a = t(1530);
      var l = t.n(a);
      var d = t(87343);
      var c = t(1800);
      var u = t(65284);
      var h = t(9862);
      const p = ({ hhtmSource: e, items: r, "data-qa": t, ...i }) => {
        const a = (0, n.useMemo)(
          () =>
            r.reduce((e, { value: r, text: t }) => {
              e[r] = (0, u.aH)(t);
              return e;
            }, {}),
          [r],
        );
        const p = (0, d.oQ)(r);
        const m = (0, n.useCallback)(
          (r) => {
            const t = Array.isArray(r)
              ? r.map(({ value: e }) => e).join(",")
              : String(r.value);
            const n = Array.isArray(r)
              ? r.map(({ value: e }) => a[e]).join(",")
              : a[String(r.value)] || "";
            s()({
              hhtmSource: e,
              selectedIdList: t,
              selectedValueList: n,
            });
            i.onChange(r);
          },
          [e, a, i],
        );
        return (0, h.jsx)(c.P, {
          ...i,
          "data-qa": t,
          onChange: m,
          dataProvider: p,
          onDropOpen: () =>
            (0, o.selectElementShownRaw)({
              elementName: e,
            }),
          onBottomSheetOpen: () =>
            l()({
              hhtmSource: e,
            }),
        });
      };
      p.displayName = "smart/SmartSelect/index/SmartSelect";
    },
    48274: function (e, r, t) {
      t.d(r, {
        K: () => m,
      });
      var n = t(45144);
      var o = t(24488);
      var i = t(31634);
      var s = t.n(i);
      var a = t(30079);
      var l = t.n(a);
      var d = t(61790);
      var c = t.n(d);
      var u = t(52872);
      var h = t(65284);
      var p = t(9862);
      const m = ({ onClose: e, onAction: r, children: t, ...i }) => {
        const a = (0, n.useMemo)(() => (0, h.aH)(t), [t]);
        const d = (0, n.useCallback)(() => {
          s()({
            snackbarText: a,
          });
          if (e != null) {
            e();
          }
        }, [e, a]);
        const m = (0, n.useCallback)(() => {
          c()({
            snackbarText: a,
          });
          if (r != null) {
            r();
          }
        }, [r, a]);
        return (0, p.jsx)(o.ElementShownAnchor, {
          fn: (e) =>
            l()(e, {
              snackbarText: a,
            }),
          children: (0, p.jsx)(u.A, {
            ...i,
            onClose: d,
            onAction: m,
            showClose: true,
            children: t,
          }),
        });
      };
      m.displayName = "smart/SmartSnackbar/index/SmartSnackbar";
    },
    79535: function (e, r, t) {
      t.d(r, {
        Q: () => i,
      });
      var n = t(48867);
      var o = t(45418);
      const i = () =>
        (0, n.v)(({ locale: e }) => e.platform) === o.Platform.Zarplata;
    },
    46192: function (e, r, t) {
      t.d(r, {
        do: () => s,
        rw: () => i,
      });
      var n = t(48867);
      var o = t(9223);
      const i = () => (0, n.v)(({ topLevelSite: e }) => e);
      const s = () => i() === o.D.BY;
    },
    70904: function (e, r, t) {
      t.d(r, {
        Q: () => o,
      });
      var n = t(21440);
      const o = {
        generate: async (e) =>
          (await n.Z.post("/profile/shards/otp/generate", e)).data,
      };
    },
    94457: function (e, r, t) {
      t.d(r, {
        e: () => o,
      });
      var n = t(21440);
      const o = {
        captcha: async (e) =>
          (
            await n.Z.post("/captcha", null, {
              params: {
                lang: e,
              },
            })
          ).data,
        otpConfirmAuthPhone: async (e) =>
          (await n.Z.post("/profile/shards/phone/confirm_auth_phone", e)).data,
        getPhoneInformation: async (e) =>
          (
            await n.Z.post("/profile/shards/phone/get_phone_information", {
              phone: e,
            })
          ).data,
        setVerifiedPhone: async (e, r, t) =>
          (
            await n.Z.post("/profile/shards/phone/set_verified_phone", {
              code: r,
              phone: e,
              verificationSource: t,
            })
          ).data,
        parse: async (e, r) =>
          (
            await n.Z.post(
              "/profile/shards/phone/parse_phone",
              {
                value: e,
              },
              {
                signal: r,
                params: undefined,
              },
            )
          ).data,
        getPhoneCode: async (e) =>
          (
            await n.Z.get("/profile/shards/phone/get_default_phone_code", {
              signal: e,
              params: {},
            })
          ).data,
        getAllowedSmsCountries: async (e) =>
          (
            await n.Z.get("/profile/shards/phone/get_allowed_sms_countries", {
              signal: e,
              params: {},
            })
          ).data,
      };
    },
    35753: function (e, r, t) {
      t.d(r, {
        C: () => o,
        a: () => n,
      });
      const n = 6;
      const o = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    },
    61263: function (e, r, t) {
      t.d(r, {
        LU: () => n,
        Z8: () => s,
        al: () => i,
        n2: () => o,
      });
      const n = ({ account: e }) => {
        return e.phone?.formatted || "";
      };
      const o = ({ account: e }) => e.email || "";
      const i = ({ account: e }) => {
        return e.currentAuthMethod ?? null;
      };
      const s = ({ account: e }) => {
        var r;
        return (
          ((r = e.authMethods) === null || r === undefined
            ? undefined
            : r.includes("ESIA")) || false
        );
      };
    },
    42730: function (e, r, t) {
      t.d(r, {
        Z: () => n,
      });
      const n = 4;
    },
    35527: function (e, r, t) {
      t.d(r, {
        BL: () => S,
        BX: () => _,
        Cv: () => y,
        DF: () => I,
        E4: () => j,
        EW: () => m,
        Gf: () => C,
        JM: () => R,
        My: () => k,
        P8: () => N,
        TX: () => g,
        Tv: () => D,
        Xw: () => B,
        Yb: () => x,
        a6: () => f,
        bg: () => w,
        c: () => L,
        cK: () => M,
        eP: () => P,
        fV: () => V,
        gM: () => E,
        kM: () => u,
        nj: () => b,
        qA: () => A,
        vC: () => c,
        vq: () => p,
        wb: () => v,
        xl: () => T,
        zg: () => O,
        zx: () => h,
      });
      var n = t(39815);
      var o = t(35753);
      var i = t(42730);
      const s = (e) => {
        const t = (e == null ? undefined : e.trim()) ?? "";
        return {
          step: "phone",
          phoneValue: t,
          parsedPhone: t
            ? {
                formatted: t,
                normalized: t,
                raw: t,
              }
            : null,
          codeValue: "",
          codeErrorKey: null,
          phoneErrorKey: null,
          isPhoneValid: true,
          isSaving: false,
          resendCountdown: 0,
          nextSendTimestamp: null,
          recaptchaValue: null,
          availableCountries: [],
          allowedCountriesLoading: false,
          codeLength: i.Z,
        };
      };
      const a = (e) => {
        return {
          step: "email",
          emailValue: (e == null ? undefined : e.trim()) ?? "",
          codeValue: "",
          codeErrorKey: null,
          emailErrorKey: null,
          isEmailValid: true,
          isSaving: false,
          resendCountdown: 0,
          nextSendTimestamp: null,
          recaptchaValue: null,
          codeLength: o.a,
        };
      };
      const l = {
        email: "",
        lastName: "",
        firstName: "",
        middleName: "",
        authMethods: [],
        currentAuthMethod: null,
        phoneEditor: s(),
        emailEditor: a(),
      };
      const d = (0, n.createSlice)({
        name: "account",
        initialState: l,
        reducers: {
          setAccountPhone(e, r) {
            e.phone = r.payload;
          },
          resetPhoneEditor(e, r) {
            e.phoneEditor = s(r.payload);
          },
          setPhoneValue(e, r) {
            e.phoneEditor.phoneValue = r.payload;
          },
          setParsedPhone(e, r) {
            e.phoneEditor.parsedPhone = r.payload;
          },
          setIsPhoneValid(e, r) {
            e.phoneEditor.isPhoneValid = r.payload;
          },
          setPhoneErrorKey(e, r) {
            e.phoneEditor.phoneErrorKey = r.payload;
          },
          setCodeErrorKey(e, r) {
            e.phoneEditor.codeErrorKey = r.payload;
          },
          setCodeValue(e, r) {
            e.phoneEditor.codeValue = r.payload.slice(
              0,
              e.phoneEditor.codeLength,
            );
          },
          setCodeLength(e, r) {
            e.phoneEditor.codeLength = r.payload;
          },
          setStep(e, r) {
            e.phoneEditor.step = r.payload;
          },
          setPhoneSaving(e, r) {
            e.phoneEditor.isSaving = r.payload;
          },
          setNextSendTimestamp(e, r) {
            e.phoneEditor.nextSendTimestamp = r.payload;
          },
          setResendCountdown(e, r) {
            e.phoneEditor.resendCountdown = r.payload;
          },
          setAvailableCountries(e, r) {
            e.phoneEditor.availableCountries = r.payload;
          },
          setAllowedCountriesLoading(e, r) {
            e.phoneEditor.allowedCountriesLoading = r.payload;
          },
          setRecaptchaValue(e, r) {
            e.phoneEditor.recaptchaValue = r.payload;
          },
          setAccountEmail(e, r) {
            e.email = r.payload;
          },
          resetEmailEditor(e, r) {
            e.emailEditor = a(r.payload);
          },
          setEmailValue(e, r) {
            e.emailEditor.emailValue = r.payload;
          },
          setIsEmailValid(e, r) {
            e.emailEditor.isEmailValid = r.payload;
          },
          setEmailErrorKey(e, r) {
            e.emailEditor.emailErrorKey = r.payload;
          },
          setEmailCodeErrorKey(e, r) {
            e.emailEditor.codeErrorKey = r.payload;
          },
          setEmailCodeValue(e, r) {
            e.emailEditor.codeValue = r.payload.slice(
              0,
              e.emailEditor.codeLength,
            );
          },
          setEmailCodeLength(e, r) {
            e.emailEditor.codeLength = r.payload;
          },
          setEmailStep(e, r) {
            e.emailEditor.step = r.payload;
          },
          setEmailSaving(e, r) {
            e.emailEditor.isSaving = r.payload;
          },
          setEmailNextSendTimestamp(e, r) {
            e.emailEditor.nextSendTimestamp = r.payload;
          },
          setEmailResendCountdown(e, r) {
            e.emailEditor.resendCountdown = r.payload;
          },
          setEmailRecaptchaValue(e, r) {
            e.emailEditor.recaptchaValue = r.payload;
          },
        },
      });
      const c = d.reducer;
      const {
        setAccountPhone: u,
        resetPhoneEditor: h,
        setPhoneValue: p,
        setParsedPhone: m,
        setIsPhoneValid: f,
        setPhoneErrorKey: v,
        setCodeErrorKey: g,
        setCodeValue: y,
        setCodeLength: x,
        setStep: b,
        setPhoneSaving: S,
        setNextSendTimestamp: j,
        setResendCountdown: E,
        setAvailableCountries: C,
        setAllowedCountriesLoading: k,
        setRecaptchaValue: _,
        setAccountEmail: N,
        resetEmailEditor: A,
        setEmailValue: M,
        setIsEmailValid: R,
        setEmailErrorKey: L,
        setEmailCodeErrorKey: P,
        setEmailCodeValue: w,
        setEmailCodeLength: I,
        setEmailStep: T,
        setEmailSaving: O,
        setEmailNextSendTimestamp: V,
        setEmailResendCountdown: D,
        setEmailRecaptchaValue: B,
      } = d.actions;
    },
    42126: function (e, r, t) {
      t.d(r, {
        I: () => o,
        v: () => n,
      });
      const n = {
        primaryEducation: () => ({
          id: null,
          year: null,
          name: "",
          result: "",
          facultyId: null,
          specialtyId: null,
          universityId: null,
          organization: "",
        }),
        profilePrimaryEducation: (e) => ({
          educationLevel: {
            id: "",
            text: "",
          },
          resumes: e,
          id: null,
          year: null,
          name: "",
          result: "",
          facultyId: null,
          specialtyId: null,
          universityId: null,
          organization: "",
        }),
        education: () => ({
          id: null,
          year: null,
          name: "",
          result: "",
          organization: "",
        }),
        recommendation: () => ({
          id: null,
          name: "",
          position: "",
          organization: "",
        }),
        elementaryEducation: () => ({
          id: null,
          year: null,
          name: "",
        }),
        profileElementaryEducation: (e) => ({
          id: null,
          year: null,
          name: "",
          resumes: e,
        }),
        experience: () => ({
          id: null,
          endDate: null,
          position: null,
          startDate: "",
          companyId: null,
          employerId: null,
          industries: [],
          companyUrl: null,
          companyName: "",
          description: null,
          companyState: null,
          companyLogos: null,
          companyAreaId: null,
          companyIndustries: [],
          companyIndustryId: null,
        }),
        preferredWorkAreas: () => ({
          area: null,
          metroLines: [],
          metroStations: [],
          districts: [],
        }),
      };
      const o = (e, r) => {
        var t;
        if (
          e == null ||
          (t = e.parts.find((e) => r in e)) === null ||
          t === undefined
        ) {
          return undefined;
        } else {
          return t[r];
        }
      };
    },
    95850: function (e, r, t) {
      t.d(r, {
        OP: () => o,
        QN: () => n,
      });
      const n = (e, r) => {
        if (r) {
          if (
            r.required &&
            ((e, r) =>
              r.type === "boolean"
                ? e !== true && e !== false
                : r.type === "string" && r.enum
                  ? !r.enum.includes(e)
                  : !e)(e, r)
          ) {
            return "REQUIRED";
          }
          if (e != null) {
            if (r.type === "string") {
              return ((e, r) => {
                var t;
                var n;
                if (e && r.minlength && e.length < r.minlength) {
                  return "VALUE_LESS_THAN_MINIMUM";
                } else if (e && r.maxlength && e.length > r.maxlength) {
                  return "LENGTH_GREATER_THAN_MAXIMUM";
                } else if (
                  e &&
                  r.regexp &&
                  !new RegExp(`^${r.regexp}$`).test(e)
                ) {
                  return "NOT_MATCH_REGEXP";
                } else if (
                  e &&
                  (t = r.not_in) !== null &&
                  t !== undefined &&
                  (n = t.includes) !== null &&
                  n !== undefined &&
                  n.call(t, e)
                ) {
                  return "DUPLICATE";
                } else {
                  return undefined;
                }
              })(String(e), r);
            } else if (r.type === "integer") {
              return ((e, r) => {
                const t = typeof e == "string" ? parseInt(e, 10) : e;
                if (e && isNaN(t)) {
                  return "UNKNOWN";
                } else if (e && r.minvalue && t < r.minvalue) {
                  return "VALUE_LESS_THAN_MINIMUM";
                } else if (e && r.maxvalue && t > r.maxvalue) {
                  return "VALUE_GREATER_THAN_MAXIMUM";
                } else {
                  return undefined;
                }
              })(Number(e), r);
            } else if (r.type === "date") {
              return ((e, r) => {
                const [t = NaN, n = NaN, o = NaN] = e
                  ? e.split("-").map((e) => parseInt(e, 10))
                  : [];
                const i = isNaN(t) && isNaN(n) && isNaN(o);
                if (i && r.required) {
                  return "REQUIRED";
                }
                const s = new Date(t, n - 1, o);
                const a = new Date(new Date(t, n, 1) - 1).getDate();
                if (t < 1000) {
                  return "EARLY_THAN_MINIMUM";
                }
                if (t > 2999) {
                  return "LATER_THAN_MAXIMUM";
                }
                const l = n < 1 || n > 12 || o < 1 || o > a;
                if (i || (!isNaN(s.getTime()) && !l)) {
                  if (
                    !i &&
                    s.getTime() < new Date(String(r.minvalue)).getTime()
                  ) {
                    return "EARLY_THAN_MINIMUM";
                  } else if (
                    !i &&
                    s.getTime() > new Date(String(r.maxvalue)).getTime()
                  ) {
                    return "LATER_THAN_MAXIMUM";
                  } else {
                    return undefined;
                  }
                } else {
                  return "UNKNOWN";
                }
              })(String(e), r);
            } else {
              return undefined;
            }
          }
        }
      };
      const o = (e, r, t) => {
        if (!r || !t) {
          return;
        }
        const o = {
          arrayError: undefined,
          elementsErrors: [],
        };
        if (t.mincount !== null && r.length < t.mincount) {
          o.arrayError = "SIZE_LESS_THAN_MINIMUM";
          return o;
        } else if (t.maxcount !== null && r.length > t.maxcount) {
          o.arrayError = "SIZE_GREATER_THAN_MAXIMUM";
          return o;
        } else {
          o.elementsErrors = r.map((r) => {
            if (t == null || !t.parts) {
              return;
            }
            let o = t.parts.reduce(
              (e, t) => ({
                ...e,
                ...Object.keys(t).reduce((o, i) => {
                  const s =
                    typeof r == "object" ? (r == null ? undefined : r[i]) : r;
                  const a = n(s, t[i]);
                  if (a) {
                    return {
                      ...e,
                      [i]: a,
                    };
                  } else {
                    return e;
                  }
                }, {}),
              }),
              {},
            );
            var i;
            if (e === "experience") {
              o = Object.assign(
                {},
                (i = r).startDate &&
                  i.endDate &&
                  new Date(i.startDate) > new Date(i.endDate)
                  ? {
                      endDate: "EARLY_THAN_MINIMUM",
                    }
                  : {},
                o,
              );
            }
            if (Object.keys(o).length !== 0) {
              if (typeof r != "object" || r == null) {
                if (
                  t.parts.every((e) =>
                    Object.keys(e).every((e) => e === "id" || !r),
                  ) &&
                  t.mincount === 0
                ) {
                  return;
                }
              }
              return o;
            }
          });
          if (
            o.elementsErrors.filter((e) => e !== undefined).length > 0 ||
            o.arrayError
          ) {
            return o;
          } else {
            return undefined;
          }
        }
      };
    },
    67772: function (e, r, t) {
      t.d(r, {
        Ft: () => l,
        HN: () => m,
        Jf: () => g,
        LW: () => d,
        Lt: () => y,
        Lw: () => h,
        Qc: () => u,
        Zu: () => p,
        sA: () => f,
        y$: () => c,
        zM: () => v,
      });
      var n = t(24488);
      var o = t(56585);
      var i = t(28995);
      var s = t(9223);
      const a = {
        RESUME_CREATED: {
          [s.D.AZ]: "summa00",
          [s.D.KZ]: "summa0",
          [s.D.UZ]: "sumuz0",
        },
      };
      const l = (e) => e.builder.currentScreenId;
      const d = (e) => {
        var r;
        const t = l(e);
        if ((r = (0, i.p_)(e)) === null || r === undefined) {
          return undefined;
        } else {
          return r.find(({ screenId: e }) => e === t);
        }
      };
      const c = (e) => {
        var t;
        const n = d(e);
        return (
          (n == null || (t = n.messages) === null || t === undefined
            ? undefined
            : t.filter((e) => e.type === "MODERATION_NOTE")) ?? []
        );
      };
      const u = (e) => {
        const r = e.topLevelSite;
        const t = e.counters;
        return (e) => {
          if ([s.D.AZ, s.D.KZ, s.D.UZ].includes(r)) {
            const s = a[e][r];
            var i;
            if (s) {
              if (
                (i = t.googleUniversalAnalytics) !== null &&
                i !== undefined
              ) {
                i.forEach((e) => {
                  if (e.type === o.e.DV360) {
                    n.default.sendDv360Conversion(String(e.id), s);
                  }
                });
              }
            }
          }
        };
      };
      const h = (e) => e.builder.credsEditorConfirmVisible;
      const p = (e) => e.builder.credsEditorModalVisible;
      const m = (e) => e.builder.credsUpdateInProgress;
      const f = (e) => e.scheme.creds;
      const v = (e) => e.builder.creds.questionToAnswerMap;
      const g = (e) => e.scheme.resume;
      const y = (e) => e.scheme.resume._attributes.id;
    },
    34322: function (e, r, t) {
      t.d(r, {
        FG: () => E,
        P6: () => x,
        QC: () => _,
        WK: () => j,
        ZU: () => C,
        Zp: () => S,
        bw: () => v,
        hv: () => g,
        iH: () => b,
        jL: () => k,
        pc: () => y,
      });
      var n = t(30329);
      var o = t(85501);
      const i = "SET_RESUME_FIELD";
      const s = "SET_CRED_ANSWERS";
      const a = "SET_CRED_QUESTIONS_ACTIVE";
      const l = "SET_CRED_QUESTIONS_NOT_ACTIVE";
      const d = "SET_ANY_JOB_FORM_VISIBILITY";
      const c = "TOGGLE_SELECTED_ANY_JOB";
      const u = "SELECTED_ANY_JOB_IN_PROGRESS";
      const h = "SET_UPDATE_CREDS_IN_PROGRESS";
      const p = "SET_CREDS_EDITOR_MODAL_VISIBLE";
      const m = "SET_CREDS_EDITOR_CONFIRM_VISIBLE";
      const f = (0, n.ActionCreatorHelper)();
      const v = f(i);
      const g = f(s);
      const y = f(a);
      const x = f(l);
      const b = f(d);
      const S = f(c);
      const j = f(u);
      const E = f(h);
      const C = f(p);
      const k = f(m);
      const _ = (0, n.createReducer)(
        {
          form: {},
          creds: {
            activatedQuestions: {},
            deactivatedQuestions: {},
            questionToAnswerMap: {},
          },
          credsUpdateInProgress: false,
          credsEditorModalVisible: false,
          credsEditorConfirmVisible: false,
          currentScreenId: "",
          anyJobModalOpen: false,
          selectedAnyJob: [],
          selectedAnyJobInProgress: false,
        },
        {
          [i]: (e, { payload: r }) => ({
            ...e,
            form: {
              ...e.form,
              ...r,
            },
          }),
          [s]: (e, { payload: r }) => {
            var t;
            return {
              ...e,
              creds: {
                ...e.creds,
                questionToAnswerMap: {
                  ...((e == null || (t = e.creds) === null || t === undefined
                    ? undefined
                    : t.questionToAnswerMap) || {}),
                  ...r,
                },
              },
            };
          },
          [a]: (e, { payload: r }) => ({
            ...e,
            creds: {
              ...e.creds,
              activatedQuestions: {
                ...e.creds.activatedQuestions,
                [r.questionId]: r.questions,
              },
            },
          }),
          [l]: (e, { payload: r }) => ({
            ...e,
            creds: {
              ...e.creds,
              deactivatedQuestions: {
                ...e.creds.deactivatedQuestions,
                [r.questionId]: r.questions,
              },
            },
          }),
          [h]: (e, { payload: r }) => ({
            ...e,
            credsUpdateInProgress: r,
          }),
          [p]: (e, { payload: r }) => ({
            ...e,
            credsEditorModalVisible: r,
          }),
          [m]: (e, { payload: r }) => ({
            ...e,
            credsEditorConfirmVisible: r,
          }),
          [o.VH]: (e, { payload: r }) => ({
            form: {},
            touched: {},
            creds: {
              activatedQuestions: {},
              deactivatedQuestions: {},
              questionToAnswerMap: {},
            },
            credsUpdateInProgress: false,
            credsEditorModalVisible: false,
            credsEditorConfirmVisible: false,
            currentScreenId: r.nextIncompleteScreenId,
            anyJobModalOpen: false,
            selectedAnyJob: [],
            selectedAnyJobInProgress: false,
          }),
          [d]: (e, { payload: r }) => ({
            ...e,
            anyJobModalOpen: r,
          }),
          [c]: (e, { payload: r }) => {
            const t = [];
            let n = false;
            e.selectedAnyJob.forEach((e) => {
              if (e.name === r.name) {
                n = true;
              } else {
                t.push(e);
              }
            });
            if (!n) {
              t.push(r);
            }
            return {
              ...e,
              selectedAnyJob: t,
            };
          },
          [u]: (e, { payload: r }) => ({
            ...e,
            selectedAnyJobInProgress: r,
          }),
        },
      );
    },
    29025: function (e, r, t) {
      t.d(r, {
        b: () => c,
        L: () => d,
      });
      var n = t(34322);
      var o = t(83064);
      var i = t(28995);
      var s = t(83668);
      var a = t(21440);
      const l = {
        update: (e) =>
          a.Z.post("/profile/shards/creds/update", e).then(({ data: e }) => e),
      };
      const d =
        (e = {}) =>
        async (r, t) => {
          const a = t();
          const d = a.builder.creds.questionToAnswerMap;
          const c = (0, i.N3)(a);
          r((0, o.Mm)());
          r((0, n.FG)(true));
          try {
            const t = await l.update({
              resumeHash: c,
              creds: {
                questionToAnswerMap: d,
              },
            });
            if ((t && "error" in t) || (t && "errors" in t)) {
              r(
                (0, s.OV)({
                  kind: "alert",
                  text: "notSaved",
                }),
              );
            } else {
              window.dispatchEvent(
                new CustomEvent("rpf-creds-update", {
                  detail: {
                    creds: {
                      questionToAnswerMap: d,
                    },
                  },
                }),
              );
              if (e.hideSuccessSnackbar) {
                r(
                  (0, s.OV)({
                    kind: "status",
                    text: "saved",
                  }),
                );
              }
              r((0, n.ZU)(false));
            }
          } catch (e) {
            r(
              (0, s.OV)({
                kind: "alert",
                text: "defaultError",
              }),
            );
          } finally {
            r((0, n.FG)(false));
          }
        };
      const c = (e) => async (r, t) => {
        const a = t();
        const d = a.builder.creds.questionToAnswerMap;
        const c = (0, i.N3)(a);
        r((0, o.Mm)());
        r((0, n.FG)(true));
        try {
          const t = await l.update({
            resumeHash: c,
            creds: {
              questionToAnswerMap: d,
            },
          });
          if (t && "error" in t) {
            const e = t.error[0]?.key ?? "UNKNOWN";
            r(
              (0, s.OV)({
                text: e,
                kind: "alert",
              }),
            );
          } else if (t && "errors" in t) {
            r((0, o.FB)(t.errors));
          } else {
            e();
          }
        } catch (e) {
          r(
            (0, s.OV)({
              text: "UNKNOWN",
              kind: "alert",
            }),
          );
        }
      };
    },
    34991: function (e, r, t) {
      t.d(r, {
        V: () => n,
      });
      const n = (e, r) => {
        if (Object.keys(e).length !== Object.keys(r).length) {
          return false;
        }
        if (!Object.keys(e).every((e) => r.hasOwnProperty(e))) {
          return false;
        }
        return !Object.keys(e).some((t) => {
          n = e[t];
          o = r[t];
          return (
            n !== o && (n.length !== o.length || !n.every((e, r) => e === o[r]))
          );
          var n;
          var o;
        });
      };
    },
    43094: function (e, r, t) {
      t.d(r, {
        s: () => o,
      });
      var n = t(21440);
      const o = {
        getAreas: (e) =>
          n.Z.get("/profile/shards/dictionaries/areas", {
            signal: e,
            params: {},
          }).then(({ data: e }) => e),
        getEducationLevels: (e) =>
          n.Z.get("/profile/shards/dictionaries/education_levels", {
            signal: e,
            params: {},
          }).then(({ data: e }) => e),
        getSuggestedSkills: (e, r) =>
          n.Z.post("/profile/shards/dictionaries/suggest_skills", {
            selected: r,
            resumeId: e,
          }).then(({ data: e }) => e),
        getFacultiesByUniversityId: (e, r) =>
          n.Z.get("/profile/shards/dictionaries/faculties", {
            params: {
              university_id: e,
            },
            signal: r,
          }).then(({ data: e }) => e),
        getAnyJobTitles: (e) =>
          n.Z.get("/profile/shards/dictionaries/any_job_titles", {
            signal: e,
            params: {},
          }).then(({ data: e }) => e),
        getMetroCities: (e) =>
          n.Z.get("/profile/shards/dictionaries/metro_cities", {
            signal: e,
            params: {},
          }).then(({ data: e }) => e),
        getCountries: (e) =>
          n.Z.get("/profile/shards/dictionaries/countries", {
            signal: e,
            params: {},
          }).then(({ data: e }) => e),
        getAreaByCoordinates: (e, r) =>
          n.Z.get("/profile/shards/dictionaries/get_area_by_coordinates", {
            params: {
              lat: e,
              lng: r,
            },
          }).then(({ data: e }) => e),
        getAreaById: (e) =>
          n.Z.get("/profile/shards/dictionaries/get_area_by_id", {
            params: {
              area_id: e,
            },
          }).then(({ data: e }) => e),
        getVerifiedSkills: (e) =>
          n.Z.get("/profile/shards/dictionaries/verified_skills", {
            signal: e,
            params: {},
          }).then(({ data: e }) => e),
      };
    },
    22498: function (e, r, t) {
      t.d(r, {
        Xy: () => f,
        $: () => m,
        rG: () => v,
      });
      var n = t(45144);
      var o = t(9325);
      var i = t(48867);
      var s = t(79535);
      var a = t(43094);
      var l = t(69931);
      let d = (function (e) {
        e.Id = "id";
        e.Text = "text";
        e.Additional = "additional";
        return e;
      })({});
      class c {
        models = [];
        topLevelModels = [];
        modelsById = {};
        childrenById = {};
        parentsById = {};
        addModel(e, r) {
          const t = ((e) => {
            const r = e[d.Id];
            if (typeof r != "string") {
              throw new Error(`Invalid ID: "${JSON.stringify(r)}"`);
            }
            return {
              [d.Id]: e[d.Id],
              [d.Text]: e[d.Text],
              ...(d.Additional in e
                ? {
                    [d.Additional]: e[d.Additional],
                  }
                : {}),
            };
          })(e);
          const n = t[d.Id];
          if (this.getModel(n) === undefined) {
            this.models.push(t);
            this.modelsById[n] = t;
          }
          if (r) {
            this.parentsById[n] = this.parentsById[n] || [];
            this.parentsById[n].push(r);
            this.childrenById[r] = this.childrenById[r] || [];
            this.childrenById[r].push(n);
          } else {
            this.topLevelModels.push(t);
          }
        }
        toList() {
          return this.models.slice();
        }
        getTopLevel() {
          return this.topLevelModels.slice();
        }
        getModel(e) {
          if (this.modelsById.hasOwnProperty(e)) {
            return this.modelsById[e];
          } else {
            return undefined;
          }
        }
        getExistModels(e) {
          return e.reduce((e, r) => {
            const t = this.getModel(r);
            if (t) {
              e.push(t);
            }
            return e;
          }, []);
        }
        getParentId(e) {
          if (this.parentsById.hasOwnProperty(e)) {
            return this.parentsById[e][0];
          } else {
            return undefined;
          }
        }
        getParent(e) {
          const r = this.getParentId(e);
          if (r) {
            return this.getModel(r);
          } else {
            return undefined;
          }
        }
        getParentIdsDuplicates(e) {
          if (this.parentsById.hasOwnProperty(e)) {
            return this.parentsById[e];
          } else {
            return [];
          }
        }
        getParentIds(e, r = []) {
          const t = this.getParentIdsDuplicates(e);
          if (t.length) {
            r.push(...t);
            t.forEach((e) => this.getParentIds(e, r));
          }
          return r;
        }
        getParents(e) {
          const r = this.getParentIds(e);
          return this.getExistModels(r);
        }
        hasChildren(e) {
          return this.childrenById.hasOwnProperty(e);
        }
        getChildrenIds(e) {
          if (this.hasChildren(e)) {
            return this.childrenById[e].slice();
          } else {
            return [];
          }
        }
        getChildren(e) {
          const r = this.getChildrenIds(e);
          return this.getExistModels(r);
        }
        _walk(e, r, t) {
          const n = t ? t.slice() : [];
          e.forEach((e) => {
            r(e, n);
            const t = this.getChildren(e.id);
            if (t != null && t.length) {
              this._walk(t, r, [e].concat(n));
            }
          });
        }
        walk(e) {
          this._walk(this.getTopLevel(), e);
        }
        walkChildren(e, r) {
          const t = this.getChildren(e);
          if (t.length) {
            const n = this.getExistModels([e]).concat(this.getParents(e));
            this._walk(t, r, n);
          }
        }
        walkParents(e, r) {
          const t = this.getParents(e);
          while (t.length) {
            r(t.shift(), t.slice());
          }
        }
        toTree(e) {
          const r = [];
          const t = {};
          this.walk((n, o) => {
            if (!e || e(n)) {
              const e = {
                ...n,
              };
              t[n.id] = e;
              if (o.length === 0) {
                r.push(e);
              } else {
                const r = t[o[0].id];
                r.items ||= [];
                r.items.push(e);
              }
            }
          });
          return r;
        }
      }
      const u = (e, r, t) => {
        const n = t ? t.slice() : [];
        e.forEach((e) => {
          var t;
          r(e, n);
          if ((t = e.items) !== null && t !== undefined && t.length) {
            u(e.items, r, [e].concat(n));
          }
        });
      };
      const h = (e, r) => {
        const t = new c();
        u(e, (e, n) => {
          if (typeof r == "function") {
            r(e, n);
          }
          t.addModel(e, n.length ? n[0].id : undefined);
        });
        return t;
      };
      let p = false;
      const m = () => {
        const e = (0, i.v)((e) => {
          return e.dictionaries.areas ?? [];
        });
        const r = (0, o.useDispatch)();
        (0, n.useEffect)(() => {
          if (e.length === 0 && !p) {
            p = true;
            a.s
              .getAreas()
              .then((e) => {
                r((0, l.WM)(e.items));
              })
              .catch(() => {
                console.error("Cannot get areas");
              })
              .finally(() => {
                p = false;
              });
          }
        }, [r, e]);
      };
      const f = () => {
        const e = (0, i.v)((e) => {
          return e.dictionaries.areas ?? [];
        });
        return (0, n.useMemo)(
          () =>
            e
              .reduce((e, { id: r, text: t, items: n }) => {
                if (String(r) === String(1001)) {
                  return e.concat(
                    (n == null
                      ? undefined
                      : n.map(({ id: e, text: r }) => ({
                          value: e,
                          text: r,
                        }))) ?? [],
                  );
                } else {
                  return [
                    ...e,
                    {
                      value: r,
                      text: t,
                    },
                  ];
                }
              }, [])
              .sort((e, r) => {
                var t;
                if ((t = String(e.text)) === null || t === undefined) {
                  return undefined;
                } else {
                  return t.localeCompare(String(r.text));
                }
              }),
          [e],
        );
      };
      const v = () => {
        const e = ((e) => {
          const r = (0, i.v)((e) => {
            return e.dictionaries.areas ?? [];
          });
          const t = (0, n.useMemo)(
            () =>
              h(
                e
                  ? r
                      .filter(({ id: e }) => e === "113")
                      .flatMap(({ items: e }) => e ?? [])
                  : r,
              ),
            [r, e],
          );
          m();
          return t;
        })((0, s.Q)());
        return (0, n.useMemo)(() => {
          const r = {};
          const t = e.toTree();
          const n = (e, t) => {
            e.forEach((e) => {
              var o;
              if ((o = e.items) !== null && o !== undefined && o.length) {
                n(e.items, [...t, e]);
              } else {
                const n = [...t.map((e) => e.text)];
                n.reverse();
                r[e.id] = {
                  text: e.text,
                  parents: n,
                  isLeaf: String(t[0]?.id) !== String(1001),
                };
              }
            });
          };
          n(t, []);
          return r;
        }, [e]);
      };
    },
    83059: function (e, r, t) {
      t.d(r, {
        FU: () => a,
        Fn: () => l,
        bz: () => o,
        o9: () => i,
        uS: () => s,
      });
      var n = t(65284);
      const o = ({ dictionaries: e }) => e.languages;
      const i = ({ dictionaries: e }) => e.languagesLevels;
      const s = ({ dictionaries: e }) => e.verifiedSkills;
      const a = ({ dictionaries: e }) => e.communicationMethods || n.LZ;
      const l = ({ dictionaries: e }) => {
        return e.popularAreas ?? n.LZ;
      };
    },
    69931: function (e, r, t) {
      t.d(r, {
        Cn: () => v,
        Kb: () => g,
        WM: () => m,
        cM: () => y,
        jg: () => f,
        m9: () => S,
        oh: () => x,
        wz: () => b,
      });
      var n = t(30329);
      const o = "AREAS_LOADED";
      const i = "COUNTRIES_LOADED";
      const s = "EDUCATION_LEVELS_LOADED";
      const a = "SUGGESTED_SKILLS_LOADED";
      const l = "ANY_JOB_LIST_LOADED";
      const d = "METRO_CITIES_LOADED";
      const c = "DISTRICTS_CITIES_LOADED";
      const u = "DISTRICTS_LOADED";
      const h = "VERIFIED_SKILLS_LOADED";
      const p = (0, n.ActionCreatorHelper)();
      const m = p(o);
      const f = p(i);
      const v = p(d);
      const g = p(c);
      p(s);
      p(a);
      const y = p(u);
      const x = p(l);
      const b = p(h);
      const S = (0, n.createReducer)(
        {
          areas: [],
          genders: ["male", "female"],
          languages: [],
          countries: [],
          metroCities: [],
          anyJobTitles: [],
          verifiedSkills: [],
          languagesLevels: [],
          educationLevels: [],
          suggestedSkills: [],
          popularPositions: [],
          defaultPositions: [],
          professionalRoleTree: {
            items: [],
            roleNotFoundSubstituteIds: [],
          },
          districts: {},
          metroStations: {},
          metroLines: {},
          communicationMethods: [],
        },
        {
          [o]: (e, { payload: r }) => ({
            ...e,
            areas: r,
          }),
          [s]: (e, { payload: r }) => ({
            ...e,
            educationLevels: r,
          }),
          [a]: (e, { payload: r }) => ({
            ...e,
            suggestedSkills: r,
          }),
          [l]: (e, { payload: r }) => ({
            ...e,
            anyJobTitles: r,
          }),
          [d]: (e, { payload: r }) => ({
            ...e,
            metroCities: r,
          }),
          [c]: (e, { payload: r }) => ({
            ...e,
            districtsCities: r,
          }),
          [i]: (e, { payload: r }) => ({
            ...e,
            countries: r,
          }),
          [u]: (e, { payload: r }) => ({
            ...e,
            districts: r,
          }),
          [h]: (e, { payload: r }) => ({
            ...e,
            verifiedSkills: r,
          }),
        },
      );
    },
    79987: function (e, r, t) {
      t.d(r, {
        kF: () => i,
        uk: () => o,
      });
      var n = t(48867);
      const o = (e, r) =>
        (0, n.v)(({ fromErrors: t }) =>
          t.errors.find((t) => {
            let n = e && t.fieldNamePath.startsWith(`/${e}`);
            if (r !== undefined) {
              n = n && t.value === r;
            }
            return n;
          }),
        );
      const i = (e) =>
        (0, n.v)(({ fromErrors: r }) =>
          r.errors.find(
            (r) =>
              r.field === "questionToAnswerMap" &&
              r.fieldNamePath === e &&
              r.code,
          ),
        );
    },
    83064: function (e, r, t) {
      t.d(r, {
        FB: () => l,
        FU: () => h,
        Mm: () => d,
        fr: () => c,
      });
      var n = t(30329);
      const o = "SET_FORM_ERRORS";
      const i = "RESET_FROM_ERRORS";
      const s = "CLEAR_FIELD_ERROR_BY_PATH";
      const a = (0, n.ActionCreatorHelper)();
      const l = a(o);
      const d = a(i);
      const c = a(s);
      const u = {
        errors: [],
      };
      const h = (0, n.createReducer)(u, {
        [o]: (e, { payload: r }) => ({
          errors: r,
          newErrors: true,
        }),
        [i]: () => u,
        [s]: (e, { payload: r }) => ({
          errors: e.errors.filter((e) => !e.fieldNamePath.startsWith(`/${r}`)),
        }),
      });
    },
    68966: function (e, r, t) {
      t.d(r, {
        fn: () => o,
        h9: () => i,
        hG: () => l,
        mQ: () => a,
        vO: () => s,
      });
      var n = t(95672);
      const o = (e) => e.jobSearchStatus.status || n.Lx.Unknown;
      const i = (e) => e.jobSearchStatus.postChangeModal.visible;
      const s = (e) => e.jobSearchStatus.postChangeModal.step;
      const a = (e) => e.jobSearchStatus.possibleJobOffers.loading;
      const l = (e) => e.jobSearchStatus.possibleJobOffers.data;
    },
    26945: function (e, r, t) {
      t.d(r, {
        HG: () => s,
        NI: () => u,
        Qr: () => d,
        Rk: () => a,
        U$: () => l,
        sM: () => c,
      });
      var n = t(61020);
      const o = {
        status: null,
        postChangeModal: {
          visible: false,
          step: t(95672).L7.FoundOnHHStep,
        },
        possibleJobOffers: {
          data: [],
          loading: false,
        },
      };
      const i = (0, n.o)({
        initialState: o,
        reducers: {
          setJobSearchStatus: (e, { payload: r }) => ({
            ...e,
            status: r,
          }),
          togglePostChangeModalVisible: (e, { payload: r }) => ({
            ...e,
            postChangeModal: {
              ...e.postChangeModal,
              visible: r,
            },
          }),
          setPostChangeModalStep: (e, { payload: r }) => ({
            ...e,
            postChangeModal: {
              ...e.postChangeModal,
              step: r,
            },
          }),
          setPossibleJobOffers: (e, { payload: r }) => ({
            ...e,
            possibleJobOffers: {
              ...e.possibleJobOffers,
              data: r,
            },
          }),
          setPossibleJobOffersLoading: (e, { payload: r }) => ({
            ...e,
            possibleJobOffers: {
              ...e.possibleJobOffers,
              loading: r,
            },
          }),
        },
      });
      const {
        setJobSearchStatus: s,
        togglePostChangeModalVisible: a,
        setPostChangeModalStep: l,
        setPossibleJobOffers: d,
        setPossibleJobOffersLoading: c,
      } = i.actions;
      const u = i.reducer;
    },
    95672: function (e, r, t) {
      t.d(r, {
        L7: () => i,
        Lx: () => n,
        QZ: () => o,
        fo: () => s,
        nJ: () => l,
        v1: () => a,
      });
      let n = (function (e) {
        e.Unknown = "unknown";
        e.ActiveSearch = "active_search";
        e.LookingForOffers = "looking_for_offers";
        e.NotLookingForJob = "not_looking_for_job";
        e.HasJobOffer = "has_job_offer";
        e.AcceptedJobOffer = "accepted_job_offer";
        return e;
      })({});
      let o = (function (e) {
        e.MyResumesXsModal = "job-search-status-form-modal";
        e.MyResumesDesktop = "job-search-status-form-block";
        return e;
      })({});
      let i = (function (e) {
        e.FoundOnHHStep = "found-on-hh-step";
        e.ChooseOfferStep = "choose-offer-step";
        e.ChooseReasonStep = "choose-reason-step";
        return e;
      })({});
      let s = (function (e) {
        e.FoundOnHH = "found_on_hh";
        e.NotFoundOnHH = "not_found_on_hh";
        return e;
      })({});
      let a = (function (e) {
        e.WithoutResponse = "got_message";
        e.ContactedByMyself = "message_myself";
        e.Other = "other";
        return e;
      })({});
      let l = (function (e) {
        e.VacancyPage = "vacancyPage";
        e.Medium = "medium";
        e.SearchResultsPage = "searchResultsPage";
        e.Small = "small";
        e.EmployerPage = "employerPage";
        e.Original = "ORIGINAL";
        return e;
      })({});
    },
    49837: function (e, r, t) {
      t.d(r, {
        e: () => l,
        w: () => d,
      });
      var n = t(45144);
      var o = t(24246);
      var i = t.n(o);
      var s = t(73281);
      var a = t.n(s);
      const l = ({ hhtmSource: e, buttonName: r }) => {
        i()({
          hhtmSource: e,
          buttonName: r,
        });
      };
      const d = (e, r) => {
        (0, n.useEffect)(() => {
          if (r) {
            a()({
              hhtmSource: e,
            });
          }
        }, [e, r]);
      };
    },
    3255: function (e, r, t) {
      t.d(r, {
        V5: () => x,
        VY: () => j,
        if: () => C,
        ml: () => E,
        oI: () => k,
        xh: () => S,
        xo: () => b,
      });
      var n = t(66647);
      var o = t.n(n);
      var i = t(62933);
      var s = t.n(i);
      var a = t(9895);
      var l = t.n(a);
      var d = t(24788);
      var c = t.n(d);
      t(41214);
      var u = t(79781);
      var h = t.n(u);
      var p = t(8942);
      var m = t.n(p);
      var f = t(63087);
      var v = t.n(f);
      t(68211);
      const g = (e) => (e == null ? undefined : e.map((e) => e.resumeHash));
      const y = (e, r) => e.map((e) => r.some((r) => e.resumeHash === r.hash));
      const x = (e) => {
        const {
          elementName: r,
          hhtmSource: t,
          buttonText: n,
          educationId: i,
          educationLevel: s,
        } = e;
        o()({
          elementName: r,
          hhtmSource: t,
          buttonText: n,
          educationLevel: String(s),
          educationId: String(i),
        });
      };
      const b = (e) => {
        const {
          elementName: r,
          hhtmSource: t,
          buttonText: n,
          educationId: o,
          educationLevel: i,
        } = e;
        s()({
          elementName: r,
          hhtmSource: t,
          buttonText: n,
          educationLevel: String(i),
          educationId: String(o),
        });
      };
      const S = (e) => {
        const {
          resumes: r,
          hhtmSource: t,
          educationLevel: n,
          educationId: o,
          selectedResumes: i = [],
        } = e;
        const s = g(r);
        const a = y(r, i);
        l()({
          hhtmSource: t,
          educationLevel: String(n),
          resumeIds: s.length ? s.join(",") : null,
          resumeStates: a.length ? a.join(",") : null,
          educationId: String(o),
        });
      };
      const j = (e) => {
        const {
          hhtmSource: r,
          actionType: t,
          educationLevel: n,
          educationId: o,
          errors: i,
          resumes: s = [],
          selectedResumes: a = [],
        } = e;
        const l = g(s);
        const d = y(s, a);
        c()({
          hhtmSource: r,
          actionType: t,
          errors: i ? JSON.stringify(i) : null,
          resumeStates: d.length ? d.join(",") : null,
          resumeIds: l.length ? l.join(",") : null,
          educationLevel: String(n),
          educationId: o ? String(o) : null,
        });
      };
      const E = (e) => {
        const {
          formName: r,
          hhtmSource: t,
          educationLevel: n,
          resumeId: o,
          educationId: i,
        } = e;
        h()({
          hhtmSource: t,
          formName: r,
          educationLevel: n,
          resumeId: o || null,
          educationId: i ? String(i) : null,
        });
      };
      const C = (e) => {
        const {
          hhtmSource: r,
          resumeId: t,
          newStatus: n,
          educationLevel: o,
          educationId: i,
        } = e;
        m()({
          hhtmSource: r,
          resumeId: t,
          newStatus: n,
          educationLevel: o,
          educationId: String(i),
        });
      };
      const k = (e, r, t) => {
        v()({
          hhtmSource: e,
          actionType: r,
          educationId: t ? String(t) : null,
        });
      };
    },
    51520: function (e, r, t) {
      t.d(r, {
        AC: () => p,
        DR: () => f,
        Fm: () => g,
        J0: () => v,
        _5: () => m,
      });
      var n = t(28980);
      var o = t.n(n);
      var i = t(48329);
      var s = t.n(i);
      var a = t(67716);
      var l = t.n(a);
      var d = t(16655);
      var c = t.n(d);
      var u = t(97011);
      var h = t.n(u);
      const p = () => {
        o()();
      };
      const m = (e, r, t) => {
        s()({
          language: e,
          level: r,
          errors: t,
        });
      };
      const f = (e, r) => {
        l()({
          language: e,
          level: r,
        });
      };
      const v = (e, r) => {
        c()({
          language: e,
          level: r,
        });
      };
      const g = (e) => {
        h()({
          language: e,
        });
      };
    },
    90622: function (e, r, t) {
      t.d(r, {
        P: () => o,
        s: () => i,
      });
      const n = {};
      const o = (e) => {
        n.onSuccess = e;
      };
      const i = () => n.onSuccess;
    },
    59031: function (e, r, t) {
      t.d(r, {
        R: () => n,
      });
      const n = "secondary";
    },
    43472: function (e, r, t) {
      t.d(r, {
        xU: () => de,
        K7: () => ce,
        zS: () => le,
      });
      var n = t(53018);
      var o = t.n(n);
      var i = t(21440);
      const s = {
        update: (e, r) =>
          i.Z.post("/profile/shards/profile/update", {
            profile: e,
            resumeFromHash: r,
          }).then(({ data: e }) => e),
      };
      var a = t(65284);
      const l = (0, a.dO)("error");
      const d = (0, a.dO)("errors");
      const c = (0, a.dO)("fields");
      var u = t(90622);
      var h = t(90893);
      var p = t(83668);
      var m = t(87665);
      var f = t(44461);
      var v = t(58694);
      var g = t(97074);
      var y = t.n(g);
      const x = (e) => {
        const r = [];
        Object.keys(e).forEach((t) => {
          var n;
          if ((n = e[t]) !== null && n !== undefined) {
            n.forEach((e) => {
              r.push({
                field: e.field,
                code: e.code,
              });
            });
          }
        });
        return r;
      };
      var b = t(89395);
      const S = {
        init: (e) => ({
          area: (0, v.yU)(e),
          metro: (0, v.Ib)(e),
          addressCoordinates: (0, v.aG)(e),
        }),
        changed: (e) => {
          const r = ((e) => e.profileEditor.fields.addressCoordinates || a.LZ)(
            e,
          );
          const t = (0, v.aG)(e);
          const n = (0, f.m3)(e);
          const o = (0, v.yU)(e);
          const i = (0, f.Mr)(e);
          const s = (0, v.Ib)(e);
          return (
            ((e = [], r = []) =>
              e.length !== r.length ||
              e.some((e, t) => {
                const n = r[t];
                return (
                  e.lng !== (n == null ? undefined : n.lng) ||
                  e.lat !== (n == null ? undefined : n.lat)
                );
              }))(r, t) ||
            (n == null ? undefined : n.string) !==
              (o == null ? undefined : o.string) ||
            (i == null ? undefined : i.string) !==
              (s == null ? undefined : s.string)
          );
        },
        prepare: (e) => ({
          addressCoordinates: e.addressCoordinates || [],
          area: e.area ? [`${e.area.string}`] : [],
          metro: e.metro ? [`${e.metro.string}`] : [],
        }),
        validate: (e, r) => {
          const t = (0, b.a)(
            "addressCoordinates",
            e.addressCoordinates || [],
            r.addressCoordinates,
          );
          const n = (function (e, r) {
            const t = r.area;
            const n = t
              ? [
                  {
                    string: `${t == null ? undefined : t.string}`,
                  },
                ]
              : [];
            return (0, b.I)("area", n, e);
          })(r, e);
          const o = (function (e, r) {
            const t = r.metro;
            const n = t
              ? [
                  {
                    string: `${t == null ? undefined : t.string}`,
                  },
                ]
              : [];
            return (0, b.I)("metro", n, e);
          })(r, e);
          return {
            ...(!(0, a.xb)(t) && {
              addressCoordinates: t,
            }),
            ...n,
            ...o,
          };
        },
        submitAnalytics: (e, r, t) => {
          var n;
          var i;
          y()({
            hhtmSource: "profile_address",
            areaId:
              (n = r.area) !== null && n !== undefined && n.string
                ? String(r.area?.string)
                : undefined,
            metroAreaId:
              (i = r.metro) !== null && i !== undefined && i.string
                ? String(r.metro?.string)
                : undefined,
            addressCoordinates: r.addressCoordinates
              .map((e) => `${e.lat},${e.lng}`)
              .join(","),
            errors: t ? JSON.stringify(x(t)) : undefined,
          });
        },
      };
      function j(e = [], r = []) {
        return (
          e.length !== r.length ||
          r.some((r) => e.findIndex(({ string: e }) => e === r.string) < 0)
        );
      }
      var E = t(96019);
      var C = t.n(E);
      function k(e, r) {
        const t = {};
        ["lastName", "firstName", "middleName"].forEach((n) => {
          const o = r[n];
          const i = e[n];
          const s = o
            ? [
                {
                  string: o,
                },
              ]
            : [];
          const l = (0, b.a)(n, s, i);
          if (!(0, a.xb)(l)) {
            t[n] = l;
          }
        });
        return t;
      }
      function _(e, r) {
        const t = r.birthday;
        const n = t
          ? [
              {
                date: t,
              },
            ]
          : [];
        return (0, b.I)("birthday", n, e);
      }
      function N(e, r) {
        const t = {};
        ["citizenship", "workTicket"].forEach((n) => {
          var o;
          const i =
            ((o = r[n]) === null || o === undefined
              ? undefined
              : o.map(({ string: e }) => ({
                  string: `${e}`,
                }))) || [];
          const s = e[n];
          const l = (0, b.a)(n, i, s);
          if (!(0, a.xb)(l)) {
            t[n] = l;
          }
        });
        return t;
      }
      const A = {
        init: (e) => ({
          lastName: (0, v.$p)(e),
          firstName: (0, v.KM)(e),
          middleName: (0, v.bv)(e),
          gender: (0, v.b8)(e),
          birthday: (0, v.C9)(e),
          workTicket: (0, v.Kw)(e),
          citizenship: (0, v.iB)(e),
        }),
        changed: (e) => {
          const r = (0, v.b8)(e);
          const t = (0, v.C9)(e);
          const n = (0, v.$p)(e);
          const o = (0, v.KM)(e);
          const i = (0, v.bv)(e);
          const s = (0, v.iB)(e);
          const a = (0, v.Kw)(e);
          const l = (0, f.gU)(e);
          const d = (0, f.af)(e);
          const c = (0, f.pN)(e);
          const u = (0, f.o2)(e);
          const h = (0, f.Oy)(e);
          const p = (0, f.km)(e);
          const m = (0, f.rS)(e);
          return (
            r !== u ||
            t !== h ||
            n !== l ||
            o !== d ||
            i !== c ||
            j(s, p) ||
            j(a, m)
          );
        },
        prepare: (e) => ({
          gender: e.gender ? [e.gender] : [],
          birthday: (0, m.xb)(e.birthday) ? [] : [e.birthday],
          lastName: (0, m.xb)(e.lastName) ? [] : [e.lastName],
          firstName: (0, m.xb)(e.firstName) ? [] : [e.firstName],
          middleName: (0, m.xb)(e.middleName) ? null : [e.middleName],
          workTicket: e.workTicket.map(({ string: e }) => `${e}`) || [],
          citizenship: e.citizenship.map(({ string: e }) => `${e}`) || [],
        }),
        validate: (e, r) => ({
          ...k(r, e),
          ..._(r, e),
          ...N(r, e),
        }),
        submitAnalytics: (e, r, t) => {
          var n;
          var o;
          C()({
            birthday: r.birthday,
            firstName: r.firstName,
            gender: r.gender,
            lastName: r.lastName,
            citizenshipAreaId:
              (n = r.citizenship) === null || n === undefined
                ? undefined
                : n.map((e) => e.string).join(","),
            middleName: r.middleName,
            workTicketAreaId:
              (o = r.workTicket) === null || o === undefined
                ? undefined
                : o.map((e) => e.string).join(","),
            errors: t ? JSON.stringify(x(t)) : undefined,
          });
        },
      };
      var M = t(127);
      var R = t.n(M);
      var L = t(18445);
      const P = {
        init: (e) => ({
          communicationMethods: (0, v.zA)(e),
        }),
        changed: (e) => {
          const r = ((e) =>
            e.profileEditor.fields.communicationMethods || a.Nu)(e);
          const t = (0, v.zA)(e);
          return Object.keys(r).some((e) => r[e] !== t[e]);
        },
        validate: (e, r) => {
          const t = e.communicationMethods;
          const n = t ? [t] : [];
          return (0, b.I)("communicationMethods", n, r);
        },
        prepare: (e) => ({
          communicationMethods: e.communicationMethods,
        }),
        submitAnalytics: (e, r, t) => {
          const n = (0, L.HM)(e);
          const o = t && Object.keys(t).length ? JSON.stringify(t) : undefined;
          R()({
            messenger: n,
            errors: o,
          });
        },
      };
      var w = t(3255);
      var I = t(55042);
      const T = (e) =>
        Boolean(e.name || e.year || (e.resumes && e.resumes.length > 0));
      function O(e = [], r = []) {
        const t = e.filter(T);
        return (
          t.length !== r.length ||
          t.some((e, t) => {
            const n = r[t];
            i = e.resumes;
            s = n.resumes;
            const o = Boolean(
              (i == null ? undefined : i.length) !==
                (s == null ? undefined : s.length) ||
              (i == null
                ? undefined
                : i.some(
                    (e) => s == null || !s.some((r) => r.hash === e.hash),
                  )),
            );
            var i;
            var s;
            return e.name !== n.name || e.year !== n.year || o;
          })
        );
      }
      const V = {
        init: (e) => ({
          elementaryEducation: (0, v.Pr)(e),
        }),
        changed: (e) => {
          const r = ((e) => e.profileEditor.fields.elementaryEducation || a.LZ)(
            e,
          );
          return O(r, (0, v.Pr)(e));
        },
        validate: (e, r) =>
          (0, b.I)("elementaryEducation", e.elementaryEducation || [], r),
        prepare: (e) => {
          var r;
          return {
            elementaryEducation:
              ((r = e.elementaryEducation) === null || r === undefined
                ? undefined
                : r.map((e) => ({
                    id: e.id,
                    name: e.name,
                    year: e.year,
                    resumes: (e.resumes || []).map((e) => ({
                      hash: e.hash,
                    })),
                  }))) || [],
          };
        },
        submitAnalytics: (e, r, t) => {
          const n = (0, v.zm)(e);
          const o = (0, v.Pr)(e);
          const i = (0, L.S$)(e);
          const s = (0, I.tH)(r, "elementary", i);
          const a = i === o.length;
          (0, w.VY)({
            resumes: n,
            errors: t,
            hhtmSource: "profile",
            selectedResumes: s == null ? undefined : s.resumes,
            actionType: a ? "add" : "edit",
            educationLevel: (0, I.gH)("elementary", s || null),
            educationId: s == null ? undefined : s.id,
          });
        },
      };
      var D = t(21820);
      var B = t(51520);
      var U = t(33081);
      const Z = {
        init: (e) => ({
          language: (0, v.cG)(e),
        }),
        changed: (e) => {
          const r = (0, D.k)(e);
          const t = (0, v.cG)(e);
          return (
            (r == null ? undefined : r.length) !==
              (t == null ? undefined : t.length) ||
            (function (e = [], r = []) {
              return e.some(
                (e) =>
                  r.findIndex(
                    ({ id: r, degree: t }) => r === e.id && t === e.degree,
                  ) < 0,
              );
            })(r, t)
          );
        },
        validate: (e, r) => {
          const t = e.language || [];
          return (0, b.I)("language", t, r);
        },
        prepare: (e) => ({
          language: e.language.map(({ id: e, degree: r }) => ({
            id: String(e),
            degree: r,
          })),
        }),
        submitAnalytics: (e, r, t) => {
          const n = (0, v.bU)(e);
          if (r.language.length > n.language.length) {
            const e = r.language[r.language.length - 1];
            if (e.degree === U.A) {
              (0, B.Fm)(e.title);
            } else {
              const r = [];
              if (t && !e.id) {
                r.push({
                  field: "id",
                  code: "REQUIRED",
                });
              }
              if (t && !e.degree) {
                r.push({
                  field: "degree",
                  code: "REQUIRED",
                });
              }
              (0, B._5)(
                e.title,
                e.degreeText,
                r.length ? JSON.stringify(r) : undefined,
              );
            }
          } else if (r.language.length === n.language.length) {
            const e = r.language.find(
              (e, r) =>
                e.id !== n.language[r].id || e.degree !== n.language[r].degree,
            );
            if (!e) {
              return;
            }
            if (e.degree === U.A) {
              (0, B.Fm)(e.title);
            } else {
              (0, B.J0)(e.title, e.degreeText);
            }
          }
        },
      };
      var q = t(41869);
      const F = {
        init: (e) => ({
          otherCommunicationMethods: (0, v.lX)(e),
        }),
        changed: (e) => {
          const r = (0, q.X)(e);
          const t = (0, v.lX)(e);
          return (
            r.length !== t.length ||
            r.some((e, r) => {
              const n = t[r];
              return e.value !== n.value || e.description !== n.description;
            })
          );
        },
        validate: (e, r) => {
          const t = e.otherCommunicationMethods || [];
          return (0, b.I)("otherCommunicationMethods", t, r);
        },
        prepare: (e) => ({
          otherCommunicationMethods: e.otherCommunicationMethods,
        }),
        submitAnalytics: () => {},
      };
      var H = t(87542);
      var z = t(54932);
      var $ = t.n(z);
      var G = t(77942);
      const W = {
        init: (e) => ({
          preferredWorkAreas: (0, v.Y)(e),
          preferredWorkAllAreas: (0, v.Tq)(e),
        }),
        changed: H.Gt,
        validate: (e, r) => {
          const n = e.preferredWorkAreas ?? [];
          const o = (0, b.a)("preferredWorkAreas", n, r.preferredWorkAreas);
          if ((0, a.xb)(o)) {
            return {};
          } else {
            return {
              preferredWorkAreas: o,
            };
          }
        },
        prepare: (e) => {
          var r;
          return {
            preferredWorkAreas:
              (r = e.preferredWorkAreas) !== null &&
              r !== undefined &&
              r.length &&
              !e.preferredWorkAllAreas
                ? e.preferredWorkAreas.map((e) => {
                    return {
                      area: Number(e.area?.id),
                      districts: e.districts.map((e) => e.id),
                      metroStations: e.metroStations.map((e) => e.id),
                      metroLines: e.metroLines.map((e) => e.id),
                    };
                  })
                : [],
            preferredWorkAllAreas: Boolean(e.preferredWorkAllAreas),
          };
        },
        submitAnalytics: (e, r, t) => {
          $()({
            errors: t ? JSON.stringify(t) : "",
            is_switch_all_preferred_work_areas_on: r.preferredWorkAllAreas,
            actions: r.preferredWorkAllAreas ? "edit" : (0, G.Fb)().join(","),
          });
        },
      };
      const K = (e = []) =>
        e.map((e) => ({
          hash: e.hash,
        }));
      const X = (e = []) =>
        (e == null
          ? undefined
          : e.map((e) => {
              return {
                id: e.id,
                name: e.name,
                year: e.year,
                result: (e.result ?? "").trim() === "" ? null : e.result,
                organization:
                  (e.organization ?? "").trim() === "" ? null : e.organization,
                facultyId: e.facultyId,
                specialtyId: e.specialtyId,
                universityId: e.universityId,
                educationLevel: e.educationLevel.id,
                resumes: K((e == null ? undefined : e.resumes) || []),
              };
            })) || [];
      const J = (e) => {
        return Boolean(
          e.name ||
          e.year ||
          e.result ||
          e.organization ||
          e.facultyId ||
          e.specialtyId ||
          e.universityId ||
          e.resumes?.length > 0,
        );
      };
      function Y(e = [], r = []) {
        const t = e.filter(J);
        return (
          t.length !== r.length ||
          t.some((e, t) => {
            const n = r[t];
            i = e.resumes;
            s = n.resumes;
            const o = Boolean(
              (i == null ? undefined : i.length) !==
                (s == null ? undefined : s.length) ||
              (i == null
                ? undefined
                : i.some(
                    (e) => s == null || !s.some((r) => r.hash === e.hash),
                  )),
            );
            var i;
            var s;
            return (
              e.name !== n.name ||
              e.year !== n.year ||
              e.result !== n.result ||
              e.organization !== n.organization ||
              e.facultyId !== n.facultyId ||
              e.specialtyId !== n.specialtyId ||
              e.universityId !== n.universityId ||
              e.educationLevel.id !== n.educationLevel.id ||
              o
            );
          })
        );
      }
      const Q = {
        init: (e) => ({
          primaryEducation: (0, v.Tj)(e),
        }),
        changed: (e) => {
          const r = ((e) => e.profileEditor.fields.primaryEducation || a.LZ)(e);
          return Y(r, (0, v.Tj)(e));
        },
        validate: (e, r) =>
          (0, b.I)(
            "primaryEducation",
            X((e == null ? undefined : e.primaryEducation) || []),
            r,
          ),
        prepare: (e) => ({
          primaryEducation: X(
            (e == null ? undefined : e.primaryEducation) || [],
          ),
        }),
        submitAnalytics: (e, r, t) => {
          const n = (0, v.zm)(e);
          const o = (0, v.Tj)(e);
          const i = (0, L.S$)(e);
          const s = (0, I.tH)(r, "primary", i);
          const a = i === o.length;
          (0, w.VY)({
            resumes: n,
            errors: t,
            hhtmSource: "profile",
            selectedResumes: s == null ? undefined : s.resumes,
            actionType: a ? "add" : "edit",
            educationLevel: (0, I.gH)("primary", s || null),
            educationId: s == null ? undefined : s.id,
          });
        },
      };
      var ee = t(59701);
      var re = t.n(ee);
      const te = (e, r) => {
        const t = [
          {
            string: r.hasVehicle,
          },
        ];
        const n = (0, b.a)("hasVehicle", t, e.hasVehicle);
        if ((0, a.xb)(n)) {
          return {};
        } else {
          return {
            hasVehicle: n,
          };
        }
      };
      const ne = (e, r) => {
        const n = r.driverLicenseTypes ?? [];
        const o = (0, b.a)("driverLicenseTypes", n, e.driverLicenseTypes);
        if ((0, a.xb)(o)) {
          return {};
        } else {
          return {
            driverLicenseTypes: o,
          };
        }
      };
      const oe = {
        common: A,
        address: S,
        vehicle: {
          init: (e) => ({
            hasVehicle: (0, v.Yu)(e),
            driverLicenseTypes: (0, v.dx)(e),
          }),
          changed: (e) => {
            const r = ((e) => e.profileEditor.fields.hasVehicle)(e);
            const t = (0, v.Yu)(e);
            const n = ((e) => e.profileEditor.fields.driverLicenseTypes)(e);
            const o = (0, v.dx)(e);
            return (
              r !== t ||
              (n == null ? undefined : n.length) !==
                (o == null ? undefined : o.length) ||
              (function (e = [], r = []) {
                return e.some(
                  (e) => r.findIndex(({ string: r }) => r === e.string) < 0,
                );
              })(n, o)
            );
          },
          validate: (e, r) => ({
            ...te(r, e),
            ...ne(r, e),
          }),
          prepare: (e) => ({
            hasVehicle: e.hasVehicle,
            driverLicenseTypes: e.driverLicenseTypes.map((e) => e.string),
          }),
          submitAnalytics: (e, r) => {
            var n;
            re()({
              hasVehicle: r.hasVehicle,
              driverLicenseTypes:
                ((n = r.driverLicenseTypes) === null || n === undefined
                  ? undefined
                  : n.map((e) => e.string).join(",")) ?? "",
            });
          },
        },
        language: Z,
        preferredWorkAreas: W,
        communicationMethods: P,
        otherCommunicationMethods: F,
        primaryEducation: Q,
        elementaryEducation: V,
      };
      var ie = t(46337);
      var se = t(54850);
      var ae = t(82371);
      const le =
        ({ type: e, meta: r, openedRowIndex: t }) =>
        (n, o) => {
          const i = o();
          if ((0, L.av)(i)) {
            return;
          }
          const s = oe[e];
          n(
            (0, ae.pL)({
              type: e,
              meta: r,
              openedRowIndex: t,
            }),
          );
          n((0, ae.z0)());
          n((0, ae.e)(true));
          n((0, ae.Ex)(s.init(i)));
        };
      const de =
        (e = {}) =>
        async (r, t) => {
          const n = t();
          const i = (0, L.nb)(n);
          const a = oe[i];
          const u = (0, L.zP)(n);
          if ((0, L.av)(n)) {
            return;
          }
          const f = (0, L.zc)(n);
          const v = e.fields
            ? {
                ...f,
                ...e.fields,
              }
            : f;
          var g;
          if (!e.fields && !a.changed(n) && !e.forceChanged) {
            r((0, ae.e)(false));
            if ((g = e.onSuccess) !== null && g !== undefined) {
              g.call(e);
            }
            return;
          }
          const y = a.validate(v, n.profile.conditions);
          a.submitAnalytics(n, v, y);
          if ((0, m.xb)(y)) {
            r((0, ae.CW)(true));
            try {
              const t = a.prepare(v);
              const n = await s.update(t, u);
              if (c(n)) {
                r((0, h.RG)(n));
                r((0, ae.e)(false));
                if (!e.hideSuccessSnackbar) {
                  r(
                    (0, p.OV)({
                      kind: "status",
                      text: "saved",
                    }),
                  );
                }
                if (e.onSuccess) {
                  e.onSuccess();
                }
                o()();
                return;
              }
              if (d(n)) {
                const e = (0, ie.jx)(n.errors);
                r((0, ae.ln)(e));
                return;
              }
              if (l(n)) {
                r(
                  (0, p.OV)({
                    kind: "alert",
                    text: "notSaved",
                  }),
                );
              }
            } catch (e) {
              r(
                (0, p.OV)({
                  kind: "alert",
                  text: "notSaved",
                }),
              );
            }
          } else {
            r((0, ae.ln)(y));
          }
        };
      const ce =
        (e = {}) =>
        (r, t) => {
          const n = t();
          const o = (0, L.av)(n);
          const i = (0, L.nb)(n);
          if (!o) {
            if (!e.skipChangeCheck && ((e, r) => oe[r].changed(e))(n, i)) {
              (0, u.P)(e.onSuccess);
              r(
                (0, ae.TM)({
                  open: true,
                }),
              );
            } else {
              (0, se.G)();
              if (e.onSuccess) {
                e.onSuccess();
              }
            }
          }
        };
    },
    51987: function (e, r, t) {
      t.d(r, {
        H: () => c,
      });
      var n = t(45144);
      var o = t(9325);
      var i = t(48867);
      var s = t(83064);
      var a = t(18445);
      var l = t(82371);
      var d = t(46337);
      const c = (e, r = {}, t = []) => {
        const c = (0, o.useDispatch)();
        const u = (0, i.v)(a.av);
        const h = (0, i.v)(({ profileEditor: r }) => r.fields[e]);
        const p = (0, i.v)(({ profile: r }) => r.conditions[e]);
        const m = (0, i.v)(({ profileEditor: e }) => e.errors);
        const f = (0, d.L4)(e, r, h, t);
        const v = (0, n.useCallback)(
          (r, t = true) => {
            c(
              (0, l.BX)({
                [e]: r,
              }),
            );
            if (t && Object.keys(m).length > 0) {
              c((0, s.fr)(e));
              c((0, l.qi)(e));
            }
          },
          [c, e, m],
        );
        return {
          value: h,
          onChange: v,
          disabled: u,
          condition: p,
          ...f,
        };
      };
    },
    46337: function (e, r, t) {
      t.d(r, {
        A9: () => g,
        L4: () => h,
        jx: () => f,
        wB: () => m,
        xH: () => u,
      });
      var n = t(45144);
      var o = t(88233);
      var i = t(48867);
      var s = t(18445);
      var a = t(7206);
      var l = t(65284);
      const d = (e, r) => {
        if (!r) {
          return 0;
        }
        const t =
          (e.startsWith("LENGTH") || e.startsWith("SIZE")) &&
          (typeof r == "string" || (typeof r == "object" && "length" in r));
        return Number(t ? r.length : r);
      };
      const c = (e, r, t, n, i) => {
        if (!e || !r) {
          return "";
        }
        const s = (i ?? []).includes(e) ? String(n - Number(t)) : t;
        const a =
          typeof r == "string"
            ? r
            : (0, o.v)(n, {
                ...r,
              });
        if (a) {
          return a.replace("{0}", s);
        } else {
          return "";
        }
      };
      const u = (e, r, t = [], o = {}, a) => {
        const l = (0, i.v)((0, s.mC)(e));
        const u = (0, n.useMemo)(() => {
          var e;
          const n =
            t == null || (e = t[0]) === null || e === undefined
              ? undefined
              : e.code;
          if (!n) {
            return;
          }
          const i = o[n];
          const s = p(n, l);
          const u = d(n, r);
          return c(n, i, s, u, a);
        }, [t, o, l, r, a]);
        return {
          invalid: !!u,
          errorMessage: u,
        };
      };
      const h = (e, r = {}, t, o) => {
        const a = (0, i.v)((0, s.mC)(e));
        const l = (0, i.v)(s.KK);
        const u = (0, n.useMemo)(() => {
          var n;
          const i =
            l == null ||
            (n = l[e]) === null ||
            n === undefined ||
            (n = n[0]) === null ||
            n === undefined
              ? undefined
              : n.code;
          if (!i) {
            return;
          }
          const s = r[i];
          const u = p(i, a);
          const h = d(i, t);
          return c(i, s, u, h, o);
        }, [l, e, r, a, t, o]);
        return {
          invalid: !!u,
          errorMessage: u,
        };
      };
      function p(e, r) {
        if (e === "SIZE_LESS_THAN_MINIMUM") {
          if (r != null && r.mincount) {
            return `${r.mincount}`;
          } else {
            return "";
          }
        }
        if (e === "SIZE_GREATER_THAN_MAXIMUM") {
          if (r != null && r.maxcount) {
            return `${r.maxcount}`;
          } else {
            return "";
          }
        }
        if (e === "VALUE_LESS_THAN_MINIMUM") {
          if (r != null && r.mincount) {
            return `${r.mincount}`;
          } else {
            return "";
          }
        }
        if (e === "VALUE_GREATER_THAN_MAXIMUM") {
          if (r != null && r.maxcount) {
            return `${r.maxcount}`;
          } else {
            return "";
          }
        }
        var t;
        if (e === "LENGTH_GREATER_THAN_MAXIMUM") {
          return String(
            r == null ||
              (t = r.parts.find((e) => "string" in e)) === null ||
              t === undefined
              ? undefined
              : t.string.maxlength,
          );
        }
        if (e === "EARLY_THAN_MINIMUM") {
          var n;
          const e =
            r == null ||
            (n = r.parts.find((e) => "date" in e)) === null ||
            n === undefined
              ? undefined
              : n.date.minvalue;
          if (e) {
            return (0, a.Y4)(e);
          } else {
            return "";
          }
        }
        if (e === "LATER_THAN_MAXIMUM") {
          var o;
          const e =
            r == null ||
            (o = r.parts.find((e) => "date" in e)) === null ||
            o === undefined
              ? undefined
              : o.date.maxvalue;
          if (e) {
            return (0, a.Y4)(e);
          } else {
            return "";
          }
        }
        return "";
      }
      const m = (e, r) =>
        (0, n.useMemo)(
          () =>
            (0, l.XP)(e).reduce(
              (t, n) =>
                typeof e[n] == "string"
                  ? {
                      ...t,
                      [n]: r[e[n]],
                    }
                  : {
                      ...t,
                      [n]: {
                        one: r[e[n].one],
                        some: r[e[n].some],
                        many: r[e[n].many],
                      },
                    },
              {},
            ),
          [e, r],
        );
      function f(e) {
        return e.reduce((e, r) => {
          const t = r.field;
          if ((0, l.RI)(e, t)) {
            e[t].push(r);
            return e;
          } else {
            return {
              ...e,
              [r.field]: [r],
            };
          }
        }, {});
      }
      const v = ["LENGTH_GREATER_THAN_MAXIMUM"];
      const g = (e, r, t, l = {}, d = {}) => {
        const c = `/${e}/${r}/${t}`;
        const u = (0, i.v)((0, s.mC)(e));
        const h = (0, i.v)(s.KK);
        const p = (0, n.useMemo)(() => {
          if (h == null || !h[e]) {
            return;
          }
          const r = h[e].find((e) => e.fieldNamePath === c);
          const n = r == null ? undefined : r.code;
          if (!n) {
            return;
          }
          const i = l[n] || (l == null ? undefined : l.UNKNOWN);
          const s = d[n];
          const p = (function (e, r, t) {
            var n;
            const o =
              t == null ||
              (n = t.parts.find((e) => r in e)) === null ||
              n === undefined
                ? undefined
                : n[r];
            if (e === "VALUE_LESS_THAN_MINIMUM") {
              if (o != null && o.minvalue) {
                return `${o.minvalue}`;
              } else {
                return "";
              }
            }
            if (e === "VALUE_GREATER_THAN_MAXIMUM") {
              if (o != null && o.maxvalue) {
                return `${o.maxvalue}`;
              } else {
                return "";
              }
            }
            if (e === "LENGTH_GREATER_THAN_MAXIMUM") {
              if (o != null && o.maxlength) {
                return `${o.maxlength}`;
              } else {
                return "";
              }
            }
            if (e === "EARLY_THAN_MINIMUM") {
              const e = o == null ? undefined : o.minvalue;
              if (e) {
                return (0, a.Y4)(e);
              } else {
                return "";
              }
            }
            if (e === "LATER_THAN_MAXIMUM") {
              const e = o == null ? undefined : o.maxvalue;
              if (e) {
                return (0, a.Y4)(e);
              } else {
                return "";
              }
            }
            return "";
          })(n, t, u);
          if (typeof s == "number") {
            const e = v.includes(n) ? s - Number(p) : p;
            if (typeof i == "object") {
              return (0, o.v)(Number(e), {
                ...i,
              }).replace("{0}", String(e));
            } else {
              return i.replace("{0}", String(e));
            }
          }
          return i;
        }, [h, e, c, l, u, d, t]);
        return {
          invalid: !!p,
          errorMessage: p,
        };
      };
    },
    89395: function (e, r, t) {
      t.d(r, {
        I: () => s,
        a: () => i,
      });
      var n = t(95850);
      var o = t(65284);
      const i = (e, r, t) => {
        if (!t) {
          return [];
        }
        const i = (function (e, r, t) {
          if (t.mincount !== null && r.length < t.mincount) {
            return [
              {
                field: e,
                code: "SIZE_LESS_THAN_MINIMUM",
                type: "CONDITION",
                value: "",
                message: null,
                fieldNamePath: `/${e}`,
              },
            ];
          }
          if (t.maxcount !== null && r.length > t.maxcount) {
            return [
              {
                field: e,
                code: "SIZE_GREATER_THAN_MAXIMUM",
                type: "CONDITION",
                value: "",
                message: null,
                fieldNamePath: `/${e}`,
              },
            ];
          }
          return;
        })(e, r, t);
        if (i) {
          return i;
        }
        const s = t == null ? undefined : t.parts;
        if (s) {
          return r.reduce(
            (r, t, i) => [
              ...r,
              ...s.reduce((r, s) => {
                const a = (0, o.XP)(s)[0];
                const l = (0, n.QN)(t[a], s[a]);
                if (l) {
                  return [
                    ...r,
                    {
                      field: e,
                      code: l,
                      type: "CONDITION",
                      value: "",
                      message: null,
                      fieldNamePath: `/${e}/${i}/${a}`,
                    },
                  ];
                } else {
                  return r;
                }
              }, []),
            ],
            [],
          );
        } else {
          return [];
        }
      };
      const s = (e, r, t) => {
        const n = t[e];
        const s = i(e, r, n);
        if ((0, o.xb)(s)) {
          return {};
        } else {
          return {
            [e]: s,
          };
        }
      };
    },
    54850: function (e, r, t) {
      t.d(r, {
        G: () => n,
      });
      const n = () => {
        const e = new URL(window.location.href);
        if (e.searchParams.has("edit")) {
          e.searchParams.delete("edit");
          if (e.searchParams.has("meta")) {
            e.searchParams.delete("meta");
          }
          window.history.replaceState({}, "", e.toString());
        }
      };
    },
    44461: function (e, r, t) {
      t.d(r, {
        Mr: () => d,
        Oy: () => a,
        af: () => o,
        gU: () => n,
        km: () => u,
        m3: () => l,
        o2: () => s,
        pN: () => i,
        rS: () => c,
      });
      const n = (e) => e.profileEditor.fields.lastName;
      const o = (e) => e.profileEditor.fields.firstName;
      const i = (e) => e.profileEditor.fields.middleName;
      const s = (e) => e.profileEditor.fields.gender;
      const a = (e) => e.profileEditor.fields.birthday;
      const l = (e) => e.profileEditor.fields.area;
      const d = (e) => e.profileEditor.fields.metro;
      const c = (e) => e.profileEditor.fields.workTicket;
      const u = (e) => e.profileEditor.fields.citizenship;
    },
    33081: function (e, r, t) {
      t.d(r, {
        A: () => n,
      });
      const n = "l1";
    },
    30591: function (e, r, t) {
      t.d(r, {
        n: () => d,
        x: () => c,
      });
      var n = t(45144);
      var o = t(48867);
      var i = t(77916);
      var s = t(83059);
      var a = t(33081);
      var l = t(21820);
      const d = (e, r) => {
        const t = Number((e == null ? undefined : e.id) || "0");
        const d = (0, o.v)(s.bz);
        const c = (0, n.useMemo)(() => (0, i.t8)(r), [r]);
        const u = (0, o.v)(s.o9);
        const h = (0, o.v)(l.k);
        return {
          languagesItems: (0, n.useMemo)(
            () =>
              d
                .reduce((e, r) => {
                  if (!h.find((e) => e.id === r.id) || t === r.id) {
                    e.push({
                      value: `${r.id}`,
                      text: r.title,
                    });
                  }
                  return e;
                }, [])
                .sort((e, r) => (String(e.text) > String(r.text) ? 1 : -1)),
            [d, h, t],
          ),
          degreeItems: (0, n.useMemo)(
            () =>
              u
                .reduce((e, r) => {
                  if (r.degree !== a.A) {
                    e.push({
                      value: r.degree,
                      text: r.text,
                    });
                  }
                  if (r.degree === a.A && !c) {
                    e.push({
                      value: r.degree,
                      text: r.text,
                    });
                  }
                  return e;
                }, [])
                .sort((e, r) => (String(e.text) > String(r.text) ? 1 : -1)),
            [u, c],
          ),
        };
      };
      const c = (e) => ({
        hasNative: (0, n.useMemo)(() => e.some((e) => e.degree === a.A), [e]),
        hasForeign: (0, n.useMemo)(() => e.some((e) => e.degree !== a.A), [e]),
      });
    },
    21820: function (e, r, t) {
      t.d(r, {
        k: () => o,
      });
      var n = t(65284);
      const o = (e) => e.profileEditor.fields.language || n.LZ;
    },
    41869: function (e, r, t) {
      t.d(r, {
        X: () => o,
      });
      var n = t(65284);
      const o = (e) => e.profileEditor.fields.otherCommunicationMethods || n.LZ;
    },
    77942: function (e, r, t) {
      t.d(r, {
        F$: () => o,
        Fb: () => i,
        MY: () => s,
      });
      let n = [];
      const o = (e) => {
        if (!n.includes(e)) {
          n.push(e);
        }
      };
      const i = () => [...n];
      const s = () => {
        n = [];
      };
    },
    87542: function (e, r, t) {
      t.d(r, {
        Gt: () => o,
        Hb: () => i,
      });
      var n = t(58694);
      const o = (e) => {
        const r = ((e) => e.profileEditor.fields.preferredWorkAreas)(e);
        const t = (0, n.Y)(e);
        const o = ((e) => !!e.profileEditor.fields.preferredWorkAllAreas)(e);
        return (
          o !== (0, n.Tq)(e) ||
          (function (e, r) {
            if ((r == null ? undefined : r.length) !== e.length) {
              return true;
            }
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              if (i(e[t], n)) {
                return true;
              }
            }
            return false;
          })(t, r)
        );
      };
      function i(e, r) {
        return (
          r.area?.id !== e.area?.id ||
          !!s(r.districts, e.districts) ||
          !!s(r.metroLines, e.metroLines) ||
          !!s(r.metroStations, e.metroStations)
        );
      }
      function s(e, r) {
        if (e.length !== r.length) {
          return true;
        }
        for (let t = 0; t < e.length; t++) {
          if (e[t].id !== r[t].id) {
            return true;
          }
        }
        return false;
      }
    },
    62556: function (e, r, t) {
      t.d(r, {
        W: () => i,
      });
      var n = t(7206);
      const o = (e, r) => (e.name > r.name ? 1 : -1);
      const i = (e, r, t) =>
        (0, n.JR)(
          ((e, r, t) => {
            var n;
            const i = [];
            if (r && (n = e.area) !== null && n !== undefined && n.name) {
              i.push(e.area.name);
            }
            if (
              !!t &&
              !e.districts.length &&
              !e.metroLines.length &&
              !e.metroStations.length
            ) {
              i.push(t);
            }
            [...e.districts].sort(o).forEach((e) => {
              i.push(e.name);
            });
            [...e.metroLines].sort(o).forEach((e) => {
              i.push(e.name);
            });
            [...e.metroStations].sort(o).forEach((e) => {
              i.push(e.name);
            });
            return i;
          })(e, r, t),
          3,
          "и еще {0}",
        );
    },
    18445: function (e, r, t) {
      t.d(r, {
        EU: () => c,
        HM: () => f,
        KK: () => u,
        Mb: () => d,
        RS: () => h,
        S$: () => o,
        Th: () => l,
        ZT: () => a,
        av: () => s,
        mC: () => p,
        nb: () => n,
        t6: () => m,
        zP: () => v,
        zc: () => i,
      });
      const n = (e) => e.profileEditor.type;
      const o = (e) => e.profileEditor.openedRowIndex;
      const i = (e) => e.profileEditor.fields;
      const s = (e) => e.profileEditor.saving;
      const a = (e) =>
        e.profileEditor.opened && e.profileEditor.type === "language";
      const l = (e) =>
        e.profileEditor.opened && e.profileEditor.type === "address";
      const d = (e) =>
        e.profileEditor.opened &&
        e.profileEditor.type === "communicationMethods";
      const c = (e) =>
        e.profileEditor.opened &&
        e.profileEditor.type === "otherCommunicationMethods";
      const u = (e) => e.profileEditor.errors;
      const h = (e) => e.profileEditor.confirm;
      const p =
        (e) =>
        ({ profile: r }) =>
          r.conditions[e];
      const m = (e) => e.profileEditor.meta || "primary";
      const f = (e) => e.profileEditor.meta;
      const v = (e) => e.resumeFromHash;
    },
    82371: function (e, r, t) {
      t.d(r, {
        BX: () => c,
        CW: () => s,
        Ex: () => d,
        TM: () => a,
        e: () => l,
        ln: () => u,
        pL: () => i,
        p_: () => m,
        qi: () => p,
        z0: () => h,
      });
      var n = t(65284);
      const o = (0, t(61020).o)({
        initialState: {
          type: "common",
          saving: false,
          opened: false,
          confirm: {
            open: false,
          },
          fields: {},
          errors: {},
        },
        reducers: {
          setEditorType: (e, { payload: r }) => {
            return {
              ...e,
              type: r.type,
              openedRowIndex: r.openedRowIndex ?? null,
              meta: r.meta,
            };
          },
          toggleEditorSaving: (e, { payload: r }) => ({
            ...e,
            saving: r,
          }),
          toggleEditorConfirm: (e, { payload: r }) => ({
            ...e,
            confirm: r,
          }),
          toggleEditorVisibility: (e, { payload: r }) => ({
            ...e,
            opened: r,
          }),
          setCommonInfoFields: (e, { payload: r }) => ({
            ...e,
            fields: r,
          }),
          setCommonInfoFieldValue: (e, { payload: r }) => ({
            ...e,
            fields: {
              ...e.fields,
              ...r,
            },
          }),
          setEditorFormErrors: (e, { payload: r }) => ({
            ...e,
            errors: r,
          }),
          resetEditorFormErrors: (e) => ({
            ...e,
            errors: {},
          }),
          resetEditorFormErrorByKey: (e, { payload: r }) => ({
            ...e,
            errors: (0, n.CE)(r, e.errors),
          }),
        },
      });
      const {
        setEditorType: i,
        toggleEditorSaving: s,
        toggleEditorConfirm: a,
        toggleEditorVisibility: l,
        setCommonInfoFields: d,
        setCommonInfoFieldValue: c,
        setEditorFormErrors: u,
        resetEditorFormErrors: h,
        resetEditorFormErrorByKey: p,
      } = o.actions;
      const m = o.reducer;
    },
    55042: function (e, r, t) {
      t.d(r, {
        gH: () => a,
        j1: () => i,
        tH: () => o,
      });
      var n = t(42126);
      const o = (e, r, t) => {
        if (typeof t != "number") {
          return null;
        } else if (r === "primary") {
          return e.primaryEducation?.[t];
        } else {
          return e.elementaryEducation?.[t];
        }
      };
      s = o;
      const i = (e) => {
        const {
          fields: r,
          educationType: t,
          shouldCreateNew: o,
          prefilledResumeHashes: i,
          selectedIndex: a,
        } = e;
        if (o) {
          if (t === "primary") {
            return n.v.profilePrimaryEducation(i);
          } else {
            return n.v.profileElementaryEducation(i);
          }
        } else {
          return s(r, t, a);
        }
      };
      var s;
      const a = (e, r) =>
        e === "elementary" ? e : r ? r.educationLevel.id : undefined;
    },
    30527: function (e, r, t) {
      t.d(r, {
        R: () => s,
        F: () => a,
      });
      var n = t(48867);
      const o = ({ userId: e }) => e;
      var i = t(58694);
      const s = () => (0, n.v)((e) => e.profile.status === "BLOCKED");
      const a = () => `${(0, n.v)(i.x2)}` == `${(0, n.v)(o)}`;
    },
    58694: function (e, r, t) {
      t.d(r, {
        $p: () => l,
        C9: () => u,
        DZ: () => s,
        Ib: () => p,
        KM: () => d,
        Kw: () => m,
        Pr: () => S,
        Tj: () => j,
        Tq: () => b,
        WB: () => N,
        Y: () => x,
        Yu: () => g,
        aG: () => A,
        b8: () => i,
        bU: () => o,
        bv: () => c,
        cG: () => v,
        dx: () => y,
        fz: () => a,
        iB: () => f,
        lX: () => k,
        x2: () => _,
        yU: () => h,
        zA: () => E,
        zm: () => C,
      });
      var n = t(65284);
      const o = (e) => e.profile.fields;
      const i = (e) => {
        var t;
        return (
          ((t = e.profile.fields.gender) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.string) ?? "unknown"
        );
      };
      const s = (e) => {
        var t;
        return (
          ((t = e.profile.fields.area) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.text) ?? ""
        );
      };
      const a = (e) => e.profile.photoUrls || n.Nu;
      const l = (e) => {
        var t;
        return (
          ((t = e.profile.fields.lastName) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.string) ?? ""
        );
      };
      const d = (e) => {
        var t;
        return (
          ((t = e.profile.fields.firstName) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.string) ?? ""
        );
      };
      const c = (e) => {
        var t;
        return (
          ((t = e.profile.fields.middleName) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.string) ?? ""
        );
      };
      const u = (e) => {
        var t;
        return (
          ((t = e.profile.fields.birthday) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.date) ?? ""
        );
      };
      const h = (e) => {
        return e.profile.fields.area?.[0];
      };
      const p = (e) => {
        return e.profile.fields.metro?.[0];
      };
      const m = (e) => e.profile.fields.workTicket || n.LZ;
      const f = (e) => e.profile.fields.citizenship || n.LZ;
      const v = (e) => e.profile.fields.language || n.LZ;
      const g = (e) => {
        var r;
        if (
          (r = e.profile.fields.hasVehicle) === null ||
          r === undefined ||
          (r = r[0]) === null ||
          r === undefined
        ) {
          return undefined;
        } else {
          return r.string;
        }
      };
      const y = (e) => e.profile.fields.driverLicenseTypes || n.LZ;
      const x = (e) => e.profile.fields.preferredWorkAreas || n.LZ;
      const b = (e) => {
        var r;
        return (
          ((r = e.profile.fields.preferredWorkAllAreas) === null ||
          r === undefined ||
          (r = r[0]) === null ||
          r === undefined
            ? undefined
            : r.string) || false
        );
      };
      const S = (e) => e.profile.fields.elementaryEducation || n.LZ;
      const j = (e) => e.profile.fields.primaryEducation || n.LZ;
      const E = (e) => {
        return e.profile.fields.communicationMethods?.[0] || n.Nu;
      };
      const C = (e) => e.profileResumes;
      const k = (e) => e.profile.fields.otherCommunicationMethods || n.LZ;
      const _ = ({ profile: e }) => {
        var r;
        if (
          (r = e.fields) === null ||
          r === undefined ||
          (r = r.userId) === null ||
          r === undefined ||
          (r = r[0]) === null ||
          r === undefined
        ) {
          return undefined;
        } else {
          return r.string;
        }
      };
      const N = (e) => e.profile.fields.areaInfo;
      const A = (e) => e.profile.fields.addressCoordinates || n.LZ;
    },
    90893: function (e, r, t) {
      t.d(r, {
        A_: () => i,
        Cn: () => h,
        MY: () => s,
        RG: () => d,
      });
      var n = t(65284);
      var o = t(61020);
      const i = {
        area: [],
        metro: [],
        userId: [],
        gender: [],
        lastName: [],
        language: [],
        birthday: [],
        firstName: [],
        workTicket: [],
        middleName: [],
        citizenship: [],
        driverLicenseTypes: [],
        hasVehicle: [],
        relocation: [],
        relocationArea: [],
        preferredWorkAreas: [],
        preferredWorkAllAreas: [],
        primaryEducation: [],
        elementaryEducation: [],
        educationLevel: [],
        communicationMethods: [{}],
        otherCommunicationMethods: [],
        areaInfo: [],
        addressCoordinates: [],
      };
      const s = (0, n.XP)(i).reduce(
        (e, r) => ({
          ...e,
          [r]: undefined,
        }),
        {},
      );
      const a = {
        status: "APPROVED",
        fields: i,
        conditions: s,
        photoUrls: {},
      };
      const l = (0, o.o)({
        initialState: a,
        reducers: {
          setProfile: (e, { payload: r }) => ({
            ...r,
            disabled: false,
          }),
          setProfileField: (e, { payload: r }) => ({
            ...e,
            fields: {
              ...e.fields,
              ...r,
            },
          }),
          setProfileFormLoading: (e, { payload: r }) => ({
            ...e,
            loading: r,
          }),
        },
      });
      const {
        setProfile: d,
        setProfileField: c,
        setProfileFormLoading: u,
      } = l.actions;
      const h = l.reducer;
    },
    7206: function (e, r, t) {
      t.d(r, {
        CH: () => a,
        JR: () => c,
        WI: () => o,
        Y4: () => d,
        fy: () => i,
        l4: () => s,
        uU: () => l,
      });
      var n = t(64452);
      const o = (e) => e === "male" || e === "female";
      const i = (e) => {
        const [r = "", t = "", n = ""] = e.split("-");
        return [n, t, r].filter((e) => e !== "").join(".");
      };
      const s = (e) => {
        const [r = "", t = "", n = ""] = e.split(".");
        return [r, t, n];
      };
      const a = (e) => {
        const [r = "", t = "", n = ""] = s(e);
        return [n, t, r].filter((e) => e !== "").join("-");
      };
      const l = (e) => {
        const r = e ? e.split(".") : null;
        if (r && r.length === 3 && r[2].length === 4) {
          return new Date(Number(r[2]), Number(r[1]) - 1, Number(r[0]));
        } else {
          return new Date();
        }
      };
      const d = (e) => {
        const r = new Date(e);
        return `${`0${r.getDate()}`.slice(-2)}.${`0${r.getMonth() + 1}`.slice(-2)}.${`000${r.getFullYear()}`.slice(-4)}`;
      };
      const c = (e, r, t) =>
        e.length <= r
          ? e.join(", ")
          : `${e.slice(0, r).join(", ")} ${(0, n.WU)(t, {
              "{0}": e.length - r,
            })}`;
    },
    56585: function (e, r, t) {
      t.d(r, {
        M: () => i,
        e: () => o,
      });
      var n = t(30329);
      let o = (function (e) {
        e.DV360 = "dv360";
        return e;
      })({});
      const i = (0, n.autoGeneratedReducer)({});
    },
    1574: function (e, r, t) {
      t.d(r, {
        FY: () => i,
        _A: () => l,
        ql: () => a,
        rZ: () => d,
      });
      var n = t(39815);
      const o = (0, n.createSlice)({
        name: "resumeArtifacts",
        initialState: {
          artifacts: [],
          remove: {
            loading: false,
          },
          upload: {
            files: [],
            loading: false,
          },
        },
        reducers: {
          initApplicantResumeArtifacts: (e, { payload: r }) => ({
            ...r,
          }),
          setArtifacts: (e, { payload: r }) => ({
            ...e,
            artifacts: r,
          }),
          setArtifactsRemoving: (e, { payload: r }) => ({
            ...e,
            remove: {
              loading: r,
            },
          }),
          setArtifactsUploadData: (e, { payload: r }) => ({
            ...e,
            upload: r,
          }),
        },
      });
      const {
        setArtifacts: i,
        initApplicantResumeArtifacts: s,
        setArtifactsRemoving: a,
        setArtifactsUploadData: l,
      } = o.actions;
      const d = o.reducer;
    },
    78209: function (e, r, t) {
      t.d(r, {
        He: () => i,
        r3: () => a,
      });
      var n = t(39815);
      const o = (0, n.createSlice)({
        name: "resumeUpload",
        initialState: {
          uploadedResumes: [],
        },
        reducers: {
          setUploadedResumes: (e, { payload: r }) => {
            e.uploadedResumes = r;
          },
          addUploadedResume: (e, { payload: r }) => {
            e.uploadedResumes.push(r);
          },
        },
      });
      const { setUploadedResumes: i, addUploadedResume: s } = o.actions;
      const a = o.reducer;
    },
    28995: function (e, r, t) {
      t.d(r, {
        N3: () => o,
        dZ: () => s,
        eY: () => i,
        p_: () => n,
      });
      const n = (e) => e.scheme.screens;
      const o = (e) => {
        return e.scheme.resume._attributes.hash ?? "";
      };
      const i = (e) => {
        return e.scheme.resume.title[0]?.string;
      };
      const s = (e) => e.scheme.resumes;
    },
    85501: function (e, r, t) {
      t.d(r, {
        VH: () => a,
        fo: () => h,
        hY: () => c,
      });
      var n = t(30329);
      var o = t(71243);
      const i = {
        experience: undefined,
        keySkills: undefined,
        primaryEducation: undefined,
        elementaryEducation: undefined,
        skills: undefined,
        recommendation: undefined,
        attestationEducation: undefined,
        additionalEducation: undefined,
        area: undefined,
        professionalRole: undefined,
        birthday: undefined,
        citizenship: undefined,
        educationLevel: undefined,
        firstName: undefined,
        gender: undefined,
        lastName: undefined,
        middleName: undefined,
        phone: undefined,
        relocation: undefined,
        title: undefined,
        workSchedule: undefined,
        workTicket: undefined,
        photo: undefined,
      };
      var s = t(90893);
      const a = "SCHEME_LOADED";
      const l = "SCHEME_SET_LOADING";
      const d = (0, n.ActionCreatorHelper)();
      d(a);
      const c = d(l);
      const u = {
        resume: {
          _attributes: {
            id: "",
            hash: "",
            status: "",
          },
          _conditions: i,
          area: [],
          phone: [o.S],
          title: [],
          gender: [],
          birthday: [],
          workTicket: [],
          experience: [],
          citizenship: [],
          educationLevel: [
            {
              string: "",
            },
          ],
          professionalRole: [],
          primaryEducation: [],
          firstName: [],
          lastName: [],
          middleName: [],
          keySkills: [],
          relocation: [],
          workSchedule: [],
          skills: [],
          _defaults: {},
          attestationEducation: [],
          elementaryEducation: [],
          additionalEducation: [],
          recommendation: [],
          photo: [],
        },
        screens: [],
        profile: {
          fields: s.A_,
          conditions: s.MY,
          status: "APPROVED",
        },
        conditions: {},
        creds: {
          questions: {},
          answers: {},
          questionToAnswerMap: {},
        },
        nextIncompleteScreenId: "",
        additionalProperties: undefined,
        skillsWithLevels: undefined,
        resumes: [],
      };
      const h = (0, n.createReducer)(u, {
        [a]: (e, { payload: r }) => r,
        [l]: (e, { payload: r }) => ({
          ...e,
          loading: r,
        }),
      });
    },
    33089: function (e, r, t) {
      t.d(r, {
        A: () => o,
        J: () => s,
      });
      var n = t(30329);
      let o = (function (e) {
        e.All = "ALL";
        e.Languages = "LANG";
        e.Skills = "SKILL";
        e.SkillsResumes = "SKILL_RESUMES";
        e.SkillsResume = "SKILL_RESUME";
        return e;
      })({});
      const i = {
        availableMethods: [],
        skillsVerificationCardMethods: {
          skills: [],
          languages: [],
        },
        uiOptions: {
          accentedHeader: false,
          accentedButton: false,
          stretchedButton: false,
          mode: o.All,
        },
      };
      const s = (0, n.createReducer)(i, {});
    },
    83668: function (e, r, t) {
      t.d(r, {
        IA: () => a,
        OV: () => l,
        Uy: () => d,
      });
      var n = t(30329);
      const o = "SHOW_SNACKBAR";
      const i = "HIDE_SNACKBAR";
      const s = (0, n.ActionCreatorHelper)();
      const a = s(i);
      const l = s(o);
      const d = (0, n.createReducer)(
        {
          opened: false,
        },
        {
          [o]: (e, { payload: r }) => ({
            opened: true,
            snackbar: r,
          }),
          [i]: () => ({
            opened: false,
          }),
        },
      );
    },
    9223: function (e, r, t) {
      t.d(r, {
        B: () => i,
        D: () => o,
      });
      var n = t(30329);
      let o = (function (e) {
        e.RU = "hh.ru";
        e.UA = "hh.ua";
        e.UZ = "hh.uz";
        e.GE = "headhunter.ge";
        e.KG = "headhunter.kg";
        e.KZ = "headhunter.com.kz";
        e.AZ = "jobs.day.az";
        e.BY = "rabota.by";
        e.JTB = "jobs.tut.by";
        e.ZP = "zarplata.ru";
        return e;
      })({});
      const i = (0, n.autoGeneratedReducer)(o.RU);
    },
    68390: function (e, r, t) {
      t.d(r, {
        b: () => n,
      });
      var n = (function (e) {
        e.ANONYMOUS = "anonymous";
        e.NEDOUSER = "nedouser";
        e.BACKOFFICE = "backoffice";
        e.EMPLOYER = "employer";
        e.APPLICANT = "applicant";
        e.BACKOFFICEUSER = "back_office_user";
        return e;
      })(n || {});
    },
    72793: function (e, r, t) {
      t.d(r, {
        n$: () => i,
        s$: () => s,
      });
      var n = t(45144);
      const o = (0, n.createContext)({
        isLoading: false,
        isLoaded: false,
        error: null,
        reload: () => {},
      });
      const i = () => {
        const e = (0, n.useContext)(o);
        if (!e) {
          throw new Error("useYMap должен использоваться внутри YMapProvider");
        }
        return e;
      };
      const s = o.Provider;
    },
    77445: function (e, r, t) {
      t.d(r, {
        i: () => d,
      });
      var n = t(45144);
      var o = t(72793);
      const i = "ru_RU";
      const s = ["ru_RU", "en_US", "en_RU", "tr_TR"];
      const a = "rpf-yandex-map-script";
      var l = t(9862);
      const d = ({ children: e }) => {
        const [r, t] = (0, n.useState)(false);
        const [d, c] = (0, n.useState)(true);
        const [u, h] = (0, n.useState)(false);
        const [p, m] = (0, n.useState)(null);
        const f = (0, n.useCallback)(() => {
          if (!u && !r) {
            t(true);
            m(null);
            (function () {
              var r;
              if (document.getElementById(a)) {
                return new Promise((e) => e(undefined));
              }
              const t = window.globalVars?.locale || i;
              const n = s.includes(t) ? t : i;
              const o =
                (r = window.globalVars) === null ||
                r === undefined ||
                (r = r.features) === null ||
                r === undefined
                  ? undefined
                  : r.ymaps_api_key;
              return new Promise((e, r) => {
                const t = document.createElement("script");
                t.id = a;
                t.src = `https://api-maps.yandex.ru/v3/?apikey=${o}&lang=${n}`;
                t.onload = (r) => {
                  e(r);
                };
                t.onerror = r;
                document.head.appendChild(t);
              });
            })()
              .then(() => {
                h(true);
              })
              .catch((e) => {
                m(e);
              })
              .finally(() => {
                t(false);
                c(false);
              });
          }
        }, [u, r]);
        (0, n.useEffect)(() => {
          f();
        }, [r, u, d, f]);
        const v = f;
        const g = (0, n.useMemo)(
          () => ({
            isLoading: d,
            isLoaded: u,
            error: p,
            reload: v,
          }),
          [d, u, p, v],
        );
        return (0, l.jsx)(o.s$, {
          value: g,
          children: e,
        });
      };
      d.displayName = "models/ymap/provider/YMapContextProvider";
    },
    70138: function (e, r, t) {
      t.d(r, {
        E: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "Profile-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () => t.e("7678").then(t.bind(t, 5963)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 5963;
        },
      });
    },
    12748: function (e, r, t) {
      t.d(r, {
        i: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_address-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("7595"),
            t.e("6372"),
            t.e("4821"),
          ]).then(t.bind(t, 86777)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 86777;
        },
      });
    },
    75515: function (e, r, t) {
      t.d(r, {
        q: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_common-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("7595"), t.e("2847")]).then(
            t.bind(t, 96283),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 96283;
        },
      });
    },
    30226: function (e, r, t) {
      t.d(r, {
        z: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_creds-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("3941")]).then(t.bind(t, 70962)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 70962;
        },
      });
    },
    5874: function (e, r, t) {
      t.d(r, {
        x: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_elementaryEducation-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("7595"),
            t.e("4891"),
            t.e("4998"),
          ]).then(t.bind(t, 12472)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 12472;
        },
      });
    },
    20611: function (e, r, t) {
      t.d(r, {
        D: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_preferredWorkAreas-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("7595"),
            t.e("2726"),
            t.e("9846"),
          ]).then(t.bind(t, 29780)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 29780;
        },
      });
    },
    45945: function (e, r, t) {
      t.d(r, {
        P: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_primaryEducation-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("7595"), t.e("4891"), t.e("494")]).then(
            t.bind(t, 23356),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 23356;
        },
      });
    },
    2636: function (e, r, t) {
      t.d(r, {
        V: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_vehicle-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7595"), t.e("6428")]).then(t.bind(t, 23530)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 23530;
        },
      });
    },
    13939: function (e, r, t) {
      t.d(r, {
        m: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_view_educations-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7595"), t.e("9221")]).then(t.bind(t, 73898)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 73898;
        },
      });
    },
    83155: function (e, r, t) {
      t.d(r, {
        u: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_view_languages-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7595"), t.e("5449")]).then(t.bind(t, 62900)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 62900;
        },
      });
    },
    60107: function (e, r, t) {
      t.d(r, {
        s: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "profile_view_search_preferences-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7595"), t.e("8803")]).then(t.bind(t, 78791)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 78791;
        },
      });
    },
    426: function (e, r, t) {
      t.d(r, {
        R: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_additional_education-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("6940"),
            t.e("7779"),
            t.e("99"),
          ]).then(t.bind(t, 91891)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 91891;
        },
      });
    },
    21614: function (e, r, t) {
      t.d(r, {
        v: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_attestation_education-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("6940"),
            t.e("7779"),
            t.e("5314"),
          ]).then(t.bind(t, 66421)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 66421;
        },
      });
    },
    29209: function (e, r, t) {
      t.d(r, {
        _: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_common-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("7879"),
            t.e("8145"),
          ]).then(t.bind(t, 41909)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 41909;
        },
      });
    },
    79488: function (e, r, t) {
      t.d(r, {
        $: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_common_short-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("7879"),
            t.e("2418"),
          ]).then(t.bind(t, 65281)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 65281;
        },
      });
    },
    91347: function (e, r, t) {
      t.d(r, {
        l: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_correction_skills-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("2102"),
            t.e("9698"),
          ]).then(t.bind(t, 2302)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 2302;
        },
      });
    },
    72015: function (e, r, t) {
      t.d(r, {
        v: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_driving_information-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("9878")]).then(
            t.bind(t, 18861),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 18861;
        },
      });
    },
    58080: function (e, r, t) {
      t.d(r, {
        k: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_dynamic_screen-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("412")]).then(
            t.bind(t, 11958),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 11958;
        },
      });
    },
    82846: function (e, r, t) {
      t.d(r, {
        Y: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_edit_title-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("231")]).then(
            t.bind(t, 64928),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 64928;
        },
      });
    },
    54441: function (e, r, t) {
      t.d(r, {
        S: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_education-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("6940"),
            t.e("7779"),
            t.e("2113"),
          ]).then(t.bind(t, 58111)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 58111;
        },
      });
    },
    66582: function (e, r, t) {
      t.d(r, {
        s: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_education_level-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("7472")]).then(
            t.bind(t, 37627),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 37627;
        },
      });
    },
    99021: function (e, r, t) {
      t.d(r, {
        H: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_educations-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("8612")]).then(
            t.bind(t, 25850),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 25850;
        },
      });
    },
    55907: function (e, r, t) {
      t.d(r, {
        J: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_elementary_education-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("6940"),
            t.e("7779"),
            t.e("1414"),
          ]).then(t.bind(t, 18994)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 18994;
        },
      });
    },
    59812: function (e, r, t) {
      t.d(r, {
        W: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_experience-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("2102"), t.e("227")]).then(
            t.bind(t, 20240),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 20240;
        },
      });
    },
    96334: function (e, r, t) {
      t.d(r, {
        Y: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_experience_in_professional_role-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("2102"), t.e("788")]).then(
            t.bind(t, 90102),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 90102;
        },
      });
    },
    53215: function (e, r, t) {
      t.d(r, {
        E: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_keyskills-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("1503")]).then(
            t.bind(t, 99508),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 99508;
        },
      });
    },
    16074: function (e, r, t) {
      t.d(r, {
        w: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_photo_upload-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("9640")]).then(
            t.bind(t, 13750),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 13750;
        },
      });
    },
    88773: function (e, r, t) {
      t.d(r, {
        T: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_preferred_area-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("6372"),
            t.e("2726"),
            t.e("1063"),
          ]).then(t.bind(t, 74461)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 74461;
        },
      });
    },
    44608: function (e, r, t) {
      t.d(r, {
        e: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_professional_role-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("6594")]).then(
            t.bind(t, 75406),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 75406;
        },
      });
    },
    61500: function (e, r, t) {
      t.d(r, {
        E: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_recommendation-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([
            t.e("7018"),
            t.e("2656"),
            t.e("6940"),
            t.e("6535"),
          ]).then(t.bind(t, 75696)),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 75696;
        },
      });
    },
    74082: function (e, r, t) {
      t.d(r, {
        U: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_skills-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("9840")]).then(
            t.bind(t, 90573),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 90573;
        },
      });
    },
    36801: function (e, r, t) {
      t.d(r, {
        a: () => o,
      });
      var n = t(53744);
      const o = (0, n.ZP)({
        resolved: {},
        chunkName: () => "resume_title-route",
        isReady(e) {
          const r = this.resolve(e);
          return this.resolved[r] === true && !!t.m[r];
        },
        importAsync: () =>
          Promise.all([t.e("7018"), t.e("2656"), t.e("4416")]).then(
            t.bind(t, 16453),
          ),
        requireAsync(e) {
          const r = this.resolve(e);
          this.resolved[r] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[r] = true;
            return e;
          });
        },
        requireSync(e) {
          const r = this.resolve(e);
          return t(r);
        },
        resolve() {
          return 16453;
        },
      });
    },
    69330: function (e, r, t) {
      t.d(r, {
        Kd: () => m,
        p6: () => f,
      });
      var o = t(32449);
      var i = t(59558);
      var s = t(8493);
      var a = t(67117);
      var l = t(21570);
      var d = t(99227);
      var c = t(41781);
      var u = t(23855);
      const h =
        (typeof window != "undefined" && window.globalVars?.lang) || "RU";
      const p = {
        AZ: i.Z,
        EN: s.Z,
        KZ: a.Z,
        RU: l.Z,
        UA: d.Z,
        UZ: c.Z,
        KG: l.Z,
      };
      const m = () => p[h];
      const f = (e, r, t = h) =>
        (0, o.Z)(typeof e == "string" ? (0, u.Z)(e) : e, r, {
          locale: p[t],
        });
    },
    87665: function (e, r, t) {
      t.d(r, {
        LZ: () => o,
        Nu: () => i,
        xb: () => s,
      });
      var n = t(52100);
      const o = [];
      const i = {};
      function s(e) {
        if (
          Array.isArray(e) ||
          ((r = e), Object.prototype.toString.call(r) === "[object String]")
        ) {
          return e.length === 0;
        } else {
          return (
            !!(function (e) {
              return Object.prototype.toString.call(e) === "[object Object]";
            })(e) && (0, n.XP)(e).length === 0
          );
        }
        var r;
      }
    },
    65284: function (e, r, t) {
      t.d(r, {
        fy: () => i,
        xb: () => n.xb,
        R0: () => d,
        aH: () => p,
        LZ: () => n.LZ,
        dO: () => o.dO,
        CE: () => o.CE,
        p6: () => h.p6,
        RI: () => o.RI,
        pn: () => u,
        Nu: () => n.Nu,
        wm: () => s,
        Kd: () => h.Kd,
        XP: () => o.XP,
        D1: () => c,
      });
      var n = t(87665);
      var o = t(52100);
      const i = (e) => (e ? e.trim() : e);
      const s = (e) => (e ? e.charAt(0).toUpperCase() + e.slice(1) : e);
      const a = " ʼ’'`-";
      const l = "(?:[{prefix}]|^)[^{prefix}]*".replace(/\{prefix\}/g, a);
      function d(e = "") {
        return e.replace(new RegExp(l, "g"), (e) => {
          const r = new RegExp("[{prefix}]".replace("{prefix}", a), "g");
          const t = e.search(r) === -1 ? 1 : 2;
          return e.slice(0, t).toUpperCase() + e.slice(t).toLowerCase();
        });
      }
      const c = (e) =>
        e
          .split(/(?=[A-Z])/)
          .join("_")
          .toLowerCase();
      const u = (e) => {
        const r = window.pageYOffset + e.getBoundingClientRect().top;
        const t = window.pageXOffset + e.getBoundingClientRect().left;
        const n = window.pageXOffset + e.getBoundingClientRect().right;
        const o = window.pageYOffset + e.getBoundingClientRect().bottom;
        const i = window.pageYOffset;
        const s = window.pageXOffset;
        const a = window.pageXOffset + document.documentElement.clientWidth;
        const l = window.pageYOffset + document.documentElement.clientHeight;
        return o > i && r < l && n > s && t < a;
      };
      var h = t(69330);
      const p = (e) =>
        typeof e == "string"
          ? e
          : Array.isArray(e)
            ? e.map(p).join("")
            : typeof e == "object" &&
                e !== null &&
                "props" in e &&
                "children" in e.props &&
                e.props.children
              ? p(e.props.children)
              : "";
    },
    52100: function (e, r, t) {
      function n(e) {
        return Object.keys(e);
      }
      function o(e) {
        return function (r) {
          return r !== null && typeof r == "object" && e in r;
        };
      }
      function i(e, r) {
        const t = {};
        n(r).forEach((n) => {
          if (n !== e) {
            t[n] = r[n];
          }
        });
        return t;
      }
      function s(e, r) {
        return Object.hasOwn(e, r);
      }
      t.d(r, {
        CE: () => i,
        RI: () => s,
        XP: () => n,
        dO: () => o,
      });
    },
    61020: function (e, r, t) {
      t.d(r, {
        o: () => o,
      });
      var n = t(65284);
      const o = ({ initialState: e, reducers: r }) => ({
        actions: (0, n.XP)(r).reduce(
          (e, r) => ({
            ...e,
            [r]: (e) => ({
              type: i(r),
              payload: e,
            }),
          }),
          {},
        ),
        reducer: {
          reducerMap: (0, n.XP)(r).reduce(
            (e, t) => ({
              ...e,
              [i(t)]: r[t],
            }),
            {},
          ),
          initialState: e,
        },
      });
      function i(e) {
        return (0, n.D1)(e).toUpperCase();
      }
    },
  },
]);
//# sourceMappingURL=8490.3aec61eb87b33933.js.map
