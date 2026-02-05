function TargetAds(t, e = {}) {
  if (!t) {
    throw {
      name: "TargetAdsInitializationError",
      message: "projectId is invalid"
    };
  }
  if (typeof e != "object") {
    console.warn("TargetAds:Incorrect type of settings for debug mode", e);
  }
  this.host = "https://eye.targetads.io";
  this.projectId = t;
  this.storPrefix = `_tads${t}_cid`;
  this.yandexuidPrefix = `_tads${t}_yandexuid`;
  this.sessionIdPrefix = `_tads${t}_sid`;
  this.__debug = e.debug || false;
  this.__otrack = e.other_trackers || true;
  this.isCheckUtm = e.check_utm || false;
  this.__limittime = 300000;
  this.__timeout = 30000;
  this.currentUrl = window.location.href;
  this.isCheckAnchor = e.isCheckLocationAnchor || false;
  this.isCheckLocation = e.isCheckLocation || false;
  this.isOnlyOneInDay = e.isOnlyOneInDay || false;
  this.startSession = 0;
  this.getCid = () => {
    if (window.localStorage.getItem(this.storPrefix)) {
      return window.localStorage.getItem(this.storPrefix);
    }
    let t = `TA-${Date.now()}-${(Math.random() + 1).toString(36).substring(4).toUpperCase()}`;
    window.localStorage.setItem(this.storPrefix, t);
    return t;
  };
  this.getYandexuid = () => {
    try {
      if (window.location.href.includes("yandexuid")) {
        const t = new URLSearchParams(window.location.search).get("yandexuid");
        if (t) {
          localStorage.setItem(this.yandexuidPrefix, t);
          return t;
        }
      }
      if (window.localStorage.getItem(this.yandexuidPrefix)) {
        return window.localStorage.getItem(this.yandexuidPrefix);
      }
    } catch (t) {
      this.log(t);
      return "";
    }
  };
  window._targetADS = this.event.bind(this);
  this.listenerLocation = () => {
    if (this.isCheckLocation) {
      window.addEventListener("popstate", () => {
        this.onChangeLocation();
      });
    }
  };
  this.getSid = () => {
    const t = window.localStorage.getItem(this.sessionIdPrefix);
    return t || "";
  };
}
TargetAds.prototype.getUserAgent = function () {
  let t = window.navigator && window.navigator.userAgent;
  return t || "";
};
TargetAds.prototype.log = function (t, e = false) {
  if (this.__debug) {
    console.info("TargetAds:" + t);
  }
};
TargetAds.prototype.req = async function (t, e, r = 0) {
  this.log(`Sending data:${e}`);
  this.log(`Sending query:${t}`);
  if (r * this.__timeout >= this.__limittime) {
    return this.log(`Max retries for:${e}`, true);
  }
  const i = TargetAdsQueues.peek();
  TargetAdsQueues.dequeue(i);
  const s = new AbortController();
  const o = setTimeout(() => {
    s.abort();
  }, this.__timeout);
  try {
    const n = await fetch(`${this.host}/web/collect?${t}`, {
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "text/plain"
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: e,
      signal: s.signal
    });
    clearTimeout(o);
    if (TargetAdsQueues.length === 0) {
      localStorage.removeItem(`_tads${this.projectId}_queue`);
    } else {
      localStorage.setItem(`_tads${this.projectId}_queue`, JSON.stringify(TargetAdsQueues));
    }
    if (n.status === 200 || n.status === 204) {
      this.log("Data was send");
      const t = await n.text();
      if (t && !isNaN(Number(t))) {
        window.localStorage.setItem(this.storPrefix, t);
      }
    } else {
      TargetAdsQueues.enqueue(i);
      setTimeout(() => {
        this.req(t, e, r + 1);
      }, this.__timeout);
      this.log(`Data wasn't send.Status code is ${n.status}.Response text ${n.body}`, true);
    }
  } catch (s) {
    clearTimeout(o);
    if (s.name === "AbortError") {
      this.log(`Request timeout after ${this.__timeout}ms`, true);
    } else {
      this.log(s, true);
    }
    TargetAdsQueues.enqueue(i);
    setTimeout(() => {
      this.req(t, e, r + 1);
    }, this.__timeout);
  }
};
TargetAds.prototype.getOtherCounters = function () {
  if (!this.__otrack) {
    return {};
  }
  if (!TargetAdsIsCookiesAvailable()) {
    this.log("Cookies are not available", true);
    return {
      ycid: "",
      gcid: ""
    };
  }
  const t = document.cookie.match("(?:^|;)\\s*_ym_uid=([^;]*)");
  const e = t ? decodeURIComponent(t[1]) : "";
  const r = document.cookie.match("(?:^|;)\\s*_ga=([^;]*)");
  return {
    ycid: e,
    gcid: r ? decodeURIComponent(r[1]) : ""
  };
};
TargetAds.prototype.waitForYandexCounter = function (t = 7, e = 300) {
  return new Promise(r => {
    if (!this.__otrack) {
      r(false);
      return;
    }
    if (!TargetAdsIsCookiesAvailable()) {
      this.log("Cookies are not available", true);
      r(false);
      return;
    }
    let i = 0;
    const s = () => {
      if (document.cookie.match("(?:^|;)\\s*_ym_uid=([^;]*)")) {
        r(true);
      } else {
        i++;
        if (i >= t) {
          r(false);
        } else {
          setTimeout(s, e);
        }
      }
    };
    s();
  });
};
TargetAds.prototype.defaultParams = function () {
  return {
    dl: this.convertToString(document.location.href),
    ref: this.convertToString(document.referrer),
    ul: this.convertToString(window.navigator.language.toLowerCase()),
    ww: this.convertToString(window.screen.availWidth),
    wh: this.convertToString(window.screen.availHeight),
    dt: this.convertToString(document.title),
    pid: this.convertToString(this.projectId),
    cid: this.getCid(),
    yandexuid: this.convertToString(this.getYandexuid())
  };
};
TargetAds.prototype.convertToString = function (t) {
  if ((t || t === 0) && typeof t != "object") {
    try {
      return String(t);
    } catch (t) {
      return "";
    }
  }
  return "";
};
TargetAds.prototype.isValidString = function (t) {
  if (t == null) {
    return false;
  }
  if ((t = String(t)).trim() === "") {
    return false;
  }
  return !["null", "undefined", "nan", "n/a", "not applicable", "none"].includes(t.toLowerCase());
};
TargetAds.prototype.convertToNumber = function (t) {
  try {
    if (t === Infinity || t === -Infinity) {
      return 0;
    }
    const e = Number(t);
    if (isNaN(e)) {
      return 0;
    } else {
      return e;
    }
  } catch (t) {
    return 0;
  }
};
TargetAds.prototype.convertToObjectString = function (t, e = 0) {
  if (t && typeof t == "object") {
    try {
      const r = {};
      if (e) {
        Object.keys(t).slice(0, e).map(e => r[e] = this.convertToString(t[e]));
      } else {
        Object.keys(t).map(e => r[e] = this.convertToString(t[e]));
      }
      return r;
    } catch (t) {
      return {};
    }
  }
  return {};
};
TargetAds.prototype.getValueOrDefault = function (t, e, r, i) {
  if (t && typeof t == "object" && t[e]) {
    if (i === "string" && typeof t[e] != "object") {
      return this.convertToString(t[e]);
    }
    if (i === "number") {
      return this.convertToNumber(t[e]);
    }
  }
  return r;
};
TargetAds.prototype.onChangeLocation = function () {
  const t = window.location.href;
  if (((t, e, r = false) => {
    try {
      if (/#\/.*/.test(t) && /#\/.*/.test(e)) {
        const i = t.split("#/")[1];
        const s = e.split("#/")[1];
        if (r) {
          return i !== s;
        } else {
          return i.split("#")[0] !== s.split("#")[0];
        }
      }
      if (r) {
        return t !== e;
      } else {
        return t.split("#")[0] !== e.split("#")[0];
      }
    } catch (t) {
      this.log(t);
    }
    return false;
  })(this.currentUrl, t, this.isCheckAnchor)) {
    this.event("page_view");
    this.currentUrl = t;
    return t;
  }
};
TargetAds.prototype.prepaidEcomData = function (t, e) {
  let r = {};
  if (t === "purchase") {
    if (!e.hasOwnProperty("id") || typeof e.items != "object" || e.items.length < 1) {
      this.log("Purchase id and items is required", true);
      return -1;
    }
    r.ecommerce = {
      type: t,
      id: this.getValueOrDefault(e, "id", "", "string"),
      quantity: this.getValueOrDefault(e, "quantity", 0, "number"),
      amount: this.getValueOrDefault(e, "amount", 0, "number")
    };
    r.ecommerce_items = {
      id: [],
      title: [],
      category1: [],
      category2: [],
      brand: [],
      variant: [],
      quantity: [],
      price: []
    };
    for (const t of e.items) {
      if (t.hasOwnProperty("id") || t.hasOwnProperty("title")) {
        if (this.convertToString(t.id) !== "" || this.convertToString(t.title) !== "") {
          r.ecommerce_items.id.push(this.getValueOrDefault(t, "id", "", "string"));
          r.ecommerce_items.title.push(this.getValueOrDefault(t, "title", "", "string"));
          r.ecommerce_items.category1.push(this.getValueOrDefault(t, "category1", "", "string"));
          r.ecommerce_items.category2.push(this.getValueOrDefault(t, "category2", "", "string"));
          r.ecommerce_items.brand.push(this.getValueOrDefault(t, "brand", "", "string"));
          r.ecommerce_items.variant.push(this.getValueOrDefault(t, "variant", "", "string"));
          r.ecommerce_items.quantity.push(this.getValueOrDefault(t, "quantity", 0, "number"));
          r.ecommerce_items.price.push(this.getValueOrDefault(t, "price", 0, "number"));
        } else {
          this.log("Product adding error. Name or id incorrect", true);
        }
      } else {
        this.log("Product adding error. Name or id is required", true);
      }
    }
    if (r.ecommerce_items.id.length === 0 || r.ecommerce_items.title.length === 0) {
      this.log("Items must not be empty");
      return -1;
    }
  } else {
    if (!e.hasOwnProperty("id") && !e.hasOwnProperty("title")) {
      this.log("Item name or id is required");
      return -1;
    }
    if (this.convertToString(e.id) === "" && this.convertToString(e.title) === "") {
      this.log("Item name or id incorrect", true);
      return -1;
    }
    r.ecommerce_items = {
      id: [this.getValueOrDefault(e, "id", "", "string")],
      title: [this.getValueOrDefault(e, "title", "", "string")],
      category1: [this.getValueOrDefault(e, "category1", "", "string")],
      category2: [this.getValueOrDefault(e, "category2", "", "string")],
      brand: [this.getValueOrDefault(e, "brand", "", "string")],
      variant: [this.getValueOrDefault(e, "variant", "", "string")],
      quantity: [1],
      price: [this.getValueOrDefault(e, "price", 0, "number")]
    };
  }
  return r;
};
TargetAds.prototype.event = function (t, e = {}) {
  if (t.constructor !== String) {
    const n = TargetAdsQueues.peek();
    TargetAdsQueues.dequeue(n);
    return this.log(`Name of invalid type-${typeof t}.Should be String`, true);
  }
  if (this.__debug) {
    this.log(`Data for send:${t};${JSON.stringify(e)}`);
    this.log(`State:${localStorage.getItem("_tads_init")}`);
  }
  let r = {};
  if (window.localStorage.getItem("_tads_uid")) {
    r.uid = window.localStorage.getItem("_tads_uid");
  }
  if (t === "page_view") {
    if (typeof e == "object" && Object.entries(e).length > 0 && !Array.isArray(e)) {
      let T = {};
      for (let S in e) {
        T[S] = e[S];
      }
      if (T.user && typeof T.user == "object" && !Array.isArray(T.user)) {
        r.cp = {};
        if (T.user.hasOwnProperty("uid")) {
          if (this.isValidString(this.convertToString(T.user.uid))) {
            r.uid = this.convertToString(T.user.uid);
            window.localStorage.setItem("_tads_uid", r.uid);
          } else {
            this.log("TargetAds: incorrect uid argument", true);
          }
          delete T.user.uid;
        } else {
          this.log("TargetAds: uid argument not found", true);
        }
        r.cp = Object.assign(r.cp || {}, this.convertToObjectString(T.user, 5));
        delete T.user;
      } else {
        this.log("TargetAds: user object and his uid argument not found", true);
      }
      if (T.event_params && typeof T.event_params == "object" && !Array.isArray(T.event_params)) {
        if (T.event_params.hasOwnProperty("uid")) {
          if (this.isValidString(this.convertToString(T.event_params.uid))) {
            r.uid = this.convertToString(T.event_params.uid);
            window.localStorage.setItem("_tads_uid", r.uid);
          } else {
            this.log("TargetAds: incorrect uid argument", true);
          }
          delete T.event_params.uid;
        } else {
          this.log("TargetAds: uid argument not found", true);
        }
        r.cp = this.convertToObjectString(Object.assign(r.cp || {}, T.event_params), 5);
        delete T.event_params;
      }
      if (r.cp && r.cp.hasOwnProperty("uid")) {
        delete r.cp.uid;
      }
    }
    function i(t) {
      const e = JSON.stringify(t);
      let r = 0;
      for (let t = 0; t < e.length; t++) {
        r = (r << 5) - r + e.charCodeAt(t);
        r &= r;
      }
      return r;
    }
    const a = this.defaultParams();
    const c = (t, e = 1800000) => {
      const r = new Date().getTime();
      const i = localStorage.getItem(t);
      const s = i ? this.convertToNumber(i) : 0;
      localStorage.setItem(t, `${r}`);
      if (s) {
        if (r - s > e) {
          return 0;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    };
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    const u = i({
      date: d
    });
    const g = i({
      dl: a.dl,
      cid: a.cid,
      pid: a.pid,
      date: d,
      domain: this.convertToString(document.location.host)
    });
    const l = "_tads_lt_" + i({
      pid: a.pid
    });
    const h = localStorage.getItem("_tads_v_" + u);
    for (let w = 0; w < localStorage.length; w++) {
      const A = localStorage.key(w);
      if (A.includes("_tads_v_") && A !== "_tads_v_" + u) {
        localStorage.removeItem(A);
      }
    }
    const m = (t, e) => {
      const r = new RegExp(`${e}=([^&]+)`);
      const i = t.match(r);
      if (i) {
        return i[1];
      }
    };
    if (c(l) && h) {
      const b = window.location.href;
      const O = {};
      const I = ["utm_medium", "utm_source", "utm_campaign", "utm_term", "yclid"];
      for (const j of I) {
        const k = m(b, j);
        if (k) {
          O[j] = k;
        }
      }
      if (Object.keys(O).length && this.isCheckUtm) {
        const D = JSON.parse(h);
        if (D.includes(g)) {
          this.startSession = 0;
          if (this.isOnlyOneInDay) {
            const P = TargetAdsQueues.peek();
            TargetAdsQueues.dequeue(P);
            return;
          }
        } else {
          if (D.length === 10) {
            D.shift();
          }
          this.startSession = 1;
          const C = i(`${this.projectId}_${this.getCid()}_${this.getUserAgent()}_${new Date().getTime()}`);
          localStorage.setItem(this.sessionIdPrefix, String(C));
          D.push(g);
          localStorage.setItem("_tads_v_" + u, JSON.stringify(D));
        }
      } else {
        this.startSession = 0;
        if (this.isOnlyOneInDay) {
          const N = TargetAdsQueues.peek();
          TargetAdsQueues.dequeue(N);
          return;
        }
      }
    } else {
      this.startSession = 1;
      const $ = i(`${this.projectId}_${this.getCid()}_${this.getUserAgent()}_${new Date().getTime()}`);
      localStorage.setItem(this.sessionIdPrefix, String($));
      if (h && this.isOnlyOneInDay) {
        const q = TargetAdsQueues.peek();
        TargetAdsQueues.dequeue(q);
        return;
      }
      localStorage.setItem("_tads_v_" + u, JSON.stringify([g]));
      localStorage.setItem(l, `${new Date().getTime()}`);
    }
    const p = window.location.href;
    const _ = m(p, "pl");
    const f = m(p, "cn");
    const y = m(p, "tclick");
    if (this.convertToNumber(_) && this.convertToNumber(f) && y) {
      r.cn = this.convertToNumber(f);
      r.pl = this.convertToNumber(_);
      r.tclick = y;
    }
    r.event_name = "page_view";
    const v = () => {
      if (typeof r.cp == "object" && r.cp.hasOwnProperty("uid")) {
        if (!this.isValidString(this.convertToString(r.cp.uid))) {
          this.log("TargetAds: incorrect uid argument in event_params", true);
          delete r.cp.uid;
        }
      }
      Object.assign(r, this.getOtherCounters());
      let t = Object.assign(this.defaultParams(), {
        edttm: Math.floor(Date.now() / 1000),
        sid: this.getSid()
      });
      const e = {
        ss: this.startSession
      };
      t = Object.assign(t, e);
      let i = new URLSearchParams(t).toString();
      try {
        let t = JSON.stringify(r);
        this.req(i, t).catch(t => this.log(t, true));
      } catch (t) {
        return this.log(`Can not send data:${t}`, true);
      }
    };
    if (this.__otrack && this.startSession === 1) {
      const Q = TargetAdsQueues.peek();
      TargetAdsQueues.dequeue(Q);
      this.waitForYandexCounter().then(() => {
        TargetAdsQueues.enqueue(Q);
        v();
      });
      return;
    }
    v();
    return;
  }
  if (t === "event" && e && Object.entries(e).length > 0 && !Array.isArray(e)) {
    let x = {};
    for (let V in e) {
      x[V] = e[V];
    }
    if (window.localStorage.getItem("_tads_uid")) {
      r.uid = window.localStorage.getItem("_tads_uid");
    }
    if (x.user && typeof x.user == "object" && !Array.isArray(x.user)) {
      r.cp = {};
      if (x.user.hasOwnProperty("uid")) {
        if (this.isValidString(this.convertToString(x.user.uid))) {
          r.uid = this.convertToString(x.user.uid);
          window.localStorage.setItem("_tads_uid", r.uid);
        } else {
          this.log("TargetAds: incorrect uid argument", true);
        }
        delete x.user.uid;
      } else {
        this.log("TargetAds: uid argument not found", true);
      }
      r.cp = Object.assign(r.cp || {}, this.convertToObjectString(x.user, 5));
      delete x.user;
    } else {
      this.log("TargetAds: user object and his uid argument not found (an optional parameter)", true);
    }
    if (!x.event_name || this.convertToString(x.event_name) === "") {
      const E = TargetAdsQueues.peek();
      TargetAdsQueues.dequeue(E);
      return this.log("TargetAds: Check the event data", true);
    }
    r.event_type = this.convertToString(x.event_type);
    r.event_category = this.convertToString(x.event_category);
    r.event_name = this.convertToString(x.event_name);
    r.event_value = this.convertToNumber(x.event_value);
    if (x.event_params && typeof x.event_params == "object" && !Array.isArray(x.event_params)) {
      if (x.event_params.hasOwnProperty("uid")) {
        if (this.isValidString(this.convertToString(x.event_params.uid))) {
          r.uid = this.convertToString(x.event_params.uid);
          window.localStorage.setItem("_tads_uid", r.uid);
        } else {
          this.log("TargetAds: incorrect uid argument", true);
        }
        delete x.event_params.uid;
      } else {
        this.log("TargetAds: uid argument not found", true);
      }
      r.cp = this.convertToObjectString(Object.assign(r.cp || {}, x.event_params), 5);
    }
    if (r.cp && r.cp.hasOwnProperty("uid")) {
      delete r.cp.uid;
    }
  } else if (t === "add_to_cart" && Object.entries(e).length > 0 && !Array.isArray(e)) {
    const J = {};
    for (let L in e) {
      J[L] = e[L];
    }
    r = this.prepaidEcomData(t, e);
    if (J.event_params && typeof J.event_params == "object" && !Array.isArray(J.event_params)) {
      if (J.event_params.hasOwnProperty("uid")) {
        if (this.isValidString(this.convertToString(J.event_params.uid))) {
          r.uid = this.convertToString(J.event_params.uid);
          window.localStorage.setItem("_tads_uid", r.uid);
        } else {
          this.log("TargetAds: incorrect uid argument", true);
        }
        delete J.event_params.uid;
      } else {
        this.log("TargetAds: uid argument not found", true);
      }
      r.cp = this.convertToObjectString(Object.assign(r.cp || {}, J.event_params), 5);
      delete J.event_params;
    }
    if (r.cp && r.cp.hasOwnProperty("uid")) {
      delete r.cp.uid;
    }
    if (r === -1) {
      const U = TargetAdsQueues.peek();
      TargetAdsQueues.dequeue(U);
      return this.log("TargetAds: Check add_to_cart data", true);
    }
    r.event_name = "add_to_cart";
  } else {
    if (t !== "purchase" || !(Object.entries(e).length > 0) || Array.isArray(e)) {
      const R = TargetAdsQueues.peek();
      TargetAdsQueues.dequeue(R);
      return this.log("Can not send data", true);
    }
    {
      const M = {};
      for (let H in e) {
        M[H] = e[H];
      }
      r = this.prepaidEcomData(t, e);
      if (M.event_params && typeof M.event_params == "object" && !Array.isArray(M.event_params)) {
        if (M.event_params.hasOwnProperty("uid")) {
          if (this.isValidString(this.convertToString(M.event_params.uid))) {
            r.uid = this.convertToString(M.event_params.uid);
            window.localStorage.setItem("_tads_uid", r.uid);
          } else {
            this.log("TargetAds: incorrect uid argument", true);
          }
          delete M.event_params.uid;
        } else {
          this.log("TargetAds: uid argument not found", true);
        }
        r.cp = this.convertToObjectString(Object.assign(r.cp || {}, M.event_params), 5);
        delete M.event_params;
      }
      if (r.cp && r.cp.hasOwnProperty("uid")) {
        delete r.cp.uid;
      }
      if (r === -1) {
        const Y = TargetAdsQueues.peek();
        TargetAdsQueues.dequeue(Y);
        return this.log("TargetAds: Check purchase data", true);
      }
      r.event_name = "purchase";
    }
  }
  if (typeof r.cp == "object" && r.cp.hasOwnProperty("uid")) {
    if (!this.isValidString(this.convertToString(r.cp.uid))) {
      this.log("TargetAds: incorrect uid argument in event_params", true);
      delete r.cp.uid;
    }
  }
  Object.assign(r, this.getOtherCounters());
  let s = Object.assign(this.defaultParams(), {
    edttm: Math.floor(Date.now() / 1000),
    sid: this.getSid()
  });
  if (r.event_name === "page_view") {
    const F = {
      ss: this.startSession
    };
    s = Object.assign(s, F);
  }
  let o = new URLSearchParams(s).toString();
  try {
    let z = JSON.stringify(r);
    this.req(o, z).catch(t => this.log(t, true));
  } catch (G) {
    return this.log(`Can not send data:${G}`, true);
  }
};
class TargetAdsQueue {
  constructor(t = {}, e = 0, r = 0) {
    this.elements = t;
    this.head = e;
    this.tail = r;
  }
  enqueue(t) {
    this.elements[this.tail] = t;
    this.tail++;
  }
  dequeue() {
    const t = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return t;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
const TargetAdsQueues = new TargetAdsQueue();
const onHandlerEvent = (t = []) => {
  try {
    if (t.length > 0) {
      if (t[0] === "init") {
        if (t.length > 1 && isNaN(t[1])) {
          console.log(`State:${JSON.stringify([...t].slice(1))}`);
          console.warn("The ID of the TargetAds project is incorrect");
          return;
        } else {
          localStorage.setItem("_tads_init", JSON.stringify([...t].slice(1).map(t => t)));
          return;
        }
      }
      const e = JSON.parse(localStorage.getItem("_tads_init"));
      if (e && e.length > 0) {
        const r = e[0];
        TargetAdsQueues.enqueue(t);
        localStorage.setItem(`_tads${r}_queue`, JSON.stringify(TargetAdsQueues));
      } else {
        console.log(`State:${localStorage.getItem("_tads_init")}`);
        console.log("Error:First perform initialization TargetAds");
      }
    }
    if (localStorage.getItem("_tads_init")) {
      const t = JSON.parse(localStorage.getItem("_tads_init"));
      new TargetAds(t[0], t[1]).listenerLocation();
      if (TargetAdsQueues.length > 0) {
        const e = TargetAdsQueues.peek();
        if (typeof e == "object" && e.length > 0) {
          window._targetADS(e[0], e[1]);
        } else if (t && t.length > 1 && t[1]) {
          console.log("Error:TargetAds Queue item is empty");
        }
      } else if (t && t.length > 1 && t[1]) {
        console.log("Error:TargetAds Queue is empty");
      }
    }
  } catch (t) {
    console.error("[TargetAds Error]: ", t);
  }
};
function TargetAdsIsStorageAvailable() {
  if ("localStorage" in window || typeof localStorage == "object") {
    var t = "TargetADSTest";
    try {
      localStorage.setItem(t, t);
      if (localStorage.getItem(t) !== "TargetADSTest") {
        return false;
      } else {
        localStorage.removeItem(t);
        return true;
      }
    } catch (t) {
      return false;
    }
  }
  return false;
}
function TargetAdsIsCookiesAvailable() {
  if (typeof navigator == "undefined") {
    return false;
  }
  if (typeof navigator.cookieEnabled == "boolean") {
    return navigator.cookieEnabled;
  }
  try {
    document.cookie = "TargetAdsTest=1";
    const t = document.cookie.indexOf("TargetAdsTest=1") !== -1;
    document.cookie = "TargetAdsTest=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    return t;
  } catch (t) {
    return false;
  }
}
if (typeof window != "undefined" && !TargetAdsIsStorageAvailable()) {
  console.log("TargetAds:LocalStorage unavailable");
}
if (typeof window != "undefined" && typeof navigator != "undefined" && !TargetAdsIsCookiesAvailable()) {
  console.log("TargetAds:Cookies unavailable");
}
try {
  if (localStorage.getItem("_tads_init")) {
    const t = JSON.parse(localStorage.getItem("_tads_init"));
    if (localStorage.getItem(`_tads${t[0]}_queue`)) {
      const e = JSON.parse(localStorage.getItem(`_tads${t[0]}_queue`));
      localStorage.removeItem(`_tads${t[0]}_queue`);
      const r = new TargetAdsQueue(e.elements, e.head, e.tail);
      for (let e of Object.values(r.elements)) {
        new TargetAds(t[0], t[1]);
        window._targetADS(e[0], e[1]);
      }
    }
  }
} catch (t) {
  console.error("[TargetAds Error]: ", t);
}
const _targetadsGetId = () => {
  try {
    const t = localStorage.getItem("_tads_init");
    const e = JSON.parse(t);
    if (e && e[0]) {
      const t = `_tads${e[0]}_cid`;
      const r = window.localStorage.getItem(t);
      if (r && !isNaN(Number(r))) {
        return r;
      } else {
        return "";
      }
    }
  } catch (t) {
    return "";
  }
};
window.targetAdsDataLayer = new Proxy([], {
  set: function (t, e, r) {
    try {
      return e === "data" && (onHandlerEvent(r), true);
    } catch (t) {
      console.error("[TargetAds Error]: ", t);
      return false;
    }
  }
});
if (typeof window != "undefined" && window.history && typeof window.history.pushState == "function" && window.history.state) {
  let t = window.history.state;
  let e = window.location.href;
  const r = setInterval(function () {
    if (localStorage.getItem("_tads_init")) {
      const i = JSON.parse(localStorage.getItem("_tads_init"));
      if (typeof i[1] != "object" || !i[1].isCheckLocation) {
        clearInterval(r);
        return;
      }
      if (window.history.state !== t) {
        t = window.history.state;
        const r = new TargetAds(i[0], i[1]);
        r.currentUrl = e;
        const s = r.onChangeLocation();
        if (s) {
          e = s;
        }
      }
    }
  }, 2000);
}
//# sourceMappingURL=TargetAds_WebSDK.js.map