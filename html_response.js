const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'text/html'
    })
    const html=fs.readFileSync('./index.html','utf-8');
    // res.end('<h1>hello hemanth</h1>')
    res.end(html);
})

server.listen(8000,()=>{
    console.log('html server is started');
})