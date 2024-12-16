function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 5); // result2 is 5

//Uncommon error: Using the wrong type annotation
const result3 = add(5, "3"); // This is a type error