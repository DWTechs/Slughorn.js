// const path = require('path');
const fs      = require('fs');

const mail    = 'https://github.com/DWTechs/Slughorn.js';
const CRLF    = '\r\n';
const rel     = './';
const src     = `${rel}build/`;
const dest    = `${rel}dist/`; 
const files   = [
  {
    src:  `${rel}src/slughorn.d.ts`,
    dest: `${dest}slughorn.d.ts`
  },
  {
    src:  `${src}slughorn.iife.js`,
    dest: `${dest}slughorn.iife.js`
  },
  {
    src:  `${src}slughorn.iife.min.js`,
    dest: `${dest}slughorn.iife.min.js`
  },
  {
    src:  `${src}slughorn.cjs.js`,
    dest: `${dest}slughorn.cjs.js`
  },
  {
    src:  `${src}slughorn.js`,
    dest: `${dest}slughorn.js`
  },
];

fs.mkdir(dest, { recursive: false },(err) => {
  if (err) throw err;
  fs.readFile(`${rel}LICENSE`, (err, license) => {
    if (err) throw err;
    for (let file of files) {
      fs.readFile(file.src, (err, fileContent) => {
        if (err) throw err;
        fs.writeFile(file.dest, `/*${CRLF}${license}${CRLF}${mail}${CRLF}*/${CRLF}${CRLF}${fileContent}`, (err) => {
          if (err) throw err;
        });
      });
    }
  });
});