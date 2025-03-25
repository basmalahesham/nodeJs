//=================== stream ===================
// stream is a collection of data that might not be available all at once and doesn't have to fit entirely in memory.
// sending data in chunks(parts)(like a stream of water) instead of all at once.
const fs = require('node:fs'); // const fs = require('fs');
const EventEmitter = require('events'); // const EventEmitter = require('node:events');
const path = require('node:path'); // const path = require('path');
// createReadStream() method is used to read data from a file as a stream of data.
//const readStream = fs.createReadStream(path.resolve('.','./text.txt'));
//const readStream = fs.createReadStream(path.join(__dirname,'./text.txt'),'utf-8');
// readStream >> object >> have keys:values >> value may be function >> instance of class (EventEmitter)
//console.log(readStream instanceof EventEmitter); // true

// readStream.on() >> method >> used to listen for events on the stream.
// readStream.emit() >> method >> used to trigger events on the stream.
// createReadStream make the implementation of all events(emit) and we just listen to them.
// open >> event >> emitted when the file is opened.
// readStream.on('open',()=>{  // callback function executed when the high order function is execute and it execute when the event is emitted.
//     console.log('The file is opened');
// });
// // ready >> event >> emitted when the stream is ready to read.
// readStream.on('ready',()=>{
//     console.log('The file is ready');
// });
// // data >> event >> emitted when the stream is passing data.
// readStream.on('data',(chunk)=>{
//     console.log(chunk);  // chunk is a part of data.
//     if(1){
//         readStream.pause(); // method >> pause the stream.
//         setTimeout(()=>{
//             readStream.resume(); // method >> resume the stream.
//         },2000);
//     }
// });
// // end >> event >> emitted when the stream is ended.
// readStream.on('end',()=>{
//     console.log('The file is ended');
// });
// // close >> event >> emitted when the stream is closed.
// readStream.on('close',()=>{
//     console.log('The file is closed');
// });
// // error >> event >> emitted when error happens.
// readStream.on('error',(error)=>{ // 2 event emit here error & close because he was try to open the file 
//     console.log(error.message);
// });
// // pause >> event >> emitted when the stream is paused.
// readStream.on('pause',()=>{
//     console.log('The file is paused');
// });
// // resume >> event >> emitted when the stream is resumed.
// readStream.on('resume',()=>{  // emit in the first time before open emit & when the file is paused and then resumed.
//     console.log('The file is resumed');
// });
// readable >> event >> emitted when the file is readable.
// readStream.on('readable',()=>{
//     this.read();
// });
// destroy() >> method >> used to destroy the stream. // stop the stream.
//readStream.destroy(); // emit close , close & error
//readStream.destroy(new Error('something wrong')); // emit close , close & error

//===================== createWriteStream() =====================
// createWriteStream() method is used to write data to a file as a stream of data.
const writeStream = fs.createWriteStream(path.join(__dirname,'./data.txt'));
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk); // write the data to the file.
// });
// problem >> backpressure >> when the writeStream is slower than the readStream.
//readStream.pipe(writeStream); // pipe() method is used to read the data from the readStream and write it to the writeStream.

const readStream = fs.createReadStream(path.join(__dirname,'./text.txt'),{
    //highWaterMark: 64*1024 // 64kb >> default value of highWaterMark.
    //highWaterMark: 2,
    //highWaterMark: 2 * 1024,//bytes >> 2kb
    encoding: 'utf-8',
    start:2,
    end: 9,
    //autoClose: false, // default true.
    //emitClose: false, // default true.
});
// createReadStream >> read 64kb
readStream.on('data',(chunk)=>{
    console.log(chunk);
    //writeStream.write(chunk);
    console.log('==================================================');
    console.log('==================================================');
});