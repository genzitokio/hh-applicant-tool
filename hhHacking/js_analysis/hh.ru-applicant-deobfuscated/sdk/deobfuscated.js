(function (a, i) {
  function n(e) {
    return Object.prototype.toString.call(e) === "[object Array]";
  }
  var o = {};
  var d = {
    isInitialized: false,
    apiUrl: null,
  };
  function r(e) {
    var t = e + "=";
    for (var r = i.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var a = r[n]; a.charAt(0) == " "; ) {
        a = a.substring(1);
      }
      if (a.indexOf(t) == 0) {
        return a.substring(t.length, a.length);
      }
    }
    return "";
  }
  var c = ["msk.ru", "com.br"];
  function s(e, t) {
    var r = new Date();
    r.setTime(r.getTime() + 315360000000);
    var r = "expires=" + r.toUTCString();
    i.cookie =
      e +
      "=" +
      t +
      ";" +
      r +
      ";domain=" +
      ((r = location.hostname),
      location.hostname.split(".").length > 2 &&
        ((r = location.hostname
          .split(".")
          .reverse()
          .slice(0, 2)
          .reverse()
          .join(".")),
        ~c.indexOf(r) &&
          (r = location.hostname
            .split(".")
            .reverse()
            .slice(0, 3)
            .reverse()
            .join("."))),
      r) +
      ";path=/";
  }
  function p() {
    return "10000000-1000-4000-8000-100000000000"
      .replace(/1|0/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .replace(/-/g, "");
  }
  function u() {
    if (d.customUserId) {
      return (e = (function (e, t) {
        for (var r = e; r.length < t; ) {
          r += "0";
        }
        return r;
      })(d.customUserId.replace(/\D/g, ""), 32));
    }
    var e;
    var t = "iap.uid";
    if (!(e = r(t)) || e.length !== 32) {
      e = p();
      s(t, e);
    }
    return e;
  }
  function l(e, t, r) {
    t.push("uid=" + u());
    var n;
    var t = [d.apiUrl, e, "?", t.join("&")].join("");
    if (a.navigator.sendBeacon) {
      n = new Blob([JSON.stringify(r || {})], {
        type: "text/plain",
      });
      a.navigator.sendBeacon(t, n);
    } else {
      (n = new XMLHttpRequest()).open("POST", t, true);
      n.setRequestHeader("Content-Type", "application/json");
      n.withCredentials = true;
      r = JSON.stringify(r);
      n.send(r);
    }
  }
  o.push = function (e) {
    try {
      if (!n(e)) {
        throw new TypeError("iapSDK: Push item is not array");
      }
      var t = e[0];
      var r = e[1];
      if (typeof o[t] != "function" || t === "push") {
        throw new ReferenceError("iapSDK: Not found method " + t);
      }
      o[t](r);
    } catch (e) {
      console.error(e.message);
    }
  };
  o.init = function (e) {
    if (!(e = e || {}).apiUrl) {
      throw new TypeError("iapSDK: Init must set api url");
    }
    if (d.isInitialized) {
      throw new Error("iapSDK: SDK already init");
    }
    d.isInitialized = true;
    d.apiUrl = e.apiUrl;
    d.customUserId = e.customUserId;
    if (!e.disableAutoHit) {
      o.hit();
    }
  };
  o.hit = function () {
    var e = encodeURIComponent(i.URL);
    var t = encodeURIComponent(i.referrer);
    l("/tracker/hit", [
      "url=" + e,
      "ref=" + t,
      "sw=" + a.screen.width,
      "sh=" + a.screen.height,
      "rnd=" + Math.random(),
    ]);
  };
  o.event = function (e) {
    (function () {
      if (!d.isInitialized) {
        throw new ReferenceError("iapSDK: SDK not initialized");
      }
    })();
    var t = {
      ADD_TO_CART: 1,
      CONFIRM_ATTRIBUTION: 2,
    };
    if (!t[e.event]) {
      throw new TypeError("iapSDK: Unknown event type " + e.event);
    }
    e.data ||= {};
    e.event = t[e.event];
    l("/tracker/event", [], {
      event: e.event,
      data: e.data,
    });
  };
  o.order = function (e) {
    if (!e) {
      throw new ReferenceError("iapSDK: order object undefined");
    }
    l("/tracker/order", [], e);
  };
  o.conversion = function (e) {
    if (!e) {
      throw new ReferenceError("iapSDK: conversion object undefined");
    }
    var t;
    if (e.type === "lead") {
      t = {};
      if (e.category) {
        t.category = e.category;
      }
      if (e.brand) {
        t.brand = e.brand;
      }
      if (e.clickId) {
        t.clickId = e.clickId;
      }
      e = {
        id: e.id + "",
        type: e.type,
        offerAlias: e.offerAlias,
        coupon: e.coupon,
        isNewCustomer: e.isNewCustomer,
        items: [t],
        comment: e.comment,
        productUserId: e.productUserId,
        goal: e.goal,
        data1: e.data1,
        data2: e.data2,
        data3: e.data3,
        data4: e.data4,
        data5: e.data5,
        data6: e.data6,
        data7: e.data7,
        data8: e.data8,
        data9: e.data9,
        data10: e.data10,
      };
    }
    if (!e.productUserId) {
      delete e.productUserId;
    }
    l("/tracker/conversion", [], e);
  };
  if (a.iapSDK && n(a.iapSDK)) {
    for (var e = 0; e < a.iapSDK.length; e++) {
      o.push(a.iapSDK[e]);
    }
  }
  a.iapSDK = o;
})(window, document);
