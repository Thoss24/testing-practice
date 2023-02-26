let analyzeArr = require('../code/analyze-array');

describe('Array attributes', () => {
    test('Object properties', () => {
        expect(analyzeArr([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5, 
            length: 5
        });
    });

})