function observe(el, type, opts, cb = null) {
  if (cb === null) {
    cb = opts;
    opts = null;
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === type) {
        cb(mutation)
      }
    });
  });

  observer.observe(el, opts);

  return observer.disconnect;
}


module.exports = observe;