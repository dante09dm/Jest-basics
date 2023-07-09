const randomStrings = require("./index");

test("It should return a string", () => {
  expect(typeof randomStrings()).toBe("string");
});
test("Check if a videogame does not exits", () => {
  expect(randomStrings()).not.toMatch(/Halo/);
});