array-comprehensions (WIP)
====================

[![Build Status](https://travis-ci.org/stoeffel/array-comprehensions.svg)](https://travis-ci.org/stoeffel/array-comprehensions) [![npm version](https://badge.fury.io/js/array-comprehensions.svg)](http://badge.fury.io/js/array-comprehensions)
> Array comprehensions if you don't want to use 6to5 or traceur.

Installation
------------

`npm install array-comprehensions`

Usage
-----

```js
var forOf = require('array-comprehensions');

function inc(x) {
  return x+1;
}

function mul(x, y) {
  return x*y;
}

function sqr(x) {
  return x*x;
}

function isGreatherThan1(x) {
  return x>1
}

forOf([1, 2, 3], inc); // => [2, 3, 4]
forOf([1, 2, 3], [3, 2, 1], mul); // => [3, 4, 3]
forOf([1, 2, 3], isGreatherThan1, sqr); // => [4, 9]
```

API
---

### forOf

`forOf(iterable, do)`
`forOf(iterable, condition, do)`
`forOf(iterable, iterable, do)`