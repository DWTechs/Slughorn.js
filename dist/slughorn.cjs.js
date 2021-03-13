/*
MIT License

Copyright (c) 2008 DWTechs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/DWTechs/Slughorn.js
*/

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** MIT License
*
* Copyright (c) 2009 DWTechs
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* https://github.com/DWTechs/CheckHard.js
*/

function isNumeric(number) {
  return !isNaN(number - parseFloat(number));
}

function getTag(tag) {
  if (tag == null) {
    return tag === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(tag);
}

function isString(string) {
  return typeof string === "string";
}

function isNumber(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  if (isSymbol(number)) {
    return false;
  }

  return typeCheck ? Number(number) === number : isNumeric(number);
}

function isSymbol(sym) {
  var type = typeof sym;
  return type == 'symbol' || type === 'object' && sym != null && getTag(sym) == '[object Symbol]';
}

function isArray(array) {
  return !isNil(array) && array.constructor === Array;
}

function isObject(object) {
  return object !== null && typeof object === "object" && !isArray(object);
}

function isNil(nil) {
  return nil == null;
}

function isPositive(number, typeCheck) {
  if (typeCheck === void 0) {
    typeCheck = true;
  }

  return isNumber(number, typeCheck) && number > 0 ? true : false;
}

function convert(url, options) {
    if (!isString(url)) {
        return false;
    }
    let separator = '-';
    let maxLength = 80;
    let seo = true;
    if (options && isObject(options)) {
        separator = (options.separator && isString(options.separator)) ? options.separator : separator;
        maxLength = (options.maxLength && isPositive(options.maxLength)) ? options.maxLength : maxLength;
        seo = (options.seo && !options.seo) ? false : seo;
    }
    const map = {
        a: /á|à|ã|â|ª/,
        d: /đ|∂/,
        e: /é|è|ê/,
        i: /í|ì|î|ï/,
        o: /ó|ò|ô|õ/,
        u: /ú|ù|û|ü/,
        y: /ÿ|ý|ŷ/,
        c: /ç/,
        n: /ñ/,
        ss: /ß/,
        ae: /æ/,
        ' copyright ': /©/,
        ' trademark ': /®/,
        ' at ': /@/,
        ' equal ': /=/,
        ' percent ': /%/,
        ' ampersand ': /&/,
        ' sharp ': /#/,
        ' dollar ': /\$/,
        ' and ': /&/,
        ' less ': /</,
        ' greater ': />/,
        ' or ': /\|/,
        ' cent ': /¢/,
        ' pound ': /£/,
        ' currency ': /¤/,
        ' yen ': /¥|円/,
        ' ecu ': /₠/,
        ' cruzeiro ': /₢/,
        ' french franc ': /₣/,
        ' lira ': /₤/,
        ' mill ': /₥/,
        ' naira ': /₦/,
        ' peseta ': /₧/,
        ' rupee ': /₨/,
        ' won ': /₩/,
        ' new shequel ': /₪/,
        ' dong ': /₫/,
        ' euro ': /€/,
        ' kip ': /₭/,
        ' tugrik ': /₮/,
        ' drachma ': /₯/,
        ' penny ': /₰/,
        ' peso ': /₱/,
        ' guarani ': /₲/,
        ' austral ': /₳/,
        ' hryvnia ': /₴/,
        ' cedi ': /₵/,
        ' kazakhstani-tenge ': /₸/,
        ' indian rupee ': /₹/,
        ' turkish lira ': /₺/,
        ' russian ruble ': /₽/,
        ' bitcoin ': /₿/,
        ' sm ': /℠/,
        ' tm ': /™/,
        ' delta ': /∆/,
        ' sum ': /∑/,
        ' infinity ': /∞/,
        ' love ': /♥/,
        ' yuan ': /元/,
        ' rial ': /﷼/,
        [separator]: / |-|_|\/|\\|`|:|\.|;|,|\?|§|\(|\)|{|}|°|\!|\/|"|\+|\*/
    };
    url = url.trim().toLowerCase();
    if (seo) {
        const seoMap = {
            [separator]: / (the|on|and|is|of|you) /
        };
        url = url.replace(new RegExp(seoMap[separator], 'g'), separator);
    }
    for (let pattern in map) {
        if (map.hasOwnProperty(pattern)) {
            url = url.replace(new RegExp(map[pattern], 'g'), pattern).trim();
        }
    }
    url = url.replace(new RegExp(`${separator}+(?=)`, 'g'), separator).trim().substring(0, maxLength);
    return url;
}

exports.convert = convert;
