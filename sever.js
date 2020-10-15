 
const { promises } = require('dns');
var http = require('http')
var fs = require('fs').promises




http.createServer((req,res)=>{

fs.readFile('index.html')
    .then(x=>{//load index.html
        res.setHeader("Content-Type","text/html");
        res.writeHead(200)
        res.end(x)
    })


    .catch(err=>{
        //load not found page! 
        fs.readFile('404.html')
        .then(er=>{        
            res.setHeader("Content-Type","text/html");
            res.writeHead(500)
            res.end(er)
            })
    })

}).listen(8000)