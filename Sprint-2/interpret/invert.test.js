const invert = require("./invert.js");

// Test: empty object returns empty object
test("returns empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});
