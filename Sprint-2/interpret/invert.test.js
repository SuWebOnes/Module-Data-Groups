const invert = require("./invert.js");

// Test: empty object returns empty object
test("returns empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});
// Test: single key-value pair
test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

// Test: multiple key-value pairs
test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});