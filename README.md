array-comprehensions
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

// [for (x of [1,2,3]) inc(x)]
forOf([1, 2, 3], inc); // => [2, 3, 4]

// [for (x of [1,2,3]) for (y of [3,2,1]) mul(x,y)]
forOf([1, 2, 3], [3, 2, 1], mul); // => [3, 2, 1, 6, 4, 2, 9, 6, 3]

// [for (x of [1,2,3]) if (isGreatherThan1(x)) sqr(x)]
forOf([1, 2, 3], isGreatherThan1, sqr); // => [4, 9]
```

API
---

### forOf

#### `forOf(array, do)`

Execute the function `do` for each item of `array`.

```js
forOf([1, 2, 3], function(x){
  return x+1;
}); // => [2, 3, 4]
```

#### `forOf(array, condition, do)`

Execute the function `do` for each item of `array` that fullfills the `condition`.

```js
forOf([1, 2, 3, 4], function(x) {
  return x % 2 === 0;
}, function(x) {
  return x*x;
}); // => [4,16]
```

#### `forOf(array1, array2, do)`

Execute the function `do` for each item of `array1` with every item of `array2`.

```js
forOf([1, 2], [1,2], function(x, y) {
  return x*y;
}); // => [1,2,2,4]
```

