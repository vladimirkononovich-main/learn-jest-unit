const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
  test("correct value", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("extra values", () => {
    expect(mapArrToStrings([1, 2, "qwerty", 3, true])).toEqual(["1", "2", "3"]);
  });
  test("empty array", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test("negation", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
