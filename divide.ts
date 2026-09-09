/**
 * Returns the division of two numbers.
 * Throws an error when dividing by zero.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;
