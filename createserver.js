const http=require('http');

const server=http.createServer((request,response)=>{
    console.log('server is running');
    response.end('hello world');
})

server.listen(8000, '127.0.0.1', () => {
       console.log('Server has started!');
    })