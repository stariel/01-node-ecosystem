module.exports = {

  add: function add(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
      return null;
    }
    else {
      return (a + b);
    }
  },

  sub: function sub(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) {
      return null;
    }
    else {
      return (a - b);
    }
  },

};