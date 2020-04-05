var fs = require("fs")
var path = require('path')
function getFiles(url, ext) {
    fs.readdir(url,function(err, files){   
        if (err) {
                return console.error(err);
        }
        files.forEach( function (file){
            fs.stat(url+file, (err, stats) => {
                if(stats.isFile()) {
                    if(path.extname(url+file) === ext) {
                        console.log( path.basename(file, ext)  )
                    }
                } else if(stats.isDirectory()) {
                    getFile(url+file+'/', ext)
                }
            })
                
        })
    })
}

getFiles('./', '.js')