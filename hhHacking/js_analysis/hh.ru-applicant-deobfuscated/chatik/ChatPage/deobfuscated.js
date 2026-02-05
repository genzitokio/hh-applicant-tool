"use strict";

(globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["3551"],
  {
    66046: function (e, t, a) {
      a.d(t, {
        Z: () => h,
      });
      var s = a(3891);
      var i = a(63116);
      var n = a.n(i);
      const c = "wrapper--iN2v1DSOs7gGu8cx";
      const o = "iframe--R13PXh0Lw4u9Rnef";
      const l = "iframe_loading--j83eXHmz85g89glc";
      var r = a(4201);
      const d = ({ src: e, dataQa: t, loader: a = null }) => {
        const [i, d] = (0, s.useState)(Boolean(a));
        const h = (0, s.useRef)(null);
        const u = () => {
          d(false);
        };
        (0, s.useEffect)(() => {
          const e = (e) => {
            try {
              const t = JSON.parse(e.data);
              if (
                t &&
                (t == null ? undefined : t.name) === "iframeContentLoaded"
              ) {
                u();
              }
            } catch (e) {}
          };
          window.addEventListener("message", e);
          return () => {
            window.removeEventListener("message", e);
          };
        }, []);
        const m = new URL(e);
        m.searchParams.set("openedInsideChatik", "true");
        return (0, r.jsxs)("div", {
          className: c,
          children: [
            i && a,
            (0, r.jsx)("iframe", {
              ref: h,
              src: m.toString(),
              className: n()(o, {
                [l]: i,
              }),
              onLoad: u,
              "data-qa": t,
              width: "100%",
              height: "100%",
            }),
          ],
        });
      };
      d.displayName = "components/IFrame/index/IFrame";
      const h = (0, s.memo)(d);
    },
    59890: function (e, t, a) {
      a.d(t, {
        Z: () => p,
      });
      var s = a(3891);
      var i = a(56067);
      var n = a.n(i);
      var c = a(48867);
      var o = a(49727);
      var l = a(13018);
      var r = a(47400);
      var d = a(68390);
      var h = a(17223);
      const u = "chatik.resumeError.deleted";
      const m = "chatik.resumeError.untrustedEmployer";
      const v = "chatik.resume.applicantResumes";
      const p = () => {
        const e = (0, c.v)(r.W4);
        const t = (0, c.v)(r.km);
        const a = (0, c.v)(r.Fq);
        const i = (0, c.v)(l.sW);
        const p = (0, c.v)((e) => e.userType);
        const g = (0, c.v)(({ chatData: e }) => e.chat);
        const x = (0, c.v)((e) => e.siteRoot);
        const y = (0, o.T)();
        const j = (0, s.useCallback)(
          () =>
            n()({
              chatId: g.id,
            }),
          [g.id],
        );
        if (i) {
          return null;
        } else if (e) {
          return {
            title: y[m],
          };
        } else if (g.type === "SUPPORT" && p === d.Z.Applicant) {
          return {
            href: `${x}/applicant/resumes?hhtmFrom=chat`,
            title: y[v],
          };
        } else if (t) {
          return {
            href: (0, h.LB)({
              siteRoot: x,
              userType: p,
              resumeHash: t.hash,
              negotiationTopic: a,
            }),
            title: t.title,
            onClick: j,
          };
        } else {
          return {
            title: y[u],
          };
        }
      };
    },
    25179: function (e, t, a) {
      a.r(t);
      a.d(t, {
        default: () => sa,
      });
      var s = a(3891);
      var i = a(84434);
      var n = a(30329);
      var c = a(48867);
      var o = a(60186);
      var l = a(16637);
      var r = a(26442);
      var d = a(7563);
      var h = a(38618);
      var u = a(95983);
      var m = a(55750);
      var v = a(3216);
      var p = a(13018);
      var g = a(89156);
      var x = a(40510);
      var y = a(75539);
      var j = a(63116);
      var f = a.n(j);
      var k = a(47400);
      var w = a(24488);
      var N = a(36047);
      var I = a(63144);
      var _ = a(69441);
      var b = a(58342);
      var S = a(16347);
      var A = a(4201);
      const C = {
        [S.H.Assesment]: "chatik.negotiations.assessment",
        [S.H.Consider]: "chatik.negotiations.consider",
        [S.H.Hired]: "chatik.negotiations.hired",
        [S.H.Interview]: "chatik.negotiations.interview",
        [S.H.Offer]: "chatik.negotiations.offer",
        [S.H.PhoneInterview]: "chatik.negotiations.phone_interview",
        [S.H.DiscardByEmployer]:
          "chatik.negotiations.discard_by_employer.softFrom",
        [S.H.DiscardByApplicant]: "chatik.negotiations.discard_by_applicant",
        [S.H.DiscardNoInteraction]:
          "chatik.negotiations.discard_no_interaction",
        [S.H.DiscardToOtherVacancy]:
          "chatik.negotiations.discard_to_other_vacancy",
        [S.H.DiscardVacancyClosed]:
          "chatik.negotiations.discard_vacancy_closed",
        inviteToAnother: "chatik.negotiations.invite_to_other",
      };
      const H = (e, t = "") => `/chat/${e}/workflow/${t}`;
      const D = {
        [S.H.Assesment]: (0, A.jsx)(b.zkP, {}),
        [S.H.Consider]: (0, A.jsx)(b.hG$, {}),
        [S.H.Hired]: (0, A.jsx)(b.TBQ, {}),
        [S.H.Offer]: (0, A.jsx)(b.GhD, {}),
        [S.H.Interview]: (0, A.jsx)(b.CxN, {}),
        [S.H.PhoneInterview]: (0, A.jsx)(b.CxN, {}),
      };
      const R = ({
        trls: e,
        states: t,
        chatId: a,
        withInviteToAnotherVacancy: i,
        children: n,
        dataQa: c,
        size: o,
      }) => {
        const l = (0, N.usePush)();
        const [r, d] = (0, s.useState)(false);
        const h = (0, s.useRef)(null);
        const u = (0, s.useRef)(null);
        const m = (t) => e[C[t]];
        const v = () => {
          d((e) => !e);
        };
        const p = (e) => () => {
          ((e) => {
            w.default.sendHHEventButtonClick("chat_fast_stage_change", {
              stage: e,
            });
          })(e);
          l(H(a, e));
        };
        (0, s.useEffect)(() => {
          u.current = document.getElementById("chatik-layout");
        }, []);
        if (Array.isArray(t)) {
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)(I.z, {
                "data-qa": c,
                ref: h,
                size: o,
                style: "neutral",
                mode: "secondary",
                icon: n
                  ? null
                  : o === "small"
                    ? (0, A.jsx)(b.t_N, {})
                    : (0, A.jsx)(b.yRg, {}),
                hideLabel: !n,
                "aria-label": "more topics",
                onClick: v,
                children: n,
              }),
              (0, A.jsx)(_.S, {
                visible: r,
                onClose: v,
                dropProps: {
                  ignoreIntersections: false,
                  preferredViewport: u,
                  activatorRef: h,
                  placement: "top-left",
                  maxWidth: 375,
                },
                children: (0, A.jsxs)("ul", {
                  role: "menu",
                  children: [
                    t.map((e) =>
                      (0, A.jsx)(
                        "li",
                        {
                          children: (0, A.jsx)(I.z, {
                            style: "neutral",
                            mode: "tertiary",
                            icon: D[e],
                            stretched: Boolean(D[e]),
                            onClick: p(e),
                            children: m(e),
                          }),
                        },
                        e,
                      ),
                    ),
                    i &&
                      (0, A.jsx)("li", {
                        children: (0, A.jsx)(I.z, {
                          stretched: true,
                          style: "neutral",
                          mode: "tertiary",
                          onClick: () => l(H(a)),
                          icon: (0, A.jsx)(b.Jj7, {}),
                          children: e[C.inviteToAnother],
                        }),
                      }),
                  ],
                }),
              }),
            ],
          });
        } else {
          return (0, A.jsx)(I.z, {
            "data-qa": `chatik-stage-change-to-${t}`,
            size: o,
            style: "neutral",
            mode: "secondary",
            onClick: p(t),
            children: n,
          });
        }
      };
      R.displayName =
        "components/WorkflowActions/ChangeTopicButton/ChangeTopicButton";
      const T = (0, g.Z)(R);
      const Z = "container--qcusLn5dgW705GZo";
      const E = "item--BTzydVsbgRSxI4HX";
      const L = "item_medium--XhE6kJriTU75flzI";
      const O = {
        HIRED: "chatik.negotiations.hired",
        OFFER: "chatik.negotiations.offer",
        PHONE_INTERVIEW: "chatik.negotiations.phone_interview",
        discard: "chatik.negotiations.discard_by_employer",
        invite: "chatik.negotiations.invite",
      };
      const P = ({ trls: e, size: t = "small", className: a }) => {
        const i = (0, c.v)(({ chatData: e }) => e.chat);
        const n = (0, c.v)(k.Fq);
        const o = (0, c.v)(p.AV);
        const l = (0, c.v)((e) => e.chatData.negotiationTopicsAvailableStates);
        const r = n == null ? undefined : n.currentEmployerState;
        const d = f()(E, {
          [L]: t === "medium",
        });
        const [[h, u], m] = ((e) => {
          const {
            DiscardByEmployer: t,
            DiscardByApplicant: a,
            DiscardNoInteraction: s,
            DiscardVacancyClosed: i,
            DiscardToOtherVacancy: n,
            Response: c,
            ...o
          } = S.H;
          const l = [t, a, s, n, i];
          switch (e) {
            case S.H.DiscardByEmployer:
            case S.H.DiscardByApplicant:
            case S.H.DiscardNoInteraction:
            case S.H.DiscardToOtherVacancy:
            case S.H.DiscardVacancyClosed:
              return [[S.H.PhoneInterview], []];
            case S.H.PhoneInterview: {
              const { Offer: e, PhoneInterview: t, ...a } = o;
              return [[e, l], Object.values(a)];
            }
            case S.H.Offer: {
              const { Hired: e, Offer: t, ...a } = o;
              return [[e, l], Object.values(a)];
            }
            default: {
              const { PhoneInterview: t, ...a } = o;
              return [[t, l], Object.values(a).filter((t) => t !== e)];
            }
          }
        })(r);
        const v = (0, s.useMemo)(
          () => (l ? m.filter((e) => l.includes(e)) : m),
          [l, m],
        );
        if (o) {
          return (0, A.jsx)("div", {
            className: f()(Z, a),
            children: (0, A.jsx)("div", {
              className: d,
              children: (0, A.jsx)(T, {
                chatId: i.id,
                size: t,
                children: e[O.invite],
              }),
            }),
          });
        } else {
          return (0, A.jsxs)("div", {
            className: f()(Z, a),
            children: [
              (0, A.jsx)("div", {
                className: d,
                children: (0, A.jsx)(T, {
                  chatId: i.id,
                  states: h,
                  size: t,
                  dataQa: "chatik-stage-change-invite-list",
                  children: e[O[h]],
                }),
              }),
              u &&
                (0, A.jsx)("div", {
                  className: d,
                  children: (0, A.jsx)(T, {
                    chatId: i.id,
                    states: u,
                    size: t,
                    dataQa: "chatik-stage-change-discard-list",
                    children: e[O.discard],
                  }),
                }),
              (0, A.jsx)("div", {
                className: d,
                children: (0, A.jsx)(T, {
                  dataQa: "chatik-stage-change-more",
                  chatId: i.id,
                  states: v,
                  withInviteToAnotherVacancy: true,
                  size: t,
                }),
              }),
            ],
          });
        }
      };
      P.displayName = "components/WorkflowActions/index/WorkflowActions";
      const B = (0, g.Z)(P);
      var W = a(71473);
      var V = a(29801);
      var z = a(29725);
      var F = a(89059);
      const U = ({ type: e, actionType: t, uuid: a, children: i }) => {
        const n = (0, c.v)((e) => e.chatData.chat.id);
        const { canWrite: o, sendMessageImmediately: l } = (0, z.ZP)();
        const r = e === V.sW.Action && t === V.L2.CloseChat && F.vK;
        const d = e === V.sW.Message && o;
        (0, s.useEffect)(() => {
          w.default.sendHHEvent("element_shown", {
            elementName: "chat_suggestion_button",
            type: e,
            text: i,
            chatId: n,
            suggestionUuid: a,
          });
        }, [n, i, a, e]);
        if (r || d) {
          return (0, A.jsx)(I.z, {
            size: "small",
            style: d ? "accent" : "neutral",
            mode: "secondary",
            onClick: () => {
              w.default.sendHHEventButtonClick("chat_suggestion_button", {
                type: e,
                text: i,
                chatId: n,
                suggestionUuid: a,
              });
              if (r) {
                (0, F.AW)("close");
              } else {
                l({
                  text: i,
                  suggestionUuid: a,
                });
              }
            },
            children: i,
          });
        } else {
          return null;
        }
      };
      U.displayName =
        "ChatActions/Suggestions/SuggestionButton/SuggestionButton";
      const M = (0, s.memo)(U);
      const q = "container--aP8SI3WqBDwGg_f5";
      const X = () => {
        const e = (0, c.v)(({ chatData: e }) => {
          var t;
          if ((t = e.suggestions) === null || t === undefined) {
            return undefined;
          } else {
            return t.suggestionOptions.options;
          }
        });
        const t = (0, c.v)(({ chatData: e }) => {
          return e.suggestions?.uuid;
        });
        if (e && t) {
          return (0, A.jsx)("div", {
            className: q,
            children: e.map((e) =>
              (0, A.jsx)(
                M,
                {
                  type: e.type,
                  actionType: e.actionType,
                  uuid: t,
                  children: e.text,
                },
                e.text,
              ),
            ),
          });
        } else {
          return null;
        }
      };
      X.displayName = "ChatActions/Suggestions/index/Suggestions";
      const G = X;
      const Q = "not-allowed-warning--NbfXlvyYL8lTX5fY";
      const Y = "chat-actions--LCC2MHxWtuYRo8AY";
      const K = "workflow-actions-container--Am_U9spUAeQUwu2m";
      const $ = "chatik.AIAssistantTyping.lockMessage";
      const J = ({
        scrollWrapperRef: e,
        fetchLinkPreviewsDisabled: t,
        onMessageTextChange: a,
        trls: i,
      }) => {
        const { isApplicant: n } = (0, v.Z)();
        const o = (0, c.v)(({ chatData: e }) => e.chatStates.writeMessageState);
        const l = (0, c.v)(({ editMessage: e }) =>
          Boolean(e == null ? undefined : e.id),
        );
        const r = o.allowed || l;
        const d = o.reason === V.R.AIAssistantTyping;
        const [u] = (0, h.Z)();
        const m = (0, W.Z)();
        const p = !u && m;
        const g = (0, s.useCallback)(
          (e) => {
            if (a != null) {
              a(e.target.value);
            }
          },
          [a],
        );
        if (r || d) {
          return (0, A.jsxs)("div", {
            className: Y,
            children: [
              p &&
                (0, A.jsx)(B, {
                  className: K,
                }),
              n && (0, A.jsx)(G, {}),
              (0, A.jsx)(x.x, {
                scrollWrapperRef: e,
                enablePreview: true,
                enableLinkPreview: !t,
                borderScrollValue: p ? 0 : 16,
                onChange: g,
                isSendingDisabled: d,
                sendingDisabledHint: i[$],
              }),
            ],
          });
        } else {
          return (0, A.jsx)(y.Z, {
            className: Q,
          });
        }
      };
      J.displayName = "components/ChatActions/index/ChatActions";
      const ee = (0, g.Z)(J);
      var te = a(41082);
      var ae = a(75790);
      var se = a(2840);
      var ie = a(61384);
      var ne = a(51531);
      var ce = a(20446);
      var oe = a(24087);
      var le = a(53416);
      var re = a(87884);
      var de = a(54075);
      var he = a(46192);
      const ue = (e) => e.webcall.serviceEnabled;
      var me = a(80426);
      var ve = a(58086);
      var pe = a(26825);
      var ge = a(69233);
      var xe = a.n(ge);
      var ye = a(33853);
      var je = a.n(ye);
      var fe = a(97286);
      var ke = a.n(fe);
      var we = a(53581);
      var Ne = a(71495);
      var Ie = a(69007);
      var _e = a(85322);
      const be = (e) => {
        const [t, a] = (0, s.useState)(false);
        const [i] = (0, s.useState)(_e.Y.getItem(e) === "1");
        return {
          isShown: t,
          show: (0, s.useCallback)(() => {
            if (!_e.Y.getItem(e)) {
              a(true);
              _e.Y.setItem(e, "1");
            }
          }, [e]),
          hide: (0, s.useCallback)(() => a(false), []),
          wasShown: i,
        };
      };
      const Se = "chatik_open_in_new_tab_tooltip_shown";
      const Ae = "chatik_was_show_resume_tooltip_shown";
      const Ce = "chatik_web_call_tooltip_shown";
      const He = "chatik.webcall.tooltip";
      const De = ({ trls: e }) => {
        const t = (0, c.v)(p.TC);
        const a = (0, c.v)(({ isSudo: e }) => e);
        const { isMobile: i } = (0, ie.G)();
        const n = (0, s.useRef)(null);
        const { isShown: o, show: l, hide: r, wasShown: d } = be(Ce);
        const h = (0, Ie.Z)();
        const { wasShown: u } = be(Ae);
        const { wasShown: m } = be(Se);
        const [v] = (0, s.useState)(!o);
        const g = (0, s.useRef)(null);
        const x = (0, c.v)(({ platform: e }) => e);
        (0, s.useEffect)(() => {
          if (!i && (!d || ((!!u || !h) && !!m && !d))) {
            setTimeout(() => l(), 300);
            setTimeout(() => {
              if (n.current && t) {
                ke()(n.current, {
                  resumeId: t.resumeId,
                  hhtmSource: "chat",
                });
              }
            }, 1000);
          }
        });
        if (t == null || !t.phone) {
          return null;
        }
        const y = e[He];
        const j = String(t.topicId);
        const f = () =>
          (0, A.jsx)("div", {
            ref: n,
            onClick: r,
            "data-qa": "webcall-tip-content",
            children: y,
          });
        return (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(w.ElementShownAnchor, {
              fn: xe(),
              resumeId: t.resumeId,
              topicId: j,
              hhtmSource: "chat",
              children: (0, A.jsx)(te.a, {
                ref: g,
                "data-qa": "chatik-call-btn",
                mode: "primary",
                style: "neutral",
                icon: b.PdJ,
                "aria-label": "call",
                onClick: () => {
                  if (!a) {
                    r();
                    je()({
                      resumeId: t.resumeId,
                      hhtmSource: "chat",
                      topicId: j,
                      chatPlatform: x,
                    });
                    if (t) {
                      (0, F.AW)("startCall", {
                        ...t,
                        phone: t.phone,
                      });
                    }
                  }
                },
              }),
            }),
            (0, A.jsx)(we.u, {
              visible: o,
              placement: "bottom-center",
              onClose: r,
              activatorRef: g,
              children: f(),
            }),
            v &&
              (0, A.jsx)(Ne.p, {
                placement: "bottom-center",
                activatorRef: g,
                children: f(),
              }),
          ],
        });
      };
      De.displayName = "DialogHeader/ActionButton/Call/CallButton";
      const Re = (0, g.Z)(De);
      var Te = a(99222);
      const Ze = ({ chatId: e }) => {
        const [t, a] = (0, s.useState)(false);
        const i = (0, s.useRef)(null);
        const n = () => {
          a(false);
        };
        return (0, A.jsxs)(A.Fragment, {
          children: [
            (0, A.jsx)(te.a, {
              ref: i,
              "data-qa": "chatik-chat-menu",
              mode: "primary",
              style: "neutral",
              icon: b.cRg,
              "aria-label": "menu",
              onClick: () => a((e) => !e),
            }),
            (0, A.jsx)(_.S, {
              visible: t,
              onClose: n,
              dropProps: {
                placement: "bottom-right",
                activatorRef: i,
                maxWidth: 388,
              },
              children: (0, A.jsx)(Te.Z, {
                close: n,
                chatId: e,
                view: "plain",
              }),
            }),
          ],
        });
      };
      Ze.displayName = "DialogHeader/ActionButton/Menu/Menu";
      const Ee = Ze;
      const Le = ({ chatId: e, kind: t }) =>
        t === "menu"
          ? (0, A.jsx)(Ee, {
              chatId: e,
            })
          : t === "call"
            ? (0, A.jsx)(Re, {})
            : null;
      Le.displayName = "DialogHeader/ActionButton/index/ActionButton";
      const Oe = (0, s.memo)(Le);
      var Pe = a(66802);
      var Be = a(59890);
      var We = a(17223);
      var Ve = a(31086);
      var ze = a.n(Ve);
      var Fe = a(65740);
      var Ue = a.n(Fe);
      const Me = "chatik.subheader.resume.show";
      const qe = "chatik.subheader.resume.tipText";
      const Xe = ({ trls: e }) => {
        const { isShown: t, show: a, hide: i } = be(Ae);
        const n = (0, c.v)((e) => e.isThirdColumnShown);
        const o = (0, r.Z)();
        const l = (0, s.useRef)(null);
        if (n) {
          return null;
        } else {
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)(I.z, {
                ref: l,
                size: "small",
                style: "accent",
                mode: "tertiary",
                onMouseEnter: a,
                onClick: () => {
                  (0, F.AW)("changeLayout", {
                    view: n ? "medium" : "full",
                  });
                  (n ? ze() : Ue())({
                    chatId: o,
                  });
                  i();
                },
                children: e[Me],
              }),
              (0, A.jsx)(we.u, {
                visible: t,
                placement: "left-center",
                activatorRef: l,
                children: (0, A.jsx)("div", {
                  onClick: i,
                  children: e[qe],
                }),
              }),
            ],
          });
        }
      };
      Xe.displayName = "DialogHeader/SubHeader/ResumeToggler/ResumeToggler";
      const Ge = (0, g.Z)(Xe);
      const Qe = "sub-header--PRQ2T3w0dmg7bI0A";
      const Ye = "intention--X56lAr34sYMPHj_X";
      const Ke = "intention-wrapper--pTek2dpFD6YinvSY";
      const $e = "content--mWTZ1a_CQ_AEmXQt";
      const Je = "link-actions--eu107wfoMAVHg22l";
      const et = "chatik.vacancyError.notAvailavle";
      const tt = "chatik.vacancyLink.cv";
      const at = "chatik.vacancyLink.vacancy";
      const st = "chatik.vacancyLink.open";
      const it = "chatik.resumeLink.open";
      const nt = ({ trls: e }) => {
        const t = (0, c.v)(k.A1);
        const a = (0, c.v)(k.km);
        const s = (0, c.v)(k.W4);
        const i = (0, c.v)(p.AV);
        const n = (0, c.v)(p.sW);
        const o = (0, c.v)(p.BK);
        const l = (0, Ie.Z)();
        const { isWidgetIframe: r } = (0, de.Z)();
        const { isApplicant: d, isEmployer: h } = (0, v.Z)();
        const u = (0, Be.Z)();
        const m = (d || n) && t;
        const g = r && l && (a == null ? undefined : a.hash) && !s;
        const x = () =>
          (0, A.jsxs)("div", {
            className: Je,
            children: [
              g && (0, A.jsx)(Ge, {}),
              (m || (u == null ? undefined : u.href)) &&
                (0, A.jsx)(I.z, {
                  Element: "a",
                  "data-qa": m ? "chatik-header-vacancy-link" : undefined,
                  href: m
                    ? (0, We.ni)(t.links.desktop)
                    : u == null
                      ? undefined
                      : u.href,
                  target: "_blank",
                  size: "small",
                  style: "accent",
                  mode: "tertiary",
                  icon: (0, A.jsx)(b.A$e, {}),
                  onClick: u == null ? undefined : u.onClick,
                  children: e[m ? st : it],
                }),
            ],
          });
        return (0, A.jsx)("div", {
          className: Qe,
          children:
            o || (i && h)
              ? (0, A.jsxs)("div", {
                  className: $e,
                  children: [
                    (0, A.jsxs)("span", {
                      className: Ke,
                      children: [
                        (0, A.jsx)("span", {
                          className: Ye,
                          children: e[tt],
                        }),
                        u == null ? undefined : u.title,
                      ],
                    }),
                    x(),
                  ],
                })
              : t
                ? (0, A.jsxs)("div", {
                    className: $e,
                    children: [
                      (0, A.jsxs)("span", {
                        className: Ke,
                        children: [
                          (0, A.jsx)("span", {
                            className: Ye,
                            children: m ? e[at] : e[tt],
                          }),
                          m ? t.name : u == null ? undefined : u.title,
                        ],
                      }),
                      x(),
                    ],
                  })
                : (0, A.jsx)(Pe.x, {
                    style: "tertiary",
                    children: e[et],
                  }),
        });
      };
      nt.displayName = "DialogHeader/SubHeader/index/SubHeader";
      const ct = (0, g.Z)(nt);
      const ot = "container--j0H8ccydF6w3zFUY";
      const lt = "user-details--ljJURDVowcIaWt3Y";
      const rt = "title--WcXHusR6Z3Ilz3_5";
      const dt = "participant-avatar--CVOstOKLxjwQN_fV";
      const ht = "action-buttons--KGOVrcGHqVA7Nfd0";
      const ut = ({ isLoading: e }) => {
        const t = (0, s.useRef)(null);
        const { chat: a, display: i } = (0, oe.Z)(e);
        const n = (0, c.v)((e) => e.shouldCloseOnBack);
        const o = (0, c.v)(({ chatData: e }) => e.chat.ownerViolatesRules);
        const l = (0, c.v)(ue);
        const r = (0, c.v)(p.AV);
        const d = (0, c.v)(p.sW);
        const h = (0, c.v)(p.BK);
        const u = (0, c.v)(k.km);
        const { isMobile: m } = (0, ie.G)();
        const { isApplicant: g, isEmployer: x, userType: y } = (0, v.Z)();
        const j = (0, N.usePush)();
        const { isParentGtXS: f, isParentDesktopDisplayType: I } = (0, de.Z)();
        const _ = (0, he.Xl)();
        const { onlineUntilTime: S } = a;
        const C = g ? i.subtitle : i.title;
        const H = a.ownerViolatesRules || !C;
        const D = a.type === "SUPPORT";
        const R = a.type === "NEGOTIATION";
        const T = x && I && f && l && _;
        const { avatarImage: Z } = (0, re.Z)({
          isUnknownUser: H,
          image: i.icon,
        });
        const E = (0, s.useCallback)(() => {
          if (n && F.vK) {
            w.default.sendHHEventButtonClick("chat_close", {
              type: "CROSS_CLICK",
            });
            (0, F.AW)("close");
            return;
          }
          j("/chat");
        }, [n, j]);
        const L = () =>
          !H &&
          !D &&
          (a.subType === "GENAI" || (!!S && (0, ve.Dp)(S) === ve.$r.ONLINE));
        const O =
          !e && !a.ownerViolatesRules && (R || d || (h && u) || (r && x));
        return (0, A.jsxs)("div", {
          ref: t,
          children: [
            (0, A.jsx)(le.Z, {
              className: ot,
              firstSlot: (0, A.jsxs)("div", {
                className: dt,
                children: [
                  m &&
                    (0, A.jsx)(te.a, {
                      icon: b.ee,
                      mode: "primary",
                      style: "neutral",
                      "aria-label": "back to chats",
                      "data-qa": "chatik-back-to-chats-button",
                      onClick: E,
                    }),
                  (0, A.jsx)(ne.Z, {
                    size: 40,
                    shapeCircle: (0, me.a)(y, a.type, a.subType) === "circle",
                    "aria-label": C,
                    letters: (0, pe.$)(
                      (C == null ? undefined : C.toUpperCase()) ?? "",
                    ),
                    isBlocked: o,
                    isEmployer: x,
                    avatarImage: Z,
                    online: L(),
                  }),
                ],
              }),
              lastSlot: (0, A.jsxs)("div", {
                className: ht,
                children: [
                  T &&
                    !e &&
                    (0, A.jsx)(Oe, {
                      kind: "call",
                      chatId: a.id,
                    }),
                  !e &&
                    (0, A.jsx)(Oe, {
                      chatId: a.id,
                      kind: "menu",
                    }),
                ],
              }),
              children: (0, A.jsx)("div", {
                className: lt,
                children: (0, A.jsxs)("div", {
                  "data-qa": "participant-info-details",
                  children: [
                    (0, A.jsx)("div", {
                      className: rt,
                      children: (R || r || d) && g ? i.subtitle : i.title,
                    }),
                    (0, A.jsx)(ce.Y, {
                      online: L(),
                      loading: e,
                    }),
                  ],
                }),
              }),
            }),
            O
              ? (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsx)(ct, {}),
                    (0, A.jsx)(ae.X, {
                      default: 8,
                    }),
                  ],
                })
              : (0, A.jsx)(se.i, {
                  mode: "horizontal",
                }),
          ],
        });
      };
      ut.displayName = "components/DialogHeader/index/DialogHeader";
      const mt = ut;
      var vt = a(21438);
      var pt = a(61477);
      var gt = a(34343);
      var xt = a(86482);
      var yt = a(92705);
      const jt = "chatik.ownerViolatesRules.title";
      const ft = "chatik.ownerViolatesRules.description";
      const kt = ({ trls: e }) => {
        const { isXS: t } = (0, ie.G)();
        const a = (0, pt.l)(xt);
        return (0, A.jsx)("div", {
          className: yt.Z.dialogSplashScreen,
          children: (0, A.jsx)(gt.V, {
            maxWidth: 412,
            image: a,
            imageHeight: t ? 163 : 288,
            title: e[jt],
            description: e[ft],
          }),
        });
      };
      kt.displayName = "Chat/components/OwnerViolatesRules/OwnerViolatesRules";
      const wt = (0, g.Z)(kt);
      var Nt = a(45150);
      var It = a(4305);
      var _t = a(66046);
      var bt = a(49727);
      var St = a(68390);
      const At = "resume--pOO19Nrh88kJC8NU";
      const Ct = "iframe-container--xn6AxXWA90gJGOyt";
      const Ht = "loader--XdD0PT7bZ9MKTIBZ";
      const Dt = "loader-title--e3xhwyhBaA9akhrZ";
      const Rt = "loader-text--ReM8EkEHooQU7Q5U";
      const Tt = "resume-header--yA0PEJWlFQEsXJz3";
      const Zt = "resume-title--q7WbbSVOpgo7amHK";
      const Et = "resume-footer--LP7gPPICFuMsK7lA";
      const Lt = (0, n.makeSetStoreField)("isThirdColumnShown");
      const Ot = "chatik.resume.title.magritte";
      const Pt = "chatik.resume.loader.title";
      const Bt = "chatik.resume.loader.text";
      const Wt = ({ resumeHash: e, isLoading: t }) => {
        const a = (0, i.useDispatch)();
        const n = (0, bt.T)();
        const o = (0, r.Z)();
        const { isWidgetIframe: l } = (0, de.Z)();
        const d = (0, W.Z)();
        const h = (0, c.v)((e) => e.siteRoot);
        const u = (0, c.v)(k.Fq);
        (0, s.useEffect)(() => {
          a(Lt(true));
          return () => {
            a(Lt(false));
          };
        }, [a]);
        (0, s.useEffect)(() => {
          (0, F.AW)("uxfbEvent", {
            name: "chatik_resume_shown",
          });
        }, []);
        const m = (0, We.LB)({
          siteRoot: h,
          resumeHash: e,
          userType: St.Z.Employer,
          negotiationTopic: u,
          light: true,
          hhtmFromLabel: "chat_inside",
        });
        const v = (0, A.jsxs)("div", {
          className: Ht,
          children: [
            (0, A.jsx)(Nt.a, {
              size: 24,
            }),
            (0, A.jsx)("div", {
              className: Dt,
              children: n[Pt],
            }),
            (0, A.jsx)("div", {
              className: Rt,
              children: n[Bt],
            }),
          ],
        });
        return (0, A.jsxs)("div", {
          className: At,
          children: [
            (0, A.jsxs)("div", {
              className: Tt,
              children: [
                l &&
                  (0, A.jsx)(te.a, {
                    mode: "primary",
                    style: "neutral",
                    icon: b.ee,
                    onClick: () => {
                      (0, F.AW)("changeLayout", {
                        view: "medium",
                      });
                      Ue()({
                        chatId: o,
                      });
                    },
                  }),
                (0, A.jsx)("div", {
                  className: Zt,
                  children: (0, A.jsx)(It.D, {
                    Element: "h3",
                    size: "medium",
                    children: n[Ot],
                  }),
                }),
              ],
            }),
            t
              ? v
              : (0, A.jsx)("div", {
                  className: Ct,
                  children: (0, A.jsx)(_t.Z, {
                    src: m,
                    loader: v,
                  }),
                }),
            d &&
              (0, A.jsx)("div", {
                className: Et,
                children: (0, A.jsx)(B, {
                  size: "medium",
                }),
              }),
          ],
        });
      };
      Wt.displayName = "components/ResumeContainer/index/Resume";
      const Vt = (0, s.memo)(Wt);
      var zt = a(68222);
      var Ft = a(10900);
      var Ut = a(21440);
      const Mt = (e, t) =>
        Ut.Z.post(
          "/chatik/api/get_or_create_bot_dialog",
          {
            type: e,
          },
          {
            params: t,
          },
        )
          .then(({ data: e }) => {
            if (typeof e != "object" || !e.chatId) {
              const t = new Error("Invalid bot chat id received");
              Ft.c.log("out", t, {
                data: e,
              });
              return null;
            }
            return e;
          })
          .catch((e) => {
            Ft.c.log("out", e);
            return null;
          });
      var qt = a(39248);
      const Xt = (e) => {
        const t = new URLSearchParams(location.search);
        if ((0, qt.Z)() === St.Z.Anonymous) {
          t.append("nor", "1");
        }
        let a = t.toString();
        a = a ? `?${a}` : "";
        return `/chat/${e}${a}`;
      };
      const Gt = () => {
        const e = (0, N.useReplace)();
        const t = (0, zt.useLocation)();
        const { chatId: a } = (0, zt.useParams)();
        (0, s.useEffect)(() => {
          if (!/^\d+$/.test(a)) {
            Mt(a, t.state).then((t) => {
              if (t != null && t.chatId) {
                e(Xt(t.chatId));
              }
            });
          }
        }, [a]);
      };
      const Qt = ({ isLoading: e, chatId: t }) => {
        const a = (0, c.v)(({ chatData: e }) => e.chat);
        const s = (0, c.v)(({ chats: e }) =>
          e.chats.items.find(({ id: e }) => e === t),
        );
        return (e && s ? s : a).type;
      };
      var Yt = a(73797);
      var Kt = a(40588);
      var $t = a(76679);
      var Jt = a(67833);
      const ea = () => {
        const e = (0, Kt.Z)();
        const t = (0, r.Z)();
        const a = (0, c.v)((e) => e.activeState);
        const i = (0, c.v)(({ chatData: e }) => e.chat);
        (0, s.useEffect)(() => {
          if (!a || t !== i.id) {
            return;
          }
          const s = (0, $t.Z)({
            routeName: Yt.x.Chat,
            state: e.getState(),
            chatId: t,
          });
          (0, Jt.Z)(s);
        }, [a, e, t, i.id]);
      };
      const ta = (0, n.makeSetStoreField)("supportLocation");
      const aa = () => {
        const e = (0, i.useDispatch)();
        const t = (0, c.v)(({ chatData: e }) => e.forceReplacedId);
        const a = (0, c.v)(p.AV);
        const n = (0, c.v)((e) => e.isSudo);
        const g = (0, r.Z)();
        const x = (0, s.useRef)(null);
        const {
          chat: y,
          chatStates: j,
          error: f,
        } = (0, c.v)(({ chatData: e }) => e);
        const k = (0, c.v)((e) => e.activeState);
        const w = (0, c.v)((e) => e.router.location.query.hhtmFromLabel);
        const N = (0, c.v)(({ editMessage: e }) =>
          Boolean(e == null ? undefined : e.id),
        );
        const { renderOverlayScreen: I, handleDrag: _ } = (0, d.Z)();
        const [b, S] = (0, h.Z)();
        const { isApplicant: C, isEmployer: H, isAnonymous: D } = (0, v.Z)();
        const R = g !== y.id;
        const T = Qt({
          isLoading: R,
          chatId: g,
        });
        const Z = !N && !n && (C || H || D);
        ea();
        (0, u.Z)();
        Gt();
        const E = (0, m.M)();
        (0, s.useEffect)(() => {
          if (k && T === "SUPPORT") {
            e(
              ta(
                w ||
                  window.globalServiceVars.chatik.analyticsParams
                    .hhtmFromLabel ||
                  "chat_list",
              ),
            );
          }
        }, [k, e, T, w]);
        if ((f == null ? undefined : f.code) === "NOT_FOUND") {
          return (0, A.jsx)("div", {
            className: yt.Z.dialogSplashScreen,
            children: (0, A.jsx)(l.Z, {}),
          });
        }
        if (y.ownerViolatesRules) {
          return (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)(mt, {
                isLoading: R,
              }),
              (0, A.jsx)(wt, {}),
            ],
          });
        }
        const L = j.sendFileState.allowed;
        const O = T === "SUPPORT";
        const P = T === "NEGOTIATION" || a;
        return (0, A.jsxs)("div", {
          className: yt.Z.chat,
          onDragEnter: L ? _ : undefined,
          children: [
            (0, A.jsxs)("div", {
              className: yt.Z.layout,
              children: [
                (0, A.jsxs)("div", {
                  className: yt.Z.messages,
                  children: [
                    (0, A.jsx)(mt, {
                      isLoading: R,
                    }),
                    R
                      ? (0, A.jsx)(vt.Z, {})
                      : (0, A.jsxs)(A.Fragment, {
                          children: [
                            (0, A.jsx)(
                              o.j,
                              {
                                disableLinkPreviews: O,
                                scrollWrapperRef: x,
                              },
                              t,
                            ),
                            (0, A.jsx)(ee, {
                              scrollWrapperRef: x,
                              fetchLinkPreviewsDisabled: O,
                              onMessageTextChange: Z ? E : undefined,
                            }),
                          ],
                        }),
                  ],
                }),
                P &&
                  b &&
                  (0, A.jsx)(Vt, {
                    resumeHash: S,
                    isLoading: R,
                  }),
              ],
            }),
            I(),
          ],
        });
      };
      aa.displayName = "src/pages/Chat/Chat";
      const sa = aa;
    },
  },
]);
//# sourceMappingURL=ChatPage.b48780152ed2fef8.js.map
