let caesarCipher = require('../code/caesarCipher');

describe("Caesar Cipher tests", () => {
    test("Caesar uppercase", () => {
        expect(caesarCipher("A", 3)).toBe("D")
    });
    test("Caesar lowercase", () => {
        expect(caesarCipher("a", 3)).toBe("d")
    });
})