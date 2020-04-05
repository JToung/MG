var fs = require("fs");
var Opath = require('path')
function getJsonFiles(jsonPath) {
  let num = 0; 
  function findJsonFile(path) {
    let files = fs.readdirSync(path);
    files.forEach(function (item, index) {
      let fPath = Opath.join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      //判断
      if(Opath.extname(fPath) === ".js"){
          //遍历个数
          num += 1;
      }
      console.log(Opath.extname(fPath))
    });
  }
  findJsonFile(jsonPath);
  
  console.log(num);
}

getJsonFiles("test");
