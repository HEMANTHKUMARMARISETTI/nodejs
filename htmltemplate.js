const http = require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const name='hemanth';
    res.writeHead(200,{
        'content-type':'text/html'
    })
    let html=fs.readFileSync('./index.html','utf-8');
    html =html.replace('((content))',name);
    res.end(html);
})

server.listen(8080,()=>{
    console.log('server has started');
})