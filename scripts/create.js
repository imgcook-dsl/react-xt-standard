// const indexTemplate = require('../templates/page.index.template')
// const pcTemplate = require('../templates/page.index.template')
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const parse = require('../src/old_index.js');
=======
const parse = require('../src/index');
>>>>>>> d543d68c8c1fbab9143864f416ce04b394889fe2
const data = require('../test/data');
const download = require('../download')
const config = require('../config')
const chalk = require('chalk')

const targetPath = config.targetPath
const options = config.options

const files = parse(data, options)

console.log(chalk.red('如果要下载图片到文件，把download注释打开'))
console.log(chalk.green('生成代码宽度', options.responsive.width))
console.log(chalk.green('图片生成路径', targetPath))

files.panelDisplay.forEach((file) => {
  const downloadFiles = Array.isArray(file.panelResources.imports) ? file.panelResources.imports.map((imp, index) => {
    const regex = /\'.+\'/
    const url = imp.match(regex)[0].slice(1,-1)
    const arr = url.split('/')
    const fileName = arr[arr.length-1]
    return {
      fileName,
      url,
    }
  }) : undefined
  downloadFiles && download(downloadFiles, targetPath)

  fs.writeFileSync(path.join(__dirname, `../code/${file.panelName}`), file.panelValue);
})
