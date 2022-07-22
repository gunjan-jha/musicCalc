(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [133],
  {
    kwv3: function (e, t, a) {
      "use strict";
      a.d(t, {
        H: function () {
          return s;
        },
        Z: function () {
          return p;
        },
      });
      var n = a("qz7+"),
        r = a("zAkZ"),
        o = a("dIYy"),
        l = a("mMyr");
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                (0, r.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      const s = 200,
        d = 2 * s,
        m = { height: s, width: s },
        u = { height: d, width: d };
      function p(e) {
        let { src: t } = e,
          a = (0, o.Z)(e, ["src"]);
        return l.createElement(
          "picture",
          null,
          l.createElement("source", {
            media: "only screen and (-webkit-min-device-pixel-ratio: 2)",
            srcSet: h(t, c(c({}, u), {}, { format: "webp" })),
            type: "image/webp",
          }),
          l.createElement("source", {
            srcSet: h(t, c(c({}, m), {}, { format: "webp" })),
            type: "image/webp",
          }),
          l.createElement(
            "img",
            (0, n.Z)({}, a, {
              alt: a.alt,
              src: h(t, c(c({}, m), {}, { format: "jpeg" })),
            })
          )
        );
      }
      function h(e, t) {
        const a = new URL(e),
          n = new URLSearchParams();
        for (const [e, a] of Object.entries(t)) n.set(e, a.toString());
        return (a.search = n.toString()), a.toString();
      }
    },
    WLSN: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a("qz7+"),
        r = a("V0G3"),
        o = a("mMyr"),
        l = a("s28P"),
        i = a("X+uT");
      function c({ children: e, parentRef: t, placement: a, show: c }) {
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            l.Z,
            { placement: a, show: c, target: t },
            ({ props: t }) =>
              o.createElement(
                "div",
                (0, n.Z)({}, t, {
                  className:
                    r.default.dynamic([["52313450", [i.BO]]]) +
                    " " +
                    ((null != t.className && t.className) || "tooltip"),
                }),
                e
              )
          ),
          o.createElement(r.default, { id: "52313450", dynamic: [i.BO] }, [
            ".tooltip.__jsx-style-dynamic-selector{position:absolute;margin:20px;z-index:".concat(
              i.BO,
              ";max-width:500px;min-height:52px;padding:20px;background:white;border-radius:5px;box-shadow:6px 8px 42px 1px rgba(0,0,0,0.15);}"
            ),
          ])
        );
      }
    },
    r10C: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = a("mMyr"),
        r = a("s28P");
      function o({ children: e, overlay: t, placement: a }) {
        const [o, l] = (0, n.useState)(!1),
          i = (0, n.useRef)(null);
        return n.createElement(
          "span",
          {
            onClick: () => l(!0),
            ref: i,
            style: { display: "inline-block", cursor: "pointer" },
          },
          e,
          n.createElement(
            r.Z,
            {
              onHide: () => l(!1),
              placement: a,
              rootClose: !0,
              show: o,
              target: i,
            },
            ({ props: e }) => n.cloneElement(t, e)
          )
        );
      }
    },
    PQRQ: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return xt;
          },
        });
      var n = a("qz7+"),
        r = a("V0G3"),
        o = a("mMyr"),
        l = a("08dd"),
        i = a("ZA90"),
        c = a("VpZD"),
        s = a("ePkS"),
        d = a("sZSS"),
        m = a("Ti+5"),
        u = a("Br/x"),
        p = a("fxCs"),
        h = a("x6xb"),
        f = a("qBDi"),
        y = a("t9Vv"),
        x = a("X+uT");
      var b = ({ children: e }) =>
          o.createElement(
            o.Fragment,
            null,
            e,
            o.createElement(
              r.default,
              { id: "915648197", dynamic: [x.e4, x.az] },
              [
                ".promo-global-width.promo-global-width{width:calc(50% - 150px / 2);}",
                "@media only screen and (min-width:".concat(
                  x.e4,
                  "){.promo-global-width.promo-global-width{width:calc(50% - 290px / 2);}}"
                ),
                "@media only screen and (min-width:".concat(
                  x.az,
                  "){.promo-global-width.promo-global-width{width:calc(50% - 440px / 2);}}"
                ),
              ]
            )
          ),
        g = a("rY7X"),
        E = a("ORUL"),
        w = a("eIGu"),
        v = a("xV9W"),
        k = a("hGF1"),
        C = a("yUIt"),
        _ = a("nwB1"),
        N = a("zAkZ"),
        j = a("HtOW"),
        Z = a("rpMS");
      class O extends o.Component {
        constructor(...e) {
          super(...e),
            (0, N.Z)(this, "renderContent", ({ theme: e }) => {
              const { seeOtherGroups: t } = this.props.calculator;
              return !(null === t || void 0 === t || !t.length)
                ? o.createElement(
                    o.Fragment,
                    null,
                    this.renderSeeOtherGroups(e)
                  )
                : null;
            });
        }
        renderSeeOtherGroups(e) {
          const { seeOtherGroups: t } = this.props.calculator;
          return (
            t &&
            t.map((t, a) =>
              o.createElement(
                "div",
                { key: t.id || a, className: "jsx-3789313294 see-other-group" },
                o.createElement(j.Z, {
                  calculator: this.props.calculator,
                  seeOtherGroup: t,
                  theme: e,
                }),
                o.createElement(r.default, { id: "3789313294" }, [
                  ".see-other-group.jsx-3789313294{margin-top:20px;}",
                ])
              )
            )
          );
        }
        render() {
          return o.createElement(Z.Sf, null, this.renderContent);
        }
      }
      var P = a("zP8F"),
        z = a("r10C"),
        A = a("JwTp"),
        S = a("jqS2"),
        L = a("P0d3"),
        R = a("zZe8"),
        T = a("jB2u");
      const M = "#adadad",
        F = "5px";
      var q = a("05Iz"),
        D = a("rGxC");
      const I = (0, q.once)(() => {
          (0, D.V0)("share result completed (once per session)");
        }),
        G = (0, q.once)(() => {
          (0, D.V0)("share result copy button clicked"), I();
        }),
        V = (0, q.once)(() => {
          (0, D.V0)("share result input clicked"), I();
        }),
        H = ["mailto", "facebook", "twitter", "linkedin"];
      class B extends o.Component {
        constructor(...e) {
          super(...e),
            (0, N.Z)(this, "state", { useClipboardApi: !1 }),
            (0, N.Z)(this, "linkInput", o.createRef()),
            (0, N.Z)(this, "copyLinkToClipboard", () => {
              (0, R.vQ)(this.linkInput.current);
              const e = this.state.useClipboardApi
                  ? "Link copied to your clipboard"
                  : "Link selected",
                { addNotification: t } = this.props;
              t && t(e);
            }),
            (0, N.Z)(this, "handleCopy", () => {
              G(), this.copyLinkToClipboard();
            }),
            (0, N.Z)(this, "handleInputClicked", () => {
              V(), this.copyLinkToClipboard();
            });
        }
        componentDidMount() {
          this.setState({ useClipboardApi: (0, R.Wi)() });
        }
        render() {
          const {
            analyticsActionSuffix: e,
            sharePath: t,
            title: a,
          } = this.props;
          return o.createElement(
            "div",
            {
              className:
                r.default.dynamic([
                  ["3650706566", [F, L.KE, F, F, F, M, F, F]],
                ]) + " ShareResultContent",
            },
            o.createElement(
              "div",
              {
                className:
                  r.default.dynamic([
                    ["3650706566", [F, L.KE, F, F, F, M, F, F]],
                  ]) + " main",
              },
              o.createElement(
                "div",
                {
                  className:
                    r.default.dynamic([
                      ["3650706566", [F, L.KE, F, F, F, M, F, F]],
                    ]) + " share-via",
                },
                "Share via"
              ),
              o.createElement(T.Z, {
                additionalGAEvent: I,
                analyticsActionSuffix: e,
                iconsOrder: H,
                sharingTitle: a,
                size: "big",
                targetShareUrl: t,
              })
            ),
            o.createElement("input", {
              onClick: this.handleInputClicked,
              readOnly: !0,
              ref: this.linkInput,
              type: "text",
              value: "".concat(S.s5).concat(t),
              className:
                r.default.dynamic([
                  ["3650706566", [F, L.KE, F, F, F, M, F, F]],
                ]) + " link-input",
            }),
            o.createElement(
              "div",
              {
                className:
                  r.default.dynamic([
                    ["3650706566", [F, L.KE, F, F, F, M, F, F]],
                  ]) + " copy",
              },
              o.createElement(
                "button",
                {
                  onClick: this.handleCopy,
                  className:
                    r.default.dynamic([
                      ["3650706566", [F, L.KE, F, F, F, M, F, F]],
                    ]) + " copy-button",
                },
                this.state.useClipboardApi ? "COPY" : "SELECT"
              )
            ),
            o.createElement(
              r.default,
              { id: "3650706566", dynamic: [F, L.KE, F, F, F, M, F, F] },
              [
                ".ShareResultContent.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;padding:24px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:40px;background-color:#b3b3b3;border-radius:".concat(
                  F,
                  ";}"
                ),
                ".main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:412px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:white;}",
                ".share-via.__jsx-style-dynamic-selector{margin-left:15px;margin-right:10px;}",
                ".link-input.__jsx-style-dynamic-selector{height:40px;padding:0 12px;margin-top:17px;font-size:14px;font-weight:"
                  .concat(
                    L.KE,
                    ";color:white;border:1px solid #adadad;border-top-right-radius:"
                  )
                  .concat(F, ";border-top-left-radius:")
                  .concat(F, ";border-bottom-left-radius:")
                  .concat(F, ";background-color:#c7c7c7;}"),
                ".copy.__jsx-style-dynamic-selector{text-align:right;line-height:1;}",
                ".copy-button.__jsx-style-dynamic-selector{padding:4px 8px;font-size:14px;color:white;background-color:#c7c7c7;border:1px solid "
                  .concat(M, ";border-top:none;border-bottom-right-radius:")
                  .concat(F, ";border-bottom-left-radius:")
                  .concat(F, ";}"),
              ]
            )
          );
        }
      }
      class $ extends o.Component {
        render() {
          var e;
          const {
            addNotification: t,
            calculator: a,
            sharePath: n,
          } = this.props;
          if (!n) return null;
          const l =
            "DEFAULT" === a.kind ? "Send this result" : "Share your result";
          return o.createElement(
            z.Z,
            {
              overlay: o.createElement(
                "div",
                {
                  className:
                    r.default.dynamic([["2349349318", [x.L4]]]) +
                    " ShareResultDialog",
                },
                o.createElement(B, {
                  addNotification: t,
                  analyticsActionSuffix: "result",
                  sharePath: n,
                  title:
                    null === (e = a.text) || void 0 === e ? void 0 : e.title,
                })
              ),
              placement: "right",
            },
            o.createElement(P.Z, null, l),
            o.createElement(r.default, { id: "2349349318", dynamic: [x.L4] }, [
              ".ShareResultDialog.__jsx-style-dynamic-selector{position:absolute;width:550px;height:178px;z-index:".concat(
                x.L4,
                ";}"
              ),
            ])
          );
        }
      }
      class K extends o.Component {
        render() {
          return o.createElement(A.dB, null, (e) =>
            o.createElement(
              $,
              (0, n.Z)({}, this.props, {
                addNotification: e && e.addNotification,
              })
            )
          );
        }
      }
      function U({
        calculationEngine: e,
        calculator: t,
        sharePath: a,
        topOffset: l,
      }) {
        const i = (0, o.useRef)(null),
          c = (0, o.useRef)(0),
          s = (0, C.mG)();
        return (
          (0, o.useEffect)(() => {
            if (s) return;
            const e = (0, k.Z)(() => {
              if (null === i || void 0 === i || !i.current) return;
              const e = window.pageYOffset;
              if (e <= l) return void (i.current.scrollTop = 0);
              if (c.current === e) return;
              const t = -(c.current - e);
              (i.current.scrollTop += t), (c.current = e);
            });
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              () => {
                e.cancel(), window.removeEventListener("scroll", e, !1);
              }
            );
          }, [s, l]),
          o.createElement(
            "div",
            {
              ref: i,
              className:
                r.default.dynamic([["1985549588", [x.$i, x.$i]]]) +
                " CalculatorContainer",
            },
            o.createElement(
              "div",
              {
                className:
                  r.default.dynamic([["1985549588", [x.$i, x.$i]]]) + " inner",
              },
              o.createElement(
                _.Z,
                (0, n.Z)(
                  {
                    inlineShareOverlay: o.createElement(K, {
                      calculator: t,
                      sharePath: a,
                    }),
                  },
                  e
                )
              ),
              o.createElement(O, { calculator: t }),
              o.createElement("div", {
                className:
                  r.default.dynamic([["1985549588", [x.$i, x.$i]]]) +
                  " bottomPadding",
              })
            ),
            o.createElement(
              r.default,
              { id: "1985549588", dynamic: [x.$i, x.$i] },
              [
                ".CalculatorContainer.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:"
                  .concat(x.$i, ";height:calc(101vh - ")
                  .concat(
                    x.$i,
                    ");min-height:400px;margin-left:-30px;margin-right:-30px;overflow-y:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}"
                  ),
                ".CalculatorContainer.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;width:0;height:0;}",
                ".inner.__jsx-style-dynamic-selector{width:100%;height:100%;padding-left:30px;padding-right:30px;}",
                ".bottomPadding.__jsx-style-dynamic-selector{padding-bottom:40px;}",
              ]
            )
          )
        );
      }
      var Q = a("x6xd"),
        Y = a("H6vK"),
        W = a("Gp91"),
        J = a("kwv3"),
        X = a("WLSN");
      const ee = "120px";
      function te({ contributor: e, plain: t }) {
        const a = (0, o.useRef)(null),
          [n, l] = (0, o.useState)(!1),
          { theme: i } = (0, Z.Fg)(),
          { firstName: c, lastName: s, bio: d, portraitImageUrl: m } = e,
          u = !!c && !!s && !!d,
          p = "".concat(c, " ").concat(s);
        return o.createElement(
          "span",
          {
            onMouseEnter: () => {
              l(!0);
            },
            onMouseLeave: () => {
              l(!1);
            },
            ref: a,
            className: r.default.dynamic([
              ["972235979", [ee, ee, i.baseColor]],
            ]),
          },
          o.createElement(E.C, { contributor: e, dotted: u, plain: t }),
          u &&
            o.createElement(
              X.Z,
              { parentRef: a, placement: "bottom", show: n },
              o.createElement(
                o.Fragment,
                null,
                m &&
                  o.createElement(J.Z, {
                    alt: p,
                    className: "HoverableAuthor__tooltip-face",
                    src: m,
                  }),
                o.createElement(
                  "h2",
                  {
                    className:
                      r.default.dynamic([
                        ["972235979", [ee, ee, i.baseColor]],
                      ]) + " tooltip-header",
                  },
                  p
                ),
                o.createElement(
                  "p",
                  {
                    className:
                      r.default.dynamic([
                        ["972235979", [ee, ee, i.baseColor]],
                      ]) + " tooltip-text",
                  },
                  d
                )
              )
            ),
          o.createElement(
            r.default,
            { id: "972235979", dynamic: [ee, ee, i.baseColor] },
            [
              ".HoverableAuthor__tooltip-face{float:left;width:"
                .concat(ee, ";height:")
                .concat(ee, ";margin-right:10px;border:1px solid ")
                .concat(i.baseColor, ";border-radius:50%;}"),
              ".tooltip-header.__jsx-style-dynamic-selector{margin-top:0;}",
              ".tooltip-text.__jsx-style-dynamic-selector{margin-bottom:0;}",
            ]
          )
        );
      }
      function ae({ authors: e, reviewers: t, sources: a }) {
        if (0 === e.length) return null;
        const n = a.length > 0;
        return o.createElement(
          "div",
          null,
          o.createElement(E.Z, {
            authors: e,
            contributorComponent: te,
            reviewers: t,
          }),
          n && o.createElement(W.Z, { sources: a })
        );
      }
      var ne = a("9LvU"),
        re = a("kmtT");
      var oe = a("u61m"),
        le = a("2eGQ"),
        ie = a("GN2t");
      const ce = (0, oe.Z)({
        iconFilled: { color: "#ff6d75" },
        iconHover: { color: "#ff3d47" },
      })(ie.Z);
      function se({ isEditable: e, onChange: t, value: a }) {
        return o.createElement(ce, {
          icon: o.createElement(le.Z, { fontSize: "inherit" }),
          name: "RatingComponent",
          onChange: e ? t : q.noop,
          precision: e ? 1 : 0.5,
          size: "large",
          value: a,
        });
      }
      var de = a("s28P");
      function me({
        onCastAVote: e,
        onHide: t,
        outerRef: a,
        show: l,
        value: i,
      }) {
        const { theme: c } = (0, Z.Fg)(),
          s = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          var e;
          l && (null === (e = s.current) || void 0 === e || e.focus());
        }, [l, i]);
        const d = () => {
          var t;
          e(
            (null === (t = s.current) || void 0 === t ? void 0 : t.value) || ""
          );
        };
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            de.Z,
            {
              onHide: t,
              placement: "bottom",
              rootClose: !0,
              show: l,
              target: a,
            },
            ({ props: e }) =>
              o.createElement(
                "div",
                (0, n.Z)({}, e, {
                  className:
                    r.default.dynamic([
                      ["3651937165", [x.BO]],
                      ["517057355", [c.baseColor]],
                    ]) +
                    " " +
                    ((null != e.className && e.className) || "RatingFeedback"),
                }),
                o.createElement(
                  "span",
                  {
                    className:
                      r.default.dynamic([
                        ["3651937165", [x.BO]],
                        ["517057355", [c.baseColor]],
                      ]) + " header",
                  },
                  (0, re.zh)(i)
                ),
                o.createElement("textarea", {
                  ref: s,
                  className:
                    r.default.dynamic([
                      ["3651937165", [x.BO]],
                      ["517057355", [c.baseColor]],
                    ]) + " feedback",
                }),
                o.createElement(
                  "div",
                  {
                    className: r.default.dynamic([
                      ["3651937165", [x.BO]],
                      ["517057355", [c.baseColor]],
                    ]),
                  },
                  o.createElement(
                    "button",
                    {
                      onClick: d,
                      className:
                        r.default.dynamic([
                          ["3651937165", [x.BO]],
                          ["517057355", [c.baseColor]],
                        ]) + " castAVote",
                    },
                    "cast a vote"
                  )
                )
              )
          ),
          o.createElement(r.default, { id: "3651937165", dynamic: [x.BO] }, [
            ".RatingFeedback.__jsx-style-dynamic-selector{z-index:".concat(
              x.BO,
              ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:321px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;background:white;border-radius:5px;box-shadow:6px 8px 42px 1px rgba(0,0,0,0.15);}"
            ),
            ".header.__jsx-style-dynamic-selector{margin-bottom:10px;}",
            ".feedback.__jsx-style-dynamic-selector{border:0.5px solid gray;outline:none;}",
            ".castAVote.__jsx-style-dynamic-selector{float:right;padding:0 12px;margin-top:15px;color:white;border-radius:18px;}",
          ]),
          o.createElement(
            r.default,
            { id: "517057355", dynamic: [c.baseColor] },
            [
              ".castAVote.__jsx-style-dynamic-selector{background-color:".concat(
                c.baseColor,
                ";}"
              ),
            ]
          )
        );
      }
      function ue(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(a), !0).forEach(function (t) {
                (0, N.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ue(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function he(e, t) {
        switch (t.type) {
          case "ALLOW_RATING":
            return pe(pe({}, e), {}, { allowRating: t.allow });
          case "CHANGE":
            return pe(
              pe({}, e),
              {},
              { isSet: !0, possibleValue: t.possibleValue, showOverlay: !0 }
            );
          case "CONFIRM":
            return pe(pe({}, e), {}, { showOverlay: !1 });
          case "HIDE_OVERLAY":
            return pe(pe({}, e), {}, { possibleValue: 0, showOverlay: !1 });
          default:
            throw new Error("Unsupported reducer action type");
        }
      }
      var fe = (0, re.RQ)(
          function ({ calculator: e }) {
            const {
                averageRating: t,
                currentUserRated: a,
                onChange: n,
                onConfirm: l,
                ratingsCount: i,
                value: c,
              } = (0, re.Zb)(e),
              s = {
                allowRating: !1,
                isSet: a,
                possibleValue: 0,
                showOverlay: !1,
              },
              [d, m] = (0, o.useReducer)(he, s),
              u = (function () {
                const e = (0, o.useContext)(A.cJ);
                return (
                  (null === e || void 0 === e ? void 0 : e.addNotification) ||
                  q.noop
                );
              })(),
              p = (0, o.useRef)(null),
              h = d.allowRating || d.showOverlay,
              f = d.isSet
                ? ""
                : "Please rate this calculator. The authors would love to know what you think about it! ",
              y = (0, re.Vh)(i)
                ? "Current rating: ".concat(t, " (").concat(i, " votes)")
                : "No average rating available yet - not enough votes.";
            return o.createElement(
              "div",
              {
                onMouseEnter: () => {
                  m({ type: "ALLOW_RATING", allow: !0 });
                },
                onMouseLeave: () => {
                  m({ type: "ALLOW_RATING", allow: !1 });
                },
                ref: p,
                className: "jsx-305545760 Rating",
              },
              o.createElement(
                ne.ZP,
                { placement: "right", title: "".concat(f).concat(y) },
                o.createElement(
                  "div",
                  { className: "jsx-305545760 tooltip-inner" },
                  o.createElement(se, {
                    isEditable: h,
                    onChange: async (e, t) => {
                      if (t) {
                        try {
                          const e = await n(t);
                          if (null !== e && void 0 !== e && e.error)
                            return void u(e.error);
                        } catch (e) {
                          return void u(re.vc);
                        }
                        m({ type: "CHANGE", possibleValue: t });
                      }
                    },
                    value: h ? d.possibleValue : c,
                  })
                )
              ),
              o.createElement(me, {
                onCastAVote: async (e) => {
                  try {
                    const t = await l(d.possibleValue, e);
                    if (null !== t && void 0 !== t && t.error)
                      return void u(t.error);
                  } catch (e) {
                    return void u(re.vc);
                  }
                  m({ type: "CONFIRM" }),
                    u(
                      "Thank you. It's important for us to know what you think ❤️"
                    );
                },
                onHide: () => {
                  m({ type: "HIDE_OVERLAY" });
                },
                outerRef: p,
                show: d.showOverlay,
                value: c,
              }),
              o.createElement(r.default, { id: "305545760" }, [
                ".Rating.jsx-305545760{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:154px;height:33px;margin-bottom:15px;}",
                ".tooltip-inner.jsx-305545760{width:100%;height:100%;}",
              ])
            );
          },
          function () {
            return o.createElement(
              "div",
              { className: "jsx-1627134633 Rating-placeholder" },
              o.createElement(r.default, { id: "1627134633" }, [
                ".Rating-placeholder.jsx-1627134633{height:33px;margin-bottom:15px;}",
              ])
            );
          }
        ),
        ye = a("38a/");
      const xe = 2;
      function be({ calculator: e }) {
        const { authors: t, reviewers: a, sources: n, text: l } = e,
          i =
            null != (null === l || void 0 === l ? void 0 : l.tableOfContents) &&
            (null === l || void 0 === l ? void 0 : l.tableOfContents.length) >=
              xe,
          c = !i && (null === l || void 0 === l ? void 0 : l.description),
          s = (0, Q.Z)(new Date(e.lastUpdatedAt), "MMM dd, yyyy");
        return o.createElement(
          "section",
          { className: "jsx-4179227851 CalculatorDetails" },
          o.createElement(
            ye.Z,
            null,
            o.createElement(
              "h1",
              { className: "jsx-4179227851 title" },
              null === l || void 0 === l ? void 0 : l.title
            ),
            o.createElement(ae, { authors: t, reviewers: a, sources: n }),
            e.lastUpdatedAt &&
              o.createElement(
                "div",
                { className: "jsx-4179227851 last-updated" },
                "Last updated: ",
                s
              ),
            o.createElement(fe, { calculator: e, key: e.slug || "" }),
            c &&
              o.createElement(
                "div",
                { className: "jsx-4179227851 description-container" },
                o.createElement(
                  "section",
                  { className: "jsx-4179227851 description" },
                  l.description
                )
              ),
            i &&
              o.createElement(
                "div",
                { className: "jsx-4179227851 table-of-contents-container" },
                o.createElement(Y.Z, { tableOfContents: l.tableOfContents })
              )
          ),
          o.createElement(r.default, { id: "4179227851" }, [
            ".description.jsx-4179227851{display:inline;}",
            ".description-container.jsx-4179227851,.table-of-contents-container.jsx-4179227851{margin-bottom:1em;}",
            ".last-updated.jsx-4179227851{font-size:14px;margin-bottom:15px;}",
            ".title.jsx-4179227851{margin-top:0;margin-bottom:0;}",
          ])
        );
      }
      function ge({ children: e }) {
        return o.createElement(
          "div",
          {
            className:
              r.default.dynamic([["436554211", [x.FJ, x.q3]]]) +
              " CalculatorPagePartCenter",
          },
          e,
          o.createElement(
            r.default,
            { id: "436554211", dynamic: [x.FJ, x.q3] },
            [
              ".CalculatorPagePartCenter.__jsx-style-dynamic-selector{max-width:"
                .concat(x.FJ, ";-webkit-flex:1;-ms-flex:1;flex:1;margin:0 ")
                .concat(x.q3, ";overflow-x:auto;}"),
            ]
          )
        );
      }
      function Ee({ children: e, style: t }) {
        return o.createElement(
          "div",
          {
            style: t,
            className:
              r.default.dynamic([["3357738618", [x.QS, x.zm, x.q3]]]) +
              " CalculatorPagePartLeft",
          },
          e,
          o.createElement(
            r.default,
            { id: "3357738618", dynamic: [x.QS, x.zm, x.q3] },
            [
              ".CalculatorPagePartLeft.__jsx-style-dynamic-selector{min-width:"
                .concat(x.QS, ";max-width:")
                .concat(x.zm, ";-webkit-flex:1;-ms-flex:1;flex:1;margin-right:")
                .concat(x.q3, ";}"),
            ]
          )
        );
      }
      function we({ children: e }) {
        return o.createElement(
          "div",
          {
            className:
              r.default.dynamic([["2296064929", [x.q3, x.e4, x.az]]]) +
              " CalculatorPagePartRight",
          },
          e,
          o.createElement(
            r.default,
            { id: "2296064929", dynamic: [x.q3, x.e4, x.az] },
            [
              ".CalculatorPagePartRight.__jsx-style-dynamic-selector{min-height:1px;width:120px;min-width:120px;margin-left:".concat(
                x.q3,
                ";}"
              ),
              "@media only screen and (min-width:".concat(
                x.e4,
                "){.CalculatorPagePartRight.__jsx-style-dynamic-selector{width:160px;min-width:160px;}}"
              ),
              "@media only screen and (min-width:".concat(
                x.az,
                "){.CalculatorPagePartRight.__jsx-style-dynamic-selector{width:300px;min-width:300px;}}"
              ),
            ]
          )
        );
      }
      var ve = a("as/X"),
        ke = a("pQoQ"),
        Ce = a("+FTp"),
        _e = a("PZHW"),
        Ne = a("nIjQ"),
        je = a("/gZH");
      function Ze({ className: e }) {
        return (
          (0, o.useEffect)(
            () => (
              document.body.classList.add(e),
              () => {
                document.body.classList.remove(e);
              }
            ),
            [e]
          ),
          null
        );
      }
      var Oe = a("qo9F"),
        Pe = a.n(Oe);
      const ze = new Set(["Escape", "Esc"]);
      class Ae extends o.Component {
        constructor(...e) {
          super(...e),
            (0, N.Z)(this, "handleKeyDown", (e) => {
              ze.has(e.key) && this.props.onEscape();
            });
        }
        componentDidMount() {
          window.addEventListener("keydown", this.handleKeyDown, !1);
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleKeyDown, !1);
        }
        render() {
          return null;
        }
      }
      (0, N.Z)(Ae, "propTypes", { onEscape: Pe().func.isRequired });
      var Se = a("udO7");
      function Le({ children: e, show: t }) {
        return o.createElement(
          Se.Z,
          {
            appear: !0,
            classNames: "introduction",
            exit: !0,
            in: t,
            timeout: { appear: 370, exit: 500 },
            unmountOnExit: !0,
          },
          o.createElement(
            "div",
            {
              className:
                r.default.dynamic([["846093705", [x.lO]]]) +
                " animation-container",
            },
            o.createElement(
              "div",
              {
                className:
                  r.default.dynamic([["846093705", [x.lO]]]) +
                  " content-container",
              },
              e
            ),
            o.createElement(r.default, { id: "846093705", dynamic: [x.lO] }, [
              ".animation-container.__jsx-style-dynamic-selector{position:relative;z-index:".concat(
                x.lO,
                ";}"
              ),
              ".introduction-appear.__jsx-style-dynamic-selector{top:-550px;}",
              ".introduction-appear-active.__jsx-style-dynamic-selector{-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:370ms;transition-duration:370ms;-webkit-transform:translateY(550px);-ms-transform:translateY(550px);transform:translateY(550px);}",
              ".introduction-exit-active.__jsx-style-dynamic-selector{-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:100ms;transition-duration:100ms;-webkit-transform:translateY(50px);-ms-transform:translateY(50px);transform:translateY(50px);}",
              ".introduction-exit-active.__jsx-style-dynamic-selector .content-container.__jsx-style-dynamic-selector{-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-delay:130ms;transition-delay:130ms;-webkit-transition-duration:370ms;transition-duration:370ms;-webkit-transform:translateY(-600px);-ms-transform:translateY(-600px);transform:translateY(-600px);}",
            ])
          )
        );
      }
      var Re = a("/We2");
      const Te = "5px";
      class Me extends o.Component {
        constructor(...e) {
          super(...e),
            (0, N.Z)(this, "handleClose", () => {
              this.props.onClose();
            }),
            (0, N.Z)(this, "renderContent", ({ themeName: e }) => {
              const { calculatorTitle: t } = this.props;
              return o.createElement(
                ye.Z,
                null,
                o.createElement(
                  "div",
                  {
                    className:
                      r.default.dynamic([
                        ["3952268418", [Te, Te, Te, Te, Te]],
                        ["3293575014", [(0, Re.Z)(e)]],
                      ]) + " IntroductionContent",
                  },
                  o.createElement(
                    "div",
                    {
                      className:
                        r.default.dynamic([
                          ["3952268418", [Te, Te, Te, Te, Te]],
                          ["3293575014", [(0, Re.Z)(e)]],
                        ]) + " top",
                    },
                    o.createElement(
                      "div",
                      {
                        className:
                          r.default.dynamic([
                            ["3952268418", [Te, Te, Te, Te, Te]],
                            ["3293575014", [(0, Re.Z)(e)]],
                          ]) + " header h2-like",
                      },
                      "Hello!"
                    ),
                    o.createElement(
                      "div",
                      {
                        className: r.default.dynamic([
                          ["3952268418", [Te, Te, Te, Te, Te]],
                          ["3293575014", [(0, Re.Z)(e)]],
                        ]),
                      },
                      "This is the ",
                      t,
                      ". Start by entering some numbers."
                    )
                  ),
                  o.createElement(
                    "div",
                    {
                      className:
                        r.default.dynamic([
                          ["3952268418", [Te, Te, Te, Te, Te]],
                          ["3293575014", [(0, Re.Z)(e)]],
                        ]) + " bottom",
                    },
                    o.createElement(
                      "b",
                      {
                        className: r.default.dynamic([
                          ["3952268418", [Te, Te, Te, Te, Te]],
                          ["3293575014", [(0, Re.Z)(e)]],
                        ]),
                      },
                      "Tip:"
                    ),
                    " You don't need to go from the top to the bottom.",
                    o.createElement("br", {
                      className: r.default.dynamic([
                        ["3952268418", [Te, Te, Te, Te, Te]],
                        ["3293575014", [(0, Re.Z)(e)]],
                      ]),
                    }),
                    "You can calculate anything, in any order."
                  ),
                  o.createElement(
                    "button",
                    {
                      onClick: this.handleClose,
                      className:
                        r.default.dynamic([
                          ["3952268418", [Te, Te, Te, Te, Te]],
                          ["3293575014", [(0, Re.Z)(e)]],
                        ]) + " close",
                    },
                    "×"
                  ),
                  o.createElement("div", {
                    className:
                      r.default.dynamic([
                        ["3952268418", [Te, Te, Te, Te, Te]],
                        ["3293575014", [(0, Re.Z)(e)]],
                      ]) + " triangle-left",
                  })
                ),
                o.createElement(
                  r.default,
                  { id: "3952268418", dynamic: [Te, Te, Te, Te, Te] },
                  [
                    ".IntroductionContent.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:400px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:".concat(
                      Te,
                      ";box-shadow:6px 8px 42px 1px rgba(0,0,0,0.15);}"
                    ),
                    ".top.__jsx-style-dynamic-selector{padding:1.5rem 50px;background-color:white;border-top-right-radius:"
                      .concat(Te, ";border-top-left-radius:")
                      .concat(Te, ";}"),
                    ".header.__jsx-style-dynamic-selector{margin-bottom:1rem;}",
                    ".bottom.__jsx-style-dynamic-selector{padding:1rem 50px;font-size:12px;color:white;border-bottom-right-radius:"
                      .concat(Te, ";border-bottom-left-radius:")
                      .concat(Te, ";}"),
                    ".close.__jsx-style-dynamic-selector{position:absolute;top:-8px;right:14px;font-size:32px;}",
                    ".triangle-left.__jsx-style-dynamic-selector{position:absolute;top:60px;left:-30px;width:30px;height:0;padding-top:30px;padding-bottom:30px;overflow:hidden;}",
                    ".triangle-left.__jsx-style-dynamic-selector:after{content:'';display:block;width:0;height:0;margin-top:-500px;border-top:500px solid transparent;border-bottom:500px solid transparent;border-right:500px solid white;box-shadow:6px 8px 42px 1px rgba(0,0,0,0.15);}",
                  ]
                ),
                o.createElement(
                  r.default,
                  { id: "3293575014", dynamic: [(0, Re.Z)(e)] },
                  [
                    ".bottom.__jsx-style-dynamic-selector{background-image:".concat(
                      (0, Re.Z)(e),
                      ";}"
                    ),
                  ]
                )
              );
            });
        }
        render() {
          return o.createElement(Z.Sf, null, this.renderContent);
        }
      }
      function Fe(e, t) {
        var a;
        return (
          (null === (a = document.querySelector(t)) || void 0 === a
            ? void 0
            : a.contains(e.target)) || !1
        );
      }
      function qe({ onClick: e }) {
        return (
          (0, o.useEffect)(() => {
            const t = (t) => {
              const a = Fe(t, ".IntroductionModal"),
                n = Fe(t, ".Calculator");
              a || n || (Fe(t, "#app") && e());
            };
            return (
              window.addEventListener("click", t, !1),
              () => {
                window.removeEventListener("click", t, !1);
              }
            );
          }, [e]),
          null
        );
      }
      const De = 52704e5;
      function Ie({ calculatorTitle: e }) {
        const [t, a] = (0, o.useState)(!1),
          n = (0, Ne.Z)();
        (0, o.useEffect)(() => {
          _e.Ry(je.xk, De) || (a(!0), _e.lH(je.xk));
        }, []);
        const l = (0, o.useCallback)(() => {
          a(!1);
        }, []);
        if (!n) return null;
        return o.createElement(
          "div",
          { className: "jsx-2582271684 IntroductionModal" },
          o.createElement(
            "div",
            { className: "jsx-2582271684 inner" },
            o.createElement(
              Le,
              { show: t },
              o.createElement(Me, { calculatorTitle: e, onClose: l })
            ),
            t &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(Ze, { className: "introduction-modal-shown" }),
                o.createElement(Ce.Z, {
                  onAction: (e) => {
                    e.action.type === ke.WE && a(!1);
                  },
                }),
                o.createElement(Ae, { onEscape: l }),
                o.createElement(qe, { onClick: l })
              )
          ),
          o.createElement(r.default, { id: "2582271684" }, [
            ".IntroductionModal.jsx-2582271684{position:relative;}",
            ".inner.jsx-2582271684{position:absolute;top:30px;left:-10px;}",
          ])
        );
      }
      var Ge = a("UgVM");
      var Ve = ({ themeName: e }) => {
          const t = (0, Re.Z)(e);
          return o.createElement(
            "div",
            {
              className:
                r.default.dynamic([["3871845263", [x.bb, x.q3]]]) +
                " LeadImage promo-global-width",
            },
            o.createElement("div", {
              style: { backgroundImage: t },
              className:
                r.default.dynamic([["3871845263", [x.bb, x.q3]]]) + " image",
            }),
            o.createElement("div", {
              className:
                r.default.dynamic([["3871845263", [x.bb, x.q3]]]) +
                " safari-hack-vertical",
            }),
            o.createElement("div", {
              className:
                r.default.dynamic([["3871845263", [x.bb, x.q3]]]) +
                " safari-hack-horizontal",
            }),
            o.createElement(
              "div",
              {
                className:
                  r.default.dynamic([["3871845263", [x.bb, x.q3]]]) +
                  " triangle",
              },
              o.createElement(Ge.Z, null)
            ),
            o.createElement(
              r.default,
              { id: "3871845263", dynamic: [x.bb, x.q3] },
              [
                ".LeadImage.__jsx-style-dynamic-selector{position:absolute;z-index:"
                  .concat(x.bb, ";top:0;left:0;width:34%;width:calc(34% + ")
                  .concat(x.q3, ");height:101vh;}"),
                ".image.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;min-height:100%;background-size:cover;background-position:top center;background-repeat:no-repeat;background-blend-mode:color-burn;}",
                ".safari-hack-vertical.__jsx-style-dynamic-selector{position:absolute;top:6px;right:-1px;width:2px;height:100%;background:white;}",
                ".safari-hack-horizontal.__jsx-style-dynamic-selector{position:absolute;bottom:0;left:0;width:100%;height:1px;background:white;}",
                ".triangle.__jsx-style-dynamic-selector{position:absolute;top:0;right:0;width:25%;height:100%;}",
              ]
            )
          );
        },
        He = a("/uJ6"),
        Be = a("serf");
      const $e = "/52555387/omnicalculator.com_300x250_",
        Ke = 1,
        Ue = 1;
      function Qe({ html: e, index: t, array: a, showAds: n }) {
        const l = t === a.length - 1,
          i = n && !l && t < Ue;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(He.Z, { className: "contentPart", html: e }),
          i &&
            o.createElement(
              "div",
              { className: "jsx-1030690091 contentPartPromo" },
              o.createElement(Be.Z, {
                freestarPlacement: "omnicalculator_desktop_incontent",
                index: t + 1,
                lazy: t >= Ke,
                maxAds: Ue,
                playwireType: "med_rect_btf",
                prefix: $e,
                showAds: !0,
                size: "336x280",
              })
            ),
          o.createElement(r.default, { id: "1030690091" }, [
            ".contentPart.jsx-1030690091{margin:20px 0;}",
            ".contentPartPromo.jsx-1030690091{text-align:center;height:280px;}",
          ])
        );
      }
      const Ye = {
        skyscraper: "/52555387/omnicalculator.com_300x600_atf_1",
        sticky: "/52555387/omnicalculator.com_300x600_btf_right",
        top: "/52555387/omnicalculator.com_728x90_atf_1",
      };
      function We({
        calculationEngine: e,
        calculator: t,
        sharePath: a,
        showAds: n,
        themeName: l,
      }) {
        var i, c, s;
        const d = (0, w.Z)(),
          m = n ? 182 : 52;
        return o.createElement(
          "article",
          {
            id: v.Jf,
            className:
              r.default.dynamic([["924068287", [x.Mz, x.aA, x.Cz, x.$i]]]) +
              " CalculatorPageArticle",
          },
          o.createElement(Ve, { themeName: l }),
          o.createElement(
            ve.Z,
            null,
            o.createElement(
              "div",
              {
                className:
                  r.default.dynamic([["924068287", [x.Mz, x.aA, x.Cz, x.$i]]]) +
                  " content",
              },
              o.createElement(
                "div",
                {
                  className:
                    r.default.dynamic([
                      ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                    ]) + " leftAndCenter",
                },
                n &&
                  o.createElement(
                    "div",
                    {
                      className:
                        r.default.dynamic([
                          ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                        ]) + " leftAndCenterPromo",
                    },
                    o.createElement(g.ZP, {
                      freestarPlacement: "omnicalculator_leaderboard_atf",
                      path: Ye.top,
                      playwireType: "leaderboard_atf",
                      size: "970x90",
                    })
                  ),
                o.createElement(
                  "div",
                  {
                    className:
                      r.default.dynamic([
                        ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                      ]) + " displayFlex",
                  },
                  o.createElement(
                    ge,
                    null,
                    o.createElement(Ie, {
                      calculatorTitle:
                        (null === (i = t.text) || void 0 === i
                          ? void 0
                          : i.title) || "",
                    }),
                    o.createElement(be, { calculator: t }),
                    o.createElement("div", {
                      className:
                        r.default.dynamic([
                          ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                        ]) + " spacerBottom",
                    }),
                    o.createElement(
                      "div",
                      {
                        id: v.hM,
                        ref: d,
                        className: r.default.dynamic([
                          ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                        ]),
                      },
                      o.createElement(
                        ye.Z,
                        null,
                        null === (c = t.text) || void 0 === c
                          ? void 0
                          : null === (s = c.textHtmlParts) || void 0 === s
                          ? void 0
                          : s.map((e, t, a) =>
                              o.createElement(Qe, {
                                array: a,
                                html: e,
                                index: t,
                                key: t,
                                showAds: n,
                              })
                            )
                      )
                    ),
                    o.createElement(E.Z, { authors: t.authors, plain: !0 }),
                    o.createElement("div", {
                      className:
                        r.default.dynamic([
                          ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                        ]) + " spacerBottom",
                    })
                  ),
                  o.createElement(
                    Ee,
                    null,
                    o.createElement(U, {
                      calculationEngine: e,
                      calculator: t,
                      sharePath: a,
                      topOffset: m,
                    })
                  )
                )
              ),
              o.createElement(
                we,
                null,
                n &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      {
                        className:
                          r.default.dynamic([
                            ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                          ]) + " atfPromo",
                      },
                      o.createElement(g.ZP, {
                        freestarPlacement: "omnicalculator_right_rail_5",
                        path: Ye.skyscraper,
                        playwireType: "sky_atf",
                        size: "300x600",
                      })
                    ),
                    o.createElement("div", {
                      className:
                        r.default.dynamic([
                          ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                        ]) + " spacerBottom",
                    }),
                    o.createElement(
                      "div",
                      {
                        className:
                          r.default.dynamic([
                            ["924068287", [x.Mz, x.aA, x.Cz, x.$i]],
                          ]) + " sticky",
                      },
                      o.createElement(g.ZP, {
                        freestarPlacement: "omnicalculator_right_rail_sticky",
                        path: Ye.sticky,
                        playwireType: "sky_btf",
                        size: "300x600",
                      })
                    )
                  )
              )
            ),
            o.createElement("div", {
              className:
                r.default.dynamic([["924068287", [x.Mz, x.aA, x.Cz, x.$i]]]) +
                " spacerBottom",
            })
          ),
          o.createElement(
            r.default,
            { id: "924068287", dynamic: [x.Mz, x.aA, x.Cz, x.$i] },
            [
              ".content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1330px;margin:0 auto;}",
              ".atf.__jsx-style-dynamic-selector{position:relative;min-height:101vh;height:101vh;max-height:101vh;}",
              ".atfPromo.__jsx-style-dynamic-selector{height:calc(100vh - ".concat(
                x.Mz,
                ");}"
              ),
              ".leftAndCenter.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",
              ".leftAndCenterPromo.__jsx-style-dynamic-selector{width:728px;height:"
                .concat(x.aA, ";margin-bottom:")
                .concat(x.Cz, ";}"),
              ".displayFlex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}",
              ".sticky.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;top:".concat(
                x.$i,
                ";}"
              ),
              ".spacerBottom.__jsx-style-dynamic-selector{margin-bottom:40px;}",
            ]
          )
        );
      }
      var Je = a("e/Bu"),
        Xe = a("oL66");
      const et = (0, o.lazy)(() =>
        Promise.all([a.e(364), a.e(823)]).then(a.bind(a, "9rEh"))
      );
      var tt = (0, o.memo)(function ({ calculator: e }) {
          const [t, a] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              try {
                const e = localStorage.getItem(je.Su);
                a(e === je.lK);
              } catch (e) {}
            }, []),
            t
              ? o.createElement(
                  Xe.Z,
                  null,
                  o.createElement(
                    o.Suspense,
                    { fallback: null },
                    o.createElement(et, { calculator: e })
                  )
                )
              : null
          );
        }),
        at = a("CCDy");
      class nt extends o.Component {
        constructor(...e) {
          super(...e),
            (0, N.Z)(this, "handleClick", () => {
              const { eventCustomData: e, eventName: t } = this.props;
              window.fbq && window.fbq("track", t, e);
            });
        }
        render() {
          const { children: e } = this.props;
          return o.createElement("span", { onClick: this.handleClick }, e);
        }
      }
      (0, N.Z)(nt, "propTypes", {
        children: Pe().node.isRequired,
        eventName: Pe().string.isRequired,
        eventCustomData: Pe().object,
      });
      class rt extends o.Component {
        render() {
          const { children: e, gaLabel: t } = this.props;
          return o.createElement(
            at.Z,
            { gaAction: "embed clicked", gaLabel: t },
            o.createElement(
              nt,
              {
                eventCustomData: { content_type: "embed clicked" },
                eventName: "ViewContent",
              },
              e
            )
          );
        }
      }
      var ot = a("XsOt");
      const lt = (0, Je.ZP)(() => a.e(850).then(a.bind(a, "GQI1")));
      function it({ calculationEngine: e, calculator: t }) {
        const a = (0, o.useRef)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "button",
            {
              onClick: () => {
                window.location.href = S.j0;
              },
              className: r.default.dynamic([["560949225", [L.KE]]]) + " embed",
            },
            "We’re hiring!"
          ),
          o.createElement(
            rt,
            { gaLabel: "header" },
            o.createElement(
              "button",
              {
                onClick: () => {
                  var e;
                  null === (e = a.current) || void 0 === e || e.open();
                },
                onMouseEnter: lt.preload,
                className:
                  r.default.dynamic([["560949225", [L.KE]]]) + " embed",
              },
              "Embed"
            )
          ),
          o.createElement(
            ot.Z,
            { ref: a },
            o.createElement(
              o.Suspense,
              { fallback: null },
              o.createElement(lt, {
                calculator: t,
                calculatorSlug: !0,
                hasMonetaryFields: e.hasMonetaryFields,
              })
            )
          ),
          o.createElement(tt, { calculator: t }),
          o.createElement(r.default, { id: "560949225", dynamic: [L.KE] }, [
            ".embed.__jsx-style-dynamic-selector{font-size:16px;font-weight:".concat(
              L.KE,
              ";line-height:30px;-webkit-text-decoration:underline;text-decoration:underline;margin-right:20px;}"
            ),
          ])
        );
      }
      var ct = a("lhsm");
      const st = o.lazy(() => a.e(709).then(a.bind(a, "y8Nb"))),
        dt = ["physics"];
      function mt({ categorySlug: e }) {
        return dt.includes(e)
          ? o.createElement(
              Xe.Z,
              null,
              o.createElement(
                o.Suspense,
                { fallback: null },
                o.createElement(st, null)
              )
            )
          : null;
      }
      var ut = a("HqQz");
      function pt() {
        return (
          (0, o.useEffect)(() => {
            const e = () => {
                window.removeEventListener("scroll", t, !1);
              },
              t = () => {
                (0, D.V0)("page scrolled"), e();
              },
              a = setTimeout(() => {
                requestAnimationFrame(() => {
                  window.addEventListener("scroll", t, !1);
                });
              }, 50);
            return () => {
              clearTimeout(a), e();
            };
          }, []),
          null
        );
      }
      var ht = a("sPjx");
      var ft = a("KqMx");
      function yt({
        allCalculatorsCount: e,
        calculationEngine: t,
        calculator: a,
        categories: n,
        location: l,
        match: i,
      }) {
        var p, h;
        const { faqCampaign: y } = (0, c.G9)(),
          g =
            "INTERESTING" === a.kind
              ? "discover"
              : a.category && a.category.slug,
          E = (0, f.Z)(a),
          w = (function (e) {
            return "INTERESTING" === e.kind
              ? "discover"
              : e.category && e.category.slug
              ? e.category.slug
              : Z.fY;
          })(a),
          k = t.shareResultTriggered ? (0, d.Z)(t) : null;
        return o.createElement(
          ut.Z,
          {
            activeCategorySlug: g,
            canonicalPath: (0, s.h)({ calculator: a, location: l }),
            categories: n,
            headElement: (0, m.Z)(a, y),
            headerActions: o.createElement(it, {
              calculationEngine: t,
              calculator: a,
            }),
            metaTags: (0, u.Tm)({ allCalculatorsCount: e, calculator: a }),
            renderFooter: !1,
            sharingTitle:
              null === (p = a.text) || void 0 === p ? void 0 : p.seoTitle,
            targetShareUrl: (0, s.H)({ calculator: a }),
            themeName: w,
            title: null === (h = a.text) || void 0 === h ? void 0 : h.seoTitle,
          },
          o.createElement(
            b,
            null,
            o.createElement(
              o.Fragment,
              null,
              o.createElement(We, {
                calculationEngine: t,
                calculator: a,
                sharePath: k,
                showAds: E,
                themeName: w,
              }),
              o.createElement(
                "div",
                {
                  id: v.Q6,
                  className: r.default.dynamic([["1797803586", [x.aT]]]),
                },
                o.createElement(ht.Z, {
                  calculators: a.suggestedCalculators,
                  themeName: w,
                }),
                o.createElement(ct.Z, { category: a.category })
              ),
              o.createElement(mt, { categorySlug: i.params.category })
            )
          ),
          o.createElement(pt, { key: a.id }),
          o.createElement(r.default, { id: "1797803586", dynamic: [x.aT] }, [
            ".calculator-page-top-container.__jsx-style-dynamic-selector{position:relative;z-index:".concat(
              x.aT,
              ";}"
            ),
          ])
        );
      }
      function xt(e) {
        const { history: t, location: a, match: r, staticContext: c } = e,
          { calculator: s, isLoadingCustomRevision: d } = (0, y.Z)({
            calculator: e.calculator,
            match: r,
            search: a.search,
          }),
          m = (0, p.Z)(e);
        return m
          ? ((0, h.Z)({ history: t, staticContext: c, url: m }), null)
          : d
          ? o.createElement(i.Z, null)
          : null === s
          ? o.createElement(ft.default, null)
          : o.createElement(
              l.Z,
              (0, n.Z)({}, e, { definition: s.definition }),
              (t) =>
                o.createElement(
                  yt,
                  (0, n.Z)({}, e, { calculationEngine: t, calculator: s })
                )
            );
      }
    },
    KqMx: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NOT_FOUND_PAGE_QUERY: function () {
            return p;
          },
        });
      var n = a("V0G3"),
        r = a("hg7s"),
        o = a("mMyr"),
        l = a("zrRX"),
        i = a("Br/x"),
        c = a("5ZuQ"),
        s = a("nV7d"),
        d = a("HqQz"),
        m = a("rpMS"),
        u = a("NJvu");
      const p = {
          kind: "Document",
          definitions: ((e) => {
            const t = {};
            return e.filter((e) => {
              if ("FragmentDefinition" !== e.kind) return !0;
              const a = e.name.value;
              return !t[a] && ((t[a] = !0), !0);
            });
          })(
            [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "NotFoundPageQuery" },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "allCalculatorsCount" },
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "categories" },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "FragmentSpread",
                            name: {
                              kind: "Name",
                              value: "MenuCategoriesFragment",
                            },
                            directives: [],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ].concat(u.Zy.definitions)
          ),
          loc: {
            start: 0,
            end: 115,
            source: {
              body: "\n  query NotFoundPageQuery {\n    allCalculatorsCount\n    categories {\n      ...MenuCategoriesFragment\n    }\n  }\n  \n",
              name: "GraphQL request",
              locationOffset: { line: 1, column: 1 },
            },
          },
        },
        h = m.fY,
        f = ({ allCalculatorsCount: e, categories: t }) => {
          if (!t || !e) throw new Error("Cannot load data");
          const a = o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "jsx-3441767916 header" },
              o.createElement(
                "h1",
                { className: "jsx-3441767916" },
                "Bad news: 404 (page not found)."
              ),
              o.createElement(
                "h2",
                { className: "jsx-3441767916" },
                "Good news: we've made ",
                e,
                " calculators to make your life easier."
              )
            ),
            o.createElement(n.default, { id: "3441767916" }, [
              ".header.jsx-3441767916{padding-top:136px;margin:0;text-align:center;color:white;}",
            ])
          );
          return o.createElement(
            l.Z,
            null,
            o.createElement(
              d.Z,
              {
                categories: t,
                headerSearchShown: !1,
                metaTags: (0, i.IR)({ allCalculatorsCount: e }),
                themeName: h,
                title: "Page Not Found",
              },
              o.createElement(c.Z, {
                additionalHeight: 80,
                customHeaderElement: a,
              }),
              o.createElement(s.Z, { categories: t })
            )
          );
        };
      t.default = () =>
        o.createElement(
          r.AE,
          { query: p },
          ({ data: e, error: t, loading: a }) => {
            if (a) return null;
            if (t) throw t;
            if (!e) throw new Error("Cannot load data");
            const { allCalculatorsCount: n, categories: r } = e;
            return o.createElement(f, {
              allCalculatorsCount: n,
              categories: r,
            });
          }
        );
    },
    "+FTp": function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a("qz7+"),
        r = a("zAkZ"),
        o = a("nzfh"),
        l = a("mMyr");
      class i extends l.Component {
        constructor(...e) {
          super(...e),
            (0, r.Z)(this, "unsubscribeListener", void 0),
            (0, r.Z)(this, "handleAction", (e) => {
              const { onAction: t } = this.props;
              t(e);
            });
        }
        componentDidMount() {
          const { includeInitial: e, listenCalculatorActions: t } = this.props;
          e
            ? (this.unsubscribeListener = t && t(this.handleAction))
            : setTimeout(() => {
                this.unsubscribeListener = t && t(this.handleAction);
              });
        }
        componentWillUnmount() {
          this.unsubscribeListener && this.unsubscribeListener();
        }
        render() {
          return null;
        }
      }
      (0, r.Z)(i, "defaultProps", { includeInitial: !0 });
      class c extends l.Component {
        render() {
          return l.createElement(o.pu, null, (e) => {
            if (null == e)
              throw new Error("CalculatorActionsListener outside of engine");
            return l.createElement(
              i,
              (0, n.Z)({}, this.props, { listenCalculatorActions: e })
            );
          });
        }
      }
    },
    zrRX: function (e, t, a) {
      "use strict";
      var n = a("mMyr"),
        r = a("6l5c");
      t.Z = (0, r.EN)(
        class extends n.Component {
          UNSAFE_componentWillMount() {
            const { staticContext: e } = this.props;
            e && (e.statusCode = 404);
          }
          render() {
            return n.createElement(
              "div",
              { className: "Error404" },
              this.props.children
            );
          }
        }
      );
    },
  },
]);
//# sourceMappingURL=CalculatorPage.d3f379b23cf528391624.map
