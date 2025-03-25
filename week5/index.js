//=============================== stream =========================
// stream is a collection of data that might not be available all at once and doesn't have to fit entirely in memory.
// sending data in chunks(parts)(like a stream of water) instead of all at once.
// any builtin module can call it as ('node:module_name') or ('module_name only').
const fs = require("node:fs"); // const fs = require('fs');
const EventEmitter = require("events"); // const EventEmitter = require('node:events');
const path = require("node:path"); // const path = require('path');
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
//const writeStream = fs.createWriteStream(path.join(__dirname,'./data.txt'));
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk); // write the data to the file.
// });
// problem >> backpressure >> when the writeStream is slower than the readStream.
//readStream.pipe(writeStream); // pipe() method is used to read the data from the readStream and write it to the writeStream.

// const readStream = fs.createReadStream(path.join(__dirname,'./text.txt'),{
//     //highWaterMark: 64*1024 // 64kb >> default value of highWaterMark.
//     //highWaterMark: 2,
//     //highWaterMark: 2 * 1024,//bytes >> 2kb
//     encoding: 'utf-8',
//     start:2,
//     end: 9,
//     //autoClose: false, // default true.
//     //emitClose: false, // default true.
// });
// createReadStream >> read 64kb
// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     //writeStream.write(chunk);
//     console.log('==================================================');
//     console.log('==================================================');
// });

//============================================================================
//=================================== http ===================================
// http is a module that provides the ability to create http servers and clients.
const http = require("node:http");
const app = http.createServer((req, res /** 2 positional parameter */) => {
    //console.log(req);
    // req >> request >> object {keys:values} >> event // readStream // any events can be emitted on it.
    // any request from the browser is a get request.
    // res >> response >> object {keys:values} // writeStream
    // console.log(req.url); // url >> localHost:port/url >> property of the req object >> the url of the request.
    // console.log(req.method); // method >> property of the req object >> the method of the request.
    // res.write('hello from backend');
    // res.end(); // end the response.
    // const readStream = fs.createReadStream(path.join(__dirname,'./text.txt'));
    // readStream.on('data',(chunk)=>{
    //     res.write(chunk);
    // });
    // readStream.on('end',()=>{
    //     res.end();
    // });
    // res.write('hi');
    // res.end();
    // res.end('hi');
    //res.writeHead(200, "OK", { "Content-Type": "text/plain" }); // write the header of the response.(statusCode,statusMessage,content-type)
    // const readStream = fs.createReadStream(path.join(__dirname, "./index.html"));
    // res.writeHead(200, "OK", { "Content-Type": "text/html" }); // write the header of the response.(statusCode,statusMessage,content-type)
    // readStream.on("data", (chunk) => {
    //     res.write(chunk);
    // });
    // readStream.on("end", () => {
    //     res.end();
    // });
    //============== routing
    const { url, method } = req;
    if (url == "/" && method == "GET") {
        // res.write("hello from home");
        // res.end();
        return res.end("hello from home"); // because you send one message
    } else if (url == "/signup" && method == "GET") {
        // res.write("hello from signup");
        // res.end();
        res.end("hello from signup");
        return;
    } else if (url == "/login" && method == "GET") {
        // res.write("hello from login");
        // res.end();
        res.end("hello from login");
        return;
    } else {
        // res.write("404 not found");
        // res.end();
        return res.end("404 not found");
    }
});
// app >> object >> instance of server >> have keys:values >> value may be function >> instance of class (EventEmitter) >> can do on it all events (on , emit , .....).
//app.listen(3000)// 3000 >> port number >> the port number that the app will run on it. // listen() method is used to listen for incoming requests.
const port = 3000;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
// ip ? 127.0.0.1 >> localhost >> the ip address of the server.
// ip ? 127.0.0.1:3000 >> localhost:port >> domain
// url >> protocol://domain >> ip:port
// http:// >> protocol
// http://localhost:3000/ >> the url of the server.
// http://127.0.0.1:3000/ >> the url of the server.
app.on("error", (error) => {
    console.log(error.message);
});
// ctrl + s >> save the file. >> restart the server.
// ctrl + c >> stop the server. >> leave the terminal.(terminate the process).
// node --watch file_name >> watch the file and run it when the file is changed. >> run the file automatically when the file is changed
