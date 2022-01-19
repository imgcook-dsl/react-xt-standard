const fs = require("fs");
const path = require("path");
const request = require("request");

const download = (url, targetPath, fileName) => {
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
    // console.log("文件夹创建成功");
  } else {
    // console.log("文件夹已存在");
  }
  const generatePath = path.join(targetPath, fileName)
  let stream = fs.createWriteStream(generatePath);
  request(url).pipe(stream).on("close", function (err) {
    // console.log("文件[" + fileName + "]下载到" + generatePath);
  });
}

module.exports = download