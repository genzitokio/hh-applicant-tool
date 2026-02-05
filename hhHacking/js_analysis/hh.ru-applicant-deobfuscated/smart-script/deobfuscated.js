function _arrayLikeToArray(e, r) {
  if (r == null || r > e.length) {
    r = e.length;
  }
  for (var t = 0, a = Array(r); t < r; t++) {
    a[t] = e[t];
  }
  return a;
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) {
    return e;
  }
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    return _arrayLikeToArray(e);
  }
}
function _defineProperty(e, r, t) {
  if ((r = _toPropertyKey(r)) in e) {
    Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    e[r] = t;
  }
  return e;
}
function _iterableToArray(e) {
  if (
    (typeof Symbol != "undefined" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  ) {
    return Array.from(e);
  }
}
function _iterableToArrayLimit(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != "undefined" && e[Symbol.iterator]) || e["@@iterator"];
  if (t != null) {
    var a;
    var n;
    var o;
    var i;
    var s = [];
    var l = true;
    var c = false;
    try {
      o = (t = t.call(e)).next;
      if (r !== 0) {
        for (
          ;
          !(l = (a = o.call(t)).done) && (s.push(a.value), s.length !== r);
          l = true
        );
      }
    } catch (e) {
      c = true;
      n = e;
    } finally {
      try {
        if (!l && t.return != null && ((i = t.return()), Object(i) !== i)) {
          return;
        }
      } finally {
        if (c) {
          throw n;
        }
      }
    }
    return s;
  }
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function ownKeys(e, r) {
  var t;
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    t = Object.getOwnPropertySymbols(e);
    if (r) {
      t = t.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      });
    }
    a.push.apply(a, t);
  }
  return a;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] ?? {};
    if (r % 2) {
      ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
  }
  return e;
}
function _slicedToArray(e, r) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, r) ||
    _unsupportedIterableToArray(e, r) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _toPrimitive(e, r) {
  if (typeof e != "object" || !e) {
    return e;
  }
  var t = e[Symbol.toPrimitive];
  if (t === undefined) {
    return (r === "string" ? String : Number)(e);
  }
  if (typeof (t = t.call(e, r || "default")) != "object") {
    return t;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function _toPropertyKey(e) {
  if (typeof (e = _toPrimitive(e, "string")) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function _typeof(e) {
  return (_typeof =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          if (
            e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
          ) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
}
function _unsupportedIterableToArray(e, r) {
  var t;
  if (e) {
    if (typeof e == "string") {
      return _arrayLikeToArray(e, r);
    } else if (
      (t =
        (t = {}.toString.call(e).slice(8, -1)) === "Object" && e.constructor
          ? e.constructor.name
          : t) === "Map" ||
      t === "Set"
    ) {
      return Array.from(e);
    } else if (
      t === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
    ) {
      return _arrayLikeToArray(e, r);
    } else {
      return undefined;
    }
  }
}
var AF_URL_SCHEME = "(https:\\/\\/)(([^\\.]+).)(.*\\/)(.*)";
var VALID_AF_URL_PARTS_LENGTH = 5;
var GOOGLE_CLICK_ID = "gclid";
var FACEBOOK_CLICK_ID = "fbclid";
var GBRAID = "gbraid";
var WBRAID = "wbraid";
var ASSOCIATED_AD_KEYWORD = "keyword";
var AF_KEYWORDS = "af_keywords";
var AF_CUSTOM_EXCLUDE_PARAMS_KEYS = [
  "pid",
  "c",
  "af_channel",
  "af_ad",
  "af_adset",
  "deep_link_value",
  "af_sub1",
  "af_sub2",
  "af_sub3",
  "af_sub4",
  "af_sub5",
];
var GCLID_EXCLUDE_PARAMS_KEYS = [
  "pid",
  "c",
  "af_channel",
  "af_ad",
  "af_adset",
  "deep_link_value",
];
var LOCAL_STORAGE_VALUES = {
  SS_WEB_REFERRER: "ss_webReferrer",
};
function isSkippedURL(e) {
  var r = e.url;
  var t = e.skipKeys;
  e = e.errorMsg;
  if (r) {
    var a = r.toLowerCase();
    if (a) {
      if (
        (r = t.find(function (e) {
          return a.includes(e.toLowerCase());
        }))
      ) {
        console.debug(e, r);
      }
      return !!r;
    }
  }
  return false;
}
function getGoogleClickIdParameters(e, r) {
  var t = r[GOOGLE_CLICK_ID];
  var a = {};
  if (t) {
    console.debug("This user comes from Google AdWords");
    a[e] = t;
    if ((e = r[ASSOCIATED_AD_KEYWORD])) {
      console.debug("There is a keyword associated with the ad");
      a[AF_KEYWORDS] = e;
    }
  } else {
    console.debug("This user comes from SRN or custom network");
  }
  return a;
}
function stringifyParameters(e = {}) {
  return Object.keys(e).reduce(function (r, t) {
    if (e[t]) {
      r += `&${t}=${e[t]}`;
    }
    return r;
  }, "");
}
function getParameterValue(e) {
  var r;
  var t;
  var a;
  var n =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          keys: [],
          overrideValues: {},
          defaultValue: "",
        };
  if (
    (n != null && n.keys && Array.isArray(n.keys)) ||
    (n != null && n.defaultValue)
  ) {
    t = n.keys;
    a = (a = n.overrideValues) === undefined ? {} : a;
    r = (r = n.defaultValue) === undefined ? "" : r;
    return (
      ((t = (t === undefined ? [] : t).find(function (r) {
        return !!e[r];
      })) &&
        (a[(a = e[t])] || a)) ||
      r
    );
  } else {
    console.error("Parameter config structure is wrong", n);
    return null;
  }
}
function isIOS(e) {
  return /iphone|ipad|ipod/i.test(e && e.toLowerCase());
}
function isUACHSupported() {
  return (
    (typeof navigator == "undefined" ? "undefined" : _typeof(navigator)) ===
      "object" &&
    "userAgentData" in navigator &&
    "getHighEntropyValues" in navigator.userAgentData &&
    !isIOS(navigator && navigator.userAgent)
  );
}
function getQueryParamsAndSaveToLocalStorage(e) {
  if (!e) {
    console.debug(`website doesnt exist + ${e}`);
  }
  try {
    var r = new URL(e);
    var t = new URLSearchParams(r.search);
    var a = Array.from(t).reduce(function (e, r) {
      var t = (r = _slicedToArray(r, 2))[0];
      r = r[1];
      return _objectSpread2(
        _objectSpread2({}, e),
        {},
        _defineProperty({}, t, encodeURIComponent(r)),
      );
    }, {});
    var n = JSON.parse(localStorage.getItem("ss_incoming_params") || "[]");
    var o = new Date().getTime() + 7200000;
    var i = _objectSpread2(
      _objectSpread2({}, a),
      {},
      {
        af_ss_exp_at: o,
      },
    );
    n.unshift(i);
    localStorage.setItem("ss_incoming_params", JSON.stringify(n));
  } catch (e) {
    console.debug(`url isnt valid + ${e}`);
  }
}
function isValidUrl(e) {
  try {
    return Boolean(new URL(e));
  } catch (e) {
    return false;
  }
}
function getCurrentUrl() {
  return new URL(window.location.href);
}
function getReferrerUrl() {
  var e = document.referrer;
  if (e) {
    return new URL(e);
  } else {
    return null;
  }
}
function isSameOrigin(e, r) {
  return e.origin === r.origin;
}
function saveWebReferrer() {
  var e = getCurrentUrl();
  var r = getReferrerUrl();
  if (r && isSameOrigin(e, r)) {
    console.warn("You navigate from the same website");
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_VALUES.SS_WEB_REFERRER,
      JSON.stringify(document.referrer),
    );
  }
}
function removeExpiredLocalStorageItems(e = Date.now()) {
  var r = JSON.parse(localStorage.getItem("ss_incoming_params") || "[]");
  localStorage.setItem(
    "ss_incoming_params",
    JSON.stringify(
      r.filter(function (r) {
        r = r.af_ss_exp_at;
        return e < r;
      }),
    ),
  );
}
function aggregateValuesFromParameters(e = {}) {
  var r = [];
  Object.values(e).forEach(function (e) {
    if (e && e.keys && Array.isArray(e.keys)) {
      e.keys.forEach(function (e) {
        return r.push(e);
      });
    }
    if (Array.isArray(e)) {
      e.forEach(function (e) {
        if (Array.isArray(e == null ? undefined : e.keys)) {
          r.push.apply(r, _toConsumableArray(e.keys));
        }
      });
    }
  });
  if (
    e.hasOwnProperty("googleClickIdKey") &&
    typeof e.googleClickIdKey == "string"
  ) {
    r.push(GOOGLE_CLICK_ID);
  }
  return r;
}
function getCurrentURLParams(e) {
  var r = {};
  if (Object.keys(localStorage).includes("ss_incoming_params")) {
    r =
      JSON.parse(localStorage.ss_incoming_params).find(function (r) {
        return e.some(function (e) {
          return e in r;
        });
      }) || {};
  } else {
    console.log("Key 'ss_incoming_params' not found in localStorage.");
  }
  return r;
}
function isOneLinkURLValid(e) {
  var r = (r = e || "") == null ? undefined : r.toString().match(AF_URL_SCHEME);
  return (
    (!!r &&
      !((r == null ? undefined : r.length) < VALID_AF_URL_PARTS_LENGTH)) ||
    (console.error(
      "oneLinkURL is missing or not in the correct format, can't generate URL",
      e,
    ),
    false)
  );
}
function isMSValid(e = {}) {
  return (
    (e != null && !!e.defaultValue) ||
    (console.error(
      "mediaSource is missing (default value was not supplied), can't generate URL",
      e,
    ),
    false)
  );
}
function isSkipListsValid(e) {
  var r = e.referrerSkipList;
  e = (e = e.urlSkipList) === undefined ? [] : e;
  return (
    !isSkippedURL({
      url: document.referrer,
      skipKeys: r === undefined ? [] : r,
      errorMsg: "Generate url is skipped. HTTP referrer contains key:",
    }) &&
    !isSkippedURL({
      url: document.URL,
      skipKeys: e,
      errorMsg: "Generate url is skipped. URL contains string:",
    })
  );
}
function extractCustomParams(e) {
  var r = (r = e.afCustom) === undefined ? [] : r;
  var t = e.currentURLParams;
  var a = t === undefined ? {} : t;
  var n = e.googleClickIdKey;
  var o = {};
  if (Array.isArray(r)) {
    r.forEach(function (e) {
      var r;
      if (e != null && e.paramKey) {
        r = AF_CUSTOM_EXCLUDE_PARAMS_KEYS.find(function (r) {
          return r === (e == null ? undefined : e.paramKey);
        });
        if ((e == null ? undefined : e.paramKey) === n || r) {
          console.debug(
            "Custom parameter ParamKey can't override Google-Click-Id or AF Parameters keys",
            e,
          );
        } else {
          o[e.paramKey] = getParameterValue(a, e);
        }
      }
    });
  }
  return o;
}
function validateAndMappedParams(_param, e = {}, r = false) {
  var t = (y =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {})
    .mediaSource;
  var a = y.campaign;
  var n = y.channel;
  var o = y.ad;
  var i = y.adSet;
  var s = y.deepLinkValue;
  var l = y.afSub1;
  var c = y.afSub2;
  var u = y.afSub3;
  var f = y.afSub4;
  var d = y.afSub5;
  var m = y.afCustom;
  var p = y.googleClickIdKey;
  var g = {};
  if (t) {
    if (!(y = getParameterValue(e, t))) {
      console.error(
        "mediaSource was not found in the URL and default value was not supplied, can't generate URL",
        t,
      );
      return null;
    }
    g[r ? "af_media_source" : "pid"] = y;
  }
  if (a) {
    if (!(t = getParameterValue(e, a)) && r) {
      console.error(
        "campaign was not found in the URL and default value was not supplied, can't generate URL",
        a,
      );
      return null;
    }
    if (r) {
      g.af_campaign = t;
      g.af_campaign_id = t;
    } else {
      g.c = t;
    }
  }
  if (n) {
    g.af_channel = getParameterValue(e, n);
  }
  if (o) {
    g.af_ad = getParameterValue(e, o);
  }
  if (i) {
    g.af_adset = getParameterValue(e, i);
  }
  if (s) {
    g.deep_link_value = getParameterValue(e, s);
  }
  [l, c, u, f, d].forEach(function (r, t) {
    if (r) {
      g[`af_sub${t + 1}`] = getParameterValue(e, r);
    }
  });
  if (p) {
    if (
      GCLID_EXCLUDE_PARAMS_KEYS.find(function (e) {
        return e === p;
      })
    ) {
      console.debug(
        "Google Click Id ParamKey can't override AF Parameters keys",
        p,
      );
    } else {
      _ = getGoogleClickIdParameters(p, e);
      Object.keys(_).forEach(function (e) {
        g[e] = _[e];
      });
    }
  }
  var _;
  var y = extractCustomParams({
    afCustom: m,
    currentURLParams: e,
    googleClickIdKey: p,
  });
  return _objectSpread2(_objectSpread2({}, g), y);
}
function isPlatformValid(e) {
  if (e) {
    return (
      !![
        "smartcast",
        "tizen",
        "roku",
        "webos",
        "vidaa",
        "playstation",
        "android",
        "ios",
        "steam",
        "quest",
        "battlenet",
        "epic",
        "switch",
        "xbox",
        "nativepc",
      ].includes(e.toLowerCase()) ||
      (console.error(
        "platform need to be part of the known platforms supoorted",
      ),
      false)
    );
  } else {
    console.error("platform is missing , can't generate URL", e);
    return false;
  }
}
function getUserAgentData() {
  return new Promise(function (e) {
    if (isUACHSupported()) {
      navigator.userAgentData
        .getHighEntropyValues(["model", "platformVersion"])
        .then(function (r) {
          e({
            model: r.model,
            platformVersion: r.platformVersion,
          });
        })
        .catch(function () {
          e();
        });
    } else {
      e();
    }
  });
}
function createImpressionsLink(e) {
  if (e) {
    return new Promise(function (r) {
      getUserAgentData()
        .then(function (t) {
          var a = new URL(e);
          a.hostname = "impressions.onelink.me";
          if (t) {
            a.searchParams.append("af_ch_model", encodeURIComponent(t.model));
            a.searchParams.append(
              "af_ch_os_version",
              encodeURIComponent(t.platformVersion),
            );
          }
          r(a.href);
        })
        .catch(function () {
          r();
        });
    });
  } else {
    console.debug("ClickURL is not valid");
    return null;
  }
}
function getHexColorAfterValidation(e) {
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)) {
    return e;
  } else {
    return "#000";
  }
}
function getParameterValueFromURL(e, r) {
  return new URLSearchParams(e).get(r);
}
function updateFinalUrlWithForwardParameters(e, r, t) {
  return r.reduce(function (e, r) {
    var a = getParameterValueFromURL(t, r);
    if (a) {
      console.debug(`The URL contains forwarding parameter ${r}.`);
      return `${e}&${r}=${encodeURIComponent(a)}`;
    } else {
      return e;
    }
  }, e);
}
function processTrackingParameters(e) {
  e = updateFinalUrlWithForwardParameters(
    e,
    [GOOGLE_CLICK_ID, FACEBOOK_CLICK_ID, GBRAID, WBRAID],
    window.location.search,
  );
  var r = getParameterValueFromURL(window.location.search, GOOGLE_CLICK_ID);
  var t = getParameterValueFromURL(window.location.search, GBRAID);
  var a = getParameterValueFromURL(window.location.search, WBRAID);
  if (
    (r || t || a) &&
    ((r = getParameterValueFromURL(
      window.location.search,
      ASSOCIATED_AD_KEYWORD,
    )),
    (t = getParameterValueFromURL(e, AF_KEYWORDS)),
    r) &&
    !t
  ) {
    return `${e}&${AF_KEYWORDS}=${r}`;
  } else {
    return e;
  }
}
var version = "2.9.3";
var formatVersion = version.replace(/\./g, "_");
removeExpiredLocalStorageItems();
getQueryParamsAndSaveToLocalStorage(window.location.href);
saveWebReferrer();
window.AF_SMART_SCRIPT = {
  generateOneLinkURL: function () {
    var e;
    var r =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : {
            afParameters: {},
          };
    var t = r.oneLinkURL;
    var a = ((a = r.afParameters) === undefined ? {} : a).mediaSource;
    var n = (n = r.referrerSkipList) === undefined ? [] : n;
    var o = (o = r.urlSkipList) === undefined ? [] : o;
    var i = r.webReferrer;
    if (
      isOneLinkURLValid(t) &&
      isSkipListsValid({
        referrerSkipList: n,
        urlSkipList: o,
      }) &&
      isMSValid(a) &&
      ((n = getCurrentURLParams(aggregateValuesFromParameters(r.afParameters))),
      (o = validateAndMappedParams(r.afParameters, n)))
    ) {
      a = _objectSpread2(
        {
          af_js_web: true,
          af_ss_ver: window.AF_SMART_SCRIPT.version,
        },
        o,
      );
      e = t + stringifyParameters(a).replace("&", "?");
      r = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_VALUES.SS_WEB_REFERRER),
      );
      if (i && r && isValidUrl(r)) {
        n = `&${i}=${r}`;
        e = `${e}${n}`;
      }
      e = processTrackingParameters(e);
      createImpressionsLink(e).then(function (e) {
        if (e) {
          window.AF_SMART_SCRIPT.fireImpressionsLink = function () {
            var r = new Image(1, 1);
            r.style.display = "none";
            r.style.position = "absolute";
            r.style.left = "-1px";
            r.style.top = "-1px";
            r.src = e;
          };
        }
      });
      return {
        clickURL: e,
      };
    } else {
      return null;
    }
  },
  generateDirectClickURL: function () {
    var e;
    var r =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : {
            afParameters: {},
            referrerSkipList: [],
            urlSkipList: [],
          };
    var t = (t = r.afParameters) === undefined ? {} : t;
    var a = (a = r.referrerSkipList) === undefined ? [] : a;
    var n = (n = r.urlSkipList) === undefined ? [] : n;
    var o = r.platform;
    var i = r.app_id;
    var s = r.redirectURL;
    var l = t.mediaSource;
    t = t.campaign;
    if (l) {
      if (t) {
        if (i) {
          if (s) {
            o = o == null ? undefined : o.toLowerCase();
            if (isPlatformValid(o)) {
              if (typeof i != "string") {
                console.error("app_id must be a string");
                return null;
              } else if (
                (t == null || (e = t.keys) == null ? undefined : e.length) !==
                  0 ||
                (t != null && t.defaultValue)
              ) {
                if (
                  isSkipListsValid({
                    referrerSkipList: a,
                    urlSkipList: n,
                  }) &&
                  isMSValid(l) &&
                  ((e = getCurrentURLParams(
                    aggregateValuesFromParameters(r.afParameters),
                  )),
                  (a = validateAndMappedParams(r.afParameters, e, true)))
                ) {
                  n = _objectSpread2(
                    {
                      af_js_web: true,
                      af_ss_ver: window.AF_SMART_SCRIPT.version,
                    },
                    a,
                  );
                  r = stringifyParameters(n).replace("&", "?");
                  e = `https://engagements.appsflyer.com/v1.0/c2s/click/app/${o}`;
                  if (["ios", "android"].includes(o)) {
                    e = "https://app.appsflyer.com";
                  }
                  a = `${e}/${i}${r}&af_r=${encodeURIComponent(s)}`;
                  if (["ios", "android"].includes(o)) {
                    a = a
                      .replace("af_media_source", "pid")
                      .replace("af_campaign", "c")
                      .replace("af_campaign_id", "af_c_id");
                  }
                  a = processTrackingParameters(a);
                  console.debug("generate Direct Click URL", a);
                  delete window.AF_SMART_SCRIPT.fireImpressionsLink;
                  return {
                    clickURL: a,
                  };
                } else {
                  return null;
                }
              } else {
                console.error(
                  "campaign is missing (default value was not supplied), can't generate URL",
                  l,
                );
                return null;
              }
            } else {
              return null;
            }
          } else {
            console.error("redirectURL is missing , can't generate URL", s);
            return null;
          }
        } else {
          console.error("app_id is missing , can't generate URL", i);
          return null;
        }
      } else {
        console.error("campaign  is missing , can't generate URL", t);
        return null;
      }
    } else {
      console.error("mediaSource is missing , can't generate URL", l);
      return null;
    }
  },
  version: formatVersion,
}; //# sourceMappingURL=smart-script.js.map
