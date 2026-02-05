var r = require("./0.js");
var o = require("./2.js");
var i = require("./8.js");
var a = require("./22.js");
var s = require("./10.js");
function u(e, t, n) {
  var c;
  var l;
  var d;
  var f;
  var p = e & u.F;
  var h = e & u.G;
  var m = e & u.S;
  var v = e & u.P;
  var _ = e & u.B;
  var y = h ? r : m ? (r[t] ||= {}) : (r[t] || {}).prototype;
  var g = h ? o : (o[t] ||= {});
  var b = (g.prototype ||= {});
  if (h) {
    n = t;
  }
  for (c in n) {
    d = ((l = !p && y && y[c] !== undefined) ? y : n)[c];
    f =
      _ && l ? s(d, r) : v && typeof d == "function" ? s(Function.call, d) : d;
    if (y) {
      a(y, c, d, e & u.U);
    }
    if (g[c] != d) {
      i(g, c, f);
    }
    if (v && b[c] != d) {
      b[c] = d;
    }
  }
}
r.core = o;
u.F = 1;
u.G = 2;
u.S = 4;
u.P = 8;
u.B = 16;
u.W = 32;
u.U = 64;
u.R = 128;
module.exports = u;
