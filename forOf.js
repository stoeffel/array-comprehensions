function wrap(fn) {
  return function(x) {
    return fn(x);
  };
}

module.exports = function forOf(iterable, fnConditionOrIterable, fn) {

  var filtered;
  var sec;
  var condition;

  if (fn && typeof fnConditionOrIterable === 'function') {
    condition = fnConditionOrIterable;
  } else if (typeof fnConditionOrIterable === 'object') {
    sec = fnConditionOrIterable;
  } else {
    fn = fnConditionOrIterable;
  }

  fn = fn || function(x) {
    return x;
  };

  if (condition) {
    return iterable.filter(wrap(condition)).map(wrap(fn));
  } else {
    return iterable.map(function(x, i) {
      if (sec) {
        return fn(x, sec[i]);
      } else {
        return fn(x);
      }
    });
  }
};
