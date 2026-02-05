module.exports =
  !require("./3.js") &&
  !require("./4.js")(function () {
    return (
      Object.defineProperty(require("./19.js")("div"), "a", {
        get: function () {
          return 7;
        },
      }).a != 7
    );
  });
