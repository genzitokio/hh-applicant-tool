"use strict";

(globalThis.__career_platform_front_LOADABLE_LOADED_CHUNKS__ =
  globalThis.__career_platform_front_LOADABLE_LOADED_CHUNKS__ || []).push([
  ["443"],
  {
    75977: function (e, t, r) {
      r.d(t, {
        Z: () => Oe,
      });
      var o;
      var n;
      var s;
      var i;
      var a;
      var l = r(99794);
      var c = r(48235);
      var d = r(44033);
      var u = r(24158);
      var m = r(29988);
      var h = r(45991);
      var p = r(17293);
      var v = r(98566);
      var g = r(1714);
      var f = r(48583);
      var y = r(9828);
      var x = r(3083);
      var k = r(67294);
      function b() {
        b = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) {
                  if ({}.hasOwnProperty.call(r, o)) {
                    e[o] = r[o];
                  }
                }
              }
              return e;
            };
        return b.apply(null, arguments);
      }
      const C = (e) =>
        k.createElement(
          "svg",
          b(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 170,
              height: 84,
              fill: "none",
              viewBox: "0 0 170 84",
            },
            e,
          ),
          (o ||= k.createElement("path", {
            fill: "#F9E193",
            d: "m29.597 2.998 18.726 11.575-28.67 46.383L.926 49.38z",
          })),
          (n ||= k.createElement("path", {
            fill: "#F9E193",
            d: "M28.981 44.684h22.128V84H28.981z",
          })),
          (s ||= k.createElement("path", {
            fill: "#A5E2B6",
            d: "M118.893 50.108C118.893 68.826 103.719 84 85.001 84S51.108 68.826 51.108 50.108s15.174-33.892 33.893-33.892c18.718 0 33.892 15.174 33.892 33.892m-49.288 0c0 8.503 6.892 15.396 15.395 15.396s15.396-6.893 15.396-15.396-6.893-15.396-15.395-15.396c-8.504 0-15.397 6.893-15.397 15.396",
          })),
          (i ||= k.createElement("path", {
            fill: "#C1E8FD",
            d: "m147.563 2.998 18.726 11.575-28.67 46.382-18.727-11.575z",
          })),
          (a ||= k.createElement("path", {
            fill: "#C1E8FD",
            d: "M146.946 44.684h22.128V84h-22.128z",
          })),
        );
      const j = "container--gAbNWSzqn_Q0Mqxi";
      const P = "content--pAFIQBdHcQve9_J_";
      const _ = "error--fDySRxTIDJk2zoF0";
      const S = "error-description--nk91SUG4c8YpXCEL";
      const E = "icon--TbRJpUoGSLEBGQf9";
      const A = "expander--Y3TlLWbuQQv63ery";
      const N = "footer--sKmwBxvPevUhmaWj";
      const w = "button-container--acQd_F1ffkkLj2zg";
      var Z = r(85893);
      const L = "career-platform.footer.dataInfo";
      const R = {
        toMain: "career-platform.page-error.404.go-to-main",
      };
      const I = {
        404: {
          title: "career-platform.page-error.title.404.title",
          description: "career-platform.page-error.title.404.description",
        },
      };
      const F = ({ trls: e }) =>
        (0, Z.jsx)(y.Z, {
          children: (0, Z.jsxs)("div", {
            className: j,
            children: [
              (0, Z.jsx)(f.Z, {}),
              (0, Z.jsx)(p.M, {
                children: (0, Z.jsxs)("div", {
                  className: P,
                  children: [
                    (0, Z.jsx)(C, {
                      className: E,
                    }),
                    (0, Z.jsx)("p", {
                      className: _,
                      children: e[I[404].title],
                    }),
                    (0, Z.jsxs)("p", {
                      className: S,
                      children: [
                        e[I[404].description],
                        " ",
                        (0, Z.jsx)("a", {
                          href: `mailto:${x.g}`,
                          children: x.g,
                        }),
                      ],
                    }),
                    (0, Z.jsx)("div", {
                      className: w,
                      children: (0, Z.jsx)(v.z, {
                        mode: "primary",
                        stretched: true,
                        Element: m.SPALink,
                        to: g.w4,
                        isSeoLink: true,
                        children: e[R.toMain],
                      }),
                    }),
                  ],
                }),
              }),
              (0, Z.jsx)("div", {
                className: A,
              }),
              (0, Z.jsx)("footer", {
                className: N,
                children: e[L],
              }),
            ],
          }),
        });
      F.displayName = "components/PageError/index/PageError";
      const z = (0, h.Z)(F);
      var q = r(94266);
      var O = r(10933);
      let H = (function (e) {
        e.EntrypointWidget = "EntrypointWidget";
        return e;
      })({});
      var B = r(95877);
      var G = r.n(B);
      var M = r(49642);
      var U = r.n(M);
      var T = r(81708);
      var D = r(95318);
      var Q = r(98651);
      var W = r(48896);
      let $ = (function (e) {
        e.Banner = "BANNER";
        e.Courses = "COURSES";
        return e;
      })({});
      var Y = r(27402);
      var K = r(66721);
      const X = () => {
        const e = (0, O.v)((e) => {
          return e.proxyWidgetEntrypoint?.entryPointContent;
        });
        const t = (0, O.v)((e) => {
          return e.proxyWidgetEntrypoint?.segment;
        });
        const r = (0, O.v)((e) => {
          return e.proxyWidgetEntrypoint?.params;
        });
        if (!e) {
          return null;
        }
        const {
          type: o,
          title: n,
          buttonText: s,
          buttonUrl: i,
          description: a,
          items: c,
        } = e;
        const d = {
          contentType: o,
          segmentName: t,
          searchQuery: r == null ? undefined : r.searchQuery,
          vacancyId: r == null ? undefined : r.vacancyId,
          resumeHashId: r == null ? undefined : r.resumeHashId,
          skillId: r == null ? undefined : r.skillId,
          verificationMethodId: r == null ? undefined : r.verificationMethodId,
          resultType: r != null && r.resultType ? 1 : 0,
          count: o === $.Banner ? null : c.length,
        };
        const u = () => {
          U()({
            resultType: d.resultType,
            verificationMethodId: d.verificationMethodId,
            skillId: d.skillId,
            count: d.count,
          });
        };
        const h = () => {
          U()({
            resultType: d.resultType,
            verificationMethodId: d.verificationMethodId,
            skillId: d.skillId,
            count: d.count,
          });
        };
        if (o === $.Banner) {
          return (0, Z.jsx)(l.ElementShownAnchor, {
            fn: G(),
            ...d,
            children: (0, Z.jsx)(T.j, {
              layout: "vertical",
              showClose: false,
              stretched: true,
              style: "secondary",
              "data-qa": (0, K.Z)("entrypoint", "banner"),
              title: n
                ? (0, Z.jsx)(D.D, {
                    Element: "h6",
                    size: "small",
                    "data-qa": (0, K.Z)("entrypoint", "banner", "title"),
                    children: n,
                  })
                : undefined,
              buttonAdditional:
                i && s
                  ? (0, Z.jsx)(v.z, {
                      Element: m.SPALink,
                      to: i,
                      onClick: u,
                      isSeoLink: true,
                      forceHhtmForExternalLink: true,
                      style: "accent",
                      mode: "primary",
                      "data-qa": (0, K.Z)("entrypoint", "banner", "title"),
                      children: s,
                    })
                  : undefined,
              content: (0, Z.jsx)(Q.x, {
                Element: "p",
                children: a,
              }),
            }),
          });
        } else if (o === $.Courses) {
          return (0, Z.jsx)(l.ElementShownAnchor, {
            fn: G(),
            ...d,
            children: (0, Z.jsx)(W.W, {
              carouselId: Y.F.entrypoint(r == null ? undefined : r.entryPoint),
              title: n,
              items: c,
              buttonText: s,
              description: a,
              showAllLink: i,
              onClickShowAll: h,
              dataQaContainer: (0, K.Z)("entrypoint", "carousel", "container"),
              dataQaLink: (0, K.Z)("entrypoint", "carousel", "link"),
              dataQaTitle: (0, K.Z)("entrypoint", "carousel", "title"),
              forceHhtmForExternalLink: true,
            }),
          });
        } else {
          return null;
        }
      };
      X.displayName = "widgets/Entrypoint/index/Entrypoint";
      const V = X;
      const J = () => (0, Z.jsx)(V, {});
      J.displayName = "proxyComponents/EntrypointWidget/index/EntrypointWidget";
      const ee = J;
      const te = {
        [H.EntrypointWidget]: ee,
      };
      const re = () => {
        const e = (0, O.v)(({ request: e }) => e.pageName);
        if (((e) => e in te)(e)) {
          const t = te[e];
          return (0, Z.jsx)(t, {});
        }
        return null;
      };
      re.displayName = "src/proxyComponents/index/ProxyComponent";
      const oe = re;
      var ne = r(90333);
      var se = r(75834);
      var ie = r(2948);
      var ae = r(42642);
      var le = r(65864);
      var ce = r(58674);
      var de = r(69437);
      var ue = r(49421);
      var me = r(85262);
      var he = r(30825);
      var pe = r(42397);
      var ve = r(64721);
      var ge = r(29111);
      var fe = r(56156);
      var ye = r(91037);
      var xe = r(9894);
      var ke = r(5009);
      var be = r(30047);
      var Ce = r(17737);
      var je = r(95203);
      var Pe = r(29486);
      var _e = r(56629);
      var Se = r(65103);
      var Ee = r(89572);
      var Ae = r(84982);
      var Ne = r(77914);
      const we = [
        {
          path: g.w4,
          component: Ee.Z,
        },
        {
          path: g.oW,
          component: Ae.Z,
        },
        {
          path: g.kp,
          component: Ne.Z,
        },
        {
          path: g.tl,
          component: _e.Z,
        },
        {
          path: g.xn,
          component: Pe.Z,
        },
        {
          path: g._X,
          component: Se.Z,
        },
        {
          path: g.Hj,
          component: Ce.Z,
        },
        {
          path: g.e6,
          component: ke.Z,
        },
        {
          path: g.HQ,
          component: be.Z,
        },
        {
          path: g.Sn,
          component: je.Z,
        },
        {
          path: g.hJ,
          component: ce.Z,
        },
        {
          path: g.II,
          component: le.Z,
        },
        {
          path: g.kO,
          component: le.Z,
        },
        {
          path: g.p8,
          component: ue.Z,
        },
        {
          path: g.pH,
          component: de.Z,
        },
        {
          path: g.VK,
          component: de.Z,
        },
        {
          path: g.hY,
          component: xe.Z,
        },
        {
          path: g.zO,
          component: ye.Z,
        },
        {
          path: g.nc,
          component: ye.Z,
        },
        {
          path: g.mi,
          component: he.Z,
        },
        {
          path: g.EG,
          component: me.Z,
        },
        {
          path: g.zz,
          component: ve.Z,
        },
        {
          path: g.M5,
          component: pe.Z,
        },
        {
          path: g.oU,
          component: fe.Z,
        },
        {
          path: g.WP,
          component: ie.Z,
        },
        {
          path: g.W,
          component: se.Z,
        },
        {
          path: g.DT,
          component: se.Z,
        },
        {
          path: g.yy,
          component: ae.Z,
        },
        {
          path: g.W8,
          component: ge.Z,
        },
      ];
      var Ze = r(4805);
      var Le = r(26449);
      const Re = "UPDATE_PROFILE";
      (0, Le.ActionCreatorHelper)()(Re);
      const Ie = (0, Le.createReducer)(null, {
        [Re]: (e, t) =>
          e
            ? {
                ...e,
                ...t.payload,
              }
            : e,
      });
      var Fe = (function (e) {
        e.ANONYMOUS = "anonymous";
        e.NEDOUSER = "nedouser";
        e.BACKOFFICE = "backoffice";
        e.EMPLOYER = "employer";
        e.APPLICANT = "applicant";
        return e;
      })(Fe || {});
      const ze = Fe;
      const qe = {
        pageMetaData: (0, Le.autoGeneratedReducer)({}),
        profile: Ie,
        userId: (0, Le.autoGeneratedReducer)(null),
        userType: (0, Le.autoGeneratedReducer)(ze.ANONYMOUS),
        userArea: (0, Le.autoGeneratedReducer)(null),
        experiments: Ze._1,
        landing: (0, Le.autoGeneratedReducer)(null),
        pageLK: (0, Le.autoGeneratedReducer)(null),
        pageProfession: (0, Le.autoGeneratedReducer)(null),
        pageProfessions: (0, Le.autoGeneratedReducer)(null),
        pageEdProgramsCatalog: (0, Le.autoGeneratedReducer)(null),
        pageCollectionEdProgram: (0, Le.autoGeneratedReducer)(null),
        pageCert: (0, Le.autoGeneratedReducer)(null),
        pageArticle: (0, Le.autoGeneratedReducer)(null),
        pageArticlesCatalog: (0, Le.autoGeneratedReducer)(null),
        widgetMentors: (0, Le.autoGeneratedReducer)(null),
        widgetCareerTrack: (0, Le.autoGeneratedReducer)(null),
        widgetCollectionEdProgramGroups: (0, Le.autoGeneratedReducer)(null),
        widgetChatik: (0, Le.autoGeneratedReducer)(null),
        pageAdminCourse: (0, Le.autoGeneratedReducer)(null),
        pageAdminEducationsCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminEducation: (0, Le.autoGeneratedReducer)(null),
        pageAdminCoursesCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminStreamsCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminStream: (0, Le.autoGeneratedReducer)(null),
        pageAdminProfessionsCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminProfession: (0, Le.autoGeneratedReducer)(null),
        pageAdminProvidersCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminPromotionsCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminArticlesCatalog: (0, Le.autoGeneratedReducer)(null),
        pageAdminArticle: (0, Le.autoGeneratedReducer)(null),
        pageAdminCollectionEdProgramsCatalog: (0, Le.autoGeneratedReducer)(
          null,
        ),
        pageAdminProvidersStreamWeight: (0, Le.autoGeneratedReducer)(null),
        proxyWidgetEntrypoint: (0, Le.autoGeneratedReducer)(null),
      };
      c.Z.interceptors.request.use(d.t);
      (0, l.initGetterAnalyticsParams)(ne.Py);
      const Oe = () =>
        (0, u.ZP)({
          serviceName: q.Z,
          proxyComponents: oe,
          reducer: qe,
          routes: we,
          errorComponent: z,
        });
    },
    9822: function (e, t, r) {
      r.r(t);
      r.d(t, {
        default: () => a,
      });
      var o = r(1098);
      var n = r(94266);
      var s = r(37034);
      history.scrollRestoration &&= "manual";
      (0, o.Z)(n.Z, {
        redactedFields: {
          store: [
            "profile.firstName",
            "profile.fullName",
            "profile.fullNameLetters",
            "profile.lastName",
            "profile.phone",
          ],
        },
      });
      const i = r(75977).Z;
      (0, s.n)();
      const a = i;
    },
    36990: function (e, t, r) {
      r.d(t, {
        y: () => a,
      });
      var o = r(93217);
      var n = r(2328);
      var s = r(1714);
      const i = (e) =>
        Object.entries(e)
          .map(([e, t]) => (Array.isArray(t) ? [e, t.join(",")] : [e, t]))
          .filter(([, e]) => (Array.isArray(e) ? e.length : e))
          .reduce((e, [t, r]) => {
            e[t] = r;
            return e;
          }, {});
      class a {
        static onlySelected(e) {
          return Object.entries(e).reduce((e, [t, r]) => {
            const o = t;
            e[o] = r.filter(
              (e, t) =>
                (n.j4[o] !== n.y3.Radio || !e.state.selected || t !== 0) &&
                e.state.selected,
            );
            return e;
          }, {});
        }
        static getEdProgramsHref = (e = {}) => {
          const t = (0, o.j)(s.tl);
          var r;
          r = {
            ...e,
          };
          t.search = o.j.stringify(i(r));
          return t.href;
        };
        constructor({ filter: e, category: t, preset: r, sort: o, text: n }) {
          this.filter = e;
          this.category = t;
          this.sort = o;
          this.text = n;
          this.preset = r;
        }
        updated = (e) =>
          new a({
            filter: "filter" in e ? e.filter : this.filter,
            category: "category" in e ? e.category : this.category,
            preset: "preset" in e ? e.preset : this.preset,
            sort: "sort" in e ? e.sort : this.sort,
            text: "text" in e ? e.text : this.text,
          });
        asEdProgramsCatalogFilterQuery() {
          var e;
          var t;
          var r;
          var o;
          var s;
          var i;
          var l;
          var c;
          var d;
          var u;
          var m;
          const h = a.onlySelected(this.filter);
          const p = {
            preset: this.preset || "",
            purpose:
              h == null ||
              (e = h.filterPurposes) === null ||
              e === undefined ||
              (e = e[0]) === null ||
              e === undefined
                ? undefined
                : e.value,
            priceParameters:
              h == null ||
              (t = h.filterPriceParameters) === null ||
              t === undefined
                ? undefined
                : t.map((e) => e.value),
            educationLevel:
              h == null ||
              (r = h.filterEducationLevel) === null ||
              r === undefined ||
              (r = r[0]) === null ||
              r === undefined
                ? undefined
                : r.value,
            text: encodeURIComponent(this.text || ""),
            ageLimit:
              h == null ||
              (o = h.filterAge) === null ||
              o === undefined ||
              (o = o[0]) === null ||
              o === undefined
                ? undefined
                : o.value,
            format:
              h == null ||
              (s = h.filterFormat) === null ||
              s === undefined ||
              (s = s[0]) === null ||
              s === undefined
                ? undefined
                : s.value,
            areaIds:
              h == null || (i = h.filterAreas) === null || i === undefined
                ? undefined
                : i.map((e) => e.value),
            streamIds:
              h == null || (l = h.filterStreams) === null || l === undefined
                ? undefined
                : l.map((e) => e.value),
            skillIds:
              h == null || (c = h.filterSkills) === null || c === undefined
                ? undefined
                : c.map((e) => e.value),
            providerIds:
              h == null || (d = h.filterProviders) === null || d === undefined
                ? undefined
                : d.map((e) => e.value),
            duration:
              h == null || (u = h.filterDurations) === null || u === undefined
                ? undefined
                : u.map((e) => e.value),
            professionIds:
              h == null || (m = h.filterProfessions) === null || m === undefined
                ? undefined
                : m.map((e) => e.value),
          };
          if (this.category !== n.T7.Courses) {
            p.category = this.category;
          }
          if (this.sort && this.sort !== n.ki.Relevant) {
            p.sort = this.sort;
          }
          return p;
        }
        asParamsForList(e, t = 0, r = 12) {
          const o = this.asEdProgramsCatalogFilterQuery();
          return {
            ...i(o),
            purpose: e,
            page: t,
            perPage: r,
          };
        }
        asParamsForFilters() {
          const e = this.asEdProgramsCatalogFilterQuery();
          return {
            ...i(e),
            category: this.category,
          };
        }
        asEdProgramsHref() {
          return a.getEdProgramsHref(this.asEdProgramsCatalogFilterQuery());
        }
        asAnalyticsParams = () => this.asEdProgramsCatalogFilterQuery();
      }
    },
    29145: function (e, t, r) {
      r.d(t, {
        Oc: () => i,
        Pm: () => l,
        UK: () => f,
        Vp: () => y,
        bF: () => g,
        dE: () => v,
        eM: () => p,
        j: () => s,
        mG: () => h,
        nW: () => c,
        qK: () => u,
        wE: () => d,
        yf: () => a,
        zm: () => m,
      });
      var o = r(93217);
      var n = r(1714);
      const s = (e, { section: t = null, grade: r = null, scroll: n } = {}) => {
        const s = (0, o.j)(`/profession/${e}`);
        s.search = o.j.stringify({
          section: t,
          grade: r,
          ...(n
            ? {
                scroll: n,
              }
            : {}),
        });
        return s.href;
      };
      const i = ({ professionId: e, professionalAreaId: t } = {}) => {
        const r = (0, o.j)(n.kp);
        r.search = o.j.stringify({
          professionId: e || null,
          professionalAreaId: t || null,
        });
        return r.href;
      };
      const a = (e) => n.kO.replace(":id", e.toString());
      const l = (e) => n.VK.replace(":id", e.toString());
      const c = (e, t, r) => {
        const s = (0, o.j)(`${n.bi}/${e}`);
        s.search = o.j.stringify({
          origin: r,
          external_id: t,
        });
        return s.href;
      };
      const d = (e) => n.e6.replace(":slug", e);
      const u = (e) => n.xn.replace(":slug", e);
      const m = (e, t, r) => {
        const { pathname: n, search: s } = e;
        const i = (0, o.j)(`${n}${s}`);
        i.search = o.j.stringify({
          ...i.params,
          [t]: r,
        });
        return i.href;
      };
      const h = (e, t) => {
        const { pathname: r, search: n } = e;
        const s = (0, o.j)(`${r}${n}`);
        const { [t]: i, ...a } = s.params;
        s.search = o.j.stringify({
          ...a,
        });
        return s.href;
      };
      const p = (e) => n.zO.replace(":id", e.toString());
      const v = (e) => n.EG.replace(":id", e.toString());
      const g = (e) => {
        const t = (0, o.j)(n.Lx);
        if (e) {
          t.search = o.j.stringify({
            backurl: e,
          });
        }
        return t.href;
      };
      const f = (e) => {
        const t = (0, o.j)(n.M5);
        t.search = o.j.stringify(e);
        return t.href;
      };
      const y = (e) => n.DT.replace(":id", e.toString());
    },
    1714: function (e, t, r) {
      r.d(t, {
        DT: () => L,
        EG: () => S,
        HQ: () => p,
        Hj: () => h,
        II: () => f,
        Lx: () => n,
        M5: () => A,
        Sn: () => d,
        VK: () => P,
        W: () => Z,
        W8: () => I,
        WP: () => w,
        _X: () => m,
        _e: () => o,
        bi: () => u,
        e6: () => v,
        hJ: () => g,
        hY: () => k,
        kO: () => y,
        kp: () => a,
        mi: () => _,
        nc: () => b,
        oU: () => N,
        oW: () => i,
        p8: () => x,
        pH: () => j,
        tl: () => l,
        w4: () => s,
        xn: () => c,
        yy: () => R,
        zO: () => C,
        zz: () => E,
      });
      const o = "/auth/login";
      const n = "/auth/logout";
      const s = "/";
      const i = "/profession/:id";
      const a = "/professions";
      const l = "/courses";
      const c = "/collection/edprogram/:slug";
      const d = "/assessment";
      const u = "/assessment/start_training";
      const m = "/lk";
      const h = "/lk/goal";
      const p = "/articles";
      const v = "/article/:slug";
      const g = "/admin/courses";
      const f = "/admin/courses/create";
      const y = "/admin/courses/:id/edit";
      const x = "/admin/educations";
      const k = "/admin/streams";
      const b = "/admin/streams/create";
      const C = "/admin/streams/:id/edit";
      const j = "/admin/education/create";
      const P = "/admin/education/:id/edit";
      const _ = "/admin/professions";
      const S = "/admin/professions/:id/edit";
      const E = "/admin/providers";
      const A = "/admin/promotions";
      const N = "/admin/storefronts";
      const w = "/admin/articles";
      const Z = "/admin/articles/create";
      const L = "/admin/articles/:id/edit";
      const R = "/admin/collection-education-programs";
      const I = "/admin/providers-stream-weight";
    },
    7736: function (e, t, r) {
      r.d(t, {
        Z: () => Z,
      });
      var o = r(67294);
      var n = r(99794);
      var s = r(85497);
      var i = r.n(s);
      var a = r(45991);
      var l = r(25166);
      var c = r(42167);
      var d = r(98651);
      var u = r(45892);
      var m = r(81909);
      var h = r(74278);
      var p = r(77868);
      var v = r(24863);
      var g = r(15735);
      var f = r(13616);
      var y = r(2328);
      var x = r(66721);
      var k = r(55744);
      const b = "content--xP_x6IT3zTQ68ydr";
      const C = "breadcrumbs--E4uYBewoNc15PbpG";
      const j = "title--CjAqs44HAyAN6I59";
      const P = "provider--zWwdLkrWA_or2fiA";
      const _ = "top-content--lbaCGAeNbkwN3CS_";
      const S = "bottom-content--vypeyprKLIQFG32i";
      const E = "price--zzbIz7vIP34ZQLXK";
      var A = r(85893);
      const N = {
        profession:
          "career-platform.components.card-course.breadcrumbs.profession",
        skill: "career-platform.components.card-course.breadcrumbs.skill",
        format: {
          [y.zI.OFFLINE]:
            "career-platform.components.card-course.breadcrumbs.format.offline",
          [y.zI.ONLINE]:
            "career-platform.components.card-course.breadcrumbs.format.online",
        },
      };
      const w = ({
        edProgram: e,
        trls: t,
        groupLabel: r,
        position: s,
        courseRequestId: a,
        sourceCourseRequestId: w,
      }) => {
        var Z;
        var L;
        var R;
        const { isMobile: F } = (0, l.G)();
        const z = (0, n.useElementShown)(i(), {
          groupLabel: r,
          transactionId: (0, g.E)(e),
          courseId: e.id,
          courseName: e.name,
          streamId: e.stream.id,
          streamName:
            e == null || (Z = e.stream) === null || Z === undefined
              ? undefined
              : Z.name,
          providerId:
            (e == null || (L = e.provider) === null || L === undefined
              ? undefined
              : L.id) || null,
          providerName:
            (e == null || (R = e.provider) === null || R === undefined
              ? undefined
              : R.name) || null,
          cardType: e.purpose,
          professionIds: e.professions
            ? e.professions.map((e) => e.id).join(",")
            : null,
          priceDetails: JSON.stringify(e.priceDetails),
          position: s,
          courseRequestId: a,
          sourceCourseRequestId: w,
        });
        const q = (0, o.useMemo)(() => {
          return [
            [y.GQ.HigherEducation, y.GQ.SpecializedSecondaryEducation].includes(
              e.purpose,
            )
              ? e.format && t[N.format[e.format]]
              : e.format === y.zI.OFFLINE && t[N.format[y.zI.OFFLINE]],
            e.level && [e.level.from, e.level.to].filter(Boolean).join("→"),
            e.duration?.text,
            e.stream.name,
          ].filter(Boolean);
        }, [e.duration?.text, e.format, e.level, e.purpose, e.stream.name, t]);
        const O = (0, o.useCallback)(() => {
          var t;
          if (
            (t = window.getSelection()) === null ||
            t === undefined ||
            !t.toString().length
          ) {
            (0, h.C)(e, r, s, a, w);
          }
        }, [a, e, r, s, w]);
        const H = [
          y.GQ.HigherEducation,
          y.GQ.SpecializedSecondaryEducation,
        ].includes(e.purpose);
        return (0, A.jsx)(A.Fragment, {
          children: (0, A.jsx)(c.Z, {
            ref: z,
            onClick: O,
            padding: 12,
            borderRadius: F ? 16 : 24,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            borderWidth: e.style ? "none" : "default",
            stretched: true,
            verticalStretched: true,
            style: e.style ? f.m[e.style] : undefined,
            "data-qa": (0, x.Z)("course", e.id, (0, k.Z)(e.purpose)),
            children: (0, A.jsxs)("div", {
              className: b,
              children: [
                (0, A.jsxs)("div", {
                  className: _,
                  children: [
                    (0, A.jsx)("div", {
                      className: C,
                      children: (0, A.jsx)(m.Z, {
                        items: q,
                      }),
                    }),
                    (0, A.jsx)("h5", {
                      className: j,
                      "data-qa": (0, x.Z)("name"),
                      children: e.name,
                    }),
                    H &&
                      (0, A.jsxs)(A.Fragment, {
                        children: [
                          (0, A.jsx)(d.x, {
                            maxLines: 5,
                            Element: "p",
                            typography: "paragraph-4-regular",
                            style: "secondary",
                            children: e.description,
                          }),
                          (0, A.jsx)(u.X, {
                            default: 12,
                          }),
                        ],
                      }),
                    e.provider &&
                      (0, A.jsx)("div", {
                        className: P,
                        children: (0, A.jsx)(p.Z, {
                          name: e.provider.name,
                          iconSrc: e.provider.icon,
                        }),
                      }),
                  ],
                }),
                (0, A.jsxs)("div", {
                  className: S,
                  children: [
                    e.priceDetails &&
                      (0, A.jsx)("div", {
                        className: E,
                        children: (0, A.jsx)(v.Z, {
                          edProgram: e,
                        }),
                      }),
                    (0, A.jsx)(h.Z, {
                      edProgram: e,
                      groupLabel: r,
                      position: s,
                      courseRequestId: a,
                      sourceCourseRequestId: w,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      w.displayName = "CardEdProgram/CardEdProgram/index/CardEdProgram";
      const Z = (0, a.Z)(w);
    },
    81909: function (e, t, r) {
      r.d(t, {
        Z: () => l,
      });
      var o = r(98651);
      const n = "list--axWMtOTn9LgDUbEL";
      const s = "item--LCKuqpWR1wuQeupI";
      var i = r(85893);
      const a = ({ items: e }) =>
        (0, i.jsx)(o.x, {
          typography: "label-5-regular",
          color: "primary",
          children: (0, i.jsx)("ul", {
            className: n,
            children: e.map((e, t) =>
              (0, i.jsx)(
                "li",
                {
                  className: s,
                  children: e,
                },
                t,
              ),
            ),
          }),
        });
      a.displayName =
        "common/CardEdProgramBreadcrumbsInfo/index/CardEdProgramBreadcrumbsInfo";
      const l = a;
    },
    74278: function (e, t, r) {
      r.d(t, {
        Z: () => y,
        C: () => v,
      });
      var o = r(68267);
      var n = r.n(o);
      var s = r(45991);
      var i = r(98566);
      var a = r(48235);
      const l = async (e) => {
        const { data: t } = await a.Z.post(
          "/shards/ed_programs/post_ed_program_click",
          {
            edProgramId: e,
          },
        );
        return t;
      };
      var c = r(15735);
      var d = r(2328);
      var u = r(90333);
      var m = r(38305);
      var h = r(85893);
      const p = {
        toCourse:
          "career-platform.components.button-link-external-course.button.toCourse",
        toProgram:
          "career-platform.components.button-link-external-course.button.toProgram",
      };
      const v = (e, t, r, o, s) => {
        var i;
        var a;
        var d;
        const h = e.link;
        (0, m.Z)(h);
        u.co.reach(u.kL.click_profession_guide_go_to_course);
        l(e.id);
        n()({
          groupLabel: t,
          transactionId: (0, c.E)(e),
          courseId: e.id,
          courseName: e.name,
          streamId: e.stream.id,
          streamName:
            e == null || (i = e.stream) === null || i === undefined
              ? undefined
              : i.name,
          providerId:
            (e == null || (a = e.provider) === null || a === undefined
              ? undefined
              : a.id) || null,
          providerName:
            (e == null || (d = e.provider) === null || d === undefined
              ? undefined
              : d.name) || null,
          cardType: e.purpose,
          professionIds: e.professions
            ? e.professions.map((e) => e.id).join(",")
            : null,
          coursePrice:
            e.priceDetails.providerPromotionAmount ||
            e.priceDetails.pricePeriod.amount ||
            0,
          priceDetails: JSON.stringify(e.priceDetails),
          courseLink: h,
          courseRequestId: o,
          sourceCourseRequestId: s,
          position: r,
        });
      };
      const g = {
        [d.TL.Skill]: p.toCourse,
        [d.TL.Profession]: p.toCourse,
        [d.GQ.HigherEducation]: p.toProgram,
        [d.GQ.SpecializedSecondaryEducation]: p.toProgram,
      };
      const f = ({
        edProgram: e,
        groupLabel: t,
        position: r,
        trls: o,
        courseRequestId: n,
        sourceCourseRequestId: s,
      }) =>
        (0, h.jsx)(i.z, {
          style: "neutral",
          mode: "primary",
          size: "small",
          stretched: true,
          onClick: () => v(e, t, r, n, s),
          children: o[g[e.purpose]],
        });
      f.displayName =
        "common/CardEdProgramButtonLinkExternal/index/CardEdProgramButtonLinkExternal";
      const y = (0, s.Z)(f);
    },
    77868: function (e, t, r) {
      r.d(t, {
        Z: () => c,
      });
      var o = r(98651);
      var n = r(57960);
      const s = "container--EjzEHxIRnPoBVLx5";
      const i = "icon--YUOs_9MnnFcyz4tK";
      var a = r(85893);
      const l = ({ name: e, iconSrc: t }) =>
        (0, a.jsxs)("div", {
          className: s,
          children: [
            t &&
              (0, a.jsx)("img", {
                className: i,
                src: (0, n.Z)(t),
                alt: e,
                loading: "lazy",
              }),
            (0, a.jsx)(o.x, {
              typography: "label-3-regular",
              maxLines: 2,
              children: e,
            }),
          ],
        });
      l.displayName =
        "common/CardEdProgramLogoPromoCompany/index/CardEdProgramLogoPromoCompany";
      const c = l;
    },
    24863: function (e, t, r) {
      r.d(t, {
        Z: () => F,
      });
      var o = r(94184);
      var n = r.n(o);
      var s = r(45991);
      var i = r(31369);
      var a = r(98651);
      var l = r(67294);
      var c = r(30536);
      var d = r.n(c);
      var u = r(35838);
      var m = r(28561);
      var h = r(68988);
      var p = r(91393);
      var v = r(38892);
      var g = r(18495);
      const f = "card-course-promo--qE_9598YJPYcJEvz";
      const y = "hh-promo-tag--kUEIDyE2A9m7a0GU";
      const x = "hh-promo-tag-special--BXOzQbWN7Z82BOzo";
      var k = r(85893);
      const b = "career-platform.components.card-course.promocode.snack";
      const C = "career-platform.components.card-course.promocode.tooltip";
      const j =
        "career-platform.components.card-course-promo.promocode.another";
      const P = "career-platform.components.card-course-promo.promocode.text";
      const _ = ({
        edProgram: { priceDetails: e, style: t },
        edProgram: r,
        trls: o,
      }) => {
        var s;
        const { showSnack: S, hideSnack: E } = (0, v.Z)();
        const A = (0, l.useRef)(null);
        if (e) {
          return (0, k.jsxs)("div", {
            className: f,
            onClick: (t) => {
              var n;
              var s;
              var i;
              var a;
              if (
                e != null &&
                (n = e.hhPromotion) !== null &&
                n !== undefined &&
                n.code
              ) {
                t.stopPropagation();
                if (
                  (s = window.getSelection()) === null ||
                  s === undefined ||
                  !s.toString().length
                ) {
                  navigator.clipboard.writeText(e.hhPromotion.code);
                  d()({
                    courseId: r.id,
                    courseName: r.name,
                    providerId:
                      (r == null || (i = r.provider) === null || i === undefined
                        ? undefined
                        : i.id) || null,
                    providerName:
                      (r == null || (a = r.provider) === null || a === undefined
                        ? undefined
                        : a.name) || null,
                    cardType: r.purpose,
                    professionIds: r.professions
                      ? r.professions.map((e) => e.id).join(",")
                      : null,
                  });
                  S({
                    children: (0, u.WU)(o[b], {
                      "{0}": e.hhPromotion.code,
                    }),
                    onClose: E,
                    showClose: true,
                    addon: (0, k.jsx)(p.lot, {
                      initialColor: "positive",
                    }),
                    autohideTime: 3000,
                  });
                }
              }
            },
            children: [
              (s = e.providerPromotion) !== null &&
                s !== undefined &&
                !!s.discount &&
                (0, k.jsxs)(m.V, {
                  size: "medium",
                  style: "positive",
                  children: ["-", e.providerPromotion?.discount, "%"],
                }),
              e.hhPromotion &&
                (0, k.jsxs)("div", {
                  ref: A,
                  className: n()(y, {
                    [x]: !t,
                  }),
                  children: [
                    (0, k.jsx)(a.x, {
                      style: t ? "secondary" : "special",
                      typography: "label-5-regular",
                      children: [
                        e.providerPromotion?.discount && o[j],
                        (0, u.WU)(o[P], {
                          "{discount}": e.hhPromotion.discount,
                        }),
                      ]
                        .filter(Boolean)
                        .join(g.q),
                    }),
                    "\xA0",
                    (0, k.jsx)(a.x, {
                      style: t ? "secondary" : "special",
                      typography: "subtitle-4-semibold",
                      children: e.hhPromotion?.code,
                    }),
                  ],
                }),
              (0, k.jsx)(h.p, {
                placement: "top-center",
                activatorRef: A,
                children: o[C],
              }),
            ],
          });
        } else {
          return null;
        }
      };
      _.displayName = "common/CardEdProgramPromo/index/CardEdProgramPromo";
      const S = (0, s.Z)(_);
      var E = r(2328);
      var A = r(73520);
      const N = "amount-details--vfRVXbqKH4MKAmZl";
      const w = "amount--QwpXPxRDI3AAc06_";
      const Z = "amount-positive--sgGc8aWMlKcPc4z_";
      const L = "career-platform.components.price.free";
      const R = {
        FROM: "career-platform.components.card-course-price-details.prefix-type.from",
      };
      const I = ({ trls: e, edProgram: { priceDetails: t }, edProgram: r }) => {
        if (!t) {
          return null;
        }
        const { pricePeriod: o, currency: s } = t;
        const l = ((e) =>
          [e.amount, e.pricePeriod.amount, e.providerPromotionAmount].filter(
            Boolean,
          ).length === 0
            ? {
                free: true,
                amount: null,
                amountPositive: false,
                strikethrough: null,
              }
            : e.amount && e.providerPromotionAmount
              ? {
                  amount: e.providerPromotionAmount,
                  amountPositive: true,
                  strikethrough: e.amount,
                  free: false,
                }
              : e.amount && !e.providerPromotionAmount
                ? {
                    amount: e.amount,
                    amountPositive: false,
                    strikethrough: null,
                    free: false,
                  }
                : !e.amount && e.providerPromotionAmount
                  ? {
                      amount: e.providerPromotionAmount,
                      amountPositive: false,
                      strikethrough: null,
                      free: false,
                    }
                  : {
                      amount: null,
                      amountPositive: false,
                      strikethrough: null,
                      free: false,
                    })(t);
        const c = o.prefixType === E.Z0.Exact ? "" : e[R[o.prefixType]];
        if (l.free) {
          return (0, k.jsx)("p", {
            className: w,
            children: e[L],
          });
        } else {
          return (0, k.jsxs)(i.z, {
            default: 8,
            children: [
              (0, k.jsx)(S, {
                edProgram: r,
              }),
              (0, k.jsxs)(i.z, {
                default: 2,
                children: [
                  (l.amount || l.strikethrough) &&
                    (0, k.jsxs)("div", {
                      className: N,
                      children: [
                        l.amount &&
                          (0, k.jsx)("span", {
                            className: n()(w, l.amountPositive && Z),
                            children: [c, ...(0, A.nB)(l.amount, s)]
                              .filter(Boolean)
                              .join(g.q),
                          }),
                        l.strikethrough &&
                          (0, k.jsxs)(a.x, {
                            typography: "label-4-regular",
                            style: "secondary",
                            children: [
                              (0, k.jsx)("s", {
                                children: (0, A.nB)(l.strikethrough, s)[0],
                              }),
                              "\xA0",
                              (0, A.nB)(l.strikethrough, s)[1],
                            ],
                          }),
                      ],
                    }),
                  o.text &&
                    o.amount &&
                    (0, k.jsx)(a.x, {
                      typography: "label-4-regular",
                      children: [c, ...(0, A.nB)(o.amount, s), o.text]
                        .filter(Boolean)
                        .join(g.q),
                    }),
                ],
              }),
            ],
          });
        }
      };
      I.displayName =
        "common/CardEdProgramPriceDetails/index/CardEdProgramPriceDetails";
      const F = (0, s.Z)(I);
    },
    15735: function (e, t, r) {
      r.d(t, {
        E: () => o,
      });
      const o = (e) => e.transactionId;
    },
    48896: function (e, t, r) {
      r.d(t, {
        Z: () => R,
        W: () => L,
      });
      var o = r(99794);
      var n = r(32966);
      var s = r.n(n);
      var i = r(7726);
      var a = r.n(i);
      var l = r(10933);
      var c = r(29988);
      var d = r(45991);
      var u = r(25166);
      var m = r(31369);
      var h = r(95318);
      var p = r(1839);
      var v = r(98651);
      var g = r(45892);
      var f = r(17850);
      var y = r(51145);
      var x = r(98566);
      var k = r(91393);
      var b = r(7736);
      var C = r(2925);
      const j = "link--AS0YZGEyEU3fYAOe";
      const P = "scrollable-content--bcTBp_rwdvwbir2S";
      const _ = "scrollable-card-wrapper--U9dmRUlzZw8KrSza";
      const S = "tags--HLuwz66SSuo1fOwB";
      const E = "tags-item--wRMtKdFF7QoPz1UZ";
      var A = r(85893);
      const N = "career-platform.components.carousel-ed-program.show-all-link";
      const w = ({
        carouselId: e,
        items: t,
        title: r,
        description: o,
        buttonText: n,
        showAllLink: s,
        tags: i = [],
        forceHhtmForExternalLink: a,
        onClickShowAll: d,
        dataQaContainer: w,
        dataQaTitle: Z,
        dataQaLink: L,
        trls: R,
      }) => {
        const I = (0, l.v)((e) => e.request.id);
        const { isMobile: F } = (0, u.G)();
        const z = (0, l.v)((e) => {
          return e.proxyWidgetEntrypoint?.params;
        });
        const q = (z == null ? undefined : z.entryPoint) === "RESUME";
        const O = (z == null ? undefined : z.entryPoint) === "RESUME_LIST";
        const H = n || R[N];
        if (!t.length) {
          return null;
        }
        const B = ((e, t) =>
          e
            ? {
                titleSize: "small",
                linkTypography: "label-2-regular",
              }
            : t
              ? {
                  titleSize: "medium",
                  linkTypography: "label-2-regular",
                }
              : {
                  titleSize: "medium",
                  linkTypography: "subtitle-1-semibold",
                })(q, O);
        return (0, A.jsxs)("section", {
          "data-qa": w,
          children: [
            (0, A.jsxs)(m.z, {
              default: 8,
              children: [
                (0, A.jsx)(C.Z, {
                  growingLeft: (0, A.jsx)(h.D, {
                    size: B.titleSize,
                    Element: "h3",
                    dataQaTitle: Z,
                    description: o,
                    children: r,
                  }),
                  staticRight:
                    s &&
                    !F &&
                    (0, A.jsx)("span", {
                      className: j,
                      children: (0, A.jsx)(p.r, {
                        typography: B.linkTypography,
                        iconRight: (0, A.jsx)(k.eTh, {}),
                        Element: c.SPALink,
                        to: s,
                        onClick: d,
                        isSeoLink: true,
                        forceHhtmForExternalLink: a,
                        "data-qa": L,
                        children: H,
                      }),
                    }),
                  gap: 24,
                }),
                !!i.length &&
                  (0, A.jsx)("div", {
                    className: S,
                    children: i.map((e, t) =>
                      (0, A.jsxs)(
                        "div",
                        {
                          className: E,
                          children: [
                            e.icon &&
                              (0, A.jsx)("div", {
                                children: e.icon,
                              }),
                            (0, A.jsx)(v.x, {
                              typography: "label-2-regular",
                              style: "secondary",
                              children: e.text,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
              ],
            }),
            (0, A.jsx)(g.X, {
              default: 24,
            }),
            (0, A.jsxs)(m.z, {
              default: 16,
              children: [
                (0, A.jsx)(f.xR, {
                  children: (0, A.jsx)("div", {
                    className: P,
                    children: t.map((t, r) =>
                      (0, A.jsx)(
                        y.r,
                        {
                          className: _,
                          children: (0, A.jsx)(b.Z, {
                            groupLabel: e,
                            edProgram: t,
                            position: r,
                            courseRequestId: I,
                            sourceCourseRequestId: null,
                          }),
                        },
                        t.id,
                      ),
                    ),
                  }),
                }),
                F &&
                  s &&
                  (0, A.jsx)(x.z, {
                    mode: "secondary",
                    style: "neutral",
                    size: "large",
                    stretched: true,
                    icon: (0, A.jsx)(k.a2Q, {}),
                    Element: c.SPALink,
                    forceHhtmForExternalLink: a,
                    to: s,
                    onClick: d,
                    isSeoLink: true,
                    "data-qa": L,
                    children: H,
                  }),
              ],
            }),
          ],
        });
      };
      w.displayName =
        "components/CarouselEdProgram/index/CarouselEdProgramContent";
      const Z = (e) => {
        const { carouselId: t, title: r, items: n, onClickShowAll: i } = e;
        if (!n.length) {
          return null;
        }
        const l = {
          carouselId: t,
          title: r,
          count: n.length,
        };
        return (0, A.jsx)(o.ElementShownAnchor, {
          fn: s(),
          ...l,
          children: (0, A.jsx)(w, {
            ...e,
            onClickShowAll: () => {
              if (i) {
                i();
              }
              a()(l);
            },
          }),
        });
      };
      Z.displayName = "components/CarouselEdProgram/index/CarouselEdProgram";
      const L = (0, d.Z)(w);
      const R = (0, d.Z)(Z);
    },
    2925: function (e, t, r) {
      r.d(t, {
        Z: () => u,
      });
      var o = r(94184);
      var n = r.n(o);
      const s = "flexible-line--SDIRS0w1UssXkSm3";
      const i = "align-center--l1MetrLdAD4rrUpz";
      const a = "growing-left--BAYP7eWcmxwf45Sd";
      const l = "static-right--tQ2cE5gkFYAWYMRr";
      var c = r(85893);
      const d = ({
        growingLeft: e,
        staticRight: t,
        alignCenter: r = false,
        gap: o = 24,
      }) => {
        const d = n()(s, {
          [i]: r,
        });
        return (0, c.jsxs)("div", {
          className: d,
          style: {
            gap: o,
          },
          children: [
            (0, c.jsx)("div", {
              className: a,
              children: e,
            }),
            (0, c.jsx)("div", {
              className: l,
              children: t,
            }),
          ],
        });
      };
      d.displayName = "components/FlexibleGrowLine/index/FlexibleGrowLine";
      const u = d;
    },
    48583: function (e, t, r) {
      r.d(t, {
        Z: () => Ge,
      });
      var o = r(67294);
      var n = r(94184);
      var s = r.n(n);
      var i = r(25166);
      var a = r(34091);
      var l = r(59218);
      var c = r(41302);
      var d = r(14338);
      var u = r(9046);
      var m = r.n(u);
      var h = r(29578);
      var p = r.n(h);
      var v = r(65490);
      var g = r.n(v);
      var f = r(10933);
      var y = r(29988);
      var x = r(45991);
      var k = r(98651);
      var b = r(66697);
      var C = r(98566);
      var j = r(48441);
      var P = r(90695);
      var _ = r(3309);
      var S = r(91393);
      var E = r(29145);
      var A = r(1714);
      var N = r(30621);
      var w = r(89063);
      var Z = r(90333);
      var L = r(66721);
      const R = "menu--YxBIXFcuR5QJKbf6";
      const I = "desktop-menu-container--QYRvMfkA7YZiRDxe";
      const F = "mobile-menu-container--pu9VXqBYCp4p3ge1";
      var z = r(85893);
      const q = "career-platform.components.header.login-button.login";
      const O = "career-platform.components.header.login-button.logout";
      const H = "career-platform.components.header.login-button.close";
      const B = "career-platform.components.header.login-button.hh-profile";
      const G = "header-login";
      const M = ({ trls: e }) => {
        const t = (0, f.v)((e) => e.profile);
        const r = (0, f.v)((e) => e.router.location.pathname);
        const [n, s] = (0, o.useState)(false);
        const a = (0, o.useRef)(null);
        const { isMobile: l } = (0, i.G)();
        const c = (0, o.useCallback)(() => {
          m()();
          Z.co.reach(Z.kL.click_authorization_login);
        }, []);
        const d = (0, o.useCallback)(() => {
          p()();
          Z.co.reach(Z.kL.click_authorization_logout);
        }, []);
        const u = (0, o.useCallback)(() => s((e) => !e), []);
        const h = (0, o.useMemo)(
          () =>
            t
              ? (0, z.jsx)(N.Z, {
                  size: l ? 24 : 40,
                  onClick: u,
                  Element: "button",
                  ref: a,
                })
              : undefined,
          [u, l, t],
        );
        const v = (0, o.useCallback)(() => {
          g()();
          u();
        }, [u]);
        const x = (0, o.useMemo)(
          () => (0, E.bF)([A._X].includes(r) ? A.w4 : undefined),
          [r],
        );
        const M = () =>
          t
            ? (0, z.jsxs)("div", {
                className: R,
                children: [
                  (0, z.jsx)(k.x, {
                    typography: "label-2-regular",
                    children: `${t.firstName} ${t.lastName}`,
                  }),
                  (0, z.jsx)(b.i, {}),
                  (0, z.jsx)(C.z, {
                    mode: "tertiary",
                    style: "neutral",
                    size: "large",
                    stretched: true,
                    icon: (0, z.jsx)(S.Xmf, {}),
                    onClick: v,
                    Element: "a",
                    href: w.bX,
                    target: "_blank",
                    rel: "noreferrer noopener nofollow",
                    children: e[B],
                  }),
                  (0, z.jsx)(C.z, {
                    mode: "tertiary",
                    style: "negative",
                    size: "large",
                    stretched: true,
                    icon: (0, z.jsx)(S.yAT, {}),
                    Element: y.SPALink,
                    to: x,
                    isSeoLink: true,
                    onClick: d,
                    "data-qa": (0, L.Z)(G, "logout-button"),
                    children: e[O],
                  }),
                ],
              })
            : null;
        return (0, z.jsxs)(o.Fragment, {
          children: [
            !t &&
              (0, z.jsx)(C.z, {
                mode: "secondary",
                style: "neutral",
                size: "small",
                Element: y.SPALink,
                to: A._e,
                isSeoLink: true,
                onClick: c,
                "data-qa": (0, L.Z)(G, "login-button"),
                children: e[q],
              }),
            t &&
              (0, z.jsxs)(o.Fragment, {
                children: [
                  h,
                  l &&
                    (0, z.jsx)(j.R, {
                      visible: n,
                      onClose: u,
                      footer: (0, z.jsx)(P.W, {
                        children: (0, z.jsx)(C.z, {
                          mode: "secondary",
                          style: "neutral",
                          size: "large",
                          stretched: true,
                          onClick: u,
                          children: e[H],
                        }),
                      }),
                      children: (0, z.jsx)("div", {
                        className: F,
                        children: M(),
                      }),
                    }),
                  !l &&
                    (0, z.jsx)(_.U, {
                      activatorRef: a,
                      visible: n,
                      onClose: u,
                      placement: "bottom-right",
                      children: (0, z.jsx)("div", {
                        className: I,
                        children: M(),
                      }),
                    }),
                ],
              }),
          ],
        });
      };
      M.displayName = "Header/HeaderLoginButton/index/HeaderLoginButton";
      const U = (0, x.Z)(M);
      var T;
      var D;
      var Q = r(67492);
      var W = r.n(Q);
      function $() {
        $ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) {
                  if ({}.hasOwnProperty.call(r, o)) {
                    e[o] = r[o];
                  }
                }
              }
              return e;
            };
        return $.apply(null, arguments);
      }
      const Y = (e) =>
        o.createElement(
          "svg",
          $(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 40,
              height: 40,
              fill: "none",
              viewBox: "0 0 40 40",
            },
            e,
          ),
          o.createElement(
            "mask",
            {
              id: "a",
              width: 40,
              height: 40,
              x: 0,
              y: 0,
              maskUnits: "userSpaceOnUse",
              style: {
                maskType: "luminance",
              },
            },
            (T ||= o.createElement("path", {
              fill: "#fff",
              d: "M40 0H0v40h40z",
            })),
          ),
          (D ||= o.createElement(
            "g",
            {
              mask: "url(#a)",
            },
            o.createElement("path", {
              fill: "#FF0002",
              d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20",
            }),
            o.createElement("path", {
              fill: "#fff",
              d: "M29.73 17.05c-.605-.625-1.465-.965-2.515-.965-1.305 0-2.307.53-2.884 1.522v-4.926h-3.026v13.503h3.026v-4.747c0-1.106.227-1.815.567-2.232.331-.416.794-.576 1.296-.576.444 0 .794.141 1.04.397.246.265.388.671.388 1.239v5.91h3.026v-6.506c0-1.107-.322-2.005-.918-2.62M16.199 16.085c-1.305 0-2.308.53-2.884 1.522v-4.926h-3.026v13.503h3.026v-4.747c0-1.106.227-1.815.567-2.232.331-.416.794-.576 1.296-.576.444 0 .794.141 1.04.397.246.265.387.671.387 1.239v5.91h3.026v-6.506c0-1.107-.321-2.005-.926-2.629-.596-.624-1.457-.955-2.506-.955",
            }),
          )),
        );
      var K;
      function X() {
        X = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) {
                  if ({}.hasOwnProperty.call(r, o)) {
                    e[o] = r[o];
                  }
                }
              }
              return e;
            };
        return X.apply(null, arguments);
      }
      const V = (e) =>
        o.createElement(
          "svg",
          X(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 93,
              height: 19,
              fill: "none",
              viewBox: "0 0 93 19",
            },
            e,
          ),
          (K ||= o.createElement("path", {
            d: "M.676 13.467V1.108h3.562v5.574l3.975-5.574h3.925l-4.41 5.84 4.483 6.52H8.02l-3.78-5.671v5.67zm11.883-3.247c0-1.672 1.042-2.714 3.029-3.393l2.884-.993c1.042-.364 1.38-.655 1.38-1.188 0-.606-.484-1.042-1.477-1.042-1.26 0-2.157.727-2.327 2.084l-3.368-.63c.363-2.496 2.302-4.192 5.719-4.192s5.065 1.526 5.065 4.095v4.241c0 1.163.315 1.478 1.502 1.575L23.78 13.71c-2.012 0-3.15-.849-3.611-2.448-.606 1.454-1.842 2.448-3.683 2.448-2.448 0-3.926-1.503-3.926-3.49m3.465-.242c0 .557.46 1.066 1.454 1.066 1.454 0 2.423-1.09 2.423-3.126v-.485c-.315.267-.678.46-1.405.751l-1.381.558c-.727.29-1.091.678-1.091 1.236m22.724-2.69c0 3.998-2.253 6.422-5.21 6.422-1.793 0-3.175-.97-3.756-2.472v6.834h-3.563V1.108h3.563v2.254c.581-1.527 1.962-2.496 3.756-2.496 2.957 0 5.21 2.447 5.21 6.422m-3.635 0c0-2.351-.993-3.732-2.69-3.732-1.624 0-2.641 1.405-2.641 3.732 0 2.35 1.017 3.732 2.641 3.732 1.697 0 2.69-1.357 2.69-3.732m5.549 6.18V1.107h3.562v3.78h2.69c3.03 0 4.677 1.455 4.677 4.241 0 2.763-1.769 4.338-4.798 4.338zm5.55-2.666c1.284 0 1.817-.51 1.817-1.624s-.533-1.624-1.745-1.624h-2.06v3.248zm6.364-3.466c0-3.853 2.57-6.47 6.301-6.47 3.538 0 5.768 2.157 5.768 5.622 0 .363-.024.8-.073 1.405h-8.385c.121 1.915 1.164 3.054 2.763 3.054 1.309 0 2.18-.679 2.52-1.987l3.175.751c-.63 2.544-2.714 3.999-5.744 3.999-3.732 0-6.325-2.594-6.325-6.374m8.676-1.6c-.097-1.405-.945-2.229-2.35-2.229-1.333 0-2.278.824-2.618 2.23zm17.96 1.552c0 3.998-2.254 6.422-5.21 6.422-1.794 0-3.175-.97-3.757-2.472v6.834h-3.562V1.108h3.562v2.254c.582-1.527 1.963-2.496 3.756-2.496 2.957 0 5.21 2.447 5.21 6.422m-3.635 0c0-2.351-.994-3.732-2.69-3.732-1.624 0-2.642 1.405-2.642 3.732 0 2.35 1.018 3.732 2.642 3.732 1.696 0 2.69-1.357 2.69-3.732m4.725 2.932c0-1.672 1.042-2.714 3.029-3.393l2.884-.993c1.042-.364 1.38-.655 1.38-1.188 0-.606-.484-1.042-1.477-1.042-1.26 0-2.157.727-2.327 2.084l-3.368-.63c.363-2.496 2.302-4.192 5.719-4.192s5.065 1.526 5.065 4.095v4.241c0 1.163.315 1.478 1.502 1.575l-1.187 2.933c-2.012 0-3.15-.849-3.611-2.448-.606 1.454-1.842 2.448-3.683 2.448-2.448 0-3.926-1.503-3.926-3.49m3.465-.242c0 .557.46 1.066 1.454 1.066 1.454 0 2.423-1.09 2.423-3.126v-.485c-.315.267-.678.46-1.405.751l-1.382.558c-.726.29-1.09.678-1.09 1.236",
          })),
        );
      const J = "container--owjvRUwPE_w_qqaz";
      const ee = "career-logo--EOY3SGVO9Q06T2TQ";
      const te = "hh-logo--hmRz6LMNoOExzcQn";
      const re = "header-logo";
      const oe = () => {
        W()({
          buttonName: "logo_hh",
        });
      };
      const ne = () => {
        W()({
          buttonName: "logo_careerhhru",
        });
      };
      const se = () => {
        const e = (0, f.v)((e) => !!e.profile);
        return (0, z.jsxs)("div", {
          className: J,
          children: [
            (0, z.jsx)(y.SPALink, {
              to: w.m5,
              isSeoLink: true,
              target: "_blank",
              onClick: oe,
              "data-qa": (0, L.Z)(re, "hh"),
              children: (0, z.jsx)(Y, {
                className: te,
              }),
            }),
            (0, z.jsx)(y.SPALink, {
              className: ee,
              to: e ? A._X : A.w4,
              isSeoLink: true,
              onClick: ne,
              "data-qa": (0, L.Z)(re, "career"),
              children: (0, z.jsx)(V, {}),
            }),
          ],
        });
      };
      se.displayName = "Header/HeaderLogo/index/HeaderLogo";
      const ie = se;
      const ae = ({ onClick: e }) =>
        (0, z.jsx)(C.z, {
          style: "neutral",
          mode: "tertiary",
          size: "medium",
          icon: (0, z.jsx)(S.DIm, {}),
          "aria-label": "menu burger button",
          hideLabel: true,
          onClick: e,
        });
      ae.displayName = "Header/HeaderMenuIcon/index/HeaderMenuIcon";
      const le = ae;
      var ce = r(45892);
      var de = r(36990);
      const ue = "nav-item--DwvUZUwKWY6DeF28";
      const me = "nav-item_selected--AyiN_vPgrio0DViE";
      const he = "nav-item_mobile--SnF9nCenjgkzt7vp";
      const pe = ({
        Element: e = "div",
        selected: t,
        mobile: r,
        children: o,
        ...n
      }) =>
        (0, z.jsx)(e, {
          className: s()(ue, {
            [he]: r,
            [me]: t,
          }),
          ...n,
          children: o,
        });
      pe.displayName = "Header/HeaderNavItem/index/HeaderNavItem";
      const ve = pe;
      var ge = r(94483);
      const fe = "nav_mobile--I_rSe6IFqb4P0NeY";
      const ye = "nav-list--ujyddqQCgQBm_buc";
      const xe = "nav-item--hQrh5Py66ngohIRP";
      const ke = "career-platform.page-names.index";
      const be = "career-platform.page-names.lk";
      const Ce = "career-platform.page-names.professions";
      const je = "career-platform.page-names.courses";
      const Pe = "career-platform.page-names.assessment";
      const _e = "career-platform.page-names.articles";
      const Se = "enabled_assessment";
      const Ee = "enabled_articles";
      const Ae = "header-nav";
      const Ne = ({ trls: e, mobile: t = false }) => {
        const r = (0, f.v)((e) => e.request.pageName);
        const n = (0, f.v)((e) => !!e.profile);
        const s = (0, l.Z)(Se);
        const i = (0, l.Z)(Ee);
        const a = (0, o.useMemo)(() => {
          const e = [
            n
              ? {
                  id: "lk",
                  name: be,
                  href: A._X,
                  pageNames: ["LK", "CareerGoal"],
                  analyticName: "career_header_lk",
                }
              : {
                  id: "index",
                  name: ke,
                  href: A.w4,
                  pageNames: ["Index"],
                  analyticName: "main_header",
                },
            {
              id: "professions",
              name: Ce,
              href: A.kp,
              pageNames: ["Professions", "Profession"],
              analyticName: "career_header_guide_to_professions",
            },
            {
              id: "courses",
              name: je,
              href: de.y.getEdProgramsHref(),
              pageNames: ["EdPrograms"],
              analyticName: "career_header_courses",
              externalAnalyticGoal:
                ge.R.click_header_courses_professions_skills,
            },
          ];
          if (s) {
            e.push({
              id: "assessment",
              name: Pe,
              href: A.Sn,
              pageNames: ["CertLanding"],
              analyticName: "assessment",
            });
          }
          if (i) {
            e.push({
              id: "articles",
              name: _e,
              href: A.HQ,
              pageNames: ["ArticlesCatalog", "Article"],
              analyticName: "articles",
            });
          }
          return e;
        }, [n, s, i]);
        return (0, z.jsx)("nav", {
          className: t ? fe : undefined,
          "data-qa": (0, L.Z)(Ae),
          children: (0, z.jsx)("ul", {
            className: ye,
            children: a.map((o) =>
              (0, z.jsx)(
                "li",
                {
                  className: xe,
                  children: (0, z.jsx)(ve, {
                    selected: o.pageNames.some((e) => e === r),
                    mobile: t,
                    Element: y.SPALink,
                    to: o.href,
                    isSeoLink: true,
                    onClick: () =>
                      (({ analyticName: e, externalAnalyticGoal: t }) => {
                        W()({
                          buttonName: e,
                        });
                        if (t) {
                          Z.co.reach(t);
                        }
                      })(o),
                    "data-qa": (0, L.Z)(Ae, "link", o.id),
                    children: e[o.name],
                  }),
                },
                o.id,
              ),
            ),
          }),
        });
      };
      Ne.displayName = "Header/HeaderNav/index/HeaderNav";
      const we = (0, x.Z)(Ne);
      const Ze = "career-platform.components.mobile-nav.close";
      const Le = ({
        trls: e,
        isOpen: t,
        headerComponent: r = null,
        onClose: o,
      }) =>
        (0, z.jsxs)(j.R, {
          visible: t,
          onClose: o,
          footer: (0, z.jsx)(P.W, {
            children: (0, z.jsx)(C.z, {
              size: "medium",
              mode: "secondary",
              style: "accent",
              stretched: true,
              onClick: o,
              children: e[Ze],
            }),
          }),
          children: [
            r,
            (0, z.jsx)(ce.X, {
              default: 24,
            }),
            (0, z.jsx)(we, {
              mobile: true,
            }),
            (0, z.jsx)(ce.X, {
              default: 24,
            }),
          ],
        });
      Le.displayName = "Header/HeaderMobileNav/index/HeaderMobileNav";
      const Re = (0, x.Z)(Le);
      const Ie = "header--UIEU4eB7xzgUaVSg";
      const Fe = "header_stick-right--PNdf5Ico3_EreiwL";
      const ze = "header_absolute--eBOPwH32hYQA7dzv";
      const qe = "header-controls--a_fVQPcD2cQlcwP3";
      const Oe = "logo_center--ew3y1M7h7YEqz8T8";
      const He = "enabled_geo_location_button";
      const Be = ({ absolute: e }) => {
        const [t, r] = (0, o.useState)(false);
        const { isMobile: n } = (0, i.G)();
        const { isAuth: u } = (0, c.Z)();
        const m = (0, l.Z)(He);
        const h = s()(Ie, {
          [Fe]: n && u,
          [ze]: e,
        });
        const p = (0, o.useMemo)(
          () =>
            m
              ? (0, z.jsx)(ve, {
                  Element: "div",
                  children: (0, z.jsx)(d.Z, {
                    type: "button",
                  }),
                })
              : null,
          [m],
        );
        const v = () => r((e) => !e);
        const g = () =>
          n && u
            ? (0, z.jsxs)("header", {
                className: h,
                children: [
                  (0, z.jsx)(U, {}),
                  (0, z.jsx)("div", {
                    className: Oe,
                    children: (0, z.jsx)(ie, {}),
                  }),
                  (0, z.jsx)(le, {
                    onClick: v,
                  }),
                  (0, z.jsx)(Re, {
                    isOpen: t,
                    headerComponent: p,
                    onClose: v,
                  }),
                ],
              })
            : n && !u
              ? (0, z.jsxs)("header", {
                  className: h,
                  children: [
                    (0, z.jsx)(ie, {}),
                    (0, z.jsxs)("div", {
                      className: qe,
                      children: [
                        (0, z.jsx)(le, {
                          onClick: v,
                        }),
                        (0, z.jsx)(U, {}),
                      ],
                    }),
                    (0, z.jsx)(Re, {
                      isOpen: t,
                      headerComponent: p,
                      onClose: v,
                    }),
                  ],
                })
              : (0, z.jsxs)("header", {
                  className: h,
                  children: [
                    (0, z.jsx)(ie, {}),
                    (0, z.jsx)(we, {}),
                    (0, z.jsxs)("div", {
                      className: qe,
                      children: [p, (0, z.jsx)(U, {})],
                    }),
                  ],
                });
        if (e) {
          return (0, z.jsx)(a.m, {
            layer: "alpha",
            children: g(),
          });
        } else {
          return g();
        }
      };
      Be.displayName = "components/Header/index/Header";
      const Ge = Be;
    },
    56913: function (e, t, r) {
      r.d(t, {
        Z: () => h,
        f: () => u,
      });
      var o = r(67294);
      var n = r(57456);
      var s = r(41745);
      var i = r(22712);
      var a = r(15452);
      var l = r(98651);
      var c = r(91393);
      var d = r(85893);
      const u = ({ onClick: e }) =>
        (0, d.jsx)(c.Cs7, {
          initialColor: "secondary",
          padding: 8,
          onClick: e,
        });
      u.displayName =
        "components/MagritteBottomSheetHeader/index/MagritteBottomSheetHeaderCrossIcon";
      const m = ({ title: e, subtitle: t, left: r, right: c, options: u }) =>
        (0, d.jsxs)(n.N, {
          children: [
            (0, d.jsx)(s.h, {
              children: (0, d.jsx)(i.e, {
                centered: true,
                left: r,
                right: c,
                children: (0, d.jsx)(a.c, {
                  centered: true,
                  title: (0, d.jsx)(l.x, {
                    typography: "title-5-semibold",
                    ellipsis: true,
                    children: e,
                  }),
                  subtitle:
                    t &&
                    (0, d.jsx)(l.x, {
                      typography: "label-4-regular",
                      style: "secondary",
                      children: t,
                    }),
                }),
              }),
            }),
            (0, d.jsx)(o.Fragment, {
              children:
                u &&
                (0, d.jsx)(s.h, {
                  children: u,
                }),
            }),
          ],
        });
      m.displayName =
        "components/MagritteBottomSheetHeader/index/MagritteBottomSheetHeader";
      const h = m;
    },
    9828: function (e, t, r) {
      r.d(t, {
        Z: () => pe,
      });
      var o = r(67294);
      var n = r(45991);
      var s = r(14307);
      var i = r(23836);
      var a = r(98651);
      var l = r(1839);
      var c = r(91393);
      var d = r(89063);
      var u = r(66721);
      var m = r(85893);
      const h = "cookie_policy_agreement";
      const p = "career-platform.components.cookies-policy.text";
      const v = "career-platform.components.cookies-policy.link";
      const g = "career-platform.components.cookies-policy.agree";
      const f = "cookies-policy";
      const y = ({ trls: e }) => {
        const [t, r] = (0, o.useState)(false);
        (0, o.useEffect)(() => {
          if (s.L.get(h) === null) {
            r(true);
          }
        }, []);
        if (t) {
          return (0, m.jsxs)(i.A, {
            addon: (0, m.jsx)(c.uvJ, {
              initialColor: "contrast",
            }),
            autohideTime: 0,
            actionLabel: e[g],
            onAction: () => {
              s.L.set(h, "true", 8928);
              r(false);
            },
            "data-qa": (0, u.Z)(f),
            children: [
              (0, m.jsx)(a.x, {
                typography: "label-2-regular",
                style: "contrast",
                children: e[p],
              }),
              (0, m.jsx)(l.r, {
                style: "constant",
                typography: "label-2-regular",
                href: d.Sq,
                target: "_blank",
                rel: "noreferrer noopener nofollow",
                "data-qa": (0, u.Z)(f, "confirm"),
                children: e[v],
              }),
            ],
          });
        } else {
          return null;
        }
      };
      y.displayName = "components/CookiesPolicy/index/CookiesPolicy";
      const x = (0, n.Z)(y);
      var k = r(87678);
      var b = r(10933);
      const C = () => {
        const {
          title: e,
          ogTitle: t,
          description: r,
          ogDescription: n,
          canonical: s,
          rssTitle: i,
          rssHref: a,
          ogType: l,
          ogImage: c,
          noIndex: d,
        } = (0, b.v)((e) => e.pageMetaData);
        const u = (0, b.v)(({ request: e, router: t }) =>
          `${e.origin}${t.location.pathname}`.replace(/\/+$/, ""),
        );
        const h = (0, b.v)(
          ({ router: e }) => !!Object.keys(e.location.query).length,
        );
        return (0, m.jsxs)(o.Fragment, {
          children: [
            e &&
              (0, m.jsxs)(o.Fragment, {
                children: [
                  (0, m.jsx)(k.Dx, {
                    children: e,
                  }),
                  (0, m.jsx)(k.h_, {
                    property: "og:title",
                    content: t || e,
                  }),
                ],
              }),
            r &&
              (0, m.jsxs)(o.Fragment, {
                children: [
                  (0, m.jsx)(k.h_, {
                    name: "description",
                    content: r,
                  }),
                  (0, m.jsx)(k.h_, {
                    property: "og:description",
                    content: n || r,
                  }),
                ],
              }),
            (h || d) &&
              (0, m.jsx)(k.h_, {
                name: "robots",
                content: "noindex",
              }),
            (0, m.jsx)(k.h_, {
              property: "og:image",
              content:
                c ||
                "https://i.hh.ru/images/logos/openGraph/hh.ru.png?v=05022025",
            }),
            (0, m.jsx)(k.h_, {
              property: "og:type",
              content: l || "website",
            }),
            (0, m.jsx)(k.h_, {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, m.jsx)(k.h_, {
              property: "og:url",
              content: u,
            }),
            (0, m.jsx)(k.rU, {
              rel: "canonical",
              href: s || u,
            }),
            a &&
              (e || i) &&
              (0, m.jsx)(k.rU, {
                title: i || e,
                type: "application/rss+xml",
                rel: "alternate",
                href: a,
              }),
          ],
        });
      };
      C.displayName = "components/PageMetaData/index/PageMetaData";
      const j = C;
      var P = r(49262);
      var _ = r(81252);
      var S = r(37034);
      var E = r(41302);
      const A = "uxfeedback_profession_based_survey";
      var N = r(41664);
      var w = r.n(N);
      var Z = r(70196);
      var L = r(25166);
      var R = r(42524);
      var I = r(94515);
      var F = r(48441);
      var z = r(24674);
      var q = r(63797);
      var O = r(94184);
      var H = r.n(O);
      var B = r(99794);
      var G = r(27052);
      var M = r.n(G);
      var U = r(34091);
      const T = "entrypoint--x3L5xxmS_vkq8aiu";
      const D = "entrypoint-hidden--bVMsVIYYfGQ1PFQH";
      const Q = "content--Mkf2SNOubgwDb64g";
      const W = "textarea--xdNFN39u6I2SgOOA";
      const $ = "button--rZ9mkDaCD7Q4HjDC";
      const Y = "footer--M1ocuQN_dcRc07vl";
      const K = "career-platform.widgets.chatik.entrypoint.placeholder";
      const X = ({ suggests: e, onClick: t, visible: r, trls: n }) => {
        const [s, i] = (0, o.useState)(false);
        (0, o.useEffect)(() => {
          const e = (e) => {
            const t = e.target;
            const r = t.scrollingElement;
            const o = window.getComputedStyle(r).position === "static";
            if (!t || !r || !o) {
              return;
            }
            if (r.scrollTop + r.clientHeight + 400 > r.scrollHeight) {
              i(true);
            } else {
              i(false);
            }
          };
          document.addEventListener("scroll", e);
          return () => {
            document.removeEventListener("scroll", e);
          };
        }, []);
        return (0, m.jsx)(U.m, {
          layer: "iota",
          children: (0, m.jsxs)("div", {
            className: H()(T, {
              [D]: !r || s,
            }),
            onClick: t,
            children: [
              (0, m.jsx)(B.ElementShownAnchor, {
                fn: M(),
                children: (0, m.jsxs)("div", {
                  className: Q,
                  children: [
                    (0, m.jsx)("div", {
                      className: W,
                      children: (0, m.jsx)(a.x, {
                        typography: "label-2-regular",
                        style: "secondary",
                        children: n[K],
                      }),
                    }),
                    (0, m.jsx)("button", {
                      className: $,
                      children: (0, m.jsx)(c.lRl, {
                        initialColor: "tertiary",
                      }),
                    }),
                  ],
                }),
              }),
              (0, m.jsx)("div", {
                className: Y,
                children: e,
              }),
            ],
          }),
        });
      };
      X.displayName = "components/ChatikEntrypoint/index/ChatikEntrypoint";
      const V = (0, n.Z)(X);
      var J = r(48235);
      const ee = async (e) => {
        const { data: t } = await J.Z.post("/shards/chatik/chats_with_bot", {
          chatAlias: e,
        });
        return t;
      };
      const te = "activate";
      const re = "deactivate";
      const oe = {
        on(e) {
          const t = {
            ...{
              origin: window.location.origin,
            },
            ...e,
          };
          const r = (e) => {
            if (e.origin !== t.origin) {
              return;
            }
            let r;
            try {
              r = JSON.parse(e.data);
            } catch (e) {
              return;
            }
            if (r && t.handlers[r.name] instanceof Function) {
              t.handlers[r.name](r.data, e);
            }
          };
          window.addEventListener("message", r);
          return () => {
            window.removeEventListener("message", r);
          };
        },
        trigger(e) {
          e.target.postMessage(JSON.stringify(e.message), e.origin || "*");
        },
      };
      const ne = (e) => {
        try {
          return new URL(e).origin;
        } catch {
          return e;
        }
      };
      const se = "chatik-container--F4P7_EUnKu4YIgKS";
      const ie = "chatik--_mEaS_OlkxcEmVQE";
      const ae = "loader--J0iSMkiQWQCmIV3D";
      const le = {
        upskill: {
          value: "career-platform.widgets.chatik.drafts.upskill.value",
          label: "career-platform.widgets.chatik.drafts.upskill.label",
        },
        reskill: {
          value: "career-platform.widgets.chatik.drafts.reskill.value",
          label: "career-platform.widgets.chatik.drafts.reskill.label",
        },
      };
      const ce = ({ trls: e }) => {
        const t = (0, Z.Y)((e) => e.widgetChatik.url);
        const r = (0, Z.Y)((e) => e.widgetChatik.chatAlias);
        const [n, s] = (0, o.useState)(false);
        const [i, a] = (0, o.useState)();
        const l = (0, o.useRef)(null);
        const { isMobile: c } = (0, L.G)();
        const {
          deactivate: d,
          init: u,
          activate: h,
          loaded: p,
        } = (({
          url: e,
          iframeRef: t,
          messageHandlers: r,
          chatAlias: n,
          onReady: s,
        }) => {
          const [i, a] = (0, o.useState)(false);
          const [l, c] = (0, o.useState)(null);
          const { breakpoint: d } = (0, L.G)();
          const u = (0, o.useCallback)(
            (e, r) => {
              const n = t.current?.contentWindow;
              if (n) {
                oe.trigger({
                  target: n,
                  message: {
                    name: e,
                    data: r,
                  },
                });
              }
            },
            [t],
          );
          const m = (0, o.useCallback)(() => {
            var e;
            const t =
              ((e = window.globalServiceVars) === null ||
              e === undefined ||
              (e = e.careerPlatformFront) === null ||
              e === undefined ||
              (e = e.analyticsParams) === null ||
              e === undefined
                ? undefined
                : e.hhtmSource) || null;
            const r = "Notification" in window ? Notification.permission : null;
            const o = new URLSearchParams(window.location.search).get(
              "hhtmFromLabel",
            );
            return {
              type: "widget",
              chatId: n,
              hhtmFrom: t,
              hhtmFromLabel: o,
              pushPermission: r,
              parentScreenBreakpoint: d,
              currentUrl: window.location.href,
            };
          }, [d, n]);
          const h = (0, o.useCallback)(
            async (e) => {
              let t = l;
              if (!t) {
                t = (await ee(n)).chatId;
                c(t);
              }
              u(te, {
                ...m(),
                chatId: t,
                ...e,
              });
            },
            [n, l, m, u],
          );
          const p = (0, o.useCallback)(() => {
            u(re);
            a(false);
          }, [u]);
          return {
            init: (0, o.useCallback)(
              (t) =>
                oe.on({
                  origin: ne(e),
                  handlers: {
                    ...r,
                    awaitingInit: () => {
                      oe.trigger({
                        target: t,
                        message: {
                          name: "init",
                        },
                      });
                      a(true);
                    },
                    ready: async () => {
                      await (s == null ? undefined : s());
                    },
                  },
                }),
              [r, s, e],
            ),
            loaded: i,
            activate: h,
            deactivate: p,
          };
        })({
          url: t,
          chatAlias: r,
          onBack: () => {
            d();
            s(false);
          },
          onReady: async () => {
            await h({
              message: i
                ? {
                    text: i,
                  }
                : undefined,
            });
          },
          iframeRef: l,
          messageHandlers: {
            close: () => {
              d();
              s(false);
            },
          },
        });
        (0, o.useEffect)(() => {
          var e;
          if (
            n &&
            (e = l.current) !== null &&
            e !== undefined &&
            e.contentWindow
          ) {
            return u(l.current.contentWindow);
          } else {
            return () => {};
          }
        }, [u, n]);
        const v = (e) => {
          if (n) {
            d();
            s(false);
            return;
          }
          w()({
            draft: e,
          });
          a(e);
          s(true);
        };
        const g = () => {
          d();
          s(false);
        };
        const f = (e) => (t) => {
          t.stopPropagation();
          v(e);
        };
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(V, {
              visible: !n,
              onClick: () => v(),
              suggests: (0, m.jsxs)(R.T, {
                children: [
                  (0, m.jsx)(I.X, {
                    onClick: f(e[le.upskill.value]),
                    children: e[le.upskill.label],
                  }),
                  (0, m.jsx)(I.X, {
                    onClick: f(e[le.reskill.value]),
                    children: e[le.reskill.label],
                  }),
                ],
              }),
            }),
            c &&
              (0, m.jsxs)(F.R, {
                onClose: g,
                height: "full-screen",
                withContentPaddings: false,
                visible: n,
                children: [
                  !p &&
                    (0, m.jsx)("div", {
                      className: ae,
                      children: (0, m.jsx)(z.a, {
                        size: 24,
                      }),
                    }),
                  (0, m.jsx)("iframe", {
                    className: ie,
                    ref: l,
                    src: t,
                  }),
                ],
              }),
            !c &&
              (0, m.jsx)(q.u, {
                onClose: g,
                size: "large",
                visible: n,
                disableHorizontalPaddings: true,
                disableVerticalPaddings: true,
                children: (0, m.jsxs)("div", {
                  className: se,
                  children: [
                    !p &&
                      (0, m.jsx)("div", {
                        className: ae,
                        children: (0, m.jsx)(z.a, {
                          size: 24,
                        }),
                      }),
                    (0, m.jsx)("iframe", {
                      className: ie,
                      ref: l,
                      src: t,
                    }),
                  ],
                }),
              }),
          ],
        });
      };
      ce.displayName = "widgets/Chatik/index/ChatikInner";
      const de = (0, n.Z)(ce);
      const ue = () => {
        const e = (0, b.v)((e) => e.widgetChatik);
        const t = (0, b.v)((e) => {
          return e.widgetChatik?.enabledOnPages ?? [];
        });
        const r = (0, b.v)((e) => e.request.pageName);
        if (e != null && e.url && t.includes(r)) {
          return (0, m.jsx)(de, {});
        } else {
          return null;
        }
      };
      ue.displayName = "widgets/Chatik/index/Chatik";
      const me = ue;
      const he = ({ themeContainerProps: e, children: t }) => {
        (() => {
          const { isAuth: e, profile: t } = (0, E.Z)();
          const r = (0, b.v)((e) => e.features[A]);
          (0, o.useEffect)(() => {
            if (e) {
              try {
                const e = t.profession.id;
                const o = JSON.parse(r);
                if (e && o.includes(e)) {
                  S.p.professionBasedSurvey();
                }
              } catch (e) {
                _.c.log("out error", e);
              }
            }
          }, [e, r, t]);
        })();
        return (0, m.jsxs)(P.ZP, {
          ...e,
          children: [
            (0, m.jsx)(j, {}),
            (0, m.jsx)(x, {}),
            (0, m.jsx)(me, {}),
            t,
          ],
        });
      };
      he.displayName = "components/PageWrapper/index/PageWrapper";
      const pe = he;
    },
    30621: function (e, t, r) {
      r.d(t, {
        Z: () => d,
      });
      var o = r(67294);
      var n = r(70196);
      var s = r(63352);
      var i = r(77537);
      var a = r(85893);
      const l = {
        [i.$j.Male]: "male",
        [i.$j.Female]: "female",
        [i.$j.Unknown]: undefined,
      };
      const c = ({ size: e, onClick: t, Element: r = "div" }, o) => {
        const {
          fullName: i,
          userPhoto: c,
          gender: d,
        } = (0, n.Y)((e) => e.profile);
        return (0, a.jsx)(s.q, {
          ref: o,
          mode: "image",
          image: (c == null ? undefined : c.preview) || "",
          fallbackMode: "placeholder",
          placeholder: l[d],
          shapeCircle: false,
          "aria-label": i,
          size: e,
          onClick: t,
          Element: r,
        });
      };
      c.displayName = "components/ProfileAvatar/index/ProfileAvatar";
      const d = (0, o.forwardRef)(c);
    },
    49262: function (e, t, r) {
      r.d(t, {
        Tg: () => a,
        ZP: () => d,
        yg: () => l,
      });
      var o = r(94184);
      var n = r.n(o);
      const s = {
        "theme-container_background-body":
          "theme-container_background-body--ZzjjX87WQ0AoNOtu",
        themeContainerBackgroundBody:
          "theme-container_background-body--ZzjjX87WQ0AoNOtu",
        "theme-container_background-secondary":
          "theme-container_background-secondary--A2Mva3JiY6uDIzGB",
        themeContainerBackgroundSecondary:
          "theme-container_background-secondary--A2Mva3JiY6uDIzGB",
        "theme-container_background-tertiary":
          "theme-container_background-tertiary--CbcHbsKiaQY6OrIJ",
        themeContainerBackgroundTertiary:
          "theme-container_background-tertiary--CbcHbsKiaQY6OrIJ",
        "theme-container_background-transparent":
          "theme-container_background-transparent--IL_SkfeAGBsPQCDx",
        themeContainerBackgroundTransparent:
          "theme-container_background-transparent--IL_SkfeAGBsPQCDx",
      };
      var i = r(85893);
      let a = (function (e) {
        e.Body = "body";
        e.Secondary = "secondary";
        e.Tertiary = "tertiary";
        e.Transparent = "transparent";
        return e;
      })({});
      let l = (function (e) {
        e.Day = "day";
        e.Night = "night";
        return e;
      })({});
      const c = ({
        variant: e = l.Day,
        background: t = a.Body,
        children: r,
      }) => {
        const o = n()({
          "magritte-day-theme": e === l.Day,
          "magritte-night-theme": e === l.Night,
          [s[`theme-container_background-${t}`]]: true,
        });
        return (0, i.jsx)("div", {
          children: (0, i.jsx)("div", {
            className: o,
            children: r,
          }),
        });
      };
      c.displayName = "components/ThemeContainer/index/ThemeContainer";
      const d = c;
    },
    25067: function (e, t, r) {
      r.d(t, {
        Mr: () => a,
        Ms: () => l,
        e3: () => c,
      });
      var o = r(11563);
      const n = {
        id: "1",
        text: "Москва",
      };
      const s = {
        id: "2",
        text: "Санкт-Петербург",
      };
      const i = {
        id: "113",
        text: "Вся Россия",
      };
      const a = [
        n,
        s,
        {
          id: "3",
          text: "Екатеринбург",
        },
        {
          id: "88",
          text: "Казань",
        },
        {
          id: "66",
          text: "Нижний Новгород",
        },
        {
          id: "104",
          text: "Челябинск",
        },
        {
          id: "54",
          text: "Красноярск",
        },
        {
          id: "78",
          text: "Самара",
        },
        {
          id: "99",
          text: "Уфа",
        },
      ];
      const l = [n, s, i];
      const c = {
        [n.id]: o.h.MSK,
        [s.id]: o.h.SPB,
        [i.id]: o.h.ALL,
      };
    },
    13616: function (e, t, r) {
      r.d(t, {
        m: () => o,
      });
      const o = {
        blank: "primary",
        neutral: "secondary",
        "extra-1": "accent-secondary",
        "extra-2": "lovely-secondary",
        "extra-3": "dreamy-secondary",
        "extra-4": "vivid-secondary",
        "extra-5": "special-secondary",
        accent: "accent-secondary",
        positive: "positive-secondary",
        warning: "warning-secondary",
        negative: "negative-secondary",
        special: "special-secondary",
        dreamy: "dreamy-secondary",
        lovely: "lovely-secondary",
        vivid: "vivid-secondary",
        contrast: "constant-secondary",
        "accent-heavy": "accent",
        "positive-heavy": "positive",
        "warning-heavy": "warning",
        "negative-heavy": "negative",
        "special-heavy": "special",
        "dreamy-heavy": "dreamy",
        "lovely-heavy": "lovely",
        "vivid-heavy": "vivid",
        "contrast-heavy": "constant",
      };
    },
    59218: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(10933);
      const n = (e) => {
        const t = (0, o.v)((t) => t.features[e]);
        if (typeof t == "boolean") {
          return t;
        } else {
          if (t !== undefined) {
            console.warn(
              `Значение динамической настройки ${e} == ${t} (type ${typeof t}), приведение к true/false произойдет по правилам javascript, убедитесь что полученное значение ожидаемо для вас`,
            );
          }
          return Boolean(t);
        }
      };
    },
    41302: function (e, t, r) {
      r.d(t, {
        Z: () => s,
      });
      var o = r(10933);
      const n = (e) => {
        var r;
        if (e) {
          return [
            e.profession?.name,
            e == null || (r = e.grade) === null || r === undefined
              ? undefined
              : r.name,
          ]
            .filter(Boolean)
            .join(" · ");
        } else {
          return "";
        }
      };
      const s = () => {
        var e;
        var t;
        const r = (0, o.v)((e) => e.profile);
        return {
          profile: r,
          profileNonNullable: r,
          profileFullName: r ? r.fullName : "",
          profileDescription: n(r),
          isAuth: !!r,
          isProfileComplete: Boolean(
            (r == null || (e = r.profession) === null || e === undefined
              ? undefined
              : e.inCareer) && (r == null ? undefined : r.grade),
          ),
          isProfileIncomplete: Boolean(
            r &&
            (r == null ||
              (t = r.profession) === null ||
              t === undefined ||
              !t.inCareer),
          ),
        };
      };
    },
    65921: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(67294);
      const n = (e) => {
        const t = (0, o.useRef)(false);
        const [r, n] = (0, o.useState)(e);
        (0, o.useEffect)(() => {
          t.current = true;
          return () => {
            t.current = false;
          };
        }, []);
        return [r, (0, o.useCallback)((...e) => t.current && n(...e), [])];
      };
    },
    38892: function (e, t, r) {
      r.d(t, {
        Z: () => i,
      });
      var o = r(67294);
      var n = r(67242);
      var s = r(97921);
      const i = () => {
        const { animateIn: e, animateOut: t } = (0, o.useContext)(n.S);
        const r = (0, o.useId)();
        const i = (0, o.useCallback)(() => {
          t(r, s.A.Autohide);
        }, [t, r]);
        const a = (0, o.useCallback)(
          (t) => {
            e(r, t);
          },
          [e, r],
        );
        (0, o.useEffect)(
          () => () => {
            t(r, s.A.Autohide);
          },
          [r, t],
        );
        return {
          showSnack: a,
          hideSnack: i,
        };
      };
    },
    17176: function (e, t, r) {
      r.d(t, {
        Z: () => l,
      });
      var o = r(67294);
      var n = r(70196);
      var s = r(10933);
      var i = r(29988);
      var a = r(29145);
      const l = () => {
        const { area: e, status: t } = (0, n.Y)((e) => e.userArea);
        const r = (0, s.v)((e) => e.router.location);
        const l = (0, i.usePush)();
        const c = (0, o.useCallback)(
          (e) => {
            l((0, a.zm)(r, "area", e), {
              cancelScrollCorrection: true,
            });
          },
          [r, l],
        );
        return {
          area: e,
          areaId: e.id,
          areaName: e.text,
          areaStatus: t,
          onPushQueryArea: c,
        };
      };
    },
    27402: function (e, t, r) {
      r.d(t, {
        F: () => o,
      });
      const o = {
        landingSectionFreeCourses: "landing_section_free_courses",
        landingSectionCourses: "landing_section_courses",
        professionCalculator: "profession_section_calculator",
        professionSectionCourses: (e) => `profession_section_${e}`,
        careerTrack: "career_track",
        entrypoint: (e) => ["entrypoint", (e || "").toLowerCase()].join("_"),
        lkScreenGoalUpskillSkills: "screen-goal-uskill-skills",
        lkScreenGoalUpskillProfession: "screen-goal-uskill-profession",
        lkScreenGoalEmptyUpskill: "screen-goal-emptry-upskill",
        lkScreenGoalEmptyProfession: "screen-goal-empty-profession",
        lkScreenGoalReskillProfession: "screen-goal-reskill-profession",
        lkSCreenGoalReskillSkills: "screen-goal-reskill-skills",
        lkScreenUnknownHightSalary: "screen-unknown-hight-salary",
        lkScreenUnknownPopularSkills: "screen-unknown-popular-skills",
        lkSimilar: "lk_similar",
      };
    },
    3083: function (e, t, r) {
      r.d(t, {
        g: () => o,
      });
      const o = "cp.help@hh.ru";
    },
    89063: function (e, t, r) {
      r.d(t, {
        DS: () => n,
        M0: () => s,
        PT: () => a,
        Sd: () => i,
        Sq: () => m,
        UH: () => l,
        bX: () => c,
        f0: () => d,
        m5: () => u,
      });
      var o = r(94266);
      const n = `https://hh.ru/mentors?hhtmFrom=${o.Z}`;
      const s = (e) => `https://hh.ru/mentors/${e}?hhtmFrom=${o.Z}`;
      const i = (e) =>
        `https://hh.ru/applicant/skills/${e}/verification_methods?hhtmFrom=${o.Z}`;
      const a = `https://hh.ru/article/31951?hhtmFrom=${o.Z}`;
      const l = `https://hh.ru/article/personal_data?hhtmFrom=${o.Z}`;
      o.Z;
      o.Z;
      const c = `https://hh.ru/profile/me?hhtmFrom=ProfileActivator${o.Z}`;
      const d = `https://hh.ru/applicant/skill_verifications/methods?hhtmFrom=${o.Z}`;
      const u = "https://hh.ru?utm_source=careerhhru";
      const m = `https://hh.ru/article/cookie_policy?hhtmFrom=${o.Z}`;
    },
    94266: function (e, t, r) {
      r.d(t, {
        Z: () => o,
      });
      const o = "career-platform-front";
    },
    37034: function (e, t, r) {
      r.d(t, {
        n: () => c,
        p: () => d,
      });
      var o = r(99794);
      var n = r(23272);
      var s = (function (e) {
        e.Style = "style";
        e.Image = "image";
        e.Opacity = "opacity";
        e.Class = "class";
        e.Size = "size";
        e.Info = "info";
        e.Scroll = "scroll";
        e.Position = "position";
        e.Listener = "listener";
        e.Event = "event";
        e.History = "history";
        e.LocationListener = "locationListener";
        e.AddScroll = "addScroll";
        e.RemoveScroll = "removeScroll";
        e.ShowWidgetIcon = "showWidgetIcon";
        e.ClientHeight = "clientHeight";
        e.Properties = "properties";
        return e;
      })(s || {});
      const i = (e) => typeof e == "string";
      const a = (e) =>
        e !== null && typeof e == "object" && (!!e.width || !!e.height);
      const l = (e) => {
        const l = n.L.get("crypted_id") ?? "";
        const c = n.L.get("crypted_hhuid") ?? "";
        const d = (() => {
          const t = n.L.get("hhrole") ?? "";
          if (["employer", "anonymous", "applicant"].includes(t)) {
            return t;
          } else {
            return "";
          }
        })();
        const u = e.additionalParams;
        const m = document.createElement("iframe");
        m.src = e.iframeSrc;
        m.classList.add("uxfeedback-widget");
        m.sandbox.add(
          "allow-scripts",
          "allow-same-origin",
          "allow-forms",
          "allow-popups",
        );
        document.body.appendChild(m);
        const h = (e, t) => {
          var r;
          if ((r = m.contentWindow) !== null && r !== undefined) {
            r.postMessage(
              {
                type: `uxfb/${e}`,
                payload: t,
              },
              "*",
            );
          }
        };
        const p = e.sendEventsOnLoad;
        let v = false;
        const g = (e) => {
          m.classList.add(e);
        };
        const f = () => {
          h(s.Scroll, {
            scrollTop: document.documentElement.scrollTop,
          });
        };
        window.addEventListener("message", (t) => {
          var r;
          var n;
          const { type: y = "", payload: x } = t.data;
          const [k, b] = y.split("/");
          if (t.origin === e.iframeOrigin && k === "uxfb") {
            if (b === s.Style && i(x)) {
              C = x;
              m.setAttribute("style", C);
              return;
            }
            var C;
            var j;
            if (b === s.Opacity && ((e) => typeof e == "number")(x)) {
              if (x === 1) {
                o.default.sendHHEvent("screen_shown", {
                  hhtmSource: "ux_feedback",
                  cryptedId: l,
                  cryptedHhuid: c,
                });
              }
              j = x;
              m.style.opacity = `${j}`;
              return;
            }
            if (b === s.Class && i(x)) {
              g("uxs-slide-back");
              g(x);
              return;
            }
            if (b !== s.Size || !a(x)) {
              if (b === s.Position && a(x)) {
                m.style.transform = "";
                m.style.left = "";
                m.style.right = "0px";
                m.style.top = "";
                m.style.bottom = "0px";
                m.style.position = "fixed";
                m.style.zIndex = "30";
                return;
              } else if (b === s.Listener) {
                v = true;
                h(s.Properties, {
                  cryptedId: l,
                  cryptedHhuid: c,
                  ...u,
                });
                (() => {
                  const e =
                    window.innerHeight || document.documentElement.clientHeight;
                  h(s.Info, {
                    url: document.location.href,
                    cookies: `role=${d}`,
                    devicePixelRatio: window.devicePixelRatio,
                    scrollTop: document.documentElement.scrollTop,
                    scrollHeight: document.documentElement.scrollHeight,
                  });
                  h(s.ClientHeight, e);
                  window.addEventListener(
                    "resize",
                    () => {
                      const e =
                        window.innerHeight ||
                        document.documentElement.clientHeight;
                      h(s.ClientHeight, e);
                    },
                    false,
                  );
                })();
                window.dispatchEvent(new CustomEvent("HH-UXFeedback-Mounted"));
                p.forEach((e) => {
                  h(s.Event, {
                    event: e,
                  });
                });
                return;
              } else {
                if (b !== s.LocationListener) {
                  if (b !== s.AddScroll) {
                    if (b === s.RemoveScroll) {
                      window.removeEventListener("scroll", f);
                    }
                  } else {
                    window.addEventListener("scroll", f);
                  }
                } else {
                  (() => {
                    let e = location.href;
                    new MutationObserver(() => {
                      const t = location.href;
                      if (t !== e) {
                        h(s.History, {
                          oldLocation: e,
                          location: t,
                        });
                        e = t;
                      }
                    }).observe(document, {
                      subtree: true,
                      childList: true,
                    });
                  })();
                }
                return;
              }
            }
            {
              const { width: e = "", height: t = "" } = x;
              if (e) {
                m.style.width = e;
                if (e === "100%") {
                  m.style.left = "";
                  m.style.right = "";
                  m.style.top = "";
                  m.style.transform = "";
                }
              }
              if (t) {
                m.style.height = t;
              }
            }
            if (b === s.Size && a(x)) {
              const { width: e = "", height: t = "" } = x;
              ((e, t) => {
                if (e) {
                  m.style.width = e;
                  if (e === "100%") {
                    m.style.left = "";
                    m.style.right = "";
                    m.style.top = "";
                    m.style.transform = "";
                  }
                }
                if (t) {
                  m.style.height = t;
                }
              })(e, t);
              return;
            }
          }
        });
        window.addEventListener("HH-UXFeedback-Open", (e) => {
          const t = e.detail;
          if (v) {
            h(s.Event, {
              event: t,
            });
          } else {
            p.push(t);
          }
        });
      };
      const c = () => {
        const e = document.querySelector("#uxfeedback_config");
        if (e != null && e.textContent) {
          try {
            const t = JSON.parse(e.textContent);
            l(t);
          } catch {
            console.error("ERROR: while initializing uxfeedback");
          }
        }
      };
      const d = {
        professionPageCalculatorUsed() {
          window.dispatchEvent(
            new CustomEvent("HH-UXFeedback-Open", {
              detail: "profession_page_calculator_used",
            }),
          );
        },
        professionBasedSurvey() {
          window.dispatchEvent(
            new CustomEvent("HH-UXFeedback-Open", {
              detail: "profession_based_survey",
            }),
          );
        },
      };
    },
    75834: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminArticle-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([
            r.e("18"),
            r.e("409"),
            r.e("809"),
            r.e("352"),
            r.e("379"),
            r.e("281"),
            r.e("532"),
          ]).then(r.bind(r, 61561)),
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
          return r(t);
        },
        resolve() {
          return 61561;
        },
      });
    },
    2948: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminArticlesCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("409"), r.e("755")]).then(
            r.bind(r, 92119),
          ),
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
          return r(t);
        },
        resolve() {
          return 92119;
        },
      });
    },
    42642: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminCollectionEdProgramsCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("957"), r.e("969")]).then(
            r.bind(r, 58814),
          ),
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
          return r(t);
        },
        resolve() {
          return 58814;
        },
      });
    },
    65864: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminCourse-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("379"), r.e("953")]).then(
            r.bind(r, 58191),
          ),
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
          return r(t);
        },
        resolve() {
          return 58191;
        },
      });
    },
    58674: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminCoursesCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () => r.e("33").then(r.bind(r, 82783)),
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
          return r(t);
        },
        resolve() {
          return 82783;
        },
      });
    },
    69437: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminEducation-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("379"), r.e("577")]).then(
            r.bind(r, 81550),
          ),
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
          return r(t);
        },
        resolve() {
          return 81550;
        },
      });
    },
    49421: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminEducationsCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () => r.e("36").then(r.bind(r, 44887)),
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
          return r(t);
        },
        resolve() {
          return 44887;
        },
      });
    },
    85262: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminProfession-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("379"), r.e("346")]).then(
            r.bind(r, 72363),
          ),
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
          return r(t);
        },
        resolve() {
          return 72363;
        },
      });
    },
    30825: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminProfessionsCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () => r.e("854").then(r.bind(r, 94867)),
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
          return r(t);
        },
        resolve() {
          return 94867;
        },
      });
    },
    42397: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminPromotionsCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("409"), r.e("957"), r.e("563")]).then(
            r.bind(r, 83076),
          ),
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
          return r(t);
        },
        resolve() {
          return 83076;
        },
      });
    },
    64721: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminProvidersCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("409"), r.e("957"), r.e("697")]).then(
            r.bind(r, 33734),
          ),
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
          return r(t);
        },
        resolve() {
          return 33734;
        },
      });
    },
    29111: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminProvidersStreamWeightPageLayout-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("729")]).then(r.bind(r, 93984)),
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
          return r(t);
        },
        resolve() {
          return 93984;
        },
      });
    },
    56156: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminStorefronts-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("379"), r.e("425")]).then(r.bind(r, 6261)),
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
          return r(t);
        },
        resolve() {
          return 6261;
        },
      });
    },
    91037: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminStream-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("379"), r.e("952")]).then(
            r.bind(r, 73593),
          ),
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
          return r(t);
        },
        resolve() {
          return 73593;
        },
      });
    },
    9894: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "AdminStreamsCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () => r.e("590").then(r.bind(r, 45528)),
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
          return r(t);
        },
        resolve() {
          return 45528;
        },
      });
    },
    5009: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "Article-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([
            r.e("18"),
            r.e("409"),
            r.e("809"),
            r.e("352"),
            r.e("281"),
            r.e("461"),
          ]).then(r.bind(r, 31159)),
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
          return r(t);
        },
        resolve() {
          return 31159;
        },
      });
    },
    30047: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "ArticlesCatalog-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("409"), r.e("494")]).then(
            r.bind(r, 39905),
          ),
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
          return r(t);
        },
        resolve() {
          return 39905;
        },
      });
    },
    17737: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "CareerGoal-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("122")]).then(r.bind(r, 56091)),
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
          return r(t);
        },
        resolve() {
          return 56091;
        },
      });
    },
    95203: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "CertLanding-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("564")]).then(r.bind(r, 69285)),
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
          return r(t);
        },
        resolve() {
          return 69285;
        },
      });
    },
    29486: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "CollectionEdProgram-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("809"), r.e("213"), r.e("32")]).then(
            r.bind(r, 21140),
          ),
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
          return r(t);
        },
        resolve() {
          return 21140;
        },
      });
    },
    56629: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "EdProgram",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("213"), r.e("422")]).then(
            r.bind(r, 44896),
          ),
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
          return r(t);
        },
        resolve() {
          return 44896;
        },
      });
    },
    65103: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "LK-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("285"), r.e("438")]).then(
            r.bind(r, 67977),
          ),
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
          return r(t);
        },
        resolve() {
          return 67977;
        },
      });
    },
    89572: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "Landing-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("409"), r.e("213"), r.e("284")]).then(
            r.bind(r, 42984),
          ),
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
          return r(t);
        },
        resolve() {
          return 42984;
        },
      });
    },
    84982: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "Profession-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("831"), r.e("285"), r.e("55")]).then(
            r.bind(r, 60066),
          ),
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
          return r(t);
        },
        resolve() {
          return 60066;
        },
      });
    },
    77914: function (e, t, r) {
      r.d(t, {
        Z: () => n,
      });
      var o = r(53744);
      const n = (0, o.ZP)({
        resolved: {},
        chunkName: () => "Professions-route",
        isReady(e) {
          const t = this.resolve(e);
          return this.resolved[t] === true && !!r.m[t];
        },
        importAsync: () =>
          Promise.all([r.e("18"), r.e("601")]).then(r.bind(r, 47462)),
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
          return r(t);
        },
        resolve() {
          return 47462;
        },
      });
    },
    11563: function (e, t, r) {
      r.d(t, {
        h: () => o,
      });
      let o = (function (e) {
        e.MSK = "MSK";
        e.SPB = "SPB";
        e.ALL = "ALL";
        e.LOCAL = "LOCAL";
        return e;
      })({});
    },
    71081: function (e, t, r) {
      r.d(t, {
        F: () => o,
      });
      let o = (function (e) {
        e.RUB = "RUB";
        e.EUR = "EUR";
        e.USD = "USD";
        e.RUR = "RUR";
        return e;
      })({});
    },
    2328: function (e, t, r) {
      r.d(t, {
        Ar: () => l,
        Z0: () => a,
        V: () => i,
        j4: () => h,
        TL: () => o,
        Fw: () => u,
        Wo: () => p,
        T7: () => c,
        xH: () => v,
        ki: () => d,
        GQ: () => n,
        y3: () => m,
        zI: () => s,
      });
      let o = (function (e) {
        e.Profession = "PROFESSION";
        e.Skill = "SKILL";
        return e;
      })({});
      let n = (function (e) {
        e.HigherEducation = "HIGHER_EDUCATION";
        e.SpecializedSecondaryEducation = "SPECIALIZED_SECONDARY_EDUCATION";
        return e;
      })({});
      let s = (function (e) {
        e.ONLINE = "ONLINE";
        e.OFFLINE = "OFFLINE";
        return e;
      })({});
      const i = "ALL";
      let a = (function (e) {
        e.From = "FROM";
        e.Exact = "EXACT";
        return e;
      })({});
      let l = (function (e) {
        e.Business = "BUSINESS";
        e.Finances = "FINANCES";
        e.Analytics = "ANALYTICS";
        e.Design = "DESIGN";
        e.Psychology = "PSYCHOLOGY";
        e.Software = "SOFTWARE";
        e.NeuralNetwork = "NEURAL_NETWORK";
        e.Free = "FREE";
        e.Education = "EDUCATION";
        e.Skills = "SKILLS";
        e.Professions = "PROFESSIONS";
        e.CareerGuidance = "CAREER_GUIDANCE";
        e.College = "COLLEGE";
        e.HighEducation = "HIGH_EDUCATION";
        e.Magistracy = "MAGISTRACY";
        e.Online = "ONLINE";
        e.Offline = "OFFLINE";
        return e;
      })({});
      let c = (function (e) {
        e.Courses = "COURSES";
        e.Education = "EDUCATION";
        return e;
      })({});
      let d = (function (e) {
        e.Relevant = "RELEVANT";
        e.Short = "SHORT";
        e.Long = "LONG";
        e.Priceup = "PRICE_UP";
        e.Pricedown = "PRICE_DOWN";
        return e;
      })({});
      let u = (function (e) {
        e.FilterAge = "filterAge";
        e.FilterPurposes = "filterPurposes";
        e.FilterEducationLevel = "filterEducationLevel";
        e.FilterFormat = "filterFormat";
        e.FilterAreas = "filterAreas";
        e.FilterStreams = "filterStreams";
        e.FilterSkills = "filterSkills";
        e.FilterProviders = "filterProviders";
        e.FilterDurations = "filterDurations";
        e.FilterProfessions = "filterProfessions";
        e.FilterPriceParameters = "filterPriceParameters";
        return e;
      })({});
      let m = (function (e) {
        e.Radio = "radio";
        e.Checkbox = "checkbox";
        return e;
      })({});
      const h = {
        [u.FilterPurposes]: m.Radio,
        [u.FilterEducationLevel]: m.Radio,
        [u.FilterAge]: m.Radio,
        [u.FilterFormat]: m.Radio,
        [u.FilterAreas]: m.Checkbox,
        [u.FilterStreams]: m.Checkbox,
        [u.FilterSkills]: m.Checkbox,
        [u.FilterProviders]: m.Checkbox,
        [u.FilterDurations]: m.Checkbox,
        [u.FilterProfessions]: m.Checkbox,
        [u.FilterPriceParameters]: m.Checkbox,
      };
      const p = {
        [u.FilterProfessions]: true,
        [u.FilterSkills]: true,
        [u.FilterAreas]: true,
        [u.FilterProviders]: true,
      };
      const v = {
        [u.FilterPriceParameters]: true,
      };
    },
    77537: function (e, t, r) {
      r.d(t, {
        $j: () => o,
        rK: () => n,
      });
      let o = (function (e) {
        e.Male = "MALE";
        e.Female = "FEMALE";
        e.Unknown = "UNKNOWN";
        return e;
      })({});
      let n = (function (e) {
        e.Model = "MODEL";
        e.User = "USER";
        return e;
      })({});
    },
    94483: function (e, t, r) {
      r.d(t, {
        H: () => i,
        R: () => n,
      });
      var o = r(99794);
      const n = {
        click_authorization_login: ["click", "authorization", "login-in"],
        click_authorization_logout: ["click", "authorization", "login-out"],
        click_footer_become_partner: ["click", "footer", "become_partner"],
        click_footer_become_career_expert: [
          "click",
          "footer",
          "become_career_expert",
        ],
        click_profession_guide_go_to_course: [
          "click",
          "profession-guide",
          "go-to-course",
        ],
        click_block_compare_compare_your_salary: [
          "click",
          "block-compare",
          "compare-your-salary",
        ],
        click_profession_main_page: ["click", "profession", "main_page"],
        send_feedback_submit: ["send", "feedback", "submit"],
        click_research_it_main_page: ["click", "research", "it_main_page"],
        click_banner_answer_and_know: ["click", "banner", "answer-and-know"],
        click_profession_catalog_page: ["click", "profession", "catalog_page"],
        form_start_course_click: ["form", "start_course", "click"],
        form_start_course_submit: ["form", "start_course", "submit"],
        click_vacancy: ["click", "vacancy"],
        click_profession_guide_tab_salary_vacancies: [
          "click",
          "profession-guide",
          "tab-salary-vacancies",
        ],
        click_profession_guide_tab_calculator: [
          "click",
          "profession-guide",
          "tab-calculator",
        ],
        click_profession_guide_tab_courses: [
          "click",
          "profession-guide",
          "tab-courses",
        ],
        click_profession_guide_tab_career_track: [
          "click",
          "profession-guide",
          "tab-career-track",
        ],
        click_header_courses_professions_skills: [
          "click",
          "header",
          "courses-professions-skills",
        ],
        click_courses_all_courses: ["click", "courses", "all-courses"],
        click_courses_courses_by_professions: [
          "click",
          "courses",
          "courses-by-professions",
        ],
        click_courses_courses_by_skills: [
          "click",
          "courses",
          "courses-by-skills",
        ],
        input_courses_search: ["input", "courses", "search"],
        submit_courses_search: ["submit", "courses", "search"],
        lk_clickButton_editLK: ["lk", "clickButton", "editLK"],
        lk_clickButton_editNaviki: ["lk", "clickButton", "editNaviki"],
        lk_inputRext_yourProffession: ["lk", "inputRext", "yourProffession"],
        lk_choose_grade: ["lk", "choose", "grade"],
        lk_clickButton_save: ["lk", "clickButton", "save"],
      };
      const s = (e, t) => {
        try {
          const [r, n, s] = e;
          o.default.sendEvent(r, n, s, undefined, t);
        } catch (e) {
          console.error("ERROR: cannot send event", e);
        }
      };
      const i = {
        reach: s,
        reachClickCourseFilter(e) {
          const { key: t, id: r, name: o } = e;
          return s(["click", "courses", t], {
            [`${t}_filter`]: o,
            id: r,
          });
        },
        reachInputCourseSearch: (e) => s(n.input_courses_search, e),
        reachSubmitCourseSearch: (e) => s(n.submit_courses_search, e),
      };
    },
    90333: function (e, t, r) {
      r.d(t, {
        co: () => i,
        Py: () => s,
        kL: () => a,
      });
      var o = r(94483);
      const n = (e) => {
        const t = {};
        const r = [
          "method",
          "sender",
          "hhtmFrom",
          "hhtmFromLabel",
          "hhtmSource",
          "hhtmSourceLabel",
          "screenName",
          "path",
        ];
        for (const o in e) {
          if (!r.includes(o)) {
            t[o] = e[o];
          }
        }
        return JSON.stringify(t);
      };
      const s = () => {
        return {
          ...((e =
            window.globalServiceVars.careerPlatformFront.analyticsParams),
          {
            hhtmFrom: e.hhtmFrom,
            hhtmFromLabel: e.hhtmFromLabel,
            hhtmSource: e.hhtmSource,
            hhtmSourceLabel: e.hhtmSourceLabel,
            screenName: e.screenName,
            path: e.path,
          }),
          screenShownParams: n(
            window.globalServiceVars.careerPlatformFront.analyticsParams,
          ),
        };
        var e;
      };
      const i = {
        ...o.H,
      };
      const a = o.R;
    },
    18495: function (e, t, r) {
      r.d(t, {
        q: () => o,
      });
      const o = "\xA0";
    },
    73520: function (e, t, r) {
      r.d(t, {
        T: () => m,
        XD: () => i,
        a7: () => u,
        nB: () => d,
        uf: () => a,
        zC: () => c,
      });
      var o = r(83245);
      var n = r(71081);
      var s = r(18495);
      const i = {
        [n.F.RUB]: "₽",
        [n.F.RUR]: "₽",
        [n.F.EUR]: "€",
        [n.F.USD]: "$",
      };
      const a = (e) =>
        (0, o.uf)(e.toString(), {
          groupSeparator: s.q,
        });
      const l = (e = n.F.RUB) => i[e] || i[n.F.RUB];
      const c = (e, t) => `${a(e)}${s.q}${l(t)}`;
      const d = (e, t) => [a(e), l(t)];
      const u = (e, t, r) => `${a(e)} – ${a(t)}${s.q}${l(r)}`;
      const m = (e, t, r) => {
        const n = [e.toString(), t.toString()].map((e) =>
          (0, o.uf)(e.slice(0, e.length - 3)),
        );
        return `${n[0]}–${n[1]} тыс.${s.q}${l(r)}`;
      };
    },
    66721: function (e, t, r) {
      r.d(t, {
        Z: () => o,
      });
      const o = (e, t, r, o) => {
        let n = `cp-${e}`;
        const s = (e, t) => {
          n = `${n}${e}${t}`;
        };
        if (t) {
          s("__", t);
        }
        if (r) {
          s("--", r);
        }
        if (o) {
          s("_", o);
        }
        return n;
      };
    },
    55744: function (e, t, r) {
      r.d(t, {
        Z: () => o,
      });
      const o = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    57960: function (e, t, r) {
      r.d(t, {
        Z: () => o,
      });
      const o = (e) => e.replace(/\.ts\d+\.pyn\.ru/gi, "");
    },
    38305: function (e, t, r) {
      r.d(t, {
        Z: () => o,
      });
      const o = (e) => {
        try {
          window.open(e, "_blank", "noreferrer,noopener");
        } catch {}
      };
    },
    14338: function (e, t, r) {
      r.d(t, {
        Z: () => ke,
      });
      var o = r(67294);
      var n = r(99794);
      var s = r(4040);
      var i = r.n(s);
      var a = r(15671);
      var l = r.n(a);
      var c = r(83770);
      var d = r.n(c);
      var u = r(37471);
      var m = r.n(u);
      var h = r(10933);
      var p = r(35838);
      var v = r(45991);
      var g = r(25166);
      var f = r(98566);
      var y = r(81708);
      var x = r(95318);
      var k = r(98651);
      var b = r(5771);
      var C = r(91393);
      var j = r(1714);
      var P = r(59218);
      var _ = r(41302);
      var S = r(65921);
      var E = r(38892);
      var A = r(17176);
      let N = (function (e) {
        e.Confirmed = "confirmed";
        e.Unconfirmed = "unconfirmed";
        return e;
      })({});
      var w = r(66721);
      var Z = r(48235);
      const L = async (e) => {
        const { data: t } = await Z.Z.post(
          "/shards/profile/post_change_profile_area",
          e,
        );
        return t;
      };
      const R = "button--r_vgCBZoO8ISY0WX";
      var I = r(85893);
      const F = ({ cityName: e, onClick: t }, r) =>
        (0, I.jsxs)("button", {
          className: R,
          onClick: t,
          role: "button",
          ref: r,
          "data-qa": (0, w.Z)("geo-location-button"),
          children: [(0, I.jsx)(C.PWw, {}), e],
        });
      F.displayName = "components/GeoLocationButton/index/GeoLocationButton";
      const z = (0, o.forwardRef)(F);
      var q = r(61489);
      var O = r(52854);
      var H = r(31369);
      var B = r(86872);
      var G = r(36812);
      var M = r(29524);
      var U = r(34250);
      var T = r(63797);
      var D = r(48441);
      var Q = r(45892);
      var W = r(56913);
      var $ = r(25067);
      const Y = async (e, t = {}) => {
        const { data: r } = await Z.Z.get("/shards/area/get_areas_suggest", {
          params: {
            search: e,
          },
          ...t,
        });
        return r.items;
      };
      var K;
      var X;
      var V;
      var J;
      function ee() {
        ee = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) {
                  if ({}.hasOwnProperty.call(r, o)) {
                    e[o] = r[o];
                  }
                }
              }
              return e;
            };
        return ee.apply(null, arguments);
      }
      const te = (e) =>
        o.createElement(
          "svg",
          ee(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 48,
              height: 48,
              fill: "none",
              viewBox: "0 0 48 48",
            },
            e,
          ),
          (K ||= o.createElement("path", {
            fill: "#F1F4F9",
            d: "M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24",
          })),
          o.createElement(
            "g",
            {
              clipPath: "url(#a)",
            },
            o.createElement(
              "mask",
              {
                id: "b",
                width: 24,
                height: 24,
                x: 12,
                y: 12,
                maskUnits: "userSpaceOnUse",
                style: {
                  maskType: "alpha",
                },
              },
              (X ||= o.createElement("path", {
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "m33 33-4.35-4.35M31 23a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
              })),
            ),
            (V ||= o.createElement(
              "g",
              {
                mask: "url(#b)",
              },
              o.createElement("path", {
                fill: "#AABBCA",
                d: "M12 12h24v24H12z",
              }),
            )),
          ),
          (J ||= o.createElement(
            "defs",
            null,
            o.createElement(
              "clipPath",
              {
                id: "a",
              },
              o.createElement("path", {
                fill: "#fff",
                d: "M12 12h24v24H12z",
              }),
            ),
          )),
        );
      const re = "container--ZiKFZ6m_iCkqbRYd";
      const oe =
        "career-platform.widgets.geo-location.search-empty-state.title";
      const ne =
        "career-platform.widgets.geo-location.search-empty-state.description";
      const se = ({ trls: e }) =>
        (0, I.jsxs)("div", {
          className: re,
          children: [
            (0, I.jsx)(te, {}),
            (0, I.jsx)(x.D, {
              alignment: "center",
              size: "small",
              description: e[ne],
              Element: "h6",
              children: e[oe],
            }),
          ],
        });
      se.displayName =
        "components/GeoLocationSearchEmptyState/index/GeoLocationSearchEmptyState";
      const ie = (0, v.Z)(se);
      const ae = "career-platform.widgets.geo-location.search-dialog.title";
      const le =
        "career-platform.widgets.geo-location.search-dialog.description";
      const ce = {
        placeholder:
          "career-platform.widgets.geo-location.search-dialog.input.placeholder",
      };
      const de = "change-geo-location";
      const ue = ({
        visible: e,
        selectedCity: t,
        onSelectCity: r,
        onClose: n,
        trls: s,
      }) => {
        const { isMobile: i, isXS: a } = (0, g.G)();
        const [l, c] = (0, S.Z)("");
        const [d, u] = (0, S.Z)($.Mr);
        const m = (0, o.useRef)(null);
        const h = (0, o.useRef)(null);
        const p = (0, o.useRef)(async (e) => {
          try {
            h.current = new AbortController();
            const r = await Y(e, {
              signal: h.current?.signal,
            });
            u(r);
          } catch {}
        });
        const v = (0, q.N)(p.current, 200);
        const f = () => {
          var e;
          v.cancel();
          if ((e = h.current) !== null && e !== undefined) {
            e.abort();
          }
        };
        (0, o.useEffect)(() => {
          f();
          if (l.length >= 2) {
            v(l);
          } else {
            u($.Mr);
          }
        }, [l]);
        (0, o.useEffect)(() => {
          c("");
        }, [e]);
        (0, o.useEffect)(() => () => f(), []);
        (0, o.useEffect)(() => {
          if (!e || a) {
            return () => {};
          }
          const t = setTimeout(() => {
            var e;
            if ((e = m.current) !== null && e !== undefined) {
              e.focus();
            }
          }, 200);
          return () => {
            clearTimeout(t);
          };
        }, [a, e]);
        const y = (0, I.jsx)(O.M, {
          ref: m,
          placeholder: s[ce.placeholder],
          value: l,
          clearable: true,
          onChange: c,
          tabIndex: 1,
          "data-qa": (0, w.Z)(de, "search"),
        });
        const x = d.length
          ? (0, I.jsx)(H.z, {
              default: 12,
              children: d.map((e) => {
                const o = t.id === e.id;
                const s = (0, I.jsx)(B.Y, {
                  checked: o,
                  readOnly: true,
                  tabIndex: -1,
                });
                return (0, I.jsx)(
                  G.g,
                  {
                    borderRadius: 16,
                    padding: 16,
                    type: "checkbox",
                    readOnly: true,
                    checked: o,
                    onClick: () =>
                      ((e) => {
                        r(e);
                        n();
                      })(e),
                    tabIndex: 2,
                    "data-qa": (0, w.Z)(
                      de,
                      "find-city",
                      e.id,
                      o ? "selected" : undefined,
                    ),
                    children: (0, I.jsx)(M.b, {
                      left: i ? undefined : s,
                      right: i ? s : undefined,
                      children: (0, I.jsx)(U.j, {
                        type: "title",
                        children: e.text,
                      }),
                    }),
                  },
                  e.id,
                );
              }),
            })
          : (0, I.jsx)(ie, {});
        if (i) {
          return (0, I.jsxs)(D.R, {
            visible: e,
            height: "full-screen",
            onClose: n,
            header: (0, I.jsx)(W.Z, {
              title: s[ae],
              options: y,
              right: (0, I.jsx)(W.f, {
                onClick: n,
              }),
            }),
            children: [
              x,
              (0, I.jsx)(Q.X, {
                default: 24,
              }),
            ],
          });
        } else {
          return (0, I.jsx)(T.u, {
            visible: e,
            size: "small",
            position: "right",
            height: "full-screen",
            title: s[ae],
            titleDescription: s[le],
            titleSize: "medium",
            titleElement: "h2",
            titleDescriptionStyle: "secondary",
            options: y,
            actions: (0, I.jsx)(C.Cs7, {
              onClick: n,
              initialColor: "secondary",
              "data-qa": (0, w.Z)(de, "close"),
            }),
            showOverlay: true,
            closeByClickOutside: true,
            onClose: n,
            children: x,
          });
        }
      };
      ue.displayName =
        "components/GeoLocationSearchDialog/index/GeoLocationSearchDialog";
      const me = (0, v.Z)(ue);
      const he = "banner-container--PHZTzwlhLS0ECKHq";
      const pe = "enabled_geo_location_button";
      const ve = {
        title: "career-platform.widgets.geo-location.confirm-city.title",
        description:
          "career-platform.widgets.geo-location.confirm-city.description",
        confirmButton:
          "career-platform.widgets.geo-location.confirm-city.confirm-button",
        changeButton:
          "career-platform.widgets.geo-location.confirm-city.change-button",
      };
      const ge = {
        changeCityError:
          "career-platform.widgets.geo-location.snack.change-city-error",
        confirmCityError:
          "career-platform.widgets.geo-location.snack.confirm-city-error",
      };
      const fe = "confirm-geo-location";
      const ye = [j.w4, j._X, j.oW];
      const xe = ({ type: e, trls: t }) => {
        const r = (0, P.Z)(pe);
        const { areaStatus: s, area: a, onPushQueryArea: c } = (0, A.Z)();
        const { isAuth: u } = (0, _.Z)();
        const { isMobile: v } = (0, g.G)();
        const { showSnack: j, hideSnack: Z } = (0, E.Z)();
        const R = (0, h.v)((e) => e.router.location);
        const [F, q] = (0, o.useState)(false);
        const [O, H] = (0, o.useState)(false);
        const [B, G] = (0, S.Z)(a);
        const M = (0, o.useRef)(null);
        const U = (0, n.useElementShown)(l(), {
          areaId: B.id,
          areaName: B.text,
        });
        const T = {
          title: (0, p.WU)(t[ve.title], {
            "{city}": B.text,
          }),
          description: t[ve.description],
          confirmButton: t[ve.confirmButton],
          changeButton: t[ve.changeButton],
        };
        const D = () => {
          H(false);
          q(true);
          m()();
        };
        const Q = async () => {
          try {
            await L({
              areaId: B.id,
              isAuth: u,
            });
            H(false);
            i()({
              buttonName: "correct_region",
              areaId: B.id,
              areaName: B.text,
            });
          } catch {
            j({
              children: t[ge.confirmCityError],
              addon: (0, I.jsx)(C.L1_, {
                initialColor: "negative",
              }),
              onClose: Z,
              showClose: true,
            });
          }
        };
        const W = () => {
          D();
          i()({
            buttonName: "wrong_region",
            areaId: B.id,
            areaName: B.text,
          });
        };
        (0, o.useEffect)(() => {
          const e = R.pathname.replace(
            /\/profession\/[^/]+/,
            "/profession/:id",
          );
          if (ye.some((t) => t === e) && s === N.Unconfirmed) {
            H(true);
          }
        }, [R.pathname, s]);
        if (r) {
          return (0, I.jsxs)(I.Fragment, {
            children: [
              e === "button" &&
                (0, I.jsxs)(I.Fragment, {
                  children: [
                    (0, I.jsx)(z, {
                      cityName: B.text,
                      onClick: () => D(),
                      ref: M,
                    }),
                    (0, I.jsx)(b.u, {
                      maxWidth: 400,
                      activatorRef: M,
                      visible: O,
                      placement: "bottom-right",
                      role: "tooltip",
                      autoFocusWhenOpened: false,
                      title: T.title,
                      buttons: () =>
                        (0, I.jsxs)(I.Fragment, {
                          children: [
                            (0, I.jsx)(f.z, {
                              stretched: true,
                              style: "constant",
                              mode: "primary",
                              size: "small",
                              onClick: Q,
                              "data-qa": (0, w.Z)(fe, "confirm"),
                              children: T.confirmButton,
                            }),
                            (0, I.jsx)(f.z, {
                              stretched: true,
                              style: "constant",
                              mode: "secondary",
                              size: "small",
                              onClick: W,
                              "data-qa": (0, w.Z)(fe, "change"),
                              children: T.changeButton,
                            }),
                          ],
                        }),
                      closeByClickOutside: false,
                      children: (0, I.jsx)("span", {
                        ref: U,
                        children: T.description,
                      }),
                    }),
                  ],
                }),
              e === "mobile-banner" &&
                v &&
                O &&
                (0, I.jsx)("div", {
                  className: he,
                  ref: U,
                  children: (0, I.jsx)(y.j, {
                    visible: O,
                    style: "constant",
                    size: "small",
                    stretched: true,
                    showClose: false,
                    "data-qa": (0, w.Z)(fe),
                    title: (0, I.jsx)(x.D, {
                      size: "small",
                      style: "contrast",
                      Element: "h6",
                      children: T.title,
                    }),
                    content: (0, I.jsx)(k.x, {
                      typography: "paragraph-2-regular",
                      style: "contrast",
                      Element: "p",
                      children: T.description,
                    }),
                    buttonBase: (0, I.jsx)(f.z, {
                      mode: "primary",
                      style: "accent",
                      size: "small",
                      stretched: true,
                      onClick: Q,
                      "data-qa": (0, w.Z)(fe, "confirm"),
                      children: T.confirmButton,
                    }),
                    buttonAdditional: (0, I.jsx)(f.z, {
                      mode: "secondary",
                      style: "constant",
                      size: "small",
                      onClick: W,
                      "data-qa": (0, w.Z)(fe, "change"),
                      children: T.changeButton,
                    }),
                  }),
                }),
              (0, I.jsx)(me, {
                visible: F,
                selectedCity: B,
                onSelectCity: async (e) => {
                  try {
                    G(e);
                    await L({
                      areaId: e.id,
                      isAuth: u,
                    });
                    d()({
                      areaId: e.id,
                      areaName: e.text,
                    });
                    c(e.id);
                  } catch {
                    j({
                      children: t[ge.changeCityError],
                      addon: (0, I.jsx)(C.L1_, {
                        initialColor: "negative",
                      }),
                      onClose: Z,
                      showClose: true,
                    });
                  }
                },
                onClose: () => q(false),
              }),
            ],
          });
        } else {
          return null;
        }
      };
      xe.displayName = "widgets/GeoLocation/index/GeoLocation";
      const ke = (0, v.Z)(xe);
    },
  },
]);
//# sourceMappingURL=443.2ed22847220f580b.js.map
