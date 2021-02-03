[![License: MIT](https://img.shields.io/npm/l/@dwtechs/slughorn.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fslughorn.svg)](https://www.npmjs.com/package/@dwtechs/slughorn)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/Slughorn.js)](https://www.npmjs.com/package/@dwtechs/slughorn)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)
[![minified size](https://img.shields.io/bundlephobia/min/@dwtechs/slughorn?color=brightgreen)](https://www.npmjs.com/package/@dwtechs/slughorn)

- [Synopsis](#synopsis)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [IIFE](#iife)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)

## Synopsis

**[Slughorn.js](https://github.com/DWTechs/Slughorn.js)** is an open source library that transforms string value to a url slug optimized for SEO.

- Very lightweight
- Thoroughly tested
- Works in browsers and Node.js
- Old browsers support (IE9)

## Installation

### npm

```bash
$ npm i @dwtechs/slughorn
```

### Yarn

```bash
$ yarn add @dwtechs/slughorn
```

## Usage

### ES6 / TypeScript

```javascript
import { convert } from "@dwtechs/slughorn";

const url = 'Hello World'; // A sentence to be slugified
let slug = convert(url); // hello-world

const options = {separator: '_', maxLength: 8 };
slug = convert(url, options); // hello_wo
```

### CommonJS

```javascript
const slughorn = require("@dwtechs/slughorn/dist/slughorn.cjs");

var url = 'Hello World'; // A sentence to be slugified
var slug = slughorn.convert(url); // hello-world

var options = {separator: '_', maxLength: 8 };
slug = slughorn.convert(url, options); // hello_wo
```

### IIFE

```html
<script src="node-modules/@dwtechs/slughorn/dist/slughorn.iife.min.js"></script>
```

```javascript

var url = 'Hello World'; // A sentence to be slugified
var slug = Slughorn.convert(url); // hello-world

var options = {separator: '_', maxLength: 8 };
slug = convert(url, options); // hello_wo
```

## API Reference

```javascript

convert(url: string, options?: Options): string|false {}

interface Options {
  separator?: string; // a string to replace spaces. Default to '-'
  maxLength?: number; // The max length of the slug. Default to 80
  seo?: boolean; // SEO optimization. Default to 'true'
}

```


## Contributors

Slughorn.js is still in development and we would be glad to get all the help you can provide.
To contribute please read **[contributor.md](https://github.com/DWTechs/Slughorn.js/blob/main/contributor.md)** for detailed installation guide.


## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| language        | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |
