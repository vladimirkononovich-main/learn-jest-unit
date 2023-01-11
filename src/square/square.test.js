const square = require("./square");

describe("square", () => {
  beforeEach(() => {});
  beforeAll(() => {});
  test("correct value", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  afterEach(() => {});
  afterAll(() => {});
});
