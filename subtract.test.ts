/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("subtracts with zero", () => {
    expect(window.subtract(5, 0)).toBe(5);
  });

  it("subtracts negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });

  it("returns a negative result when b is greater than a", () => {
    expect(window.subtract(3, 5)).toBe(-2);
  });
});

export {};
