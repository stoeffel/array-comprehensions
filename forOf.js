function wrap(fn) {
  return function(x) {
    return fn(x);
  };
}

function inAndOut(x) {
  return x;
}

function isFunction(fn) {
  return typeof fn === 'function';
}

function isCondition(fn, fnCondIter) {
  return fn && isFunction(fnCondIter);
}

function isObject(obj) {
  return typeof obj === 'object';
}

function forOfIf(iterable, condition, fn) {
  return iterable
            .filter(wrap(condition))
            .map(wrap(fn));
}

function forOf(iterable, secondIterable, fn) {

  var result = [];

  if (secondIterable) {
    iterable.forEach(function(x, i) {
      secondIterable.forEach(function(y) {
        result.push(fn(x, y));
      });
    });
  } else {
    result = iterable.map(wrap(fn));
  }
  
  return result;
}

module.exports = function(iterable, fnCondIter, fn) {

  var condition = isCondition(fn, fnCondIter)? fnCondIter : null;
  var secondIterable;

  fn = fn || inAndOut;

  if (condition) {
    return forOfIf(iterable, condition, fn);
  } else {
    fn = isFunction(fnCondIter)? fnCondIter : fn;
    secondIterable = isObject(fnCondIter)? fnCondIter : null;

    return forOf(iterable, secondIterable, fn);
  }
};
