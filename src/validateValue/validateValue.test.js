const validateValue = require("./validateValue");

describe("validateValue", () => {
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("less than correct", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("more than correct", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("upper limit value", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("bottom limit value", () => {
    expect(validateValue(0)).toBe(true);
  });
});
