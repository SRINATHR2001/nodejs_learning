const fs=require("fs");
//? default buffer size is 64 kb
const readstream=fs.createReadStream("./file1.txt",{
    encoding:"utf-8",
    highWaterMark:2 //? controls the byte size of buffer
});
const writestream=fs.createWriteStream("./file2.txt");
readstream.on("data",(chunk)=>{
    console.log(chunk);
    writestream.write(chunk);
});
