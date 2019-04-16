const _observe = require('./index');

function observe(opts, cb) {
  const el = this;
  return _observe(el, opts, cb);
}

Element.prototype.observe = observe;