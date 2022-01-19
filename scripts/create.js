const fs = require("fs/promises");
const path = require('path');

const download = require('../download')
const config = require('../config')
const chalk = require('chalk')

const node = require('../test/data')
const prettier = require('prettier');

const traverse = require('../src/traverse')
const generate = require('../src/generate')
const { visitors0, visitors1 } = require('../src/visitors')

const prettierOpt = {
  parser: 'babel',
  printWidth: 120,
  singleQuote: true
};

const cssPrettierOpt = {
  parser: 'css',
  printWidth: 100,
};
traverse(node, visitors0);
console.log(config.targetPath, 123)
node.imports.forEach(({name, src}) => download(
  src,
  config.targetPath, // 项目图片路径
  // path.resolve(__dirname, '../assets'), // 本地测试路径
  `${name}.png`
))

traverse(node, visitors1);

fs.writeFile(path.resolve(__dirname, './target.json'), JSON.stringify(node, null, 4))

const { code, styles } = generate(node)

fs.writeFile(path.resolve(__dirname, './code.js'), prettier.format(code, prettierOpt))
// fs.writeFile(path.resolve(__dirname, './style.css'), prettier.format(styles, cssPrettierOpt))
