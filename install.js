const _observe = require('./index');

function observe(type, opts, cb) {
  const el = this;
  return _observe(el, type, opts, cb);
}

Element.prototype.observe = observe;