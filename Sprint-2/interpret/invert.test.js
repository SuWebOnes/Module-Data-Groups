const invert = require("./invert.js");

// Test: empty object returns empty object
test("returns empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});
// Test: single key-value pair
test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
