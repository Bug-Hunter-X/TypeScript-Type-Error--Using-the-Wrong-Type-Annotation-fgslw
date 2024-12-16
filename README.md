# TypeScript Type Error: Using the Wrong Type Annotation

This repository demonstrates a common TypeScript error: using the wrong type annotation. The `add` function is expecting two numbers, but we're passing in a number and a string, resulting in a type error.

## Bug Description
The `add` function is defined to accept two numbers as arguments. In the `result3` variable assignment, the function is called with a number and a string, causing TypeScript's type checking to fail and throw an error.

## Bug Solution
The solution is to ensure both inputs to the `add` function are numbers. This can be done by either explicitly converting the string to a number using `parseInt` or by changing the type of variable passed in.