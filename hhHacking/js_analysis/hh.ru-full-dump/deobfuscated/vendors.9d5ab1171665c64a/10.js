var r = require("./24.js");
module.exports = function (e, t, n) {
  r(e);
  if (t === undefined) {
    return e;
  }
  switch (n) {
    case 1:
      return function (n) {
        return e.call(t, n);
      };
    case 2:
      return function (n, r) {
        return e.call(t, n, r);
      };
    case 3:
      return function (n, r, o) {
        return e.call(t, n, r, o);
      };
  }
  return function () {
    return e.apply(t, arguments);
  };
};