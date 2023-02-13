const http=require("node:http");
const url=require('url');

// const server=http.createServer((req,res)=>{
//     const superhero={
//         first_name:'superman',
//         last_name:'batman'
//     };
//     res.writeHead(200,{
//         'Content-Type':'application/json'
//     })
//     res.end(JSON.stringify(superhero));
// })




const server=http.createServer((req,res)=>{
    const student={
        name:'hemanth',
        age:'21'
    };
    res.writeHead(200,{
        'content-type':'application/json'
    })
    res.end(JSON.stringify(student));
})

server.listen(8000,()=>{
    console.log('server has started');
})