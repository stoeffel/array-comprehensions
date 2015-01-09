var forOf = require('./forOf.js'),
  expect = require('expect.js');

describe('for(iterable, do)', () => {
  it('should call do for each item of ther iterable', () => {
    expect(forOf([1,2,3])).to.eql([1,2,3]);
    expect(forOf([1,2,3], x => { return x+1; })).to.eql([2,3,4]);
  });
});

describe('for(iterable, condition, do)', () => {
  it('should check the condition for each item', () => {
    expect(forOf([-1,0,1,2,3], x => { return x > 0; }, x => { return x; })).to.eql([1,2,3]);
  });
});

describe('for(iterable, iterable, do)', () => {
  it('should call do for each item and the correspondant item of the sec list', () => {
    expect(forOf([1,2,3], [3,2,1], (x,y) => { return x*y; })).to.eql([3, 2, 1, 6, 4, 2, 9, 6, 3]);
    expect(forOf([1,2,3], [4,3,2,1], (x,y) => { return x*y; })).to.eql([4, 3, 2, 1, 8, 6, 4, 2, 12, 9, 6, 3]);
    expect(forOf([1,2], [3,2,1], (x,y) => { return x*y; })).to.eql([3, 2, 1, 6, 4, 2]);
  });
});
