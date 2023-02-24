const capitalize = require('../code/capitalize');

describe("Capitalize first letter of string", () => {
    test("Greeting ", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
    test("Is undefined", () => {
        expect(capitalize()).toBe("")
    });
});

