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

test("sends 'dédoublonner' to slugify with _ separator", () => {
  expect(sh.convert('dédoublonner', {separator: '_' })).toBe('dedoublonner');
});

test("sends number to slugify with", () => {
  expect(sh.convert('-4')).toBe('-4');
});

test("sends -4 to slugify with", () => {
  expect(sh.convert(-4)).toBe(false);
});

test("sends null to sh.convert", () => {
  expect(sh.convert(null)).toBe(false);
});

test("sends undefined to sh.convert", () => {
  expect(sh.convert(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to sh.convert", () => {
  expect(sh.convert(s1)).toBe(false);
});

test("sends true to sh.convert", () => {
  expect(sh.convert(true)).toBe(false);
});

test("sends false to sh.convert", () => {
  expect(sh.convert(false)).toBe(false);
});

test("sends positive even integer to sh.convert", () => {
  expect(sh.convert(2)).toBe(false);
});

test("sends positive odd integer to sh.convert", () => {
  expect(sh.convert(1)).toBe(false);
});

test("sends zero to sh.convert", () => {
  expect(sh.convert(0)).toBe(false);
});

test("sends positive float to sh.convert", () => {
  expect(sh.convert(1.1)).toBe(false);
});

test("sends negative odd integer to sh.convert", () => {
  expect(sh.convert(-1)).toBe(false);
});

test("sends negative even integer to sh.convert", () => {
  expect(sh.convert(-2)).toBe(false);
});

test("sends negative float to sh.convert", () => {
  expect(sh.convert(-1.1)).toBe(false);
});

test("sends empty object to sh.convert", () => {
  expect(sh.convert({})).toBe(false);
});

test("sends empty array to sh.convert", () => {
  expect(sh.convert([])).toBe(false);
});

test("sends array to sh.convert", () => {
  expect(sh.convert(["white", "grey", "black"])).toBe(false);
});

var object = {
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
};

test("sends object to sh.convert", () => {
  expect(sh.convert(object)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to sh.convert", () => {
  expect(sh.convert(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to sh.convert", () => {
  expect(sh.convert(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to sh.convert", () => {
  expect(sh.convert(node)).toBe(false);
});

test("sends regex to sh.convert", () => {
  expect(sh.convert(/ab+c/i)).toBe(false);
});