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

import { isString, isNumber, isPositive } from '@dwtechs/checkhard';

function convert(url, options) {
  var _map;

  if (!isString(url) && !isNumber(url)) {
    return url;
  }

  var separator = options && options.separator && isString(options.separator) ? options.separator : '-';
  var maxLength = options && options.maxLength && isPositive(options.maxLength) ? options.maxLength : 80;
  var seo = options && options.seo && !options.seo ? false : true;
  var map = (_map = {
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
    ' rial ': /﷼/
  }, _map[separator] = / |-|_|\/|\\|`|:|\.|;|,|\?|§|\(|\)|{|}|°|\!|\/|"|\+|\*/, _map);
  url = url.trim().toLowerCase();

  if (seo) {
    var _seoMap;

    var seoMap = (_seoMap = {}, _seoMap[separator] = /the|on|and|is|of|you/, _seoMap);
    url = url.replace(new RegExp(seoMap[separator], 'g'), separator);
  }

  for (var pattern in map) {
    if (map.hasOwnProperty(pattern)) {
      url = url.replace(new RegExp(map[pattern], 'g'), pattern).trim();
    }
  }
  url = url.replace(new RegExp(separator + "+(?=)", 'g'), separator).trim().substring(0, maxLength);
  return url;
}

export { convert };
