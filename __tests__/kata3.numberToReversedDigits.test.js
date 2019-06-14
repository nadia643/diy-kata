const { numberToReversedDigits } = require('../src');

describe('number', () => {
  it('returns a reversed array of the number\'s digits', () => {
    expect(numberToReversedDigits('12345')).toBe[5, 4, 3, 2, 1]
    expect(numberToReversedDigits('45678')).toBe[8, 7, 6, 5, 4]
  });
});
