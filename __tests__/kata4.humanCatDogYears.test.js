const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns human years', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
});
});
// Look Ma, no handlebars!!!
