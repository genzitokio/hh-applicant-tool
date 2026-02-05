module.exports = !require("./4.js")(function () {
  return Object.defineProperty({}, "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});