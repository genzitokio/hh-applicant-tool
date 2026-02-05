"use strict";

(globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__chatik_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["5005"],
  {
    92705: function (e, t, a) {
      a.d(t, {
        Z: () => n,
      });
      const n = {
        chat: "chat--l5SXkOLg9k0Rcqrn",
        layout: "layout--xqLzrsFO6RQmiUU1",
        header: "header--KiaVnR6oVZEmKgGf",
        messages: "messages--fgsPq_KrKx4X2fty",
        "dialog-splash-screen": "dialog-splash-screen--qUEvWDR5uAP56kjU",
        dialogSplashScreen: "dialog-splash-screen--qUEvWDR5uAP56kjU",
        "no-chat-notification-wrapper":
          "no-chat-notification-wrapper--tEKWJdOTNgsVkLrU",
        noChatNotificationWrapper:
          "no-chat-notification-wrapper--tEKWJdOTNgsVkLrU",
        "back-to-chat-list-link": "back-to-chat-list-link--ttVt4XKAuWIfYsu5",
        backToChatListLink: "back-to-chat-list-link--ttVt4XKAuWIfYsu5",
        description: "description--x6nzkuxUWZAmjIEr",
      };
    },
    66999: function (e, t, a) {
      e.exports = a.p + "static/images/no-chats__min_8499a702da9cad93.webp";
    },
    86482: function (e, t, a) {
      e.exports = a.p + "static/images/not-found__min_05bc3100d5b660f5.webp";
    },
    29798: function (e, t, a) {
      a.d(t, {
        Z: () => cl,
      });
      var n = a(24488);
      var s = a(55901);
      var i = a(3891);
      var r = a(84434);
      var o = a(30329);
      var l = a(48867);
      var c = a(36047);
      var d = a(23073);
      var u = a(94931);
      var h = a(25833);
      const p = () => {
        const e = (0, l.v)(({ features: e }) => e[h.A.SentryLogging]);
        return (0, u.Z)({
          onDidCatch: (t, a) => {
            if (e) {
              d.withScope((e) => {
                e.setTag("origin", "componentDidCatch");
                e.setExtras(a);
                d.captureException(t);
              });
            }
          },
        });
      };
      var m = a(21440);
      const v = (
        e = {
          filterUnread: false,
          filterHasTextMessage: false,
        },
        t = {},
      ) =>
        m.Z.get("/chatik/api/filter_clusters", {
          params: e,
          ...t,
          signal: t.signal,
        }).then(({ data: e }) => e);
      const g = (0, i.createContext)({
        filtersClustersGetter: {
          get: () => [[], []],
        },
        getActualClusters: () => new Promise((e) => e([[], []])),
      });
      const y = (e, t) => {
        let a;
        let n = false;
        e.then((e) => {
          n = true;
          a = t(e);
        }).catch(console.error);
        return {
          get: () => {
            if (!n) {
              throw e;
            }
            return a;
          },
          promise: e,
        };
      };
      var f = a(4201);
      let w;
      const x = (0, o.makeSetStoreField)("shouldReloadFiltersClusters");
      const b = ({ children: e }) => {
        const t = (0, r.useDispatch)();
        const a = (0, l.v)((e) => e.showOnlyUnread);
        const n = (0, l.v)((e) => e.showOnlyWithTextMessages);
        const s = (0, l.v)((e) => e.shouldReloadFiltersClusters);
        w =
          w ||
          v(
            {
              filterUnread: a,
              filterHasTextMessage: n,
            },
            {
              retry: true,
            },
          );
        const o = (0, i.useRef)();
        const [c, d] = (0, i.useState)(
          y(w, (e) => {
            return [e.vacanciesClusters ?? [], e.employerStatesClusters ?? []];
          }),
        );
        const u = (0, i.useCallback)(() => {
          var e;
          if ((e = o.current) !== null && e !== undefined) {
            e.abort();
          }
          o.current = new AbortController();
          const t = y(
            v(undefined, {
              retry: true,
              signal: o.current.signal,
            }),
            (e) => {
              return [
                e.vacanciesClusters ?? [],
                e.employerStatesClusters ?? [],
              ];
            },
          );
          d(t);
          return t;
        }, []);
        const h = (0, i.useCallback)(async () => {
          const e = s ? u() : c;
          try {
            return e.get();
          } catch {
            await e.promise;
            return e.get();
          } finally {
            t(x(false));
          }
        }, [t, u, c, s]);
        return (0, f.jsx)(g.Provider, {
          value: {
            filtersClustersGetter: c,
            getActualClusters: h,
          },
          children: e,
        });
      };
      b.displayName =
        "components/FiltersClusters/index/FiltersClustersProvider";
      const k = () => (0, i.useContext)(g);
      var C = a(52872);
      var I = a(8210);
      let S = 0;
      const E = ({ children: e }) => {
        const [t, a] = (0, i.useState)([]);
        const n = (0, i.useMemo)(
          () => ({
            addNotification: (e) => {
              a((t) => {
                S += 1;
                return [
                  ...t,
                  {
                    ...e,
                    id: S,
                  },
                ];
              });
            },
          }),
          [a],
        );
        return (0, f.jsxs)(I.Z.Provider, {
          value: n,
          children: [
            t.map(({ id: e, ...t }) =>
              (0, f.jsx)(
                C.A,
                {
                  ...t,
                  onClose: () => a((t) => t.filter((t) => t.id !== e)),
                },
                `notify-${e}`,
              ),
            ),
            e,
          ],
        });
      };
      E.displayName =
        "components/Snackbars/SnackbarManagerProvider/SnackbarManagerProvider";
      const T = E;
      const _ = ({ children: e }) => {
        const { ErrorBoundary: t } = p();
        return (0, f.jsx)(t, {
          children: (0, f.jsx)(b, {
            children: (0, f.jsx)(T, {
              children: e,
            }),
          }),
        });
      };
      _.displayName = "src/app/AppContextWrapper/AppContextWrapper";
      var j = a(73797);
      var N = a(63116);
      var A = a.n(N);
      var R = a(61384);
      var M = a(45150);
      var D = a(18839);
      var P = a.n(D);
      var Z = a(39202);
      var L = a.n(Z);
      var F = a(88854);
      var U = a.n(F);
      var O = a(50873);
      var B = a.n(O);
      let H = (function (e) {
        e.ChatList = "chatList";
        e.Search = "search";
        e.Filters = "filters";
        return e;
      })({});
      const q = (0, o.autoGeneratedReducer)(H.ChatList);
      var V = a(3216);
      const W = (0, o.makeSetStoreField)("selectedEmployerStatesClusters");
      const G = (0, o.makeSetStoreField)("selectedVacanciesClusters");
      const z = (0, o.makeSetStoreField)("showOnlyUnread");
      const $ = (0, o.makeSetStoreField)("showOnlyWithTextMessages");
      const K = (0, o.makeSetStoreField)("navigationView");
      const Y = () => {
        const e = (0, l.v)((e) => e.selectedEmployerStatesClusters);
        const t = (0, l.v)((e) => e.selectedVacanciesClusters);
        const a = (0, l.v)((e) => e.showOnlyUnread);
        const n = (0, l.v)((e) => e.showOnlyWithTextMessages);
        const s = (0, r.useDispatch)();
        const { getActualClusters: i } = k();
        const o = (0, l.v)((e) => e.clusterFiltersEnabled);
        const c = (0, l.v)((e) => e.navigationView === "filters");
        const { isApplicant: d } = (0, V.Z)();
        return {
          totalFiltersSelected: e.length + t.length + (a ? 1 : 0) + (n ? 1 : 0),
          areFiltersEnabled: o,
          areInlineFilters: d,
          areFiltersVisible: c,
          handleFiltersToggle: () => {
            if (c) {
              U()();
            } else {
              i();
              B()();
            }
            s(K(c ? H.ChatList : H.Filters));
          },
          handleFiltersApply: () => {
            P()();
            s(K(H.ChatList));
          },
          handleFiltersReset: () => {
            s([W([]), G([]), z(false), $(false)]);
            L()();
          },
        };
      };
      var Q = a(90634);
      const X = "filters";
      const J = () => {
        const e = (0, l.v)((e) => e.hhid);
        const t = (0, l.v)((e) => e.selectedEmployerStatesClusters);
        const a = (0, l.v)((e) => e.selectedVacanciesClusters);
        const n = (0, l.v)((e) => e.showOnlyUnread);
        const s = (0, l.v)((e) => e.showOnlyWithTextMessages);
        const { areFiltersVisible: r } = Y();
        const o = (0, i.useMemo)(
          () => ({
            showFilters: r,
            employerStates: t,
            vacancyIds: a,
            filterUnread: n,
            filterHasTextMessage: s,
          }),
          [t, a, r, n, s],
        );
        (0, i.useEffect)(() => {
          if (!e) {
            return;
          }
          const t = JSON.stringify(o);
          const a = `${X}${e}`;
          Q.L.set(a, t, 168);
        }, [o, e]);
      };
      var ee = a(93873);
      var te = a(66174);
      var ae = a(68222);
      const ne = (e) => {
        let a = null;
        const [n, s] =
          Object.entries(j.n).find(([, t]) => {
            a = Array.isArray(t)
              ? t.reduce((t, n) => {
                  var s;
                  a = (0, ae.matchPath)(e, n);
                  if ((s = a) !== null && s !== undefined && s.isExact) {
                    t = a;
                  }
                  return t;
                }, null)
              : (0, ae.matchPath)(e, t);
            return Boolean(a?.isExact);
          }) ?? [];
        return {
          name: n,
          path: s,
          match: a,
        };
      };
      const se = () => {
        const { pathname: e } = (0, ae.useLocation)();
        return (0, i.useMemo)(() => ne(e), [e]);
      };
      const ie = () => {
        const e = (0, l.v)((e) => e.router.location);
        const { match: t } = ne(e == null ? undefined : e.pathname);
        return Number(t == null ? undefined : t.params.chatId);
      };
      var re = a(90571);
      var oe = a(83355);
      var le = a(58342);
      var ce = a(51531);
      var de = a(89156);
      var ue = a(3585);
      const he = " ";
      const pe = "date.today.lowercase";
      const me = "date.yesterday.lowercase";
      const ve = "mobile.date.at";
      const ge = {
        0: "calendar.genitive.month.0",
        1: "calendar.genitive.month.1",
        2: "calendar.genitive.month.2",
        3: "calendar.genitive.month.3",
        4: "calendar.genitive.month.4",
        5: "calendar.genitive.month.5",
        6: "calendar.genitive.month.6",
        7: "calendar.genitive.month.7",
        8: "calendar.genitive.month.8",
        9: "calendar.genitive.month.9",
        10: "calendar.genitive.month.10",
        11: "calendar.genitive.month.11",
      };
      const ye = {
        0: "calendar.day.of.the.week.6",
        1: "calendar.day.of.the.week.0",
        2: "calendar.day.of.the.week.1",
        3: "calendar.day.of.the.week.2",
        4: "calendar.day.of.the.week.3",
        5: "calendar.day.of.the.week.4",
        6: "calendar.day.of.the.week.5",
      };
      const fe = {
        0: "calendar.weekday.short.6",
        1: "calendar.weekday.short.0",
        2: "calendar.weekday.short.1",
        3: "calendar.weekday.short.2",
        4: "calendar.weekday.short.3",
        5: "calendar.weekday.short.4",
        6: "calendar.weekday.short.5",
      };
      let we = (function (e) {
        e.Always = "Always";
        e.Never = "Never";
        e.NotCurrent = "NotCurrent";
        return e;
      })({});
      let xe = (function (e) {
        e.TodayOnly = "TodayOnly";
        e.Never = "Never";
        e.WithDate = "WithDate";
        return e;
      })({});
      const be = ({
        date: e,
        timeOnly: t,
        showTime: a = xe.Never,
        showYear: n = we.NotCurrent,
        trls: s,
        preposition: i,
        approximate: r,
        short: o,
      }) => {
        if (!e) {
          return null;
        }
        const l = new Date();
        const c = new Date(e);
        if (t) {
          return (0, f.jsx)(f.Fragment, {
            children: (0, ue.Z)(c, "HH:mm"),
          });
        }
        if (r && Math.abs(l.getTime() - c.getTime()) < 172800000) {
          if (l.getDate() === c.getDate()) {
            return (0, f.jsx)(f.Fragment, {
              children: a === xe.TodayOnly ? (0, ue.Z)(c, "HH:mm") : s[pe],
            });
          }
          if (l.getDate() - 1 === c.getDate()) {
            return (0, f.jsx)(f.Fragment, {
              children: s[me],
            });
          }
        }
        if (r && Math.abs(l.getTime() - c.getTime()) < 691200000) {
          return (0, f.jsx)(f.Fragment, {
            children: o ? s[fe[c.getDay()]] : s[ye[c.getDay()]],
          });
        }
        const d =
          n === we.Always ||
          (n === we.NotCurrent && c.getFullYear() !== new Date().getFullYear());
        let u;
        if (o) {
          u = d ? (0, ue.Z)(c, "dd.MM.yy") : (0, ue.Z)(c, "dd.MM");
        } else {
          u = `${c.getDate()}${he}${s[ge[c.getMonth()]]}`;
          if (d) {
            u += `${he}${c.getFullYear()}`;
          }
        }
        if (a === xe.WithDate) {
          if (i) {
            u += `${he}${s[ve]}`;
          }
          u += `${he}${(0, ue.Z)(c, "HH:mm")}`;
        }
        return (0, f.jsx)(f.Fragment, {
          children: u,
        });
      };
      be.displayName = "components/HumanDate/index/HumanDate";
      const ke = (0, de.Z)(be);
      var Ce = a(50361);
      var Ie = a(87884);
      var Se = a(80684);
      var Ee = a(86071);
      var Te = a(2183);
      var _e = a(68390);
      var je = a(80426);
      var Ne = a(58086);
      var Ae = a(26825);
      var Re = a(64452);
      var Me = a(89824);
      var De = a(40588);
      var Pe = a(5791);
      var Ze = a(47400);
      var Le = a(16347);
      var Fe = a(36258);
      var Ue = a(44036);
      var Oe = a(89016);
      var Be = a(68895);
      const He = [
        Le.J.Discard,
        Le.H.DiscardByEmployer,
        Le.H.DiscardByApplicant,
        Le.H.DiscardNoInteraction,
        Le.H.DiscardToOtherVacancy,
        Le.H.DiscardVacancyClosed,
      ];
      const qe = (e) => {
        const t = e.applicantState || e.employerState;
        if (t) {
          if (He.includes(t)) {
            return "red";
          } else {
            return "green";
          }
        } else {
          return "secondary";
        }
      };
      const Ve = {
        "last-message": "last-message--dsXmP3MfuVY6h1Tm",
        lastMessage: "last-message--dsXmP3MfuVY6h1Tm",
        "last-message-color_secondary":
          "last-message-color_secondary--nEGZ5QotLjAJqeo3",
        lastMessageColorSecondary:
          "last-message-color_secondary--nEGZ5QotLjAJqeo3",
        "last-message-color_contrast-secondary":
          "last-message-color_contrast-secondary--DZlwpzk1R6cZcx4x",
        lastMessageColorContrastSecondary:
          "last-message-color_contrast-secondary--DZlwpzk1R6cZcx4x",
        "last-message-color_red": "last-message-color_red--zo6vi8nTScLJGPgw",
        lastMessageColorRed: "last-message-color_red--zo6vi8nTScLJGPgw",
        "last-message-color_green":
          "last-message-color_green--PboT0g0OdWQR2piP",
        lastMessageColorGreen: "last-message-color_green--PboT0g0OdWQR2piP",
      };
      const We = {
        messageDraft: "chatik.chatItem.savedDraft",
        blocked: "chatik.ownerViolatesRules.chatItemLabel",
        address: "chatik.messsages.address",
        imageAttachment: "chatik.messages.imageAttachment",
        file: {
          one: "chatik.fileUpload.file.one",
          some: "chatik.fileUpload.file.some",
          many: "chatik.fileUpload.file.many",
        },
        participantJoined: "chatik.message.participantJoined",
        participantLeft: "chatik.message.participantLeft",
        applicantWorkflowTransitions: {
          [Le.J.Discard]: "chatik.chatItem.workflowTransition.discard",
          [Le.J.Invitation]: "chatik.chatItem.workflowTransition.invitation",
          [Le.J.Response]: "chatik.chatItem.workflowTransition.response",
          [Le.J.Interview]: "chatik.chatItem.workflowTransition.interview",
          [Le.J.Hired]: "chatik.chatItem.workflowTransition.hired",
        },
        employerWorkflowTransitions: {
          [Le.H.DiscardByEmployer]:
            "chatik.workflowTransition.discardByEmployer.softForm",
          [Le.H.DiscardByApplicant]:
            "chatik.workflowTransition.discardByApplicant",
          [Le.H.DiscardNoInteraction]:
            "chatik.workflowTransition.discardNoInteraction",
          [Le.H.DiscardToOtherVacancy]:
            "chatik.workflowTransition.discardToOtherVacancy",
          [Le.H.DiscardVacancyClosed]:
            "chatik.workflowTransition.discardVacancyClosed",
          [Le.H.PhoneInterview]: "chatik.workflowTransition.phoneInterview",
          [Le.H.Interview]: "chatik.workflowTransition.interview",
          [Le.H.Response]: "chatik.chatItem.workflowTransition.response",
          [Le.H.Assesment]: "chatik.workflowTransition.assesment",
          [Le.H.Consider]: "chatik.workflowTransition.consider",
          [Le.H.Hired]: "chatik.workflowTransition.hired",
          [Le.H.Offer]: "chatik.workflowTransition.offer",
        },
      };
      const Ge = (e) =>
        e.applicantState
          ? We.applicantWorkflowTransitions[e.applicantState]
          : e.employerState
            ? We.employerWorkflowTransitions[e.employerState]
            : "";
      const ze = ({ message: e, isBlocked: t, isContrast: a, trls: n }) => {
        const s = (0, De.Z)();
        const i = e.chatId;
        const r = (0, l.v)(({ messageDrafts: e }) => {
          return e[i]?.text;
        });
        const o = (0, l.v)((0, Ue.S3)(i));
        const { content: c, color: d } = (() => {
          if (t) {
            return {
              content: n[We.blocked],
              color: "red",
            };
          }
          if (o != null && o.length) {
            return {
              content: (0, Re.WU)(n[We.messageDraft], {
                "{0}": `${o.length} ${(0, Oe.Z)(o.length, [n[We.file.one], n[We.file.some], n[We.file.many]])}`,
              }),
              color: "secondary",
            };
          }
          if (r) {
            return {
              content: (0, Re.WU)(n[We.messageDraft], {
                "{0}": (0, Me.Lx)(r),
              }),
              color: "secondary",
            };
          }
          const { workflowTransition: a, files: i } = e;
          if (a) {
            return {
              content: n[Ge(a)],
              color: qe(a),
            };
          }
          if (i != null && i.length) {
            var l;
            const e = i[0];
            return {
              content:
                (0, Be.t)(e.content_type) &&
                (l = e.preview) !== null &&
                l !== undefined &&
                l.url
                  ? n[We.imageAttachment]
                  : i[0].title,
              color: "secondary",
            };
          }
          if ((0, Pe.jH)(Fe.U.Address, e)) {
            const t = (0, Ze.Eo)(s.getState(), (0, Pe.fg)(Fe.U.Address, e));
            return {
              content: (t == null ? undefined : t.displayName) || n[We.address],
              color: "secondary",
            };
          }
          if ([Ee.u.ParticipantLeft, Ee.u.ParticipantJoined].includes(e.type)) {
            const t =
              e.type === Ee.u.ParticipantLeft
                ? We.participantLeft
                : We.participantJoined;
            return {
              content: (0, Re.WU)(n[t], {
                "{0}": e.participantDisplay.name,
              }),
              color: "secondary",
            };
          }
          return {
            content: (0, Me.Lx)(e.text || ""),
            color: "secondary",
          };
        })();
        const u = a ? "contrast-secondary" : d;
        return (0, f.jsx)("div", {
          className: A()(Ve.lastMessage, {
            [Ve[`last-message-color_${u}`]]: true,
          }),
          children: c,
        });
      };
      ze.displayName = "ChatCell/LastMessage/index/LastMessage";
      const $e = (0, de.Z)(ze);
      const Ke = (e, t) => {
        if (!e) {
          return;
        }
        if (!!t && e.id <= t) {
          return Ee.t.Read;
        } else {
          return Ee.t.Delivered;
        }
      };
      const Ye = "chat-cell--QlKEQgGE9JcVWX9c";
      const Qe = "content--SuZrq9A3WEcNQh4P";
      const Xe = "chat-cell_full--f_fQ82wU1Q6XsFy4";
      const Je = "chat-cell_compact--wcUh5MLpwDI7CKoT";
      const et = "chat-cell_selected--Zjgj2fBGk2woUrIt";
      const tt = "title--jaEO2q2if2IOwiyO";
      const at = "subtitle--PUOzfscuTocRGpo3";
      const nt = "time--xs3AP7eA5xkHP7ak";
      const st = "content_loading--AoB79eQfRIQSCjPC";
      const it = "row--nTg6dj25PIQ10rvQ";
      const rt = "title-wrapper--yivHL98wcTsvChTz";
      const ot = "last-message-wrapper--LDfaiuHjGccjXAcD";
      const lt = "subtitle-cutted--mLvrcI7EvVAjkFDh";
      const ct = "last-message--znqoEhX7HRshT0Mz";
      const dt = "icons--Je457LlaRvgUN0qq";
      const ut = "meta--O43YvrGe4QYrsbFr";
      const ht = ({
        id: e,
        view: t = "full",
        lastMessage: a,
        unreadCount: n,
        notificationEnabled: s,
        ownerViolatesRules: i,
        displayInfo: r,
        type: o,
        subType: l,
        isSelected: d,
        lastViewedByOpponentMessageId: u,
        onlineUntilTime: h,
        userType: p,
        currentParticipantId: m,
      }) => {
        const v = (0, Se.m)(Te.OY, e);
        const g = p === _e.Z.Applicant;
        const y = p === _e.Z.Employer;
        const w = g
          ? r == null
            ? undefined
            : r.subtitle
          : r == null
            ? undefined
            : r.title;
        const x = i || !w;
        const b =
          (a == null ? undefined : a.participantId) === m
            ? Ke(a || undefined, u)
            : undefined;
        const k = d ? "contrast" : "accent";
        const C = n > 0;
        const { avatarImage: I } = (0, Ie.Z)({
          isUnknownUser: x,
          image: r == null ? undefined : r.icon,
        });
        const S = (0, te.$)();
        if (!r) {
          return null;
        }
        return (0, f.jsxs)(c.SPALink, {
          to: `/chat/${e}`,
          id: `chat-cell-${e}`,
          className: A()(Ye, {
            [et]: d,
            [Xe]: t === "full",
            [Je]: t === "compact",
          }),
          "data-qa": S ? `chatik-skeleton-chat-${e}` : `chatik-open-chat-${e}`,
          children: [
            (0, f.jsx)(ce.Z, {
              "aria-label": w || "",
              letters: (0, Ae.$)(w),
              online:
                !x &&
                o !== "SUPPORT" &&
                (l === "GENAI" || (!!h && (0, Ne.Dp)(h) === Ne.$r.ONLINE)),
              shapeCircle: (0, je.a)(p, o, l) === "circle",
              size: 48,
              isEmployer: y,
              isBlocked: Boolean(i),
              avatarImage: I,
            }),
            (0, f.jsxs)("div", {
              className: A()(Qe, {
                [st]: S,
              }),
              children: [
                (0, f.jsxs)("div", {
                  className: it,
                  children: [
                    (0, f.jsx)(re.O, {
                      width: "calc(100% - 8px)",
                      height: 16,
                      borderRadius: 4,
                      children: (0, f.jsxs)("div", {
                        className: rt,
                        children: [
                          (0, f.jsx)("div", {
                            className: tt,
                            children: r == null ? undefined : r.title,
                          }),
                          !s &&
                            (0, f.jsx)("div", {
                              className: dt,
                              children: (0, f.jsx)(le.q52, {
                                initialColor: d ? "contrast" : "tertiary",
                              }),
                            }),
                        ],
                      }),
                    }),
                    t === "full" &&
                      (0, f.jsx)(re.O, {
                        height: 14,
                        width: 36,
                        borderRadius: 4,
                        children: (0, f.jsxs)("div", {
                          "data-qa": "chat-cell-meta",
                          className: ut,
                          children: [
                            b === Ee.t.Read &&
                              (0, f.jsx)(le.eid, {
                                "data-qa": "status-icon-read",
                                initialColor: k,
                              }),
                            b === Ee.t.Delivered &&
                              (0, f.jsx)(le.ARe, {
                                "data-qa": "status-icon-delivered",
                                initialColor: k,
                              }),
                            (a == null ? undefined : a.creationTime) &&
                              (0, f.jsx)("div", {
                                "data-qa": "chat-cell-creation-time",
                                className: nt,
                                children: (0, f.jsx)(ke, {
                                  date: new Date(a.creationTime).getTime(),
                                  showTime: xe.TodayOnly,
                                  approximate: true,
                                  short: true,
                                }),
                              }),
                          ],
                        }),
                      }),
                  ],
                }),
                (0, f.jsx)(re.O, {
                  height: 14,
                  width: 120,
                  borderRadius: 4,
                  children: (0, f.jsx)("div", {
                    className: A()(at, {
                      [lt]: C,
                    }),
                    children: r == null ? undefined : r.subtitle,
                  }),
                }),
                t === "full" &&
                  (0, f.jsx)(re.O, {
                    height: 14,
                    width: 60,
                    borderRadius: 4,
                    children: (0, f.jsxs)("div", {
                      className: A()(it, ot),
                      children: [
                        v
                          ? (0, f.jsx)(Ce.c, {
                              typingAmount: v,
                              style: d ? "secondary" : "primary",
                            })
                          : a &&
                            (0, f.jsx)("div", {
                              className: ct,
                              children: (0, f.jsx)($e, {
                                message: a,
                                isBlocked: Boolean(i),
                                isContrast: d,
                              }),
                            }),
                        C &&
                          (0, f.jsx)(oe.C, {
                            "data-qa": "chatik-info-badges",
                            size: "medium",
                            style: d ? "constant" : "accent",
                            children: n.toString(),
                          }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      };
      ht.displayName = "ChatsList/ChatCell/index/ChatCell";
      const pt = (0, i.memo)(ht);
      var mt = a(61403);
      let vt = false;
      const gt = ({ selectedChatId: e, parentRef: t }) => {
        const a = (0, l.v)(({ activeState: e }) => e);
        (0, i.useEffect)(() => {
          if (!a) {
            vt = false;
            return;
          }
          if (!e || vt) {
            return;
          }
          const n = setTimeout(() => {
            const a = document.getElementById(`chat-cell-${e}`);
            if (!a || !t.current) {
              return;
            }
            vt = true;
            if (!(0, mt.Z)(a, t.current, 50)) {
              a.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 300);
          return () => {
            clearTimeout(n);
          };
        }, [a]);
      };
      const yt = "chats--pISa3zq6ZH8xK43H";
      const ft = (
        {
          chats: e,
          displayInfo: t,
          hasNextPage: a,
          cellsView: n,
          onPageLoad: s,
        },
        r,
      ) => {
        const { userType: o } = (0, V.Z)();
        const l = (0, i.useRef)(null);
        const c = (0, ee.B)(l, r);
        const d = (0, i.useRef)(s);
        d.current = s;
        const u = ie();
        const h = (0, i.useMemo)(
          () =>
            new Array(3).fill(undefined).map((e, t) => ({
              id: t,
              notificationEnabled: false,
              unreadCount: 0,
              participantsIds: [],
              resources: {},
              pinned: false,
              type: "NEGOTIATION",
            })),
          [],
        );
        const p = (0, i.useCallback)(() => {
          if (!l.current) {
            return;
          }
          const e = l.current;
          var t;
          if (
            e.scrollHeight - 240 - (e.scrollTop + e.offsetHeight) <
            e.offsetHeight / 2
          ) {
            if ((t = d.current) !== null && t !== undefined) {
              t.call(d);
            }
          }
        }, []);
        (0, i.useLayoutEffect)(() => {
          p();
        }, [p]);
        gt({
          selectedChatId: u,
          parentRef: l,
        });
        if (e != null && e.length) {
          return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)("div", {
              className: yt,
              ref: c,
              onScroll: p,
              children: [
                e.map((e) =>
                  (0, f.jsx)(
                    pt,
                    {
                      displayInfo: t == null ? undefined : t[e.id],
                      isSelected: u === e.id,
                      userType: o,
                      view: n,
                      ...e,
                    },
                    e.id,
                  ),
                ),
                a &&
                  (0, f.jsx)(te.Z, {
                    loading: true,
                    children: h.map((e) =>
                      (0, f.jsx)(
                        pt,
                        {
                          displayInfo: {
                            title: "",
                            subtitle: "",
                          },
                          isSelected: u === e.id,
                          userType: o,
                          view: n,
                          ...e,
                        },
                        e.id,
                      ),
                    ),
                  }),
              ],
            }),
          });
        } else {
          return null;
        }
      };
      ft.displayName = "components/ChatsList/index/ChatsList";
      const wt = (0, i.forwardRef)(ft);
      var xt = a(56957);
      var bt = a(68921);
      let kt = {};
      const Ct = (e, t) => {
        (0, i.useEffect)(() => {
          const a = e.current;
          if (!a) {
            return;
          }
          if (kt[t]) {
            a.scrollTop = kt[t];
          }
          const n = (0, bt.D)(() => {
            kt = {
              [t]: a.scrollTop,
            };
          }, 150);
          a.addEventListener("scroll", n);
          return () => {
            a.removeEventListener("scroll", n);
          };
        }, [e, t]);
      };
      const It = ({ chat: e, showOnlyUnread: t, currentChatId: a, isXS: n }) =>
        n
          ? (({ chat: e, showOnlyUnread: t }) => !t || Boolean(e.unreadCount))({
              chat: e,
              showOnlyUnread: t,
            })
          : (({ chat: e, showOnlyUnread: t, currentChatId: a }) =>
              !t || Boolean(e.unreadCount) || a === e.id)({
              chat: e,
              showOnlyUnread: t,
              currentChatId: a,
            });
      const St = (e, t, a) =>
        e.pinned && t.pinned && !a
          ? St(e, t, true)
          : e.pinned && !t.pinned
            ? -1
            : !e.pinned && t.pinned
              ? 1
              : e.lastMessage && t.lastMessage
                ? t.lastMessage.id - e.lastMessage.id
                : !e.lastMessage && t.lastMessage
                  ? 1
                  : e.lastMessage && !t.lastMessage
                    ? -1
                    : t.id - e.id;
      var Et = a(61477);
      var Tt = a(34343);
      var _t = a(63144);
      var jt = a(66999);
      const Nt = a.p + "static/images/search-icon__min_4bdc1dff06b83462.svg";
      const At = "chats.notFound.placeholder.applicant.title";
      const Rt = "chats.notFound.placeholder.applicant.description";
      const Mt =
        "chats.notFound.placeholder.applicant.action.resetFilters.label";
      const Dt = "chats.notFound.placeholder.employer.title";
      const Pt = "chats.notFound.placeholder.employer.description";
      const Zt =
        "chats.notFound.placeholder.employer.action.resetFilters.label";
      const Lt =
        "chats.notFound.placeholder.employer.action.changeFilters.label";
      const Ft = ({ trls: e }) => {
        const { isEmployer: t } = (0, V.Z)();
        const { handleFiltersReset: a, handleFiltersToggle: n } = Y();
        const { isMobile: s, isXS: i } = (0, R.G)();
        const r = (0, Et.l)(Nt);
        const o = (0, Et.l)(jt);
        return (0, f.jsx)(
          Tt.V,
          {
            image: s ? o : r,
            maxWidth: 343,
            imageHeight: i ? 194 : undefined,
            title: e[t ? Dt : At],
            description: e[t ? Pt : Rt],
            buttonPrimary: t
              ? (0, f.jsx)(_t.z, {
                  mode: "secondary",
                  style: "accent",
                  onClick: n,
                  children: e[Lt],
                })
              : (0, f.jsx)(_t.z, {
                  mode: "secondary",
                  style: "accent",
                  onClick: a,
                  children: e[Mt],
                }),
            buttonSecondary: t
              ? (0, f.jsx)(_t.z, {
                  mode: "tertiary",
                  style: "accent",
                  onClick: a,
                  children: e[Zt],
                })
              : undefined,
          },
          String(s),
        );
      };
      Ft.displayName = "DefaultChatsList/NoChatsFound/index/NoChatsFound";
      const Ut = (0, de.Z)(Ft);
      var Ot = a(54549);
      var Bt = a(59430);
      const Ht = ({ page: e, hasNextPage: t }) => {
        const a = (0, r.useDispatch)();
        const n = (0, i.useRef)(false);
        const s = (0, l.v)((e) => e.selectedVacanciesClusters);
        const o = (0, l.v)((e) => e.selectedEmployerStatesClusters);
        const c = (0, l.v)((e) => e.showOnlyUnread);
        const d = (0, l.v)((e) => e.showOnlyWithTextMessages);
        return (0, i.useCallback)(async () => {
          if (!n.current && t) {
            n.current = true;
            try {
              const t = await (0, Bt.Z)({
                vacancyIds: s,
                employerStates: o,
                filterUnread: c,
                filterHasTextMessage: d,
                page: e + 1,
              });
              a((0, Ot.GL)(t));
            } catch (e) {
              console.error(e);
            }
            n.current = false;
          }
        }, [t, e, a, o, s, d, c]);
      };
      const qt = "loader--_GzOnh3oKJ0fgjsw";
      const Vt = "placeholder-wrapper--TwaXUqOaK0iSIvRx";
      const Wt = () => {
        const e = (0, l.v)((e) => e.chats.chats);
        const t = (0, l.v)((e) => e.chats.chatsDisplayInfo);
        const a = (0, l.v)((e) => e.chats.wasNotRequested);
        const n = (0, l.v)((e) => e.showOnlyUnread);
        const s = (0, l.v)((e) => e.chats.chats.hasNextPage);
        const r = ie();
        const o = (0, i.useRef)(null);
        Ct(o, "chat_list_scroll_position" + String(e.found));
        const c = Ht(e);
        const { isXS: d, isMobile: u } = (0, R.G)();
        const { totalFiltersSelected: h } = Y();
        const p = (e.page + 1) * e.perPage;
        const m = (0, i.useMemo)(
          () =>
            [...e.items]
              .sort(St)
              .filter((e) =>
                It({
                  chat: e,
                  showOnlyUnread: n,
                  currentChatId: r,
                  isXS: d,
                }),
              )
              .slice(0, s ? p : e.items.length),
          [e.items, s, p, n, r, d],
        );
        if (a) {
          return (0, f.jsx)("div", {
            className: qt,
            children: (0, f.jsx)(M.a, {
              size: 24,
            }),
          });
        } else if (a || m.length) {
          return (0, f.jsx)(wt, {
            ref: o,
            chats: m,
            displayInfo: t,
            hasNextPage: s,
            onPageLoad: c,
            cellsView: "full",
          });
        } else if (h) {
          return (0, f.jsx)("div", {
            className: Vt,
            children: (0, f.jsx)(Ut, {}),
          });
        } else if (u) {
          return (0, f.jsx)(xt.Z, {
            showButtons: true,
          });
        } else {
          return null;
        }
      };
      Wt.displayName =
        "components/Navigation/DefaultChatsList/DefaultChatsList";
      const Gt = Wt;
      var zt = a(33030);
      var $t = a.n(zt);
      var Kt = a(4233);
      var Yt = a(65007);
      var Qt = a(73755);
      var Xt = a(30577);
      const Jt = (0, o.makeSetStoreField)("showOnlyUnread");
      const ea = "chatik.filters.showOnlyUnread";
      const ta = ({ trls: e }) => {
        const t = (0, l.v)((e) => e.showOnlyUnread);
        const a = (0, r.useDispatch)();
        const n = (e) => {
          const t = e.target.checked;
          $t()({
            state: t,
          });
          a(Jt(t));
        };
        return (0, f.jsx)(Kt.g, {
          type: "checkbox",
          padding: 0,
          borderRadius: 12,
          flexible: true,
          checked: t,
          onChange: n,
          children: (0, f.jsx)(Yt.b, {
            align: "top",
            horPadding: true,
            vertPadding: true,
            left: (0, f.jsx)(Qt.X, {
              "data-qa": "chatik-checkbox-only-unread",
              checked: t,
              onChange: n,
            }),
            children: (0, f.jsx)(Xt.j, {
              children: e[ea],
            }),
          }),
        });
      };
      ta.displayName =
        "Navigation/Filters/ShowOnlyUnread/ShowOnlyUnreadComponent";
      const aa = (0, de.Z)(ta);
      const na = "container--yr_fdCpsLIwFLDxJ";
      const sa = "container_inline--P2UXstKgFd0GsGvW";
      const ia = "actions--gSGyUoFjir4glgNK";
      const ra = () =>
        (0, f.jsx)("div", {
          className: A()(na, sa),
          children: (0, f.jsx)(aa, {}),
        });
      ra.displayName = "Navigation/Filters/InlineFilters/InlineFilters";
      var oa = a(18566);
      var la = a(82597);
      var ca = a(4305);
      var da = a(66802);
      var ua = a(17223);
      var ha = a(89059);
      var pa = a(67073);
      const ma = "chatik.emptyFiltersCluster.banner.title";
      const va = "chatik.emptyFiltersCluster.banner.content";
      const ga = "chatik.emptyFiltersCluster.banner.action";
      const ya = ({ trls: e }) => {
        const t = (0, l.v)((e) => e.siteRoot);
        return (0, f.jsx)(la.j, {
          showBorder: true,
          showClose: false,
          buttonsOrientation: "vertical",
          title: (0, f.jsx)(ca.D, {
            Element: "h5",
            size: "small",
            children: e[ma],
          }),
          content: (0, f.jsx)(da.x, {
            typography: "paragraph-2-regular",
            children: e[va],
          }),
          buttonBase: (0, f.jsx)(_t.z, {
            size: "small",
            mode: "primary",
            style: "accent",
            onClick: () => {
              const e = (0, ua.ni)(
                `${t}/employer/vacancy/create?hhtmSource=${(0, pa.H)()}`,
              );
              if (ha.vK) {
                (0, ha.AW)("redirectTo", {
                  path: e,
                });
              } else {
                window.location.assign(e);
              }
            },
            children: e[ga],
          }),
        });
      };
      ya.displayName =
        "Navigation/Filters/EmptyFiltersClustersBanner/EmptyFiltersClustersBannerComponent";
      const fa = (0, de.Z)(ya);
      var wa = a(85918);
      var xa = a.n(wa);
      const ba = (0, o.makeSetStoreField)("showOnlyWithTextMessages");
      const ka = "chatik.filters.showOnlyWithTextMessages";
      const Ca = "chatik.filters.showOnlyWithTextMessages.description";
      const Ia = ({ trls: e }) => {
        const t = (0, l.v)((e) => e.showOnlyWithTextMessages);
        const a = (0, r.useDispatch)();
        const n = (e) => {
          const t = e.target.checked;
          xa()({
            state: t,
          });
          a(ba(t));
        };
        return (0, f.jsx)(Kt.g, {
          type: "checkbox",
          padding: 0,
          borderRadius: 12,
          flexible: true,
          checked: t,
          onChange: n,
          children: (0, f.jsxs)(Yt.b, {
            align: "top",
            horPadding: true,
            vertPadding: true,
            left: (0, f.jsx)(Qt.X, {
              "data-qa": "chatik-select-only-with-text-messages",
              checked: t,
              onChange: n,
            }),
            children: [
              (0, f.jsx)(Xt.j, {
                children: e[ka],
              }),
              (0, f.jsx)(Xt.j, {
                type: "subtitle",
                children: e[Ca],
              }),
            ],
          }),
        });
      };
      Ia.displayName =
        "Navigation/Filters/ShowOnlyWithTextMessages/ShowOnlyWithTextMessagesComponent";
      const Sa = (0, de.Z)(Ia);
      var Ea = a(87343);
      var Ta = a(1800);
      var _a = a(50109);
      const ja = ({ children: e, clearSelectedValuesAndClose: t }) =>
        (0, f.jsx)(_a.Z, {
          borderWidth: "default",
          stretched: true,
          hoverStyle: "secondary",
          padding: 16,
          borderRadius: 16,
          onClick: t,
          children: (0, f.jsx)(Yt.b, {
            Element: "div",
            align: "center",
            left: (0, f.jsx)(le.Cs7, {}),
            children: (0, f.jsx)(Xt.j, {
              maxLines: 1,
              children: e,
            }),
          }),
        });
      ja.displayName = "Navigation/Filters/FilterResetCard/FilterResetCard";
      const Na = (0, o.makeSetStoreField)("selectedEmployerStatesClusters");
      const Aa = {
        allStatuses: "chatik.filters.allStatuses",
        applyFilter: "chatik.filters.apply",
        clearFilter: "chatik.filters.reset",
        clearOption: "chatik.filters.clearOption.statuses",
        employerStates: {
          [Le.H.Response]: "chatik.workflowTransition.response",
          [Le.H.PhoneInterview]: "chatik.workflowTransition.phoneInterview",
          [Le.H.Interview]: "chatik.workflowTransition.interview",
          [Le.H.DiscardByEmployer]:
            "chatik.workflowTransition.discardByEmployer.softForm",
          [Le.H.DiscardByApplicant]:
            "chatik.workflowTransition.discardByApplicant",
          [Le.H.DiscardNoInteraction]:
            "chatik.workflowTransition.discardNoInteraction",
          [Le.H.DiscardToOtherVacancy]:
            "chatik.workflowTransition.discardToOtherVacancy",
          [Le.H.DiscardVacancyClosed]:
            "chatik.workflowTransition.discardVacancyClosed",
          [Le.H.Assesment]: "chatik.workflowTransition.assesment",
          [Le.H.Consider]: "chatik.workflowTransition.consider",
          [Le.H.Hired]: "chatik.workflowTransition.hired",
          [Le.H.Offer]: "chatik.workflowTransition.offer",
        },
        postfix: "chatik.filters.postfix",
      };
      const Ra = (e) => {
        const t = e;
        if (t && Aa.employerStates[t]) {
          return Aa.employerStates[t];
        } else {
          return "";
        }
      };
      const Ma = ({ trls: e }) => {
        const t = (0, l.v)((e) => e.selectedEmployerStatesClusters);
        const a = (0, r.useDispatch)();
        const { isMobile: s } = (0, R.G)();
        const { filtersClustersGetter: o } = k();
        const [c, d] = o.get();
        const u = (0, i.useMemo)(
          () =>
            d.map((t) => ({
              cluster: t,
              text: e[Ra(t.employerState)],
              value: t.employerState,
            })),
          [d, e],
        );
        const h = (0, Ea.oQ)(u);
        const p = ({ isMobile: e, input: t, data: a }) => {
          const n = {
            [e ? "right" : "left"]: t,
          };
          return (0, f.jsx)(Yt.b, {
            Element: "div",
            align: "top",
            ...n,
            children: (0, f.jsx)(Xt.j, {
              children: a.text,
            }),
          });
        };
        return (0, f.jsx)(Ta.P, {
          type: "checkbox",
          multiple: true,
          name: "states",
          value: (0, Ea.j_)(t, u),
          dataProvider: h,
          renderDesktopItem: p,
          renderMobileItem: p,
          triggerProps: {
            label: e[Aa.allStatuses],
            size: "large",
            stretched: true,
            elevateLabel: true,
            showPostfix: true,
            disabled: u.length === 0,
            trls: {
              postfix: e[Aa.postfix],
            },
          },
          onChange: (e) => {
            n.default.sendHHEventButtonClick("chat_filter_stage_set", {
              stageList: e.map((e) => e.value),
            });
            a(Na(e.map((e) => e.value)));
          },
          renderContentBefore: (t) =>
            (0, f.jsx)(ja, {
              ...t,
              children: e[Aa.clearOption],
            }),
          applyChangesButton: s
            ? (0, f.jsx)(_t.z, {
                mode: "primary",
                style: "accent",
                children: e[Aa.applyFilter],
              })
            : undefined,
          clearButton: s
            ? (0, f.jsx)(_t.z, {
                mode: "secondary",
                style: "accent",
                children: e[Aa.clearFilter],
              })
            : undefined,
        });
      };
      Ma.displayName = "Navigation/Filters/StatesFilter/StatesFilterComponent";
      const Da = (0, de.Z)(Ma);
      const Pa = (0, o.makeSetStoreField)("selectedVacanciesClusters");
      const Za = "chatik.filters.allVacancies";
      const La = "chatik.filters.apply";
      const Fa = "chatik.filters.reset";
      const Ua = "chatik.filters.clearOption.vacancies";
      const Oa = "chatik.filters.postfix";
      const Ba = "chatik.filters.chatsWithoutVacancy";
      const Ha = ({ trls: e }) => {
        const t = (0, l.v)((e) => e.selectedVacanciesClusters);
        const a = (0, r.useDispatch)();
        const { isMobile: s } = (0, R.G)();
        const { filtersClustersGetter: o } = k();
        const [c] = o.get();
        const d = (0, i.useMemo)(() => {
          const t = [
            {
              text: e[Ba],
              value: "0",
              cluster: {
                name: e[Ba],
                vacancyId: 0,
              },
            },
          ];
          c.forEach((e) => {
            var a;
            t.push({
              text: e.name,
              value:
                (a = e.vacancyId) === null || a === undefined
                  ? undefined
                  : a.toString(),
              cluster: e,
            });
          });
          return t;
        }, [c, e]);
        const u = (0, Ea.oQ)(d);
        const h = ({ data: e, input: t, isMobile: a }) => {
          var n;
          const s = {
            [a ? "right" : "left"]: t,
          };
          return (0, f.jsxs)(Yt.b, {
            Element: "div",
            align: "top",
            ...s,
            children: [
              (0, f.jsx)(Xt.j, {
                children: e.text,
              }),
              (e == null || (n = e.cluster) === null || n === undefined
                ? undefined
                : n.area) &&
                (0, f.jsx)(Xt.j, {
                  type: "subtitle",
                  children: e.cluster.area.name,
                }),
            ],
          });
        };
        return (0, f.jsx)(Ta.P, {
          type: "checkbox",
          multiple: true,
          name: "vacancies",
          value: (0, Ea.j_)(t, d),
          dataProvider: u,
          renderDesktopItem: h,
          renderMobileItem: h,
          triggerProps: {
            label: e[Za],
            size: "large",
            stretched: true,
            elevateLabel: true,
            showPostfix: true,
            disabled: d.length === 0,
            trls: {
              postfix: e[Oa],
            },
          },
          onChange: (e) => {
            n.default.sendHHEventButtonClick("chat_filter_vacancy_set", {
              vacancyIdList: e.map((e) => e.value),
            });
            a(Pa(e.map((e) => e.value)));
          },
          renderContentBefore: (t) =>
            (0, f.jsx)(ja, {
              ...t,
              children: e[Ua],
            }),
          applyChangesButton: s
            ? (0, f.jsx)(_t.z, {
                mode: "primary",
                style: "accent",
                children: e[La],
              })
            : undefined,
          clearButton: s
            ? (0, f.jsx)(_t.z, {
                mode: "secondary",
                style: "accent",
                children: e[Fa],
              })
            : undefined,
        });
      };
      Ha.displayName =
        "Navigation/Filters/VacanciesFilter/VacanciesFilterComponent";
      const qa = (0, de.Z)(Ha);
      const Va = "chatik.filters.reset";
      const Wa = "chatik.filters.apply";
      const Ga = ({ trls: e }) => {
        const {
          totalFiltersSelected: t,
          handleFiltersApply: a,
          handleFiltersReset: n,
        } = Y();
        const { filtersClustersGetter: s } = k();
        const [i] = s.get();
        const r = i.length !== 0;
        return (0, f.jsxs)("div", {
          className: na,
          children: [
            (0, f.jsxs)(oa.z, {
              default: 12,
              children: [
                r
                  ? (0, f.jsxs)(f.Fragment, {
                      children: [(0, f.jsx)(qa, {}), (0, f.jsx)(Da, {})],
                    })
                  : (0, f.jsx)(fa, {}),
                (0, f.jsx)(aa, {}),
                (0, f.jsx)(Sa, {}),
              ],
            }),
            (0, f.jsx)("div", {
              className: ia,
              children: (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(_t.z, {
                    "data-qa": "chatik-apply-filters-button",
                    size: "medium",
                    style: "accent",
                    mode: "primary",
                    stretched: true,
                    spaceBetween: false,
                    onClick: a,
                    children: e[Wa],
                  }),
                  t > 0
                    ? (0, f.jsx)(_t.z, {
                        "data-qa": "chatik-filters-reset",
                        size: "medium",
                        style: "accent",
                        mode: "secondary",
                        stretched: true,
                        spaceBetween: false,
                        postfix: t.toString(),
                        onClick: n,
                        children: e[Va],
                      })
                    : null,
                ],
              }),
            }),
          ],
        });
      };
      Ga.displayName =
        "Navigation/Filters/OverlayFilters/OverlayFiltersComponent";
      const za = (0, de.Z)(Ga);
      var $a = a(42065);
      var Ka = a(75790);
      var Ya = a(31537);
      var Qa = a(53416);
      var Xa = a(3000);
      var Ja = a.n(Xa);
      var en = a(76209);
      var tn = a.n(en);
      const an = "RESET_SEARCH";
      const nn = "SET_SEARCH_QUERY";
      const sn = "REPLACE_SEARCHED_CHATSs";
      const rn = "UPDATE_SEARCHED_CHATS";
      const on = () => ({
        type: an,
      });
      const ln = (e) => ({
        type: nn,
        query: e,
      });
      const cn = (0, o.makeSetStoreField)("navigationView");
      const dn = () => {
        const e = (0, r.useDispatch)();
        const t = (0, l.v)((e) => e.navigationView === "search");
        return {
          isSearchVisible: t,
          handleSearchToggle: () => {
            e(cn(t ? H.ChatList : H.Search));
            if (t) {
              e(on());
              Ja()();
            } else {
              tn()();
            }
          },
        };
      };
      var un = a(54075);
      var hn = a(48403);
      var pn = a(46192);
      var mn = a(44180);
      const vn = "logo-wrapper--nVbIF7GZVVU3qkoZ";
      const gn = "hh-logo--dqAGE1APxHEwDEny";
      const yn = "zarplata-logo--mePhw5TI4eYVg7R5";
      const fn = "rabota-by-logo--Q302BbcXXBs_9aU3";
      const wn = () => {
        const e = (0, l.v)((e) => e.siteRoot);
        const t = (0, pn.Ix)();
        const a = (0, pn.do)();
        return (0, f.jsx)(mn.r, {
          className: vn,
          href: `${e}?hhtmFrom=chat_page`,
          children: (0, f.jsx)("div", {
            className: t ? yn : a ? fn : gn,
          }),
        });
      };
      wn.displayName = "NavHeader/Logo/index/Logo";
      const xn = wn;
      var bn = a(5154);
      var kn = a.n(bn);
      const Cn = "chatik.navigation.expandButton";
      const In = "chatik.navigation.collapseButton";
      const Sn = ({ trls: e }) => {
        const t = (0, ae.useLocation)();
        const { isMobile: a } = (0, R.G)();
        const n = a ? e[Cn] : e[In];
        const s = a ? le.Ml6 : le.Qho;
        return (0, f.jsx)(s, {
          padding: 8,
          "aria-label": n,
          "data-qa": a ? "chatik-expand-chatik" : "chatik-collapse-chatik",
          onClick: () => {
            (0, ha.AW)("changeLayout", {
              view: a ? "medium" : "compact",
            });
            kn()({
              type: a ? "two_column" : "single_column",
              hhtmSource: t.pathname.includes("/chat/") ? j.x.Chat : j.x.List,
            });
          },
        });
      };
      Sn.displayName = "Navigation/NavHeader/ResizeButton/ResizeButton";
      const En = (0, de.Z)(Sn);
      var Tn = a(43193);
      var _n = a.n(Tn);
      var jn = a(49727);
      const Nn = "chatik.navigation.supportChat";
      const An = () => {
        const e = (0, jn.T)();
        const t = (0, l.v)((e) => e.chats.chats.items).find(
          (e) => e.type === "SUPPORT",
        );
        const a = (0, c.usePush)();
        return (0, f.jsx)(le.oa5, {
          padding: 8,
          "data-qa": "chatik-support-chat-button",
          "aria-label": e[Nn],
          onClick: () => {
            _n()();
            a(
              `/chat/${t ? t.id : "support"}?hhtmFromLabel=chat_list_support_icon`,
            );
          },
        });
      };
      An.displayName =
        "Navigation/NavHeader/SupportChatButton/SupportChatButton";
      const Rn = An;
      const Mn = "header--YOYJKC22VfUF8gf5";
      const Dn = "actions--CGvJB2RnqpcX2FP5";
      const Pn = "chatik.title";
      const Zn = "chatik.filters";
      const Ln = "chatik.search";
      const Fn = "chatik.chatListHeader.filters";
      const Un = "chatik.chatListHeader.search";
      const On = "chatik.navigation.closeHint";
      const Bn = "chatik_employer_search_enabled";
      const Hn = ({ trls: e }) => {
        const t = (0, l.v)((e) => e.isProxyPage);
        const {
          areFiltersEnabled: a,
          totalFiltersSelected: n,
          areFiltersVisible: s,
          areInlineFilters: i,
          handleFiltersToggle: r,
        } = Y();
        const { isSearchVisible: o, handleSearchToggle: c } = dn();
        const { isMobile: d } = (0, R.G)();
        const { isEmployer: u } = (0, V.Z)();
        const {
          isWidgetIframe: h,
          isParentDesktopDisplayType: p,
          isParentGtS: m,
        } = (0, un.Z)();
        const v = (0, hn.Z)();
        const g = (0, pn.Ix)();
        const y = (0, l.v)((e) => e.navigationView !== H.ChatList);
        const w = (0, l.v)((e) => e.features[Bn] && u);
        const x = () => (s ? e[Fn] : o ? e[Un] : e[Pn]);
        const b = () => {
          const e = d ? le.ee : le.Cs7;
          if (s) {
            return (0, f.jsx)(e, {
              padding: 8,
              onClick: r,
              "data-qa": "chatik-hide-all-filters",
            });
          } else if (o) {
            return (0, f.jsx)(e, {
              padding: 8,
              onClick: c,
              "data-qa": "chatik-hide-search",
            });
          } else {
            return undefined;
          }
        };
        if (y && d) {
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(Ka.X, {
                default: 16,
              }),
              (0, f.jsx)(Ya.v, {
                title: x(),
                left: b(),
              }),
            ],
          });
        } else {
          return (0, f.jsx)(Qa.Z, {
            className: Mn,
            firstSlot:
              ha.vK || t
                ? null
                : (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)(xn, {}),
                      (0, f.jsx)($a.V, {
                        default: 8,
                      }),
                    ],
                  }),
            lastSlot: (0, f.jsx)("div", {
              className: Dn,
              children:
                s || o
                  ? b()
                  : (0, f.jsxs)(f.Fragment, {
                      children: [
                        w &&
                          (0, f.jsx)(le.lO1, {
                            padding: 8,
                            "aria-label": e[Ln],
                            "data-qa": "chatik-show-search-button",
                            onClick: c,
                          }),
                        !g && (0, f.jsx)(Rn, {}),
                        a &&
                          !i &&
                          (0, f.jsx)(le.VqY, {
                            padding: 8,
                            "aria-label": e[Zn],
                            "data-qa": "chatik-show-filters-button",
                            badge:
                              n > 0
                                ? (0, f.jsx)(oe.C, {
                                    size: "extra-small",
                                  })
                                : undefined,
                            onClick: r,
                          }),
                        h && p && m && (0, f.jsx)(En, {}),
                        v &&
                          h &&
                          (0, f.jsx)(le.Cs7, {
                            padding: 8,
                            "aria-label": e[On],
                            onClick: () => (0, ha.AW)("close"),
                          }),
                      ],
                    }),
            }),
            children: (0, f.jsx)(ca.D, {
              Element: "h2",
              size: "medium",
              children: x(),
            }),
          });
        }
      };
      Hn.displayName = "Navigation/NavHeader/index/NavHeader";
      const qn = (0, de.Z)(Hn);
      var Vn = a(56109);
      var Wn = a.n(Vn);
      var Gn = a(66185);
      const zn = a.p + "static/images/default-error__min_73e78a599ae0b1da.webp";
      const $n = a.p + "static/images/warning-icon__min_cdf192db9ffb270a.svg";
      var Kn = a(86345);
      var Yn = a.n(Kn);
      var Qn = a(70396);
      var Xn = a.n(Qn);
      var Jn = a(10900);
      const es = (e, t = {}) =>
        m.Z.get("/chatik/api/search", {
          params: e,
          ...t,
          signal: t.signal,
        }).then(({ data: e }) => {
          if (typeof e != "object") {
            const t = new Error("Invalid search chats data received");
            Jn.c.log("out", t, {
              data: e,
            });
            return null;
          }
          return e;
        });
      let ts = (function (e) {
        e[(e.NetworkError = 0)] = "NetworkError";
        e[(e.CommonError = 1)] = "CommonError";
        return e;
      })({});
      const as = ({ listRef: e }) => {
        const t = (0, l.v)((e) => e.search.query);
        const a = (0, l.v)((e) => e.search.chats);
        const n = (0, l.v)((e) => e.search.chatsDisplayInfo);
        const s = (0, l.v)((e) => e.search.lastSearchedQuery);
        const o = (0, r.useDispatch)();
        const [c, d] = (0, i.useState)(false);
        const [u, h] = (0, i.useState)(null);
        const p = (0, i.useRef)(false);
        const m = (0, i.useRef)();
        const v = (0, i.useRef)();
        const g = (0, i.useCallback)(
          (t) => {
            var a;
            if ((a = v.current) !== null && a !== undefined) {
              a.abort();
            }
            v.current = new AbortController();
            p.current = true;
            m.current = setTimeout(() => {
              h(null);
              d(true);
            }, 1000);
            const n = (t, a) => {
              if (e.current) {
                e.current.scrollTop = 0;
              }
              o(
                ((e, t) => ({
                  type: sn,
                  searchedChats: t,
                  query: e,
                }))(t, a),
              );
              p.current = false;
              clearTimeout(m.current);
              d(false);
            };
            es(
              {
                query: t.trim(),
              },
              {
                signal: v.current.signal,
              },
            )
              .then((e) => {
                n(t, e);
                h(null);
              })
              .catch((e) => {
                if (!Yn().isCancel(e)) {
                  n(t, null);
                  h(
                    e.message === "Network error"
                      ? ts.NetworkError
                      : ts.CommonError,
                  );
                }
              });
          },
          [e, o],
        );
        const y = (0, i.useMemo)(() => Xn()(g, 1000), [g]);
        (0, i.useEffect)(() => {
          const e = t.trim();
          if (e && e !== (s == null ? undefined : s.trim())) {
            y(t);
          }
          return () => {
            var e;
            y.cancel();
            clearTimeout(m.current);
            if ((e = v.current) !== null && e !== undefined) {
              e.abort();
            }
          };
        }, []);
        return {
          data: {
            searchValue: t,
            searchedChats: a,
            displayInfo: n,
          },
          loading: c,
          error: u,
          searchByQuery: (e) => {
            o(ln(e));
            var t;
            if (!e.trim()) {
              if ((t = v.current) !== null && t !== undefined) {
                t.abort();
              }
              o(on());
              if (e) {
                o(ln(e));
              }
              p.current = false;
              clearTimeout(m.current);
              d(false);
              h(null);
              y.cancel();
              return;
            }
            y(e);
          },
          loadNextSearchPage: () => {
            var e;
            if (p.current || !a.nextFrom) {
              return;
            }
            p.current = true;
            if ((e = v.current) !== null && e !== undefined) {
              e.abort();
            }
            v.current = new AbortController();
            const n = t.trim();
            es(
              {
                query: n,
                searchFrom: a.nextFrom,
              },
              {
                signal: v.current.signal,
              },
            )
              .then((e) =>
                o(
                  ((e, t) => ({
                    type: rn,
                    query: e,
                    searchedChats: t,
                  }))(n, e),
                ),
              )
              .finally(() => (p.current = false));
          },
        };
      };
      const ns = "search-input-container--H0Effn1z86mySq5H";
      const ss = "placeholder-wrapper--jyKjKep18cMCG9pt";
      const is = "loader--QvkBZjnlnMMcmugH";
      const rs = {
        searchInputPlaceholder: "chatik.searchInput.placeholder",
        placeholderNotFoundTitle: "chatik.search.placeholder.notFound.title",
        placeholderNotFoundDescription:
          "chatik.search.placeholder.notFound.description",
        errors: {
          networkError: {
            title: "chatik.search.placeholder.networkError.title",
            description: "chatik.search.placeholder.networkError.description",
          },
          common: {
            title: "chatik.search.placeholder.commonError.title",
            description: "chatik.search.placeholder.commonError.description",
          },
        },
      };
      const os = ({ trls: e }) => {
        var t;
        const a = (0, i.useRef)(null);
        const { isXS: n, isMobile: s } = (0, R.G)();
        const r = (0, Et.l)(Nt);
        const o = (0, Et.l)($n);
        const l = (0, Et.l)(jt);
        const c = (0, Et.l)(zn);
        const {
          data: d,
          loading: u,
          error: h,
          searchByQuery: p,
          loadNextSearchPage: m,
        } = as({
          listRef: a,
        });
        const { searchValue: v, searchedChats: g, displayInfo: y } = d;
        const w =
          (g == null || (t = g.items) === null || t === undefined
            ? undefined
            : t.length) === 0;
        const x = Boolean(g == null ? undefined : g.nextFrom);
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("div", {
              className: ns,
              children: (0, f.jsx)(Gn.M, {
                "data-qa": "chatik-search-chats-input",
                autoFocus: true,
                value: v,
                size: "medium",
                placeholder: e[rs.searchInputPlaceholder],
                clearable: true,
                onChange: p,
                onButtonClick: () => Wn()(),
              }),
            }),
            (() => {
              const t = v == null ? undefined : v.trim();
              switch (true) {
                case u:
                  return (0, f.jsx)("div", {
                    className: is,
                    children: (0, f.jsx)(M.a, {
                      size: 24,
                    }),
                  });
                case t && w: {
                  const t = s ? l : r;
                  const a = (() => (n ? 194 : s ? undefined : 57))();
                  return (0, f.jsx)("div", {
                    className: ss,
                    children: (0, f.jsx)(
                      Tt.V,
                      {
                        "data-qa": "chatik-search-not-found-placeholder",
                        image: t,
                        imageHeight: a,
                        title: e[rs.placeholderNotFoundTitle],
                        description: e[rs.placeholderNotFoundDescription],
                      },
                      a,
                    ),
                  });
                }
                case t && !!h: {
                  const t = ((e) =>
                    e === ts.NetworkError
                      ? rs.errors.networkError
                      : rs.errors.common)(h);
                  const a = s ? c : o;
                  const i = (() => (n ? 174 : s ? undefined : 57))();
                  return (0, f.jsx)("div", {
                    className: ss,
                    children: (0, f.jsx)(
                      Tt.V,
                      {
                        "data-qa": "chatik-search-error-placeholder",
                        image: a,
                        imageHeight: i,
                        title: e[t.title],
                        description: e[t.description],
                      },
                      i,
                    ),
                  });
                }
                case Boolean(t):
                  return (0, f.jsx)(wt, {
                    ref: a,
                    chats: g.items,
                    displayInfo: y,
                    hasNextPage: x,
                    onPageLoad: m,
                    cellsView: "compact",
                  });
                default:
                  return null;
              }
            })(),
          ],
        });
      };
      os.displayName = "Navigation/Search/index/Search";
      const ls = (0, de.Z)(os);
      const cs = "container--FjXqZ6nkd4QeQclm";
      const ds = "loader--cs1FAFfY2FgNHWfK";
      const us = () => {
        const e = (0, l.v)((e) => e.navigationView);
        const t = (0, i.useRef)(null);
        const { areInlineFilters: a } = Y();
        J();
        return (0, f.jsxs)("div", {
          className: cs,
          ref: t,
          children: [
            (0, f.jsx)(qn, {}),
            (() => {
              switch (e) {
                case "filters":
                  return (0, f.jsx)(i.Suspense, {
                    fallback: (0, f.jsx)("div", {
                      className: ds,
                      children: (0, f.jsx)(M.a, {
                        size: 24,
                      }),
                    }),
                    children: (0, f.jsx)(za, {}),
                  });
                case "search":
                  return (0, f.jsx)(ls, {});
                case "chatList":
                  return (0, f.jsxs)(f.Fragment, {
                    children: [a && (0, f.jsx)(ra, {}), (0, f.jsx)(Gt, {})],
                  });
                default:
                  return null;
              }
            })(),
          ],
        });
      };
      us.displayName = "components/Navigation/index/Navigation";
      const hs = us;
      var ps = a(92826);
      const ms = "layout--lQSLcKPBFYsdLefB";
      const vs = "proxy-page-layout--h00yeUWPiU0uh91m";
      const gs = "content--hyyO0Q8oeVUHHmHa";
      const ys = "navigation--MoRKogkS5aQyLrBM";
      const fs = "main-content--duqM70SHgIZ7Kw4a";
      const ws = (0, o.makeSetStoreField)("chatListActiveState");
      const xs = ({ children: e, singleColumnMode: t = "content" }) => {
        const a = (0, l.v)(({ chats: e }) => e.chats.items);
        const n = (0, l.v)(({ chats: e }) => e.wasNotRequested);
        const s = (0, l.v)(({ chatData: e }) => e.chat.id);
        const o = (0, l.v)((e) => e.showOnlyUnread);
        const c = (0, l.v)((e) => e.isProxyPage);
        const { name: d } = se();
        const u = (0, r.useDispatch)();
        const { isXS: h, isMobile: p } = (0, R.G)();
        const { areFiltersVisible: m } = Y();
        const v = p && t !== "content";
        const g = p && t !== "navigation";
        const y = !g;
        const w = d && d !== j.x.List;
        const x = (0, i.useMemo)(
          () =>
            a.some((e) =>
              It({
                chat: e,
                isXS: h,
                currentChatId: w ? s : undefined,
                showOnlyUnread: o,
              }),
            ),
          [a, h, s, w, o],
        );
        const b = Boolean(x || n || w || (p && m));
        (0, i.useEffect)(() => {
          u(ws(y));
        }, [y, u]);
        return (0, f.jsxs)("div", {
          id: "chatik-layout",
          "data-qa": "chatik-layout",
          className: A()(ms, {
            [vs]: c,
          }),
          children: [
            (0, f.jsxs)("div", {
              className: gs,
              children: [
                !g &&
                  (0, f.jsx)("div", {
                    className: ys,
                    children: (0, f.jsx)(hs, {}),
                  }),
                !v &&
                  (0, f.jsx)("div", {
                    className: fs,
                    children: b
                      ? e
                      : (0, f.jsx)(xt.Z, {
                          showButtons: true,
                        }),
                  }),
              ],
            }),
            !ha.vK && (0, f.jsx)(ps.Z, {}),
          ],
        });
      };
      xs.displayName = "components/Layout/index/Layout";
      const bs = xs;
      var ks = a(42515);
      const Cs = () => {
        const e = (0, ks.Z)();
        const t = (0, l.v)(({ activeState: e }) => e);
        const a = (0, l.v)((e) => e.isProxyPage);
        const n = (0, i.useRef)(true);
        const s = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          s.current = Q.L.get("crypted_id");
        }, []);
        (0, i.useEffect)(() => {
          if (e) {
            if (t && !n.current) {
              n.current = true;
              const e = Q.L.get("crypted_id");
              if (e && e !== s.current) {
                if (ha.vK) {
                  (0, ha.AW)("iframeRemount");
                } else {
                  window.location.href = a ? "/chat" : "/";
                }
              }
            }
          } else {
            n.current = false;
          }
        }, [e, t, a]);
      };
      var Is = a(96915);
      var Ss = a(20937);
      var Es = a(87749);
      var Ts = a(61675);
      var _s = a(88915);
      var js = a(36788);
      const Ns = () => {
        let e;
        const t = () => {
          if (e) {
            clearTimeout(e);
          }
        };
        return {
          stop: t,
          schedule: (a, n) => {
            t();
            e = setTimeout(a, n);
          },
        };
      };
      const As = {
        onConnect: "connect",
        onDisconnect: "disconnect",
        onChatMessage: "chat_message_create",
        onChatMessageDeleted: "chat_message_deleted",
        onChatMessageEdit: "chat_message_edited",
        onChatStateChange: "chat_state_changed",
        onLastViewedMessageChange: "last_viewed_message_change",
        onParticipantAction: "chat_participant_action",
      };
      const Rs = (e) => {
        const t = [];
        Object.entries(As).forEach(([a, n]) => {
          const s = e[a];
          if (s) {
            t.push(Ss.I.on(n, s));
          }
        });
        return () => {
          t.forEach((e) => {
            try {
              e();
            } catch (e) {
              console.error("Error during websocket unsubscribe", e);
            }
          });
        };
      };
      const Ms = (e, t, a) => {
        let n = t(e.getState());
        return e.subscribe(() => {
          const s = e.getState();
          const i = t(s);
          if (
            ((e, t) => {
              if (e && !t) {
                return true;
              }
              for (let a = 0; a < e.length; a++) {
                if (e[a] !== t[a]) {
                  return true;
                }
              }
              return false;
            })(i, n)
          ) {
            n = i;
            a(s);
          }
        });
      };
      const Ds = (e, t = []) => {
        let a = t;
        return (t, n = []) => {
          const s = new Date();
          if ((t ? s.getTime() - t.getTime() : Infinity) > e) {
            a = n;
            return true;
          }
          if (a.length !== n.length) {
            a = n;
            return true;
          }
          return !a.every((e, t) => e === n[t]) && ((a = n), true);
        };
      };
      const Ps = (e, t) => {
        if (!t) {
          return e;
        }
        const a = e - (Date.now() - t.getTime());
        return Math.max(a, 0);
      };
      const Zs = (e) => (Math.random() + 0.25) * e;
      const Ls = /\/chat\/(\d+)/;
      const Fs = (e) => {
        return parseInt(Ls.exec(e)?.[1] || "", 10);
      };
      const Us = (e) => {
        const t = (0, Ze.U6)(e).find(({ type: e }) => e === "APPLICANT_USER");
        if (t == null) {
          return undefined;
        } else {
          return t.externalId;
        }
      };
      const Os = Ns();
      const Bs = (e, t) => {
        const a = e.getState();
        const n = [];
        const s = new Set();
        const i = Zs(a.features[h.A.ChatsDataUpdateDelay] || 3000);
        const r = a.features[h.A.WebsocketEnabled];
        const o = a.features[h.A.UpdateAfterSocketEventDelay];
        const l = a.features[h.A.AutoFetchUpdateDelayWithWebSocket] || 120000;
        let c = a.activeState;
        let d = Fs(a.router.location.pathname);
        let u = i;
        let p = 0;
        let m = null;
        let v = new Date();
        let g = null;
        let y = false;
        const f = (e) => Ds(e, [d, g]);
        let w = f(u);
        const x = () => {
          p = 0;
        };
        const b = async ({ force: t = false, retry: a = false } = {}) => {
          Os.stop();
          const n = r && y;
          if (d && (!n || !(p >= 5))) {
            if (t || w(v, [d, g])) {
              if (m !== null) {
                m = null;
                w = f(u);
              }
              const t = Us(e.getState());
              try {
                var s;
                v = new Date();
                g = null;
                const i = await (0, _s.Z)(
                  {
                    chatId: d,
                    applicantId: t,
                  },
                  {
                    retry: a,
                  },
                );
                e.dispatch((0, Es.$2)(i));
                e.dispatch((0, Ts.L2)());
                if (
                  n &&
                  (i == null || (s = i.error) === null || s === undefined
                    ? undefined
                    : s.code) === "NOT_FOUND"
                ) {
                  p += 1;
                } else {
                  x();
                }
              } catch (e) {
                Os.schedule(b, u * 5);
                return;
              }
            }
            Os.schedule(b, Ps(m ?? u, v));
          }
        };
        n.push(
          Ms(
            e,
            ({ router: e, inlineChatId: t }) => [e.location.pathname, t],
            ({
              router: {
                location: { pathname: e },
              },
              inlineChatId: t,
            }) => {
              const a = Fs(e) || t;
              if (d !== a) {
                s.clear();
              }
              if (a) {
                d = a;
                b({
                  retry: true,
                });
              }
            },
          ),
        );
        n.push(
          ((e, t, a) => Ms(e, (e) => [t(e)], a))(
            e,
            ({ activeState: e }) => e,
            ({ activeState: e }) => {
              c = e;
              Os.stop();
              if (e) {
                b({
                  retry: true,
                });
              }
            },
          ),
        );
        if (c) {
          b();
        }
        let k = () => {};
        if (r) {
          const a = (0, bt.D)(({ force: t = false } = {}) => {
            const a = e.getState().chatData;
            const n = [...s].some(
              (e) =>
                !((e, t) => t.chat.messages.items.find((t) => t.id === e))(
                  e,
                  a,
                ),
            );
            if (t || n) {
              b({
                force: true,
                retry: true,
              });
            }
            s.clear();
          }, o);
          k = Rs({
            onConnect: () => {
              m = null;
              u = l;
              y = true;
              w = f(u);
              x();
              if (c) {
                b({
                  force: y,
                  retry: true,
                });
              }
            },
            onDisconnect: () => {
              m = Zs(i);
              u = i;
              w = f(m);
              x();
              if (c) {
                v = new Date();
                b();
              }
            },
            onChatMessage: (n) => {
              (0, js.Z)();
              if (n.messageType === Ee.u.ParticipantLeft && n.chatId === d) {
                const { currentParticipantId: a } =
                  e.getState().chatData?.chat ?? {};
                if (a === n.participantId) {
                  t("/chat");
                  return;
                }
              }
              if (c && n.chatId === d) {
                s.add(n.messageId);
                a();
              } else {
                g = n;
              }
            },
            onChatMessageEdit: async ({ messageId: t, chatId: a }) => {
              if (!d) {
                return;
              }
              const n = Us(e.getState());
              let s;
              try {
                s = await (0, _s.Z)({
                  chatId: d,
                  applicantId: n,
                });
                const a = e.getState().chatData.chat.messages.items;
                if (a[a.length - 1].id === t) {
                  e.dispatch((0, Ts.L2)());
                }
              } catch (e) {}
              if (!s || s.error) {
                return;
              }
              const i = s.chat.messages.items.find(({ id: e }) => e === t);
              if (i != null && i.text) {
                e.dispatch((0, Ot.AK)(a, t, i.text, i.lastChangeTime));
              }
            },
            onChatStateChange: (e) => {
              if (c && e.chatId === d) {
                s.clear();
                a({
                  force: true,
                });
              } else {
                g = e;
              }
            },
            onChatMessageDeleted: ({ chatId: t, messageId: a }) => {
              if (t === d) {
                e.dispatch((0, Es.Am)(t, a));
              }
            },
          });
          n.push(() => a.cancel());
          n.push(k);
        }
        return () => {
          Os.stop();
          n.forEach((e) => {
            try {
              e();
            } catch (e) {
              console.error("Error during chat data init unsubscribe", e);
            }
          });
        };
      };
      const Hs = (0, o.makeSetStoreField)("shouldReloadFiltersClusters");
      const qs = Ns();
      const Vs = (e) => {
        const t = e.getState();
        const a = [];
        const n = t.features[h.A.ChatsDataUpdateDelay] || 3000;
        const s = t.features[h.A.WebsocketEnabled];
        const i = t.features[h.A.AutoFetchUpdateDelayWithWebSocket] || 120000;
        let r = t.selectedVacanciesClusters;
        let o = t.selectedEmployerStatesClusters;
        let l = t.showOnlyUnread;
        let c = t.showOnlyWithTextMessages;
        let d = n;
        let u = null;
        let p = t.chats.wasNotRequested ? undefined : new Date();
        let m = null;
        let v = t.activeState;
        let g = t.chatListActiveState;
        const y = (e) => Ds(e, [r, o, l, c, m]);
        let f = y(d);
        const w = async (t = {}) => {
          qs.stop();
          if (!f(p, [r, o, l, c, m])) {
            qs.schedule(w, Ps(u ?? d, p));
            return;
          }
          let a;
          if (u) {
            u = null;
            f = y(d);
          }
          try {
            p = new Date();
            a = await (0, Bt.Z)(
              {
                vacancyIds: r,
                employerStates: o,
                filterUnread: l,
                filterHasTextMessage: c,
              },
              {
                retry: Boolean(t == null ? undefined : t.retry),
                abort: true,
              },
            );
          } catch (e) {
            qs.schedule(w, d * 5);
            return;
          }
          m = null;
          e.dispatch((0, Ot.GL)(a));
          qs.schedule(w, Ps(d, p));
        };
        a.push(
          Ms(
            e,
            (e) => [
              e.selectedVacanciesClusters,
              e.selectedEmployerStatesClusters,
              e.showOnlyUnread,
              e.showOnlyWithTextMessages,
            ],
            ({
              selectedVacanciesClusters: t,
              selectedEmployerStatesClusters: a,
              showOnlyUnread: n,
              showOnlyWithTextMessages: s,
            }) => {
              r = t;
              o = a;
              l = n;
              c = s;
              if (v && g) {
                e.dispatch((0, Ot.VB)());
                w({
                  retry: true,
                });
              }
            },
          ),
        );
        a.push(
          Ms(
            e,
            (e) => [e.activeState, e.chatListActiveState],
            ({ activeState: e, chatListActiveState: t }) => {
              v = e;
              g = t;
              qs.stop();
              if (e && g) {
                w({
                  retry: true,
                });
              }
            },
          ),
        );
        if (v && g) {
          w();
        }
        let x = () => {};
        if (s) {
          const t = new Set();
          const s = (t, a) => {
            const n = t.filter((e) => {
              var t;
              return (
                a == null ||
                (t = a.chats.items) === null ||
                t === undefined ||
                !t.find((t) => t.id === e)
              );
            });
            if (n.length) {
              e.dispatch((0, Ot.Vg)(n));
            }
          };
          const h = (0, bt.D)(() => {
            const a = [...t.values()];
            t.clear();
            (0, Bt.Z)({
              ids: a,
            })
              .then((t) => {
                s(a, t);
                e.dispatch((0, Ot.GL)(t));
              })
              .catch(console.error);
          }, 500);
          const b = (0, bt.D)(() => {
            const a = [...t.values()];
            return Promise.all([
              (t.clear(),
              (0, Bt.Z)({
                ids: a,
              })),
              (0, Bt.Z)({
                page: e.getState().chats.chats.page,
                vacancyIds: r,
                employerStates: o,
                filterUnread: l,
                filterHasTextMessage: c,
              }),
            ])
              .then(([t, n]) => {
                s(a, t);
                e.dispatch((0, Ot.GL)(t));
                e.dispatch((0, Ot.GL)(n));
              })
              .catch(console.error);
          }, 500);
          const k = (0, bt.D)(() => {
            const t =
              (r && r.length > 0) || (o && o.length > 0) || c ? 2000 : 0;
            new Promise((e) => setTimeout(e, t))
              .then(() =>
                (0, Bt.Z)(
                  {
                    vacancyIds: r,
                    employerStates: o,
                    filterUnread: l,
                    filterHasTextMessage: c,
                  },
                  {
                    retry: true,
                  },
                ),
              )
              .then((t) => e.dispatch((0, Ot.GL)(t)))
              .catch(console.error);
          }, 500);
          x = Rs({
            onConnect: () => {
              u = null;
              d = i;
              f = y(d);
              if (v && g) {
                w({
                  retry: true,
                });
              }
            },
            onDisconnect: () => {
              d = n;
              u = Zs(n);
              f = y(u);
              if (v && g) {
                p = new Date();
                w();
              }
            },
            onChatMessage: (a) => {
              e.dispatch(Hs(true));
              if (a.messageType === Ee.u.ParticipantLeft) {
                const { items: t } = e.getState().chats.chats;
                const n =
                  t == null ? undefined : t.find((e) => e.id === a.chatId);
                if (
                  (n == null ? undefined : n.currentParticipantId) ===
                  a.participantId
                ) {
                  e.dispatch((0, Ot.Lf)(a.chatId));
                  return;
                }
              }
              t.delete(a.chatId);
              if (v) {
                k();
              } else {
                m = a;
              }
            },
            onChatStateChange: (e) => {
              if (v && g) {
                k();
              } else {
                m = e;
              }
            },
            onChatMessageDeleted: ({ chatId: a, messageId: n }) => {
              const { items: i, hasNextPage: r } = e.getState().chats.chats;
              const o = i == null ? undefined : i.find((e) => e.id === a);
              if (o && o.lastMessage?.id === n) {
                t.add(a);
                if (r) {
                  h.cancel();
                  b();
                } else {
                  b.cancel();
                  h();
                }
              }
            },
          });
          a.push(() => h.cancel());
          a.push(() => h.cancel());
          a.push(() => k.cancel());
          a.push(x);
        }
        return () => {
          qs.stop();
          a.forEach((e) => {
            try {
              e();
            } catch (e) {
              console.error("Error during chats init unsubscribe", e);
            }
          });
        };
      };
      const Ws = "ADD_CHAT_PARTICIPANT_ACTION";
      const Gs = "REMOVE_CHAT_PARTICIPANT_ACTION";
      const zs = (e) => ({
        type: Gs,
        ...e,
      });
      const $s = Ns();
      const Ks = (e) => {
        const t = e.getState();
        const a = [];
        const n = new Map();
        let s = () => {};
        if (t.features[h.A.WebsocketEnabled]) {
          s = Rs({
            onParticipantAction: ({
              chatId: t,
              participantId: a,
              state: s,
              durationMs: i,
            }) => {
              const r = `${t}_${a}`;
              if (s === "NONE") {
                e.dispatch(
                  zs({
                    chatId: t,
                    participantId: a,
                  }),
                );
                const s = n.get(r);
                if (s) {
                  clearTimeout(s);
                  n.delete(r);
                }
                return;
              }
              const { chats: o, chatData: l } = e.getState();
              const { items: c } = o.chats;
              const d = c == null ? undefined : c.find((e) => e.id === t);
              const u = l.chat.id === t;
              if (d || u) {
                e.dispatch(
                  ((h = {
                    chatId: t,
                    participantId: a,
                    action: s,
                    durationMs: i,
                  }),
                  {
                    type: Ws,
                    ...h,
                  }),
                );
                const o = n.get(r);
                if (o) {
                  clearTimeout(o);
                }
                const l = setTimeout(() => {
                  e.dispatch(
                    zs({
                      chatId: t,
                      participantId: a,
                    }),
                  );
                  n.delete(r);
                }, i);
                n.set(r, l);
              }
              var h;
            },
            onLastViewedMessageChange: ({
              chatId: t,
              lastViewedMessageId: a,
            }) => {
              (0, js.Z)();
              e.dispatch(
                (0, Ot.nR)({
                  updateFor: "opponent",
                  chatId: t,
                  messageId: a,
                }),
              );
            },
          });
          a.push(s);
        }
        return () => {
          $s.stop();
          a.forEach((e) => {
            try {
              e();
            } catch (e) {
              console.error("Error during chat data init unsubscribe", e);
            }
          });
        };
      };
      const Ys = ({
        store: e,
        push: t,
        websocketOrigin: a,
        withoutChatList: n,
      }) => {
        Ss.I.connect({
          origin: a,
        });
        const s = n ? undefined : Vs(e);
        const i = Bs(e, t);
        const r = Ks(e);
        const o = Ss.I.on("connect", () => {
          var e;
          (0, ha.AW)("@@debug/websocketConnected", {
            requestId:
              (e = window.globalServiceVars) === null ||
              e === undefined ||
              (e = e.chatik) === null ||
              e === undefined
                ? undefined
                : e.requestId,
          });
        });
        return () => {
          o();
          if (s != null) {
            s();
          }
          i();
          r();
        };
      };
      var Qs = a(70077);
      var Xs = a(91010);
      var Js = a(12114);
      const ei = (e) => {
        const t = (0, Xs.j)(e.url);
        if (
          (!t.hostname ||
            (typeof window != "undefined" &&
              t.hostname === window.location.hostname)) &&
          ((e.headers.common["X-Requested-With"] = "XMLHttpRequest"),
          !Js.L.get("_xsrf"))
        ) {
          const t = window.globalServiceVars.chatik.xsrfToken;
          if (t) {
            e.headers.common["X-Xsrftoken"] = t;
          } else {
            Jn.c.log(
              "out",
              new Error("XSRF not exist in either the cookie or the store"),
            );
          }
        }
        return e;
      };
      var ti;
      var ai;
      const ni = (0, a(96551).pushRequestIdToSentry)(
        (ti = window.globalServiceVars) === null ||
          ti === undefined ||
          (ti = ti.chatik) === null ||
          ti === undefined ||
          (ti = ti.features) === null ||
          ti === undefined
          ? undefined
          : ti.sentry_logging,
        (ai = window.globalServiceVars) === null ||
          ai === undefined ||
          (ai = ai.chatik) === null ||
          ai === undefined ||
          (ai = ai.features) === null ||
          ai === undefined
          ? undefined
          : ai.sentry_request_queue_limit,
      );
      const si = (e) => {
        var t;
        const a =
          e == null || (t = e.response) === null || t === undefined
            ? undefined
            : t.headers["x-request-id"];
        ni(a);
        return Promise.reject(e);
      };
      const ii = "axiosRequests";
      const ri = "errors";
      const oi = {
        [ri]: [],
        [ii]: 0,
      };
      if (typeof window != "undefined" && !window.qaState) {
        window.qaState = oi;
      }
      const li = oi;
      var ci = a(3428);
      (0, ci.ZP)(Qs.Z, {
        retries: 3,
        retryDelay: (e) => e ** 2 * 750,
      });
      const di = (e) => {
        if (!e.retry || e.retry === false) {
          return {
            ...e,
            "axios-retry": {
              retries: 0,
            },
          };
        }
        if (e.retry && !e["axios-retry"]) {
          const t = typeof e.retryCount == "number" ? e.retryCount : 3;
          return {
            ...e,
            "axios-retry": {
              retries: t,
            },
          };
        }
        return e;
      };
      const ui = (e) => {
        if (e.method !== "get") {
          return e;
        } else {
          return {
            ...e,
            params: {
              ...(e.params ?? {}),
              do_not_track_session_events: ha.vK,
            },
          };
        }
      };
      const hi = (e) => {
        const t = e.headers["x-request-id"];
        ni(t);
        return e;
      };
      const pi = new Map();
      m.Z.defaults.withCredentials = true;
      m.Z.interceptors.request.use(ui);
      m.Z.interceptors.request.use(ei);
      m.Z.interceptors.request.use(di);
      m.Z.interceptors.request.use((e) => {
        var t;
        if (!e.abort || !e.url) {
          return e;
        }
        const { url: a } = e;
        const n = new AbortController();
        if ((t = pi.get(a)) !== null && t !== undefined) {
          t.abort();
        }
        pi.set(a, n);
        return {
          ...e,
          signal: n.signal,
        };
      });
      m.Z.interceptors.request.use(Qs.t);
      m.Z.interceptors.response.use(
        (e) => {
          const { url: a } = (e == null ? undefined : e.config) ?? {};
          if (a && pi.get(a)) {
            pi.delete(a);
          }
          return e;
        },
        (e) => {
          const { url: a } = (e == null ? undefined : e.config) ?? {};
          if (a && pi.get(a)) {
            pi.delete(a);
          }
          return Promise.reject(e);
        },
      );
      m.Z.interceptors.response.use(hi, si);
      const mi = () => {
        const e = li[ii];
        li[ii] = e - 1;
      };
      m.Z.interceptors.request.use(
        (e) => {
          (() => {
            const e = li[ii];
            li[ii] = e + 1;
          })();
          return e;
        },
        (e) => Promise.reject(e),
      );
      m.Z.interceptors.response.use(
        (e) => {
          mi();
          return e;
        },
        (e) => {
          mi();
          return Promise.reject(e);
        },
      );
      var vi = a(63214);
      var gi = a(99102);
      var yi = a(20046);
      let fi = false;
      const wi = () => {
        if (fi) {
          return;
        }
        const e = (() => {
          if (!ha.vK) {
            return null;
          }
          let e = "xhh";
          e = window.location.hostname.replace("chatik.", "").includes(yi.D.ZP)
            ? "zp"
            : new URLSearchParams(location.search).get("platform") ===
                gi.Y.Talantix
              ? "talantix"
              : e;
          return e;
        })();
        fi = true;
        const t = (t) => {
          n.default.sendHHEvent("chat_front_performance", {
            origin: e,
            metricName: t.name,
            metricValue: t.value,
            navigationType: t.navigationType,
          });
        };
        (0, vi.mr)(t);
        (0, vi.a4)(t);
        (0, vi.NO)(t);
        (0, vi.mw)(t);
        (0, vi.Yn)(t);
      };
      const xi = "lux.error";
      const bi = ({ trls: e }) =>
        (0, f.jsx)("div", {
          className: "app-error",
          children: e[xi],
        });
      bi.displayName = "components/AppContainer/ErrorPage/ErrorPage";
      const ki = (0, de.Z)(bi);
      var Ci = a(13084);
      var Ii = a.n(Ci);
      var Si = a(52002);
      var Ei = a(21665);
      const Ti = (0, a(83307).createSlice)({
        name: "chatView",
        initialState: {},
        reducers: {
          setChatView: (e, t) => {
            e.view = t.payload.view;
            e.draggable = t.payload.draggable;
          },
        },
      });
      const { setChatView: _i } = Ti.actions;
      const ji = Ti.reducer;
      const Ni = (0, o.makeSetStoreField)("activeState");
      const Ai = (0, o.makeSetStoreField)("shouldCloseOnBack");
      const Ri = (0, o.makeSetStoreField)("applicantFirstContactChatId");
      const Mi = (0, o.makeSetStoreField)("parentWindowUrl");
      const Di = (0, o.makeSetStoreField)("parentScreenBreakpoint");
      const Pi = (0, o.makeSetStoreField)("chatIntegrationType");
      const Zi = "chatik.notification.viewerLoadingError";
      const Li = (0, de.Z)(() => {
        const e = (0, c.usePush)();
        const t = (0, r.useDispatch)();
        const a = (0, jn.T)();
        const s = (0, Si.Z)();
        const o = (0, i.useRef)(true);
        const d = (0, l.v)((e) => e.router.location.pathname);
        const u = (0, l.v)((e) => e.router.location.search);
        const h = (0, l.v)(({ chatIntegrationType: e }) => e);
        const p = (0, i.useCallback)(
          (a) => {
            if (!a) {
              return;
            }
            const {
              chatId: n,
              message: s,
              applicantFirstContact: i,
              hhtmFrom: r,
              hhtmFromLabel: l,
              metadata: c,
              view: d = "compact",
              draggable: u = true,
              currentUrl: h,
              botParams: p,
              parentScreenBreakpoint: m = null,
            } = a;
            window.globalServiceVars.chatik.analyticsParams.hhtmFrom = r;
            if (l) {
              window.globalServiceVars.chatik.analyticsParams.hhtmFromLabel = l;
            }
            if (c) {
              window.globalServiceVars.chatik.metadata = c;
            }
            const v = location.pathname;
            const g = n ? `/chat/${n}` : v;
            if (v !== g) {
              e(g, o.current ? undefined : p);
            }
            const y = [];
            if (n) {
              y.push(Ri(i ? n : null));
              if (s && typeof s == "string") {
                y.push(
                  (0, Ei.W9)({
                    text: s,
                  }),
                );
                y.push((0, Is.cK)(n));
              }
              if (s && typeof s != "string") {
                y.push((0, Ei.W9)(s));
                y.push((0, Is.UF)(n, s));
              }
            }
            if (h) {
              const e = new URL(h);
              e.search = "";
              y.push(Mi(e.toString()));
            }
            if (a.type === "widget") {
              y.push(
                _i({
                  view: d,
                  draggable: u,
                }),
              );
            }
            y.push(Pi(a.type));
            y.push(Ni(true));
            y.push(Di(m));
            o.current = false;
            t(y);
          },
          [t, e],
        );
        (0, i.useEffect)(() => (0, ha.A2)(), []);
        (0, i.useEffect)(() => (0, ha.Ld)("activate", p), [p]);
        (0, i.useEffect)(
          () =>
            (0, ha.Ld)("deactivate", () => {
              t(Ni(false));
              t(Ai(false));
            }),
          [t],
        );
        (0, i.useEffect)(() => (0, ha.Ld)("navigate", p), [p]);
        (0, i.useEffect)(() => {
          const e = (e) => {
            if (e.key === "Escape" || e.key === "Esc") {
              n.default.sendHHEventButtonClick("chat_list_close", {
                type: "ESC_CLICK",
              });
              (0, ha.AW)("close");
            }
          };
          window.addEventListener("keydown", e);
          return () => window.removeEventListener("keydown", e);
        }, []);
        (0, i.useEffect)(
          () =>
            (0, ha.Ld)("parentBreakpointChange", ({ breakpoint: e }) => {
              t(Di(e));
            }),
          [t],
        );
        (0, i.useEffect)(
          () =>
            (0, ha.Ld)("viewerImageLoadingError", () => {
              s({
                kind: "error",
                content: a[Zi],
                autoClose: true,
              });
            }),
          [s, a],
        );
        (0, i.useEffect)(
          () =>
            (0, ha.Ld)("viewerLogEvent", (e) => {
              Ii()({
                ...e,
                hhtmSource: "chat",
              });
            }),
          [h],
        );
        (0, i.useEffect)(
          () =>
            (0, ha.Ld)("viewerLogShown", (e) => {
              n.default.sendHHEvent("element_shown", {
                ...e,
                elementName: "chat_viewer",
                hhtmSource: "chat",
              });
            }),
          [h],
        );
        (0, i.useEffect)(() => {
          (0, ha.AW)("locationChange", {
            pathname: d,
            search: u,
          });
        }, [d, u]);
        return null;
      });
      var Fi = a(29838);
      const Ui = "chatik.title";
      const Oi = ({ trls: e }) =>
        (0, f.jsx)(Fi.Title, {
          children: e[Ui],
        });
      Oi.displayName = "components/AppContainer/PageHead/PageHead";
      const Bi = (0, de.Z)(Oi);
      let Hi = (function (e) {
        e.EmployerStates = "employerStates";
        e.VacancyIds = "vacancyIds";
        e.FilterUnread = "filterUnread";
        e.FilterHasTextMessage = "filterHasTextMessage";
        e.ShowFilters = "showFilters";
        return e;
      })({});
      const qi = (0, o.makeSetStoreField)("selectedEmployerStatesClusters");
      const Vi = (0, o.makeSetStoreField)("selectedVacanciesClusters");
      const Wi = (0, o.makeSetStoreField)("showOnlyUnread");
      const Gi = (0, o.makeSetStoreField)("showOnlyWithTextMessages");
      const zi = (0, o.makeSetStoreField)("navigationView");
      const $i = {
        [Hi.EmployerStates]: qi,
        [Hi.VacancyIds]: Vi,
        [Hi.FilterUnread]: Wi,
        [Hi.FilterHasTextMessage]: Gi,
        [Hi.ShowFilters]: (e) => zi(e ? H.Filters : H.ChatList),
      };
      const Ki = () => {
        const { isEmployer: e } = (0, V.Z)();
        const t = (0, r.useDispatch)();
        const a = (0, l.v)((e) => e.hhid);
        (0, i.useLayoutEffect)(() => {
          if (!a) {
            return;
          }
          const n = `${X}${a}`;
          const s = Q.L.get(n);
          if (!s && e) {
            t(Gi(true));
            return;
          }
          if (!s) {
            return;
          }
          const i = JSON.parse(s);
          Object.entries(i).forEach(([e, a]) => {
            if (e in $i) {
              const n = ((e) => $i[e])(e);
              t(n(a));
            }
          });
        }, [t, a, e]);
      };
      const Yi = (0, o.makeSetStoreField)("activeState");
      const Qi = ({ children: e }) => {
        const t = (0, l.v)((e) => e.websocketOrigin);
        const a = (0, De.Z)();
        const { didCatch: n } = p();
        const s = (0, c.usePush)();
        const o = (0, r.useDispatch)();
        Cs();
        Ki();
        wi();
        const { name: d } = se();
        (0, i.useEffect)(() => {
          if (!ha.vK) {
            o(Yi(true));
          }
        }, [o]);
        (0, i.useLayoutEffect)(() => {
          o((0, Is.Ry)());
          document.body.classList.remove("magritte-old-layout");
        }, [o]);
        (0, i.useEffect)(() => {
          var e;
          if (ha.vK) {
            if ((e = window.top) !== null && e !== undefined) {
              e.postMessage(
                JSON.stringify({
                  name: "hhid",
                  data: a.getState().hhid,
                }),
                "*",
              );
            }
          }
          return Ys({
            store: a,
            push: s,
            websocketOrigin: t,
          });
        }, [a, s, t]);
        if (n) {
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(Bi, {}),
              (0, f.jsx)(ki, {}),
              ha.vK && (0, f.jsx)(Li, {}),
            ],
          });
        } else {
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(Bi, {}),
              ha.vK && (0, f.jsx)(Li, {}),
              (0, f.jsx)(bs, {
                singleColumnMode: d === j.x.List ? "navigation" : "content",
                children: e,
              }),
            ],
          });
        }
      };
      Qi.displayName = "components/AppContainer/index/AppContainer";
      Ji = Qi;
      const Xi = (e) =>
        (0, f.jsx)(_, {
          children: (0, f.jsx)(Ji, {
            ...e,
          }),
        });
      var Ji;
      let er = (function (e) {
        e.SpoilerChat = "SpoilerChat";
        e.InlineChat = "InlineChat";
        return e;
      })({});
      var tr = a(40510);
      var ar = a(60186);
      var nr = a(16637);
      var sr = a(75539);
      var ir = a(7563);
      var rr = a(95983);
      var or = a(55750);
      var lr = a(31818);
      var cr = a(69441);
      var dr = a(99222);
      var ur = a(20446);
      var hr = a(26442);
      var pr = a(29801);
      var mr = a(71473);
      const vr = "dialog-header--QK3KJlfCnYUxqnQ0";
      const gr = "dialog-title--zMb0q_ZHmRIOuY0u";
      const yr = "participant-info--UWx3IlTxEkN_PYez";
      const fr = "workflow-card-wrapper--KtWitl7XcZMEBnQU";
      const wr = "workflow-subtitle--RSGWfduXXwMH2jdW";
      const xr = "chatik.inlineChat.workflowCard.title";
      const br = "chatik.inlineChat.workflowCard.action";
      const kr = {
        [Le.H.DiscardByApplicant]:
          "workflowCard.negotiations.states.discardByApplicant",
        [Le.H.DiscardByEmployer]:
          "workflowCard.negotiations.states.discardByEmployer.softForm",
        [Le.H.DiscardNoInteraction]:
          "workflowCard.negotiations.states.discardNoInteraction",
        [Le.H.DiscardToOtherVacancy]:
          "workflowCard.negotiations.states.discardToOtherVacancy",
        [Le.H.DiscardVacancyClosed]:
          "workflowCard.negotiations.states.discardVacancyClosed",
        [Le.H.Assesment]: "workflowCard.negotiations.states.assessment",
        [Le.H.Consider]: "workflowCard.negotiations.states.consider",
        [Le.H.Hired]: "workflowCard.negotiations.states.hired",
        [Le.H.Interview]: "workflowCard.negotiations.states.interview",
        [Le.H.Offer]: "workflowCard.negotiations.states.offer",
        [Le.H.PhoneInterview]:
          "workflowCard.negotiations.states.phone_interview",
        [Le.H.Response]: "workflowCard.negotiations.states.response",
      };
      const Cr = ({ trls: e }) => {
        const t = (0, mr.Z)();
        const a = (0, l.v)(Ze.Fq);
        if (a != null && a.currentEmployerState) {
          return (0, f.jsx)("div", {
            className: fr,
            children: (0, f.jsx)(_a.Z, {
              stretched: true,
              padding: 12,
              borderRadius: 16,
              borderWidth: "default",
              children: (0, f.jsxs)(Yt.b, {
                right: t
                  ? (0, f.jsx)(mn.r, {
                      Element: "button",
                      onClick: () => {
                        window.dispatchEvent(
                          new CustomEvent("Inline-Chat-ChangeTopic"),
                        );
                      },
                      "data-qa": "inline-chat-change-topic-button",
                      children: e[br],
                    })
                  : undefined,
                children: [
                  (0, f.jsx)(Xt.j, {
                    children: e[xr],
                  }),
                  (0, f.jsx)(Xt.j, {
                    type: "subtitle",
                    children: (0, f.jsxs)("div", {
                      className: wr,
                      children: [
                        (0, f.jsx)(le.T6B, {
                          initialColor: "secondary",
                        }),
                        e[kr[a.currentEmployerState]],
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        } else {
          return null;
        }
      };
      Cr.displayName =
        "InlineChat/DialogHeader/WorkflowCard/WorkflowCardComponent";
      const Ir = (0, de.Z)(Cr);
      const Sr = ({ withCall: e, withClose: t, withComments: a }) => {
        const n = (0, l.v)(({ chatData: e }) => e.display);
        const s = (0, l.v)(({ chatData: e }) => {
          return e.chat?.ownerViolatesRules;
        });
        const r = (0, l.v)(({ chatData: e }) => {
          return e.chat?.subType;
        });
        const o = (0, l.v)(({ chatData: e }) => {
          return e.chat?.onlineUntilTime;
        });
        const { isApplicant: c } = (0, V.Z)();
        const d = (0, hr.Z)();
        const u = c ? n.subtitle : n.title;
        const h = s || !u;
        const [p, m] = (0, i.useState)(false);
        const v = (0, i.useRef)(null);
        const g = () => {
          m(false);
        };
        const y = (0, f.jsxs)("div", {
          className: yr,
          children: [
            (0, f.jsx)(da.x, {
              typography: "subtitle-1-semibold",
              maxLines: 1,
              children: n.title,
            }),
            (0, f.jsx)(ur.Y, {
              online:
                !h &&
                (r === "GENAI" || (!!o && (0, Ne.Dp)(o) === Ne.$r.ONLINE)),
            }),
          ],
        });
        const w = (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsxs)(lr.q, {
              default: 4,
              children: [
                e &&
                  (0, f.jsx)(le.PdJ, {
                    "data-qa": "inline-chat-call-button",
                    padding: 8,
                    onClick: () => {
                      window.dispatchEvent(new CustomEvent("Inline-Chat-Call"));
                    },
                  }),
                a &&
                  (0, f.jsx)(le.sRI, {
                    "data-qa": "inline-chat-open-comments",
                    padding: 8,
                    onClick: () => {
                      window.dispatchEvent(
                        new CustomEvent("Inline-Chat-OpenComments"),
                      );
                    },
                  }),
                (0, f.jsx)(le.yRg, {
                  ref: v,
                  "data-qa": "inline-chat-context-menu-activator",
                  padding: 8,
                  onClick: () => {
                    m((e) => !e);
                  },
                }),
                t &&
                  (0, f.jsx)(le.Cs7, {
                    "data-qa": "inline-chat-close-button",
                    padding: 8,
                    onClick: () => {
                      window.dispatchEvent(
                        new CustomEvent("Inline-Chat-CloseMF"),
                      );
                    },
                  }),
              ],
            }),
            (0, f.jsx)(cr.S, {
              visible: p,
              onClose: g,
              dropProps: {
                placement: "bottom-right",
                activatorRef: v,
                maxWidth: 388,
              },
              children: (0, f.jsx)(dr.Z, {
                chatId: d,
                view: "plain",
                close: g,
                hiddenOperations: [pr.Ru.LeaveChat],
              }),
            }),
          ],
        });
        return (0, f.jsxs)("div", {
          className: vr,
          children: [
            (0, f.jsxs)("div", {
              className: gr,
              children: [y, w],
            }),
            (0, f.jsx)(Ir, {}),
          ],
        });
      };
      Sr.displayName = "InlineChat/DialogHeader/index/DialogHeaderComponent";
      const Er = (0, de.Z)(Sr);
      var Tr = a(76679);
      var _r = a(67833);
      const jr = (e, t) => {
        const a = (0, De.Z)();
        const n = (0, hr.Z)();
        (0, i.useEffect)(() => {
          if (e) {
            (0, _r.Z)(
              (0, Tr.Z)({
                routeName: j.x.Chat,
                state: a.getState(),
                chatId: n,
                ...(t || {}),
              }),
            );
          }
        }, [a, n, e, t]);
      };
      const Nr = "inline-chat--ha7XNWPi4uUV7jjP";
      const Ar = "not-found-screen-wrapper--nGa8ZWm3_8QGIaKE";
      const Rr = "not-allowed-warning--ndLauWXz5_IBLBTs";
      const Mr = "chat-layout--PihgOKpxy4gSlfbS";
      const Dr = (0, o.makeSetStoreField)("activeState");
      const Pr = (0, o.makeSetStoreField)("inlineChatId");
      const Zr = () => {
        var e;
        const t = (0, r.useDispatch)();
        const a = (0, De.Z)();
        const n = (0, c.usePush)();
        const s = (0, l.v)((e) => e.websocketOrigin);
        const o = (0, l.v)(({ chatData: e }) => e.forceReplacedId);
        const d = (0, l.v)(
          ({ chatData: e }) => e.chatStates.writeMessageState.allowed,
        );
        const u = (0, l.v)(({ chatData: e }) => e);
        const h = (0, l.v)((e) => e.inlineChatId);
        const p = (0, l.v)(({ editMessage: e }) =>
          Boolean(e == null ? undefined : e.id),
        );
        const m = (0, l.v)((e) => e.isSudo);
        const [v, g] = (0, i.useState)();
        const [y, w] = (0, i.useState)(null);
        const x = (0, i.useRef)(null);
        const b = (0, i.useRef)(null);
        const k = u == null ? undefined : u.error;
        (0, rr.Z)();
        const { renderOverlayScreen: C, handleDrag: I } = (0, ir.Z)();
        const { isEmployer: S } = (0, V.Z)();
        const { chatStates: E } = u;
        const T = E.sendFileState.allowed;
        const _ = !p && !m && S;
        const j =
          (u == null || (e = u.chat) === null || e === undefined
            ? undefined
            : e.id) === h ||
          (!!k && k.chatId === h);
        const N = (0, or.M)();
        jr(j, v);
        (0, i.useEffect)(() => {
          const e = new AbortController();
          t(Dr(true));
          window.dispatchEvent(new CustomEvent("Inline-Chat-Ready"));
          const a = {
            signal: e.signal,
          };
          window.addEventListener(
            "Inline-Chat-OpenChat",
            (e) => {
              t(Pr(e.detail.chatId));
              g(e.detail.analyticsParams);
            },
            a,
          );
          window.addEventListener(
            "Inline-Chat-ActionsParams",
            (e) => {
              w(e.detail);
            },
            a,
          );
          return () => {
            e.abort("unmount");
          };
        }, [t]);
        (0, i.useEffect)(() => {
          if (j) {
            window.dispatchEvent(new CustomEvent("Inline-Chat-ChatLoaded"));
            t((0, Es.mi)(Date.now()));
          }
        }, [t, j]);
        (0, i.useEffect)(
          () =>
            Ys({
              store: a,
              push: n,
              websocketOrigin: s,
              withoutChatList: true,
            }),
          [s, n, a],
        );
        if ((k == null ? undefined : k.code) === "NOT_FOUND") {
          return (0, f.jsx)("div", {
            className: A()(Nr, Ar),
            children: (0, f.jsx)(nr.Z, {}),
          });
        } else {
          return (0, f.jsxs)("div", {
            ref: x,
            className: Nr,
            onDragEnter: T ? I : undefined,
            children: [
              (0, f.jsxs)("div", {
                className: Mr,
                children: [
                  (0, f.jsx)(Er, {
                    withClose: y == null ? undefined : y.withClose,
                    withCall: y == null ? undefined : y.withCall,
                    withComments: y == null ? undefined : y.withComments,
                  }),
                  (0, f.jsx)(
                    ar.j,
                    {
                      scrollWrapperRef: b,
                    },
                    o,
                  ),
                  d
                    ? (0, f.jsx)(tr.x, {
                        enablePreview: true,
                        enableLinkPreview: true,
                        scrollWrapperRef: b,
                        borderScrollValue: 16,
                        onChange: _ ? N : undefined,
                      })
                    : (0, f.jsx)(sr.Z, {
                        className: Rr,
                      }),
                ],
              }),
              C(),
              (0, f.jsx)(ps.Z, {}),
            ],
          });
        }
      };
      Zr.displayName = "proxyComponents/InlineChat/index/InlineChatComponent";
      const Lr = (0, de.Z)(Zr);
      var Fr = a(68031);
      var Ur = a(43952);
      var Or = a.n(Ur);
      var Br = a(4918);
      var Hr = a.n(Br);
      var qr = a(45418);
      var Vr = a(65526);
      var Wr = a(59343);
      var Gr = a(17938);
      var zr = a(29725);
      var $r = a(86918);
      const Kr = "spoiler-chat--jbptEqKYvDgN7DZG";
      const Yr = "scroll-wrapper--UL_FZy6wtjEcb4yz";
      const Qr = "not-allowed-warning--QhqyMqj8GEzOQwKM";
      const Xr = "vacancyresponse.dialog.openChat";
      const Jr = "vacancyresponse.dialog.moreUnreadMessages";
      const eo = {
        one: "vacancyresponse.dialog.undearMessage.one",
        some: "vacancyresponse.dialog.undearMessage.some",
        many: "vacancyresponse.dialog.undearMessage.some",
      };
      const to = ({ trls: e }) => {
        var t;
        const a = (0, r.useDispatch)();
        const { userType: n } = (0, V.Z)();
        const s = (0, De.Z)();
        const o = (0, l.v)(({ isSudo: e }) => e);
        const c = (0, l.v)(({ spoilerChatUrl: e }) => e);
        const { renderOverlayScreen: d, handleDrag: u } = (0, ir.Z)({
          isSpoiler: true,
        });
        const h = (0, l.v)(({ displayType: e }) => e);
        const p = (0, l.v)(
          ({ chatData: e }) => e.chatStates.writeMessageState.allowed,
        );
        const v = (0, l.v)(({ chatData: e }) => e);
        const g = (0, l.v)((e) => (0, $r.t)(e, v.chat.id));
        const y = (0, l.v)((e) => e.quickReplies.visible);
        const w = (0, i.useRef)(null);
        const x = (0, i.useRef)(null);
        const { sendMessageImmediately: b, onQuickReply: k } = (0, zr.ZP)();
        const C = Boolean(
          (t = v.chatStates) === null ||
            t === undefined ||
            (t = t.sendFileState) === null ||
            t === undefined
            ? undefined
            : t.allowed,
        );
        const {
          messages: { items: I },
          id: S,
          unreadCount: E,
        } = v.chat;
        (0, Vr.Z6)(v.chat.id, I);
        (0, i.useEffect)(() => {
          Or()(
            (0, Tr.Z)({
              routeName: j.x.Chat,
              chatId: S,
              state: s.getState(),
            }),
          );
          const e = I[I.length - 1];
          if (e) {
            (async (e, t) => {
              try {
                await m.Z.post("/chatik/api/mark_read", {
                  chatId: e,
                  messageId: t,
                });
              } catch (e) {
                return null;
              }
            })(S, e.id);
          }
        }, [a, s, S]);
        const T = (0, i.useCallback)(
          (e) => {
            if (o) {
              e.preventDefault();
            }
            Hr()({
              unreadMessageCount: E,
            });
            window.dispatchEvent(
              new CustomEvent("Chatik-OpenChat", {
                detail: {
                  id: S,
                },
              }),
            );
          },
          [E, S, o],
        );
        (0, i.useEffect)(() => {
          a((0, Ts.L2)());
        }, [a]);
        (0, i.useEffect)(() => {
          if (h === qr.DisplayType.Mobile && w.current) {
            const e = w.current.getBoundingClientRect();
            if (window.innerHeight - e.top < 440) {
              w.current.scrollIntoView({
                block: "center",
              });
            }
          }
        }, [h]);
        const _ =
          E > 2
            ? (0, Re.WU)(e[Jr], {
                "{0}": E >= 100 ? "99+" : E - 2,
                "{1}": (0, Oe.Z)(E - 2, [e[eo.one], e[eo.some], e[eo.many]]),
              })
            : e[Xr];
        const N = (e) => {
          b({
            text: e,
          });
        };
        return (0, f.jsxs)("div", {
          ref: w,
          className: Kr,
          style: {
            "--spoiler-max-height": "440px",
          },
          onDragEnter: C ? u : undefined,
          children: [
            (0, f.jsx)("div", {
              ref: x,
              className: Yr,
              children: (0, f.jsxs)("div", {
                children: [
                  (0, f.jsx)(_t.z, {
                    "data-qa": "chatik-spoiler-open-button",
                    size: "small",
                    mode: "tertiary",
                    style: "accent",
                    Element: o ? "a" : "button",
                    href: o ? c : undefined,
                    onClick: T,
                    children: _,
                  }),
                  I.slice(-2).map((e, t, a) =>
                    (0, f.jsx)(
                      Wr.Z,
                      {
                        message: e,
                        prevMessage: a[t - 1],
                        nextMessage: a[t + 1],
                        showUnreadMessagesPlate: false,
                        userType: n,
                        sendTextMessage: N,
                        hideTextButtons: true,
                        isSpoiler: true,
                      },
                      e.id,
                    ),
                  ),
                  (0, f.jsxs)(Fr.Z, {
                    duration: 200,
                    height: y ? "auto" : 0,
                    children: [
                      (0, f.jsx)(Ka.X, {
                        default: 16,
                      }),
                      (0, f.jsx)(Gr.Z, {
                        replies: g,
                        handleReplyClick: k,
                        chatId: S,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            p
              ? (0, f.jsx)(tr.x, {
                  scrollWrapperRef: x,
                  borderScrollValue: 16,
                })
              : (0, f.jsx)(sr.Z, {
                  className: Qr,
                }),
            d(),
          ],
        });
      };
      to.displayName = "proxyComponents/SpoilerChat/index/SpoilerChatComponent";
      const ao = (0, de.Z)(to);
      const no = {
        [er.SpoilerChat]: ao,
        [er.InlineChat]: Lr,
      };
      const so = () => {
        const e = (0, l.v)(({ request: e }) => e);
        const { url: t, pageName: a } = e;
        if (((e) => e.includes("preload=1"))(t) || !((e) => e in no)(a)) {
          return null;
        }
        const n = no[a];
        return (0, f.jsx)(T, {
          children: (0, f.jsx)(n, {}),
        });
      };
      so.displayName = "src/proxyComponents/index/ProxyComponents";
      const io = so;
      var ro = a(70249);
      var oo = a(39012);
      var lo = a(28691);
      var co = a(74566);
      var uo = a(96100);
      var ho = a(35523);
      const po = [
        {
          path: j.n[j.x.List],
          name: j.x.List,
          component: lo.Z,
          exact: true,
        },
        {
          path: j.n[j.x.SupportChat],
          name: j.x.SupportChat,
          component: uo.Z,
          exact: true,
        },
        {
          path: j.n[j.x.Chat],
          name: j.x.Chat,
          component: ro.Z,
          exact: true,
        },
        {
          path: j.n[j.x.ChatParticipants],
          name: j.x.ChatParticipants,
          component: oo.Z,
          exact: true,
        },
        {
          path: j.n[j.x.Workflow],
          name: j.x.Workflow,
          component: ho.Z,
          exact: true,
        },
        {
          path: j.n[j.x.NotFound],
          name: j.x.NotFound,
          component: co.Z,
          exact: true,
        },
      ];
      var mo = a(1046);
      var vo = a(18241);
      var go = a(35203);
      const yo = (e, t, a) => {
        return (
          e.length === t.length &&
          e[0]?.[a] === t[0]?.[a] &&
          e[e.length - 1]?.[a] === t[t.length - 1]?.[a]
        );
      };
      const fo = (e) => typeof e == "object" && e !== null;
      const wo = (e, t, a = [], n = false) => {
        const s = a.length ? a : Object.keys(e ?? {});
        const i = a.length ? a : Object.keys(t ?? {});
        return (
          s.length === i.length &&
          s.every((a) => {
            const s = e[a];
            const i = t[a];
            if (n && fo(s) && fo(i)) {
              return wo(s, i, [], n);
            } else {
              return s === i;
            }
          })
        );
      };
      const xo = (e, t) =>
        e.length === t.length && e.every((e, a) => e === t[a]);
      var bo = a(57860);
      const ko = {
        initialState: {
          chat: {
            id: 0,
            messages: {
              items: [],
              hasMore: false,
            },
            type: "NEGOTIATION",
            notificationEnabled: false,
            unreadCount: 0,
            currentParticipantId: undefined,
            writePossibility: {
              name: pr.sZ.DisabledForApplicant,
            },
            participantsIds: [],
            resources: {},
            pinned: false,
            operations: {
              enabled: [],
            },
          },
          videos: [],
          display: {
            title: "",
            subtitle: "",
          },
          chatStates: {
            writeMessageState: {
              allowed: false,
              reason: null,
            },
            sendFileState: {
              allowed: false,
            },
          },
          suggestions: {
            uuid: "",
            suggestionOptions: {
              options: [],
            },
          },
          missingResources: {
            resumes: {},
          },
          markAsRemovedMessages: {},
          hasMessagesWithTextButtons: false,
        },
        reducerMap: {
          [bo.cE]: (0, vo.Uy)((e, { chatId: t, enabledOperations: a }) => {
            if (e.chat.id === t) {
              e.chat.operations.enabled = a;
            }
          }),
          [go.t4]: (0, vo.Uy)(
            (e, { chatId: t, messageId: a, text: n, lastChangeTime: s }) => {
              if (e.chat.id !== t) {
                return;
              }
              const i = e.chat.messages.items.find(({ id: e }) => e === a);
              if (i) {
                if ((i.text && i.text !== n) || s) {
                  i.lastChangeTime = s ?? new Date().toString();
                }
                i.text = n;
              }
            },
          ),
          [bo.gc]: (0, vo.Uy)((e, { messageFakeId: t, realMessage: a }) => {
            const n = e.chat.messages.items;
            let s = -1;
            let i = -1;
            n.forEach((e, n) => {
              if (e.id === t) {
                s = n;
              }
              if (e.id === a.id) {
                i = n;
              }
            });
            if (i !== -1 && s !== -1) {
              n.splice(s, 1);
            } else if (s !== -1) {
              n[s] = a;
            }
            e.chat.currentParticipantId ||= a.participantId;
          }),
          [bo.qZ]: (0, vo.Uy)((e, { chatId: t, messageId: a }) => {
            if (e.chat.id !== t) {
              return;
            }
            const n = e.chat.messages.items.findIndex(({ id: e }) => e === a);
            if (n !== -1) {
              e.chat.messages.items.splice(n, 1);
            }
          }),
          [bo.b7]: (0, vo.Uy)((e, { chatId: t, messageId: a }) => {
            if (e.chat.id === t) {
              e.markAsRemovedMessages = e.markAsRemovedMessages ?? {};
              e.markAsRemovedMessages[a] = true;
            }
          }),
          [bo.Ds]: (0, vo.Uy)((e, { chatId: t, message: a }) => {
            if (e.chat.id === t) {
              e.chat.messages.items.push(a);
            }
          }),
          [go.Hs]: (0, vo.Uy)((e, { chatId: t, notificationEnabled: a }) => {
            if (e.chat.id === t) {
              e.chat.notificationEnabled = a;
            }
          }),
          [bo.Og]: (0, vo.Uy)((e, { newState: t, params: a }) => {
            if (!t) {
              return;
            }
            if (e.chat.id !== t.chat.id) {
              return t;
            }
            e.chat.currentParticipantId = t.chat.currentParticipantId;
            e.chat.messages.hasMore =
              t.chat.messages.hasMore && e.chat.messages.hasMore;
            e.chat.unreadCount = t.chat.unreadCount;
            e.chat.onlineUntilTime = t.chat.onlineUntilTime;
            e.chat.lastActivityTime = t.chat.lastActivityTime;
            const n = e.chat.messages.items || [];
            const s = t.chat.messages.items;
            const i = t.chat.blockInfo;
            e.hasMessagesWithTextButtons ||= s.some((e) => {
              var t;
              if (
                (t = e.actions) === null ||
                t === undefined ||
                (t = t.text_buttons) === null ||
                t === undefined
              ) {
                return undefined;
              } else {
                return t.length;
              }
            });
            if (wo(e.chat.blockInfo || {}, t.chat.blockInfo || {})) {
              if (!i && !yo(n.slice(-s.length), s, "id")) {
                e.chat.messages.items = (0, Pe.NY)(n, s);
              }
            } else {
              e.chat.blockInfo = t.chat.blockInfo;
              e.chat.messages.items = s;
              e.forceReplacedId = Date.now();
            }
            if (!xo(e.chat.participantsIds, t.chat.participantsIds)) {
              e.chat.participantsIds = t.chat.participantsIds;
            }
            if (!xo(e.chat.operations.enabled, t.chat.operations.enabled)) {
              e.chat.operations.enabled = t.chat.operations.enabled;
            }
            if (!wo(e.display, t.display, ["title", "icon"])) {
              e.display = {
                ...e.display,
                ...t.display,
              };
            }
            if (
              e.chatStates.writeMessageState.allowed !==
                t.chatStates.writeMessageState.allowed ||
              e.chatStates.sendFileState.allowed !==
                t.chatStates.sendFileState.allowed
            ) {
              e.chatStates = {
                ...e.chatStates,
                ...t.chatStates,
              };
            }
            if (
              (!e.suggestions && t.suggestions) ||
              (a.shouldUpdateSuggestions &&
                !wo(e.suggestions, t.suggestions, ["uuid"]))
            ) {
              e.suggestions = t.suggestions;
            }
            if (!wo(e.missingResources, t.missingResources, [], true)) {
              e.missingResources = {
                ...e.missingResources,
                ...t.missingResources,
              };
            }
            e.error = undefined;
          }),
          [bo.ov]: (0, vo.Uy)((e, { chatId: t }) => {
            if (e.chat.id === t) {
              e.suggestions = {
                uuid: "",
                suggestionOptions: {
                  options: [],
                },
              };
            }
          }),
          [bo.Gl]: (0, vo.Uy)((e, { error: t }) => {
            e.error = t;
          }),
          [go.oz]: (0, vo.Uy)(
            (e, { updateFor: t, chatId: a, messageId: n }) => {
              if (e.chat.id === a) {
                if (t === "currentUser") {
                  e.chat.lastViewedByCurrentUserMessageId = n;
                } else {
                  e.chat.lastViewedByOpponentMessageId = n;
                }
              }
            },
          ),
          [bo.rC]: (0, vo.Uy)((e, t) => {
            e.forceReplacedId = t.id;
          }),
        },
      };
      var Co = a(475);
      const Io = {
        text: "",
      };
      const So = {
        initialState: Io,
        reducerMap: {
          [Co.q$]: (0, vo.Uy)((e, { text: t }) => {
            e.text = t;
            e.metadata = e.metadata ?? {};
            e.metadata.manuallyEnteredData = true;
          }),
          [Co.pZ]: (0, vo.Uy)((e, { text: t, metadata: a }) => {
            e.text = t;
            const s = e.metadata?.manuallyEnteredData;
            e.metadata = {
              ...a,
              manuallyEnteredData: s,
            };
          }),
          [Co.Qu]: (0, vo.Uy)(() => Io),
          [Co.gF]: (0, vo.Uy)((e, t) => t.message),
        },
      };
      var Eo = a(42699);
      const To = (e, t, a) => {
        const n = e.reduce((e, t, n) => {
          e.set(t[a], n);
          return e;
        }, new Map());
        t.forEach((t) => {
          const s = n.get(t[a]);
          if (s !== undefined) {
            if (!wo(e[s], t, [], true)) {
              e[s] = t;
            }
          } else {
            e.push(t);
          }
        });
        return e;
      };
      const _o = (e, t) => {
        Object.entries(t).forEach(([t, a]) => {
          if (!wo(e[t], a, [], true)) {
            e[t] = a;
          }
        });
        return e;
      };
      const jo = {
        chats: {
          items: [],
          page: 0,
          perPage: 0,
          pages: 0,
          found: 0,
          hasNextPage: false,
        },
        chatsDisplayInfo: {},
        wasNotRequested: true,
      };
      const No = {
        initialState: jo,
        reducerMap: {
          [go.t4]: (0, vo.Uy)((e, { chatId: t, messageId: a, text: n }) => {
            const s = e.chats.items.find(({ id: e }) => e === t);
            if (s != null && s.lastMessage && s.lastMessage.id === a) {
              s.lastMessage.text = n;
            }
          }),
          [go.bs]: (0, vo.Uy)((e, { chatId: t }) => {
            const a = e.chats.items.findIndex(({ id: e }) => e === t);
            if (a !== -1) {
              e.chats.items.splice(a, 1);
            }
          }),
          [go.Hs]: (0, vo.Uy)((e, { chatId: t, notificationEnabled: a }) => {
            const n = e.chats.items.find(({ id: e }) => e === t);
            if (n) {
              n.notificationEnabled = a;
            }
          }),
          [bo.Og]: (0, vo.Uy)((e, { newState: t }) => {
            if (!t) {
              return;
            }
            const a = e.chats.items.find(({ id: e }) => e === t.chat.id);
            if (!a) {
              return;
            }
            const n = t.chat.messages.items;
            const s = n[n.length - 1];
            const { lastMessage: i } = a;
            if (
              !!s &&
              s.type === Ee.u.Simple &&
              (!i ||
                !!(0, Eo.Z)(new Date(s.creationTime), new Date(i.creationTime)))
            ) {
              a.lastMessage = s;
            }
          }),
          [go.Ec]: (0, vo.Uy)(() => jo),
          [go.$Y]: (0, vo.Uy)((e, { newState: t }) => {
            if (t) {
              e.chats.found = t.chats.found ?? e.chats.found;
              e.chats.pages = t.chats.pages ?? e.chats.pages;
              e.chats.perPage = t.chats.perPage ?? e.chats.perPage;
              e.wasNotRequested = t.wasNotRequested;
              if (t.chats.page >= e.chats.page) {
                e.chats.hasNextPage = t.chats.hasNextPage;
                e.chats.page = t.chats.page;
              }
              _o(e.chatsDisplayInfo, t.chatsDisplayInfo);
              To(e.chats.items, t.chats?.items ?? [], "id");
            }
          }),
          [go.U]: (0, vo.Uy)((e, { ids: t }) => {
            e.chats.items = e.chats.items.filter(({ id: e }) => !t.includes(e));
          }),
          [go.oz]: (0, vo.Uy)(
            (e, { updateFor: t, chatId: a, messageId: n }) => {
              const s = e.chats.items.find(({ id: e }) => e === a);
              if (s) {
                if (t === "opponent") {
                  s.lastViewedByOpponentMessageId = n;
                } else {
                  s.lastViewedByCurrentUserMessageId = n;
                }
              }
            },
          ),
        },
      };
      var Ao = a(65442);
      var Ro = a(9362);
      var Mo = a(52855);
      const Do = {
        initialState: {
          screenShown: false,
          result: {},
        },
        reducerMap: {
          [Mo.H.OPEN_SCREEN]: (0, vo.Uy)((e) => ({
            ...e,
            screenShown: true,
          })),
          [Mo.H.CLOSE_SCREEN]: (e) => ({
            ...e,
            screenShown: false,
            currentUrl: undefined,
            messageId: undefined,
          }),
          [Mo.H.SET_CURRENT_URL]: (e, { currentUrl: t }) => ({
            ...e,
            currentUrl: (0, Ro.Z)(t),
          }),
          [Mo.H.SET_RESULT]: (e, { result: t, url: a }) => ({
            ...e,
            result: {
              ...e.result,
              [(0, Ro.Z)(a)]: t,
            },
          }),
          [Mo.H.SET_MESSAGE_ID]: (e, { messageId: t }) => ({
            ...e,
            messageId: t,
          }),
        },
      };
      var Po = a(7659);
      const Zo = {
        initialState: {},
        reducerMap: {
          [Po.b]: (0, vo.Uy)((e, { previews: t }) => {
            if (t) {
              t.forEach((t) => {
                e[t.url] = t;
              });
            }
          }),
          [Po.n]: (0, vo.Uy)((e, { urls: t }) => {
            t.forEach((t) => {
              delete e[t];
            });
          }),
        },
      };
      var Lo = a(115);
      var Fo = a(85322);
      const Uo = "chatik-message-drafts";
      const Oo = () => {
        const e = Fo.Y.getItem(Uo) || "{}";
        try {
          return JSON.parse(e);
        } catch (e) {
          return {};
        }
      };
      const Bo = (e) => Fo.Y.setItem(Uo, JSON.stringify(e));
      const Ho = {
        initialState: Oo(),
        reducerMap: {
          [Lo.gh]: (e, { chatId: t, message: a }) => {
            const r = e[t];
            const o = (r == null ? undefined : r.metadata) ?? {};
            const l = {
              ...e,
              [t]: {
                ...(e[t] ?? {}),
                ...a,
                metadata: {
                  ...o,
                  ...(a.metadata ?? {}),
                },
              },
            };
            Bo(l);
            return l;
          },
          [Lo.P9]: (e, { chatId: t }) => {
            const a = Object.fromEntries(
              Object.entries(e).filter(([e]) => e !== `${t}`),
            );
            Bo(a);
            return a;
          },
          [Lo.kg]: () => Oo(),
        },
      };
      var qo = a(62953);
      const Vo = "chatik-notify-admin";
      const Wo = (() => {
        const e = Fo.Y.getItem(Vo) || "{}";
        try {
          return JSON.parse(e);
        } catch (e) {
          return {};
        }
      })();
      const Go = {
        initialState: Wo,
        reducerMap: {
          [qo.H.SAVE_NOTIFY_ADMIN]: (0, vo.Uy)(
            (e, { chatId: t, initTime: a }) => {
              e[t] = String(a);
              ((e) => {
                Fo.Y.setItem(Vo, JSON.stringify(e));
              })(e);
            },
          ),
          [qo.H.REMOVE_NOTIFY_ADMIN]: (0, vo.Uy)((e, { chatId: t }) => {
            delete e[String(t)];
          }),
        },
      };
      const zo = {
        initialState: {},
        reducerMap: {
          [Ws]: (0, vo.Uy)(
            (e, { chatId: t, participantId: a, action: n, durationMs: s }) => {
              e[t] ||= {};
              e[t][a] = {
                action: n,
                durationMs: s,
              };
            },
          ),
          [Gs]: (0, vo.Uy)((e, { chatId: t, participantId: a }) => {
            if (e[t]) {
              delete e[t][a];
              if (Object.keys(e[t]).length === 0) {
                delete e[t];
              }
            }
          }),
        },
      };
      var $o = a(33161);
      const Ko = {
        initialState: {
          data: {},
          visible: false,
        },
        reducerMap: {
          [$o.xW]: (0, vo.Uy)((e, { chatId: t, data: a }) => {
            var n;
            if ((n = e.data[t]) !== null && n !== undefined && n.isLoading) {
              e.data[t].isLoading = false;
            }
            if (!yo(e.data[t]?.quick_replies ?? [], a ?? [], "id")) {
              const n = e.data[t]?.message_actions ?? [];
              e.visible =
                Boolean(a == null ? undefined : a.length) || Boolean(n.length);
              e.data[t] = {
                isLoading: false,
                quick_replies: a,
                message_actions: n,
              };
            }
          }),
          [$o.KH]: (0, vo.Uy)((e, { chatId: t, messageActions: a }) => {
            e.data[t] ||= {
              isLoading: false,
              quick_replies: [],
              message_actions: [],
            };
            const s = e.data[t].quick_replies ?? [];
            const i = Boolean(s.length) || Boolean(a.length);
            e.visible = i;
            e.data[t].message_actions = a;
          }),
          [$o.i9]: (0, vo.Uy)((e, { chatId: t }) => {
            if (e.data[t]) {
              const n = e.data[t].quick_replies ?? [];
              e.data[t].message_actions = [];
              e.visible = Boolean(n.length);
            }
          }),
          [$o.Bh]: (0, vo.Uy)((e, { chatId: t }) => {
            if (e.data[t]) {
              const n = e.data[t].quick_replies ?? [];
              e.data[t].message_actions = n.filter((e) => !e.isMessageAction);
            }
          }),
          [$o.n9]: (0, vo.Uy)((e, { chatId: t, isLoading: a }) => {
            e.data[t] ||= {};
            e.data[t].isLoading = a;
          }),
          [$o.es]: (0, vo.Uy)((e, { visible: t }) => {
            e.visible = t;
          }),
        },
      };
      var Yo = a(37258);
      const Qo = {
        negotiation_topics: {},
        vacancies: {},
        employers: {},
        resumes: {},
        resumeHashById: {},
        participants: {},
        assessments: {},
        addresses: {},
        test_solutions: {},
      };
      const Xo = Object.keys(Qo);
      const Jo = {
        initialState: Qo,
        reducerMap: {
          [Yo.T]: (0, vo.Uy)((e, { resources: t }) => {
            Xo.forEach((a) => {
              if (!wo(e[a], t[a], [], true)) {
                e[a] = t[a];
              }
            });
          }),
        },
      };
      const el = {
        query: "",
        chats: {
          items: null,
        },
        chatsDisplayInfo: {},
      };
      const tl = {
        initialState: el,
        reducerMap: {
          [nn]: (0, vo.Uy)((e, { query: t }) => {
            e.query = t;
          }),
          [sn]: (0, vo.Uy)((e, t) => {
            var n;
            var i;
            e.chats = (t == null ||
            (n = t.searchedChats) === null ||
            n === undefined
              ? undefined
              : n.chats) ?? {
              items: null,
            };
            e.lastSearchedQuery = t.query;
            e.chatsDisplayInfo =
              (t == null || (i = t.searchedChats) === null || i === undefined
                ? undefined
                : i.chatsDisplayInfo) ?? {};
          }),
          [rn]: (0, vo.Uy)((e, t) => {
            var a;
            var i;
            var l;
            e.chats.nextFrom =
              t == null || (a = t.searchedChats) === null || a === undefined
                ? undefined
                : a.chats.nextFrom;
            e.lastSearchedQuery = t.query;
            _o(
              e.chatsDisplayInfo ?? {},
              (t == null || (i = t.searchedChats) === null || i === undefined
                ? undefined
                : i.chatsDisplayInfo) ?? {},
            );
            To(
              e.chats.items ?? [],
              ((l = t.searchedChats) === null ||
              l === undefined ||
              (l = l.chats) === null ||
              l === undefined
                ? undefined
                : l.items) ?? [],
              "id",
            );
          }),
          [an]: () => el,
        },
      };
      var al = a(43034);
      var nl = a(73956);
      const sl = {
        initialState: {
          files: {},
          uploadingProgress: {},
        },
        reducerMap: {
          [nl.d3]: (0, vo.Uy)((e, { chatId: t, files: a }) => {
            var s;
            e.files[t] = e.files[t] ?? [];
            if ((s = e.files[t]) !== null && s !== undefined) {
              s.push(...a);
            }
          }),
          [nl.qh]: (0, vo.Uy)((e, { chatId: t, fileId: a }) => {
            const n = (e.files[t] || []).findIndex(({ id: e }) => e === a);
            var s;
            if (n !== -1) {
              if ((s = e.files[t]) !== null && s !== undefined) {
                s.splice(n, 1);
              }
            }
          }),
          [nl.Rg]: (0, vo.Uy)((e, { chatId: t, file: a }) => {
            const n = e.files[t] || [];
            const s = n.findIndex(({ id: e }) => e === a.id);
            n[s] &&= Object.assign(n[s], a);
          }),
          [nl.x_]: (0, vo.Uy)((e, { chatId: t }) => {
            e.files[t] = [];
            e.uploadingProgress = {};
          }),
          [nl.Gf]: (0, vo.Uy)((e, { fileId: t, progress: a }) => {
            e.uploadingProgress[t] = a;
          }),
        },
      };
      var il = a(81764);
      const rl = {
        initialState: {},
        reducerMap: {
          [il.l]: (0, vo.Uy)((e, { uploadId: t, preview: a }) => {
            e[t] = a;
          }),
        },
      };
      const ol = {
        initialState: {
          serviceEnabled: true,
        },
        reducerMap: {},
      };
      const ll = {
        chatIntegrationType: (0, o.autoGeneratedReducer)(null),
        userType: (0, o.autoGeneratedReducer)(_e.Z.Anonymous),
        xsrfToken: (0, o.autoGeneratedReducer)(null),
        experiments: mo._1,
        chats: No,
        chatData: ko,
        resources: Jo,
        uploadedFiles: sl,
        uploadedFilesPreview: rl,
        linkPreviews: Zo,
        activeState: (0, o.autoGeneratedReducer)(false),
        chatListActiveState: (0, o.autoGeneratedReducer)(false),
        shouldCloseOnBack: (0, o.autoGeneratedReducer)(false),
        messageDrafts: Ho,
        editMessage: Ao.ZP,
        notifyAdmin: Go,
        clusterFiltersEnabled: (0, o.autoGeneratedReducer)(false),
        userId: (0, o.autoGeneratedReducer)(null),
        selectedVacanciesClusters: (0, o.autoGeneratedReducer)([]),
        selectedEmployerStatesClusters: (0, o.autoGeneratedReducer)([]),
        shouldReloadFiltersClusters: (0, o.autoGeneratedReducer)(false),
        navigationView: q,
        showOnlyUnread: (0, o.autoGeneratedReducer)(false),
        showOnlyWithTextMessages: (0, o.autoGeneratedReducer)(false),
        similarCounters: al.ZP,
        applicantFirstContactChatId: (0, o.autoGeneratedReducer)(null),
        hhid: (0, o.autoGeneratedReducer)(null),
        isSudo: (0, o.autoGeneratedReducer)(false),
        platform: gi.Z,
        chatView: ji,
        isThirdColumnShown: (0, o.autoGeneratedReducer)(false),
        parentScreenBreakpoint: (0, o.autoGeneratedReducer)(null),
        parentWindowUrl: (0, o.autoGeneratedReducer)(""),
        supportLocation: (0, o.autoGeneratedReducer)(""),
        linkCheck: Do,
        chatSendMessage: So,
        quickReplies: Ko,
        webcall: ol,
        spoilerChatUrl: (0, o.autoGeneratedReducer)(""),
        siteRoot: (0, o.autoGeneratedReducer)(""),
        isProxyPage: (0, o.autoGeneratedReducer)(null),
        topLevelSite: yi.Z,
        search: tl,
        viewer: (0, o.autoGeneratedReducer)(null),
        chatsParticipantActions: zo,
        inlineChatId: (0, o.autoGeneratedReducer)(null),
        isSpoiler: (0, o.autoGeneratedReducer)(false),
        isInlineChat: (0, o.autoGeneratedReducer)(false),
        inviteCoworkerModalVisible: (0, o.autoGeneratedReducer)(false),
        websocketOrigin: (0, o.autoGeneratedReducer)(""),
      };
      (0, n.initGetterAnalyticsParams)(() => {
        const e = window.globalServiceVars.chatik.analyticsParams;
        if (e.hhtmSource && e.hhtmSource !== "app") {
          return e;
        }
        const { name: t } = ne(window.location.pathname);
        const a = (0, pa.b)(t);
        return {
          ...window.globalServiceVars.chatik.analyticsParams,
          hhtmSource: a,
        };
      });
      const cl = () =>
        (0, s.ZP)({
          reducer: ll,
          routes: po,
          serviceName: "chatik",
          pageWrapper: Xi,
          proxyComponents: io,
          disableSpaMiddleware: true,
        });
    },
    20874: function (e, t, a) {
      a.r(t);
      a.d(t, {
        default: () => n,
      });
      (0, a(36676).Z)("chatik");
      const n = a(29798).Z;
    },
    73797: function (e, t, a) {
      a.d(t, {
        n: () => s,
        x: () => n,
      });
      let n = (function (e) {
        e.List = "chat_list";
        e.Chat = "chat";
        e.SupportChat = "support_chat";
        e.ChatParticipants = "chat_participants";
        e.Workflow = "workflow";
        e.NotFound = "not_found";
        return e;
      })({});
      const s = {
        [n.List]: ["/", "/chat"],
        [n.Chat]: "/chat/:chatId",
        [n.SupportChat]: "/chat/support",
        [n.ChatParticipants]: "/chat/:chatId/participants",
        [n.Workflow]: "/chat/:chatId/workflow/:state?",
        [n.NotFound]: "*",
      };
    },
    51531: function (e, t, a) {
      a.d(t, {
        Z: () => l,
      });
      var n = a(15698);
      var s = a(58342);
      var i = a(4201);
      const r = ({ avatarImage: e, isEmployer: t, isBlocked: a }) => {
        if (a) {
          return {
            mode: "icon",
            style: "secondary",
            icon: (0, i.jsx)(s.o4j, {
              initialColor: "secondary",
            }),
          };
        }
        if (e) {
          return {
            mode: e ? "image" : t ? "letters" : "placeholder",
            style: "color-1",
            image: e,
          };
        }
        if (t) {
          return {
            mode: "letters",
            style: "color-1",
          };
        } else {
          return {
            mode: "placeholder",
            placeholder: "city",
          };
        }
      };
      const o = ({ avatarImage: e, isEmployer: t, isBlocked: a, ...s }) =>
        (0, i.jsx)(n.q.Skeleton, {
          ...r({
            avatarImage: e,
            isEmployer: t,
            isBlocked: a,
          }),
          ...s,
        });
      o.displayName = "components/ChatAvatar/index/ChatAvatar";
      const l = o;
    },
    40510: function (e, t, a) {
      a.d(t, {
        x: () => tt,
      });
      var n = a(3891);
      var s = a.n(n);
      var i = a(48867);
      var r = a(45418);
      var o = a(84434);
      var l = a(77329);
      var c = a.n(l);
      var d = a(65442);
      var u = a(47400);
      var h = a(26442);
      const p = (e, t = "keydown") => {
        const a = (0, n.useRef)({});
        (0, n.useEffect)(() => {
          a.current = e;
        }, [e]);
        (0, n.useEffect)(() => {
          const e = (e) => {
            var t;
            const { current: n } = a;
            if ((t = n[e.code] || n[e.key]) !== null && t !== undefined) {
              t(e);
            }
          };
          document.addEventListener(t, e);
          return () => {
            document.removeEventListener(t, e);
          };
        }, [t]);
      };
      var m = a(48403);
      const v = ({ isInputEmpty: e, onEsc: t }) => {
        const a = (0, o.useDispatch)();
        const s = (0, i.v)(({ editMessage: e }) => e);
        const r = (0, i.v)(u._I);
        const l = (0, h.Z)();
        const v = (0, m.Z)();
        const g = typeof s.id == "number";
        p({
          Escape: (e) => {
            if (g && !v) {
              e.stopPropagation();
              a((0, d.Wx)());
              if (t != null) {
                t();
              }
            }
          },
        });
        return (0, n.useCallback)(
          (t) => {
            if (
              t.key === "ArrowUp" &&
              !g &&
              !v &&
              e &&
              r != null &&
              r.canEdit
            ) {
              a((0, d.Hd)(r.id, r.text ?? ""));
              c()({
                chatId: l,
                messageId: r.id,
                hhtmFromLabel: "keyboard",
              });
              const e = t.target;
              setTimeout(() => {
                e.selectionStart = e.selectionEnd = e.value.length;
              }, 0);
            }
          },
          [g, v, e, r, a, l],
        );
      };
      var g = a(29725);
      var y = a(85767);
      var f = a(70844);
      var w = a(63116);
      var x = a.n(w);
      var b = a(57545);
      var k = a(82489);
      var C = a(2840);
      var I = a(93873);
      var S = a(71495);
      var E = a(47997);
      var T = a(31065);
      var _ = a(63144);
      var j = a(66802);
      var N = a(58342);
      var A = a(89156);
      const R = "chat-input-preview--ajaqmEXBi4A54sFI";
      const M = "content--SuplhrOi8QIopjY6";
      const D = "left-icon--uUeH3oZq0HtDwy9v";
      var P = a(4201);
      const Z = {
        previewTitles: {
          editing: "chatik.message.actions.editing",
          "cover-letter": "chatik.message.actions.coverLetter.title",
          "link-preview": undefined,
        },
        coverLetterText: "chatik.message.actions.coverLetter.text",
        closeMessagePreview: "chatik.message.actions.closeMessagePreview",
      };
      const L = {
        "link-preview": N.Gvu,
        "cover-letter": N.GhD,
        editing: N.vvx,
      };
      const F = ({ trls: e, title: t, text: a, view: n, onClose: s }) => {
        const i = n ? Z.previewTitles[n] : undefined;
        const r = t || (i ? e[i] : undefined);
        const o =
          a || (n === "cover-letter" ? e[Z.coverLetterText] : undefined);
        const l = n ? L[n] : undefined;
        return (0, P.jsxs)("div", {
          "data-qa": "chat-input-preview",
          className: R,
          children: [
            l &&
              (0, P.jsx)("div", {
                className: D,
                children: (0, P.jsx)(l, {
                  initialColor: "accent",
                }),
              }),
            (0, P.jsxs)("div", {
              className: M,
              children: [
                r &&
                  (0, P.jsx)(j.x, {
                    style: "accent",
                    typography: "subtitle-3-semibold",
                    maxLines: 1,
                    children: r,
                  }),
                o &&
                  (0, P.jsx)(j.x, {
                    style: "secondary",
                    typography: "label-3-regular",
                    maxLines: 1,
                    children: o,
                  }),
              ],
            }),
            s &&
              (0, P.jsx)(N.Cs7, {
                "aria-label": e[Z.closeMessagePreview],
                padding: 8,
                onClick: s,
              }),
          ],
        });
      };
      F.displayName = "ChatInput/ChatInputPreview/index/ChatInputPreview";
      const U = (0, n.memo)((0, A.Z)(F));
      const O = "chat-text-area--taZWmhDL2kkGnj09";
      const B = "native-text-area--tGF4PGehBMQTQAaU";
      const H = (e) => `${e ?? 0}px`;
      const q = [
        "Esc",
        "Escape",
        "Enter",
        "PageUp",
        "PageDown",
        "Meta",
        "Alt",
        "Ctrl",
        "ArrowDown",
        "ArrowUp",
        "Control",
        "Shift",
      ];
      const V = (
        {
          value: e,
          maxLines: t,
          className: a,
          onFocus: s,
          onBlur: i,
          disabled: r,
          ...o
        },
        l,
      ) => {
        const [c, d] = (0, n.useState)(false);
        const [u, h] = (0, n.useState)(false);
        const p = (0, n.useRef)();
        const v = (0, m.Z)();
        (0, n.useEffect)(() => {
          if (v || r) {
            return;
          }
          const e = (e) => {
            const { key: a } = e;
            const n = e.target;
            const s = p.current;
            if (!n || !s) {
              return;
            }
            const i = document.getSelection()?.isCollapsed;
            if (
              !!a &&
              !q.includes(a) &&
              ((!a.startsWith("Arrow") && (!e.shiftKey || a !== "Shift")) ||
                !!i) &&
              (e.code !== "KeyC" ||
                (!e.ctrlKey && !e.metaKey) ||
                n.tagName === "INPUT") &&
              n !== s &&
              n.tagName !== "INPUT" &&
              n.tagName !== "TEXTAREA" &&
              !n.isContentEditable
            ) {
              ((
                e,
                t = {
                  force: false,
                  forcePlaceCaretAtEnd: false,
                },
              ) => {
                const { force: a, forcePlaceCaretAtEnd: n } = t;
                if (
                  (a || e !== document.activeElement) &&
                  (e instanceof HTMLTextAreaElement ||
                    e instanceof HTMLInputElement) &&
                  (e.focus(), n)
                ) {
                  const t = e.value.length;
                  e.selectionStart = t;
                  e.selectionEnd = t;
                }
              })(s, {
                force: true,
                forcePlaceCaretAtEnd: true,
              });
              s.dispatchEvent(new KeyboardEvent(e.type, e));
            }
          };
          document.addEventListener("keydown", e, true);
          return () => document.removeEventListener("keydown", e, true);
        }, [r, v]);
        (0, n.useLayoutEffect)(() => {
          const a = p.current;
          if (!a) {
            return;
          }
          const n = parseFloat(getComputedStyle(a).lineHeight) || 22;
          const s = n * t;
          a.style.height = H(n);
          if (e && a.scrollHeight) {
            a.style.height = H(a.scrollHeight);
          }
          a.style.maxHeight = H(s);
        }, [e, t]);
        (0, n.useEffect)(() => {
          if (!p.current) {
            return;
          }
          const e = p.current;
          const t = e.selectionStart === e.value.length;
          if (u && t) {
            p.current.scrollTop = p.current.scrollHeight;
          }
          d(u && e.classList.contains("focus-visible"));
        }, [u]);
        return (0, P.jsx)("div", {
          className: x()(O, {
            "focus-visible": c,
          }),
          children: (0, P.jsx)("textarea", {
            className: x()(B, a),
            value: e,
            ref: (0, I.B)(p, l),
            onFocus: (e) => {
              h(true);
              if (s != null) {
                s(e);
              }
            },
            onBlur: (e) => {
              h(false);
              if (i != null) {
                i(e);
              }
            },
            "data-qa": "chatik-new-message-text",
            ...o,
          }),
        });
      };
      V.displayName = "ChatInput/ChatTextArea/index/ChatTextArea";
      const W = s().forwardRef(V);
      var G = a(41251);
      var z = a.n(G);
      var $ = a(6745);
      const K = {
        button: "button--NP0CoZbsZuo2oJXp",
        label: "label--eVeVYeZUHKYqWqdG",
        input: "input--y9G4Lj34FmYmk3V6",
      };
      const Y = ({ onFileUpload: e, disabled: t, chatId: a }, s) => {
        const i = (0, n.useRef)(null);
        const r = (0, n.useCallback)(() => {
          if (!i.current) {
            return;
          }
          const t = i.current.files || [];
          e([...t], "clip");
          i.current.value = "";
        }, [e]);
        const o = (0, n.useCallback)(
          (e) => {
            e.stopPropagation();
            z()({
              chatId: a,
            });
            if (i.current) {
              i.current.click();
            }
          },
          [a],
        );
        const l = (0, n.useMemo)(
          () => [...Object.keys($.aE), ...Object.keys($.wO)].join(","),
          [],
        );
        return (0, P.jsxs)("div", {
          "data-qa": "upload-file-button",
          className: x()(K.button, {
            [K.buttonDisabled]: t,
          }),
          ref: s,
          children: [
            (0, P.jsx)("input", {
              className: K.input,
              ref: i,
              onChange: r,
              type: "file",
              id: "file_upload_clip",
              "data-qa": "upload-file-input",
              accept: l,
              multiple: true,
              onClick: (e) => e.stopPropagation(),
            }),
            (0, P.jsx)(N.Sr$, {
              borderRadius: "halfHeight",
              padding: 8,
              disabled: t,
              "aria-label": "uploadFileButton",
              onClick: o,
            }),
          ],
        });
      };
      Y.displayName = "ChatInput/UploadFileButton/index/UploadFileButton";
      const Q = (0, n.forwardRef)(Y);
      const X = (0, n.memo)(Q);
      var J = a(73735);
      var ee = a(49727);
      const te = "chat-input-content--_dwfkVPPNwMAtWsZ";
      const ae = "chat-input-content_disabled--ST3aYYh6PSws71x_";
      const ne = "slide-up-enter--MQmGUB9EsHlIpx12";
      const se = "slide-up-exit--RaRfgGvcJGszLelc";
      const ie = "preview-wrapper--HhkUKhhQPw6moKXC";
      const re = "chatik.sendMessage.placeholderMessage.magritte";
      const oe = "chatik.sendMessage.button";
      const le = "chatik.sendMessage.disabled.okButton";
      const ce = (
        {
          chatId: e,
          value: t,
          disabled: a,
          showDivider: s,
          showAttachFilesButton: i,
          isAttachFilesDisabled: r,
          messagePreview: o,
          renderRightSide: l,
          onPreviewClose: c,
          onFileAttach: d,
          onMessageSend: u,
          onChange: h,
          onKeyDown: p,
          isSendingDisabled: v = false,
          sendingDisabledHint: g,
          ...y
        },
        w,
      ) => {
        const A = (0, ee.T)();
        const R = (0, n.useRef)(null);
        const [M, D] = (0, n.useState)(o);
        const Z = (0, n.useRef)(null);
        const L = (0, n.useRef)(null);
        const [F, O] = (0, n.useState)(false);
        const B = (0, m.Z)();
        const H = (0, J.D)(o);
        const q = Boolean(o);
        const V = a || !t || v;
        const G = v && !!g;
        (0, n.useEffect)(() => {
          var e;
          if (o && H !== o) {
            if ((e = R.current) !== null && e !== undefined) {
              e.focus();
            }
          }
          if (o) {
            D(o);
          }
        }, [o]);
        const z = () => {
          O(false);
        };
        const $ = (e) => {
          if (G) {
            e.stopPropagation();
            O(true);
          }
        };
        return (0, P.jsxs)("div", {
          children: [
            (s || q) &&
              (0, P.jsx)(C.i, {
                mode: "horizontal",
              }),
            (0, P.jsx)(f.Z, {
              in: q,
              classNames: {
                enter: ne,
                exit: se,
              },
              onExited: () => {
                D(undefined);
              },
              timeout: 200,
              unmountOnExit: true,
              children: (0, P.jsx)("div", {
                className: ie,
                children: (0, P.jsx)(U, {
                  ...(M ?? {}),
                  onClose: c,
                }),
              }),
            }),
            (0, P.jsxs)("div", {
              className: x()(te, {
                [ae]: a,
              }),
              onClick: (e) => {
                var t;
                e.preventDefault();
                e.stopPropagation();
                if ((t = R.current) !== null && t !== undefined) {
                  t.focus();
                }
              },
              children: [
                i &&
                  d &&
                  (0, P.jsx)("div", {
                    ref: L,
                    onClick: $,
                    children: (0, P.jsx)(X, {
                      chatId: e,
                      disabled: a || r || v,
                      onFileUpload: d,
                    }),
                  }),
                (0, P.jsx)(W, {
                  value: t,
                  ref: (0, I.B)(w, R),
                  placeholder: A[re],
                  disabled: a,
                  maxLines: 5,
                  onChange: h,
                  onKeyDown: (e) => {
                    if (p != null) {
                      p(e);
                    }
                    if (!!(0, b.u)(e, k.k.Enter) && !e.shiftKey && !B) {
                      e.preventDefault();
                      u();
                    }
                  },
                  ...y,
                }),
                l == null ? undefined : l(),
                (0, P.jsx)("div", {
                  ref: Z,
                  onClick: $,
                  children: (0, P.jsx)(N.H9t, {
                    initialColor: "inverse",
                    backgroundStyle: V ? "inverse" : "accent",
                    disabled: V,
                    "aria-label": A[oe],
                    padding: 8,
                    borderRadius: "halfHeight",
                    onClick: (e) => {
                      e.stopPropagation();
                      u();
                    },
                    "data-qa": "chatik-do-send-message",
                  }),
                }),
                G &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(S.p, {
                        placement: "top-right",
                        activatorRef: Z,
                        children: g,
                      }),
                      (0, P.jsx)(S.p, {
                        placement: "top-left",
                        activatorRef: L,
                        children: g,
                      }),
                      (0, P.jsx)(E.R, {
                        visible: F,
                        onClose: z,
                        footer: (0, P.jsx)(T.W, {
                          children: (0, P.jsx)(_.z, {
                            mode: "secondary",
                            onClick: z,
                            children: A[le],
                          }),
                        }),
                        children: (0, P.jsx)(j.x, {
                          typography: "paragraph-1-regular",
                          children: g,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
      ce.displayName = "ChatInput/BaseChatInput/index/BaseChatInput";
      const de = (0, n.forwardRef)(ce);
      var ue = a(64452);
      var he = a(75790);
      var pe = a(31537);
      var me = a(34654);
      var ve = a(85489);
      var ge = a(61384);
      var ye = a(15698);
      var fe = a(65007);
      var we = a(30577);
      var xe = a(45150);
      var be = a(44036);
      var ke = a(96990);
      var Ce = a(68895);
      const Ie = ["byte", "kilobyte", "megabyte", "gigabyte"];
      const Se = (
        e,
        { availableUnits: t = Ie, fractionDigits: a = 1 } = {},
      ) => {
        const n = t.map((e) => Ie.indexOf(e));
        n.reverse();
        for (const [t, s] of n.entries()) {
          const i = parseFloat((e / Math.pow(1024, s)).toFixed(a));
          if (i >= 1 || t === n.length - 1) {
            return [i, Ie[s]];
          }
        }
        throw new Error("Cannot format file size");
      };
      const Ee = "file-uploading-progress--aCHzhxP6FEEzeuum";
      const Te = "chatik.uploadingFilesModal.uploadError";
      const _e = "chatik.uploadingFilesModal.progress";
      const je = {
        megabyte: "chatik.uploadingFilesModal.size.megabyte",
        kilobyte: "chatik.uploadingFilesModal.size.kilobyte",
      };
      const Ne = ({
        trls: e,
        uploadableFile: t,
        isLast: a,
        onFileRemove: n,
        onRetry: s,
      }) => {
        const { id: o, file: l, isError: c, isLoading: d } = t;
        const { loaded: u, total: h } = (0, i.v)((0, be.qE)(t.id)) ?? {};
        const p = (0, i.v)((0, ke.h)(t.uploadId));
        const m = (0, Ce.C)(l);
        const v = d || c || !m || p == null || !p.content;
        const g = () => {
          const [t, a] = Se(h ?? 0, {
            availableUnits: ["kilobyte", "megabyte"],
          });
          const [n] = Se(u ?? 0, {
            availableUnits: [a],
          });
          const s = (0, ue.WU)(e[je[a]], {
            "{0}": t,
          });
          if (c) {
            return (0, ue.WU)(e[Te], {
              "{0}": s,
            });
          } else if (d) {
            return (0, ue.WU)(e[_e], {
              "{0}": n,
              "{1}": s,
            });
          } else {
            return s;
          }
        };
        return (0, P.jsxs)(fe.b, {
          "data-qa": d
            ? "compact-file-preview-loading"
            : c
              ? "compact-file-preview-error"
              : "compact-file-preview-success",
          align: "center",
          vertPadding: true,
          showDivider: !a,
          slot: v
            ? (0, P.jsx)(ye.q, {
                mode: "icon",
                icon: (0, P.jsx)(N.GhD, {
                  initialColor: "accent",
                }),
                style: "accent-secondary",
                size: 48,
                "aria-label": l.name,
              })
            : (0, P.jsx)(ye.q, {
                mode: p.content ? "image" : "placeholder",
                image: p.content,
                size: 48,
                "aria-label": l.name,
              }),
          right: c
            ? (0, P.jsx)(N.VjI, {
                "data-qa": "compact-file-preview-retry-button",
                initialColor: "secondary",
                onClick: () => {
                  s(o);
                },
              })
            : (0, P.jsx)(N.q6q, {
                "data-qa": "compact-file-preview-remove-button",
                initialColor: "secondary",
                onClick: () => {
                  n(o, l);
                },
              }),
          children: [
            (0, P.jsx)(we.j, {
              type: "title",
              maxLines: 1,
              children: l.name,
            }),
            (0, P.jsx)(we.j, {
              left: d
                ? (0, P.jsx)(xe.a, {
                    size: 16,
                  })
                : null,
              type: "subtitle",
              children: (0, P.jsxs)("div", {
                className: Ee,
                children: [
                  d
                    ? null
                    : c
                      ? (0, P.jsx)(N.zmx, {
                          initialColor: "negative",
                        })
                      : (0, P.jsx)(N.$K7, {
                          initialColor: "positive",
                        }),
                  g(),
                ],
              }),
            }),
          ],
        });
      };
      Ne.displayName =
        "UploadingFilesModal/CompactFilePreview/index/CompactFilePreview";
      const Ae = (0, A.Z)(Ne);
      const Re = "files-list--Pv7spwOJXYEeM01u";
      const Me = "chatik.uploadingFilesModal.title";
      const De = "chatik.uploadingFilesModal.filesConstrait";
      const Pe = "chatik.uploadingFilesModal.actions.close";
      const Ze = "chatik.uploadingFilesModal.actions.send";
      const Le = "chatik.uploadingFiles.noFilesToSend.tooltip";
      const Fe = ({
        trls: e,
        visible: t,
        files: a,
        onSend: s,
        onFileRemove: i,
        onRetry: r,
        onClose: o,
      }) => {
        const { isMobile: l } = (0, ge.G)();
        const c = (0, n.useRef)(null);
        const d = (0, n.useMemo)(
          () => a.every((e) => !e.isLoading) && a.some((e) => !e.isError),
          [a],
        );
        const u = (0, n.useMemo)(() => a.some((e) => e.isLoading), [a]);
        const h = (0, ue.WU)(e[De], {
          "{0}": $.L5,
          "{1}": $.C1,
        });
        const p = () =>
          (0, P.jsxs)(P.Fragment, {
            children: [
              l &&
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(j.x, {
                      typography: "paragraph-1-regular",
                      children: h,
                    }),
                    (0, P.jsx)(he.X, {
                      default: 16,
                    }),
                  ],
                }),
              (0, P.jsx)("div", {
                className: x()(Re),
                children: a.map((e, t) =>
                  (0, P.jsx)(
                    Ae,
                    {
                      uploadableFile: e,
                      isLast: t === a.length - 1,
                      onFileRemove: i,
                      onRetry: r,
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          });
        return (0, P.jsxs)(n.Fragment, {
          children: [
            (0, P.jsx)(E.R, {
              visible: l && t,
              allowScrollWhileFocused: true,
              header: (0, P.jsx)(pe.v, {
                size: "standard",
                title: e[Me],
                showDivider: "always",
              }),
              footer: (0, P.jsxs)(T.W, {
                children: [
                  (0, P.jsx)(_.z, {
                    "data-qa": "uploading-files-modal-send-button",
                    size: "large",
                    mode: "primary",
                    style: "accent",
                    stretched: true,
                    disabled: !d,
                    onClick: s,
                    children: e[Ze],
                  }),
                  (0, P.jsx)(_.z, {
                    "data-qa": "uploading-files-modal-cancel-button",
                    size: "large",
                    mode: "secondary",
                    style: "accent",
                    stretched: true,
                    onClick: o,
                    children: e[Pe],
                  }),
                ],
              }),
              onClose: o,
              children: p(),
            }),
            (0, P.jsx)(me.u, {
              title: e[Me],
              titleDescription: h,
              titleDescriptionStyle: "secondary",
              visible: !l && t,
              size: "small",
              actions: (0, P.jsx)(N.Cs7, {
                initialColor: "secondary",
                onClick: o,
              }),
              footer: (0, P.jsx)(ve.o, {
                secondaryActions: (0, P.jsx)(_.z, {
                  "data-qa": "uploading-files-modal-cancel-button",
                  size: "medium",
                  mode: "tertiary",
                  style: "accent",
                  onClick: o,
                  children: e[Pe],
                }),
                primaryActions: (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)("span", {
                      ref: c,
                      children: (0, P.jsx)(_.z, {
                        "data-qa": "uploading-files-modal-send-button",
                        size: "medium",
                        mode: "primary",
                        style: "accent",
                        disabled: !d,
                        onClick: s,
                        children: e[Ze],
                      }),
                    }),
                    !d &&
                      a.length &&
                      !u &&
                      (0, P.jsx)(S.p, {
                        placement: "bottom-center",
                        maxWidth: 240,
                        activatorRef: c,
                        children: (0, P.jsx)(j.x, {
                          typography: "label-2-regular",
                          children: e[Le],
                        }),
                      }),
                  ],
                }),
              }),
              onClose: o,
              children: p(),
            }),
          ],
        });
      };
      Fe.displayName =
        "ChatInput/UploadingFilesModal/index/UploadingFilesModal";
      const Ue = (0, A.Z)(Fe);
      var Oe = a(27703);
      var Be = a.n(Oe);
      var He = a(35862);
      var qe = a(63141);
      var Ve = a(44820);
      const We = () => {
        const t = (0, o.useDispatch)();
        const a = (0, h.Z)();
        const s = (0, He.Z)();
        const r = (0, i.v)((0, be.S3)(a)) ?? [];
        const l = (0, n.useCallback)(
          (e, n) => {
            t(
              (0, qe.W$)({
                chatId: a,
                fileId: e,
              }),
            );
            Be()({
              chatId: a,
              filename: n.name,
              fileSize: (0, Ve.Z)(n.size),
            });
          },
          [a, t],
        );
        const c = (0, n.useCallback)(() => {
          t((0, qe.j2)(a));
        }, [t, a]);
        const d = (0, n.useCallback)(
          (e) => {
            const t = ((e) => {
              const a = [];
              const n = e.clipboardData?.items;
              if (!n) {
                return a;
              }
              for (const e in n) {
                const t = n[e];
                const s = t.kind === "file" ? t.getAsFile() : null;
                if (s) {
                  a.push(s);
                }
              }
              return a;
            })(e);
            if (t.length) {
              e.preventDefault();
              s(t, "clipboard");
            }
          },
          [s],
        );
        const u = (0, n.useCallback)(
          (e) => {
            t((0, qe.qU)(a, e));
          },
          [t, a],
        );
        return {
          uploadFiles: s,
          removeFile: l,
          resetFiles: c,
          onPaste: d,
          onRetry: u,
          files: r,
        };
      };
      var Ge = a(3216);
      var ze = a(68921);
      var $e = a(2615);
      var Ke = a(91013);
      var Ye = a(9362);
      const Qe = () => {
        const e = (0, i.v)(({ linkPreviews: e }) => e);
        const [t, a] = (0, n.useState)("");
        const s = (0, $e.Z)();
        const r = (0, n.useRef)();
        const o = e[t];
        const l = (0, n.useMemo)(
          () =>
            (0, ze.D)((e) => {
              const n = (0, Ke.C)(e);
              if (n) {
                const e = s([n]);
                var i;
                if (e) {
                  if ((i = r.current) !== null && i !== undefined) {
                    i.abort();
                  }
                  r.current = e;
                }
                a((0, Ye.Z)(n));
              }
              if (!n && t !== "") {
                a("");
              }
            }, 500),
          [t, s],
        );
        const c = (0, n.useCallback)(() => {
          l.cancel();
          a("");
        }, [l]);
        return {
          onTextChange: l,
          resetPreview: c,
          preview: o,
        };
      };
      const Xe = ({ draft: e, isEditing: t }) => {
        const a = (0, o.useDispatch)();
        const s = (0, i.v)(({ editMessage: e }) => e);
        const { isApplicant: r } = (0, Ge.Z)();
        const { onTextChange: l, resetPreview: c, preview: u } = Qe();
        const h = r && (s == null || !s.text);
        const p = (0, n.useMemo)(
          () =>
            u != null && u.ok
              ? {
                  title: u.title || u.url,
                  text: u.description,
                  view: "link-preview",
                }
              : s != null && s.id
                ? {
                    text: s.text,
                    view: h ? "cover-letter" : "editing",
                  }
                : undefined,
          [u, h, s],
        );
        const m = (0, n.useCallback)(() => {
          if (t && e) {
            l(e);
          } else {
            c();
          }
        }, [t, e, l, c]);
        const v = (0, n.useCallback)(() => {
          m();
          a((0, d.Wx)());
        }, [m, a]);
        ((e) => {
          const t = (0, n.useRef)(false);
          const a = (0, n.useRef)();
          (0, n.useEffect)(() => {
            a.current = e;
          }, [e]);
          (0, n.useEffect)(() => {
            var e;
            if (!t.current) {
              t.current = true;
              if ((e = a.current) !== null && e !== undefined) {
                e.call(a);
              }
            }
          }, []);
        })(() => e && l(e));
        (0, n.useEffect)(() => {
          if (s == null ? undefined : s.text) {
            l(s == null ? undefined : s.text);
          }
        }, [s == null ? undefined : s.id]);
        return {
          messagePreview: p,
          onPreviewFindByText: l,
          onPreviewReset: m,
          onPreviewClose: v,
        };
      };
      var Je = a(21665);
      const et = () => {
        const e = (0, o.useDispatch)();
        const t = (0, h.Z)();
        const a = (0, i.v)(({ messageDrafts: e }) => {
          return e[t]?.text || "";
        });
        const s = (0, i.v)((e) => {
          return e.chatSendMessage?.text ?? "";
        });
        const r = (0, i.v)(({ editMessage: e }) => e);
        const l = typeof r.id == "number";
        (0, n.useEffect)(() => {
          e(l ? (0, Je.ku)() : (0, Je.IE)(t));
        }, [t, e, r == null ? undefined : r.id, l]);
        return {
          text: s,
          savedDraftText: a,
        };
      };
      const tt = ({
        scrollWrapperRef: e,
        enablePreview: t,
        enableLinkPreview: a,
        borderScrollValue: s,
        onChange: o,
        isSendingDisabled: l = false,
        sendingDisabledHint: c,
      }) => {
        const d = (0, i.v)(
          ({ chatData: e }) => e.chatStates.sendFileState.allowed,
        );
        const u = (0, i.v)(({ displayType: e }) => e);
        const p = (0, n.useRef)(null);
        const m = (0, h.Z)();
        const {
          files: f,
          uploadFiles: w,
          resetFiles: x,
          removeFile: b,
          onPaste: k,
          onRetry: C,
        } = We();
        const { text: I, savedDraftText: S } = et();
        const {
          canWrite: E,
          isEditing: T,
          onTextChange: _,
          sendStoredMessage: j,
        } = (0, g.ZP)();
        const {
          messagePreview: N,
          onPreviewFindByText: A,
          onPreviewReset: R,
          onPreviewClose: M,
        } = Xe({
          draft: S,
          isEditing: T,
        });
        const D = v({
          isInputEmpty: !I,
          onEsc: () => t && R(),
        });
        const [Z, L] = (0, n.useState)(s === 0);
        (0, n.useEffect)(() => {
          var e;
          if (
            u !== r.DisplayType.Mobile &&
            document.activeElement !== p.current
          ) {
            if ((e = p.current) !== null && e !== undefined) {
              e.focus();
            }
          }
        }, [u, I]);
        (0, n.useEffect)(() => {
          if (e == null || !e.current || !s) {
            return;
          }
          const t = e.current;
          const a = () => {
            requestAnimationFrame(() => L(s + t.scrollTop <= 0));
          };
          a();
          t.addEventListener("scroll", a, {
            passive: true,
          });
          return () => {
            t.removeEventListener("scroll", a);
          };
        }, [e, s]);
        const F = () => {
          var a;
          if (!l) {
            j();
            if ((a = p.current) !== null && a !== undefined) {
              a.focus();
            }
            if (t) {
              R();
            }
            if (e != null && e.current && !T) {
              (0, y.Z)(e.current);
            }
          }
        };
        return (0, P.jsxs)(n.Fragment, {
          children: [
            (0, P.jsx)(de, {
              ref: p,
              value: I,
              chatId: m,
              showDivider: Z || s === 0,
              showAttachFilesButton: d,
              isAttachFilesDisabled: T || !E,
              messagePreview: (() => {
                if (t && N && (N.view !== "link-preview" || a)) {
                  return N;
                }
              })(),
              onPreviewClose: t && T ? M : undefined,
              onChange: (e) => {
                _(e);
                if (a) {
                  A(e.target.value);
                }
                if (o != null) {
                  o(e);
                }
              },
              onMessageSend: F,
              onFileAttach: w,
              onPaste: k,
              onKeyDown: t ? D : undefined,
              isSendingDisabled: l,
              sendingDisabledHint: c,
            }),
            (0, P.jsx)(Ue, {
              visible: Boolean(f.length),
              files: f,
              onFileRemove: b,
              onRetry: C,
              onClose: x,
              onSend: F,
            }),
          ],
        });
      };
      tt.displayName = "components/ChatInput/index/ChatInput";
    },
    65526: function (e, t, a) {
      a.d(t, {
        GI: () => y,
        R_: () => C,
        O4: () => I,
        _f: () => c,
        Iv: () => E,
        Z6: () => w,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(48867);
      const r = (
        e,
        {
          threshold: t = 0,
          root: a = null,
          rootMargin: s = "0%",
          freezeOnceVisible: i = false,
        } = {},
      ) => {
        const [r, o] = (0, n.useState)();
        const l = (r == null ? undefined : r.isIntersecting) && i;
        const c = ([e]) => {
          o(e);
        };
        (0, n.useEffect)(() => {
          const n = e == null ? undefined : e.current;
          if (!window.IntersectionObserver || l || !n) {
            return;
          }
          const i = new IntersectionObserver(c, {
            threshold: t,
            root: a,
            rootMargin: s,
          });
          i.observe(n);
          return () => i.disconnect();
        }, [e == null ? undefined : e.current, JSON.stringify(t), a, s, l]);
        return r;
      };
      var o = a(87749);
      var l = a(88915);
      const c = (e) => {
        const a = (0, s.useDispatch)();
        const {
          id: c,
          messages: { hasMore: d, items: u },
        } = (0, i.v)(({ chatData: e }) => e.chat);
        const [h, p] = (0, n.useState)(false);
        const m = (0, n.useRef)(null);
        const v = (0, n.useRef)(null);
        const g = r(m);
        const y = g != null && !!g.isIntersecting;
        const f = u[0]?.id;
        (0, n.useEffect)(() => {
          if (!h && d && y && f) {
            p(true);
            (0, l.Z)({
              lastMessageId: f,
              chatId: c,
            })
              .then((t) => {
                v.current = e.current?.scrollTop || null;
                a(
                  (0, o.$2)(t, {
                    shouldUpdateSuggestions: false,
                  }),
                );
              })
              .catch((e) => console.error(e))
              .finally(() => p(false));
          }
        }, [y, d, h, f, c, a, e]);
        return {
          loadingTriggerRef: m,
          scrollPositionToRestore: v,
          isLoading: h,
        };
      };
      var d = a(66360);
      var u = a.n(d);
      var h = a(87842);
      var p = a.n(h);
      var m = a(68390);
      var v = a(39248);
      const g = {
        [m.Z.Employer]: p(),
        [m.Z.Applicant]: u(),
        [m.Z.Anonymous]: u(),
        [m.Z.BackOffice]: undefined,
      };
      const y = (e, t) =>
        (0, n.useCallback)(() => {
          const a = (0, v.Z)();
          if (!a) {
            return;
          }
          const n = g[a];
          if (n != null) {
            n({
              chatId: e,
              unreadMessageCount: t,
            });
          }
        }, [e, t]);
      var f = a(61675);
      const w = (e, t) => {
        const a = (0, s.useDispatch)();
        const i = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          var n;
          var s;
          var r;
          if (!t.length) {
            return;
          }
          const o = t[t.length - 1];
          if (
            ((n = o.actions) === null ||
              n === undefined ||
              (n = n.text_buttons) === null ||
              n === undefined ||
              !n.length) &&
            !i.current
          ) {
            return;
          }
          if (
            (s = o.actions) !== null &&
            s !== undefined &&
            (s = s.text_buttons) !== null &&
            s !== undefined &&
            s.length &&
            i.current === o.id
          ) {
            return;
          }
          if (
            (r = o.actions) === null ||
            r === undefined ||
            (r = r.text_buttons) === null ||
            r === undefined ||
            !r.length
          ) {
            i.current = null;
            a((0, f.lF)(e));
            return;
          }
          i.current = o.id;
          const l = o.actions.text_buttons.map((e, t) => ({
            id: `message_id_${o.id}_action_button_${t}`,
            type: "send",
            text: e.text,
            label: e.text,
            isMessageAction: true,
            metadata: {
              messageId: o.id,
            },
          }));
          a((0, f.Qk)(e, l));
        }, [t, e, a]);
      };
      var x = a(47400);
      var b = a(61403);
      var k = a(74987);
      const C = (e) => {
        const t = (0, s.useDispatch)();
        const a = (0, i.v)(({ chatData: e }) => {
          return e.chat?.id;
        });
        const r = (0, i.v)(({ chatData: e }) => {
          var t;
          if (
            (t = e.chat) === null ||
            t === undefined ||
            (t = t.messages) === null ||
            t === undefined
          ) {
            return undefined;
          } else {
            return t.items;
          }
        });
        const o = (0, i.v)(({ selectedVacanciesClusters: e }) => e);
        const l = (0, i.v)(x.A1);
        const c = (0, i.v)(({ chatData: e }) => {
          return e.chat?.currentParticipantId;
        });
        const d = (0, i.v)(({ chatData: e }) => {
          return e.chat?.lastViewedByCurrentUserMessageId;
        });
        const u = (0, n.useRef)(d || 0);
        const h = (0, n.useMemo)(
          () =>
            r.reduce((e, { id: t }) => {
              e[t] = (0, n.createRef)();
              return e;
            }, {}),
          [r],
        );
        const p = (0, n.useMemo)(() => {
          const e = [];
          r.forEach(({ id: t, participantId: a }) => {
            if (a !== c && (!u.current || t > u.current)) {
              e.push(t);
            }
          });
          return e;
        }, [c, r]);
        const m = (0, n.useRef)(p[0]);
        return {
          syncUnreadMessagesState: (0, n.useCallback)(() => {
            if (!e.current) {
              return;
            }
            const n = e.current;
            let s = false;
            p.forEach((e) => {
              const t = h[e].current;
              if (t && c && e > u.current && (0, b.Z)(t, n)) {
                u.current = e;
                s = true;
              }
            });
            if (s) {
              const e =
                o.length === 0 ||
                o.some(
                  (e) => Number(e) === (l == null ? undefined : l.vacancyId),
                );
              (0, k.R)({
                chatId: a,
                dispatch: t,
                shouldUpdateChatList: e,
                messageId: u.current,
              });
            }
          }, [p, h, c, a, t, e, o, l == null ? undefined : l.vacancyId]),
          messagesRefs: h,
          messageIdWithPlateRef: m,
        };
      };
      const I = (e) => {
        const t = (0, i.v)(({ chats: e }) => e.chats.items);
        return (0, n.useMemo)(() => {
          const a = t.find(({ id: t }) => t === e);
          if (a) {
            return a.unreadCount;
          } else {
            return 0;
          }
        }, [t, e]);
      };
      var S = a(36788);
      const E = () => {
        (0, n.useEffect)(() => {
          (0, S.Z)();
        }, []);
      };
    },
    60186: function (e, t, a) {
      a.d(t, {
        j: () => ne,
      });
      var n = a(3891);
      var s = a(68031);
      var i = a(48867);
      var r = a(23982);
      var o = a(58687);
      var l = a(45150);
      var c = a(75790);
      var d = a(59343);
      var u = a(17938);
      var h = a(26442);
      var p = a(29725);
      var m = a(38618);
      var v = a(3216);
      var g = a(71473);
      var y = a(86918);
      var f = a(47400);
      var w = a(89059);
      var x = a(65665);
      var b = (function (e) {
        e.InitialContactRefused = "INITIAL_CONTACT_REFUSED";
        e.Success = "SUCCESS";
        return e;
      })(b || {});
      const k = [b.InitialContactRefused, b.Success];
      var C = a(63116);
      var I = a.n(C);
      var S = a(41082);
      var E = a(83355);
      var T = a(58342);
      var _ = a(85767);
      var j = a(61403);
      const N = "button--Ndq7Ul91OB01A6mP";
      const A = "button-visible--VCuWQQhIMEO4lxqr";
      var R = a(4201);
      const M = ({
        scrollerRef: e,
        scrollToRef: t,
        onClick: a,
        badgeNum: s = 0,
      }) => {
        const [i, o] = (0, n.useState)(false);
        const [l, c] = (0, n.useState)(0);
        const d = (0, n.useCallback)(() => {
          const n = e.current;
          const s = t == null ? undefined : t.current;
          if (n) {
            if (a != null) {
              a();
            }
            if (
              !s ||
              (s &&
                ((e, t) => {
                  const a = e.getBoundingClientRect();
                  const n = t.getBoundingClientRect();
                  return a.top <= n.top || (0, j.Z)(e, t);
                })(s, n))
            ) {
              (0, _.Z)(n);
            } else {
              s.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }, [e, t, a]);
        const u = (0, n.useMemo)(
          () =>
            (0, r.P)(() => {
              const t = e.current;
              if (t) {
                const e = Math.abs(t.scrollTop);
                o(e > _.I);
              }
            }, 200),
          [e],
        );
        (0, n.useEffect)(() => {
          const t = e.current;
          if (t) {
            c(t.offsetWidth - t.clientWidth);
          }
          if (t != null) {
            t.addEventListener("scroll", u);
          }
          return () =>
            t == null ? undefined : t.removeEventListener("scroll", u);
        }, [u, e]);
        return (0, R.jsx)("div", {
          className: I()(N, {
            [A]: i,
          }),
          style: {
            marginRight: `${l}px`,
          },
          children: (0, R.jsx)(S.a, {
            "data-qa": "chatik-chat-scroll-down-button",
            showBackground: true,
            mode: "secondary",
            style: "neutral",
            disablePadding: false,
            icon: T.Xnh,
            badge:
              i && s > 0
                ? (0, R.jsx)(E.C, {
                    size: "small",
                    style: "accent",
                    "data-qa": "chatik-unread-messages-badge",
                    children: s.toString(),
                  })
                : undefined,
            onClick: d,
          }),
        });
      };
      M.displayName = "ChatMessages/ScrollDownButton/index/ScrollDownButton";
      const D = (0, n.memo)(M);
      var P = a(65526);
      var Z = a(64452);
      var L = a(49727);
      var F = a(86071);
      var U = a(16347);
      var O = a(29727);
      var B = a(36258);
      var H = a(17223);
      var q = a(89016);
      const V = {
        [U.H.DiscardByEmployer]: {
          title: "chatik.messsages.service.advice.discard",
          one: "chatik.messsages.service.advice.discard.one",
          some: "chatik.messsages.service.advice.discard.some",
        },
        [U.H.DiscardByApplicant]: {
          title: "chatik.messsages.service.advice.discardByApplicant",
          one: "chatik.messsages.service.advice.discard.one",
          some: "chatik.messsages.service.advice.discard.some",
        },
        [U.H.DiscardNoInteraction]: {
          title: "chatik.messsages.service.advice.discardNoInteraction",
          one: "chatik.messsages.service.advice.discard.one",
          some: "chatik.messsages.service.advice.discard.some",
        },
        [U.H.DiscardToOtherVacancy]: {
          title: "chatik.messsages.service.advice.discardToOtherVacancy",
          one: "chatik.messsages.service.advice.discard.one",
          some: "chatik.messsages.service.advice.discard.some",
        },
        [U.H.PhoneInterview]: {
          title: "chatik.messsages.service.advice.interview",
          one: "chatik.messsages.service.advice.interview.one",
          some: "chatik.messsages.service.advice.interview.some",
        },
        advice: "chatik.messsages.service.advice",
      };
      const W = "-1";
      const G = (e, t, a, n, s, i) => {
        const r = {
          [U.H.DiscardByEmployer]: "chat_suitable_resume_advice",
          [U.H.DiscardByApplicant]: "chat_suitable_resume_advice",
          [U.H.DiscardNoInteraction]: "chat_suitable_resume_advice",
          [U.H.DiscardToOtherVacancy]: "chat_suitable_resume_advice",
          [U.H.PhoneInterview]: "chat_similar_resume_advice",
        };
        const o = `employer/vacancyresponses?vacancyId=${n}&collection=relevant_responses`;
        const l = `search/resume?resume=${n}`;
        const c = {
          [U.H.DiscardByEmployer]: o,
          [U.H.DiscardByApplicant]: o,
          [U.H.DiscardNoInteraction]: o,
          [U.H.DiscardToOtherVacancy]: o,
          [U.H.PhoneInterview]: l,
        };
        const d = () => {
          const e = `${t} ${i[V[a][(0, q.Z)(t, ["one", "some", "some"])]]}`;
          const n = `${s}/${c[a]}`;
          return `[${e}](${(0, H.ni)(n)})`;
        };
        return {
          id: -e.id,
          participantId: W,
          creationTime: e.creationTime,
          resources: {},
          type: F.u.Simple,
          participantDisplay: {
            name: "",
            isBot: true,
          },
          onlyVisibleForMyType: true,
          text: `# ${i[V.advice]}\n${(0, Z.WU)(i[V[a].title], {
            "{0}": d(),
          })}`,
          canEdit: false,
          canDelete: false,
          adviceType: r[a],
        };
      };
      const z = (e) => {
        const t = (0, L.T)();
        const a = (0, i.v)(f.km);
        const s = (0, i.v)(f.A1);
        const r = a == null ? undefined : a.id;
        const o = s == null ? undefined : s.vacancyId;
        const l = (0, i.v)(({ resources: e }) => e.participants);
        const c = (0, i.v)(({ similarCounters: e }) => e.byVacancy[o || 0]);
        const d = (0, i.v)(({ similarCounters: e }) => e.byResume[r || 0]);
        const u = (0, i.v)((e) => e.siteRoot);
        const h = (0, i.v)(f.R2);
        const p = Boolean(h == null ? undefined : h.id);
        return (0, n.useMemo)(
          () =>
            p
              ? s && a
                ? e.reduce((e, n) => {
                    var i;
                    var r;
                    const o =
                      n == null ||
                      (i = n.workflowTransition) === null ||
                      i === undefined
                        ? undefined
                        : i.employerState;
                    if (o === U.H.PhoneInterview && d > 0) {
                      return [...e, n, G(n, d, o, a.hash, u, t)];
                    }
                    if (
                      (h = o) &&
                      [
                        U.H.DiscardByEmployer,
                        U.H.DiscardByApplicant,
                        U.H.DiscardNoInteraction,
                        U.H.DiscardToOtherVacancy,
                      ].includes(h) &&
                      c > 0
                    ) {
                      return [...e, n, G(n, c, o, s.vacancyId, u, t)];
                    }
                    var h;
                    const p = e[e.length - 1];
                    if (
                      ((p == null ? undefined : p.participantId) === W ||
                        (l == null ||
                        (r = l[p == null ? undefined : p.participantId]) ===
                          null ||
                        r === undefined
                          ? undefined
                          : r.type) === O.f.Bot) &&
                      n.resources[B.U.Address]
                    ) {
                      return [...e.slice(0, -1), n, p];
                    } else {
                      return [...e, n];
                    }
                  }, [])
                : e
              : [
                  ...e,
                  {
                    id: 1,
                    participantId: W,
                    creationTime: new Date().toISOString(),
                    resources: {},
                    type: F.u.TextToJoin,
                    participantDisplay: {
                      name: "",
                      isBot: true,
                    },
                    onlyVisibleForMyType: true,
                    canEdit: false,
                    canDelete: false,
                  },
                ],
          [a, s, e, l, d, u, t, c, p],
        );
      };
      var $ = a(2615);
      var K = a(91013);
      const Y = (e, t) => {
        const a = (0, $.Z)();
        (0, n.useEffect)(() => {
          if (t) {
            return;
          }
          const s =
            (e == null
              ? undefined
              : e
                  .map(({ text: e }) => (e ? (0, K.C)(e) : null))
                  .filter((e) => !!e)) ?? [];
          a(s);
        }, [e, t, a]);
      };
      var Q = a(74987);
      const X = "chat-messages--zwfOG1I9inQXLZPA";
      const J = "scroll-wrapper--BANmTN9Sz6EwRGzp";
      const ee = "content--qbFEo4QXKAQupjDJ";
      const te = "loader--W1YyhlUtw48rTCAj";
      const ae = "loading-trigger--_xpiyXlMM2UJbdsa";
      const ne = ({ disableLinkPreviews: e, scrollWrapperRef: t }) => {
        const { userType: b } = (0, v.Z)();
        const C = (0, h.Z)();
        const I = (0, P.O4)(C);
        const S = (0, g.Z)();
        const E = (0, i.v)(f.A1);
        const T = (0, i.v)(f.W4);
        const { items: _, hasMore: j } = (0, i.v)(
          ({ chatData: e }) => e.chat.messages,
        );
        const N = (0, i.v)(({ chatData: e }) => e.chatStates.writeMessageState);
        const A = (0, i.v)(({ activeState: e }) => e);
        const M = (0, i.v)((e) => (0, y.t)(e, C));
        const Z = (0, i.v)((e) => e.quickReplies.visible);
        const {
          isLoading: L,
          loadingTriggerRef: F,
          scrollPositionToRestore: U,
        } = (0, P._f)(t);
        const [B] = (0, m.Z)();
        const H = (0, n.useRef)(null);
        const q = (0, n.useRef)(true);
        const V = (0, n.useMemo)(() => [..._].sort(Q.g), [_]);
        const W = z(V);
        const G = (0, P.GI)(C, I);
        const {
          syncUnreadMessagesState: $,
          messagesRefs: K,
          messageIdWithPlateRef: ne,
        } = (0, P.R_)(t);
        const { sendMessageImmediately: se, onQuickReply: ie } = (0, p.ZP)();
        Y(_, e);
        (0, P.Z6)(C, W);
        (0, P.Iv)();
        const re = (() => {
          const e = (0, i.v)(f.U6);
          const t = (0, i.v)((e) => e.isProxiedComponent);
          return (0, n.useMemo)(
            () =>
              !t ||
              ((e == null ? undefined : e.length) > 2 &&
                (e == null
                  ? undefined
                  : e.filter((e) => e.type !== O.f.Bot).length) > 2),
            [t, e],
          );
        })();
        (0, n.useEffect)(() => {
          const e = ((e) => {
            const t = new Set();
            if (e != null) {
              e.forEach((e) => {
                const n = e.metadata?.clientData;
                if (n) {
                  if (n.message === "resume_summary_info") {
                    t.add("resume_summary_message_shown");
                  }
                  if (k.includes(n.status)) {
                    t.add("ai_assistant_interaction_completed");
                  }
                }
              });
            }
            return t;
          })(_);
          e.forEach((e) => {
            (0, w.AW)("uxfbEvent", {
              name: e,
            });
          });
        }, [_]);
        const oe = (0, n.useCallback)(() => {
          if (t.current && A) {
            if (H.current && q.current) {
              H.current.scrollIntoView({
                behavior: "auto",
                block: "center",
              });
              q.current = false;
            } else if (U.current !== null) {
              t.current.scrollTop = U.current;
              U.current = null;
            }
            $();
          }
        }, [A, t, U, $]);
        const le = (0, o.N)(oe, 200);
        (0, n.useLayoutEffect)(() => {
          le();
        }, [A, W.length, le]);
        const ce = (0, n.useMemo)(
          () =>
            (0, r.P)(() => {
              if (A) {
                $();
              }
            }, 200),
          [A, $],
        );
        const de = (e) => {
          se({
            text: e,
          });
        };
        const ue = t.current ? t.current?.clientHeight / 2 : 100;
        return (0, R.jsx)("div", {
          className: X,
          children:
            !T &&
            (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)("div", {
                  className: J,
                  ref: t,
                  onScroll: ce,
                  id: (0, x.a)(),
                  children: (0, R.jsxs)("div", {
                    className: ee,
                    children: [
                      L &&
                        (0, R.jsx)("div", {
                          className: te,
                          children: (0, R.jsx)(l.a, {
                            size: 24,
                          }),
                        }),
                      j &&
                        (0, R.jsx)("div", {
                          className: ae,
                          style: {
                            height: `${ue}px`,
                            display: L ? "none" : "",
                          },
                          ref: F,
                        }),
                      W.map((t, a) =>
                        (0, R.jsx)(
                          d.Z,
                          {
                            ref: K[t.id],
                            message: t,
                            prevMessage: W[a - 1],
                            nextMessage: W[a + 1],
                            showUnreadMessagesPlate: t.id === ne.current,
                            unreadMessagesPlateRef: H,
                            isVacancyArchived: Boolean(
                              E == null ? undefined : E.archived,
                            ),
                            userType: b,
                            disableLinkPreview: e,
                            sendTextMessage: de,
                            avatarsDisabled: !re,
                            hideTextButtons: true,
                          },
                          t.id,
                        ),
                      ),
                      N.allowed &&
                        (0, R.jsxs)(s.Z, {
                          duration: 200,
                          height: Z ? "auto" : 0,
                          children: [
                            (0, R.jsx)(c.X, {
                              default: 16,
                            }),
                            (0, R.jsx)(u.Z, {
                              replies: M,
                              handleReplyClick: ie,
                              chatId: C,
                            }),
                          ],
                        }),
                      (!S || B) &&
                        (0, R.jsx)(c.X, {
                          default: 16,
                        }),
                    ],
                  }),
                }),
                (0, R.jsx)(D, {
                  scrollerRef: t,
                  scrollToRef: H,
                  badgeNum: I,
                  onClick: G,
                }),
              ],
            }),
        });
      };
      ne.displayName = "components/ChatMessages/index/ChatMessages";
    },
    74987: function (e, t, a) {
      a.d(t, {
        R: () => o,
        g: () => l,
      });
      var n = a(21440);
      var s = a(54549);
      var i = a(59430);
      var r = a(36788);
      const o = ({
        chatId: e,
        messageId: t,
        dispatch: a,
        shouldUpdateChatList: o,
      }) => {
        n.Z.post("/chatik/api/mark_read", {
          chatId: e,
          messageId: t,
        })
          .then(() => (0, r.Z)())
          .then(() =>
            o
              ? ((e, t) =>
                  (0, i.Z)({
                    ids: [e],
                  }).then((a) => {
                    var i;
                    const r =
                      (a == null ||
                      (i = a.chats.items) === null ||
                      i === undefined
                        ? undefined
                        : i.find((t) => t.id === e)) ?? null;
                    t((0, s.GL)(a));
                    t(
                      (0, s.nR)({
                        updateFor: "currentUser",
                        chatId: e,
                        messageId:
                          r == null
                            ? undefined
                            : r.lastViewedByCurrentUserMessageId,
                      }),
                    );
                  }))(e, a)
              : Promise.resolve(),
          )
          .catch(console.error);
      };
      const l = (e, t) =>
        e.isSending && !t.isSending
          ? 1
          : !e.isSending && t.isSending
            ? -1
            : e.id - t.id;
    },
    16637: function (e, t, a) {
      a.d(t, {
        Z: () => g,
      });
      var n = a(36047);
      var s = a(61477);
      var i = a(89156);
      var r = a(34343);
      var o = a(61384);
      var l = a(63144);
      var c = a(86482);
      const d = "placeholder-container--vTJvUR9HjIJnCLQ9";
      var u = a(4201);
      const h = "noChat.notification.title";
      const p = "noChat.notification.text";
      const m = "noChat.linkTo.chatList";
      const v = ({ trls: e }) => {
        const { isMobile: t, isXS: a } = (0, o.G)();
        const i = (0, n.usePush)();
        const v = (0, s.l)(c);
        return (0, u.jsx)("div", {
          className: d,
          children: (0, u.jsx)(r.V, {
            maxWidth: 412,
            image: v,
            imageHeight: a ? 163 : 288,
            title: e[h],
            description: e[p],
            buttonPrimary: t
              ? (0, u.jsx)(l.z, {
                  style: "accent",
                  mode: "secondary",
                  stretched: false,
                  onClick: () => {
                    i("/chat");
                  },
                  children: e[m],
                })
              : undefined,
          }),
        });
      };
      v.displayName = "components/ChatNotFoundScreen/index/ChatNotFoundScreen";
      const g = (0, i.Z)(v);
    },
    75539: function (e, t, a) {
      a.d(t, {
        Z: () => C,
      });
      var n = a(63116);
      var s = a.n(n);
      var i = a(48867);
      var r = a(36047);
      var o = a(64452);
      var l = a(44180);
      var c = a(66802);
      var d = a(82967);
      var u = a(26442);
      var h = a(49727);
      var p = a(29801);
      var m = a(47400);
      var v = a(16347);
      var g = a(68390);
      var y = a(17223);
      const f = "container--uibSLh9btq4sc2yH";
      var w = a(4201);
      var x = (function (e) {
        e.VacancyArchived = "vacancyArchived";
        e.NoVacancy = "noVacancy";
        e.NoResume = "noResume";
        return e;
      })(x || {});
      const b = {
        [x.VacancyArchived]: "chatik.warning.vacancyArchived",
        [x.NoVacancy]: "chatik.warning.noVacancy",
        [x.NoResume]: {
          [g.Z.Employer]: "chatik.warning.noResume",
          [g.Z.BackOffice]: "chatik.warning.noResume",
          [g.Z.Applicant]: "chatik.warning.noResume.applicant",
          [g.Z.Anonymous]: "chatik.warning.noResume.applicant",
        },
        [p.R.DisabledByEmployer]: {
          [g.Z.Employer]: "chatik.warning.disabledByEmployer",
          [g.Z.BackOffice]: "chatik.warning.disabledByEmployer",
          [g.Z.Applicant]: "chatik.warning.disabledByEmployer.applicant",
          [g.Z.Anonymous]: "chatik.warning.disabledByEmployer.applicant",
        },
        chatSettings: "chatik.warning.disabledByEmployer.settingsLink",
        [p.R.WithoutInvitation]: {
          [g.Z.Employer]: "chatik.warning.withoutInvitation",
          [g.Z.BackOffice]: "chatik.warning.withoutInvitation",
          [g.Z.Applicant]: "chatik.warning.withoutInvitation.applicant",
          [g.Z.Anonymous]: "chatik.warning.withoutInvitation.applicant",
        },
        changeTopicState:
          "chatik.warning.withoutInvitation.changeTopicStateLink",
        defaultNotAllowedMessage: "chatik.warning.writing.notAllowed.default",
        commonReasons: {
          [p.R.MoreThanFive]: "chatik.warning.moreThanFive",
          [p.R.MaxMessages]: "chatik.warning.maxMessages",
          [p.R.PfpBlock]: "chatik.warning.pfpBlock",
          [p.R.EmployerLimitExceeded]: "chatik.warning.employerLimitExceeded",
        },
      };
      const k = ({ className: e }) => {
        const t = (0, i.v)(({ chatData: e }) => e.chat.type);
        const a = (0, i.v)(({ chatData: e }) => e.chat.subType);
        const n = (0, i.v)(({ chatData: e }) => e.chatStates.writeMessageState);
        const g = (0, i.v)(m.A1);
        const k = (0, u.Z)();
        const {
          errorTrl: C,
          formatParams: I,
          addSimilarLink: S,
        } = (({
          chatType: e,
          chatSubType: t,
          chatId: a,
          writeMessageState: n,
          userType: s,
          chatVacancy: o,
          chatResume: c,
          chatTopic: d,
        }) => {
          const u = (0, i.v)((e) => e.siteRoot);
          const m = (0, h.T)();
          if (e !== "NEGOTIATION" && t !== "WITHOUT_RESUME") {
            if (n.allowed) {
              return {};
            } else {
              return {
                errorTrl: m[b.defaultNotAllowedMessage],
              };
            }
          }
          if (!o) {
            return {
              errorTrl: m[b[x.NoVacancy]],
            };
          }
          if (o.archived) {
            return {
              errorTrl: m[b[x.VacancyArchived]],
              formatParams: {
                "{0}": o.name,
              },
            };
          }
          const { reason: g } = n;
          if (g === p.R.DisabledByEmployer) {
            const e = {
              target: "_blank",
              href: (0, y.H4)(u, o),
            };
            return {
              errorTrl: m[b[p.R.DisabledByEmployer][s]],
              formatParams: {
                "{0}": (0, w.jsx)(l.r, {
                  typography: "label-3-regular",
                  inline: true,
                  ...e,
                  children: m[b.chatSettings],
                }),
              },
            };
          }
          if (g === p.R.WithoutInvitation && c && d) {
            const e = `/chat/${a}/workflow/${v.H.PhoneInterview}`;
            return {
              errorTrl: m[b[p.R.WithoutInvitation][s]],
              formatParams: {
                "{0}": (0, w.jsx)(r.SPALink, {
                  to: e,
                  inline: true,
                  typography: "label-3-regular",
                  children: m[b.changeTopicState],
                }),
              },
              addSimilarLink: true,
            };
          }
          const f = b.commonReasons[g];
          if (f) {
            return {
              errorTrl: m[f],
            };
          } else if (c || t === "WITHOUT_RESUME") {
            if (n.allowed) {
              return {};
            } else {
              return {
                errorTrl: m[b.defaultNotAllowedMessage],
              };
            }
          } else {
            return {
              errorTrl: m[b[x.NoResume][s]],
            };
          }
        })({
          chatType: t,
          chatSubType: a,
          chatId: k,
          writeMessageState: n,
          chatVacancy: (0, i.v)(m.A1),
          chatResume: (0, i.v)(m.km),
          chatTopic: (0, i.v)(m.Fq),
          userType: (0, i.v)(({ userType: e }) => e),
        });
        if (!C) {
          return null;
        }
        const E = I ? (0, o.WU)(C, I) : C;
        return (0, w.jsxs)("div", {
          className: s()(f, e),
          children: [
            (0, w.jsx)(c.x, {
              Element: "span",
              typography: "label-3-regular",
              style: "secondary",
              children: E,
            }),
            S ? " " : null,
            S &&
              (0, w.jsx)(d.Z, {
                vacancyId: g == null ? undefined : g.vacancyId,
              }),
          ],
        });
      };
      k.displayName = "components/ChatWarning/index/ChatWarning";
      const C = k;
    },
    99222: function (e, t, a) {
      a.d(t, {
        Z: () => ae,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(63116);
      var r = a.n(i);
      var o = a(48867);
      var l = a(36047);
      var c = a(89156);
      var d = a(63144);
      var u = a(58342);
      var h = a(3216);
      var p = a(87749);
      var m = a(13018);
      var v = a(29801);
      var g = a(25833);
      var y = a(47400);
      var f = a(16347);
      var w = a(88915);
      var x = a(17223);
      var b = a(30329);
      var k = a(24488);
      const C = (e, t, a = "chat_menu_item") =>
        k.default.sendHHEventButtonClick(a, {
          type: e,
          chatId: t,
        });
      var I = a(4201);
      const S = "chatik.actions.inviteCoworker";
      const E = (0, b.makeSetStoreField)("inviteCoworkerModalVisible");
      const T = ({ trls: e, chatId: t }) => {
        const a = (0, s.useDispatch)();
        return (0, I.jsx)(d.z, {
          "data-qa": "chatik-chat-invite-coworker",
          size: "large",
          style: "neutral",
          mode: "tertiary",
          stretched: true,
          icon: (0, I.jsx)(u.p0C, {}),
          onClick: () => {
            a(E(true));
            C("ADD_ANOTHER_MANAGER_TO_CHAT", t);
          },
          children: e[S],
        });
      };
      T.displayName = "DialogHeader/ChatMenu/InviteCoworker/InviteCoworker";
      const _ = (0, c.Z)(T);
      var j = a(21440);
      var N = a(54549);
      const A = "chatik.actions.leaveChat";
      const R = ({ isLoading: e, setIsLoading: t, trls: a, chatId: n }) => {
        const i = (0, l.usePush)();
        const r = (0, s.useDispatch)();
        const o = {
          "data-qa": "chatik-chat-leave-chat",
          disabled: e,
          onClick: async () => {
            t(true);
            try {
              await j.Z.post("/chatik/api/leave", {
                chatId: n,
              });
            } catch (e) {
              console.error(e);
              t(false);
              return;
            }
            i("/chat");
            r((0, N.Lf)(n));
            t(false);
            C("LEAVE_CHAT", n);
          },
        };
        return (0, I.jsx)(d.z, {
          size: "large",
          style: "negative",
          mode: "tertiary",
          stretched: true,
          ...o,
          icon: (0, I.jsx)(u.yAT, {}),
          children: a[A],
        });
      };
      R.displayName = "DialogHeader/ChatMenu/LeaveChat/LeaveChat";
      const M = (0, c.Z)(R);
      var D = a(52002);
      var P = a(62953);
      const Z = "chatik.actions.notifyAdmin";
      const L = "chatik.actions.notifyAdmin.success";
      const F = ({ trls: e, chatId: t }) => {
        const a = (0, o.v)(({ notifyAdmin: e }) => e[t]);
        const i = (0, D.Z)();
        const r = (0, s.useDispatch)();
        (0, n.useEffect)(() => {
          if (Number(new Date()) - Number(a) > 300000) {
            r(P.v.removeNotifyAdminForChat(t));
          }
        }, [t, r, a]);
        const l = {
          "data-qa": "chatik-chat-notify-admin",
          disabled: Boolean(a),
          onClick: () => {
            j.Z.post("/chatik/api/notify_admin", {
              chatId: t,
            }).then(() => {
              C("NOTIFY_ADMIN", t);
              i({
                kind: "ok",
                content: e[L],
                autoClose: true,
              });
              r(P.v.saveNotifyAdminForChat(t, Number(new Date())));
            });
          },
        };
        return (0, I.jsx)(d.z, {
          size: "large",
          style: "neutral",
          mode: "tertiary",
          stretched: true,
          icon: (0, I.jsx)(u.hsr, {}),
          ...l,
          children: a ? e[L] : e[Z],
        });
      };
      F.displayName = "DialogHeader/ChatMenu/NotifyAdmin/NotifyAdmin";
      const U = (0, c.Z)(F);
      const O = "chatik.actions.rateChat";
      const B = ({ isLoading: e, setIsLoading: t, trls: a, chatId: n }) => {
        const s = {
          "data-qa": "chatik-chat-rate-chat",
          onClick: async () => {
            t(true);
            try {
              await j.Z.post("/chatik/api/rate_chat", {
                chatId: n,
              });
            } catch (e) {
              console.error(e);
              return;
            }
            t(false);
            C("RATE_SUPPORT", n);
          },
          disabled: e,
        };
        return (0, I.jsx)(d.z, {
          size: "large",
          style: "neutral",
          mode: "tertiary",
          stretched: true,
          icon: (0, I.jsx)(u.WrI, {}),
          ...s,
          children: a[O],
        });
      };
      B.displayName = "DialogHeader/ChatMenu/RateChat/RateChat";
      const H = (0, c.Z)(B);
      const q = "chatik.actions.setNotificationEnabled";
      const V = "chatik.actions.setNotificationDisabled";
      const W = ({ isLoading: e, setIsLoading: t, trls: a, chatId: n }) => {
        const i = (0, o.v)(({ chatData: e }) => e.chat.notificationEnabled);
        const l = (0, s.useDispatch)();
        const c = {
          "data-qa": r()(
            "chatik-chat-toggle-notifications",
            "chatik-chat-" +
              (i ? "disable-notifications" : "enable-notifications"),
          ),
          disabled: e,
          onClick: async () => {
            t(true);
            try {
              await j.Z.post("/chatik/api/toggle_notification", {
                chatId: n,
                status: !i,
              });
              l((0, N.at)(n, !i));
            } catch (e) {
              console.error(e);
              t(false);
              return;
            }
            t(false);
            C("TOGGLE_NOTIFICATIONS", n);
          },
        };
        return (0, I.jsx)(d.z, {
          size: "large",
          style: "neutral",
          mode: "tertiary",
          stretched: true,
          icon: i ? (0, I.jsx)(u.y$3, {}) : (0, I.jsx)(u.qi9, {}),
          ...c,
          children: i ? a[V] : a[q],
        });
      };
      W.displayName =
        "DialogHeader/ChatMenu/ToggleNotifications/DisableNotifications";
      const G = (0, c.Z)(W);
      const z = "chatik.actions.setWritePossibilityEnabled";
      const $ = "chatik.actions.setWritePossibilityDisabled";
      const K = ({ isLoading: e, setIsLoading: t, chatId: a, trls: n }) => {
        var s;
        const i = (0, o.v)(({ chatData: e }) => e.chat);
        const l =
          (s = i.operations) === null || s === undefined
            ? undefined
            : s.enabled.includes(v.Ru.DisableWritePossibility);
        const c = {
          "data-qa": r()(
            "chatik-chat-toggle-write-possibility",
            "chatik-chat-" +
              (i.notificationEnabled
                ? "disable-write-possibility"
                : "enable-write-possibility"),
          ),
          disabled: e,
          onClick: async () => {
            t(true);
            try {
              await j.Z.post("/chatik/api/set_write_possibility", {
                chatId: a,
                writePossibility: !l,
              });
            } catch (e) {
              console.error(e);
              t(false);
              return;
            }
            t(false);
            C("TOGGLE_WRITE_POSSIBILITY", a);
          },
        };
        return (0, I.jsx)(d.z, {
          size: "large",
          style: "neutral",
          mode: "tertiary",
          stretched: true,
          icon: l ? (0, I.jsx)(u.Xdw, {}) : (0, I.jsx)(u.A$w, {}),
          ...c,
          children: l ? n[$] : n[z],
        });
      };
      K.displayName =
        "DialogHeader/ChatMenu/ToggleWritePossibility/ToggleWritePossibility";
      const Y = (0, c.Z)(K);
      const Q = "menu--exPui74ZVcEjgDGR";
      const X = "title--GmLc1wqhI9nbKTUp";
      const J = {
        chatParticipants: "chatik.actions.chatParticipants",
        aboutCompany: "chatik.actions.aboutCompany",
        invitation: "chatik.vacancy.invitation",
        noTopic: "chatik.vacancy.noTopic",
        [f.H.DiscardByEmployer]: "chatik.vacancy.discard",
        [f.H.Response]: "chatik.vacancy.response",
      };
      const ee = [
        {
          Component: G,
          operations: [v.Ru.DisableNotifications, v.Ru.EnableNotifications],
        },
        {
          Component: Y,
          operations: [
            v.Ru.DisableWritePossibility,
            v.Ru.EnableWritePossibility,
          ],
        },
        {
          Component: M,
          operations: [v.Ru.LeaveChat],
        },
        {
          Component: H,
          operations: [v.Ru.Rate],
        },
      ];
      const te = ({
        trls: e,
        close: t,
        chatId: a,
        view: i,
        hiddenOperations: c,
      }) => {
        const f = (0, o.v)(({ chatData: e }) => e.chat.operations.enabled);
        const b = (0, o.v)(y.R2);
        const k = (0, o.v)(y.A1);
        const S = (0, o.v)(y.h);
        const E = (0, o.v)(y.Fq);
        const { chat: T, chatStates: j } = (0, o.v)(({ chatData: e }) => e);
        const N = (0, o.v)(({ features: e }) => e[g.A.NotifyAdminEnabled]);
        const A = (0, o.v)(m.BK);
        const R = (0, o.v)((e) => e.isProxiedComponent);
        const M = (0, o.v)((e) => e.siteRoot);
        const D = (0, l.usePush)();
        const { isApplicant: P, isEmployer: Z } = (0, h.Z)();
        const L = (0, s.useDispatch)();
        const [F, O] = (0, n.useState)(false);
        const B = (0, n.useCallback)(
          async (e) => {
            if (!e) {
              const e = await (0, w.Z)({
                chatId: a,
              });
              if (e) {
                L((0, p.$2)(e));
              }
            }
            O(e);
          },
          [a, L],
        );
        (0, n.useEffect)(() => {
          C("OPEN_MENU", a, "chat_menu");
        }, [a]);
        const H = i === "drop";
        const q =
          !P && k
            ? `${(({ chatTopic: e, trls: t, TrlKeys: a }) => {
                if (!e) {
                  return t[a.noTopic];
                }
                const n = a[e.currentEmployerState];
                if (n) {
                  return t[n];
                } else {
                  return t[a.invitation];
                }
              })({
                trls: e,
                chatTopic: E,
                TrlKeys: J,
              })}: ${k.name}`
            : null;
        const V = H
          ? {
              width:
                (typeof document != "undefined"
                  ? document.body.offsetWidth - 16
                  : 0) + "px",
            }
          : {};
        const W = T.type === "SUPPORT";
        const G = T.type === "NEGOTIATION" && !T.blockInfo;
        const z = P && S;
        const $ = !W && !R;
        const K =
          Z && G && (k == null || !k.archived) && j.writeMessageState.allowed;
        const Y = Boolean(N) && A && b && b.role?.name !== "admin";
        return (0, I.jsxs)("div", {
          className: r()({
            [Q]: H,
          }),
          onClick: t,
          style: V,
          children: [
            q &&
              H &&
              (0, I.jsx)("div", {
                className: X,
                children: q,
              }),
            z &&
              (0, I.jsx)(d.z, {
                "data-qa": "chatik-chat-view-company",
                Element: "a",
                target: "_blank",
                href: (0, x.ag)(M, S),
                icon: (0, I.jsx)(u.Uq, {}),
                size: "large",
                style: "neutral",
                mode: "tertiary",
                stretched: true,
                onClick: () => C("ABOUT_COMPANY", a),
                children: e[J.aboutCompany],
              }),
            $ &&
              (0, I.jsx)(d.z, {
                "data-qa": "chatik-chat-view-participants",
                size: "large",
                style: "neutral",
                mode: "tertiary",
                stretched: true,
                icon: (0, I.jsx)(u.QUo, {}),
                onClick: () => {
                  C("CHAT_PARTICIPANTS", a);
                  D(`/chat/${a}/participants`);
                },
                children: e[J.chatParticipants],
              }),
            K &&
              (0, I.jsx)(_, {
                chatId: a,
              }),
            Y &&
              (0, I.jsx)(U, {
                chatId: a,
              }),
            ee
              .filter(
                ({ operations: e }) =>
                  e.some((e) => f.includes(e)) &&
                  !e.some((e) => (c == null ? undefined : c.includes(e))),
              )
              .map(({ Component: e }, t) =>
                (0, I.jsx)(
                  e,
                  {
                    isLoading: F,
                    setIsLoading: B,
                    chatId: a,
                  },
                  t,
                ),
              ),
          ],
        });
      };
      te.displayName = "DialogHeader/ChatMenu/index/Menu";
      const ae = (0, c.Z)(te);
    },
    20446: function (e, t, a) {
      a.d(t, {
        Y: () => v,
      });
      var n = a(48867);
      var s = a(89156);
      var i = a(50361);
      var r = a(56905);
      var o = a(3216);
      var l = a(13018);
      var c = a(2183);
      var d = a(47400);
      var u = a(24087);
      const h = "subtitle--NtSoqjdndQwVqzl5";
      var p = a(4201);
      const m = ({ online: e, loading: t }) => {
        const { display: a, chat: s } = (0, u.Z)(t);
        const { isApplicant: m } = (0, o.Z)();
        const { lastActivityTime: v } = s;
        const g = (0, n.v)(c.CT);
        const y = (0, n.v)(d.U6);
        const f = (0, n.v)(l.BK);
        const w = s.type === "SUPPORT";
        const x = s.type === "NEGOTIATION";
        let b = m && x ? a.title : a.subtitle;
        if (g != null && g.length) {
          return (0, p.jsx)(i.c, {
            style: "primary",
            compact: y.length <= 2,
            typingParticipants: g,
          });
        } else {
          if (!w && !f && !!v) {
            b = (0, p.jsx)(r.Z, {
              lastActivityTime: v,
              isOnline: e,
            });
          }
          return (
            b &&
            (0, p.jsx)("div", {
              className: h,
              children: b,
            })
          );
        }
      };
      m.displayName =
        "components/DialogHeader/DialogSubtitle/DialogSubtitleComponent";
      const v = (0, s.Z)(m);
    },
    24087: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(48867);
      var s = a(26442);
      const i = (e = false) => {
        const t = (0, s.Z)();
        const a = (0, n.v)(({ chatData: e }) => e.chat);
        const i = (0, n.v)(({ chatData: e }) => e.display);
        const r = (0, n.v)(({ chats: e }) =>
          e.chats.items.find(({ id: e }) => e === t),
        );
        const o = (0, n.v)(({ chats: e }) => e.chatsDisplayInfo[t]);
        return {
          display: e && o ? o : i,
          chat: e && r ? r : a,
        };
      };
    },
    53416: function (e, t, a) {
      a.d(t, {
        Z: () => h,
      });
      var n = a(3891);
      var s = a(63116);
      var i = a.n(s);
      const r = "header--jAe1p3UW6UE0bk7P";
      const o = "content--Q4bdcLlhvczS9R5m";
      const l = "last-slot--WRxgMBiIvItieM_8";
      const c = "first-slot--W85xA2MY8P4LCBkb";
      var d = a(4201);
      const u = (
        { children: e, className: t, lastSlot: a, firstSlot: s },
        u,
      ) => {
        const h = (0, n.useRef)(null);
        return (0, d.jsxs)("div", {
          className: i()(r, t),
          ref: u,
          children: [
            s &&
              (0, d.jsx)("div", {
                className: c,
                children: s,
              }),
            (0, d.jsx)("div", {
              ref: h,
              className: o,
              children: e,
            }),
            a &&
              (0, d.jsx)("div", {
                className: l,
                children: a,
              }),
          ],
        });
      };
      u.displayName = "components/HeaderBase/index/HeaderBase";
      const h = (0, n.forwardRef)(u);
    },
    3585: function (e, t, a) {
      a.d(t, {
        Z: () => h,
      });
      var n = a(32449);
      var s = a(59558);
      var i = a(8493);
      var r = a(67117);
      var o = a(21570);
      var l = a(99227);
      var c = a(41781);
      var d = a(23855);
      const u = {
        AZ: s.Z,
        EN: i.Z,
        KZ: r.Z,
        RU: o.Z,
        UA: l.Z,
        UZ: c.Z,
        KG: o.Z,
      };
      const h = (e, t, a = "RU") =>
        (0, n.Z)(typeof e == "string" ? (0, d.Z)(e) : e, t, {
          locale: u[a],
        });
    },
    89824: function (e, t, a) {
      a.d(t, {
        Lx: () => n,
        M1: () => i,
        VN: () => s,
      });
      const n = (e) =>
        ((e) => {
          let t = e || "";
          t = t.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
          try {
            t = t
              .replace(/\n={2,}/g, "\n")
              .replace(/~{3}.*\n/g, "")
              .replace(/~~/g, "")
              .replace(/`{3}.*\n/g, "");
            t = t
              .replace(/^[=-]{2,}\s*$/g, "")
              .replace(/\[\^.+?\](: .*?$)?/g, "")
              .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
              .replace(/!\[(.*?)\][[(].*?[\])]/g, "$1")
              .replace(/\[(.*?)\][[(].*?[\])]/g, "$1")
              .replace(/^\s{0,3}>\s?/g, "")
              .replace(/(^|\n)\s{0,3}>\s?/g, "\n\n")
              .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
              .replace(
                /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
                "$1$2$3",
              )
              .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
              .replace(/([*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
              .replace(/(`{3,})(.*?)\1/gm, "$2")
              .replace(/`(.+?)`/g, "$1")
              .replace(/\n{2,}/g, "\n\n");
          } catch (t) {
            console.error(t);
            return e;
          }
          return t;
        })(e.replace(/ {2,}/g, " "));
      const s = (e) => {
        const t = n(e);
        return /^\s*$/g.test(t);
      };
      const i = (e) => {
        const t = Object.keys(e ?? {});
        const a = ["manuallyEnteredData"];
        return t.reduce((e, t) => (a.includes(t) ? ++e : e), 0) === t.length;
      };
    },
    59343: function (e, t, a) {
      a.d(t, {
        Z: () => ws,
      });
      var n = a(3891);
      var s = a(63116);
      var i = a.n(s);
      var r = a(10900);
      var o = a(75790);
      var l = a(49727);
      var c = a(86071);
      const d = (e, t) =>
        e.participantId === t.participantId &&
        e.participantDisplay.name === t.participantDisplay.name;
      var u = a(89156);
      var h = a(66802);
      var p = a(64514);
      var m = a(51085);
      var v = a(9904);
      var g = a(3585);
      const y = "date.today.uppercase";
      const f = "date.yesterday.uppercase";
      const w = (e, t) => {
        const a = new Date(e);
        if (((e) => !isNaN(e.getDate()))(a)) {
          if ((0, m.Z)(a)) {
            return t[y];
          } else if ((0, v.Z)(a)) {
            return t[f];
          } else if ((0, p.Z)(a)) {
            return (0, g.Z)(a, "d MMMM");
          } else {
            return (0, g.Z)(a, "d MMMM yyyy");
          }
        } else {
          return "";
        }
      };
      const x = "chat-date--_wIw8OSUHU8I4spq";
      var b = a(4201);
      const k = ({ date: e, trls: t }) =>
        e
          ? (0, b.jsx)("div", {
              className: x,
              children: (0, b.jsx)(h.x, {
                style: "tertiary",
                typography: "label-2-regular",
                children: w(e, t),
              }),
            })
          : null;
      k.displayName = "Message/ChatDate/index/ChatDate";
      const C = (0, u.Z)(k);
      var I = a(48867);
      var S = a(64452);
      var E = a(47400);
      const T = "participant-action--IXFsK1xRpewBIhNM";
      let _ = (function (e) {
        e[(e.Joined = 0)] = "Joined";
        e[(e.Left = 1)] = "Left";
        e[(e.TextToJoin = 2)] = "TextToJoin";
        return e;
      })({});
      const j = {
        [_.Joined]: "chatik.message.participantJoined",
        [_.Left]: "chatik.message.participantLeft",
        [_.TextToJoin]: "chatik.message.textToJoin",
        addedByAnotherUser: "chatik.message.addedByAnotherUser",
      };
      const N = ({ action: e, message: t, trls: a }) => {
        var s;
        const i = (0, n.useMemo)(E.DP, []);
        const r = (0, I.v)((e) => i(e, t.managedParticipantExternalId));
        if (e === _.TextToJoin) {
          return (0, b.jsx)("div", {
            className: T,
            children: a[j[e]],
          });
        }
        if (
          e === _.Joined &&
          (r == null ? undefined : r.isCurrentUser) &&
          t.managedParticipantExternalId ===
            (r == null ? undefined : r.externalId) &&
          t.participantId !== t.managedParticipantExternalId
        ) {
          return (0, b.jsx)("div", {
            className: T,
            children: a[j.addedByAnotherUser],
          });
        }
        const o =
          r == null || (s = r.display) === null || s === undefined
            ? undefined
            : s.name;
        if (o) {
          return (0, b.jsx)("div", {
            className: T,
            children: (0, S.WU)(a[j[e]], {
              "{0}": o,
            }),
          });
        } else {
          return null;
        }
      };
      N.displayName =
        "Message/ParticipantActionMessage/index/ParticipantActionMessage";
      const A = (0, u.Z)(N);
      var R = a(84434);
      var M = a(24488);
      var D = a(42065);
      var P = a(58342);
      var Z = a(44180);
      var L = a(77329);
      var F = a.n(L);
      var U = a(49920);
      var O = a.n(U);
      var B = a(63144);
      var H = a(26442);
      var q = a(48403);
      var V = a(65442);
      var W = a(13656);
      var G = a.n(W);
      var z = a(10455);
      var $ = a.n(z);
      var K = a(21440);
      var Y = a(33338);
      var Q = a(52002);
      var X = a(87749);
      const J = "chatik.message.delete.modal.title";
      const ee = "chatik.message.delete.modal.description";
      const te = "chatik.message.delete.modal.action.delete";
      const ae = "chatik.message.delete.modal.action.cancel";
      const ne = "chatik.message.delete.error";
      const se = ({
        trls: e,
        visible: t,
        messageId: a,
        chatId: s,
        onClose: i,
      }) => {
        const r = (0, R.useDispatch)();
        const [o, l] = (0, n.useState)(false);
        const c = (0, Q.Z)();
        (0, n.useEffect)(() => {
          if (t) {
            l(false);
          }
        }, [t]);
        return (0, b.jsx)(Y.bZ, {
          visible: t,
          title: e[J],
          description: e[ee],
          iconStyle: "warning",
          icon: (0, b.jsx)(P.l5_, {}),
          layout: "vertical",
          buttons: (0, b.jsxs)(b.Fragment, {
            children: [
              !o &&
                (0, b.jsx)(B.z, {
                  "data-qa": "chatik_delete_modal_cancel_button",
                  size: "medium",
                  style: "accent",
                  mode: "primary",
                  onClick: () => {
                    G()({
                      buttonName: "chat_message_delete_cancel",
                      chatId: s,
                      messageId: a,
                    });
                    i();
                  },
                  children: e[ae],
                }),
              (0, b.jsx)(B.z, {
                "data-qa": "chatik_delete_modal_confirm_button",
                size: "medium",
                style: "accent",
                mode: "secondary",
                loading: o,
                onClick: async () => {
                  l(true);
                  G()({
                    buttonName: "chat_message_delete_confirm",
                    chatId: s,
                    messageId: a,
                  });
                  try {
                    await K.Z.delete("/chatik/api/delete_message", {
                      params: {
                        messageId: a,
                        chatId: s,
                      },
                    });
                    r((0, X.Am)(s, a));
                  } catch (t) {
                    $()({
                      chatId: s,
                      messageId: a,
                    });
                    c({
                      kind: "error",
                      content: e[ne],
                      autoClose: true,
                    });
                  } finally {
                    i();
                  }
                },
                children: e[te],
              }),
            ],
          }),
          onClose: i,
        });
      };
      se.displayName =
        "Message/MessageMenu/DeleteMessageAlert/DeleteMessageAlert";
      const ie = (0, u.Z)(se);
      var re = a(6028);
      var oe = a(28826);
      var le = a.n(oe);
      var ce = a(41082);
      var de = a(69441);
      var ue = a(65665);
      const he = "bubble-wrapper--rNmhf0mHzs2kc5jP";
      const pe = "bubble-wrapper_force-hover--vHkLCtDSltsgbidT";
      const me = "menu-wrapper--p9GwuwlYu9Tkw_eE";
      const ve = "menu-wrapper_left--uMX0b2hRND0_U3W1";
      const ge = "menu-wrapper_right--sIVevqG23T8B6W_x";
      const ye = ({
        children: e,
        bubbleRef: t,
        direction: a,
        id: s,
        menuItems: r,
      }) => {
        const o = (0, H.Z)();
        const [l, c] = (0, n.useState)(false);
        const [d, u] = (0, n.useState)(false);
        const h = (0, n.useRef)(null);
        const p = (0, n.useRef)(null);
        const m = (0, n.useCallback)(() => c(true), []);
        const v = (0, n.useCallback)(() => !d && c(false), [d]);
        (0, n.useEffect)(() => {
          if (!d) {
            return;
          }
          const e = document.getElementById((0, ue.a)());
          const t = (e) => {
            e.preventDefault();
            e.stopPropagation();
          };
          if (e != null) {
            e.addEventListener("wheel", t);
          }
          return () =>
            e == null ? undefined : e.removeEventListener("wheel", t);
        }, [d]);
        (0, n.useEffect)(() => {
          const e = h.current;
          if (e != null) {
            e.addEventListener("mouseenter", m);
          }
          if (e != null) {
            e.addEventListener("mouseleave", v);
          }
          return () => {
            if (e != null) {
              e.removeEventListener("mouseenter", m);
            }
            if (e != null) {
              e.removeEventListener("mouseleave", v);
            }
          };
        }, [t, m, v]);
        const g = () => {
          u(false);
          c(false);
        };
        return (0, b.jsxs)("div", {
          "data-qa": "desktop-message-menu-wrapper",
          ref: h,
          className: i()(he, {
            [pe]: l,
          }),
          children: [
            e,
            (t == null ? undefined : t.current) &&
              (0, re.createPortal)(
                (0, b.jsx)("div", {
                  "data-qa": "desktop-message-menu",
                  className: i()(me, {
                    [ve]: a === "outgoing",
                    [ge]: a === "incoming",
                  }),
                  children: (0, b.jsxs)(b.Fragment, {
                    children: [
                      (0, b.jsx)(ce.a, {
                        ref: p,
                        style: "neutral",
                        mode: "secondary",
                        "data-qa": "chatik-message-menu",
                        icon: P.t_N,
                        onClick: () => {
                          if (!d) {
                            le()({
                              chatId: o,
                              messageId: s,
                            });
                          }
                          u((e) => !e);
                        },
                      }),
                      (0, b.jsx)(de.S, {
                        visible: d,
                        onClose: g,
                        dropProps: {
                          placement:
                            a === "outgoing" ? "left-top" : "right-top",
                          activatorRef: p,
                        },
                        children: (0, b.jsx)("ul", {
                          role: "menu",
                          onClick: g,
                          children: r,
                        }),
                      }),
                    ],
                  }),
                }),
                t.current,
              ),
          ],
        });
      };
      ye.displayName =
        "Message/MessageMenu/DesktopMenuWrapper/DesktopMenuWrapper";
      const fe = (0, n.memo)(ye);
      const we = ({ children: e, bubbleRef: t, id: a, menuItems: s }) => {
        const i = (0, H.Z)();
        const [r, o] = (0, n.useState)(false);
        const l = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          const e = (e) => {
            let t = e.target;
            while (t !== l.current && t !== null) {
              if (t?.tagName === "BUTTON") {
                return;
              }
              if (t?.tagName === "A") {
                return;
              }
              if (t?.id === "viewer-activator") {
                return;
              }
              if (t?.id === "message-map-wrapper") {
                return;
              }
              t = t?.parentElement || null;
            }
            le()({
              chatId: i,
              messageId: a,
            });
            o(true);
          };
          const t = l == null ? undefined : l.current;
          if (t != null) {
            t.addEventListener("click", e);
          }
          return () => {
            if (t != null) {
              t.removeEventListener("click", e);
            }
          };
        }, [i, a, l]);
        if (t) {
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)("div", {
                "data-qa": "touch-bubble-with-menu-click-zone",
                ref: l,
                children: e,
              }),
              (0, b.jsx)(de.S, {
                visible: r,
                onClose: () => {
                  o(false);
                },
                dropProps: {
                  placement: "left-top",
                  activatorRef: t,
                  "data-qa": "bubble-touch-menu-dropdown-menu",
                },
                children: (0, b.jsx)("ul", {
                  role: "menu",
                  onClick: () => {
                    o(false);
                  },
                  children: s,
                }),
              }),
            ],
          });
        } else {
          return null;
        }
      };
      we.displayName = "Message/MessageMenu/TouchMenuWrapper/TouchMenuWrapper";
      const xe = (0, n.memo)(we);
      const be = "chatik.message.actions.change";
      const ke = "chatik.message.actions.delete";
      const Ce = ({ trls: e, children: t, bubbleRef: a, message: s }) => {
        const i = (0, q.Z)();
        const r = (0, R.useDispatch)();
        const o = (0, H.Z)();
        const [l, c] = (0, n.useState)(false);
        const { canDelete: d, canEdit: u, id: h, text: p } = s;
        const m = i ? xe : fe;
        if (d || u) {
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(m, {
                id: h,
                bubbleRef: a,
                direction: "outgoing",
                menuItems: (0, b.jsxs)(b.Fragment, {
                  children: [
                    u &&
                      (0, b.jsx)("li", {
                        role: "menuitem",
                        "data-qa": "chatik-edit-message-item",
                        onClick: () => {
                          r((0, V.Hd)(h, p ?? ""));
                          F()({
                            chatId: o,
                            messageId: h,
                            hhtmFromLabel: "message_menu",
                          });
                        },
                        children: (0, b.jsx)(B.z, {
                          size: "large",
                          mode: "tertiary",
                          style: "neutral",
                          stretched: true,
                          icon: (0, b.jsx)(P.vvx, {}),
                          children: e[be],
                        }),
                      }),
                    d &&
                      (0, b.jsx)("li", {
                        role: "menuitem",
                        "data-qa": "chatik-delete-message-item",
                        onClick: () => {
                          c(true);
                          O()({
                            chatId: o,
                            messageId: h,
                          });
                        },
                        children: (0, b.jsx)(B.z, {
                          size: "large",
                          mode: "tertiary",
                          style: "negative",
                          stretched: true,
                          icon: (0, b.jsx)(P.q6q, {
                            initialColor: "negative",
                          }),
                          children: e[ke],
                        }),
                      }),
                  ],
                }),
                children: t,
              }),
              (0, b.jsx)(ie, {
                chatId: o,
                messageId: s.id,
                visible: l,
                onClose: () => c(false),
              }),
            ],
          });
        } else {
          return (0, b.jsx)(b.Fragment, {
            children: t,
          });
        }
      };
      Ce.displayName = "Message/MessageMenu/index/MessageMenuWrapper";
      const Ie = (0, u.Z)(Ce);
      var Se = a(70844);
      const Ee = "exit--Q__nOqLOPXIJdKlF";
      const Te = "exit-active--nWBv7sUdAQzbnnKJ";
      const _e = (e) => (t) => {
        const a = (0, R.useDispatch)();
        const n = (0, I.v)((e) => {
          return e.chatData.markAsRemovedMessages?.[t.message.id];
        });
        return (0, b.jsx)(Se.Z, {
          in: !n,
          classNames: {
            exit: Ee,
            exitActive: Te,
          },
          timeout: 300,
          onExited: () => a((0, X.T5)(t.message.chatId, t.message.id)),
          unmountOnExit: true,
          children: (0, b.jsx)(e, {
            ...t,
          }),
        });
      };
      var je = a(80684);
      var Ne = a(29727);
      var Ae = a(58086);
      const Re = ({
        message: e,
        nextMessage: t,
        isMyMessage: a,
        isSending: n,
      }) => {
        const s = (0, I.v)(
          ({ chatData: e }) => e.chat.lastViewedByOpponentMessageId,
        );
        const i = (0, je.m)(E.DP, e.participantId);
        const { onlineUntilTime: r } = i ?? {};
        const o = e.participantDisplay.isBot;
        const l = (() => {
          const { id: t, onlyVisibleForMyType: r } = e;
          if (r || ((i == null ? undefined : i.type) === Ne.f.Bot && o)) {
            return "hidden";
          }
          if (e.deleted) {
            return "deleted";
          }
          if (!a) {
            return;
          }
          if (n) {
            return "sending";
          }
          if (e.isSending) {
            return "sending";
          }
          if (!!s && t <= s) {
            return "read";
          } else {
            return "delivered";
          }
        })();
        const u = o ? "bot" : a ? "outgoing" : "incoming";
        const h =
          !t ||
          !d(t, e) ||
          [c.u.ParticipantJoined, c.u.ParticipantLeft].includes(t.type);
        const p = h && !a;
        return {
          type: u,
          status: l,
          isOnline: r != null && !!r.dt && (0, Ae.Dp)(r.dt) === Ae.$r.ONLINE,
          avatarDisplayInfo: p ? e.participantDisplay : undefined,
          messageDirection: a ? "right" : "left",
          withTail: h,
          displayTime: e.creationTime,
          edited: !e.deleted && Boolean(e.lastChangeTime),
          dataQa: `chatik-chat-message-${e.id}-text`,
        };
      };
      var Me = a(91013);
      var De = a(9362);
      const Pe = (e) => {
        const t = (0, I.v)(({ linkPreviews: e }) => e);
        const [a, s] = (0, n.useState)("");
        const i = t[a];
        (0, n.useEffect)(() => {
          if (!e) {
            return;
          }
          const t = (0, Me.C)(e);
          s(t ? (0, De.Z)(t) : "");
        }, [e]);
        return i;
      };
      var Ze = a(3151);
      var Le = a(16347);
      const Fe = ({ workflowTransition: e }) =>
        (e == null ? undefined : e.applicantState) === Le.J.Response ||
        (e == null ? undefined : e.employerState) === Le.H.Response;
      const Ue = (e, t = false) => {
        try {
          const a = new URL(e);
          a.searchParams.append("hhtmSource", t ? "spoiler" : "chat");
          return a.toString();
        } catch {
          return e;
        }
      };
      const Oe = () =>
        (0, I.v)((e) => e.chatData.chat.id) ===
        (0, I.v)(({ applicantFirstContactChatId: e }) => e);
      var Be = a(3216);
      var He = a(5791);
      var qe = a(36258);
      var Ve = a(96990);
      var We = a(76586);
      var Ge = a.n(We);
      var ze = a(7710);
      var $e = a.n(ze);
      var Ke = a(15698);
      var Ye = a(87884);
      var Qe = a(26825);
      const Xe = ({ name: e, avatar: t, isBot: a, isOnline: n, chatId: s }) => {
        const i = (0, I.v)(({ isProxiedComponent: e }) => e);
        const r = (0, I.v)(({ chatData: e }) => e.display);
        const { isApplicant: o } = (0, Be.Z)();
        const l = e || r.title;
        const c = !l;
        const {
          avatarIcon: d,
          avatarImage: u,
          avatarIconStyle: h,
        } = (0, Ye.Z)({
          isBot: a,
          image: t,
          isUnknownUser: c,
        });
        const p = () => {
          if (o) {
            Ge()({
              chatId: s,
            });
          } else {
            const e = i ? "spoiler" : "chat";
            $e()({
              chatId: s,
              hhtmFromLabel: e,
            });
          }
        };
        if (d) {
          return (0, b.jsx)(Ke.q, {
            size: 40,
            mode: "icon",
            icon: d,
            style: h,
            "aria-label": e ?? "avatar",
            online: n,
            onClick: p,
          });
        } else {
          return (0, b.jsx)(Ke.q, {
            size: 40,
            mode: u ? "image" : "letters",
            image: u ?? "",
            letters: (0, Qe.$)(l.toUpperCase()),
            style: "color-1",
            "aria-label": e ?? "avatar",
            online: n,
            onClick: p,
          });
        }
      };
      Xe.displayName =
        "SimpleMessage/ChatBubbleContainer/ChatBubbleAvatar/ChatBubbleAvatar";
      const Je = Xe;
      var et = a(71495);
      const tt = (0, n.createContext)({
        displayTimeInfo: {},
      });
      const at = () => (0, n.useContext)(tt);
      const nt = "chat-bubble-indicators--QOMZgy7q98o1NKry";
      const st = "tip-content--hclxyp2BMjn5kuyv";
      const it = "chatik.message.edited";
      const rt = "chatik.message.onlyVisibleForMyType.title";
      const ot = {
        sending: P.crD,
        sent: P.ARe,
        delivered: P.ARe,
        read: P.eid,
        hidden: P.th3,
        deleted: P.weN,
      };
      const lt = (e, t) => {
        if (t === "deleted") {
          return "secondary";
        }
        switch (e) {
          case "outgoing":
            return "contrast";
          case "bot":
            return "special";
          default:
            return;
        }
      };
      const ct = ({ trls: e, className: t, ...a }) => {
        const { type: s, displayTimeInfo: r } = at();
        const o = (0, n.useRef)(null);
        const { displayTime: l, status: c, edited: d } = r;
        const u =
          c === "deleted" || (c && s !== "incoming") ? ot[c] : undefined;
        const p = ((e) => (e === "outgoing" ? "contrast" : "secondary"))(s);
        const m = c ? `chat-bubble-icon-${c}` : undefined;
        if (l) {
          return (0, b.jsxs)("span", {
            "data-qa": "chat-bubble-indicators",
            className: i()(nt, t),
            ...a,
            children: [
              d &&
                (0, b.jsxs)(h.x, {
                  Element: "span",
                  typography: "label-4-regular",
                  style: p,
                  children: [e[it], "\xA0"],
                }),
              (0, b.jsx)(h.x, {
                "data-qa": "chat-buble-display-time",
                Element: "span",
                typography: "label-4-regular",
                style: p,
                children: (0, g.Z)(new Date(l), "HH:mm"),
              }),
              u &&
                (c === "hidden"
                  ? (0, b.jsxs)(b.Fragment, {
                      children: [
                        (0, b.jsx)("span", {
                          "data-qa": m,
                          ref: o,
                          children: (0, b.jsx)(u, {
                            initialColor: lt(s),
                          }),
                        }),
                        (0, b.jsx)(et.p, {
                          placement: "top-center",
                          activatorRef: o,
                          children: (0, b.jsx)("div", {
                            className: st,
                            children: (0, b.jsx)(h.x, {
                              typography: "label-4-regular",
                              children: e[rt],
                            }),
                          }),
                        }),
                      ],
                    })
                  : (0, b.jsx)("span", {
                      "data-qa": m,
                      children: (0, b.jsx)(u, {
                        initialColor: lt(s, c),
                      }),
                    })),
            ],
          });
        } else {
          return null;
        }
      };
      ct.displayName =
        "ChatBubbleContainer/ChatBubbleIndicators/index/ChatBubbleIndicators";
      const dt = (0, u.Z)(ct);
      var ut;
      var ht;
      function pt() {
        pt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) {
                  if ({}.hasOwnProperty.call(a, n)) {
                    e[n] = a[n];
                  }
                }
              }
              return e;
            };
        return pt.apply(null, arguments);
      }
      const mt = (e) =>
        n.createElement(
          "svg",
          pt(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 22,
              height: 20,
              fill: "none",
            },
            e,
          ),
          (ut ||= n.createElement(
            "g",
            {
              clipPath: "url(#a)",
            },
            n.createElement("path", {
              fill: "#0070FF",
              d: "M16 9V0h-1v4c0 7.5-6.5 15-15 15v1h18.852c.975 0 1.495-1.408.845-2.135C18.005 15.974 16 12.908 16 9",
            }),
            n.createElement("path", {
              fill: "#0D63E3",
              fillRule: "evenodd",
              d: "M20.808 19c.353.329.118 1-.364 1H0v-1h19.15a.101.101 0 0 0 .074-.17 18 18 0 0 1-1.01-1.176c-1.534-1.95-3.12-4.8-3.21-8.339L15 0h1v9c0 4.827 3.059 8.369 4.808 10",
              clipRule: "evenodd",
            }),
          )),
          (ht ||= n.createElement(
            "defs",
            null,
            n.createElement(
              "clipPath",
              {
                id: "a",
              },
              n.createElement("path", {
                fill: "#fff",
                d: "M0 0h22v20H0z",
              }),
            ),
          )),
        );
      const vt = "chat-bubble-container--xlH6p5aV4o4u_38b";
      const gt = "chat-bubble-container_offsetted--FiTpVtD3PAC3r5Zt";
      const yt = "chat-bubble-container_deleted--p5S8YtBns_IZYGm1";
      const ft = "avatar--rmYUYHBR960RU8kC";
      const wt = "chat-bubble--TFjICp8IMFIhojGy";
      const xt = "chat-bubble_incoming--CgAKL4FOU0shOYzo";
      const bt = "chat-bubble-content--qOhTaYyg5ygPNstt";
      const kt = "tail-wrapper--G0FVKQq89mYBEr4b";
      const Ct = "chat-bubble_outgoing--C1wSnUG6DlswSx6I";
      const It = "chat-bubble_bot--ATOUBrnmcY8nZkrY";
      const St = "chat-bubble_with-left-tail--__mmuGUjNcDqugJS";
      const Et = "chat-bubble_with-right-tail--J0NYWVDENy0KLcgZ";
      const Tt = "bottom-widgets-container--sAKEC7d4wwPLe_Tv";
      const _t = "bottom-widgets-container_with-left-avatar--dkO8vP4m98wye_Qv";
      const jt = "caption--chWFXqBAwiqPPgRz";
      const Nt = "tail-wrapper_left--nruAYPMTuhkCKesn";
      const At = "tail-wrapper_right--DdkfoQ5Y6NIOcVZG";
      const Rt = "error-icon--jVzZJVUMQHkLuu89";
      const Mt = (
        {
          chatId: e,
          dataQa: t,
          type: a,
          avatarDisplayInfo: s,
          displayTimeContainer: r,
          displayTime: o,
          status: l,
          isOnline: c,
          edited: d,
          messageDirection: u,
          withTail: p,
          children: m,
          caption: v,
          actions: g,
          bottomWidgets: y,
          hideAvatar: f,
        },
        w,
      ) => {
        const x = (0, n.useMemo)(
          () => ({
            type: a,
            displayTimeInfo: {
              displayTimeContainer: r,
              displayTime: o,
              status: l,
              edited: d,
            },
          }),
          [a, r, o, l, d],
        );
        const k = !f && !s && u === "left";
        const C = p && u === "left";
        const I = p && u === "right";
        const S = l === "error";
        const E = Boolean(g || v || y);
        const T = () =>
          (0, b.jsx)(mt, {
            className: i()(kt, {
              [Nt]: C,
              [At]: I,
            }),
          });
        return (0, b.jsx)(tt.Provider, {
          value: x,
          children: (0, b.jsxs)("div", {
            "data-qa": "chat-bubble-wrapper",
            className: i()(vt, {
              [yt]: l === "deleted",
              [gt]: k,
            }),
            children: [
              s && !f
                ? (0, b.jsx)("div", {
                    className: ft,
                    children: (0, b.jsx)(Je, {
                      chatId: e,
                      isOnline: c,
                      ...s,
                    }),
                  })
                : null,
              (0, b.jsxs)("div", {
                className: i()(wt, {
                  [St]: C,
                  [Et]: I,
                  [It]: a === "bot",
                  [xt]: a === "incoming",
                  [Ct]: a === "outgoing",
                }),
                children: [
                  C && T(),
                  (0, b.jsxs)("div", {
                    ref: w,
                    "data-qa": t,
                    className: bt,
                    children: [m, !r && (0, b.jsx)(dt, {})],
                  }),
                  I && T(),
                ],
              }),
              S &&
                u === "right" &&
                (0, b.jsx)("div", {
                  className: Rt,
                  children: (0, b.jsx)(P.I6K, {
                    initialColor: "negative",
                  }),
                }),
              E &&
                (0, b.jsxs)("div", {
                  className: i()(Tt, {
                    [_t]: !f && s && u === "left",
                  }),
                  children: [
                    g &&
                      (0, b.jsx)("div", {
                        children: g,
                      }),
                    v &&
                      (0, b.jsx)("div", {
                        className: jt,
                        children: (0, b.jsx)(h.x, {
                          typography: "label-4-regular",
                          style: S ? "negative" : "primary",
                          children: v,
                        }),
                      }),
                    y,
                  ],
                }),
            ],
          }),
        });
      };
      Mt.displayName =
        "SimpleMessage/ChatBubbleContainer/index/ChatBubbleContainer";
      const Dt = (0, n.forwardRef)(Mt);
      const Pt = (e) =>
        (0, n.forwardRef)((t, a) => {
          const { children: n } = t;
          if (Array.isArray(n) ? n.some((e) => !!e) : !!n) {
            return (0, b.jsx)(e, {
              ...t,
              ref: a,
            });
          } else {
            return null;
          }
        });
      const Zt = "chat-bubble-author-name--wcq8WdoAQ9wU3nqB";
      const Lt = ({ children: e }) => {
        const { type: t } = at();
        if (t === "outgoing") {
          return null;
        } else {
          return (0, b.jsx)("span", {
            "data-qa": "chat-bubble-author-name",
            className: Zt,
            children: (0, b.jsx)(h.x, {
              Element: "span",
              typography: "label-3-regular",
              style: (() => {
                switch (t) {
                  case "incoming":
                    return "accent";
                  case "bot":
                    return "special";
                  default:
                    return;
                }
              })(),
              maxLines: 1,
              children: e,
            }),
          });
        }
      };
      Lt.displayName =
        "ChatBubbleContainer/ChatBubbleAuthorName/index/AuthorName";
      const Ft = Pt(Lt);
      const Ut = "chat-bubble-file-preview-wrapper--bxPLrIlwE78QPQ24";
      const Ot = "chat-bubble-file-preview--OwwH5Ri2DIF3L6Nf";
      const Bt = "chat-bubble-file-preview_shrinked--i8t1XhiLbx4VzGjl";
      const Ht = "chat-bubble-file-preview_incoming--wSqAtyXfZAxa5zkQ";
      const qt = "preview--Z9ywvVLbwp8PwXtK";
      const Vt = "chat-bubble-file-preview_outgoing--MHCYTPCQOMU4WPKR";
      const Wt = "chat-bubble-file-preview_bot--Vzv_FjBhqY0QBj4i";
      const Gt = "content--ZjzIoH0jnCoBCLkY";
      const zt = "indicators-container--gHxhqLBk501s3khC";
      const $t = "chatik.fileAttach.download.text";
      const Kt = ({
        trls: e,
        uploadId: t,
        fileName: a,
        url: n,
        previewUrl: s,
        shrinked: r,
        isLastAttach: o,
        ...l
      }) => {
        const { type: c, displayTimeInfo: d } = at();
        const u = (0, I.v)((0, Ve.h)(t));
        const p = (u == null ? undefined : u.content) || s;
        return (0, b.jsx)("div", {
          "data-qa": l["data-qa"] || "chat-bubble-file-attach",
          className: Ut,
          children: (0, b.jsxs)("div", {
            className: i()(Ot, {
              [Ht]: c === "incoming",
              [Vt]: c === "outgoing",
              [Wt]: c === "bot",
              [Bt]: r,
            }),
            children: [
              (0, b.jsx)("a", {
                href: n,
                target: "_blank",
                rel: "noreferrer",
                className: qt,
                children: p
                  ? (0, b.jsx)("img", {
                      src: p,
                      "data-qa": "chat-bubble-file-preview",
                      alt: "file preview",
                    })
                  : (0, b.jsx)(P.GhD, {}),
              }),
              (0, b.jsxs)("div", {
                className: Gt,
                children: [
                  (0, b.jsx)(h.x, {
                    "data-qa": "chat-bubble-filename",
                    style: c === "outgoing" ? "contrast" : "primary",
                    typography: "subtitle-2-semibold",
                    maxLines: 1,
                    children: a,
                  }),
                  (0, b.jsx)(Z.r, {
                    "data-qa": "chat-bubble-file-download-link",
                    href: n,
                    target: "_blank",
                    rel: "noreferrer",
                    style: c === "outgoing" ? "constant" : "accent",
                    typography: "label-3-regular",
                    children: e[$t],
                  }),
                ],
              }),
              o &&
                d.displayTimeContainer === "file-preview" &&
                (0, b.jsx)(dt, {
                  className: zt,
                }),
            ],
          }),
        });
      };
      Kt.displayName =
        "ChatBubbleContainer/ChatBubbleFileAttach/index/ChatBubbleFileAttach";
      const Yt = (0, u.Z)(Kt);
      const Qt = "chat-bubble-file-attachments--SKqAreWfgUtQ0WUe";
      const Xt = ({ files: e, messageId: t, isSpoiler: a }) => {
        const { displayTimeInfo: n } = at();
        if (e != null && e.length) {
          return (0, b.jsx)("div", {
            "data-qa": "chat-bubble-file-attachments-container",
            className: Qt,
            children: e.map((s, i) => {
              return (0, b.jsx)(
                Yt,
                {
                  "data-qa": `chatik-chat-message-${t}-file`,
                  url: Ue(s.url, a),
                  previewUrl: s.preview?.url,
                  fileName: s.title,
                  uploadId: s.upload_id,
                  shrinked: n.displayTimeContainer !== "file-preview",
                  isLastAttach: i === e.length - 1,
                },
                s.url,
              );
            }),
          });
        } else {
          return null;
        }
      };
      Xt.displayName =
        "ChatBubbleContainer/ChatBubbleFileAttachments/index/ChatBubbleFileAttachments";
      const Jt = Xt;
      var ea = a(30329);
      var ta = a(45150);
      var aa = a(61384);
      var na = a(89059);
      const sa = (e) => (e < 1 ? "horizontal" : "vertical");
      const ia = ({ width: e, height: t, isMobile: a }) => {
        const n = t / e;
        const s = ((e, t) =>
          sa(e) === "horizontal" ? (t ? 270 : 444) : Infinity)(n, a);
        const i = (function (e, t) {
          if (sa(e) === "vertical") {
            if (t) {
              return 270;
            } else {
              return 400;
            }
          } else {
            return Infinity;
          }
        })(n, a);
        const r = Math.min(e, s);
        const o = Math.round(r * n);
        if (o > i) {
          return {
            width: Math.round(i / n),
            height: i,
          };
        } else {
          return {
            width: r,
            height: o,
          };
        }
      };
      const ra = "wrapper--RMsNVnl9AJkKKGfD";
      const oa = "spoiler-wrapper--kRaBLvKjbiwpMzwp";
      const la = "blurred-background--VFzwmTucObIGLwCj";
      const ca = "image--CkeMYTK2xEQZSaQV";
      const da = "skeleton--ikcaKjmSlkj5Dg7k";
      const ua = "icon-plate--ptFTVoyuR34SooeN";
      const ha = "hidden--Y5qgR5NHH8IGhkbZ";
      const pa = (0, ea.makeSetStoreField)("viewer");
      const ma = ({
        cachedPreview: e,
        width: t,
        height: a,
        previewUrl: s,
        downloadUrl: r,
        name: o,
        handleImageWidth: l,
        isSpoiler: c,
        message: d,
        ...u
      }) => {
        const h = (0, R.useDispatch)();
        const { isMobile: p } = (0, aa.G)();
        const [m, v] = (0, n.useState)(0);
        const [y, f] = (0, n.useState)(!e);
        const [w, x] = (0, n.useState)(false);
        const k = (0, n.useRef)();
        const C = (0, n.useRef)(null);
        const I = y || w;
        const S = () => {
          f(false);
        };
        const E = (0, n.useMemo)(
          () =>
            ia({
              width: t,
              height: a,
              isMobile: p,
            }),
          [p, a, t],
        );
        (0, n.useEffect)(() => {
          if (l != null) {
            l(E.width);
          }
        }, [E.width, l]);
        (0, n.useEffect)(
          () => () => {
            clearTimeout(k.current);
          },
          [],
        );
        (0, n.useEffect)(() => {
          var e;
          if ((e = C.current) !== null && e !== undefined && e.complete) {
            S();
          }
        }, []);
        const T = {
          width: E.width,
          height: E.height,
        };
        return (0, b.jsxs)("a", {
          className: i()(ra, {
            [oa]: c,
          }),
          id: "viewer-activator",
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-qa": u["data-qa"],
          draggable: false,
          onClick: (e) => {
            if (c) {
              return;
            }
            e.preventDefault();
            const n = {
              image: {
                url: r,
                width: t,
                height: a,
              },
              viewerTitle: d.participantDisplay.name,
              viewerSubtitle: (0, g.Z)(d.creationTime, "d MMMM yyyy HH:mm"),
              meta: {
                chatId: d.chatId,
                messageId: d.id,
              },
            };
            if (na.vK) {
              return (0, na.AW)("imageOpen", n);
            } else {
              return h(pa(n));
            }
          },
          children: [
            (0, b.jsx)("img", {
              src: (e == null ? undefined : e.content) || s,
              className: la,
              alt: "image background",
              draggable: false,
            }),
            (0, b.jsx)(
              "img",
              {
                "data-qa": "file-image-preview",
                ref: C,
                src: (e == null ? undefined : e.content) || s,
                className: i()(ca, {
                  [ha]: I,
                }),
                loading: "lazy",
                style: T,
                alt: o,
                onError: () => {
                  if (m >= 5) {
                    x(true);
                    f(false);
                    return;
                  }
                  k.current = setTimeout(() => {
                    v((e) => e + 1);
                  }, 3000);
                },
                onLoad: S,
                draggable: false,
              },
              m,
            ),
            I &&
              (0, b.jsxs)(b.Fragment, {
                children: [
                  (0, b.jsx)("div", {
                    className: da,
                    style: T,
                  }),
                  (0, b.jsx)("div", {
                    className: ua,
                    children: y
                      ? (0, b.jsx)(ta.a, {
                          initial: "accent",
                          size: 24,
                        })
                      : (0, b.jsx)(P.GhD, {
                          initialColor: "accent",
                        }),
                  }),
                ],
              }),
          ],
        });
      };
      ma.displayName =
        "ChatBubbleImageAttachments/FileImagePreview/index/FileImagePreview";
      const va = ma;
      const ga = "chat-bubble-image-attachments--SKLDuudy87MNOwpR";
      const ya = ({ images: e, message: t, isSpoiler: a }) => {
        const n = (0, I.v)(Ve.y);
        return (0, b.jsx)("div", {
          className: ga,
          children:
            e == null
              ? undefined
              : e.map((e) => {
                  const o = n == null ? undefined : n[e.upload_id];
                  return (0, b.jsx)(
                    va,
                    {
                      "data-qa": `chatik-chat-message-${t.id}-image`,
                      message: t,
                      isSpoiler: a,
                      previewUrl: e.preview?.url || "",
                      width:
                        (o == null ? undefined : o.width) ||
                        e.properties?.width ||
                        0,
                      height:
                        (o == null ? undefined : o.height) ||
                        e.properties?.height ||
                        0,
                      cachedPreview: n[e.upload_id],
                      downloadUrl: Ue(e.url, a),
                      name: e.title,
                    },
                    e.url,
                  );
                }),
        });
      };
      ya.displayName =
        "ChatBubbleContainer/ChatBubbleImageAttachments/index/ChatBubbleImageAttachments";
      const fa = ya;
      const wa = "container--T2uO7jWFS_A1Y6V2";
      const xa = "skeleton--HRAkJpuC0y4RlRBx";
      const ba = "image--Rdv3zhSBtcsXHeYt";
      const ka = "image_loaded--hm0QbFTvAl4CpZsr";
      const Ca = ({
        className: e,
        src: t,
        height: a,
        width: s,
        onImageAspectRatio: r,
        ...o
      }) => {
        const [l, c] = (0, n.useState)(true);
        const [d, u] = (0, n.useState)(false);
        const h = (0, n.useRef)();
        const p = (0, n.useRef)();
        h.current = r;
        (0, n.useEffect)(() => {
          const e = new Image();
          e.src = t;
          const a = () => {
            var t;
            if ((t = h.current) !== null && t !== undefined) {
              t.call(h, e.width / e.height);
            }
            if (p.current) {
              clearTimeout(p.current);
            }
            p.current = setTimeout(() => c(false), 0);
          };
          const n = () => {
            u(true);
          };
          if (e.complete) {
            a();
          } else {
            e.addEventListener("load", a);
            e.addEventListener("error", n);
          }
          return () => {
            e.removeEventListener("load", a);
            e.removeEventListener("error", n);
            if (p.current) {
              clearTimeout(p.current);
            }
          };
        }, [t]);
        const m =
          s || a
            ? {
                width: s ? `${s}px` : undefined,
                height: a ? `${a}px` : undefined,
              }
            : {};
        return (0, b.jsxs)("div", {
          className: i()(wa, e),
          style: m,
          children: [
            l &&
              (0, b.jsx)("div", {
                className: xa,
                children:
                  !d &&
                  (0, b.jsx)(ta.a, {
                    size: 24,
                  }),
              }),
            (0, b.jsx)("img", {
              ...o,
              src: t,
              className: i()(ba, {
                [ka]: !l,
              }),
            }),
          ],
        });
      };
      Ca.displayName = "src/components/Image/ImageView";
      const Ia = (0, n.memo)(Ca);
      var Sa = a(91010);
      var Ea = a(17223);
      const Ta = /\((c|tm|r)\)/gi;
      const _a = {
        c: "©",
        r: "®",
        tm: "™",
      };
      const ja = ({
        siteRoot: e,
        href: t,
        shouldCheck: a,
        chatId: n,
        messageId: s,
      }) => {
        const i = t.startsWith("mailto:");
        if (!a || i) {
          return t;
        }
        const r = Sa.j.stringify({
          to: t,
          chatId: n ?? null,
          messageId: s ?? null,
        });
        return (0, Ea.ni)(`${e}/away?${r}`);
      };
      const Na = (e) => {
        if (
          (t = (({ html: e, shouldCheckLinks: t, ...a }) =>
            e.replace(
              /<a href="(.*?)"/g,
              (e, n) =>
                `<a target="_blank" rel="noopener noreferrer" href="${ja({
                  href: n,
                  shouldCheck: t,
                  ...a,
                })}"`,
            ))(e).replace(/\n$/, "")).includes("(")
        ) {
          return t.replace(Ta, (e, t) => _a[t.toLowerCase()]);
        } else {
          return t;
        }
        var t;
      };
      const Aa = "chat-bubble-snippet--lnjnsQFfWMQYZMdx";
      const Ra = "chat-bubble-snippet_incoming--Eq0rF63jWaQ6kKG8";
      const Ma = "chat-bubble-snippet_outgoing--EjHodk5_MXrxV91h";
      const Da = "chat-bubble-snippet_bot--ZLRlDj5NS58jPw0M";
      const Pa = "snippet-text--sO6WiCPyqoocLipX";
      const Za = ({
        title: e,
        description: t,
        children: a,
        dataQaTitle: n,
        dataQaDescription: s,
        ...r
      }) => {
        const { type: o } = at();
        const l = () => (o === "outgoing" ? "contrast" : "primary");
        return (0, b.jsxs)("div", {
          className: i()(Aa, {
            [Ra]: o === "incoming",
            [Ma]: o === "outgoing",
            [Da]: o === "bot",
          }),
          ...r,
          children: [
            (e || t) &&
              (0, b.jsxs)("div", {
                className: Pa,
                children: [
                  e &&
                    (0, b.jsx)(h.x, {
                      "data-qa": n,
                      style: l(),
                      typography: "subtitle-3-semibold",
                      maxLines: 2,
                      children: e,
                    }),
                  t &&
                    (0, b.jsx)(h.x, {
                      "data-qa": s,
                      style: l(),
                      typography: "label-4-regular",
                      children: t,
                    }),
                ],
              }),
            a,
          ],
        });
      };
      Za.displayName =
        "ChatBubbleContainer/ChatBubbleSnippet/index/ChatBubbleSnippet";
      const La = Za;
      const Fa = "link-preview-wrapper--PAiZVApzH8YCCkd3";
      const Ua = "link-preview--cgyuR_tbBUrM6Wr3";
      const Oa = "link-preview_size-resolved--SQ3fm5OqNRIZgxaZ";
      const Ba = "image--WfH8duABDeY8oeUs";
      const Ha = "link-preview";
      const qa = ({
        image: e,
        title: t,
        description: a,
        url: s,
        textRef: r,
        shouldCheckLink: o,
        chatId: l,
        messageId: c,
      }) => {
        const d = (0, I.v)((e) => e.siteRoot);
        const [u, h] = (0, n.useState)();
        const [p, m] = (0, n.useState)();
        const v = Boolean(t || a || e);
        (0, n.useLayoutEffect)(() => {
          const e = new ResizeObserver(([e]) => {
            const t = Math.max(e.contentRect.width, 272);
            h(Math.max(t, (p ?? 0) * 200));
          });
          if (p && r != null && r.current) {
            e.observe(r.current);
          }
          return () => {
            e.disconnect();
          };
        }, [r, p]);
        if (v) {
          return (0, b.jsx)("div", {
            className: Fa,
            children: (0, b.jsx)("a", {
              className: i()(Ua, {
                [Oa]: Boolean(u),
              }),
              href: ja({
                siteRoot: d,
                href: s,
                shouldCheck: o,
                chatId: l,
                messageId: c,
              }),
              style: {
                maxWidth: u,
              },
              target: "_blank",
              rel: "noreferrer",
              "data-qa": Ha,
              children: (0, b.jsx)(La, {
                title: t,
                description: a,
                children:
                  e &&
                  (0, b.jsx)(Ia, {
                    className: Ba,
                    src: e,
                    onImageAspectRatio: m,
                  }),
              }),
            }),
          });
        } else {
          return null;
        }
      };
      qa.displayName =
        "ChatBubbleContainer/ChatBubbleLinkPreview/index/ChatBubbleLinkPreview";
      const Va = qa;
      var Wa = a(57961);
      var Ga = a.n(Wa);
      var za = a(69818);
      var $a = a.n(za);
      const Ka = "chat-bubble-action--aKTbnNBd1movd7i4";
      const Ya = "compact-view--B2_eTtHWGmwUnTW_";
      const Qa = ({ size: e = "full", children: t, ...a }) =>
        (0, b.jsx)("div", {
          className: i()(Ka, {
            [Ya]: e === "compact",
          }),
          children: (0, b.jsx)(B.z, {
            stretched: true,
            mode: "secondary",
            style: "neutral",
            size: "small",
            ...a,
            children: t,
          }),
        });
      Qa.displayName =
        "ChatBubbleContainer/ChatBubbleAction/index/ChatBubbleAction";
      const Xa = Qa;
      const Ja = "actions-container--lf6ELKa3pnIqF_kl";
      const en = "chatik.sendEvent.error.text";
      const tn = ({
        trls: e,
        actions: t,
        chatId: a,
        messageId: s,
        onMessageSend: i,
        hideTextButtons: r,
      }) => {
        const [o, l] = (0, n.useState)({});
        const c = (0, Q.Z)();
        const { text_buttons: d, buttons: u } = t;
        const h = Boolean(
          u == null ? undefined : u.some((e) => e.type === "open_link"),
        );
        const p = Boolean(
          u == null ? undefined : u.some((e) => e.type === "send_event"),
        );
        const m = Boolean(d == null ? undefined : d.length) && !r;
        const v = (t, n) => () => {
          l((e) => ({
            ...e,
            [t.event]: true,
          }));
          Ga()({
            buttonName: "chat_event_button",
            text: n,
            chatId: a,
            messageId: s,
          });
          const { event: i, ...r } = t;
          K.Z.post("/chatik/api/send_event", {
            chatId: a,
            messageId: s,
            event: i,
            eventParams: r,
          })
            .catch(() => {
              c({
                kind: "error",
                content: e[en],
                autoClose: true,
              });
            })
            .finally(() => {
              l((e) => ({
                ...e,
                [t.event]: false,
              }));
            });
        };
        if (h || p || m) {
          return (0, b.jsxs)(M.ElementShownAnchor, {
            fn: $a(),
            className: Ja,
            messageId: s,
            chatId: a,
            has_event_buttons: p,
            has_link_buttons: h,
            has_text_buttons: m,
            children: [
              u == null
                ? undefined
                : u.map(({ type: e, text: t, size: n, data: i }) => {
                    if (e === "open_link") {
                      const { url: e } = i;
                      return (0, b.jsx)(
                        Xa,
                        {
                          Element: "a",
                          href: e,
                          target: "_blank",
                          size: n,
                          "data-qa": "bubble-action_open-link",
                          onClick: () => {
                            Ga()({
                              buttonName: "chat_link_button",
                              text: t,
                              chatId: a,
                              messageId: s,
                            });
                          },
                          children: t,
                        },
                        t,
                      );
                    }
                    if (e === "send_event") {
                      return (0, b.jsx)(
                        Xa,
                        {
                          loading: o[i.event],
                          size: n,
                          "data-qa": "bubble-action_send-event",
                          onClick: v(i, t),
                          children: t,
                        },
                        t,
                      );
                    } else {
                      return null;
                    }
                  }),
              !r &&
                (d == null
                  ? undefined
                  : d.map(({ text: e, size: t }) =>
                      (0, b.jsx)(
                        Xa,
                        {
                          size: t,
                          "data-qa": "bubble-action_send-text",
                          onClick: (t) =>
                            ((e, t) => {
                              i(t);
                              e.currentTarget.blur();
                              Ga()({
                                buttonName: "chat_text_button",
                                text: t,
                                chatId: a,
                                messageId: s,
                              });
                            })(t, e),
                          children: e,
                        },
                        e,
                      ),
                    )),
            ],
          });
        } else {
          return null;
        }
      };
      tn.displayName =
        "ChatBubbleContainer/ChatBubbleMessageActions/index/ChatBubbleMessageActions";
      const an = (0, u.Z)(tn);
      var nn;
      var sn = a(29610);
      var rn = a.n(sn);
      const on = ["ru_RU", "en_US", "en_RU", "ru_UA", "uk_UA", "tr_TR"];
      const ln =
        typeof window != "undefined" &&
        window.globalServiceVars.chatik.countryId;
      let cn =
        typeof window != "undefined" &&
        ((nn = navigator.languages) !== null && nn !== undefined && nn.length
          ? navigator.languages[0]
          : navigator.language
        ).replace("-", "_");
      if (ln === "2" && cn === "en_RU") {
        cn = "uk_UA";
      }
      const dn = {
        mapZoom: 16,
        placemarkIcon:
          typeof window != "undefined"
            ? `${window.globalServiceVars.chatik.staticHost}/static/images/map-pin__min_.svg`
            : null,
        placemarkIconSize: [24, 24],
        placemarkOffset: [0, 10],
        placemarkZIndex: 999,
      };
      const un = (e, t) => {
        const {
          address: a,
          disableScrollZoom: n,
          disableDrag: s,
          disableDblClickZoom: i,
          mapZoom: r,
          onPlacemarkClick: o,
          placemarkIcon: l,
          placemarkIconSize: c,
          placemarkOffset: d,
          placemarkZIndex: u,
          zoomControlPosition: h,
        } = {
          ...dn,
          ...t,
        };
        return rn()({
          lang: on.includes(cn) ? cn : "ru_RU",
        })
          .catch((e) => Promise.reject(e))
          .then((t) => {
            const { center: p, marker: m } = a.mapData.points;
            const v = new t.Map(
              e,
              {
                center: [p.lat, p.lng],
                zoom: p.zoom,
                controls: h ? [] : ["zoomControl"],
              },
              {
                maxZoom: 20,
                yandexMapDisablePoiInteractivity: true,
                suppressMapOpenBlock: true,
              },
            );
            if (h) {
              v.controls.add(
                new t.control.ZoomControl({
                  options: {
                    position: h,
                  },
                }),
              );
            }
            const g = {
              scrollZoom: n,
              drag: s,
              dblClickZoom: i,
            };
            const y = Object.keys(g).filter((e) => g[e]);
            if (y.length) {
              v.behaviors.disable(y);
            }
            if (m) {
              const e = [m.lat, m.lng];
              const a = new t.Placemark(
                e,
                {},
                {
                  iconLayout: "default#image",
                  iconImageHref: l,
                  iconImageSize: c,
                  iconOffset: d,
                  zIndex: u,
                },
              );
              if (o) {
                a.events.add("click", (e) => {
                  o();
                  e.preventDefault();
                });
              }
              v.geoObjects.add(a);
              v.setCenter(e, r);
            }
            v.container.fitToViewport();
            return {
              mapInstance: v,
              ymaps: t,
            };
          });
      };
      const hn = "metro-station-list--RMfS6KqZ6lMEvsVa";
      const pn = "metro-station--QcrGCqMRsvsERTcO";
      const mn = "metro-station-dot--lS311gHm7ZIFfyT5";
      const vn = "chat-bubble-map-container--DLNppkf0nWo15Q_k";
      const gn = ({ address: e, chatId: t, messageId: a }) => {
        const i = (0, n.useRef)(null);
        const { type: r } = at();
        (0, n.useEffect)(() => {
          if (i.current && e) {
            un(i.current, {
              address: e,
              disableDrag: true,
            });
          }
        }, [e]);
        const o = (0, n.useCallback)(
          (n) => {
            var s;
            const i =
              e == null || (s = e.mapData) === null || s === undefined
                ? undefined
                : s.points.marker;
            if (i && n.target.tagName !== "A") {
              ((e, t) => {
                const a = new URL(Ea.yG);
                a.searchParams.append("ll", `${e[1]},${e[0]}`);
                const n = t
                  ? `${a.toString()}&text=${encodeURIComponent(t)}`
                  : a.toString();
                if (typeof window != "undefined") {
                  window.open(n, "_blank");
                }
              })([i.lat, i.lng], e.displayName);
              M.default.sendHHEventButtonClick("chat_message_map", {
                chatId: t,
                messageId: a,
              });
            }
          },
          [e, t, a],
        );
        if (!e) {
          return null;
        }
        const l = e.metroStations?.metro || [];
        const { displayName: c, description: d } = e;
        const u = Boolean(l.length);
        return (0, b.jsxs)(La, {
          title: c,
          description: d,
          dataQaTitle: "message-map-adress",
          children: [
            (0, b.jsx)("div", {
              id: "message-map-wrapper",
              className: vn,
              ref: i,
              onClick: o,
            }),
            u &&
              (0, b.jsx)("div", {
                "data-qa": "metro-stations-list",
                className: hn,
                children: l.map(({ name: e, line: t }) =>
                  (0, b.jsxs)(
                    "span",
                    {
                      "data-qa": "metro-station",
                      className: pn,
                      children: [
                        (0, b.jsx)("span", {
                          className: mn,
                          style: {
                            backgroundColor: t.color,
                          },
                        }),
                        (0, b.jsx)(h.x, {
                          typography: "label-4-regular",
                          style: r === "outgoing" ? "contrast" : "primary",
                          children: e,
                        }),
                      ],
                    },
                    e + t.color,
                  ),
                ),
              }),
          ],
        });
      };
      gn.displayName =
        "ChatBubbleContainer/ChatBubbleMessageMap/index/ChatBubbleMessageMap";
      const yn = (0, n.memo)((0, u.Z)(gn));
      const fn = "chat-bubble-message-title--lq4NiX7NDmYSoStP";
      const wn = {
        applicant: {
          [Le.J.Invitation]: "chatik.workflowTransition.invitation",
          [Le.J.Response]: "chatik.workflowTransition.response",
          [Le.J.Discard]: "chatik.workflowTransition.discardByEmployer",
          [Le.J.Interview]: "chatik.workflowTransition.interview",
          [Le.J.Hired]: "chatik.workflowTransition.hired",
          firstContact:
            "chatik.workflowTransition.response.applicantFirstContact",
          discardByApplicant:
            "chatik.workflowTransition.discardByApplicant.applicantForm",
        },
        employer: {
          [Le.H.Response]: "chatik.workflowTransition.response",
          [Le.H.PhoneInterview]: "chatik.workflowTransition.phoneInterview",
          [Le.H.Interview]: "chatik.workflowTransition.interview",
          [Le.H.DiscardByEmployer]:
            "chatik.workflowTransition.discardByEmployer.softForm",
          [Le.H.DiscardByApplicant]:
            "chatik.workflowTransition.discardByApplicant",
          [Le.H.DiscardNoInteraction]:
            "chatik.workflowTransition.discardNoInteraction",
          [Le.H.DiscardToOtherVacancy]:
            "chatik.workflowTransition.discardToOtherVacancy",
          [Le.H.DiscardVacancyClosed]:
            "chatik.workflowTransition.discardVacancyClosed",
          [Le.H.Assesment]: "chatik.workflowTransition.assesment",
          [Le.H.Consider]: "chatik.workflowTransition.consider",
          [Le.H.Hired]: "chatik.workflowTransition.hired",
          [Le.H.Offer]: "chatik.workflowTransition.offer",
        },
        service: {
          onlyVisible: "chatik.messsages.service.onlyVisible",
        },
        suggestReview: "chatik.messsages.leaveReview",
      };
      const xn = ({ children: e }, t) => {
        const {
          type: a,
          displayTimeInfo: { displayTimeContainer: n },
        } = at();
        return (0, b.jsx)("div", {
          className: fn,
          children: (0, b.jsxs)(h.x, {
            "data-qa": "chat-bubble-title",
            style: a === "outgoing" ? "contrast" : "primary",
            typography: "subtitle-2-semibold",
            ref: t,
            children: [e, n === "title" && (0, b.jsx)(dt, {})],
          }),
        });
      };
      xn.displayName =
        "ChatBubbleContainer/ChatBubbleMessageTitle/index/ChatBubbleMessageTitle";
      const bn = Pt((0, n.forwardRef)(xn));
      let kn = (function (e) {
        e.Unfair = "UNFAIR";
        e.Fair = "FAIR";
        e.Good = "GOOD";
        e.Excellent = "EXCELLENT";
        return e;
      })({});
      var Cn = a(89016);
      const In = "chatik.testSolution.viewResults.magritte";
      const Sn = {
        one: "chatik.testSolution.score.one",
        some: "chatik.testSolution.score.some",
        many: "chatik.testSolution.score.many",
      };
      const En = {
        [kn.Unfair]: "chatik.testSolution.mark.unfair",
        [kn.Fair]: "chatik.testSolution.mark.fair",
        [kn.Good]: "chatik.testSolution.mark.good",
        [kn.Excellent]: "chatik.testSolution.mark.excellent",
      };
      const Tn = ({ trls: e, children: t }) => {
        const a = (0, I.v)(E.Fq);
        const n = (0, I.v)((e) => e.siteRoot);
        const { type: s } = at();
        const i = (0, Sa.j)(`${n}/employer/vacancy_response/test`);
        i.params = {
          topicId: a == null ? undefined : a.topicId,
        };
        return (0, b.jsxs)(Z.r, {
          "data-qa": "message-test-view-result",
          href: i.href,
          target: "_blank",
          typography: "label-3-regular",
          inline: true,
          style: s === "incoming" ? "accent" : "constant",
          children: [
            e[In],
            ": ",
            (0, b.jsxs)("span", {
              "data-qa": "message-test-score",
              children: [
                t.score,
                " ",
                e[Sn[(0, Cn.Z)(t.score, ["one", "some", "many"])]],
                ` (${e[En[t.mark]]})`,
              ],
            }),
          ],
        });
      };
      Tn.displayName =
        "SimpleMessage/ChatBubbleContainer/ChatBubbleTestResult/ChatBubbleTestResult";
      const _n = (0, u.Z)(Pt(Tn));
      var jn = a(89927);
      const Nn = /(https?:\/\/[^\s<]+)/g;
      const An = "markdown--po02tUmuyrM7KPYt";
      const Rn = ((
        e = {
          typographer: false,
        },
      ) => {
        const t = new jn._(e);
        t.block.ruler.disable([
          "list",
          "footnote",
          "table",
          "blockquote",
          "code",
          "fences",
          "deflist",
          "htmlblock",
          "lheading",
        ]);
        t.renderer.rules.image = () => "";
        t.renderer.rules.heading_close = (e, t) => `</h${e[t].hLevel}>`;
        t.renderer.rules.text = function (e, t) {
          return (e[t].content || "")
            .split(Nn)
            .map((e) =>
              Nn.test(e)
                ? `<a href="${e}">${e}</a>`
                : e
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;"),
            )
            .join("");
        };
        return t;
      })();
      const Mn = (
        { text: e, shouldCheckLinks: t, chatId: a, messageId: n },
        s,
      ) => {
        const i = (0, I.v)((e) => e.siteRoot);
        const r = Rn.render(
          ((e) =>
            e
              .replace(/\r\n/g, "\n")
              .replace(/\n{2,}/g, (e) =>
                new Array(e.length - 1)
                  .fill("\n\n---\n\n")
                  .concat("\n")
                  .join(""),
              ))(e),
        );
        return (0, b.jsx)("span", {
          className: An,
          ref: s,
          dangerouslySetInnerHTML: {
            __html: Na({
              siteRoot: i,
              html: r,
              shouldCheckLinks: t,
              chatId: a,
              messageId: n,
            }),
          },
        });
      };
      Mn.displayName = "components/Markdown/index/Markdown";
      const Dn = (0, n.forwardRef)(Mn);
      const Pn = (0, n.memo)(Dn);
      const Zn = "chat-bubble-text-container--tLVS5bkenTEsX0kv";
      const Ln = "chat-bubble-text--XJMldv8jNgMtyLaI";
      const Fn = "fake-block-divider--QAuyVWbwK0a7lcqp";
      const Un = "chat-bubble-text_contrast--BpNaze3RS60Mty5w";
      const On = "inline-indicators--kotJSFDRigb_VS1D";
      const Bn = "chatik.message.noResponseText";
      const Hn = (
        { chatId: e, messageId: t, shouldCheckLinks: a = false, children: s },
        r,
      ) => {
        const {
          type: o,
          displayTimeInfo: { displayTimeContainer: l },
        } = at();
        return (0, b.jsxs)("span", {
          id: "chatBubbleText",
          ref: r,
          className: i()(Zn, {
            [Un]: o === "outgoing",
          }),
          children: [
            (0, b.jsx)("span", {
              "data-qa": "chat-bubble-text",
              className: Ln,
              children: n.Children.map(s, (s) =>
                typeof s == "string"
                  ? (0, b.jsxs)(n.Fragment, {
                      children: [
                        (0, b.jsx)(Pn, {
                          text: s,
                          shouldCheckLinks: a,
                          chatId: e,
                          messageId: t,
                        }),
                        (0, b.jsx)("span", {
                          className: Fn,
                        }),
                      ],
                    })
                  : s,
              ),
            }),
            l === "text" &&
              (0, b.jsx)(dt, {
                className: On,
              }),
          ],
        });
      };
      Hn.displayName =
        "ChatBubbleContainer/ChatBubbleText/index/ChatBubbleText";
      const qn = (0, n.forwardRef)(Hn);
      qn.displayName = "ChatBubbleText";
      const Vn = Pt(qn);
      var Wn = a(72675);
      var Gn = a(67073);
      let zn = (function (e) {
        e.EmployerReviewsFront =
          "/employer_reviews/proxy_components/chatik_interview_wizard";
        return e;
      })({});
      const $n = ({ frontend: e, params: t, place: a, host: n }) => {
        const s = (0, Sa.j)(e);
        const i = (0, I.v)(({ request: e }) => e);
        s.params = t;
        return (0, b.jsx)(Wn.X, {
          place: a,
          url: `${n}${s.href}`,
          pageName: i.pageName,
          hhtmSource: (0, Gn.H)(),
          preloadContent: (0, b.jsx)(ta.a, {
            size: 24,
          }),
        });
      };
      $n.displayName = "components/MicroFrontEndLite/index/MicroFrontEndLite";
      const Kn = (0, n.memo)($n, () => true);
      const Yn = "action-wrapper--QMXcG1kvGEBGG68o";
      const Qn = "action-wrapper_my-message--kEOZrh2U6Vvr65jx";
      const Xn = "message-button--ra6pK0f6xB0Jz_6l";
      const Jn = ({ isMyMessage: e }) => {
        const t = (0, I.v)(E.A1);
        const a = (0, I.v)(E.Fq);
        const n = (0, I.v)((e) => e.siteRoot);
        const s = (0, I.v)(
          ({ config: e }) =>
            e.externalMicroFrontendHosts.employerReviewsFrontHost,
        );
        if (t != null && t.company.id && a) {
          return (0, b.jsx)("div", {
            className: i()(Yn, {
              [Qn]: e,
            }),
            children: (0, b.jsx)("div", {
              className: Xn,
              children: (0, b.jsx)(Kn, {
                frontend: zn.EmployerReviewsFront,
                place: "suggested-review",
                host: s,
                params: {
                  employerId: t.company.id,
                  employerName: t.company.name,
                  areaId: t.area["@id"],
                  topicId: a.topicId,
                  position: t.name,
                  hasOffer: a.currentApplicantState === Le.J.Invitation,
                  siteRoot: n,
                },
              }),
            }),
          });
        } else {
          return null;
        }
      };
      Jn.displayName =
        "SimpleMessage/SuggestedReviewAction/index/SuggestedReviewAction";
      const es = Jn;
      var ts = a(48023);
      var as = a.n(ts);
      const ns = ({ chatId: e, message: t, preview: a, messageRef: s }) => {
        const { id: i, isSending: r } = t;
        (({
          isSending: e,
          messageRef: t,
          preview: a,
          chatId: s,
          messageId: i,
        }) => {
          (0, n.useEffect)(() => {
            if (
              e ||
              !a ||
              "loading" in a ||
              !t.current ||
              !window.IntersectionObserver
            ) {
              return;
            }
            const n = t.current;
            const r = new IntersectionObserver(([e]) => {
              if (e.isIntersecting) {
                as()(n, {
                  chatId: s,
                  messageId: i,
                  link: a.url,
                  has_title: a.ok && Boolean(a.title),
                  has_text: a.ok && Boolean(a.description),
                  has_image: a.ok && Boolean(a.image),
                  status: a.status ? String(a.status) : undefined,
                });
              }
            });
            r.observe(n);
            return () => {
              r.unobserve(n);
            };
          }, [s, e, i, t, a]);
        })({
          messageRef: s,
          preview: a,
          chatId: e,
          messageId: i,
          isSending: r,
        });
        (0, n.useEffect)(() => {
          if (s.current && t.adviceType) {
            M.default.sendHHEventElementShown(s.current, {
              name: t.adviceType,
              chatId: e,
            });
          }
        }, [e, t.adviceType, s]);
      };
      const ss = (e, t) => {
        try {
          const a = new URL(e);
          return a.searchParams.get(t);
        } catch (e) {
          return null;
        }
      };
      var is = a(52855);
      const rs = ({ chatId: e, message: t, messageRef: a, preview: s }) => {
        const i = (0, I.v)((e) => e.siteRoot);
        const o = (0, R.useDispatch)();
        const l = (0, n.useCallback)(
          (a) => {
            if (t.adviceType) {
              return;
            }
            const n = a.currentTarget;
            const s = ((e, t) => new RegExp(`^${e}/away\\?to=`).test(t))(
              i,
              n.href,
            );
            var l;
            var c;
            M.default.sendHHEvent("chat_message_link_click", {
              chatId: e,
              messageId: t.id,
              link: s ? ss(n.href, "to") : n.href,
              fromPreview: n.getAttribute("data-qa") === Ha,
            });
            if (s) {
              a.preventDefault();
              o(
                ((l = n.href),
                (c = t.id),
                async (e, t) => {
                  const a = ss(l, "to");
                  if (a) {
                    e(is.Z.setCurentUrl(a));
                    e(is.Z.openScreen());
                    e(is.Z.setMessageId(c));
                    try {
                      const n = t().linkCheck;
                      const s = n.result[n.currentUrl || ""];
                      const i =
                        s && s.status !== "ERROR"
                          ? s
                          : (
                              await K.Z.post("/chatik/api/check_link", {
                                url: a,
                              })
                            ).data;
                      e(is.Z.setResult(a, i));
                      if (i.status === "SAFE") {
                        e(is.Z.closeScreen());
                        window.open(a, "_blank");
                      }
                    } catch (t) {
                      e(
                        is.Z.setResult(a, {
                          status: "ERROR",
                        }),
                      );
                    }
                  } else {
                    r.c.log("out", new Error("Url parse error"), {
                      href: l,
                    });
                  }
                }),
              );
            }
          },
          [t.adviceType, t.id, i, e, o],
        );
        (0, n.useEffect)(() => {
          const e = (t = a.current) ? [...t.getElementsByTagName("a")] : [];
          var t;
          e.forEach((e) => e.addEventListener("click", l));
          return () => {
            e.forEach((e) => e.removeEventListener("click", l));
          };
        }, [l, s, t.text, a]);
      };
      var os = a(68895);
      const ls = "message--ObAiH0ml6LsDWxjP";
      const cs = "cover-letter-widget--Z6gDKmH8otgnJxzr";
      const ds = "message_my--Wi8gXDv_wwQE2mt_";
      const us = "chatik.addCoverLetter.text";
      const hs = ({
        message: e,
        nextMessage: t,
        prevMessage: a,
        hideMessage: s,
        isSpoiler: r,
        sendTextMessage: o,
        disableLinkPreview: l,
        avatarsDisabled: u,
        trls: h,
        ...p
      }) => {
        const v = (0, I.v)((e) => e.chatData.chat.id);
        const g = (0, I.v)(({ chatData: e }) => e.chat.currentParticipantId);
        const y = (0, I.v)((t) => (0, E.sQ)(t, e.id));
        const f = (0, I.v)((t) => (0, E.Eo)(t, (0, He.fg)(qe.U.Address, e)));
        const w = (0, I.v)(Ve.y);
        const [x, k] = (0, n.useState)(false);
        const C = (0, R.useDispatch)();
        const { isApplicant: S } = (0, Be.Z)();
        const T = Oe();
        const _ = Boolean(e.flags?.shouldCheckLinks);
        const j = (0, n.useRef)(null);
        const N = (0, n.useRef)(null);
        const A = (0, n.useRef)(null);
        const L = (0, n.useRef)(true);
        const F = Pe(e.text);
        const U = a && !d(a, e);
        const O = e.participantId === g || Boolean(e.isSending);
        const B = e.files;
        const [H, q] = (0, n.useMemo)(
          () =>
            ((e, t) => {
              return (
                (e == null
                  ? undefined
                  : e.reduce(
                      (e, a) => {
                        e[
                          (0, os.t)(a.content_type) &&
                          (a.preview?.url ||
                            (t == null ? undefined : t[a.upload_id]))
                            ? 0
                            : 1
                        ].push(a);
                        return e;
                      },
                      [[], []],
                    )) ?? [[], []]
              );
            })(B, w),
          [B, w],
        );
        const W = Boolean(H.length);
        const G = Boolean(q == null ? undefined : q.length);
        const z = (0, He.jH)(qe.U.Address, e);
        const $ = O && !r && !x;
        const K = (0, He.jH)(qe.U.NegotiationTopicSuggestedForReview, e);
        const Y = Re({
          message: e,
          nextMessage: t,
          isMyMessage: O,
          isSending: x,
        });
        ns({
          chatId: v,
          message: e,
          messageRef: j,
          preview: F,
        });
        rs({
          chatId: v,
          message: e,
          messageRef: j,
          preview: F,
        });
        (0, n.useEffect)(() => {
          if (e.isSending) {
            A.current = setTimeout(() => {
              k(true);
            }, 1000);
          }
          return () => {
            if (A.current) {
              clearTimeout(A.current);
            }
          };
        }, [e.isSending]);
        (0, n.useEffect)(() => {
          if (!L.current && s != null) {
            s();
          }
        }, []);
        const Q = $ ? Ie : n.Fragment;
        const X = $
          ? {
              message: e,
              bubbleRef: j,
            }
          : {};
        const J = Fe(e) && !e.text && S && !p.isVacancyArchived;
        const ee = !S && y;
        const te =
          U || !a || a.type !== c.u.Simple
            ? e.participantDisplay.name
            : undefined;
        const ae = Y.status === "error";
        const ne = (() => {
          const t = ((e, t) => {
            const { workflowTransition: a } = e;
            if ((0, He.jH)(qe.U.NegotiationTopicSuggestedForReview, e)) {
              return wn.suggestReview;
            } else if (
              (a == null ? undefined : a.applicantState) === Le.J.Response &&
              t
            ) {
              return wn.applicant.firstContact;
            } else if (
              (a == null ? undefined : a.applicantState) === Le.J.Discard &&
              a != null &&
              a.declinedByApplicant
            ) {
              return wn.applicant.discardByApplicant;
            } else if (a != null && a.applicantState) {
              return wn.applicant[a.applicantState];
            } else if (a != null && a.employerState) {
              return wn.employer[a.employerState];
            } else {
              return null;
            }
          })(e, T);
          if (t) {
            return h[t];
          } else {
            return null;
          }
        })();
        const se = (() => {
          const t = ((e) => (Fe(e) && !e.text ? Bn : null))(e);
          return e.text || (t ? h[t] : null);
        })();
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(Q, {
              ...X,
              children: (0, b.jsxs)("div", {
                className: i()(ls, {
                  [ds]: O,
                }),
                children: [
                  O &&
                    (0, b.jsx)(D.V, {
                      default: ae ? 24 : 48,
                      gteS: ae ? 36 : 60,
                    }),
                  (0, b.jsxs)(Dt, {
                    ref: j,
                    ...Y,
                    displayTimeContainer: (() => {
                      switch (true) {
                        case Boolean((F == null ? undefined : F.ok) || W || z):
                          return;
                        case Boolean(se):
                          return "text";
                        case Boolean(ne):
                          return "title";
                        case G:
                          return "file-preview";
                        default:
                          L.current = false;
                          return;
                      }
                    })(),
                    chatId: v,
                    hideAvatar: u,
                    actions: e.actions
                      ? (0, b.jsx)(an, {
                          chatId: v,
                          messageId: e.id,
                          actions: e.actions,
                          onMessageSend: o,
                          hideTextButtons: p.hideTextButtons,
                        })
                      : undefined,
                    bottomWidgets:
                      J &&
                      (0, b.jsx)("div", {
                        className: cs,
                        children: (0, b.jsx)(Z.r, {
                          "data-qa": "chatik-chat-message-applicant-action",
                          iconLeft: (0, b.jsx)(P.eI_, {}),
                          typography: "label-3-regular",
                          onClick: () => {
                            M.default.sendHHEventButtonClick("chat_add_letter");
                            C((0, V.Hd)(e.id, e.text ?? ""));
                          },
                          children: h[us],
                        }),
                      }),
                    children: [
                      (0, b.jsx)(Ft, {
                        children: te,
                      }),
                      G &&
                        (0, b.jsx)(Jt, {
                          messageId: e.id,
                          files: q,
                          isSpoiler: r,
                        }),
                      (0, b.jsx)(bn, {
                        children: ne,
                      }),
                      (0, b.jsxs)(Vn, {
                        ref: N,
                        chatId: v,
                        messageId: e.id,
                        shouldCheckLinks: _,
                        children: [
                          se,
                          ee &&
                            (0, b.jsx)(_n, {
                              children: y,
                            }),
                        ],
                      }),
                      f &&
                        (0, b.jsx)(yn, {
                          address: f,
                          chatId: v,
                          messageId: e.id,
                        }),
                      !f &&
                        (F == null ? undefined : F.ok) &&
                        !l &&
                        (0, b.jsx)(Va, {
                          ...F,
                          chatId: v,
                          messageId: e.id,
                          textRef: N,
                          shouldCheckLink: _,
                        }),
                      W &&
                        (0, b.jsx)(fa, {
                          message: e,
                          images: H,
                          isSpoiler: r,
                        }),
                    ],
                  }),
                  (0, b.jsx)(D.V, {
                    default: O ? 6 : 32,
                    gteS: O ? 6 : 28,
                  }),
                ],
              }),
            }),
            K &&
              (0, b.jsx)(es, {
                isMyMessage: O,
              }),
          ],
        });
      };
      hs.displayName = "Message/SimpleMessage/index/SimpleMessage";
      const ps = (0, u.Z)(_e(hs));
      const ms = "message_broken--Sb7XRXGZOs89LBLf";
      const vs = "date-change--oJaK02M1nNsDmXoi";
      const gs = "unread-messages-plate--EPXupcCySZoAMEpz";
      const ys = "chatik.web.unreadMessagesPlate.title.magritte";
      const fs = (e, t) => {
        const a = (0, l.T)();
        const [s, u] = (0, n.useState)(false);
        const {
          message: h,
          prevMessage: p,
          showUnreadMessagesPlate: m,
          unreadMessagesPlateRef: v,
        } = e;
        const g = ((e, t) =>
          !t || !(0, Ze.Z)(new Date(t.creationTime), new Date(e.creationTime)))(
          h,
          p,
        );
        const y = p && !d(p, h);
        const f = (0, n.useCallback)(() => {
          const e = new Error("Broken message received");
          r.c.log("out error", e, {
            message: h,
          });
          u(true);
        }, []);
        return (0, b.jsxs)("div", {
          className: i()({
            [ms]: s,
          }),
          ref: t,
          "data-qa": `chatik-chat-message-${h.id}`,
          children: [
            m &&
              (0, b.jsxs)(b.Fragment, {
                children: [
                  (0, b.jsx)(o.X, {
                    default: 16,
                  }),
                  (0, b.jsx)("div", {
                    className: gs,
                    ref: v,
                    "data-qa": "unread-messages-plate",
                    children: a[ys],
                  }),
                ],
              }),
            g &&
              (0, b.jsxs)(b.Fragment, {
                children: [
                  (0, b.jsx)(o.X, {
                    default: 16,
                  }),
                  (0, b.jsx)("div", {
                    className: vs,
                    children: (0, b.jsx)(C, {
                      date: h.creationTime,
                    }),
                  }),
                ],
              }),
            (0, b.jsx)(o.X, {
              default:
                g ||
                m ||
                (p == null ? undefined : p.type) !==
                  (h == null ? undefined : h.type)
                  ? 16
                  : y
                    ? 8
                    : 4,
            }),
            (() => {
              switch (h.type) {
                case c.u.Simple:
                  return (0, b.jsx)(ps, {
                    ...e,
                    hideMessage: f,
                  });
                case c.u.ParticipantJoined:
                  return (0, b.jsx)(A, {
                    message: h,
                    action: _.Joined,
                  });
                case c.u.ParticipantLeft:
                  return (0, b.jsx)(A, {
                    message: h,
                    action: _.Left,
                  });
                case c.u.TextToJoin:
                  return (0, b.jsx)(A, {
                    message: h,
                    action: _.TextToJoin,
                  });
                default:
                  return;
              }
            })(),
          ],
        });
      };
      fs.displayName = "components/Message/index/Message";
      fs.displayName = "Message";
      const ws = (0, n.forwardRef)(fs);
    },
    56957: function (e, t, a) {
      a.d(t, {
        Z: () => N,
      });
      var n = a(3891);
      var s = a(48867);
      var i = a(61477);
      var r = a(89156);
      var o = a(63144);
      var l = a(34343);
      var c = a(66999);
      var d = a(82967);
      var u = a(92459);
      var h = a(3216);
      var p = a(99102);
      var m = a(68390);
      var v = a(17223);
      var g = a(89059);
      const y = "container--PQU88jAAL9cVV4F_";
      const f = "description--NUb12PLUzsU0vAfN";
      var w = a(4201);
      const x = "chatik.noChats.applicant.message";
      const b = "chatik.noChats.employer.message";
      const k = "chatik.noChats.anonymous.message";
      const C = "chatik.noChats.openLogin";
      const I = "chatik.noChats.searchVacancies";
      const S = "chatik.noChats.searchCandidates";
      const E = "chatik.noChats.showSimilarResumes";
      const T = {
        [m.Z.Applicant]: x,
        [m.Z.Employer]: b,
        [m.Z.Anonymous]: k,
      };
      const _ = {
        [m.Z.Applicant]: I,
        [m.Z.Employer]: S,
        [m.Z.Anonymous]: C,
      };
      const j = ({
        trls: e,
        showButtons: t,
        similarResumesVacancyId: a,
        ...r
      }) => {
        const x = (0, s.v)((e) => e.siteRoot);
        const b = (0, s.v)(({ platform: e }) => e === p.Y.Talantix);
        const [C, I] = (0, n.useState)(false);
        const {
          isApplicant: S,
          isEmployer: j,
          isAnonymous: N,
          userType: A,
        } = (0, h.Z)();
        const R = (0, i.l)(c);
        const M = (0, u.Z)(a);
        const D = M ? E : _[A];
        const P = Boolean(t && D);
        const Z = M && P;
        return (0, w.jsx)("div", {
          className: y,
          "data-qa": r["data-qa"],
          children: (0, w.jsx)(l.V, {
            image: R,
            "data-qa": "chatik-no-chats",
            maxWidth: 420,
            imageWidth: 343,
            imageHeight: 288,
            titleProps: {
              Element: "h2",
              size: Z ? "medium" : "small",
            },
            title: e[T[A] ?? k],
            description:
              Z &&
              (0, w.jsx)(d.Z, {
                className: f,
                vacancyId: a,
                renderAsPlainText: true,
                capitalized: true,
              }),
            showButtons: P,
            buttonsStretched: false,
            buttonPrimary: D
              ? (0, w.jsx)(o.z, {
                  "data-qa": "chatik-no-chats-redirect-button",
                  size: "medium",
                  mode: N ? "secondary" : "primary",
                  style: "accent",
                  loading: C,
                  onClick: () => {
                    I(!b);
                    const e = (() => {
                      if (M) {
                        return M;
                      }
                      let e = "/";
                      if (j || S) {
                        const t = `${x}/search`;
                        e = (0, v.ni)(`${t}/${S ? "vacancy" : "resume"}`);
                      } else {
                        e = (0, v.ni)(`${x}/account/login`);
                      }
                      return e;
                    })();
                    if (g.vK) {
                      (0, g.AW)("redirectTo", {
                        path: e,
                      });
                    } else {
                      window.location.assign(e);
                    }
                  },
                  children: e[D],
                })
              : undefined,
          }),
        });
      };
      j.displayName = "components/NoChatSelected/index/NoChatSelected";
      const N = (0, r.Z)(j);
    },
    17938: function (e, t, a) {
      a.d(t, {
        Z: () => I,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(57961);
      var r = a.n(i);
      var o = a(74723);
      var l = a.n(o);
      var c = a(86669);
      var d = a.n(c);
      var u = a(70318);
      var h = a.n(u);
      var p = a(48867);
      var m = a(63144);
      var v = a(58342);
      var g = a(61675);
      var y = a(54059);
      var f = a(40862);
      var w = a(4201);
      const x = (0, f.Z)(
        (0, n.forwardRef)((e) =>
          (0, w.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...e,
            children: (0, w.jsx)("path", {
              stroke: "#0070FF",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.33",
              d: "m2 12 .875-2M9 12l-.875-2M12 2v12m0-12h-1.5M12 2h1.5M12 14h-1.5m1.5 0h1.5m-5.375-4L5.5 4l-2.625 6m5.25 0h-5.25",
            }),
          }),
        ),
        "IconInsert16",
      );
      const b = "buttons-wrapper--CnowdK0XlP0R5MW1";
      const k = "with-expand-button--ZOCba40ZImsuqJOB";
      const C = ({ replies: e, handleReplyClick: t, chatId: a }) => {
        const i = (0, s.useDispatch)();
        const o = (0, p.v)((e) => e.quickReplies.visible);
        const c = (0, p.v)((e) => e.isSpoiler);
        const u = (0, p.v)((e) => e.isInlineChat);
        const f = (0, p.v)((e) => e.isThirdColumnShown);
        const [C, I] = (0, n.useState)(false);
        const S = (0, n.useRef)(null);
        const E = (0, n.useMemo)(
          () =>
            ((e) => {
              const t = e.filter((e) => e.isMessageAction).length;
              const a = e.length - t;
              return t + Math.min(3, a);
            })(e),
          [e],
        );
        const T = e.length > E;
        const _ = (0, n.useMemo)(() => e.map(({ id: e }) => e).join(","), [e]);
        const j = () =>
          (0, y.Z)({
            isSpoiler: c,
            isInlineChat: u,
            isThirdColumnShown: f,
          });
        const N = (e) => (n) => {
          n.currentTarget.blur();
          if (o) {
            if (e.isMessageAction) {
              r()({
                buttonName: "chat_text_button",
                text: e.text,
                chatId: a,
                messageId: e.metadata?.messageId || 0,
              });
            } else {
              l()({
                layout: j(),
                chatId: a,
                type: e.type || "send",
                quickReplyId: e.id,
              });
            }
            t(e);
            if (C) {
              I(false);
            }
          }
        };
        const A = () => {
          h()({
            layout: j(),
            chatId: a,
            action: C ? "collapse" : "expand",
          });
          I(!C);
        };
        (0, n.useEffect)(() => {
          const t = e.some((e) => e.type === "insert");
          const n = e.some((e) => !e.type || e.type === "send");
          if (S.current && _) {
            d()(S.current, {
              chatId: a,
              hasInsertQuickReplies: t,
              hasSendQuickReplies: n,
              layout: j(),
              quickReplyListIds: _,
            });
          }
        }, [a, _]);
        (0, n.useEffect)(
          () => () => {
            i((0, g.Qe)(a, []));
          },
          [a, i],
        );
        return (0, w.jsx)("div", {
          ref: S,
          className: b,
          children: e.map((t, a) => {
            if (!C && !(a < E)) {
              return null;
            }
            const n = (0, w.jsx)(
              m.z,
              {
                size: "small",
                style: "accent",
                mode: "secondary",
                icon: t.type === "insert" ? (0, w.jsx)(x, {}) : null,
                onClick: N(t),
                children: t.label || t.text,
              },
              t.id,
            );
            if ((C ? a === e.length - 1 : a === E - 1) && T) {
              return (0, w.jsxs)(
                "div",
                {
                  className: k,
                  children: [
                    n,
                    (0, w.jsx)(m.z, {
                      size: "small",
                      style: "accent",
                      mode: "tertiary",
                      icon: C ? (0, w.jsx)(v.mTT, {}) : (0, w.jsx)(v.t_N, {}),
                      "aria-label": "more quick replies",
                      onClick: A,
                    }),
                  ],
                },
                t.id,
              );
            } else {
              return n;
            }
          }),
        });
      };
      C.displayName = "components/QuickReplies/index/QuickReplies";
      const I = C;
    },
    82967: function (e, t, a) {
      a.d(t, {
        Z: () => f,
      });
      var n = a(3891);
      var s = a(63116);
      var i = a.n(s);
      var r = a(24488);
      var o = a(48867);
      var l = a(64452);
      var c = a(89156);
      var d = a(44180);
      var u = a(26442);
      var h = a(89016);
      var p = a(92459);
      const m = "text--_GOm55bPVgI7h_Ll";
      var v = a(4201);
      const g = {
        text: "chatik.warning.similarResume",
        one: "chatik.warning.similarResume.one",
        some: "chatik.warning.similarResume.some",
      };
      const y = ({
        trls: e,
        vacancyId: t = 0,
        renderAsPlainText: a,
        capitalized: s,
        className: c,
      }) => {
        const y = (0, o.v)(({ similarCounters: e }) => e.byVacancy[t]);
        const f = (0, n.useRef)(null);
        const w = (0, p.Z)(t);
        const x = (0, u.Z)();
        (0, n.useEffect)(() => {
          if (f.current) {
            r.default.sendHHEvent("element_shown", {
              name: "chat_suitable_resume_banner",
              chatId: x,
            });
          }
        }, [x, y, t]);
        if (!w) {
          return null;
        }
        const b = `${y} ${e[g[(0, h.Z)(y, ["one", "some", "some"])]]}`;
        const k = e[g.text];
        const C = k.charAt(0).toUpperCase() + k.slice(1);
        return (0, v.jsx)("span", {
          className: i()(m, c),
          ref: f,
          children: (0, l.WU)(s ? C : k, {
            "{0}": a
              ? b
              : (0, v.jsx)(d.r, {
                  href: w,
                  target: "_blank",
                  inline: true,
                  typography: "label-3-regular",
                  children: b,
                }),
          }),
        });
      };
      y.displayName = "components/SimilarResumes/index/SimilarResumes";
      const f = (0, c.Z)(y);
    },
    92459: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(48867);
      var s = a(17223);
      const i = (e) => {
        const t = (0, n.v)((e) => e.siteRoot);
        if (
          (0, n.v)(({ similarCounters: t }) => (e ? t.byVacancy[e] : undefined))
        ) {
          return (0, s.ni)(
            `${t}/employer/vacancyresponses?vacancyId=${e}&collection`,
          );
        } else {
          return undefined;
        }
      };
    },
    8210: function (e, t, a) {
      a.d(t, {
        Z: () => r,
        i: () => i,
      });
      var n = a(3891);
      const s = (0, n.createContext)({
        addNotification: () => {},
      });
      const i = () => (0, n.useContext)(s);
      const r = s;
    },
    50361: function (e, t, a) {
      a.d(t, {
        c: () => w,
      });
      var n = a(63116);
      var s = a.n(n);
      var i = a(64452);
      var r = a(89156);
      var o = a(61384);
      var l = a(89016);
      const c = "dots--ktQHLYyuJKcxfJMc";
      var d = a(4201);
      const u = () =>
        (0, d.jsxs)("svg", {
          className: c,
          width: "16",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, d.jsx)("circle", {
              cx: "2.5",
              cy: "8",
              r: "1.5",
              fill: "currentColor",
            }),
            (0, d.jsx)("circle", {
              cx: "8.5",
              cy: "8",
              r: "1.5",
              fill: "currentColor",
            }),
            (0, d.jsx)("circle", {
              cx: "14.5",
              cy: "8",
              r: "1.5",
              fill: "currentColor",
            }),
          ],
        });
      u.displayName = "TypingIndicator/AnimatedDots/index/AnimatedDots";
      const h = "typing-indicator--cNtH6fTFGkoPjLG6";
      const p = "text--HoORco0sc6YzNYOq";
      const m = "typing-indicator_primary--wzHEj8587LowW38A";
      const v = "typing-indicator_secondary--Y3Ao7KA4hjU7JWJz";
      const g = {
        one: "chatik.typing.status.compact.one",
        some: "chatik.typing.status.compact.some",
      };
      const y = {
        one: "chatik.typing.status.full.one",
        two: "chatik.typing.status.full.two",
        many: "chatik.typing.status.full.many",
      };
      const f = ({
        trls: e,
        compact: t,
        typingAmount: a,
        style: n,
        typingParticipants: r,
      }) => {
        const { isMobile: c } = (0, o.G)();
        const f = a ?? (r == null ? undefined : r.length);
        const w = () =>
          (0, i.WU)((0, l.Z)(f, [e[g.one], e[g.some], e[g.some]]), {
            "{0}": f,
          });
        return (0, d.jsxs)("div", {
          className: s()(h, {
            [m]: n === "primary",
            [v]: n === "secondary",
          }),
          children: [
            (0, d.jsx)(u, {}),
            (0, d.jsx)("span", {
              className: p,
              children:
                t || c || r == null || !r.length
                  ? w()
                  : (() => {
                      const [t, a] = r || [];
                      if ((r == null ? undefined : r.length) === 1) {
                        return (0, i.WU)(e[y.one], {
                          "{0}": t.display?.name,
                        });
                      }
                      if ((r == null ? undefined : r.length) === 2) {
                        return (0, i.WU)(e[y.two], {
                          "{0}": t.display?.name,
                          "{1}": a.display?.name,
                        });
                      }
                      if (r != null && r.length && r.length > 2) {
                        const n = r.length - 2;
                        return (0, i.WU)(e[y.many], {
                          "{0}": t.display?.name,
                          "{1}": a.display?.name,
                          "{3}": (0, i.WU)(
                            (0, l.Z)(n, [e[g.one], e[g.some], e[g.some]]),
                            {
                              "{0}": n,
                            },
                          ).toLowerCase(),
                        });
                      }
                      return w();
                    })(),
            }),
          ],
        });
      };
      f.displayName =
        "components/TypingIndicator/index/TypingIndicatorComponent";
      const w = (0, r.Z)(f);
    },
    56905: function (e, t, a) {
      a.d(t, {
        Z: () => S,
      });
      var n = a(64452);
      var s = a(49727);
      var i = a(69690);
      var r = a(42699);
      var o = a(12274);
      var l = a(23855);
      var c = a(28366);
      var d = a(38148);
      var u = a(34587);
      var h = a(3585);
      var p = a(58086);
      const m = (e, t) => {
        const a = (0, l.Z)(e);
        if (!(0, o.Z)(a)) {
          return t.longAgo;
        }
        const s = new Date();
        const m = (0, i.Z)(s, a);
        if (m < p.O8) {
          return t.online;
        } else if (m < 30) {
          return t.recently;
        } else if ((0, r.Z)(a, (0, c.Z)())) {
          return (0, n.WU)(t.todayAt, {
            "{0}": (0, h.Z)(a, "HH:mm"),
          });
        } else if ((0, r.Z)(a, (0, u.Z)())) {
          return (0, n.WU)(t.yesterdayAt, {
            "{0}": (0, h.Z)(a, "HH:mm"),
          });
        } else if ((0, r.Z)(a, (0, d.Z)(s))) {
          return (0, h.Z)(a, "dd.MM");
        } else {
          return (0, h.Z)(a, "dd.MM.yyyy");
        }
      };
      var v = a(4201);
      const g = "chatik.lastActivity.online";
      const y = {
        male: "lastActivity.were.male",
        female: "lastActivity.were.female",
        unknown: "lastActivity.were.male",
        noGender: "chatik.lastActivity.noGenderTemplate",
      };
      const f = "chatik.lastActivity.recently";
      const w = "chatik.lastActivity.today";
      const x = "chatik.lastActivity.yesterday";
      const b = {
        january: "calendar.genitive.month.0",
        february: "calendar.genitive.month.1",
        march: "calendar.genitive.month.2",
        april: "calendar.genitive.month.3",
        may: "calendar.genitive.month.4",
        june: "calendar.genitive.month.5",
        july: "calendar.genitive.month.6",
        august: "calendar.genitive.month.7",
        september: "calendar.genitive.month.8",
        october: "calendar.genitive.month.9",
        november: "calendar.genitive.month.10",
        december: "calendar.genitive.month.11",
      };
      const k = "chatik.lastActivity.year";
      const C = "chatik.lastActivity.longAgo";
      const I = ({ lastActivityTime: e, isOnline: t }) => {
        const a = (0, s.T)();
        const r = ((e, t) => {
          if (t) {
            return true;
          }
          const a = (0, l.Z)(e);
          return !!(0, o.Z)(a) && (0, i.Z)(new Date(), a) < p.O8;
        })(e, t)
          ? a[g]
          : (0, n.WU)(a[y.noGender], {
              "{0}": m(e, {
                online: a[g],
                recently: a[f],
                todayAt: a[w],
                yesterdayAt: a[x],
                month: [
                  a[b.january],
                  a[b.february],
                  a[b.march],
                  a[b.april],
                  a[b.may],
                  a[b.june],
                  a[b.july],
                  a[b.august],
                  a[b.september],
                  a[b.october],
                  a[b.november],
                  a[b.december],
                ],
                year: a[k],
                longAgo: a[C],
              }),
            });
        return (0, v.jsx)("span", {
          "data-qa": "chatik-user-activity-time",
          children: r,
        });
      };
      I.displayName = "components/UserActivityTime/index/UserActivityTime";
      const S = I;
    },
    92826: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(53744);
      const s = (0, n.ZP)({
        resolved: {},
        chunkName: () => "Viewer",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!a.m[t];
        },
        importAsync: () =>
          Promise.all([a.e("7018"), a.e("7124")]).then(a.bind(a, 292)),
        requireAsync(e) {
          const t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          const t = this.resolve(e);
          return a(t);
        },
        resolve() {
          return 292;
        },
      });
    },
    87884: function (e, t, a) {
      a.d(t, {
        Z: () => r,
      });
      var n = a(48867);
      var s = a(58342);
      var i = a(4201);
      const r = ({ isBot: e, image: t, isUnknownUser: a }) => {
        const r = (0, n.v)(({ config: e }) => e.hhcdnHost);
        const o = a || (e && !t);
        let l;
        let c = "primary";
        if (o) {
          l = e
            ? (0, i.jsx)(s.Jj1, {
                initialColor: "special",
              })
            : (0, i.jsx)(s.o4j, {
                initialColor: "primary",
              });
          c = e ? "special-secondary" : "primary";
        }
        return {
          avatarImage: o
            ? undefined
            : (() => {
                if (t) {
                  if (t.includes("https://")) {
                    return t;
                  } else {
                    return `${r}${t}`;
                  }
                }
              })(),
          avatarIcon: l,
          avatarIconStyle: c,
        };
      };
    },
    54075: function (e, t, a) {
      a.d(t, {
        Z: () => r,
      });
      var n = a(11016);
      var s = a(48867);
      var i = a(89059);
      const r = () => {
        const e = (0, s.v)((e) => e.chatIntegrationType);
        const t = (0, s.v)(({ displayType: e }) => e);
        const a = (0, s.v)((e) => e.parentScreenBreakpoint);
        return {
          isOpenedInIFrame: i.vK,
          isWidgetIframe: e === "widget",
          isParentDesktopDisplayType: i.vK && t === "DESKTOP",
          isParentTabletDisplayType: i.vK && t === "TABLET",
          isParentMobileDisplayType: i.vK && t === "MOBILE",
          isParentXS: a === n.n0.XS,
          isParentS: a === n.n0.S,
          isParentM: a === n.n0.M,
          isParentL: a === n.n0.L,
          isParentGtXS: a && [n.n0.S, n.n0.M, n.n0.L].includes(a),
          isParentGtS: a && [n.n0.M, n.n0.L].includes(a),
          isParentGtM: a === n.n0.L,
        };
      };
    },
    26442: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(68222);
      var s = a(48867);
      const i = () => {
        const e = (0, n.useParams)();
        const t = (0, s.v)(({ isProxiedComponent: e }) => e);
        const a = (0, s.v)(({ chatData: e }) => e.chat.id);
        const i = parseInt(e.chatId, 10);
        if (t) {
          return a;
        } else {
          return i;
        }
      };
    },
    80684: function (e, t, a) {
      a.d(t, {
        m: () => i,
      });
      var n = a(3891);
      var s = a(84434);
      const i = (e, ...t) => {
        const a = (0, n.useMemo)(() => e(), []);
        return (0, s.useSelector)((e) => a(e, ...t));
      };
    },
    69007: function (e, t, a) {
      a.d(t, {
        Z: () => l,
      });
      var n = a(48867);
      var s = a(61384);
      var i = a(25833);
      var r = a(54075);
      var o = a(3216);
      const l = () => {
        const { isEmployer: e } = (0, o.Z)();
        const { isGtM: t } = (0, s.G)();
        const { isParentGtM: a, isOpenedInIFrame: l } = (0, r.Z)();
        const c = (0, n.v)(({ features: e }) => e[i.A.FullScreenResumeEnabled]);
        return Boolean(c && e && ((l && a) || t));
      };
    },
    48403: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(48867);
      var s = a(45418);
      const i = () => {
        const e = (0, n.v)(({ displayType: e }) => e);
        return e === s.DisplayType.Mobile || e === s.DisplayType.Tablet;
      };
    },
    52002: function (e, t, a) {
      a.d(t, {
        Z: () => p,
      });
      var n = a(3891);
      var s = a(48867);
      var i = a(66802);
      var r = a(61384);
      var o = a(58342);
      var l = a(8210);
      var c = a(99102);
      var d = a(89059);
      var u = a(4201);
      const h = (e, t) => ({
        addon:
          e.kind === "error"
            ? (0, u.jsx)(o.L1_, {
                initialColor: "negative",
              })
            : null,
        autohideTime: e.autoClose ? e.autoCloseDelay : 0,
        children: (0, u.jsx)(i.x, {
          style: "contrast",
          typography: "label-2-regular",
          maxLines: t ? 3 : 2,
          children: e.content,
        }),
        showClose: true,
      });
      const p = () => {
        const { addNotification: e } = (0, l.i)();
        const t = (0, s.v)(({ platform: e }) => e === c.Y.Talantix);
        const { isMobile: a } = (0, r.G)();
        const i = t || !d.vK;
        return (0, n.useCallback)(
          (t) => {
            if (i) {
              e(h(t, a));
            } else {
              (0, d.AW)("showNotification", {
                content: t.content,
                error: t.kind === "error",
                ...h(t),
              });
            }
          },
          [e, a, i],
        );
      };
    },
    7563: function (e, t, a) {
      a.d(t, {
        Z: () => He,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(68222);
      var r = a(48867);
      var o = a(64452);
      var l = a(89156);
      var c = a(66802);
      var d = a(6745);
      const u = "drag-file-screen--b00sgJFys0YoP4R1";
      const h = "content--_B7wuNlNe9opyM_8";
      const p = "text--mCiC4i9gh3Ixyt7g";
      var m = a(4201);
      const v = "chatik.dragFileScreen.upload.text";
      const g = "chatik.uploadingFilesModal.filesConstrait";
      const y = ({ trls: e, handleDrag: t, handleDrop: a }) =>
        (0, m.jsx)("div", {
          className: u,
          onDragEnter: t,
          onDragLeave: t,
          onDragOver: t,
          onDrop: a,
          children: (0, m.jsx)("div", {
            className: h,
            children: (0, m.jsxs)("div", {
              className: p,
              children: [
                (0, m.jsx)(c.x, {
                  style: "secondary",
                  typography: "label-2-regular",
                  children: e[v],
                }),
                "\n",
                (0, m.jsx)(c.x, {
                  style: "secondary",
                  typography: "label-2-regular",
                  children: (0, o.WU)(e[g], {
                    "{0}": d.L5,
                    "{1}": d.C1,
                  }),
                }),
              ],
            }),
          }),
        });
      y.displayName = "ChatOverlays/DragFileScreen/index/DragFileScreen";
      const f = (0, l.Z)(y);
      var w = a(63116);
      var x = a.n(w);
      var b = a(78203);
      var k = a.n(b);
      var C = a(80876);
      var I = a.n(C);
      var S = a(92846);
      var E = a.n(S);
      var T = a(83090);
      var _ = a.n(T);
      var j = a(61477);
      var N = a(75790);
      var A = a(33338);
      var R = a(45150);
      var M = a(34343);
      var D = a(61384);
      var P = a(63144);
      var Z = a(44180);
      var L = a(58342);
      const F = a.p + "static/images/unsafe__min_cab592741eaac0e4.webp";
      var U = a(26442);
      var O = a(52855);
      var B = a(17223);
      var H = a(89059);
      const q = ({ text: e, length: t, ellipsis: a = "..." }) =>
        e.length <= t ? e : `${e.substring(0, t)}${a}`;
      var V = a(91010);
      const W = ["http:", "https:"];
      const G = "unsafe-link-screen--kaZrP8qdocdAG11y";
      const z = "placeholder-wrapper--FpQ_nPGllZUHSVOo";
      const $ = "invisible--EgkPRUDcuSMUSWn7";
      const K = "unsafeLinkScreen.title";
      const Y = "unsafeLinkScreen.description";
      const Q = "unsafeLinkScreen.close";
      const X = "unsafeLinkScreen.leave";
      const J = "unsafeLinkScreen.loading.title";
      const ee = "unsafeLinkScreen.loading.description";
      const te = ({ trls: e, isSpoiler: t }) => {
        const a = (0, s.useDispatch)();
        const i = (0, r.v)((e) => e.linkCheck);
        const l = (0, r.v)((e) => e.locale.host);
        const c = (0, r.v)((e) => e.isProxyPage);
        const d = (0, n.useRef)();
        const u = (0, U.Z)();
        const h = (0, j.l)(F);
        const { isXS: p } = (0, D.G)();
        const v = i.currentUrl ? i.result[i.currentUrl] : undefined;
        const g = v == null || !v.status;
        const [y, f] = (0, n.useState)(!g);
        const w = (0, n.useMemo)(
          () => ({
            chatId: u,
            messageId: i.messageId || 0,
            link: i.currentUrl || "",
            frame: !H.vK || c ? "full" : "in_chat",
            hhtmSource: "chat_away",
          }),
          [u, i, c],
        );
        const b = () =>
          g
            ? e[J]
            : v.status === "UNSAFE"
              ? v.info.title
              : v.status === "ERROR"
                ? e[K]
                : "";
        const C = (0, n.useCallback)(() => {
          a(O.Z.closeScreen());
        }, [a]);
        const S = () => {
          if (!i.currentUrl) {
            return;
          }
          const e = ((e) => {
            try {
              const t = (0, V.j)(e);
              if (W.includes(t.protocol)) {
                return e;
              } else {
                return "";
              }
            } catch (e) {
              return "";
            }
          })(i.currentUrl);
          C();
          k()(w);
          if (e) {
            window.open(i.currentUrl, "_blank");
          }
        };
        (0, n.useEffect)(() => {
          d.current = setTimeout(() => {
            f(true);
          }, 600);
          return () => {
            clearTimeout(d.current);
          };
        }, []);
        (0, n.useEffect)(() => {
          if (v != null && v.status && v.status !== "SAFE") {
            E()(w);
          }
        }, [w, v]);
        const T = () =>
          (0, m.jsxs)(m.Fragment, {
            children: [
              g
                ? e[ee]
                : (v == null ? undefined : v.status) === "UNSAFE"
                  ? v.info.description
                  : (v == null ? undefined : v.status) === "ERROR"
                    ? (0, o.WU)(e[Y], {
                        "{0}": q({
                          text: i.currentUrl || "",
                          length: 40,
                        }),
                      })
                    : "",
              (v == null ? undefined : v.status) === "UNSAFE" &&
                v.info.link &&
                (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)(N.X, {
                      default: 8,
                    }),
                    (0, m.jsx)(Z.r, {
                      href: (0, B.fl)(v.info.link.url, {
                        hhtmFrom: "chat_away",
                      }),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-qa": "unsafe-link__link-away",
                      onClick: () => {
                        I()(w);
                      },
                      children: v.info.link.title,
                    }),
                  ],
                }),
            ],
          });
        const te = () =>
          (0, m.jsx)(P.z, {
            stretched: true,
            onClick: () => {
              C();
              _()(w);
            },
            style: "accent",
            mode: g ? "secondary" : "primary",
            "data-qa": "unsafe-link__cancel-button",
            children: (0, o.WU)(e[Q], {
              "{0}": l,
            }),
          });
        const ae = () =>
          (0, m.jsx)(P.z, {
            onClick: S,
            stretched: true,
            style: "accent",
            mode: "secondary",
            "data-qa": "unsafe-link__redirect-button",
            children: e[X],
          });
        return (0, m.jsx)("div", {
          className: x()(G, {
            [$]: !y || (y && t),
          }),
          children: t
            ? (0, m.jsx)(A.bZ, {
                visible: y,
                layout: "vertical",
                icon: g
                  ? (0, m.jsx)(R.a, {
                      size: 24,
                    })
                  : (0, m.jsx)(L.Gvu, {}),
                iconStyle: g ? "neutral" : "warning",
                title: b(),
                description: T(),
                buttons: g
                  ? te()
                  : (0, m.jsxs)(m.Fragment, {
                      children: [te(), ae()],
                    }),
                onClose: C,
              })
            : y &&
              (0, m.jsxs)("div", {
                className: z,
                children: [
                  g &&
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        (0, m.jsx)(R.a, {
                          size: 24,
                        }),
                        (0, m.jsx)(N.X, {
                          default: 32,
                        }),
                      ],
                    }),
                  (0, m.jsx)(M.V, {
                    image: g ? undefined : h,
                    maxWidth: 343,
                    imageHeight: p ? 156 : undefined,
                    title: b(),
                    description: T(),
                    buttonPrimary: te(),
                    buttonSecondary: g ? undefined : ae(),
                  }),
                ],
              }),
        });
      };
      te.displayName = "ChatOverlays/UnsafeLinkScreen/index/UnsafeLinkScreen";
      const ae = (0, l.Z)(te);
      var ne = a(51944);
      var se = a.n(ne);
      var ie = a(30329);
      var re = a(34692);
      var oe = a(47304);
      var le = a(47997);
      var ce = a(31537);
      var de = a(31065);
      var ue = a(34654);
      var he = a(85489);
      var pe = a(21440);
      const me = () => {
        const [e, t] = (0, n.useState)(false);
        const [a, s] = (0, n.useState)(false);
        return {
          addManagerParticipant: (0, n.useCallback)(
            async ({ chatId: e, managerId: a }) => {
              t(true);
              s(false);
              try {
                await pe.Z.post("/chatik/api/add_manager_participant", {
                  chatId: e,
                  managerId: a,
                });
              } catch (e) {
                s(true);
                throw e;
              } finally {
                t(false);
              }
            },
            [],
          ),
          isSubmitting: e,
          hasError: a,
        };
      };
      var ve = a(86345);
      var ge = a.n(ve);
      var ye = a(47400);
      const fe = () => {
        const [e, t] = (0, n.useState)([]);
        const [a, i] = (0, n.useState)(true);
        const [r, o] = (0, n.useState)(false);
        const [l, c] = (0, n.useState)(false);
        const d = (0, s.useSelector)(ye.U6);
        const u = (0, n.useMemo)(
          () => new Set(d.map(({ externalId: e }) => e)),
          [d],
        );
        (0, n.useEffect)(() => {
          const e = new AbortController();
          i(true);
          o(false);
          pe.Z.get("/chatik/api/get_employer_managers", {
            signal: e.signal,
          })
            .then(({ data: e = [] }) => {
              c(e.length > 0);
              const a = e.filter((e) => !u.has(e.userId));
              t(a);
            })
            .catch((e) => {
              if (!ge().isCancel(e)) {
                o(true);
                t([]);
                c(false);
              }
            })
            .finally(() => i(false));
          return () => e.abort();
        }, []);
        return {
          managers: e,
          loading: a,
          hasError: r,
          hasCoworkers: l,
        };
      };
      var we = a(24488);
      const xe = ({ chatId: e, loading: t, hasError: a, hasManagers: s }) => {
        const i = (0, n.useRef)(false);
        (0, n.useEffect)(() => {
          if (t || i.current) {
            return;
          }
          const n = s ? "with_managers" : "empty";
          i.current = true;
          we.default.sendHHEvent("element_shown", {
            elementName: "chat_add_manager_modal",
            modalState: a ? "error" : n,
            chatId: e,
          });
        }, [t, e, a, s]);
      };
      const be = "modal-content--i2XdnF9_n7AfvTxa";
      const ke = "modal-icon--GysL0nNL3Mnr4_kT";
      const Ce = "list-wrapper--TkhQmsvmif8kEeB6";
      const Ie = "cancel-button-wrapper--lXB729U3Ph4AomRW";
      const Se = "chatik.inviteCoworkerModal.title";
      const Ee = "chatik.inviteCoworkerModal.actions.cancel";
      const Te = "chatik.inviteCoworkerModal.actions.add";
      const _e = "chatik.inviteCoworkerModal.error.titile";
      const je = "chatik.inviteCoworkerModal.error.subtitle";
      const Ne = "chatik.inviteCoworkerModal.noCoworkers.titile";
      const Ae = "chatik.inviteCoworkerModal.noCoworkers.subtitle";
      const Re = "chatik.inviteCoworkerModal.allCoworkersInChat.title";
      const Me = "chatik.inviteCoworkerModal.allCoworkersInChat.subtitle";
      const De = (0, ie.makeSetStoreField)("inviteCoworkerModalVisible");
      const Pe = () => "";
      const Ze = ({ trls: e, visible: t }) => {
        const a = (0, s.useDispatch)();
        const i = (0, U.Z)();
        const [r, o] = (0, n.useState)([]);
        const { addManagerParticipant: l, isSubmitting: d, hasError: u } = me();
        const { managers: h, loading: p, hasError: v, hasCoworkers: g } = fe();
        const y = v || u;
        xe({
          chatId: i,
          hasError: v,
          loading: p,
          hasManagers: Boolean(h.length),
        });
        const f = (0, n.useMemo)(
          () =>
            (0, re.In)(
              h.map((e) => ({
                id: e.managerId.toString(),
                text: e.name,
              })),
            ),
          [h],
        );
        const w = (0, n.useCallback)(() => {
          a(De(false));
        }, [a]);
        const x = (0, n.useCallback)(() => {
          if (!r.length) {
            return;
          }
          const e = Number(r[0]);
          se()({
            buttonName: "chat_add_manager",
            chatId: i,
            employerManagerId: e,
          });
          l({
            chatId: i,
            managerId: e,
          })
            .then(() => {
              w();
            })
            .catch(() => {});
        }, [l, i, w, r]);
        if (!t) {
          return null;
        }
        const b = (e, t) =>
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("div", {
                className: ke,
                children: (0, m.jsx)(L.Z_p, {
                  initialColor: "warning",
                }),
              }),
              (0, m.jsx)(c.x, {
                typography: "title-5-semibold",
                children: e,
              }),
              (0, m.jsx)(c.x, {
                typography: "paragraph-2-regular",
                children: t,
              }),
            ],
          });
        const k = (0, m.jsx)("div", {
          className: be,
          children: p
            ? (0, m.jsx)(R.a, {
                size: 32,
              })
            : y
              ? b(e[_e], e[je])
              : h.length
                ? (0, m.jsx)(oe.a, {
                    collection: f,
                    value: r,
                    onChange: o,
                    getSelectAllParentTrl: Pe,
                    singleChoice: true,
                    children: ({ renderTreeSelector: e, renderInput: t }) =>
                      (0, m.jsxs)(m.Fragment, {
                        children: [
                          t(),
                          (0, m.jsx)("div", {
                            className: Ce,
                            children: e(),
                          }),
                        ],
                      }),
                  })
                : g
                  ? b(e[Re], e[Me])
                  : b(e[Ne], e[Ae]),
        });
        const C = !r.length || d;
        const I = !p && !y && Boolean(h.length);
        const S = (0, m.jsx)(P.z, {
          size: "medium",
          style: "accent",
          mode: I ? "tertiary" : "primary",
          "data-qa": "chatik-invite-coworker-cancel",
          onClick: () => {
            w();
            se()({
              buttonName: "chat_add_manager_cancel",
              chatId: i,
            });
          },
          stretched: !I,
          children: e[Ee],
        });
        const E = (0, m.jsx)(P.z, {
          size: "medium",
          mode: "primary",
          style: "accent",
          "data-qa": "chatik-invite-coworker-add",
          onClick: x,
          disabled: C,
          children: e[Te],
        });
        const T = () => {
          se()({
            buttonName: "chat_add_manager_close",
            chatId: i,
          });
          w();
        };
        return (0, m.jsxs)(n.Fragment, {
          children: [
            (0, m.jsx)(le.R, {
              visible: t,
              onClose: w,
              header: (0, m.jsx)(ce.v, {
                title: e[Se],
                right: (0, m.jsx)(L.Cs7, {
                  onClick: T,
                }),
              }),
              footer: (0, m.jsx)(de.W, {
                children: [I ? E : null, S],
              }),
              children: k,
            }),
            (0, m.jsx)(ue.u, {
              visible: t,
              actions: (0, m.jsx)(L.Cs7, {
                initialColor: "secondary",
                onClick: T,
              }),
              size: "medium",
              onClose: w,
              title: e[Se],
              footer: I
                ? (0, m.jsx)(he.o, {
                    type: "horizontal",
                    primaryActions: E,
                    secondaryActions: S,
                  })
                : (0, m.jsx)("div", {
                    className: Ie,
                    children: S,
                  }),
              children: k,
            }),
          ],
        });
      };
      Ze.displayName =
        "components/InviteCoworkerModal/index/InviteCoworkerModal";
      const Le = (0, l.Z)(Ze);
      var Fe = a(44036);
      var Ue = a(35862);
      const Oe = () => {
        const e = (0, Ue.Z)();
        const t = (0, r.v)(
          ({ chatData: e }) => e.chatStates.writeMessageState.allowed,
        );
        const [a, s] = (0, n.useState)(false);
        return {
          isDragActive: a,
          handleDrag: (0, n.useCallback)(
            (e) => {
              if (t) {
                e.stopPropagation();
                e.preventDefault();
                if (e.type === "dragenter" || e.type === "dragover") {
                  s(true);
                } else if (e.type === "dragleave") {
                  s(false);
                }
              }
            },
            [t],
          ),
          handleDrop: (0, n.useCallback)(
            (t) => {
              var a;
              t.preventDefault();
              t.stopPropagation();
              s(false);
              if (
                (a = t.dataTransfer) !== null &&
                a !== undefined &&
                (a = a.files) !== null &&
                a !== undefined &&
                a.length
              ) {
                const a = [...t.dataTransfer.files];
                e(a, "drag-n-drop");
              }
            },
            [e],
          ),
        };
      };
      var Be = a(40588);
      const He = ({ isSpoiler: e } = {}) => {
        const t = (0, Be.Z)();
        const a = (0, s.useDispatch)();
        const o = (0, i.useLocation)();
        const l = (0, r.v)((e) => e.linkCheck);
        const c = (0, r.v)(({ chatData: e }) => {
          var t;
          return (
            ((t = e.chatStates) === null ||
            t === undefined ||
            (t = t.sendFileState) === null ||
            t === undefined
              ? undefined
              : t.allowed) || false
          );
        });
        const d = (0, r.v)(Fe.Xi);
        const u = (0, r.v)((e) => e.inviteCoworkerModalVisible);
        const { handleDrag: h, handleDrop: p, isDragActive: v } = Oe();
        (0, n.useEffect)(() => {
          if (t.getState().linkCheck.screenShown) {
            a(O.Z.closeScreen());
          }
        }, [o.pathname, a, t]);
        return {
          renderOverlayScreen: () =>
            c && v
              ? (0, m.jsx)(f, {
                  handleDrag: h,
                  handleDrop: p,
                })
              : l.screenShown
                ? (0, m.jsx)(ae, {
                    isSpoiler: e,
                  })
                : u
                  ? (0, m.jsx)(Le, {
                      visible: true,
                    })
                  : null,
          handleDrag: d || l.screenShown ? undefined : h,
        };
      };
    },
    73735: function (e, t, a) {
      a.d(t, {
        D: () => i,
      });
      var n = a(3891);
      var s = a.n(n);
      function i(e) {
        const t = s().useRef(e);
        (0, n.useEffect)(() => {
          t.current = e;
        }, [e]);
        return t.current;
      }
    },
    29725: function (e, t, a) {
      a.d(t, {
        ZP: () => N,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(48867);
      var r = a(21440);
      var o = a(64452);
      var l = a(68921);
      var c = a(89824);
      var d = a(87749);
      var u = a(29801);
      var h = a(21665);
      var p = a(54549);
      var m = a(65442);
      var v = a(96915);
      var g = a(61675);
      var y = a(47400);
      var f = a(63141);
      var w = a(44036);
      var x = a(88915);
      var b = a(89016);
      var k = a(26442);
      var C = a(52002);
      var I = a(40588);
      var S = a(49727);
      let E = (function (e) {
        e.MessageTooBig = "MESSAGE_TEXT_IS_TOO_BIG";
        e.SpamDetected = "SPAM_DETECTED";
        e.ResourcePolicyViolation = "RESOURCE_POLICY_VIOLATION";
        e.InappropriateLanguage = "INAPPROPRIATE_LANGUAGE";
        return e;
      })({});
      let T = (function (e) {
        e.UnknownUploadError = "UNKNOWN_UPLOAD_ERROR";
        return e;
      })({});
      const _ = {
        networkError: "chatik.sendMessage.errors.network",
        serverError: "chatik.sendMessage.errors.server",
        sendingErrors: {
          [E.MessageTooBig]: "chatik.sendMessage.errors.messageTooBig",
          [E.SpamDetected]: "chatik.sendMessage.errors.spamDetected",
          [E.ResourcePolicyViolation]:
            "chatik.sendMessage.errors.resourcePolicyViolation",
          [E.InappropriateLanguage]:
            "chatik.sendMessage.errors.inappropriateLanguage",
        },
        resourcesSendingErrors: {
          [T.UnknownUploadError]: {
            one: "chatik.uploadingFiles.fileNotUploaded.error.one",
            some: "chatik.uploadingFiles.fileNotUploaded.error.some",
            many: "chatik.uploadingFiles.fileNotUploaded.error.many",
          },
        },
      };
      const j = (e) => {
        var t;
        if (e.message === "Network Error") {
          return _.networkError;
        }
        const a =
          (t = e.response) === null ||
          t === undefined ||
          (t = t.data.error) === null ||
          t === undefined ||
          (t = t[0]) === null ||
          t === undefined
            ? undefined
            : t.key;
        if (a && _.sendingErrors[a]) {
          return _.sendingErrors[a];
        } else {
          return _.serverError;
        }
      };
      const N = () => {
        const e = (0, n.useRef)(0);
        const t = (0, s.useDispatch)();
        const a = (0, S.T)();
        const E = (0, C.Z)();
        const N = (0, I.Z)();
        const A = (0, k.Z)();
        const R = (0, i.v)(y.R2);
        const M = (0, i.v)(({ chatData: e }) => e.chatStates.writeMessageState);
        const D = (0, i.v)(({ chatData: e }) => e.chat.writePossibility);
        const P = (0, i.v)(({ messageDrafts: e }) => {
          return e[A]?.text || "";
        });
        const Z = (0, i.v)(({ isProxiedComponent: e }) => e);
        const L = (0, i.v)((0, w.S3)(A));
        const F = (0, i.v)((e) => {
          return e.chatSendMessage?.text ?? "";
        });
        const U = (0, i.v)((e) => {
          return e.chatSendMessage?.metadata;
        });
        const O = (0, i.v)(({ editMessage: e }) => e);
        const B = typeof O.id == "number";
        const H = M.allowed || B;
        const q = (0, n.useRef)(U == null ? undefined : U.manuallyEnteredData);
        const V = (0, n.useMemo)(
          () =>
            (0, l.D)((e) => {
              t(
                (0, v.UF)(A, {
                  text: e,
                  metadata: {
                    manuallyEnteredData: q.current,
                  },
                }),
              );
            }, 1000),
          [A, t],
        );
        const W = (0, n.useMemo)(
          () => (0, l.D)((e) => t((0, v.cK)(e)), 1000),
          [t],
        );
        (0, n.useEffect)(() => {
          q.current = U == null ? undefined : U.manuallyEnteredData;
        }, [U == null ? undefined : U.manuallyEnteredData]);
        const G = (0, n.useCallback)(
          (e) => {
            const a = e.target.value;
            q.current = true;
            t((0, h.gY)(a));
            if (!B) {
              if (a.length) {
                W.cancel();
                V(a);
              } else {
                V.cancel();
                W(A);
              }
            }
          },
          [A, W, V, t, B],
        );
        const z = (0, n.useCallback)(
          (e) => {
            E({
              kind: "error",
              content: a[j(e)],
              autoClose: true,
            });
          },
          [E, a],
        );
        const $ = async (a) => {
          if (!a.text && !a.file) {
            return;
          }
          const n = (e.current -= 1);
          let s;
          t(
            (0, d.fs)(A, {
              ...a,
              id: n,
            }),
          );
          t([(0, g.HV)(false), (0, g.xV)(A)]);
          V.cancel();
          try {
            s = await t((0, h.bG)(A, a));
          } catch (e) {
            t((0, d.T5)(A, n));
            t(
              (0, v.UF)(A, {
                text: F || "",
                metadata: a.metadata,
              }),
            );
            t(
              (0, h.W9)({
                text: F || "",
                metadata: a.metadata,
              }),
            );
            throw e;
          }
          t((0, d.o_)(n, s));
          if (a.text) {
            t((0, v.cK)(A));
          }
          t((0, d.Xi)(A));
          t((0, g.L2)());
          const i = [
            u.sZ.DisabledForApplicant,
            u.sZ.DisabledForApplicant,
            u.sZ.DisabledByEmployer,
          ].includes(D.name);
          if (!Z && (!R || i)) {
            let e;
            try {
              e = await (0, x.Z)({
                chatId: A,
              });
            } catch (e) {
              console.error(e);
              return;
            }
            t((0, d.$2)(e));
          }
        };
        const K = (e) => {
          $(e).catch(z);
        };
        return {
          onTextChange: G,
          onQuickReply: (e) => {
            if (e.type === "insert") {
              const { text: n = "", metadata: s = {} } =
                N.getState().chatSendMessage ?? {};
              const i =
                n != null && n.length
                  ? `${n == null ? undefined : n.trimEnd()} ${e.text} `
                  : `${e.text} `;
              const { history: r = [] } = s;
              const o = {
                ...s,
                ...e.metadata,
                manuallyEnteredData: q.current,
                history: r
                  .slice(Math.max(r.length - 4, 0))
                  .concat([e.metadata]),
              };
              t((0, h.VE)(i, o));
              if (!B) {
                V.cancel();
                W.cancel();
                t(
                  (0, v.UF)(A, {
                    text: i,
                    metadata: o,
                  }),
                );
              }
              return;
            }
            K({
              text: e.text,
              metadata: e.metadata,
            });
          },
          sendMessageImmediately: K,
          sendStoredMessage: () => {
            if (L == null || !L.length || B) {
              t((0, h.mt)());
              if (!(0, c.VN)(F)) {
                if (B) {
                  (async () => {
                    if (typeof O.id == "number" && F.length) {
                      if (O.text !== F) {
                        try {
                          await r.Z.post("/chatik/api/save", {
                            text: F,
                            messageId: O.id,
                            ...((0, c.M1)(U)
                              ? {}
                              : {
                                  metadata: U,
                                }),
                          });
                        } catch (e) {
                          z(e);
                          t(
                            (0, h.W9)({
                              text: F,
                            }),
                          );
                          return;
                        }
                        t((0, m.Wx)());
                        t((0, p.AK)(A, O.id, F));
                      } else {
                        t((0, m.Wx)());
                      }
                    }
                  })();
                } else {
                  $({
                    text: F,
                    metadata: (0, c.M1)(U) ? undefined : U,
                  }).catch(z);
                }
              }
            } else {
              let e = 0;
              const n = [];
              L.forEach((t) => {
                if (t.isError) {
                  e += 1;
                } else {
                  $({
                    file: t,
                  }).catch((e) => {
                    if (n.every((t) => j(t) !== j(e))) {
                      n.push(e);
                      z(e);
                    }
                  });
                }
              });
              if (e) {
                const t = (0, b.Z)(e, [
                  a[_.resourcesSendingErrors[T.UnknownUploadError].one],
                  a[_.resourcesSendingErrors[T.UnknownUploadError].some],
                  a[_.resourcesSendingErrors[T.UnknownUploadError].many],
                ]);
                E({
                  kind: "error",
                  content: (0, o.WU)(t, {
                    "{0}": e,
                  }),
                  autoClose: true,
                });
              }
              t((0, f.j2)(A));
            }
          },
          text: F,
          savedDraft: P,
          isEditing: B,
          canWrite: H,
        };
      };
    },
    38618: function (e, t, a) {
      a.d(t, {
        Z: () => o,
      });
      var n = a(48867);
      var s = a(61384);
      var i = a(47400);
      var r = a(69007);
      const o = () => {
        const e = (0, n.v)(i.km);
        const t = (0, n.v)(i.W4);
        const { isGtM: a } = (0, s.G)();
        const o = (0, r.Z)();
        const l = e == null ? undefined : e.hash;
        return [o && a && Boolean(l) && !t, l];
      };
    },
    95983: function (e, t, a) {
      a.d(t, {
        Z: () => u,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(10900);
      var r = a(48867);
      var o = a(21440);
      var l = a(47400);
      var c = a(43034);
      var d = a(3216);
      const u = () => {
        const e = (0, s.useDispatch)();
        const { isEmployer: t } = (0, d.Z)();
        const a = (0, r.v)(l.km);
        const u = (0, r.v)(l.A1);
        const h = (u == null ? undefined : u.vacancyId) || 0;
        const p = (a == null ? undefined : a.id) || 0;
        const m =
          (0, r.v)(({ similarCounters: e }) => e.byResume[p]) === undefined;
        const v =
          (0, r.v)(({ similarCounters: e }) => e.byVacancy[h]) === undefined;
        (0, n.useEffect)(() => {
          if (t && h && p && (v || m)) {
            const t = {
              ...(v
                ? {
                    vacancyId: h,
                  }
                : {}),
              ...(m
                ? {
                    resumeId: p,
                  }
                : {}),
            };
            o.Z.get("/chatik/api/similar_counters", {
              params: t,
            }).then((a) => {
              const { data: n } = a;
              if (!n) {
                i.c.log("out", new Error("Empty counters response"), {
                  response: a,
                });
              }
              e((0, c.a_)(n, t));
            });
          }
        }, [e, t, m, v, p, h]);
      };
    },
    46192: function (e, t, a) {
      a.d(t, {
        Ix: () => o,
        Xl: () => r,
        do: () => l,
      });
      var n = a(48867);
      var s = a(20046);
      const i = () => (0, n.v)(({ topLevelSite: e }) => e);
      const r = () => i().startsWith(s.D.RU);
      const o = () => i().startsWith(s.D.ZP);
      const l = () => i().startsWith(s.D.BY);
    },
    40588: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(84434);
      const s = () => (0, n.useStore)();
    },
    55750: function (e, t, a) {
      a.d(t, {
        M: () => w,
      });
      var n = a(3891);
      var s = a(48867);
      var i = a(70396);
      var r = a.n(i);
      var o = a(25833);
      var l = a(86345);
      var c = a.n(l);
      var d = a(10900);
      var u = a(91010);
      var h = a(21440);
      var p = a(90634);
      const m = "/chatik/api/participant_action";
      const v = (e, t) =>
        h.Z.post(
          m,
          {
            chatId: e,
            actionType: "NONE",
          },
          {
            params: undefined,
            signal: t == null ? undefined : t.signal,
            retry: false,
          },
        ).catch((e) => {
          var t;
          if (
            c().isCancel(e) ||
            (e == null ? undefined : e.message) === "Network Error"
          ) {
            return;
          }
          const a =
            e == null || (t = e.response) === null || t === undefined
              ? undefined
              : t.status;
          if (a !== 403 && a !== 404) {
            d.c.log("out", new Error("Unable to send stop typing action"), {
              error: e,
            });
          }
        });
      var g = a(26442);
      var y = a(73735);
      var f = a(42515);
      const w = () => {
        const e = (0, s.v)((e) => e.activeState);
        const t = (0, s.v)(
          ({ features: e }) => e[o.A.ParticipantActionSendTimeout],
        );
        const a = (0, s.v)(
          ({ features: e }) => e[o.A.ParticipantActionInactivityTimeout],
        );
        const i = (0, g.Z)();
        const l = (0, y.D)(i);
        const w = (0, f.Z)();
        const x = (0, n.useRef)();
        const b = (0, n.useRef)();
        const k = (0, n.useRef)(i);
        k.current = i;
        const C = (0, n.useMemo)(
          () =>
            r()(() => {
              x.current = new AbortController();
              e = k.current;
              t = x.current;
              return h.Z.post(
                m,
                {
                  chatId: e,
                  actionType: "TYPING",
                },
                {
                  params: undefined,
                  signal: t == null ? undefined : t.signal,
                  retry: false,
                },
              ).catch((e) => {
                var t;
                if (
                  c().isCancel(e) ||
                  (e == null ? undefined : e.message) === "Network Error"
                ) {
                  return;
                }
                const a =
                  e == null || (t = e.response) === null || t === undefined
                    ? undefined
                    : t.status;
                if (a !== 403 && a !== 404) {
                  d.c.log(
                    "out",
                    new Error("Unable to send active typing action"),
                    {
                      error: e,
                    },
                  );
                }
              });
              var e;
              var t;
            }, t),
          [t],
        );
        const I = (0, n.useCallback)(() => {
          var e;
          clearTimeout(b.current);
          b.current = undefined;
          C.cancel();
          if ((e = x.current) !== null && e !== undefined) {
            e.abort();
          }
        }, [C]);
        (0, n.useEffect)(() => {
          const t = Boolean(b.current);
          if ((!!l && l !== i) || !w || !e) {
            if (t) {
              v(l);
            }
            I();
          }
        }, [i, w, I, l, e]);
        (0, n.useEffect)(
          () => () => {
            if (b.current) {
              v(k.current);
            }
            I();
          },
          [I],
        );
        (0, n.useEffect)(() => {
          const e = () => {
            var e;
            if (b.current) {
              e = i;
              if (navigator.sendBeacon) {
                if (
                  !navigator.sendBeacon(
                    m,
                    new Blob(
                      [
                        u.j.stringify({
                          chatId: e,
                          actionType: "NONE",
                          _xsrf: p.L.get("_xsrf"),
                        }),
                      ],
                      {
                        type: "application/x-www-form-urlencoded",
                      },
                    ),
                  )
                ) {
                  d.c.log(
                    "out",
                    "chatik stop active typing status: sendBeacon failed",
                  );
                }
              } else {
                console.error(
                  "chatik stop active typing status: sendBeacon is not available",
                );
              }
            }
          };
          window.addEventListener("beforeunload", e);
          return () => window.removeEventListener("beforeunload", e);
        }, [i]);
        return (0, n.useCallback)(() => {
          C();
          if (b.current) {
            clearTimeout(b.current);
          }
          b.current = setTimeout(() => {
            v(i);
            I();
          }, a);
        }, [i, a, I, C]);
      };
    },
    42515: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(3891);
      const s = () => {
        const [e, t] = (0, n.useState)(
          typeof document == "undefined" ? "hidden" : document.visibilityState,
        );
        (0, n.useEffect)(() => {
          const e = () => {
            t(document.visibilityState);
          };
          document.addEventListener("visibilitychange", e);
          return () => {
            document.removeEventListener("visibilitychange", e);
          };
        }, []);
        return e === "visible";
      };
    },
    49727: function (e, t, a) {
      a.d(t, {
        T: () => i,
      });
      var n = a(48867);
      var s = a(69675);
      const i = () => {
        const e = (0, n.v)((e) => e.langs[0]);
        const t = (0, n.v)((e) => e.trl);
        return (0, s.Z)(undefined, t, e, typeof window == "undefined");
      };
    },
    2615: function (e, t, a) {
      a.d(t, {
        Z: () => m,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(86345);
      var r = a.n(i);
      var o = a(21440);
      const l = (e, t = {}) =>
        o.Z.get("/chatik/api/get_link_preview", {
          params: {
            urls: e,
          },
          ...t,
        }).then(({ data: e }) => e.result);
      var c = a(7659);
      const d = (e) => ({
        type: c.b,
        previews: e,
      });
      const u = (e, t) => async (a) => {
        a(
          d(
            e.map((e) => ({
              url: e,
              ok: false,
              loading: true,
            })),
          ),
        );
        return l(e, {
          signal: t == null ? undefined : t.signal,
        })
          .then((e) => a(d(e)))
          .catch((t) => {
            if (r().isCancel(t)) {
              a(
                ((e) => ({
                  type: c.n,
                  urls: e,
                }))(e),
              );
            } else {
              a(
                d(
                  e.map((e) => {
                    return {
                      ok: false,
                      url: e,
                      error: {
                        code: t.response?.status || undefined,
                        message: t.message || "Unknown error",
                      },
                    };
                  }),
                ),
              );
            }
          });
      };
      var h = a(9362);
      var p = a(40588);
      const m = () => {
        const e = (0, s.useDispatch)();
        const t = (0, p.Z)();
        const a = (0, n.useRef)([]);
        (0, n.useEffect)(() => {
          const e = a.current;
          return () => {
            e.forEach((e) => e.abort());
          };
        }, []);
        return (0, n.useCallback)(
          (n) => {
            if (!n.length) {
              return null;
            }
            const s = t.getState();
            if ((n = n.map(h.Z).filter((e) => !s.linkPreviews[e])).length) {
              const t = new AbortController();
              a.current.push(t);
              e(u(n, t));
              return t;
            }
            return null;
          },
          [e, t],
        );
      };
    },
    35862: function (e, t, a) {
      a.d(t, {
        Z: () => I,
      });
      var n = a(3891);
      var s = a(84434);
      var i = a(91263);
      var r = a.n(i);
      var o = a(64452);
      var l = a(6745);
      var c = a(91809);
      const d = (e, t) => {
        if (e.length <= t) {
          return e;
        }
        const { name: a, ext: n } = (0, c.Z)(e);
        const s = "...";
        const i = t - 3 - n.length;
        if (i < 2) {
          return a.slice(0, 1) + s + n;
        }
        const r = Math.floor(i / 2);
        return a.slice(0, r) + s + a.slice(-r) + n;
      };
      const u = "chatik.fileUpload.error.maxFilesCount";
      const h = "chatik.fileUpload.error.maxFileSize";
      const p = "chatik.fileUpload.error.wrongFileType";
      var m = a(63141);
      var v = a(44036);
      var g = a(89016);
      var y = a(44820);
      var f = a(26442);
      var w = a(52002);
      var x = a(40588);
      var b = a(49727);
      const k = "chatik.fileUpload.multipleFilesError.default";
      const C = {
        one: "chatik.fileUpload.file.one",
        some: "chatik.fileUpload.file.some",
        many: "chatik.fileUpload.file.many",
      };
      const I = () => {
        const e = (0, s.useDispatch)();
        const t = (0, x.Z)();
        const a = (0, f.Z)();
        const i = (0, w.Z)();
        const I = (0, b.T)();
        return (0, n.useCallback)(
          (n, s) => {
            const f = (0, v.S3)(a)(t.getState()) || [];
            const { validFiles: w, errors: x } = (0, l.ox)(n, f.length);
            if (w.length) {
              e((0, m.fV)(a, w, s));
            }
            const b = Object.keys(x).every((e) => {
              var a;
              if (e === "count") {
                return x[e]?.length;
              } else {
                return (a = x[e]) === null || a === undefined || !a.length;
              }
            });
            if (n.length - w.length > 1 && !b) {
              i({
                kind: "error",
                content: (0, o.WU)(I[k], {
                  "{0}": `${n.length - w.length} ${(0, g.Z)(n.length - w.length, [I[C.one], I[C.some], I[C.many]])}`,
                }),
                autoClose: true,
              });
            } else {
              Object.keys(x).forEach((e) => {
                const t = x[e];
                if (!t.length) {
                  return;
                }
                let m = "";
                switch (e) {
                  case "size":
                    m = ((e, { files: t }) => {
                      const { ext: i } = (0, c.Z)(t[0]?.name ?? "");
                      return (0, o.WU)(e[h], {
                        "{0}":
                          i == null
                            ? undefined
                            : i.slice(1, i.length).toUpperCase(),
                        "{1}": l.C1,
                        "{2}": d(t[0]?.name, 18),
                      });
                    })(I, {
                      files: t,
                    });
                    break;
                  case "type":
                    m = ((e, t) => {
                      const { ext: i } = (0, c.Z)(t[0]?.name ?? "");
                      return (0, o.WU)(e[p], {
                        "{0}":
                          i == null
                            ? undefined
                            : i.slice(1, i.length).toUpperCase(),
                        "{1}": d(t[0]?.name, 18),
                      });
                    })(I, t);
                    break;
                  case "count":
                    m = ((e) => e[u])(I);
                }
                t.forEach((t) => {
                  r()({
                    chatId: a,
                    filename: t.name,
                    fileSize: (0, y.Z)(t.size),
                    fileCount: n.length,
                    loadType: s,
                    alert: `${e}_error`,
                  });
                });
                i({
                  kind: "error",
                  content: m,
                  autoClose: true,
                });
              });
            }
          },
          [a, e, t, i, I],
        );
      };
    },
    3216: function (e, t, a) {
      a.d(t, {
        Z: () => r,
      });
      var n = a(3891);
      var s = a(48867);
      var i = a(68390);
      const r = () => {
        const e = (0, s.v)((e) => e.userType);
        return (0, n.useMemo)(
          () => ({
            userType: e,
            isApplicant: e === i.Z.Applicant,
            isEmployer: e === i.Z.Employer,
            isAnonymous: e === i.Z.Anonymous,
          }),
          [e],
        );
      };
    },
    71473: function (e, t, a) {
      a.d(t, {
        Z: () => c,
      });
      var n = a(48867);
      var s = a(13018);
      var i = a(25833);
      var r = a(99102);
      var o = a(47400);
      var l = a(3216);
      const c = () => {
        const e = (0, n.v)(({ features: e }) => e[i.A.EmployerWorkflowActions]);
        const t = (0, n.v)(({ platform: e }) => e);
        const a = (0, n.v)(o.km);
        const c = (0, n.v)(o.A1);
        const d = (0, n.v)(s.AV);
        const u = (0, n.v)(({ chatData: e }) => e.chatStates.writeMessageState);
        const { isApplicant: h } = (0, l.Z)();
        const p = !!e && !h;
        const m = a && t !== r.Y.Talantix && (d || c);
        return u.allowed && m && p;
      };
    },
    87749: function (e, t, a) {
      a.d(t, {
        Am: () => l,
        mi: () => h,
        o_: () => r,
        T5: () => c,
        Xi: () => d,
        $2: () => u,
        fs: () => o,
      });
      var n = a(86071);
      var s = a(37258);
      var i = a(57860);
      const r = (e, t) => ({
        type: i.gc,
        messageFakeId: e,
        realMessage: t,
      });
      const o = (e, t) => (a, s) => {
        const r = s();
        const { id: o, text: l, file: c } = t;
        const d = r.resources.participants;
        const u = r.chatData.chat.currentParticipantId;
        const h = u ? d[u] : null;
        const p = {
          id: o,
          participantId: u || "0",
          participantDisplay: {
            name: (h == null ? undefined : h.display.name) || "",
            isBot: false,
          },
          creationTime: new Date().toString(),
          text: l,
          resources:
            c != null && c.uploadId
              ? {
                  FILE: [c.uploadId],
                }
              : {},
          type: n.u.Simple,
          isSending: true,
          canEdit: true,
          canDelete: true,
          ...(c && {
            files: [
              {
                title: c.file.name,
                url: c.url || "",
                upload_id: c.uploadId || "",
                content_type: c.file.type,
              },
            ],
          }),
        };
        a(
          ((e, t) => ({
            type: i.Ds,
            message: t,
            chatId: e,
          }))(e, p),
        );
      };
      const l = (e, t) => ({
        type: i.b7,
        messageId: t,
        chatId: e,
      });
      const c = (e, t) => ({
        type: i.qZ,
        messageId: t,
        chatId: e,
      });
      const d = (e) => ({
        type: i.ov,
        chatId: e,
      });
      const u =
        (
          e,
          t = {
            shouldUpdateSuggestions: true,
          },
        ) =>
        (a) => {
          var n;
          var r;
          if (e) {
            if (e.error) {
              a(
                ((n = e.error),
                {
                  type: i.Gl,
                  error: n,
                }),
              );
            } else {
              a(
                ((e, t) => ({
                  type: i.Og,
                  newState: e,
                  params: t,
                }))(e, t),
              );
              a(
                ((r = e.resources),
                {
                  type: s.T,
                  resources: r,
                }),
              );
            }
          }
        };
      const h = (e) => ({
        type: i.rC,
        id: e,
      });
    },
    57860: function (e, t, a) {
      a.d(t, {
        Ds: () => s,
        Gl: () => d,
        Og: () => c,
        b7: () => r,
        cE: () => o,
        gc: () => n,
        ov: () => l,
        qZ: () => i,
        rC: () => u,
      });
      const n = "@@chatData/SET_MESSAGE_SENT";
      const s = "@@chatData/ADD_MESSAGE_TO_CHAT";
      const i = "@@chatData/REMOVE_MESSAGE_FROM_CHAT";
      const r = "@@chatData/MARK_AS_REMOVED";
      const o = "@@chatData/SET_CHAT_OPERATIONS";
      const l = "@@chatData/REMOVE_SUGGESTIONS_FROM_CHAT";
      const c = "@@chatData/UPDATE_CHAT_DATA";
      const d = "@@chatData/SET_CHAT_DATA_ERROR";
      const u = "@@chatData/SET_FORCE_REPLACE_ID";
    },
    13018: function (e, t, a) {
      a.d(t, {
        AV: () => o,
        BK: () => r,
        TC: () => i,
        sW: () => l,
      });
      var n = a(83307);
      var s = a(47400);
      const i = (0, n.createSelector)(
        [s.km, s.Fq, (e) => e.chatData.display],
        (e, t) => {
          var a;
          var n;
          if (e === undefined) {
            return null;
          }
          const s = e.hiddenFields.includes("phones");
          const i = e.id;
          const r = e.hash;
          const o = t == null ? undefined : t.topicId;
          const l =
            (a = e.phone) === null || a === undefined
              ? undefined
              : a.filter((e) => e.country === "7" && !e.raw.startsWith("77"));
          return {
            phone:
              (l == null ? undefined : l.length) > 0 && !s
                ? l == null || (n = l[0]) === null || n === undefined
                  ? undefined
                  : n.raw
                : null,
            resumeId: i,
            resumeHash: r,
            source: "chat",
            topicId: o,
          };
        },
      );
      const r = (e) =>
        e.chatData.chat.type === "COMMON" &&
        e.chatData.chat.subType === "marketplace";
      const o = (e) =>
        e.chatData.chat.type === "COMMON" &&
        e.chatData.chat.subType === "WITHOUT_VACANCY";
      const l = (e) =>
        e.chatData.chat.type === "COMMON" &&
        e.chatData.chat.subType === "WITHOUT_RESUME";
    },
    29801: function (e, t, a) {
      a.d(t, {
        L2: () => o,
        R: () => i,
        Ru: () => n,
        sW: () => r,
        sZ: () => s,
      });
      let n = (function (e) {
        e.LeaveChat = "LEAVE_CHAT";
        e.DisableNotifications = "DISABLE_NOTIFICATIONS";
        e.EnableNotifications = "ENABLE_NOTIFICATIONS";
        e.DisableWritePossibility = "DISABLE_WRITE_POSSIBILITY";
        e.EnableWritePossibility = "ENABLE_WRITE_POSSIBILITY";
        e.Rate = "RATING";
        e.ClearChat = "CLEAR_CHAT";
        return e;
      })({});
      let s = (function (e) {
        e.EnabledForAll = "ENABLED_FOR_ALL_BY_EMPLOYER";
        e.DisabledForApplicant = "DISABLED_FOR_APPLICANT";
        e.DisabledByEmployer = "DISABLED_FOR_APPLICANT_BY_EMPLOYER";
        e.DisabledForAnonymous = "DISABLED_FOR_ANONYMOUS_USER";
        return e;
      })({});
      let i = (function (e) {
        e.Allowed = "ALLOWED";
        e.MoreThanFive = "MORE_5";
        e.MaxMessages = "MORE_100";
        e.DisabledByEmployer = "DISABLED_BY_EMPLOYER";
        e.WithoutInvitation = "WITHOUT_INVITATION";
        e.ArchivedTopic = "ARCHIVED_TOPIC";
        e.SuspiciousBehavior = "SUSPICIOUS_BEHAVIOR";
        e.TemporarilyUnavailable = "TEMPORARILY_UNAVAILABLE";
        e.Unknown = "UNKNOWN";
        e.PfpBlock = "PFP_BLOCK";
        e.EmployerLimitExceeded = "EMPLOYER_NEGOTIATIONS_LIMIT_EXCEEDED";
        e.AIAssistantTyping = "AI_ASSISTANT_TYPING";
        return e;
      })({});
      let r = (function (e) {
        e.Action = "ACTION";
        e.Message = "MESSAGE";
        return e;
      })({});
      let o = (function (e) {
        e.CloseChat = "CLOSE_CHAT";
        return e;
      })({});
    },
    5791: function (e, t, a) {
      a.d(t, {
        NY: () => o,
        X7: () => s,
        fg: () => r,
        jH: () => i,
      });
      var n = a(36258);
      const s = (e, t, a) => {
        const i = e.resources[n.U.Resume];
        if (!i) {
          return false;
        }
        const r = i[0];
        if (t.resumes[r]) {
          return false;
        }
        return (
          (((a == null ? undefined : a.resumes) || {})[r]?.reason || "") ===
          "UNAVAILABLE_FOR_UNTRUSTED_EMPLOYER"
        );
      };
      const i = (e, t) => {
        return Boolean(t.resources[e]?.[0]);
      };
      const r = (e, t) => {
        return t.resources[e]?.[0];
      };
      const o = (e, t) => {
        const a = [];
        let n = 0;
        let s = 0;
        while (n < e.length || s < t.length) {
          if (e[n]) {
            if (t[s]) {
              if (e[n].id < t[s].id) {
                a.push(e[n]);
                n += 1;
              } else if (e[n].id > t[s].id) {
                a.push(t[s]);
                s += 1;
              } else {
                a.push(t[s]);
                n += 1;
                s += 1;
              }
            } else {
              a.push(e[n]);
              n += 1;
            }
          } else {
            a.push(t[s]);
            s += 1;
          }
        }
        return a;
      };
    },
    21665: function (e, t, a) {
      a.d(t, {
        IE: () => u,
        VE: () => l,
        W9: () => d,
        bG: () => p,
        gY: () => o,
        ku: () => h,
        mt: () => c,
      });
      var n = a(72045);
      var s = a(21440);
      var i = a(67073);
      var r = a(475);
      const o = (e) => ({
        type: r.q$,
        text: e,
      });
      const l = (e, t) => ({
        type: r.pZ,
        text: e,
        metadata: t,
      });
      const c = () => ({
        type: r.Qu,
      });
      const d = (e) => ({
        type: r.gF,
        message: e,
      });
      const u = (e) => (t, a) => {
        const { text: n, metadata: s } = a().messageDrafts[e] || {};
        t(
          d({
            text: n,
            metadata: s,
          }),
        );
      };
      const h = () => (e, t) => {
        e(
          d({
            text: t().editMessage.text ?? "",
          }),
        );
      };
      const p = (e, t) => async (a, r) => {
        const o = r();
        const { text: l, file: c, suggestionUuid: d, metadata: u } = t;
        const h = o.isProxiedComponent;
        const p = o.parentWindowUrl;
        const m = o.supportLocation || "chatik";
        const v = o.platform;
        const g = o.chatData.chat.type;
        const y = Boolean(u) || g === "BOT" || g === "SUPPORT";
        return (
          await s.Z.post(
            "/chatik/api/send",
            {
              chatId: e,
              idempotencyKey: (0, n.Z)(),
              ...(l && {
                text: l,
              }),
              ...((c == null ? undefined : c.uploadId) && {
                uploadId: c.uploadId,
              }),
              ...(d && {
                suggestionUuid: d,
              }),
              metadata: y
                ? {
                    ...(u || {}),
                    chatType: g,
                    parentWindowUrl: p,
                    location: m,
                    platform: {
                      name: v,
                      data: window.globalServiceVars.chatik.metadata[v] || {},
                    },
                  }
                : undefined,
            },
            {
              params: {
                hhtmSourceLabel: o.isSpoiler
                  ? "spoiler"
                  : o.isInlineChat
                    ? "inlineChat"
                    : "chat",
                hhtmSource: h ? "chat" : (0, i.H)(),
              },
            },
          )
        ).data;
      };
    },
    475: function (e, t, a) {
      a.d(t, {
        Qu: () => r,
        gF: () => n,
        pZ: () => i,
        q$: () => s,
      });
      const n = "SET_SEND_MESSAGE";
      const s = "MANUAL_INPUT";
      const i = "ENRICHED_METADATA_INPUT";
      const r = "CLEAR_SEND_MESSAGE";
    },
    54549: function (e, t, a) {
      a.d(t, {
        AK: () => o,
        GL: () => l,
        Lf: () => i,
        VB: () => r,
        Vg: () => c,
        at: () => s,
        nR: () => d,
      });
      var n = a(35203);
      const s = (e, t) => ({
        type: n.Hs,
        notificationEnabled: t,
        chatId: e,
      });
      const i = (e) => ({
        type: n.bs,
        chatId: e,
      });
      const r = () => ({
        type: n.Ec,
      });
      const o = (e, t, a, s) => ({
        type: n.t4,
        chatId: e,
        messageId: t,
        text: a,
        lastChangeTime: s,
      });
      const l = (e) => (t) => {
        var a;
        if (e) {
          t(
            ((a = e),
            {
              type: n.$Y,
              newState: a,
            }),
          );
        }
      };
      const c = (e) => ({
        type: n.U,
        ids: e,
      });
      const d = ({ updateFor: e, chatId: t, messageId: a }) => ({
        type: n.oz,
        updateFor: e,
        chatId: t,
        messageId: a,
      });
    },
    35203: function (e, t, a) {
      a.d(t, {
        $Y: () => n,
        Ec: () => o,
        Hs: () => s,
        U: () => l,
        bs: () => r,
        oz: () => c,
        t4: () => i,
      });
      const n = "UPDATE_CHATS";
      const s = "SET_CHAT_NOTIFICATION";
      const i = "SET_MESSAGE_TEXT";
      const r = "LEAVE_CHAT";
      const o = "CLEAR_CHATS";
      const l = "DELETE_CHATS";
      const c = "UPDATE_LAST_VIEWED_MESSAGE_ID";
    },
    86071: function (e, t, a) {
      a.d(t, {
        t: () => s,
        u: () => n,
      });
      let n = (function (e) {
        e.Simple = "SIMPLE";
        e.ParticipantJoined = "PARTICIPANT_JOINED";
        e.ParticipantLeft = "PARTICIPANT_LEFT";
        e.TextToJoin = "TEXT_TO_JOIN";
        return e;
      })({});
      let s = (function (e) {
        e.Sending = "sending";
        e.Read = "read";
        e.Delivered = "delivered";
        e.Error = "error";
        e.Hidden = "hidden";
        return e;
      })({});
    },
    65442: function (e, t, a) {
      a.d(t, {
        Hd: () => o,
        Wx: () => l,
        ZP: () => c,
      });
      var n = a(83307);
      var s = a(32892);
      const i = {};
      const r = (0, n.createSlice)({
        name: "editMessage",
        initialState: i,
        reducers: {
          editMessage: {
            reducer: (e, t) => {
              e.id = t.payload.id;
              e.text = t.payload.text;
            },
            prepare: (e, t) => ({
              payload: {
                id: e,
                text: t,
              },
            }),
          },
          stopMessageEdit: () => i,
        },
        extraReducers: (e) => {
          e.addCase(s.LOCATION_CHANGE, () => i);
        },
      });
      const { editMessage: o, stopMessageEdit: l } = r.actions;
      const c = r.reducer;
    },
    25833: function (e, t, a) {
      a.d(t, {
        A: () => n,
      });
      let n = (function (e) {
        e.ChatsUpdateDelay = "chats_update_delay";
        e.ChatsDataUpdateDelay = "chat_data_update_delay";
        e.UpdateAfterSocketEventDelay = "update_after_socket_event_delay";
        e.WebsocketEnabled = "websocket_enabled";
        e.AutoFetchUpdateDelayWithWebSocket =
          "autofetch_update_delay_with_websocket";
        e.SentryLogging = "sentry_logging";
        e.EmployerWorkflowActions = "employer_workflow_actions";
        e.ImageMaxWidthForPreview = "image_max_width_for_preview";
        e.ImageMaxHeightForPreview = "image_max_height_for_preview";
        e.MagritteUiEnabled = "magritte_ui_enabled";
        e.FullScreenResumeEnabled = "full_screen_resume_enabled";
        e.NotifyAdminEnabled = "notify_admin_enabled";
        e.ParticipantActionSendTimeout = "participant_action_send_timeout";
        e.ParticipantActionInactivityTimeout =
          "participant_action_inactivity_timeout";
        e.RedirectDirectRequestToChatPage =
          "redirect_direct_request_to_chat_page";
        return e;
      })({});
    },
    52855: function (e, t, a) {
      a.d(t, {
        H: () => d,
        Z: () => c,
      });
      const n = "OPEN_LINK_CHECK_SCREEN";
      const s = "CLOSE_LINK_CHECK_SCREEN";
      const i = "SET_LINK_CHECK_RESULT";
      const r = "SET_LINK_CURRENT_URL";
      const o = "RESET";
      const l = "SET_MESSAGE_ID";
      const c = {
        openScreen: () => ({
          type: n,
        }),
        closeScreen: () => ({
          type: s,
        }),
        setResult: (e, t) => ({
          type: i,
          result: t,
          url: e,
        }),
        setCurentUrl: (e) => ({
          type: r,
          currentUrl: e,
        }),
        reset: () => ({
          type: o,
        }),
        setMessageId: (e) => ({
          type: l,
          messageId: e,
        }),
      };
      const d = {
        OPEN_SCREEN: n,
        CLOSE_SCREEN: s,
        SET_RESULT: i,
        SET_CURRENT_URL: r,
        RESET: o,
        SET_MESSAGE_ID: l,
      };
    },
    7659: function (e, t, a) {
      a.d(t, {
        b: () => n,
        n: () => s,
      });
      const n = "ADD_LINK_PREVIEWS";
      const s = "REMOVE_LINK_PREVIEWS";
    },
    96915: function (e, t, a) {
      a.d(t, {
        Ry: () => r,
        UF: () => s,
        cK: () => i,
      });
      var n = a(115);
      const s = (e, t) => ({
        type: n.gh,
        chatId: e,
        message: t,
      });
      const i = (e) => ({
        type: n.P9,
        chatId: e,
      });
      const r = () => ({
        type: n.kg,
      });
    },
    115: function (e, t, a) {
      a.d(t, {
        P9: () => s,
        gh: () => n,
        kg: () => i,
      });
      const n = "SAVE_DRAFT";
      const s = "REMOVE_DRAFT";
      const i = "SET_DRAFTS_FROM_STORAGE";
    },
    62953: function (e, t, a) {
      a.d(t, {
        H: () => r,
        v: () => i,
      });
      const n = "SAVE_NOTIFY_ADMIN";
      const s = "REMOVE_NOTIFY_ADMIN";
      const i = {
        saveNotifyAdminForChat: (e, t) => ({
          type: n,
          chatId: e,
          initTime: t,
        }),
        removeNotifyAdminForChat: (e) => ({
          type: s,
          chatId: e,
        }),
      };
      const r = {
        SAVE_NOTIFY_ADMIN: n,
        REMOVE_NOTIFY_ADMIN: s,
      };
    },
    2183: function (e, t, a) {
      a.d(t, {
        CT: () => r,
        OY: () => o,
      });
      var n = a(83307);
      var s = a(47400);
      const i = (0, n.createSelector)(
        [({ chatsParticipantActions: e }) => e, ({ chatData: e }) => e.chat.id],
        (e, t) => e[t],
      );
      const r = (0, n.createSelector)([s.U6, i], (e, t) =>
        e == null
          ? undefined
          : e.filter((e) => {
              var a;
              return (
                (t == null || (a = t[e.externalId]) === null || a === undefined
                  ? undefined
                  : a.action) === "TYPING"
              );
            }),
      );
      const o = () =>
        (0, n.createSelector)(
          [(e, t) => t, (e) => e.chatsParticipantActions],
          (e, t) => {
            return Object.values((t == null ? undefined : t[e]) ?? {}).filter(
              (e) => e.action === "TYPING",
            ).length;
          },
        );
    },
    99102: function (e, t, a) {
      a.d(t, {
        Y: () => s,
        Z: () => i,
      });
      var n = a(30329);
      let s = (function (e) {
        e.XHH = "xhh";
        e.Talantix = "talantix";
        return e;
      })({});
      const i = (0, n.autoGeneratedReducer)(s.XHH);
    },
    61675: function (e, t, a) {
      a.d(t, {
        HV: () => d,
        L2: () => u,
        Qe: () => i,
        Qk: () => r,
        lF: () => c,
        xV: () => o,
      });
      var n = a(21440);
      var s = a(33161);
      const i = (e, t) => ({
        type: s.xW,
        chatId: e,
        data: t,
      });
      const r = (e, t) => ({
        type: s.KH,
        chatId: e,
        messageActions: t,
      });
      const o = (e) => ({
        type: s.i9,
        chatId: e,
      });
      const l = (e, t) => ({
        type: s.n9,
        chatId: e,
        isLoading: t,
      });
      const c = (e) => ({
        type: s.Bh,
        chatId: e,
      });
      const d = (e) => ({
        type: s.es,
        visible: e,
      });
      const u = () => async (e, t) => {
        const s = t();
        const {
          chat: {
            id: r,
            messages: { items: o },
          },
          chatStates: {
            writeMessageState: { allowed: c },
          },
        } = s.chatData;
        const d = s.quickReplies.data[r]?.isLoading;
        const u = ((e) => {
          if (e && e.length !== 0) {
            return e[e.length - 1];
          }
        })(o);
        if (!d && c) {
          e(l(r, true));
          try {
            const { data: t } = await n.Z.get("/chatik/api/quick_replies", {
              params: {
                chatId: r,
                messageId: u == null ? undefined : u.id,
              },
              retry: false,
            });
            e(i(r, t.quick_replies ?? []));
          } catch (t) {
            e(l(r, false));
          }
        }
      };
    },
    33161: function (e, t, a) {
      a.d(t, {
        Bh: () => l,
        KH: () => s,
        es: () => o,
        i9: () => i,
        n9: () => r,
        xW: () => n,
      });
      const n = "UPDATE_QUICK_REPLIES";
      const s = "UPDATE_QUICK_REPLIES_MESSAGE_ACTIONS";
      const i = "CLEAR_QUICK_REPLIES_MESSAGE_ACTIONS";
      const r = "SET_QUICK_REPLIES_LOADING";
      const o = "SET_QUICK_REPLIES_VISIBLE";
      const l = "REMOVE_MESSAGE_ACTIONS_FROM_QUICK_REPLIES_ACTIONS";
    },
    86918: function (e, t, a) {
      a.d(t, {
        t: () => s,
      });
      var n = a(83307);
      const s = (0, n.createSelector)(
        [
          (e) => {
            return e.quickReplies?.data;
          },
          (e, t) => t,
        ],
        (e, t) => {
          const s = e == null ? undefined : e[t];
          return [
            ...((s == null ? undefined : s.message_actions) ?? []),
            ...((s == null ? undefined : s.quick_replies) ?? []),
          ];
        },
      );
    },
    37258: function (e, t, a) {
      a.d(t, {
        T: () => n,
      });
      const n = "@@resources/UPDATE_RESOURCES";
    },
    47400: function (e, t, a) {
      a.d(t, {
        A1: () => l,
        DP: () => m,
        Eo: () => r,
        Fq: () => d,
        R2: () => h,
        U6: () => p,
        W4: () => g,
        _I: () => v,
        h: () => c,
        km: () => o,
        sQ: () => u,
      });
      var n = a(83307);
      var s = a(5791);
      var i = a(36258);
      const r = (0, n.createSelector)(
        [({ resources: e }) => e.addresses, (e, t) => t],
        (e, t) => (t && e ? e[t] : undefined),
      );
      const o = (0, n.createSelector)(
        [
          ({ resources: e }) => e.resumes,
          ({ chatData: e }) => e.chat.resources[i.U.Resume],
        ],
        (e, t) => (e && t ? e[t[0]] : undefined),
      );
      const l = (0, n.createSelector)(
        [
          ({ resources: e }) => e.vacancies,
          ({ chatData: e }) => e.chat.resources[i.U.Vacancy],
        ],
        (e, t) => (e && t ? e[t[0]] : undefined),
      );
      const c = (0, n.createSelector)(
        [
          l,
          (e) => {
            return e.chatData.chat.resources?.[i.U.Employer];
          },
          (e) =>
            e.chatData.chat.type === "COMMON" &&
            e.chatData.chat.subType === "WITHOUT_VACANCY",
        ],
        (e, t, a) => {
          var n;
          if (a) {
            return Number(t == null ? undefined : t[0]);
          } else if (e == null || (n = e.company) === null || n === undefined) {
            return undefined;
          } else {
            return n.id;
          }
        },
      );
      const d = (0, n.createSelector)(
        [
          ({ resources: e }) => e.negotiation_topics,
          ({ chatData: e }) => e.chat.resources[i.U.NegotiationTopic],
        ],
        (e, t) => (e && t ? e[t[0]] : undefined),
      );
      (0, n.createSelector)(
        [
          ({ resources: e }) => e.assessments,
          ({ chatData: e }) => e.chat.messages.items,
          (e, t) => t,
        ],
        (e, t, a) => {
          const n = t.find(({ id: e }) => e === a);
          if (!n) {
            return;
          }
          const s = n.resources[i.U.Assessment];
          if (e && s) {
            return e[s[0]];
          } else {
            return undefined;
          }
        },
      );
      const u = (0, n.createSelector)(
        [
          ({ resources: e }) => e.test_solutions,
          ({ chatData: e }) => e.chat.messages.items,
          (e, t) => t,
        ],
        (e, t, a) => {
          const n = t.find(({ id: e }) => e === a);
          if (!n) {
            return;
          }
          const s = n.resources[i.U.TestSolution];
          if (e && s) {
            return e[s[0]];
          } else {
            return undefined;
          }
        },
      );
      const h = (0, n.createSelector)(
        [
          ({ resources: e }) => e.participants,
          ({ chatData: e }) => e.chat.currentParticipantId,
        ],
        (e, t) => (t ? e[t] : undefined),
      );
      const p = (0, n.createSelector)(
        [
          ({ resources: e }) => e.participants,
          ({ chatData: e }) => e.chat.participantsIds,
        ],
        (e, t) => t.map((t) => e[t]).filter(Boolean),
      );
      const m = () =>
        (0, n.createSelector)(
          [({ resources: e }) => e.participants, (e, t) => t],
          (e, t) => (t ? (e == null ? undefined : e[t]) : undefined),
        );
      const v = (0, n.createSelector)(
        [({ chatData: e }) => e.chat.messages.items],
        (e) => e[e.length - 1],
      );
      const g = (0, n.createSelector)(
        [
          ({ chatData: e }) => e.chat,
          ({ resources: e }) => e,
          ({ chatData: e }) => e.missingResources,
        ],
        (e, t, a) => (0, s.X7)(e, t, a),
      );
    },
    29727: function (e, t, a) {
      a.d(t, {
        f: () => n,
      });
      let n = (function (e) {
        e.Applicant = "APPLICANT_USER";
        e.Employer = "EMPLOYER_USER";
        e.Bot = "BOT";
        return e;
      })({});
    },
    36258: function (e, t, a) {
      a.d(t, {
        U: () => n,
      });
      let n = (function (e) {
        e.Resume = "RESUME";
        e.Vacancy = "VACANCY";
        e.Employer = "EMPLOYER";
        e.NegotiationTopic = "NEGOTIATION_TOPIC";
        e.Assessment = "ASSESSMENT";
        e.TestSolution = "TEST_SOLUTION";
        e.ChatParticipant = "CHAT_PARTICIPANT";
        e.NegotiationTopicSuggestedForReview =
          "NEGOTIATION_TOPIC_SUGGESTED_FOR_REVIEW";
        e.File = "FILE";
        e.Address = "ADDRESS";
        return e;
      })({});
    },
    16347: function (e, t, a) {
      a.d(t, {
        H: () => n,
        J: () => s,
      });
      let n = (function (e) {
        e.Assesment = "ASSESSMENT";
        e.Consider = "CONSIDER";
        e.DiscardByEmployer = "DISCARD_BY_EMPLOYER";
        e.DiscardByApplicant = "DISCARD_BY_APPLICANT";
        e.DiscardNoInteraction = "DISCARD_NO_INTERACTION";
        e.DiscardToOtherVacancy = "DISCARD_TO_OTHER_VACANCY";
        e.DiscardVacancyClosed = "DISCARD_VACANCY_CLOSED";
        e.Hired = "HIRED";
        e.Interview = "INTERVIEW";
        e.Offer = "OFFER";
        e.PhoneInterview = "PHONE_INTERVIEW";
        e.Response = "RESPONSE";
        return e;
      })({});
      let s = (function (e) {
        e.Response = "RESPONSE";
        e.Invitation = "INVITATION";
        e.Discard = "DISCARD";
        e.Interview = "INTERVIEW";
        e.Hired = "HIRED";
        return e;
      })({});
    },
    43034: function (e, t, a) {
      a.d(t, {
        ZP: () => r,
        a_: () => i,
      });
      var n = a(83307);
      const s = (0, n.createSlice)({
        name: "similarCounters",
        initialState: {
          byVacancy: {},
          byResume: {},
        },
        reducers: {
          addCounters: {
            reducer: (e, t) => {
              const { data: a, vacancyId: n, resumeId: s } = t.payload;
              if (a && n) {
                e.byVacancy[n] = a.byVacancy;
              }
              if (a && s) {
                e.byResume[s] = a.byResume;
              }
            },
            prepare: (e, t = {}) => ({
              payload: {
                data: e,
                ...t,
              },
            }),
          },
        },
      });
      const { addCounters: i } = s.actions;
      const r = s.reducer;
    },
    20046: function (e, t, a) {
      a.d(t, {
        D: () => s,
        Z: () => i,
      });
      var n = a(30329);
      let s = (function (e) {
        e.RU = "hh.ru";
        e.UA = "hh.ua";
        e.UZ = "hh.uz";
        e.GE = "headhunter.ge";
        e.KG = "headhunter.kg";
        e.KZ = "headhunter.com.kz";
        e.AZ = "jobs.day.az";
        e.BY = "rabota.by";
        e.ZP = "zarplata.ru";
        return e;
      })({});
      const i = (0, n.autoGeneratedReducer)("");
    },
    63141: function (e, t, a) {
      a.d(t, {
        qU: () => b,
        fV: () => x,
        j2: () => f,
        W$: () => y,
      });
      var n = a(72045);
      var s = a(91263);
      var i = a.n(s);
      var r = a(23982);
      var o = a(25833);
      var l = a(81764);
      var c = a(21440);
      const d = async (e, t, a) => {
        const n = new FormData();
        n.append("file", t);
        return (
          await c.Z.post("/chatik/api/upload_file", n, {
            params: {
              upload_id: e,
              filename: t.name,
            },
            retry: true,
            onUploadProgress: a,
          })
        ).data;
      };
      var u = a(44820);
      var h = a(68895);
      const p = (e, t) =>
        new Promise((a) => {
          const n = new FileReader();
          n.readAsDataURL(e);
          n.onload = () => {
            const e = new Image();
            e.onload = () => {
              const [s, i] = t;
              if (e.width >= s || e.height >= i) {
                a({
                  content: "",
                  width: 0,
                  height: 0,
                });
              } else {
                a({
                  content: n.result,
                  width: e.width,
                  height: e.height,
                });
              }
            };
            e.src = n.result;
          };
          n.onerror = () => {
            a({
              content: "",
              width: 0,
              height: 0,
            });
          };
        });
      var m = a(73956);
      var v = a(44036);
      const g = ({ chatId: e, file: t }) => ({
        type: m.Rg,
        chatId: e,
        file: t,
      });
      const y = ({ chatId: e, fileId: t }) => ({
        type: m.qh,
        chatId: e,
        fileId: t,
      });
      const f = (e) => ({
        type: m.x_,
        chatId: e,
      });
      const w = async (e, t, a, n, s) => {
        try {
          const i = s.features[o.A.ImageMaxWidthForPreview] || 8000;
          const c = s.features[o.A.ImageMaxHeightForPreview] || 8000;
          const u = (0, r.P)(
            ({ total: t, loaded: a }) =>
              n(
                (({ fileId: e, progress: t }) => ({
                  type: m.Gf,
                  fileId: e,
                  progress: t,
                }))({
                  fileId: e,
                  progress: {
                    total: t,
                    loaded: a,
                  },
                }),
              ),
            1000,
          );
          const [v, y] = await Promise.all([
            d(e, a, u),
            (0, h.C)(a) ? p(a, [i, c]) : undefined,
          ]);
          if (v.status !== "ok") {
            throw new Error("File upload error");
          }
          if (y != null && y.content) {
            n(
              (({ uploadId: e, preview: t }) => ({
                type: l.l,
                uploadId: e,
                preview: t,
              }))({
                uploadId: v.uploadId,
                preview: y,
              }),
            );
          }
          n(
            g({
              chatId: t,
              file: {
                id: v.id,
                url: v.url,
                uploadId: v.uploadId,
                isLoading: false,
                isError: false,
              },
            }),
          );
          return true;
        } catch (a) {
          n(
            g({
              chatId: t,
              file: {
                id: e,
                isError: true,
                isLoading: false,
              },
            }),
          );
          return false;
        }
      };
      const x = (e, t, a) => (s, r) => {
        const o = new Map();
        const l = t.map((e) => {
          const t = (0, n.Z)();
          o.set(e, t);
          return {
            id: t,
            file: e,
            isLoading: true,
            isError: false,
          };
        });
        s(
          (({ chatId: e, files: t }) => ({
            type: m.d3,
            chatId: e,
            files: t,
          }))({
            chatId: e,
            files: l,
          }),
        );
        const c = r();
        t.forEach((n) => {
          const r = o.get(n);
          w(r, e, n, s, c).then((s) => {
            i()({
              chatId: e,
              filename: n.name,
              fileSize: (0, u.Z)(n.size),
              fileCount: t.length,
              loadType: a,
              alert: s ? "" : "network_error",
            });
          });
        });
      };
      const b = (e, t) => (a, n) => {
        const i = n();
        const r = ((0, v.S3)(e)(i) ?? []).find(({ id: e }) => e === t);
        if (r) {
          a(
            g({
              chatId: e,
              file: {
                id: t,
                isError: false,
                isLoading: true,
              },
            }),
          );
          w(t, e, r.file, a, i);
        }
      };
    },
    73956: function (e, t, a) {
      a.d(t, {
        Gf: () => o,
        Rg: () => i,
        d3: () => n,
        qh: () => s,
        x_: () => r,
      });
      const n = "ADD_FILES";
      const s = "REMOVE_FILE";
      const i = "UPDATE_FILE";
      const r = "RESET_FILES";
      const o = "UPDATE_UPLOADING_PROGRESSS";
    },
    44036: function (e, t, a) {
      a.d(t, {
        S3: () => s,
        Xi: () => r,
        qE: () => i,
      });
      var n = a(83307);
      const s = (e) => (t) => t.uploadedFiles.files[e];
      const i = (e) => (t) => t.uploadedFiles.uploadingProgress[e];
      const r = (0, n.createSelector)(
        [
          (e) => e.uploadedFiles.files,
          ({ chatData: e }) => {
            var t;
            if (e == null || (t = e.chat) === null || t === undefined) {
              return undefined;
            } else {
              return t.id;
            }
          },
        ],
        (e, t) => {
          var a;
          return Boolean(
            e == null || (a = e[t]) === null || a === undefined
              ? undefined
              : a.length,
          );
        },
      );
    },
    81764: function (e, t, a) {
      a.d(t, {
        l: () => n,
      });
      const n = "SET_IMAGE_PREVIEW";
    },
    96990: function (e, t, a) {
      a.d(t, {
        h: () => s,
        y: () => n,
      });
      const n = (e) => e.uploadedFilesPreview;
      const s = (e) => (t) => {
        if (e) {
          return t.uploadedFilesPreview?.[e];
        } else {
          return undefined;
        }
      };
    },
    68390: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = (function (e) {
        e.Anonymous = "anonymous";
        e.NedoUser = "nedouser";
        e.BackOffice = "back_office_user";
        e.Employer = "employer";
        e.Applicant = "applicant";
        return e;
      })(n || {});
      const s = n;
    },
    88915: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(10900);
      var s = a(21440);
      const i = (e, t = {}) =>
        s.Z.get("/chatik/api/chat_data", {
          params: e,
          ...t,
        })
          .then(({ data: e }) => {
            if (typeof e != "object" || !e) {
              const t = new Error("Invalid chat data received");
              n.c.log("out", t, {
                data: e,
              });
              return null;
            }
            return e;
          })
          .catch((t) => {
            if (t.response && t.response.status === 404) {
              return {
                error: {
                  code: "NOT_FOUND",
                  chatId: e.chatId,
                },
              };
            }
            throw t;
          });
    },
    59430: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(10900);
      var s = a(21440);
      const i = (e, t = {}) =>
        s.Z.get("/chatik/api/chats", {
          params: e,
          ...t,
        }).then(({ data: e }) => {
          if (typeof e != "object") {
            const t = new Error("Invalid chats data received");
            n.c.log("out", t, {
              data: e,
            });
            return null;
          }
          return e;
        });
    },
    6745: function (e, t, a) {
      a.d(t, {
        C1: () => i,
        L5: () => s,
        aE: () => o,
        ox: () => c,
        wO: () => l,
      });
      var n = a(91809);
      const s = 5;
      const i = 20;
      const r = i * 1024 * 1024;
      const o = {
        "application/msword": 1,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": 1,
        "application/pdf": 1,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": 1,
        "application/vnd.ms-excel": 1,
        "application/vnd.ms-powerpoint": 1,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": 1,
        "application/rtf": 1,
        "image/jpeg": 1,
        "image/png": 1,
        "image/heic": 1,
        "image/bmp": 1,
        "text/plain": 1,
      };
      const l = {
        ".pbix": 1,
      };
      const c = (e, t = 0) => {
        const a = [];
        const i = {
          size: [],
          type: [],
          count: [],
        };
        e.every((c, d) => {
          const { ext: u } = (0, n.Z)(c.name);
          if (c.size > r) {
            i.size.push(c);
            return true;
          } else if (o[c.type] || l[u]) {
            if (a.length + t >= s) {
              i.count = e.slice(d);
              return false;
            } else {
              a.push(c);
              return true;
            }
          } else {
            i.type.push(c);
            return true;
          }
        });
        return {
          validFiles: a,
          errors: i,
        };
      };
    },
    17223: function (e, t, a) {
      a.d(t, {
        H4: () => c,
        LB: () => o,
        ag: () => d,
        fl: () => u,
        i3: () => i,
        ni: () => l,
        yG: () => r,
      });
      var n = a(91010);
      var s = a(68390);
      const i = "chat";
      const r = "https://yandex.ru/maps/";
      const o = ({
        siteRoot: e,
        userType: t,
        resumeHash: a,
        negotiationTopic: r,
        light: o,
        hhtmFrom: l,
        hhtmFromLabel: c,
      }) => {
        const d = (0, n.j)(`${e}/resume/${a}`);
        d.params = {
          hhtmFrom: l || i,
        };
        if (c) {
          d.params.hhtmFromLabel = c;
        }
        if (r && t === s.Z.Employer) {
          d.params.vacancyId = r.vacancyId;
          d.params.resumeId = r.resumeId;
          d.params.t = r.topicId;
        }
        if (o) {
          d.params.print = true;
          d.params.hideLogo = true;
          d.params.hideSettings = true;
        }
        return d.href;
      };
      const l = (e) => {
        const t = (0, n.j)(e);
        t.params.hhtmFrom = i;
        return t.href;
      };
      const c = (e, t) =>
        t ? l(`${e}/employer/vacancy/edit/${t.vacancyId}`) : "";
      const d = (e, t) => (t ? l(`${e}/employer/${t}`) : "");
      const u = (e, t) => {
        try {
          const a = new URL(e);
          Object.keys(t).forEach((e) => {
            a.searchParams.set(e, t[e]);
          });
          return a.toString();
        } catch {
          return e;
        }
      };
    },
    89016: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = (function (e) {
        e[(e.ONE = 0)] = "ONE";
        e[(e.SOME = 1)] = "SOME";
        e[(e.MANY = 2)] = "MANY";
        return e;
      })(n || {});
      const s = [n.MANY, n.ONE, n.SOME, n.SOME, n.SOME, n.MANY];
      const i = (e, t) => {
        const a = e % 100;
        if (a > 10 && a < 15) {
          return t[n.MANY];
        } else {
          return t[s[Math.min(e % 10, 5)]];
        }
      };
    },
    36788: function (e, t, a) {
      a.d(t, {
        Z: () => o,
      });
      var n = a(59617);
      var s = a(20937);
      var i = a(68921);
      var r = a(89059);
      const o = (0, i.D)(() => {
        if (!s.I.connected) {
          if (r.vK) {
            (0, r.AW)("updateCounter");
          } else {
            (0, n.k)();
          }
        }
      }, 1000);
    },
    89059: function (e, t, a) {
      a.d(t, {
        AW: () => c,
        A2: () => u,
        vK: () => s,
        Ld: () => r,
      });
      const n = [
        "hh.ru",
        "hh.kz",
        "hh.uz",
        "hh1.az",
        "rabota.by",
        "headhunter.ge",
        "headhunter.kg",
        "zarplata.ru",
        "pyn.ru",
        "talantix.ru",
      ];
      const s = typeof window != "undefined" && window.top !== window;
      const i = new (class {
        subscribers = new Map();
        isListening = false;
        messageToSendQueue = [];
        constructor(e, t) {
          this.isActive = e;
          this._origin = t;
        }
        get origin() {
          return this._origin;
        }
        set origin(e) {
          this._origin = e;
          if (this._origin) {
            this.flushQueue();
          }
        }
        parseMessage = (e) => {
          if (!e.data || e.data === "undefined") {
            return null;
          }
          if (typeof e.data == "object") {
            return e.data;
          }
          let t;
          try {
            t = JSON.parse(e.data);
          } catch (e) {
            return null;
          }
          return t;
        };
        handleMessage = (e) => {
          const t = this.parseMessage(e);
          if (!t) {
            return;
          }
          const { name: a, data: n } = t;
          const s = this.subscribers.get(a);
          if (s != null) {
            s.forEach(({ handler: t, force: a }) => {
              if (!this._origin || e.origin === this._origin || !!a) {
                t(n, e);
              }
            });
          }
        };
        remove(e, t) {
          const a = this.subscribers.get(e);
          if (a) {
            for (const e of a) {
              if (e.handler === t) {
                a.delete(e);
                break;
              }
            }
            if (a.size === 0) {
              this.subscribers.delete(e);
            }
            this.cleanupIfEmpty();
          }
        }
        cleanupIfEmpty() {
          if (this.subscribers.size === 0 && this.isListening) {
            window.removeEventListener("message", this.handleMessage);
            this.isListening = false;
          }
        }
        on(e, t, a = false) {
          if (a || this.isActive) {
            if (!this.isListening) {
              window.addEventListener("message", this.handleMessage);
              this.isListening = true;
            }
            if (!this.subscribers.has(e)) {
              this.subscribers.set(e, new Set());
            }
            this.subscribers.get(e).add({
              handler: t,
              force: a,
            });
            return () => this.remove(e, t);
          } else {
            return () => {};
          }
        }
        once(e, t, a = false) {
          if (!a && !this.isActive) {
            return () => {};
          }
          const n = (a, s) => {
            t(a, s);
            this.remove(e, n);
          };
          return this.on(e, n, a);
        }
        unsubscribeAll() {
          this.subscribers.clear();
          this.cleanupIfEmpty();
        }
        send(e, t, a) {
          var n;
          if (!this.isActive && !a) {
            return;
          }
          const s = JSON.stringify({
            name: e,
            data: t,
          });
          if (this._origin || a) {
            if ((n = window.top) !== null && n !== undefined) {
              n.postMessage(s, this._origin || "*");
            }
          } else {
            this.messageToSendQueue.push(s);
          }
        }
        flushQueue() {
          if (this._origin) {
            this.messageToSendQueue.forEach((e) => {
              var t;
              if ((t = window.top) === null || t === undefined) {
                return undefined;
              } else {
                return t.postMessage(e, this._origin);
              }
            });
            this.messageToSendQueue = [];
          }
        }
      })(s);
      const r = i.on.bind(i);
      const o = i.once.bind(i);
      const l = i.unsubscribeAll.bind(i);
      const c = i.send.bind(i);
      const d = (e, t) => {
        if (n.find((e) => t.origin.endsWith(e))) {
          i.origin = t.origin;
          c("ready");
          c("@@debug/inited", {
            requestId: window.globalServiceVars.chatik.requestId,
          });
        }
      };
      const u = () =>
        !s || i.origin
          ? () => {}
          : (c("awaitingInit", undefined, true),
            o("init", d),
            () => {
              l();
            });
    },
    21438: function (e, t, a) {
      a.d(t, {
        Z: () => o,
      });
      var n = a(45150);
      var s = a(92705);
      var i = a(4201);
      const r = () =>
        (0, i.jsx)("div", {
          className: s.Z.dialogSplashScreen,
          children: (0, i.jsx)(n.a, {
            size: 24,
          }),
        });
      r.displayName = "Chat/components/Loader/Loader";
      const o = r;
    },
    70249: function (e, t, a) {
      a.d(t, {
        Z: () => l,
      });
      var n = a(53744);
      var s = a(21438);
      var i = a(4201);
      var r = a.n(i);
      const o = {
        fallback: (0, i.jsx)(s.Z, {}),
        displayName: "pages/Chat/index/NoName",
      };
      const l = (0, n.ZP)(
        {
          resolved: {},
          chunkName: () => "ChatPage",
          isReady(e) {
            const t = this.resolve(e);
            return this.resolved[t] === true && !!a.m[t];
          },
          importAsync: () =>
            Promise.all([a.e("7018"), a.e("3551")]).then(a.bind(a, 25179)),
          requireAsync(e) {
            const t = this.resolve(e);
            this.resolved[t] = false;
            return this.importAsync(e).then((e) => {
              this.resolved[t] = true;
              return e;
            });
          },
          requireSync(e) {
            const t = this.resolve(e);
            return a(t);
          },
          resolve() {
            return 25179;
          },
        },
        o,
      );
    },
    39012: function (e, t, a) {
      a.d(t, {
        Z: () => l,
      });
      var n = a(53744);
      var s = a(21438);
      var i = a(4201);
      var r = a.n(i);
      const o = {
        fallback: (0, i.jsx)(s.Z, {}),
        displayName: "pages/ChatParticipants/index/NoName",
      };
      const l = (0, n.ZP)(
        {
          resolved: {},
          chunkName: () => "ChatParticipantsPage",
          isReady(e) {
            const t = this.resolve(e);
            return this.resolved[t] === true && !!a.m[t];
          },
          importAsync: () =>
            Promise.all([a.e("7018"), a.e("7817")]).then(a.bind(a, 93815)),
          requireAsync(e) {
            const t = this.resolve(e);
            this.resolved[t] = false;
            return this.importAsync(e).then((e) => {
              this.resolved[t] = true;
              return e;
            });
          },
          requireSync(e) {
            const t = this.resolve(e);
            return a(t);
          },
          resolve() {
            return 93815;
          },
        },
        o,
      );
    },
    28691: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(53744);
      const s = (0, n.ZP)({
        resolved: {},
        chunkName: () => "MainPage",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!a.m[t];
        },
        importAsync: () => a.e("1045").then(a.bind(a, 28062)),
        requireAsync(e) {
          const t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          const t = this.resolve(e);
          return a(t);
        },
        resolve() {
          return 28062;
        },
      });
    },
    74566: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(53744);
      const s = (0, n.ZP)({
        resolved: {},
        chunkName: () => "NotFound",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!a.m[t];
        },
        importAsync: () => a.e("152").then(a.bind(a, 52156)),
        requireAsync(e) {
          const t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          const t = this.resolve(e);
          return a(t);
        },
        resolve() {
          return 52156;
        },
      });
    },
    96100: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(53744);
      const s = (0, n.ZP)({
        resolved: {},
        chunkName: () => "SupportChatPage",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!a.m[t];
        },
        importAsync: () => a.e("5613").then(a.bind(a, 33984)),
        requireAsync(e) {
          const t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          const t = this.resolve(e);
          return a(t);
        },
        resolve() {
          return 33984;
        },
      });
    },
    35523: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(53744);
      const s = (0, n.ZP)({
        resolved: {},
        chunkName: () => "WorkflowPage",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!a.m[t];
        },
        importAsync: () => a.e("8589").then(a.bind(a, 8430)),
        requireAsync(e) {
          const t = this.resolve(e);
          this.resolved[t] = false;
          return this.importAsync(e).then((e) => {
            this.resolved[t] = true;
            return e;
          });
        },
        requireSync(e) {
          const t = this.resolve(e);
          return a(t);
        },
        resolve() {
          return 8430;
        },
      });
    },
    67073: function (e, t, a) {
      a.d(t, {
        H: () => r,
        b: () => i,
      });
      var n = a(73797);
      var s = a(89059);
      const i = (e) => {
        if ((e !== n.x.Chat && e !== n.x.List) || s.vK) {
          return e;
        } else if (
          typeof window != "undefined" &&
          (t = window.location.host) !== null &&
          t !== undefined &&
          t.startsWith("chatik")
        ) {
          return `${e}_page`;
        } else {
          return `${e}_hh_page`;
        }
        var t;
      };
      const r = () => i(n.x.Chat);
    },
    54059: function (e, t, a) {
      a.d(t, {
        Z: () => i,
      });
      var n = a(90634);
      var s = a(1677);
      const i = ({
        isThirdColumnShown: e,
        isSpoiler: t,
        isInlineChat: a,
      } = {}) => {
        if (a) {
          return "inlineChat";
        }
        if (t) {
          return "spoiler";
        }
        const i = n.L.get("device_magritte_breakpoint");
        if (e && [s.Uo.L, s.Uo.XL, s.Uo.XXL].includes(i)) {
          return ["list", "chat", "resume"];
        } else if ([s.Uo.XS, s.Uo.S].includes(i)) {
          return "chat";
        } else {
          return ["list", "chat"];
        }
      };
    },
    76679: function (e, t, a) {
      a.d(t, {
        Z: () => o,
      });
      var n = a(73797);
      var s = a(29801);
      var i = a(54059);
      const r = (e) =>
        e.isSpoiler
          ? "spoiler"
          : e.isInlineChat
            ? "inlineChat"
            : e.router.location.query.hhtmFromLabel ||
              window.globalServiceVars.chatik.analyticsParams.hhtmFromLabel ||
              "chat_list";
      const o = ({ routeName: e, state: t, chatId: a, ...o }) => {
        const l = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
        if (e === n.x.Chat) {
          var c;
          const {
            chatStates: {
              writeMessageState: { allowed: e, reason: n },
            },
            chat: d,
          } = t.chatData;
          const u = e ? s.R.Allowed : n || s.R.Unknown;
          return {
            ...l,
            layout: (0, i.Z)({
              isSpoiler: t.isSpoiler,
              isInlineChat: t.isInlineChat,
              isThirdColumnShown: t.isThirdColumnShown,
            }),
            chatId: a,
            writeMessageState: u,
            unreadMessageCount: (d == null ? undefined : d.unreadCount) || 0,
            hhtmFrom:
              window.globalServiceVars.chatik.analyticsParams.hhtmFrom ||
              undefined,
            hhtmFromLabel: r(t),
            chat_type: d == null ? undefined : d.type,
            chat_subtype: d == null ? undefined : d.subType,
            search_text:
              ((c = t.search) === null ||
              c === undefined ||
              (c = c.query) === null ||
              c === undefined
                ? undefined
                : c.trim()) || undefined,
            ...o,
          };
        }
        if (e === n.x.List) {
          const e = t.chats.chats.items;
          const a = e.filter(({ unreadCount: e }) => Boolean(e)).length;
          return {
            ...l,
            layout: ["list"],
            chatCount: e.length,
            hhtmFrom:
              window.globalServiceVars.chatik.analyticsParams.hhtmFrom ||
              undefined,
            hhtmFromLabel:
              window.globalServiceVars.chatik.analyticsParams.hhtmFromLabel ||
              undefined,
            unreadChatCount: a,
          };
        }
        return l;
      };
    },
    67833: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      var n = a(24488);
      const s = (e) => {
        n.default.sendHHEvent("screen_shown", e);
        setTimeout(
          () =>
            (window.globalServiceVars.chatik.analyticsParams.hhtmFromLabel =
              ""),
          300,
        );
      };
    },
    44820: function (e, t, a) {
      a.d(t, {
        Z: () => n,
      });
      const n = (e) => e / 1048576;
    },
    68895: function (e, t, a) {
      a.d(t, {
        C: () => s,
        t: () => n,
      });
      const n = (e) => !!e && e.startsWith("image/");
      const s = (e) => n(e.type);
    },
    80426: function (e, t, a) {
      a.d(t, {
        a: () => s,
      });
      var n = a(68390);
      const s = (e, t, a) =>
        t === "SUPPORT"
          ? "circle"
          : t === "BOT" || a === "marketplace"
            ? "square"
            : e === n.Z.Applicant
              ? "circle"
              : "square";
    },
    58086: function (e, t, a) {
      a.d(t, {
        $r: () => o,
        Dp: () => l,
        O8: () => r,
      });
      var n = a(313);
      var s = a(12274);
      var i = a(23855);
      const r = 3;
      let o = (function (e) {
        e.ONLINE = "ONLINE";
        e.OFFLINE = "OFFLINE";
        e.UNKNOWN = "UNKNOWN";
        return e;
      })({});
      const l = (e) => {
        const t = (0, i.Z)(e);
        if ((0, s.Z)(t)) {
          if ((0, n.Z)(new Date(), t)) {
            return o.ONLINE;
          } else {
            return o.OFFLINE;
          }
        } else {
          return o.UNKNOWN;
        }
      };
    },
    65665: function (e, t, a) {
      a.d(t, {
        a: () => n,
      });
      const n = () => "chatik_messages_scroller";
    },
    26825: function (e, t, a) {
      a.d(t, {
        $: () => n,
      });
      const n = (e) => {
        if (!e) {
          return "";
        }
        const t = (e) => e.length === 1;
        const [a = "", n = ""] = e.split(" ");
        return `${[...a].find(t) || ""}${[...n].find(t) || ""}`.toUpperCase();
      };
    },
    39248: function (e, t, a) {
      a.d(t, {
        Z: () => n,
      });
      const n = () =>
        typeof window != "undefined"
          ? window.globalServiceVars.chatik.userType
          : undefined;
    },
    61403: function (e, t, a) {
      a.d(t, {
        Z: () => n,
      });
      const n = (e, t, a = 0) => {
        const n = e.getBoundingClientRect();
        const s = t.getBoundingClientRect();
        const i = n.top >= s.top + a && n.top <= s.bottom - a;
        const r = n.bottom >= s.top + a && n.bottom <= s.bottom - a;
        return i || r;
      };
    },
    91013: function (e, t, a) {
      a.d(t, {
        C: () => i,
      });
      var n = a(98803);
      const s = /\.(\w+)(https?)$/;
      const i = (e) => {
        const t = ((e) =>
          n.ZP.parse(e, {
            phone: false,
            email: false,
          }))(e);
        if (t == null || !t.length) {
          return null;
        }
        const [a] = t;
        const r = a.getAnchorHref();
        const o = a.getMatchedText();
        const l = a.getOffset() + o.length;
        const c = s.test(r);
        const d = r.includes(".");
        const u = o.includes("://");
        if (!c && d && u) {
          return r;
        } else {
          return i(e.slice(l));
        }
      };
    },
    9362: function (e, t, a) {
      a.d(t, {
        Z: () => n,
      });
      const n = (e) => {
        try {
          if (e.endsWith("?")) {
            e = e.slice(0, -1);
          }
          const t = new URL(e);
          if (t.pathname.endsWith("/")) {
            t.pathname = t.pathname.slice(0, -1);
          }
          const a = [...t.searchParams.entries()].sort();
          t.search = "";
          a.forEach(([e, a]) => {
            t.searchParams.append(e, a);
          });
          t.hash = "";
          return t.toString();
        } catch (t) {
          return e;
        }
      };
    },
    85767: function (e, t, a) {
      a.d(t, {
        I: () => n,
        Z: () => s,
      });
      const n = 50;
      const s = (e, t = "smooth") => {
        if (!(Math.abs(e.scrollTop - (e.scrollHeight - e.offsetHeight)) < n)) {
          e.style.scrollBehavior = t;
          requestAnimationFrame(() => {
            e.scrollTo(0, e.scrollHeight);
            e.style.scrollBehavior = "";
          });
        }
      };
    },
    91809: function (e, t, a) {
      a.d(t, {
        Z: () => s,
      });
      const n = /(?:\.([^.]+))?$/;
      const s = (e) => {
        if (e && e.startsWith(".") && e.split(".").length === 2) {
          return {
            ext: "",
            name: e,
          };
        }
        const a = n.exec(e)?.[0] || "";
        return {
          ext: a,
          name: a ? e.slice(0, -a.length) : e,
        };
      };
    },
  },
]);
//# sourceMappingURL=5005.0c313efd028f08a4.js.map
