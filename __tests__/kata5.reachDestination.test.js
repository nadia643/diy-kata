const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(20, 10)).toBe(2)
    expect(reachDestination(18, 30)).toBe(1)
    expect(reachDestination(180, 8)).toBe(22.5)
    expect(reachDestination(182, 8)).toBe(23)
  });
});
