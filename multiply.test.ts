/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("returns 0 when one factor is 0", () => {
    expect(window.multiply(4, 0)).toBe(0);
  });

  it("multiplies negative numbers", () => {
    expect(window.multiply(-4, -3)).toBe(12);
  });

  it("multiplies a positive and a negative number", () => {
    expect(window.multiply(-4, 3)).toBe(-12);
  });
});

export {};
