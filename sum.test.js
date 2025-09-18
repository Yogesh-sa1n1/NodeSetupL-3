// sum.test.js

// Simple function
function sum(a, b) {
  return a + b;
}

// Jest test case
test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
