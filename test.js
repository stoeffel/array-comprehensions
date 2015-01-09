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
    expect(forOf([1,2,3], [1,2,3], (x,y) => { return x*y; })).to.eql([1,4,9]);
    expect(forOf([1,2,3], [1,2,3,4], (x,y) => { return x*y; })).to.eql([1,4,9]);
    expect(forOf([1,2], [1,2,3], (x,y) => { return x*y; })).to.eql([1,4]);
  });
});
