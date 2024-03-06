//? event loop propagation is in the order of 
//* nextTick > promises > timer > i/o(based upon I/O polling) > check > close
const fs=require("fs");
fs.readFile(__filename,()=>{
    console.log("readFile");
    setImmediate(()=>{
        console.log("setImmediate2");//? this setimmediate will be called after the I/O polling occurs and the I/O queue is completed
    });
});
let stream=fs.createReadStream(__filename);
stream.close();
stream.on("close",()=>{
    console.log("close");
    process.nextTick(()=>{
        console.log("nextTick inside close");
    });
});
process.nextTick(()=>{
    console.log("nextTick");
});
Promise.resolve().then(()=>{
    console.log("Promise");
});
setTimeout(()=>{
    console.log("setTimeout");
},0);
setImmediate(()=>{
    console.log("setImmediate1");//? this setimmediate will occur before fs even when the I/O is > than check but it occurs due to I/O polling;
});
