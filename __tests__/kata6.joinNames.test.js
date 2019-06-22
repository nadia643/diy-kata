const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames('Nadia', 'CLaire', 'Sarah')).toBe("Nadia, Claire & Sarah")
    expect(joinNames('Mona', 'Naomi', 'George', 'Rob')).toBe("Mona, Naomi, George & Rob")

  });
});
