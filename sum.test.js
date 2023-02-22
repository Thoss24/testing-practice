const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// this code returns an expectation object, these are mainly used to call matchers on them. here, toBe(4) is the matcher
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
}); 

// This code is used to check the value of an object
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2}); // toEqual recursively checks every field of an object or array
});

// You can also test for the opposite of a matcher using not:
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});
 
// in tests you can also distinguish between truthiness
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUNdefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const n = 0;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUNdefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

// Most ways of comparing numbers have matcher equivalents
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

// for floating point equality, use toBeCloseTo instead of toEqual
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;

    expect(value).toBeCloseTo(0.3);
});


// You can check strings against regular expressions with toMatch
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// check an array or iterable contains item using toContain
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk')
});

// check whether a function throws an error when its called, use toThrow
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // you can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('You are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(Error);

    // or you can match an exact error message using a regexp like below
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Fail
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!/); // Pass
})