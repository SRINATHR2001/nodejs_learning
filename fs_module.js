const fs=require("node:fs");

//
//* always the sync methods 1st complete then the async methods will complete

//! file write
fs.writeFile('example.txt', ' async1',{flag: "a"},(err)=>{console.log(err)});
fs.writeFileSync('example.txt', ' sync1',{flag: "a"});

//!file read
fs.readFile('example1.txt','utf-8',(err,data)=>{console.log(data);});
console.log(fs.readFileSync('example2.txt',"utf-8"));

//!file exists
fs.access("./mytxt.txt",(err)=>{
    console.log(err);
    });
console.log(fs.existsSync("./mytxt.txt"));

//!file delete
fs.unlinkSync("./example2.txt");
fs.unlink("./example2.txt",(err)=>{
    console.log(err);
});