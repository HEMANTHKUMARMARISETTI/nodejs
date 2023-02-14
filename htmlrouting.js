const http = require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // res.end(req.url);

    if(req.url==='/'){
        res.writeHead(200,{
            'content-type':'text/plain'
        })
        res.end('this is home page');
    }else if(req.url==='/about'){
        res.writeHead(200,{
            'content-type':'text/plain'
        })
        res.end('this is about page');
    }else if(req.url==='/contact'){
        res.writeHead(200,{
            'content-type':'text/plain'
        })
        res.end('this is contact page');
    }
    else if(req.url==='/api'){
        res.writeHead(200,{
            'content-type':'application/json'
        })
        res.end(JSON.stringify({
            firstname:'hemanth',
            lastname:'kumar'
        }));
    }
    else{
        res.writeHead(404)
        res.end('error 404 not found');
    }
})

server.listen(8080,()=>{
    console.log('server has started');
})