const add = require('../lib/arithmetic.js');

describe('add method', () => {
  it('should return null if either argument is a non-number', () => {
    expect(add(1, 'y')).toBeNull();
  });

  it('should return the sum of 2 numbers when they are passed in as parameters', () => {
    expect(add(1, 2)).toBe(3);
  }

  );
});