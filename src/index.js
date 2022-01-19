const fs = require("fs/promises");
const xtpl = require('xtpl');
const thunkify = require('thunkify');
const path = require('path');

const node = require('../test/data')
const prettier = require('prettier');

const traverse = require('./traverse')
const generate = require('./generate')
const visitors = require('./visitors')

const prettierOpt = {
  parser: 'babel',
  printWidth: 120,
  singleQuote: true
};

const cssPrettierOpt = {
  parser: 'css',
  printWidth: 100,
};
traverse(node, visitors);

const targetPath = path.resolve('./target.json')

fs.writeFile(targetPath, JSON.stringify(node, null, 4))

const { code, styles } = generate(node)

fs.writeFile('./code.js', prettier.format(code, prettierOpt))
fs.writeFile('./style.css', prettier.format(styles, cssPrettierOpt))
