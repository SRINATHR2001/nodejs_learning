// const eventemitter = require('node:events');\
import {EventEmitter} from 'node:events';

const event=new EventEmitter();

event.on('message',(message)=>{
    event.emit('inside',message);
});
event.on('inside',(x)=>{
    console.log(x);
});
event.emit('message','Hello World');
event.removeListener("inside",(x)=>{
    console.log(x);
})
