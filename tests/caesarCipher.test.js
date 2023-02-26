let caesarCipher = require('../code/caesarCipher');

describe("Caesar Cipher tests", () => {
    test("Caesar uppercase", () => {
        expect(caesarCipher("C")).toBe("D")
    });
    test("Caesar lowercase", () => {
        expect(caesarCipher("b")).toBe("c")
    });
})