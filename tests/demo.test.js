function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// describe used for grouping the similar tests
describe("Summation tests", () => {
    test("add 1 and 2", () => {
        // expect(actual output).toBe(expected output);
        expect(sum(1, 2)).toBe(3);
    })

    test("add 4 and 5", () => {
        expect(sum(4, 5)).not.toBe(3);
    })
})

describe("Subtraction tests", () => {
    test("subtract 4 and 1", () => {
        expect(subtract(4, 1)).toBe(3);
    })
})

// Jest matchers

test("equality matcher", () => {
    expect(2 * 2).toBe(4);
    expect(4 - 2).not.toBe(5);

    let name = "Foo";
    let n = null;

    expect(n).toBeNull();
    expect(name).toBeTruthy();
    // expect(n).toBeTruthy();

    expect(0).toBeFalsy();
})

test("number matchers", () => {
    let n1 = 100;
    let n2 = -20;
    let n3 = 0;

    expect(n1).toBeGreaterThan(10);
    expect(n2).toBeLessThanOrEqual(0);
})

test("string matchers", () => {

    let string1 = "hello world";

    expect(string1).toMatch(/ello/);
    expect(string1).not.toMatch(/abc/);
})

// setups and teardown

describe("Hooks testing", () => {

    let in1 = 2;
    let in2 = 5;

    beforeAll(() => {
        console.log("before all called");
    })

    afterAll(() => {
        console.log("after all called");
    })

    beforeEach(() => {
        console.log("before each called");
    })

    afterEach(() => {
        console.log("after each called");
    })

    test("adding 2 and 5 should return 7", () => {
        expect(sum(in1, in2)).toBe(7);
    })
})