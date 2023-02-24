const reverseString = require('../code/reverse-string');

describe('Reverse a string', () => {

    test("Greeting reversed", () => {
        expect(reverseString("hello")).toBe("olleh");
    });
    test("Is Undefined", () => {
        expect(reverseString()).toBe();
    });
    test("Is Null", () => {
        expect(reverseString(null)).toBe()
    });

});