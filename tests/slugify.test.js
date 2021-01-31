const sh = require("../dist/slughorn.cjs");

test("sends 'Hello World' to slugify", () => {
  expect(sh.convert('Hello World')).toBe('hello-world');
});

test("sends 'Hello 45 World' to slugify", () => {
  expect(sh.convert('Hello 45 World')).toBe('hello-45-world');
});

test("sends 'Hello $ World' to slugify", () => {
  expect(sh.convert('Hello $ World')).toBe('hello-dollar-world');
});

test("sends 'Hello the World' to slugify", () => {
  expect(sh.convert('Hello the World')).toBe('hello-world');
});

test("sends 'Hello the World ©' to slugify", () => {
  expect(sh.convert('Hello the World ©')).toBe('hello-world-copyright');
});

test("sends 'Hellò the World' to slugify", () => {
  expect(sh.convert('Hellò the World')).toBe('hello-world');
});

test("sends 'Hello \"World' to slugify", () => {
  expect(sh.convert('Hello "World')).toBe('hello-world');
});

test("sends 'Hello \"World' to slugify with _ separator", () => {
  expect(sh.convert('Hello "World', {separator: '_'})).toBe('hello_world');
});

test("sends 'Hello the \"World' to slugify with _ separator and maxLength = 8", () => {
  expect(sh.convert('Hello the "World', {separator: '_', maxLength: 8 })).toBe('hello_wo');
});