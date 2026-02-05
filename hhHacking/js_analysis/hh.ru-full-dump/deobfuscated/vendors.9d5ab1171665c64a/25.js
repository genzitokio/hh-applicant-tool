var r = require("./10.js");
var o = require("./26.js");
var i = require("./27.js");
var a = require("./12.js");
var s = require("./29.js");
module.exports = function (e, t) {
  var n = e == 1;
  var u = e == 2;
  var c = e == 3;
  var l = e == 4;
  var d = e == 6;
  var f = e == 5 || d;
  var p = t || s;
  return function (t, s, h) {
    var m;
    var v;
    var _ = i(t);
    var y = o(_);
    var g = r(s, h, 3);
    for (var b = a(y.length), w = 0, E = n ? p(t, b) : u ? p(t, 0) : undefined; b > w; w++) {
      if ((f || w in y) && (v = g(m = y[w], w, _), e)) {
        if (n) {
          E[w] = v;
        } else if (v) {
          switch (e) {
            case 3:
              return true;
            case 5:
              return m;
            case 6:
              return w;
            case 2:
              E.push(m);
          }
        } else if (l) {
          return false;
        }
      }
    }
    if (d) {
      return -1;
    } else if (c || l) {
      return l;
    } else {
      return E;
    }
  };
};