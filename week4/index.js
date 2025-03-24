// node file name
//console.log(10);

//modules >> files >> functions
// const sum = require('./test.js');
// const summation = sum(10,20);
// console.log(summation);

//types of modules
//1. builtin / core module  >> module installed with nodeJs
//2. custom module / local / user defined >> module created by user
//3. third party module >> module created by someone else and available on npm (node package manager)

// =================== 1. Builtin module ===================
// =================== 1.1 events ===================
// const EventEmitter = require("events");
// const event = new EventEmitter(); //object of EventEmitter class(instance of the class)
// // object >> {key:value} >> momken el value ykon function
// event.on("anaGebtEl7aga", (data) => {
//     // the on (handle the event) should be before the emit (trigger the event)
//     console.log(data);
// }); //listen to the event(handle the event)
// event.emit("anaGebtEl7aga", "el2akl"); //trigger the event

// let products = [
//     { name: "iphone13", quantity: 3 },
//     { name: "samsung10s", quantity: 4 },
//     { name: "xiaomi10", quantity: 5 },
// ];
// let stock = [];
// event.on("addProduct", (data) => {
//     console.log(data);
//     stock.push({ name: data.name, quantity: data.quantity });
//     //console.log(stock);
// });
// event.on("addProduct", () => {
//     console.log(stock);
// });
// for (const product of products) {
//     event.emit("addProduct", product);
// }
//===================== 1.2 fs (file system) ===================
//const fs = require("fs");
//===================== 1.2.1 read file ===================
//1-readFile
// fs.readFile('./text.txt','utf-8',(error,data)=>{
//     console.log(data); //data is the content of the file
// })

// fs.readFile('./text1.txt','utf-8',(error,data)=>{
//     console.log(data); //undefined (mafeesh file esmo text1.txt)
//     console.log(error.message);
// })

// fs.readFile('./text1.txt','utf-8',(error,data)=>{
//     // if(error){
//     //     console.log(error.message);
//     //     return;    // stop the code // momken a3ml return w momken else
//     // }
//     error && console.log(error.message); // if error is true print the message  // if error is false do nothing
//     data && console.log(data);
// })

//2-readFileSync
// try {
//     const data = fs.readFileSync("./text.txt", "utf-8"); // don't take callback function //bloc >> blocking code (stop the code until the file is read) // return string
//     //const data = fs.readFileSync("./text1.txt", "utf-8"); // don't take callback function //bloc >> blocking code (stop the code until the file is read) // return string
//     console.log(data); //data is the content of the file
// } catch (error) {
//     console.log(error.message);
// }
//===================== 1.2.2 write file ===================
//1-writeFile or create & write
// fs.writeFile('./text.txt','hello world',(error)=>{
//     //overwrite the content of the file
//     // if the file is exist it will overwrite the content of the file and remove the old content
//     // // if the file is not exist it will create it
//     error && console.log(error.message);
// })
// to solve the problem of overwriting the content of the file
//data = read the file after
// data += 'hello world';
// then write the file

// fs.writeFile('./text2.txt','',(error)=>{ //create empty file
//     error && console.log(error.message);
// })

//2-writeFileSync or create & write
// try {
//     // fs.writeFileSync('./text.txt','hello world1'); //overwrite the content of the file
// } catch (error) {
//     console.log(error.message);
// }

// try {
//     // fs.writeFileSync('./text1.txt','hello world1'); //create the file and write the content
// } catch (error) {
//     console.log(error.message);
// }

// try {
//     fs.writeFileSync('./newFolder/text1.txt','hello world1'); // error >> create file not folder
// } catch (error) {
//     console.log(error.message);
// }
//===================== 1.2.3 update file ===================
//1-appendFile
// fs.appendFile('./text.txt',' hello world2',(error)=>{
//     error && console.log(error.message);
// })
//2-appendFileSync
// try {
//     fs.appendFileSync('./text.txt',' hello world3'); // append the content to the file
// } catch (error) {
//     console.log(error.message);
// }
//===================== 1.2.4 delete file ===================
// 1-unlink
// fs.unlink('./text2.txt', (error) => {
//     error && console.log(error.message);
// })
// 2-unlinkSync
// try {
//     fs.unlinkSync('./text1.txt'); // return void
// } catch (error) {
//     console.log(error.message);
// }

//===================== how to create folder ===================
//1-mkdir
// fs.mkdir('./newFolder', (error) => {
//     error && console.log(error.message);
// });
// fs.mkdir('./newFolder2/newFolder3',{recursive:true}, (error) => {
//     //recursive >> create the folder and the parent folder if not exist
//     error && console.log(error.message);
// });
//2-mkdirSync
// try {
//     fs.mkdirSync('./newFolder3/newFolder4',{recursive:true}); // return void
// } catch (error) {
//     console.log(error.message);
// }

//===================== path ===================
//fs.mkdirSync('./newFolder/newFolder4/mazen/shoura',{recursive:true});
//'./basmala/text/node.txt' >> path basename dir
//const path = require("path");
// console.log(path.basename('./basmala/text/node.txt')); //node.txt
// console.log(path.dirname('./basmala/text/node.txt')); //./basmala/text
// console.log(path.extname('./basmala/text/node.txt')); //.txt
//console.log(path.parse('./basmala/text/node.txt')); //{ root: '', dir: './basmala/text', base: 'node.txt', ext: '.txt', name: 'node' }
// console.log(path.format({
//     root: '',
//     dir: './basmala/text',
//     base: 'node.txt',
//     ext: '.txt',
//     name: 'node'
// }));
//====================== resolve =======================
// resolve >> absolute path >> integrate paths
// absolute path >> start with the root directory >> //C:\Users\Dell\.vscode\JSCourse\text.txt
// relative path >> start with the current directory >> ./text.txt
//console.log(path.resolve(...['.','./text.txt'])); //C:\Users\Dell\.vscode\JSCourse\text.txt
//console.log(path.resolve('.','./text.txt')); //C:\Users\Dell\.vscode\JSCourse\text.txt
//console.log(path.resolve('./basmala/text/node.txt'));
// console.log(__dirname); //current directory  >> C:\Users\Dell\.vscode\JSCourse\week4
// console.log(__filename); //current file path  >> C:\Users\Dell\.vscode\JSCourse\week4\index.js

//======================== join ========================
//console.log(path.join(__dirname, "./text.txt")); // C:\Users\Dell\.vscode\JSCourse\week4\text.txt

//============================== fs/promises ===============================
// function return promise
// can do on it then and catch or async and await
//const fsPromises = require('fs/promises');
//============================== read file ===============================
// fsPromises.readFile('C:/Users/Dell/.vscode/JSCourse/week4/text.txt', 'utf-8').then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error.message);
// });

// async function read() {
//     try {
//         const data = await fsPromises.readFile('C:/Users/Dell/.vscode/JSCourse/week4/text.txt', 'utf-8')
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// read();
//============================== write file ===============================
//fsPromises.writeFile('./text.txt', 'hello node')
