const greet = require('../lib/greet.js');

describe('greet module', () => {
  it('should return null when passed something other than a string', () => {
    expect(greet()).toBeNull();
  });

  it('should return "hello world" when passed world', () => {
    expect(greet('world')).toBe('hello world');
  }

  );
});