function wrap(fn) {
  return function(x) {
    return fn(x);
  };
}

function inAndOut(x) {
  return x;
}

module.exports = function forOf(iterable, fnCondIter, fn) {

  var filtered;
  var sec;
  var condition;

  if (fn && typeof fnCondIter === 'function') {
    condition = fnCondIter;
  } else if (typeof fnCondIter === 'object') {
    sec = fnCondIter;
  } else {
    fn = fnCondIter;
  }

  fn = fn || inAndOut;

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
