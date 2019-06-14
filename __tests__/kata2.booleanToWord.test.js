const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('returns yes when booleanToWOrd is true', () => {
    expect(booleanToWord(true)).toBe('Yes')
  });

  it('returns no when booleanToWord is false', () => {
    expect(booleanToWord(false)).toBe('No');
  });
});