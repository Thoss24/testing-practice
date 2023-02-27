const forEachFunc = require('../code/mocking'); // forEach is our function from mocking.js which takes an array and callback function as its arguments

const mockCallback = jest.fn(x => x * 42 + x); // Mock function created using jest.fn()

test('forEach mock function', () => {
    forEachFunc([0, 1], mockCallback) // array and mock function passed in to forEachFunc

    expect(mockCallback.mock.calls).toHaveLength(2); // The mock property is where the data about how the function has been called and what the function returned is kept
});