const arithmetic = require('../lib/arithmetic.js');
const add = arithmetic.add;
const sub = arithmetic.sub;

describe('add method', () => {
  it('should return null if either argument is a non-number', () => {
    expect(add(1, 'y')).toBeNull();
  });

  it('should return the sum of 2 numbers when they are passed in as parameters', () => {
    expect(add(1, 2)).toBe(3);
  }

  );
});

describe('sub method', () => {
  it('should return null if either argument is a non-number', () => {
    expect(sub(1, 'y')).toBeNull();
  });
  
  it('should return the second number subtracted from the first', () => {
    expect(sub(2, 1)).toBe(1);
  }
  
  );
});