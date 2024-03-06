const http=require('node:http');
const fs=require('fs');
let server = http.createServer((req,res)=>{
    let obj={
        name:"srinath",
        age:25
    }
    res.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream("./example.html").pipe(res);
///////////////////////////////////////////////////////////////////////////////////
    // res.writeHead(200,{'Content-Type':'application/json'});
    // res.end(JSON.stringify(obj));//* runs without error
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end(obj); //!TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received an instance of Object
    ///////////////////////////////////////////////////////////////////////////////
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end('Hello World\n');
});
server.listen(3000,()=>{
    console.log("server listening on port 3000");
});