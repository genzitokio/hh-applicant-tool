var r = require("./4.js");
module.exports = function (e, t) {
  return !!e && r(function () {
    if (t) {
      e.call(null, function () {}, 1);
    } else {
      e.call(null);
    }
  });
};