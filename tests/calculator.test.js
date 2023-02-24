let Calculator = require('../code/calculator');

describe("Calculator functions", () => {

    let calculator;

    beforeEach(() => { // beforeEach creates a new instance of Calculator class for each test
        calculator = new Calculator()
    })
    // Addition tests
    test("Add", () => {
        expect(calculator.add(2, 2)).toBe(4)
    });
    test("Add is undefined", () => {
        expect(calculator.add()).toBe(NaN)
    });
    // Subtraction tests
    test("Subtract", () => {
        expect(calculator.subtract(5, 2)).toBe(3)
    });
    test("Subtract is undefined", () => {
        expect(calculator.subtract()).toBe(NaN)
    });
    // Division tests
    test("Divide", () => {
        expect(calculator.divide(10, 2)).toBe(5)
    });
    test("Divide is undefined", () => {
        expect(calculator.divide()).toBe(NaN)
    });
    // Multiplication
    test("Multiply", () => {
        expect(calculator.multiply(2, 5)).toBe(10)
    });
    test("Multiply is undefined", () => {
        expect(calculator.multiply()).toBe(NaN)
    });
});