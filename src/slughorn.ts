import { isPositive, isString, isObject } from "@dwtechs/checkhard";
import { Options } from './interfaces';

function convert(url: string, options?: Options): string|false {
  
  if (!isString(url)) {
    return false;
  }

  // Default options
  let separator = '-';
  let maxLength = 80;
  let seo       = true;

  // User options if provided
  if (options && isObject(options)) {
    separator = (options.separator && isString(options.separator)) ? options.separator : separator;
    maxLength = (options.maxLength && isPositive(options.maxLength)) ? options.maxLength : maxLength;
    seo       = (options.seo && !options.seo) ? false : seo;
  }
  
  const map = {
    a : /á|à|ã|â|ª/, // |À|Á|Ã|Â|/,
    d : /đ|∂/, // |Đ/,
    e : /é|è|ê/, // |É|È|Ê/,
    i : /í|ì|î|ï/, // |Í|Ì|Î|Ï/,
    o : /ó|ò|ô|õ/, // |Ó|Ò|Ô|Õ|º/,
    u : /ú|ù|û|ü/, // |Ú|Ù|Û|Ü/,
    y : /ÿ|ý|ŷ/, // |Ý|Ŷ|Ÿ/,
    c : /ç/, // |Ç/,
    n : /ñ/, // |Ñ/,
    ss : /ß/,
    ae : /æ/,
    ' copyright ' : /©/,
    ' trademark ' : /®/,
    ' at ' : /@/,
    ' equal ' : /=/,
    ' percent ' : /%/,
    ' ampersand ' : /&/,
    ' sharp ' : /#/,
    ' dollar ' : /\$/,
    ' and ' : /&/,
    ' less ' : /</,
    ' greater ' : />/,
    ' or ' : /\|/,
    ' cent ' : /¢/,
    ' pound ' : /£/,
    ' currency ' : /¤/,
    ' yen ' : /¥|円/,
    ' ecu ' : /₠/,
    ' cruzeiro ' : /₢/,
    ' french franc ' : /₣/,
    ' lira ' : /₤/,
    ' mill ' : /₥/,
    ' naira ' : /₦/,
    ' peseta ' : /₧/,
    ' rupee ' : /₨/,
    ' won ' : /₩/,
    ' new shequel ' :/₪/,
    ' dong ' : /₫/,
    ' euro ' : /€/,
    ' kip ' : /₭/,
    ' tugrik ' : /₮/,
    ' drachma ' : /₯/,
    ' penny ' : /₰/,
    ' peso ' : /₱/,
    ' guarani ' : /₲/,
    ' austral ' : /₳/,
    ' hryvnia ' : /₴/,
    ' cedi ' : /₵/,
    ' kazakhstani-tenge ' : /₸/,
    ' indian rupee ' : /₹/,
    ' turkish lira ' : /₺/,
    ' russian ruble ' : /₽/,
    ' bitcoin ' : /₿/,
    ' sm ' : /℠/,
    ' tm ' : /™/,
    ' delta ' : /∆/,
    ' sum ' : /∑/,
    ' infinity ' : /∞/,
    ' love ' : /♥/,
    ' yuan ' : /元/,
    ' rial ' : /﷼/,
    [separator] : / |-|_|\/|\\|`|:|\.|;|,|\?|§|\(|\)|{|}|°|\!|\/|"|\+|\*/ 
  };
  
  // conversion starts
  url = url.trim().toLowerCase();
  if (seo) {
    const seoMap = {
      [separator] : /the|on|and|is|of|you/
    };
    url = url.replace(new RegExp(seoMap[separator], 'g'), separator);
  }
  for (let pattern in map) {
    if(map.hasOwnProperty(pattern)) {
      url = url.replace(new RegExp(map[pattern], 'g'), pattern).trim();
    }
  };
  // remove double separators
  url = url.replace(new RegExp(`${separator}+(?=)`, 'g'), separator).trim().substring(0,maxLength);
  
  // console.log(url);
  return url;
}

export {
  convert
};