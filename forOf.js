function wrap(fn) {
  return function(x) {
    return fn(x);
  };
}

function inAndOut(x) {
  return x;
}

module.exports = function forOf(iterable, fnCondIter, fn) {

  var result = [];
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
    result = iterable.filter(wrap(condition)).map(wrap(fn));
  } else {
    iterable.forEach(function(x, i) {
      if (sec) {
        sec.forEach(function(y) {
          result.push(fn(x, y));
        });
      } else {
        result.push(fn(x));
      }
    });
  }
  return result;
};
