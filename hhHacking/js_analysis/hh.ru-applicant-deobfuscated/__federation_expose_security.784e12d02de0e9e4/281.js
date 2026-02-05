const h = () => {
  let e;
  let r;
  const n = new Promise((n, h) => {
    e = n;
    r = h;
  });
  return {
    resolve: e,
    reject: r,
    then: n.then.bind(n),
    catch: n.catch.bind(n),
  };
};
export const fingerprintPromise = h();
export const securePortalFingerprintPromise = h();
